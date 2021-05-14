<template>
    <div class="nav-content">
        <el-menu>
            <template v-for="(item,index) in navData">
                <el-menu-item @click="goto(item.path)" :index="'nav'+index" :key="'nav'+index" v-if="!item.children || item.children.length == 0">
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
                <el-submenu v-if="item.children && item.children.length > 0" :index="'nav'+index" :key="'nav'+index">
                    <span slot="title">{{item.title}}</span>
                    <el-menu-item @click="goto(child.path)" v-for="(child,idx) in item.children" :key="'nav'+index+'-'+idx" :index="'nav'+index+'-'+idx">{{child.title}}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
import navData from "@/data/nav.js"

export default {
    data(){
        return {
            navData:navData
        }
    },
    methods:{
        goto(path){
            this.$router.push(path)
        }
    }
}
</script>