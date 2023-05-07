<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="title">
        <RouterLink to="/">群星 MOD 编辑器</RouterLink>
    </div>
    <ul class="header-nav">
        <li>
            <svg t="1683351818849" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4212" width="24" height="24"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="4213" fill="#dbdbdb"></path></svg>
        </li>
        <li>
            <svg t="1683352246659" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6446" width="24" height="24"><path d="M140 188h584v164h76V144c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h544v-76H140V188z" p-id="6447" fill="#dbdbdb"></path><path d="M414.3 256h-60.6c-3.4 0-6.4 2.2-7.6 5.4L219 629.4c-0.3 0.8-0.4 1.7-0.4 2.6 0 4.4 3.6 8 8 8h55.1c3.4 0 6.4-2.2 7.6-5.4L322 540h196.2L422 261.4c-1.3-3.2-4.3-5.4-7.7-5.4z m12.4 228h-85.5L384 360.2 426.7 484zM936 528H800v-93c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v93H592c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h136v152c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V752h136c13.3 0 24-10.7 24-24V552c0-13.3-10.7-24-24-24zM728 680h-88v-80h88v80z m160 0h-88v-80h88v80z" p-id="6448" fill="#dbdbdb"></path></svg>
        </li>
    </ul>
</template>

<style scoped lang="less">
    @import "../assets/base.less";
    .title{
        float: left;
        height: 26px;
        padding: 14px 20px 10px 20px;
        font-weight: 600;
        a:link{
            color: @header-color;
            text-decoration: none;
        }
        a:visited{
            color: @header-color;
        }
        a:hover{
            color: @header-color-hover;
        }
    }
    .header-nav{
        margin-right: 10px;
        height: 50px;
        float: right;
        cursor: pointer;
        li{
            display: inline;
            svg{
                display: inline;
                padding: 13px;
                border-left: 1px solid #101417;
            }
            svg:hover{
                background-color: @green;
            }
        }
    }
</style>