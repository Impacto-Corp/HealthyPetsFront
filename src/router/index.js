import { createRouter, createWebHistory } from 'vue-router'

const UserRegisterComponent = () => import('../Security/pages/user-register.component.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/userRegister',
      name: 'userRegister',
      component: UserRegisterComponent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
