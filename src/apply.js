/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:35:29
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-22 10:47:03
 */

// 主的流程控制
let apply = (action, ...args) => {
	//babel-env
	require(`./${action}`)(...args)
}

export default apply
