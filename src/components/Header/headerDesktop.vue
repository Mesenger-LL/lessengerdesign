<template>
    <div class="header" id="top">

    <a href="/"><LogoInline /></a>
    

    <nav>
        <!--<navlinks label="Ongoing Projects" to="/ongoing" />
        <navlinks label="Design Roles" to="/WSJ" />
        <navlinks label="Case Studies" to="/studies" />-->
        <navlinks label="Learn More about me" to="/aboutme" />

    </nav>
</div>
</template>

<script setup>
import navlinks from '../Links/navlinks.vue';
</script>

<script>
import LogoInline from '@/components/Logo/LogoInline.vue'

export default{
    name: 'headerDesktop',
    components: {
    LogoInline
  }
}
</script>


<style>
.header{
    display:flex;
    background-color: var(--bg-color);
    height:80px;
    justify-content: space-between;
    align-items: center;
    padding-left:48px;
    padding-right:40px;
    position:fixed;
    width:100%;
    z-index:20;
    border-bottom:solid 1px var(--bg-accent);
}

nav{
    display: flex;

}

</style>