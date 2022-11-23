import { createRouter, createWebHistory } from 'vue-router'

const UserRegisterComponent = () => import('../Security/pages/users-register.component.vue');
const Appointment = () => import('../Appointments/pages/appointment.component.vue');
const Inicio = () => import('../components/inicio.vue');
const Startsession = () => import('../Security/pages/start-session.component.vue');
const PetProfile = () => import('../Patients/pages/pet-profile.component.vue');
const EvaluationRegister = ()=>import('../MedicalRecords/pages/evaluation-register.component.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/userRegister',
      name: 'userRegister',
      component: UserRegisterComponent
    },
    {
      path: '/',
      name: '',
      component: Inicio
    },
    {
      path: '/singIn',
      name: 'startSession',
      component: Startsession
    },
    {
      path: '/petProfile',
      name: 'petProfile',
      component: PetProfile
    },
    {
      path: '/about',
      name: 'about',
      component: EvaluationRegister
    }
  ]
})

export default router
