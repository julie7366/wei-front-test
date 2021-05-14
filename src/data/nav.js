 export default [
    {
        title: "开始",
        path: "/",
    },
    {
        title: "功能示例",  //这里是daodaodemo子应用下的页面
        path: "/wei_child_system",
        children:[
            {
                title:'百度地图示例',
                path:"/wei_child_system"
            },
            {
                title:'3d示例',
                path:"/wei_child_system/three"
            }
        ]
    }
]