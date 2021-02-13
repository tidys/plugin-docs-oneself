# 预制

## cc.Prefab
```$xslt
{
    "__type__": "cc.Prefab",
    "_name": "",
    "_objFlags": 0,
    "_native": "",
    "data": {
      "__id__": 1
    },
    "optimizationPolicy": 0,
    "asyncLoadAssets": false
  }
```

## cc.PrefabInfo

```$xslt
 {
    "__type__": "cc.PrefabInfo",
    "root": {
      "__id__": 1
    },
    "asset": {
      "__id__": 0
    },
    "fileId": "c9Imb++iNFhZFj6NHzzIlp",
    "sync": false
  }
```

预制体的信息
- filedId:ff
- sync:是否同步


## cc.Color
颜色
```$xslt
    "_color": {
      "__type__": "cc.Color",
      "r": 255,
      "g": 255,
      "b": 255,
      "a": 255
    },
```
## cc.Size
尺寸
```$xslt
{
    "__type__": "cc.Size",
    "width": 0,
    "height": 0
}
```

## cc.Vec2
```$xslt
{
    "__type__": "cc.Vec2",
    "x": 0.5,
    "y": 0.5
},
```
## cc.Vec3
```$xslt
{
    "__type__": "cc.Vec3",
    "x": 0,
    "y": 0,
    "z": 0
}
```
## cc.Quat
四元数
```$xslt
{
    "__type__": "cc.Quat",
    "x": 0,
    "y": 0,
    "z": 0,
    "w": 1
}
```
## cc.Node
```$xslt
{
    "__type__": "cc.Node",
    "_name": "New Node",
    "_objFlags": 0,
    "_parent": null,
    "_children": [],
    "_active": true,
    "_level": 2,
    "_components": [],
    "_prefab": {
      "__id__": 2
    },
    "_opacity": 255,
    "_color": "cc.Color",
    "_contentSize": "cc.Size",
    "_anchorPoint": "cc.Vec2",
    "_position": "cc.Vec3",
    "_scale": "cc.Vec3",
    "_rotationX": 0,
    "_rotationY": 0,
    "_quat": "cc.Quat",
    "_skewX": 0,
    "_skewY": 0,
    "_zIndex": 0,
    "groupIndex": 0,
    "_id": ""
  },

```
- _name:字符串类型-节点名字
- _active:bool类型-节点是否显示隐藏
- _opacity:透明度,取值(0~255)
- _color:节点颜色
- _contentSize:尺寸大小
- _anchorPoint:节点锚点
- _position:节点位置
- _scale:节点缩放系数
- _rotationX:节点旋转
- _rotationY:节点旋转
- _quat:节点选择四元数
- _skewX:斜切x
- _skewY:斜切y
- _zIndex:深度
- groupIndex:默认分组
- _level:节点的层级,相同level的节点说明是同级关系
- _prefab:?
- _parent:父节点,数组下标
- _children:数组类型     
    ```$xslt
    [{"__id__":2}]
    ```
    - __id__ 子节点index,因为是数组,所以id标识数组的下标信息






