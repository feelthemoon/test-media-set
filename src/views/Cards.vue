<template>
  <section class="posts">
    <card-item v-for="post in posts" :key="post.id" :post="post"></card-item>
  </section>
</template>
<script>
import CardItem from "@/components/CardItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("posts");
export default {
  components: {
    CardItem,
  },
  async created() {
    await this.getPosts();
  },
  computed: {
    ...mapState({ posts: (state) => state.posts }),
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
};
</script>
<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  max-width: 100%;
  @media (max-width: 985px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>