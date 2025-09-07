<template>
  <homeHero />
  <divider />
  <rolessection />
  <divider />
</template>

<script>
import divider from '../components/divider.vue'
import homeHero from '../components/contents/homehero.vue'
import rolessection from '../components/contents/rolessection.vue'
import aboutme from '../components/contents/aboutme.vue'

export default {
  name: 'Home',
  components: {
    homeHero,
    rolessection,
    divider,
    aboutme
  }
}
</script>

<style>

</style>
