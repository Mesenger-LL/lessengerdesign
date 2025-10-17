<template>
  <div class="homehero">
    <div class="rArrows">
      <heroarrows />
    </div>
    <div class="heroleft">
      <div class="dArrows">
      <heroarrows />
      </div>
      <div class="herotext">
        <h1>UX + Visual Design</h1>
        <h2>
          Experience defines who we are and how we react. <br>Let&#39;s create positive reactions.
        </h2>
      </div>
      </div>

    
    <div class="heroright">
      <heroreactions />
    </div>
  </div>
</template>
<script>
import heroarrows from '@/components/Cards/heroarrows.vue'
import heroreactions from '@/components/Cards/heroreactions.vue'

export default {
  name: 'homehero',
  components:{
    heroarrows,
    heroreactions
  }
}
</script>

<style>
.homehero {
  display: grid;
  grid-template-columns: 72% 12.3%;
  grid-template-areas:
    "left right"
    "left right";
  align-items: end;
  width:100%;
  justify-content: space-between;
  padding-left:4%;
  padding-right: 4.875rem;
  padding-top:5rem;
  padding-bottom:5rem;
  max-width: 1440px;
}

.heroleft{
  grid-area:left;
  
  display: flex;
  flex-direction: column;
  gap:3.25rem;
}



.heroarrows svg{
  width:100%;
  height:auto;
  max-width: 100%;
}

.rArrows{
  display: none;
}

.herotext{
  grid-area: text;
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

.heroright{
  grid-area:right;
}

@media (max-width: 768px) {

  .dArrows{
    display: none;
  }

  .rArrows{
    display: block;
    width:100%;

    grid-area:arrows;
  }

  .homehero {
  display: grid;
  grid-template-columns: 50% 35%;
  grid-template-areas:
    "arrows right"
    "left left";
  align-items: end;
  width:90%;
  row-gap:3.25rem;
  justify-content: space-between;
  padding-left:0rem; 
  padding-right: 1rem;
  padding-top:5rem;
  padding-bottom:5rem;
}

  .herotext{
  grid-area: text;
  width:80%;
  display: flex;
  flex-direction: column;
  margin-left:3rem;
  gap:8px;
  border-bottom: 20px solid #70BA6B;
  padding-bottom:52px;
}

}

</style>