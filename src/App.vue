<template>
  <headerDesktop />
  <div class="contentbody">
  <RouterView />
  </div>
  <footerDesktop />
</template>

<script>
import headerDesktop from './components/Header/headerDesktop.vue'
import footerDesktop from './components/Footer/footerDesktop.vue'
 
export default {
  name: 'App',
  components: {
    headerDesktop,
    footerDesktop
  }
}
</script>

<style>
.bodycontent{
  display: grid;
  place-items: center;   /* centers both horizontally + vertically */
  min-height: 100vh;     /* full viewport height */
}

.contentbody{
  margin-top:80px;
  display: grid;
  place-items: center;

}

</style>