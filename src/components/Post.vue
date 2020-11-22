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
      <LikeButton :likes="likes"/>
    </div>
  </div>
</template>

<script>
import LikeButton from './LikeButton'

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
  components: { LikeButton },
  computed: {
    authorFullName() {
      return this.author.firstname + ' ' + this.author.lastname
    }
  }  
}
</script>

<style>
.like-button {
    background-image: url(../media/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}
</style>