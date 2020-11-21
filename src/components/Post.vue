<template>
  <div class="post">
    <span class="post-author">
      <span class="post-author-info">
        <img src="author.avatarImageLink" alt="author.fullname">
        <small>{{ author.fullname }}</small>
      </span>
      <small>{{ createTime }}</small>
    </span>
    <div class="post=image">
      <video controls v-if="post.type == video" type="video/mp4" src="media.url">
      </video>
      <img v-if="post.type == image" src="media.url" alt="text">
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
import Author from '../classes/author'
import Media from '../classes/media'

export default {
  name: 'Post',
  props: {
    author: Author,
    createTime: String,
    media: Media,
    text: String,
    likes: String,
  }
}
</script>

<style>

</style>