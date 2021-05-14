import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"Home",
        component:() => import("../view/pages/start.vue") //开始界面
    },
    {
        path:"/login",
        name:"Login",
        component:() => import("../view/pages/login.vue"), //登录界面
        meta:{ 
            fullscreen:true //是否全屏
        }
    }
]

export default new VueRouter({ //网上大多数都是使用history模式，但是我使用的是hash模式
    routes
})
