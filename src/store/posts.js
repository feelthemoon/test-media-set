import apiRequest from "@/api";
export default {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    RISE_POST_LIKES(state, id) {
      state.posts.find((post) => post.id === id).like++;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const response = await apiRequest();
        commit("SET_POSTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async likePost({ state, commit }, id) {
      try {
        const post = state.posts.find((p) => p.id === id);
        await apiRequest(id, "put", {
          ...post,
          like: post.like + 1,
        });
        commit("RISE_POST_LIKES", id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
