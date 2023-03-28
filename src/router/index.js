import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Forgotpswd from '../components/credential/ForgotPassword.vue'
import Employee from '../components/EmployeesList.vue'
import ComplainForm from '../components/ComplainForm.vue'
import news from '../components/citizens/SectorNews.vue'
import service from '../components/citizens/SectorService.vue'
import HomePage from '../views/index.vue'
import UserPage from '../views/user/index.vue'
import SelfRegistration from '../views/SelfRegistration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },

  {
    path: '/muslims/self-registration',
    name: 'SelfRegistration',
    component: SelfRegistration
  },

    {
      path: '/user/panel',
      name: 'UserPage',
      component: UserPage
    },


  {
    path: '/',
    name: 'HomePage',
    component: HomePage
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

  {
    path: '/complain',
    name: 'citizen-complain',
    component: ComplainForm
  },

   {
    path: '/amakuru',
    name: 'news',
    component: news
  },

   {
    path: '/serivise',
    name: 'service',
    component: service
  },

  // {
  //   path: '/AdminHome',
  //   name: 'AdminHome',
  //   component: AdminHome
  // },

  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


