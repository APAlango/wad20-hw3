<template>
  <div class="post">
    <span class="post-author">
      <span class="post-author-info">
        <img :src="author.avatar" :alt="authorFullName">
        <small>{{ authorFullName }}</small>
      </span>
      <small>{{ createTime }}</small>
    </span>
    <div v-if="media !== null" class="post-image">
      <video controls v-if="media.type == 'video'" type="video/mp4" :src="media.url"></video>
      <img v-else-if="media.type == 'image'" :src="media.url" alt="text">
    </div>
    <div class="post-title">
      <h3>{{ text }}</h3>
    </div>
    <div class="post-actions">
      <button type="button" class="like-button">{{ likes }}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Post',
  props: {
    author: {
      firstname: String,
      lastname: String,
      avatar: String,
    },
    createTime: String,
    media: Object,
    text: String,
    likes: String,
  },
  computed: {
    authorFullName() {
      return this.author.firstname + ' ' + this.author.lastname
    }
  }  
}
</script>

<style>

</style>