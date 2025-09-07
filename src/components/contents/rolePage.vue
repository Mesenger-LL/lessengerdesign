<template>

<div class="rolecontainer" :style="{ backgroundColor: roleContainerBg }">
<div class="heroesFull"><img :src="heroesFull" alt=""/></div>

<div class="rolecontent">

    <div class="rolecolor" :style="{ backgroundColor: rolecolorBg }"></div>

    <div class="rolefield">
    <div class="roleHeader"><h1 class="roleHeaderh1" :style="{ color: rolecolorBg }">{{ projectname }}</h1>

    <div class="paraunit" style="padding-top:16px;">
        <h2>{{ summarytitle }}</h2>
        <p>{{ summary }}</p>

    </div>
    </div>

    

    <ruleline />

    <div class="roleUsers">
        <h1 class="whousers">Who are the users?</h1>

        <section class="role-userinfo">
            <slot name="roleUserInfo"></slot>
        </section>
    </div>
    
    <ruleline />

    <div class="roleCase">
        <h1>
            {{caseheader}}
        </h1>

        <section class="role-CaseStudy">
            <slot name="roleCaseStudy"></slot>
        </section>
    </div>
    </div>
    

</div>


</div>

<divider />

</template>

<script setup>

    import {computed} from 'vue'
    import placeholder from '../../assets/heroes/full/placeholder.png'
    import divider from '@/components/divider.vue'
    import ruleline from '@/components/ruleline.vue'

    const props = defineProps({
        company: String,
        project: String,
        description: String,
        timeperiod: String,
        summarytitle: String,
        summary: String,
        projectname: String,
        caseheader:String,
        image: {
            type: String,
            default: 'placeholder.png'
        },
        roleContainerBg: 
        {type: String, default: '#F6F7F0'},
        rolecolorBg:{type: String, default: '#70BA6B'}

    })

    const heroesFull = computed(() => {
  try {
    // Attempt to load the specified image
    return new URL(`../../assets/heroes/full/${props.image}`, import.meta.url).href
  } catch {
    // Fallback to placeholder if it fails
    return placeholder
  }
})

</script>

<style>

.heroesFull{
    padding-bottom:48px;
    width:100vw;
}

.rolecontainer{
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;
}

.rolecontent{
    margin-left:108px;
    margin-right:108px;
    background-color:white;
    border-radius: 16px ;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    z-index: 10;
    max-width: 1224px ;
    
}

.rolefield{
    padding-left:64px;
    padding-right:64px;
    padding-top:54px;
    padding-bottom:108px;
    
}

.roleHeader{
    display: flex;
    gap:64px;
    padding-bottom:64px;
}

.rolerHeader .paraunit{
    padding-top:54px;
}
.roleHeaderh1{

    font-size:40px;
    font-weight:700;
}
.rolecolor{
    display:block;
    height: 40px;
    border-radius: 16px 16px 0 0;
    color:red;
}

.paraunit h2{
    font-size:26px;
    font-weight:700;
}

.paraunit{
    display: flex;
    flex-direction: column;
    gap:14px;
    max-width:600px;
}

.roleUsers{
    padding-top:64px;
    padding-bottom:64px;

}

.roleUsers h1{
    font-size:40px;
    font-weight:700;
    text-align:center;
}

.role-CaseStudy{
    padding-top:64px;
    padding-bottom:64px;
    display: flex;
    flex-direction: column;
    gap:48px;
}


.roleCase h1{
    font-size:40px;
    font-weight:700;
    text-align:center;
    padding-top:64px;
}

.roleheaders{
    padding-top:6px;
    padding-bottom:6px;
    padding-left:32px;
    padding-right:32px;
    font-size: 24px;
    color:white;
}

.paraunit{
    display: flex;
    flex-direction: column;
    gap:8px;
}

.roleh2{
    font-size:24px;
}

.roleh3{
    font-weight:700;
}

.rolepara{
    font-size:14px;
}

.role2col{
    display: flex;
    justify-content: flex-start;
    gap:64px;
}

.whousers{
    margin-bottom:32px;
}

.gap24px{
    display: flex;
    flex-direction: column;
    gap:24px;
}

em{
    font-weight:600;
}

.cpeperset{
    display: flex;
    gap:48px;
    max-width: 958px;
}

.usercolumn{
    display: flex;
    flex-direction: column;
    gap:48px;
    width: 50%;
}

.userquote{
    text-align: center;
}
</style>