import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../components/Character.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id/character',
    name: 'character',
    component: Character
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
