import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import VuetifyView from '../views/Vuetify.vue'
import AboutMeView from '../views/AboutMe.vue'
import AxiosDemoView from '../views/AxiosDemo.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
      path: '/basicMath',
      name: 'basicMath',
      component: BasicMathView
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: VuetifyView
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMeView
    },
    {
      path: '/axiosdemo',
      name: 'axiosdemo',
      component: AxiosDemoView
    },

  ]
})

export default router
