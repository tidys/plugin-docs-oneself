# 插件api

此功能设计之初,是为了将接口暴露给使用者,方便使用者按照自己的意愿进行使用

目前暴露的接口有限,有以下接口
-  初始化    
```js
window.CCInspectorPlugin.init();
```
此接口将进行插件初始化操作,即向插件调试服务器进行链接.

- 收集节点树信息    
```js
window.CCInspectorPlugin.collectTreeInfo();
```
此接口将会收集当前场景的节点树信息,返回对象为object

- getNodeInfo    
```js
window.CCInspectorPlugin.getNodeInfo(nodeUUID);
```
此接口将会返回一个指定node的具体信息,注意,nodeUUID必须有效,否则将返回一个null

