import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Forgotpswd from '../components/credential/ForgotPassword.vue'
import Employee from '../components/EmployeesList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/abakozi',
    name: 'abakozi',
    component: Employee
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: Forgotpswd
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


