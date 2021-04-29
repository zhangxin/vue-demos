import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home'
import About from '../views/About'
// import Test from '../views/Test'
import Copy from '../views/Copy'

const routes = [
  {
    name: 'Home',
    path: '/:msg',
    component:  Home,
    
  },
  {
    name: 'About',
    path: '/xxx/:msg',
    component: About
   
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/copy',
    name: Copy,
    components: {
      b: Copy
    } 
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
