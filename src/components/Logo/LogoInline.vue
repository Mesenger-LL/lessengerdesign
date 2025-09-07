<template>
    <div class="logoinline">
  <div class="logo">
    <Logo />
    </div>
  <div class="logoName">LESSENGER DESIGN</div>
  </div>
</template>

<script>
import Logo from '@/assets/logo-icon.svg'

export default {
  name: 'LogoInline',
  components: {
    Logo
  }
}
</script>

<style>

.logo{
    height:32px;
    width:32px;
}
.logoName{
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
 letter-spacing: .16rem;
}

.logoinline{
    display: flex;
    align-items: center;
    gap: 24px;
}

</style>