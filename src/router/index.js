import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

// 主页的路由
  {
    path: '/home',
    name: 'home',
    component: ()=> import ('@/views/2z/home')
  },
  // 装修攻略
{
    path: '/gl',
    name: 'gl',
    component: ()=> import ('@/views/2z/gl')
  },
  // 效果图首页
  {
    path: '/xg',
    name: 'xg',
    component: ()=> import ('@/views/2z/xg')
  },
  // 装修流程
  {
    path: '/lc',
    name: 'lc',
    component: ()=> import ('@/views/2z/lc')
  },
  // 图片详情
  {
    path: '/img',
    name: 'img',
    component: ()=> import ('@/views/2z/img')
  },
  // 文章详情
  {
    path: '/txt',
    name: 'txt',
    component: ()=> import ('@/views/2z/txt')
  },

  // 图片详情2
  {
    path: '/xg2',
    name: 'xg2',
    component: ()=> import ('@/views/2z/xg2')
  },
  // 设计师列表首页
  {
    path: '/sj',
    name: 'sj',
    component: ()=> import ('@/views/2z/sj')
  },
  // 设计师列表首页下拉
  {
    path: '/sj2',
    name: 'sj2',
    component: ()=> import ('@/views/2z/sj2')
  },
  // 工地直播列表
  {
    path: '/gd',
    name: 'gd',
    component: ()=> import ('@/views/2z/gd')
  },
  // 工地详情
  {
    path: '/gd2',
    name: 'gd2',
    component: ()=> import ('@/views/2z/gd2')
  },
  // 设计师详情页
  {
    path: '/sjs',
    name: 'sjs',
    component: ()=> import ('@/views/2z/sjs')
  },
  //设计师列表页
  {
	  path: '/fc2',
	  name: 'fc2',
	  component: ()=> import ('@/views/2z/fc2')
  }

]

const router = new VueRouter({
  routes
})

export default router
