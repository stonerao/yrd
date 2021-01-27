import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "yanzheng",
    children: [
      {
        path: 'yanzheng',
        name: 'yanzheng',
        component: () => import('../components/yanzheng.vue')
      },
      {
        path: 'chaxun',
        name: 'chaxun',
        component: () => import('../components/chaxun.vue')
      },
      {
        path: 'shengcheng',
        name: 'shengcheng',
        component: () => import('../components/shengcheng.vue')
      },
      {
        path: 'xinxi',
        name: 'xinxi',
        component: () => import('../components/xinxi.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
