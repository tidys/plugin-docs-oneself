## 说明


#### 问题1:一般输入密码错误,会导致出现错误
```
fatal: A branch named 'gh-pages' already exists.
```
删除全局安装的模块缓存
- mac
```
/usr/local/lib/node_modules/gh-pages/.cache
```
- win
```
C:\Users\用户名\AppData\Roaming\npm\node_modules\gh-pages\.cache
```
在这个缓存目录,会自动生成`gitbook build`的文件,最终上传的gh-pages分支,所以,运行的时间快慢跟仓库大小有关

#### 问题2:git配置问题
```
fatal: early EOF
fatal: the remote end hung up unexpectedly
fatal: index-pack failed
```
解决办法:
```
git config --add core.compression -1
```
compression 是压缩的意思，从 clone 的终端输出就知道，服务器会压缩目标文件，然后传输到客户端，客户端再解压。取值为 [-1, 9]，-1 以 zlib 为默认压缩库，0 表示不进行压缩，1..9 是压缩速度与最终获得文件大小的不同程度的权衡，数字越大，压缩越慢，当然得到的文件会越小


如果还是无法解决,可以尝试重新安装该模块
```
npm uninstall gh-pages -g
npm install gh-pages -g
```

```$xslt
- [creator字段分析](docs/save-field/index.md)
    - [预制体](docs/save-field/prefab.md)
```


