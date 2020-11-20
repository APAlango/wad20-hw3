import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import Browse from './components/Browse'
import Login from './components/Login'

Vue.config.productionTip = false

const routes = [
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
  render: h => h(App),
}).$mount('#app')
