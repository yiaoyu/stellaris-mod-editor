<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useMainStore } from "../stores/main"
const mainStore = useMainStore()
onBeforeMount(()=>{
    mainStore.getCurrContent("home")
})
</script>

<template>
<div>GuideView</div>
</template>

<style scoped lang="less">
@import "../assets/base.less";
</style>