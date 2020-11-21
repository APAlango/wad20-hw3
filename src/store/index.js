// import dependency to handle HTTP request to our back end
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

//to handle state
const state = {
	user: undefined,
	profiles: [],
	posts: []
}

//to handle state
const getters = {
	getProfiles: (state) => state.profiles,
	getPosts: (state) => state.posts,
	getUser: (state) => state.user
}

//to handle actions
const actions = {
	fetchUser({ commit }) {
		axios.get("https://private-517bb-wad20postit.apiary-mock.com/users/1")
		.then(response => {
			commit('SET_USER', response.data)
		})
	},
	fetchPosts({ commit }) {
		axios.get("https://private-517bb-wad20postit.apiary-mock.com/posts")
		.then(response => {
			commit('SET_POSTS', response.data)
		})
	},
	fetchProfiles({ commit }) {
		axios.get("https://private-517bb-wad20postit.apiary-mock.com/profiles")
		.then(response => {
			commit('SET_PROFILES', response.data)
		})
	}
}

//to handle mutations
const mutations = {
	SET_USER(state, user) {state.user = user},
	SET_POSTS(state, posts) {state.posts = posts},
	SET_PROFILES(state, profiles) {state.profiles = profiles}
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
/** we have just created a boiler plate for our vuex store module**/