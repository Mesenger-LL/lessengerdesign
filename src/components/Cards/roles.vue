<template> 

	<div class="rolecard">
    <a :href="props.link">
        <div class="companyinfo">
            <h2> {{ company }}</h2>
            <h1> {{ project }}</h1>
            <p> {{ description }}</p>
        </div>
        <div class="heroesSmall"><img :src="heroesSmall" alt=""/></div>
</a>
        <h1 class="timeperiod">{{ timeperiod }}</h1>
	
    </div>

</template>

<script setup>

    import {computed} from 'vue'
    import placeholder from '../../assets/heroes/small/placeholder.png'

    const props = defineProps({
        company: String,
        project: String,
        description: String,
        timeperiod: String,
        link: {
          type: String,
          required: true
        },
        image: {
            type: String,
            default: 'placeholder.png'
        }

    })

    const heroesSmall = computed(() => {
  try {
    // Attempt to load the specified image
    return new URL(`../../assets/heroes/small/${props.image}`, import.meta.url).href
  } catch {
    // Fallback to placeholder if it fails
    return placeholder
  }
})

</script>

<style>
.rolecard{
    display: flex;
    flex-direction: column;
    background-color:white;
    width: calc((100vw / 3) - 72px);
    padding-left:24px;
    padding-right:24px;
    padding-top:24px;
    padding-bottom:24px;
    border-radius: 16px;
    gap:8px;

}

.companyinfo{
  display: flex;
  flex-direction: column;
  gap:8px;
  padding-left: 16px;
  padding-right:16px;
  padding-top:24px;
  padding-bottom:16px;
}

.companyinfo h1{
  font-size:22px;
  font-weight: 600;
}

.companyinfo h2{
  font-size:20px;
}

.companyinfo p{
  font-size:16px;
}

.timeperiod{
  font-size:18px;
  font-weight:600;
}

.heroesSmall{
  padding:16px;
  border:solid;
  border-width:1px;
  border-radius:8px;
  color:#E3E3E3;
}

.timeperiod{
  padding-top:12px;
  padding-bottom:8px;
}

</style>