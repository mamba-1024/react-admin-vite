<h1 align="center">Admin React</h1>

<div align="center">

开箱即用的中台前端解决方案。
</div>

## 项目背景

为了方便一些刚入门基础薄的前端开发者和**非专业**的前端，如：测试、后端 等同学，所以该项目没有使用 `typeScript`，而是直接使用 `JavaScript`。

旨在提供一个简单的构建工具，方便开发者快速搭建项目。


## 特性
- 基于 [`vite`](https://vitejs.dev/guide/#trying-vite-online) 框架，提供简单、高效的中台前端解决方案，上手容易
- 基于 [`Ant Design`](https://ant.design/components/overview-cn/) 的设计体系，提供基础设计组件，可以快速搭建高质量的中台前端解决方案
- 使用 [`React`](https://zh-hans.reactjs.org/) 的 基础的 [`jsx`](https://zh-hans.reactjs.org/docs/introducing-jsx.html) 语法，降低开发的上手难度
- 无刷新，可以快速切换主题，提升用户体验
- 内置两种常见的路由风格，深色和亮色
- 内置国际化，使用[react-i18next](https://react.i18next.com/)可以快速支持国际化应用，目前支持中文和英文两种，也可以自行添加语言
- 内置 `eslint`、`.prettierrc`、`.stylelintrc` 格式检查
- 内置 `commitlint`、`husky` 提交检查

## 目录结构
```
|-- src
|  |-- component  // 组件
|  |  |-- common  // 公共组件
|  |  |-- Layout  // 页面布局组件
|
|  |-- context  // 状态管理
|
|  |-- hooks  // 钩子函数
|
|  |-- i18n // 国际化方案
|
|  |-- pages  // 页面 根据文件夹名称区分模块
|
|  |-- public  // 图片资源
|
|  |-- routes  // 页面路由，分模块进行管理
|
|  |-- utils  // 工具函数
|  |  |-- request.jsx  // 请求封装
|
|  |-- APP.js  // 应用程序入口文件
|  |-- Main.js  // 程序挂载文件

```


## 本地启动

```
npm install

npm run dev

```

## 接口说明

系统中所有的接口全是 mock 接口，来源于 [fastmock](https://fastmock.site/#/)

接口清单如下：
```
[{
  "name": "用户信息",
  "url": "/user/list",
  "method": "post",
  "on": true
}, {
  "name": "登录",
  "url": "/api/login",
  "method": "post",
  "on": true
}]
```