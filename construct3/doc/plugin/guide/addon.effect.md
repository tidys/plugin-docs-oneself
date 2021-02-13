当插件类型为`effect`时，addon.json中会使用到如下配置，
也就是我们常说的shader


- category：分类
    可选值为
    - blend
    - color
    - distortion
    - normal-mapping
    - other

- blends-background：true/false
指示效果是否于背景混合

- cross-sampling：true/false
交叉采样
- preserves-opaqueness：true/false
- animated: true/false
effect是否是动画的
- must-predraw：true/false
是否强制预绘步骤

- extend-box
`"extend-box": { "horizontal": 30, "vertical": 30 }`

- is-deprecated :true/false
是否废弃

- parameters：参数
