import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/vortex',
      name: 'vortex',
      component: () => import('../views/VortexView.vue'),
    },
    {
      path: '/anthill',
      name: 'anthill',
      component: () => import('../views/AnthillView.vue'),
    },
  ],
})

export default router
