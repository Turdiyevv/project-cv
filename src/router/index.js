import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/route',
      name: 'route',
      component: () => import('../views/RoutPage.vue')
    },
    {
      path: '/post-manager',
      name: 'post-manager',
      component: () => import('../views/PostManager.vue')
    },
    {
      path: '/computer',
      name: 'computer',
      component: () => import('../views/ComputerPage.vue')
    }
  ]
})
export default router
