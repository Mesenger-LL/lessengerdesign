<template>
  <div class="homehero">
    <div class="heroleft">
      <heroarrows />
      <div class="herotext">
        <h1>UX + Visual Design</h1>
        <h2>
          Experience defines who we are and how we react. <br>Let&#39;s create positive reactions.
        </h2>
      </div>
    </div>
    <div class="heroright">
      <img class="reactions" :src="reactions" alt="reactions" />
    </div>
  </div>
</template>
<script>
import heroarrows from '@/assets/homehero/arrows.svg'
import reactions from '@/assets/homehero/reactions.png'

export default {
  name: 'homehero',
  components:{
    heroarrows
  },
  data() {
    return {
      reactions
    }
  }
}
</script>

<style>
.homehero{
  display:flex;
  padding-top:72px;
  padding-left:24px;
  padding-right:128px;
  padding-bottom:120px;
  justify-content: space-between;
  align-items: end;
  width:100%;
  max-width: 1440px;
}

.heroleft{
  display:flex;
  flex-direction: column;
  gap:52px;
}

.herotext{
  display: flex;
  margin-left:80px;
  flex-direction: column;
  gap:8px;
  border-bottom: 20px solid #70BA6B;
  padding-bottom:52px;
}
.herotext h1{
  font-size:42px;
  font-weight: 700;
}

.herotext h2{
  font-size:24px;
  font-weight: 500;
  line-height: 36px;;
}

.reactions{
  height: 504px;
}

</style>