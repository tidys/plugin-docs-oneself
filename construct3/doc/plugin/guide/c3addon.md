Construct3插件的扩展名是`.c3addon`，本质上和`zip`没有任何区别，所以你可以像查看压缩文件一样查看插件的内容。

## 插件结构
- c2runtime：construct2的运行时文件，通常只包含runtime.js。
- c3runtime: construct3的运行时文件。
- lang
    - en-US.json ：语言文件，包含显示在编辑器界面的字段。
- aces.json：定义一些`actions(行为)`、`conditions(条件)`、`expressions(表达式)`  
- addon.json：
    定义一些插件的信息，详细字段参考[插件信息](./addon.json.md)
- icon.svg：插件的图标，这里使用的是svg
- plugin.js：声明插件的类，[详细字段参考](./plugin.js.md)
- types.js：编辑器中使用到的的类型
- instance.js：编辑器中使用的插件实例
- behavior.js：定义插件的[行为信息](./behavior.js.md)

