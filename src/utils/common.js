//数组去重
function unique(arr) {
    //定义常量 res,值为一个Map对象实例
    const res = new Map();
    //返回arr数组过滤后的结果，结果为一个数组
    //过滤条件是，如果res中没有某个键，就设置这个键的值为1
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
}
let commonFun =  {
	unique
}
export default commonFun
