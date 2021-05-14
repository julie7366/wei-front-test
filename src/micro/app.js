import common from '../utils/common'
 const apps = [
    /**
    * name: 微应用名称 - 具有唯一性
    * entry: 微应用入口 - 通过该地址加载微应用
    * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
    * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
    */
    {
        name: "wei_child_system",
        entry: "http://192.168.2.119:10300/#/",
        container: "#frame",
        activeRule: "#/wei_child_system/", //由于是hash路由，所以 # 号是一定要的
        props:{
        	fn:common
        }
    },
]
export default apps