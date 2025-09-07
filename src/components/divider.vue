<template>
  <div class="divider">
  <img :src="dotdivider" alt="dotdivider" />
  </div>
</template>

<script setup>
import dotdivider from '@/assets/dotdivider.svg?url'

</script>


<style>
.divider {
  display: block;
  width: 100vw;
  height: auto;
  background-color:var(--bg-color);
  padding-top:52px;
  padding-bottom:52px;
}
</style>
