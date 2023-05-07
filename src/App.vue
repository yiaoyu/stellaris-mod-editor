<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './views/Nav.vue';
import Header from './views/Header.vue';

</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <div class="display">
    <div class="header-container"><Header></Header></div>
    <div class="nav-container"><Nav></Nav></div>
    <div class="content-container"><RouterView></RouterView></div>
  </div>
</template>

<style scoped lang="less">
@import "./assets/base.less";
.display{
  background-color: @main-background-color;
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  grid-template-areas:"header header header"
                      "nav main main"
                      "nav main main";
  .header-container{
    background: @header-background-color;
    color: @header-color;
    grid-area: header;
    height: 50px;
  }
  .nav-container{
    background-color: @main-background-color;
    color:@nav-color;
    grid-area: nav;
    width: 180px;
    min-height: 800px;
  }
  .content-container{
    background-color: @content-background-color;
    color:@main-color;
    grid-area: main;
    padding: 20px;
    border-left: 1px solid #dae3e9;
    border-bottom: 1px solid #dae3e9;
  }
}
</style>
