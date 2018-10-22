# 常见问题说明

## 小灯泡一直灰色怎么办?   
小灯泡灰色的意思就是没有发现正在运行的游戏,此时你需要运行你的游戏即可.

## cc-inspector+和cc-inspector的区别有哪些?
**cc-inspector+** 是[cc-inspector](https://github.com/tidys/CocosCreatorPlugins/tree/master/CocosCreatorInspector)的升级版本,具体区别如下:

| 功能            |        cc-inspector  |   cc-inspector+       |
| --------        |     --------         | --------             |
| 运行环境         | chrome内核浏览器      |     cocos creator     |
| 插件类型         | chrome插件           |     cocos creator 插件 |
| 是否需要自行安装  | 是                   |     否                 |
| 第一次发布时间 | 2017/11   |     2018/10    |
| 是否迭代       | 否    |     是    |
| 技术细节      | 遵守chrome插件开发规范 |遵守creator插件开发规范|

## 构建后游戏一直有报错
你可能需要了解下[插件设置](set.md#插件是否参与构建)的说明

## 构建过程提示不支持加密
在构建选项里面选择**加密脚本**功能,就会导致该问题

要剔除插件脚本,就需要修改src/settings.js,而creator在加密过程前后,均为暴露相关接口,所以无法对settings.js作出修改

目前给出的解决方案为,[手动移除插件](../commonSense/index.md#如何移除插件),再次进行构建即可

## 构建过程提示剔除插件脚本发生错误
要剔除插件脚本,就需要修改src/settings.js,如果构建后,没有发现构建目录中包含该文件,那么就会产生该错误!

目前给出的解决方案为,仔细排查构建后的项目文件,如果还是不行,请联系插件作者,如果急需解决,[手动移除插件](../commonSense/index.md#如何移除插件),再次进行构建即可



