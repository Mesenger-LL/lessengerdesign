<template>
    <a 
    :href="to"
    class="navlink"
    :target="external ? '_blank' : '_self'"
    rel="noopener noreferrer"
    >
    {{ label }}
    </a>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required:true
    },

    to: {
        type: String,
        required:true
    },

    external: {
        type: Boolean,
        default: false
    }
})

</script>

<style>
.navlink{
    color: var(--nav-color);
    width:fit-content;
    display: block;
    text-decoration: none;
    text-transform: lowercase;
    height:48px;
    padding-top:14px;
    padding-bottom:14px;
    padding-left:16px;
    padding-right:16px;
    font-weight: 600;

}

.navlink:hover{
    color: var(--nav-hover);
    border-bottom: solid;
    border-color: #E3E5D8;
}

.navlink:active{
    color: var(--nav-color);
    border-bottom: solid;
    border-color: #E3E5D8;
}


</style>