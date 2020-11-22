<template>
<div>
  <Header/>
  <section class="main-container" v-if="postsAreLoaded">
    <Post
      v-for="fetchedPost in this.posts" :key="fetchedPost.id"
      :author="fetchedPost.author"
      :createTime="fetchedPost.createTime"
      :media="fetchedPost.media"
      :text="fetchedPost.text"
      :likes="fetchedPost.likes"
      />
  </section>
  <section class="main-container" v-else>POSTS ARE NOT LOADED</section>
</div>
</template>

<script>
import Header from './Header.vue'
import Post from './Post'

export default {
  name: 'MainPage',
  components: {
    Header,
    Post,
  },
  computed: {
    postsAreLoaded() {
      return this.posts !== undefined;
    },
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  mounted() { 
    this.$store.dispatch("fetchPosts");
  }
}
</script>

<style scoped>
</style>
