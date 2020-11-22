<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/"><img src="../media/logo.png" alt="postIt"></router-link>
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container" v-if="userIsLoaded">
        <img class="avatar" :src="user.avatar" @click="toggleDropDownMenu">
        <div v-show="!dropDownMenuIsHidden" class="drop-down-container">
          <span id="user-name">{{username}}</span>
          <span id="user-email">{{user.email}}</span>
          <span class="separator"></span>
          <span>
            <router-link to="/browse">Browse</router-link>
          </span>
          <span class="separator"></span>
          <span>
            <router-link to="/login">Log Out</router-link>
          </span>
        </div>
      </div>
      <div class="avatar-container" v-else>Axios loading...</div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Header',
    data: function () {
      return {
        dropDownMenuIsHidden: true,
      }
    },
    methods: {
      toggleDropDownMenu: function () {
        this.dropDownMenuIsHidden = !this.dropDownMenuIsHidden;
      }
    },
    computed: {
      userIsLoaded() {
        return this.user !== undefined;
      },
      user() {
        return this.$store.getters.getUser;
      },
      username() {
        return this.user.firstname + " " + this.user.lastname;
      }
    },
    mounted() {
      this.$store.dispatch("fetchUser");
    }
}
</script>

<style>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}
.drop-down-container {
    position: absolute;
    min-width: 150px;
    height: auto;
    background-color: #ffffff;
    padding: 10px;
    right: 0;
    top: 50px;
    text-align: left;
}
.drop-down-container span{
    display: block;
}
.drop-down-container span.separator{
    border-bottom: 1px solid #d7d7d7;
    margin: 10px -10px;
}
</style>