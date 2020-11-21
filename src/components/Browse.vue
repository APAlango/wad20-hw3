<template>
  <div>
    <Header/>
    <section class="main-container">
      <div class="profile" v-for="profile in profiles" :key="profile.id">
        <img :src="profile.avatar" alt="Avatar">
        <div class="profile-name">
          {{profile.firstname}} {{profile.lastname}}
        </div>
        <div class="profile-actions">
          <button type="button" name="follow" class="follow-button " @click="followedFilter">Follow</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'Browse',
  components: {
    Header
  },
  computed: {
    profiles() {
      return this.$store.getters.getProfiles;
    }
  },
  methods: {
    followedFilter: e => {
      e.target.classList.toggle('followed');
      e.target.textContent = e.target.classList.contains("followed") ? "Followed" : "Follow";
    }
  },
  mounted() {
    this.$store.dispatch("fetchProfiles");
  }
}
</script>

<style>

</style>