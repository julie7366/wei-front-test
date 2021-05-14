<template>
    <div class="layout-content">
        <div class="header" v-if="!$route.meta.fullscreen">
            <!--头部组件-->
            <header-component></header-component>
        </div>
        <div class="content">
            <div class="nav" v-if="!$route.meta.fullscreen">
                <!--导航组件-->
                <nav-component></nav-component>
            </div>
            <div class="frame-wrapper" :style="$route.name&&!$route.meta.fullscreen?'padding:10px;':'padding:0px;'">
            <!--主应用渲染区，用于挂载主应用路由触发的组件，使用$route.name来判断是不是主应用组件-->
            <router-view v-show="$route.name"></router-view> 
            <!--子应用渲染区，用户挂载子应用节点-->
            <div v-show="!$route.name" id="frame" :style="!$route.name&&!$route.meta.fullscreen?'padding:10px;':'padding:0px;'"></div> 
            </div>
        </div>
    </div>
</template>