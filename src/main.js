import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import Browse from './components/Browse'
import Login from './components/Login'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: MainPage },
  { path: '/home', component: MainPage },
  { path: '/browse', component: Browse },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
