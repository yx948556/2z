import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },

// 主页的路由
  {
    path: '/home',
    name: 'home',
    component: ()=> import ('@/views/2z/home')
  },

{
    path: '/gl',
    name: 'gl',
    component: ()=> import ('@/views/2z/gl')
  },
  {
    path: '/xg',
    name: 'xg',
    component: ()=> import ('@/views/2z/xg')
  },
  {
    path: '/lc',
    name: 'lc',
    component: ()=> import ('@/views/2z/lc')
  },
  {
    path: '/img',
    name: 'img',
    component: ()=> import ('@/views/2z/img')
  },
  {
    path: '/txt',
    name: 'txt',
    component: ()=> import ('@/views/2z/txt')
  },

]

const router = new VueRouter({
  routes
})

export default router
