// router.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fruits from '../views/Fruits.vue'
import Vegetables from '../views/Vegetables.vue'

Vue.use(VueRouter)
// router.js

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fruits',
    name: 'fruits',
    // component: () => import( '../views/About.vue')
    // component: function(){ import('../views/About.vue') }
    component: Fruits
  },
  {
    path: '/vegetables',
    name: 'vegetables',
    // component: () => import( '../views/About.vue')
    // component: function(){ import('../views/About.vue') }
    component: Vegetables
  }

]

const router = new VueRouter({    // Instancia de VueRouter
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
