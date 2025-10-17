<template>
  <div class="heroright">
    <img :src="currentReactions" alt="Reactions" class="reactions" />
  </div>
</template>

<script>
import HeroReactions from '@/assets/homehero/reactions.png'
import HeroReactions768 from '@/assets/homehero/reactions768.png'
import HeroReactions412 from '@/assets/homehero/reactions412.png'

export default {
  name: 'heroreactions',
  data() {
    return {
      currentReactions: HeroReactions
    }
  },
  methods: {
    updateReactions() {
      if (window.innerWidth <= 412) {
        this.currentReactions = HeroReactions412
      } else if (window.innerWidth <= 768) {
        this.currentReactions = HeroReactions768
      } else {
        this.currentReactions = HeroReactions
      }
    }
  },
  mounted() {
    this.updateReactions()
    window.addEventListener('resize', this.updateReactions)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateReactions)
  }
}
</script>
