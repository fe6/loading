# 登录弹框组件

> Vue.js 2.x C端的业务组件。

[![emlogin](https://img.shields.io/npm/v/emlogin.svg?style=flat-square)](https://www.npmjs.org/package/emlogin)
[![NPM downloads](http://img.shields.io/npm/dm/emlogin.svg?style=flat-square)](https://npmjs.org/package/emlogin)
[![Package Quality](http://npm.packagequality.com/shield/emlogin.svg)](http://packagequality.com/#?package=emlogin)
[![NPM downloads](https://img.shields.io/npm/dt/emlogin.svg?style=flat-square)](https://npmjs.org/package/emlogin)

[![Sauce Labs Test Status (for master branch)](https://badges.herokuapp.com/browsers?googlechrome=7&firefox=7&microsoftedge=10&iexplore=9&safari=10.10)](https://saucelabs.com/u/_wmhilton)

## 安装

```
$ yarn add emlogin
```

## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 常用命令 ( package.json 的 scripts 中可以找到所有命令)

``` bash
# 安装依赖( package.json 中的 dependencies 部分 ) dependencies
npm install

# development 环境的本地热加载服务，访问地址: localhost:8080
# 在 config 中修改端口号
npm start

# 利用 jest 单元测试
npm test

# 打包组件库
npm run build

# 打包官网
npm run build:site

# 打包官网，打包并查看捆绑分析器报表
npm run build --report

# JavaScript 的代码规范监测
npm run eslint

# style 的代码规范监测
npm run stylelint

# 进行 style 和 JavaScript 的规范检测
npm run lint-staged

# 上传单元测试覆盖率报告
npm run codecov
```

## 说明

本仓库是用脚手架 [fecli](https://github.com/fe6/fecli)，结合 [component-template](https://github.com/fe6/component-template) 模板生成的。
