# README规范

## 1. 项目描述
- 需要说明我们的项目名，项目功能简述，代码仓库地址，以及该项目的第一负责人。谁交接给我们的项目，谁就是该项目的第一负责人。


## 2. 如何运行

1. 开发环境配置。一般是我们需要的一些运行环境配置。
2. 开发&发布 命令。我们怎么通过命令开启本地开发，以及构建发布。
3. 代理配置。如果我们的项目在本地开发时需要用到一些代理工具，例如fiddler或whistle等，我们需要列出代理的配置项。最好是直接导出一个代理配置的文件，放在项目下
4. 发布。如果我们有用到一些发布平台，最好贴上项目的发布模块和发布单，减少我们发布的时间成本。
5. 错误告警及监控。相信我们平常都会对线上的项目部署错误告警和监控日志的服务，方便我们及时排查现网问题，这里我们可以加入项目的一些监控属性ID
6. 接口API。这里我们需要贴入项目中拉去的后台接口地址以及描述，还有我们的接口负责人，当后台服务异常，可以直接联系到后台同学。

7. 数据上报。我们在平常项目里都有加入一些数据上报，给产品同学统计业务数据用，这里我们最好阐述下都有哪些数据的上报。如果上报出问题，产品妹子找过来，我们不至于是一脸懵逼。


## 3. 业务介绍

1. 业务入口地址及渠道链接 即我们整个项目的入口页面，或者比较重要的页面地址。一般入口页面，我们可能会在多个渠道进行投放，那么需要列出所有的渠道链接

2. 各页面及描述 列出我们项目内的所有页面信息，比如下面这样：

页面目录|	页面描述|	页面链接|	参数描述
---|---|---|---
index|	首页|	now.qq.com|	无

## 4. 项目备注

项目中需要告诉其他开发者一些关键信息，比如我们页面打包构建，需要注意哪些问题等等，这些信息虽然不是必须的，但是可以帮助其他开发者降低开发的风险成本。
