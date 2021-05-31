<template>
  <div class="post">
    <div class="post__img">
      <img :src="postImg" alt="post image" />
      <div class="post__tag">#{{ post.tag }}</div>
    </div>
    <div class="post__main">
      <div class="post__title">
        {{ post.name }}
      </div>
      <div class="post__text">
        {{ post.description }}
      </div>
    </div>
    <div class="post__footer">
      <div class="post__date">{{ post.date }}</div>
      <button class="post__likes" @click="changeLikesCount(post.id)">
        <img src="@/assets/img/like.svg" alt="" />
        <span class="post__likes-count">{{ post.like }}</span>
      </button>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("posts");

export default {
  props: {
    post: Object,
  },
  computed: {
    postImg() {
      return require(`@/assets/img/${this.post.image}.jpg`);
    },
  },
  methods: {
    ...mapActions(["likePost"]),
    async changeLikesCount(id) {
      try {
        await this.likePost(id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.post {
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  max-width: 450px;
  margin: 10px;
  &__img {
    position: relative;
    img {
      width: 100%;
    }
  }
  &__tag {
    position: absolute;
    background: rgba(141, 190, 80, 0.5);
    border-radius: 4px;
    bottom: 10px;
    left: 8px;
    padding: 7px 10px 4px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
    color: #fff;
  }
  &__main {
    margin: 0 8px;
  }
  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin: 21px 0 28px;
  }
  &__text {
    font-size: 15px;
    line-height: 22px;
    color: #666565;
    margin-bottom: 25px;
  }
  &__footer {
    display: flex;
    margin: 0 8px;
    justify-content: space-between;
  }
  &__date {
    font-style: italic;
    font-size: 13px;
    line-height: 22px;
    color: #909599;
  }
  &__likes {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: transparent;
    img {
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:active {
      img {
        transform: scale(1.5);
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
    &-count {
      font-size: 12px;
      line-height: 22px;
      text-align: right;
      color: #909599;
      margin-left: 6px;
    }
  }
}
</style>