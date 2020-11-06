import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import Download from '../views/Download.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  }
]

const router = new VueRouter({
  routes
})

export default router
