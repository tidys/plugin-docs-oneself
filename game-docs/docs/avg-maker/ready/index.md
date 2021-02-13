# 准备工作

## 1.下载安装Cocos Creator软件

下载地址：[http://www.cocos.com/creator](http://www.cocos.com/creator)   
推荐版本：V2.x

## 2. 新建avg项目

1. 安装完毕creator之后，打开软件。
2. 在Dashboard面板中选择**新建项目**
![](/assets/createProject.png)
3. 创建项目成功之后，creator会自动打开该项目，如图
![](/assets/emptyProject.png)
4. 一般来说creator项目的结构大致是这样子的：
    * assets： 游戏的所有资源代码
    * library
    * packages：游戏插件安装位置
      * plugin-a：插件A
        * main.js
        * package.json
      * plugin-b：插件B
        * main.js
        * package.json
    * settings
    * temp
    * project.json
    * jsconfig.json

## 3. 安装avg插件
获取avg-maker插件安装包。
将插件拷贝到项目的packages目录下，为了保证插件被正确加载，重启一下creator即可。




