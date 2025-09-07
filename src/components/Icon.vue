<!-- components/Icon.vue -->
<template>
  <component :is="icons[name]" v-bind="$attrs" />
</template>

<script setup>
import ArrowUp from '@/assets/icons/arrow-up.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import ArrowLeft from '@/assets/icons/arrow-left.svg'
import ArrowDown from '@/assets/icons/arrow-down.svg'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const icons = {
  arrowup: ArrowUp,
  arrowright: ArrowRight,
  arrowleft: ArrowLeft,
  arrowdown: ArrowDown
}
</script>