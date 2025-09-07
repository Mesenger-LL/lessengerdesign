<template>
    <div class="userinfocard">
        <div class="useraccent" :style="{ backgroundColor: usercardbg }"></div>
        <div class="ucardinfo">
            <h2>{{username}}</h2>
                <div v-for="(line, index) in lines" :key="index" class="line">
                <h3 class="bold">{{ line.label }}:</h3>
                <h3>{{ line.value }}</h3>
                </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
  name: 'userInfoCard'
})

const props = defineProps({
    username: { type: String, default:"John Smith"},
    lines: {
        type:Array,
        default: () => [] // [{ label: "...", value: "..."}]
    },
    usercardbg: {
    type: String,
    default: '#000000'
  }
})
</script>

<style>

.userinfocard{
display: flex;
  align-items: stretch;
  width: fit-content;
  height: fit-content;
}

.ucardinfo{
    display: flex;
    flex-direction: column;
    gap:12px;
    border:1px solid #D7D7D7;
    background-color:;
    padding:32px;
    width:fit-content;
}

.useraccent{
    flex: 0 0 auto;
    width:22px;
}

.userinfocard h2{
    font-size:24px;
    font-weight:700;
}

.line{
    display: flex;
    gap:8px;
}

</style>