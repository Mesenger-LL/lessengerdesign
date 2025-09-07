<script> { createRouter, createWebHistory } from 'vue-router'

// import page components
import Roles from '@/pages/Roles.vue'

const routes = [
  { path: '/', component: { template: '<h1>Home</h1>' } },
  { path: '/roles', component: Roles },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
</script>