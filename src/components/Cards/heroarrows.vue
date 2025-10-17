<template>
  <div class="heroarrows">
    <!-- dynamically swaps the SVG component -->
    <component :is="currentArrow" />
  </div>
</template>

<script>
import HeroArrows from '@/assets/homehero/arrows.svg'
import HeroArrows768 from '@/assets/homehero/herrows768.svg'
import HeroArrows412 from '@/assets/homehero/herrows412.svg'

export default {
  data() {
    return {
      currentArrow: HeroArrows
    }
  },
  methods: {
    updateArrow() {
      if (window.innerWidth <= 412) {
        this.currentArrow = HeroArrows412
      } else if (window.innerWidth <= 768) {
        this.currentArrow = HeroArrows768
      } else {
        this.currentArrow = HeroArrows
      }
    }
  },
  mounted() {
    this.updateArrow()
    window.addEventListener('resize', this.updateArrow)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateArrow)
  }
}
</script>
