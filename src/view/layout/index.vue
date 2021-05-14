<style scoped="scoped">
	.layout-content{
		position: relative;
	}
	.header{
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #dcdcdc;
	}
	.content{
		width: 100%;
		height: calc(100vh - 40px);
		display: flex;
	}
	.nav{
		width: 200px;
		height: 100%;
		border-right: 1px solid #dcdcdc;
	}
</style>
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
<script>
	//导入start函数
    import startQiankun from "@/micro"

    export default {
        data(){
            return{

            }
        },
        components:{
            headerComponent:() => import("@/view/layout/header.vue"),
            navComponent:() => import("@/view/layout/nav.vue")
        },
        mounted(){
            //启动主应用
            startQiankun({excludeAssetFilter: url => url.indexOf('api.map.baidu.com') !== -1})
        }
    }
</script>