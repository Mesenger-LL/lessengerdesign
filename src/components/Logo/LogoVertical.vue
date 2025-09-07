<template>
    <div class="logovertical">
  <div class="logo">
    <Logo />
    </div>
  <div class="logoName">LESSENGER DESIGN</div>
  </div>
</template>

<script>
import Logo from '@/assets/logo-icon.svg'

export default {
  name: 'LogoVertical',
  components: {
    Logo
  }
}
</script>

<style>

.logo{
    width:32px;
    height:32px;
}

.logoName{
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
 letter-spacing: .16rem;
}

.logovertical{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

</style>

