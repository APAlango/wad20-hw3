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
  { path: '/home', component: MainPage },
  { path: '/browse', component: Browse },
  { path: '/login', component: Login },
  { path: '', redirect: '/home' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
