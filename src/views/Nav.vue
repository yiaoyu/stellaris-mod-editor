<script setup lang="ts">
import { watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useMainStore } from "../stores/main"
const mainStore = useMainStore()
// watch(()=>st.currContent,(name)=>{
//     switch(name){
//     case "home":
//     }
// })
</script>

<template>
<ul class="nav">
    <RouterLink to="/event"><li :class="{ active: mainStore.currContent=='event' }">
        事件
        <div class="pointer">
            <div class="arrow"></div>
            <div class="arrow-border"></div>
        </div>
    </li></RouterLink>
    <RouterLink to="/tech"><li :class="{ active: mainStore.currContent=='tech' }">
        科技
        <div class="pointer">
            <div class="arrow"></div>
            <div class="arrow-border"></div>
        </div>
    </li></RouterLink>
</ul>
</template>

<style scoped lang="less">
@import "../assets/base.less";
.nav{
    cursor: pointer;
    padding: 15px;
    li{
        padding:10px 5px;
        border-bottom: 1px solid #dae1e8;
        position: relative;
        .pointer{
            visibility: hidden;
            position: absolute;
            right: 6px;
            top: 10px;
            .arrow{
                border-color: transparent #fff transparent transparent;
                border-width: 11px;
                border-style: solid;
                left: 50%;
                line-height: 0;
                margin: 0 auto;
                position: absolute;
                top: 0;
                width: 0;
                z-index: 1002;
                left: 0;
                margin-left: 45%;
            }
            .arrow-border{
                border-color: transparent #c0d2dd transparent transparent;
                border-width: 11px;
                border-style: solid;
                z-index: 1001;
                top: 0;
                line-height: 0;
                margin: 0 auto;
                position: absolute;
                width: 0;
                left: -1px;
            }
        }
    }
    a:link{
        color: @nav-color;
        text-decoration: none;
    }
    a:visited{
        color: @nav-color;
    }
    a:hover{
        color: @main-color;
    }
    .active{
        color: @main-color;
        font-weight: 600;
        text-shadow: 1px 1px 1px #fff;
        .pointer{
            visibility: visible;
        }
    }
}
</style>