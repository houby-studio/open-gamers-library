import Vue from 'vue'
import VueRouter from 'vue-router'
import { remote } from 'electron'
import Launch from '../components/Launch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'launch',
    component: Launch
  },
  {
    path: '/library',
    name: 'library',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Library.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../views/Explore.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/quit',
    name: 'quit',
    beforeEnter: (to, from, next) => {
      var win = remote.getCurrentWindow()
      win.close()
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
