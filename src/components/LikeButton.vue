<template>
  <button type="button" :class="{ like_button: true, like_button_liked: isLiked }"
   @click="isLiked = !isLiked">
      {{ likes }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false
    }
  },
  props: {
    likes: String,
  }
}
</script>

<style scoped>
.like_button {
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
.like_button_liked {
    background-color: #01579b;
}
span {
  color: red;
}
</style>