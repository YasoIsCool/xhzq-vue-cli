<!--
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:35:29
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-23 15:57:37
-->

# xhzq-vue-cli

鑫海智桥 vue 脚手架,用于构建为前端应用

## 1.使用

```
npm i xhzq-vue-cli -g

xhzq init myApp

cd ./myApp

npm install

npm run serve
```

1. 首先全局安装 xhzq-vue-cli 脚手架，之后使用命令 `xhzq init 你的项目名` 创建应用即可。

2. 进入 init 后依次输入`auther, description, type, port`信息，其中 type 分为`微前端主应用`，`微前端子应用`；port 为开发环境端口号，默认 8080 主要用于 sub-app 类型

3. 进入创建好的项目模板目录 `cd yourapp`

4. 下载依赖 `npm install`

5. 运行项目 `npm run serve`

## 2. 使用位置

1. 主应用可在任意位置执行，构建项目。
2. 子应用需要在主应用内进行构建

## 3.无法加载文件 C:\Program Files\nodejs\xhzq.ps1，因为在此系统上禁止运行脚本

1. 以管理员身份运行 vscode;
2. 执行：get-ExecutionPolicy，显示 Restricted，表示状态是禁止的;
3. 执行：set-ExecutionPolicy RemoteSigned;
4. 这时再执行 get-ExecutionPolicy，就显示 RemoteSigned;

## 4.项目正在初始化中 失败（x）

请确保能够打开 https://github.com/
