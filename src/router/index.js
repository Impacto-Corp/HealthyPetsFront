import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import PetProfileComponent from "@/profiles/pages/pet-profile.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PetProfile',
      component: PetProfileComponent
    },
    {
      path: '/petprofile',
      name: 'Petprofile',
      component: PetProfileComponent,
    }
  ]
})

export default router
