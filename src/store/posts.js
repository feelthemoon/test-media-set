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
    REDUCE_POST_LIKES(state, id) {
      state.posts.find((post) => post.id === id).like--;
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
        const likedPosts =
          (localStorage.getItem("likedPosts") &&
            JSON.parse(localStorage.getItem("likedPosts"))) ||
          [];

        const post = state.posts.find((p) => p.id === id);

        if (!likedPosts.includes(id)) {
          await apiRequest(id, "put", {
            ...post,
            like: post.like + 1,
          });

          commit("RISE_POST_LIKES", id);
          likedPosts.push(id);
          localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
        } else {
          await apiRequest(id, "put", {
            ...post,
            like: post.like - 1,
          });

          commit("REDUCE_POST_LIKES", id);
          likedPosts.splice(
            likedPosts.findIndex((postId) => postId === id),
            1
          );
          localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
