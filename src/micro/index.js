import Vue from 'vue'
import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start,
    initGlobalState 
} from "qiankun";

// 微应用注册信息
import apps from "./app";

/**
* 注册微应用
* 第一个参数 - 微应用的注册信息
* 第二个参数 - 全局生命周期钩子
*/
registerMicroApps(apps, {
    // qiankun 生命周期钩子 - 微应用加载前
    beforeLoad: (app) => {
        console.log("before load", app.name);
        return Promise.resolve();
    },
    // qiankun 生命周期钩子 - 微应用挂载后
    afterMount: (app) => {
        console.log("after mount", app.name);
        return Promise.resolve();
    },
});

/**
* 添加全局的未捕获异常处理器
*/
addGlobalUncaughtErrorHandler((event) => {
    console.error(event);
    const { msg } = event;
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        console.error("微应用加载失败，请检查应用是否可运行");
    }
});

function shareInfo(){
	// 通讯
	const actions = initGlobalState({
		userInfo:{name:'张三'},
	  	mt: 'init' // 初始化state，里面内容您随意
	})
	// 在项目中任何需要监听的地方进行监听，在这里监听是为了方便
	actions.onGlobalStateChange((state,prev)=>{
	    console.log('main state change',state);
	})
	// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
	Vue.prototype.$actions = actions
}
shareInfo()
// 导出 qiankun 的启动函数
export default start;