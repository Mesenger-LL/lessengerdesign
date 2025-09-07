<template>
    <a 
    :href="to"
    class="buttonCTA"
    :target="external ? '_blank' : '_self'"
    rel="noopener noreferrer"
    >
    {{ label }}
    </a>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps({
  icon: {
    type: String,
    default: null
  },

  label: {
    type: String,
    required: true
  },

  to: {
    type: String,
    required: true
  },

  external: {
    type: Boolean,
    default: false
  }
})
</script>



<style>

.buttonCTA {
    width:fit-content;
    display: block;
    align-items: center;
    color:white;
    background-color: var(--button-primary);
    text-decoration: none;
    padding-top:16px;
    padding-bottom:16px;
    padding-left:24px;
    padding-right:24px;
    font-weight: 600;
    border-radius: 16px;
    transition: background-color 0.2s ease;

}

.buttonCTA:hover{
    background-color: var(--button-primary-hover);
}


</style>