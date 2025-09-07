import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/aboutme.vue'
import WSJ from '@/pages/roles/WSJ.vue'
import PayPal from '@/pages/roles/PayPal.vue'
import CPE from '@/pages/roles/CPE.vue'
import AutoAI from '@/pages/roles/AutoAI.vue'
import Phunware from '@/pages/roles/Phunware.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/aboutme', name: 'About', component: About },
  { path: '/wsj', name: 'WSJ', component: WSJ },
  { path: '/paypal', name: 'PayPal', component: PayPal },
  { path: '/cpe', name: 'CPE', component: CPE },
  { path: '/autoai', name: 'AutoAI', component: AutoAI },
  { path: '/phunware', name: 'Phunware', component: Phunware },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
