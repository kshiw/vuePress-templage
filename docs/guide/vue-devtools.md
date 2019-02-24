# vue-devtools 安装指南

vue-dvtools是针对vue的调试工具。

安装：
1. github下载地址：[https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)

2. 下载好后进入vue-devtools-master工程，执行npm install， 然后执行npm run build。

3. 修改manifest.json 中的persistent为true
   ![vue-devtools01](/image/vue-devtools01.png)

4. 打开谷歌浏览器的更多工具—>扩展程序—>勾选开发者模式—>加载已解压的扩展程序—>选择vue-devtools-master\shells\chrome
   ![vue-devtools01](/image/vue-devtools02.png)

5. 运行一个通过vue-cli脚手架搭建的项目可以看到
   ![vue-devtools01](/image/vue-devtools03.png)

6. vue-devtools在生产模式下是不能进行调试的，会有如下提示
   ![vue-devtools01](/image/vue-devtools04.png)

解决办法：
可以在工程入口的js文件开头加一句Vue.config.devtools = true
![vue-devtools01](/image/vue-devtools05.png)

安装完毕！

注意：已经上线的vue项目是不能使用vue-devtools的，只有开发时的vue项目可以使用vue-devtools