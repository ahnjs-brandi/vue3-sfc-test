import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "game" */ '../views/GameView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('state') && to.name !== 'home') {
    next('/')
  } else {
    next()
  }
});

export default router
