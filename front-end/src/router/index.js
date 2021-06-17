import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buy from '../views/Buy.vue'
import Sell from '../views/Sell.vue'
import Account from '../views/Account.vue'
import Property from '../views/Property.vue'
import Edit from '../views/Edit.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
      path: '/property/:id',
      name: 'property',
      component: Property
  },
  {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
