import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
  },
  {
    path: '/line',
    component: () => import(/* webpackChunkName: "line" */ '../views/chart/line.vue')
  },
  {
    path: '/pie',
    component: () => import(/* webpackChunkName: "pie" */ '../views/chart/pie.vue')
  },
  {
    path: '/pie2',
    component: () => import(/* webpackChunkName: "pie2" */ '../views/chart/pie2.vue')
  },
  {
    path: '/gauge',
    component: () => import(/* webpackChunkName: "gauge" */ '../views/chart/gauge.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
