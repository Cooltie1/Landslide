import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buy from '../views/Buy.vue'
import Sell from '../views/Sell.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
