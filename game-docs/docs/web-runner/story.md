# 故事表

### storyCfg
负责管理故事的配置

|   字段    |   说明 |
| :------  |   :------ |
| id         | 故事配置唯一ID |
| server       | 故事资源服务器地址|
| began       | 故事的起始ID,对应[story.id](#story)|

### story
负责配置每个故事的具体内容

|   字段    |   说明 |
| :------  |   :------ |
| id         | 故事唯一ID |
| gold       | 付费所需金币|
| next       | 下个故事ID,对应[story.id](#story)|
| scene       | 背景图url(相对于storyCfg.server)|
| role       | 角色配置ID,对应[role.id](#role)|
| roleProperty       | 人物属性表唯一ID,对应[roleProperty.id](#roleproperty)|
| speed       | 对话语速(可选值:1,2,3,,4,5,值越大,对话速度越慢)|
| word       | 对话内容|
| menu       | 选项分支ID,,对应[menu.id](#menu),多个选项以"｜"分割(注意,请不要复制该分隔符,请在英文状态下手动输入),0代表没有选项|
| music       | 音乐配置表ID,对应[music.id](#music)|
| voice       | 音效配置表ID,对应[music.id](#music)|
 
### music
负责管理故事的音频资源

|   字段    |   说明 |
| :------  |   :------ |
| id         | 音乐唯一ID |
| url       | 音频资源远程路径(相对于storyCfg.server)|
| loop         | 是否循环播放,1是,0不是 |

### roleProperty
负责管理每个故事中角色的具体信息,包括位置,大小等信息

|   字段    |   说明 |
| :------  |   :------ |
| id         | 角色属性唯一ID |
| x         | 显示位置X坐标 |
| y         | 显示位置Y坐标 |
| opacity         | 角色透明度 |
| scaleX         | 角色X轴缩放(-1,1) |
| scaleY         | 角色Y轴缩放(-1,1) |

### menu
负责管理故事中出现的选项分支

|   字段    |   说明 |
| :------  |   :------ |
| id         | 选项分支唯一ID |
| content         | 选项显示的内容 |
| act         | 选项跳转的故事ID,对应[story.id](#story) |
| property         | 要计算的属性 |
| calc         | 计算方式(未实现) |

### role
负责则管理故事中的角色信息

|   字段    |   说明 |
| :------  |   :------ |
| id         | 角色表唯一ID |
| name         | 人物名字 |
| icon         | 人物图片(相对于storyCfg.server) |
 
 
 
### property(未实现)
负责管理故事中使用的具体变量

|   字段    |   说明 |
| :------  |   :------ |
| id         | 属性表唯一ID |
| name         | 变量名字 |
| type         | 变量类型 |
| value         | 变量初始值 |
 
