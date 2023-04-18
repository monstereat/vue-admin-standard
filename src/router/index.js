import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: HomeView,
        name: 'home'
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    children: [
      {
        path: '/index',
        component: AboutView,
        name: 'about'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
