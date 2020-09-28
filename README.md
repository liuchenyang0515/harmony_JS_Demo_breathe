![在这里插入图片描述](https://cdn.jsdelivr.net/gh/liuchenyang0515/harmony_JS_Demo_breathe@1/read_png/p1.png)
> 没有能够熄灭满天星光
> 每一位开发者，都是华为要汇聚的星星之火

第一个鸿蒙app----华为轻量级运动手表
[b站学习视频](https://www.bilibili.com/video/BV1hv411179b)

[我的代码仓库](https://github.com/liuchenyang0515/harmony_JS_Demo_breathe)
个人手敲代码，视频每一个章节的我都对应一个分支
视频选集 | 代码分支
----- | -----
p4 | step1
p5 | step2
p6 | step3
p7 | step4
p8 | step5
p9 | step6
p10 | step7
p11 | step8
p12 | step9
p13 | step10
p14 | step11
p15 | step12
p16 | step13
p17 | step14
p18 | step15


**以下是我从官网和开发者论坛找到的内容，希望能帮助到大家**

✅鸿蒙官方文档在哪找

有三个地址，第一个暂时全面点，第二个更偏向底层的硬件开发板，第三个是JS的API

[https://developer.harmonyos.com/cn/docs/documentation/doc-guides/start-overview-0000000000029602](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/start-overview-0000000000029602)

[https://gitee.com/openharmony/docs/blob/master/quick-start/Readme-CN.md](https://gitee.com/openharmony/docs/blob/master/quick-start/Readme-CN.md)

[https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-framework-syntax-js-0000000000611432](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-framework-syntax-js-0000000000611432)

很多人问的语法知识，其实在官方文档里都有了，只是大家没注意到官方文档右上角，除了指南还有参考（API）
<br>
✅鸿蒙的开发IDE（DevEco）如何下载

下载地址如下，这个IDE是从jetBrains的开源项目改造的。

[https://developer.harmonyos.com/cn/develop/deveco-studio#download](https://developer.harmonyos.com/cn/develop/deveco-studio#download)

<br>
✅新建Project后提示ERROR: Failed to open zip file. Gradle's dependency cache may be corrupt (this sometimes occurs after a network connection timeout.) Re-download dependencies and sync project (requires network)

把项目文件夹里的gradle -> wrapper -> gradle-wrapper.properties里的
```javascript
distributionUrl=https\://services.gradle.org/distributions/gradle-5.4.1-all.zip
```
改成
```javascript
distributionUrl=https://downloads.gradle-dn.com/distributions/gradle-5.4.1-all.zip
```
再重启DevEco试试。本来gradle会自动转到中国的这个cdn。我看到原文里的https后面有个斜杠不知道是什么意思，是不是这里多加了一个斜杠导致不能顺利解析网址。

❎HVD Manager下载问题，很遗憾这个一直也没有解决，这里贴两篇帖子做参考

HVD Manage无法下载问题从提出到解决

[https://developer.huawei.com/consumer/cn/forum/topicview?tid=0202360949317840956&fid=0101303901040230869](https://developer.huawei.com/consumer/cn/forum/topicview?tid=0202360949317840956&fid=0101303901040230869)

【HVD Manager】下载时候一直提示在登录的问题解决方法

[https://developer.huawei.com/consumer/cn/forum/topicview?tid=0203361547665100946&fid=0101303901040230869](https://developer.huawei.com/consumer/cn/forum/topicview?tid=0203361547665100946&fid=0101303901040230869)

✅DevEco中打开Tools -> HVD Manager时，网页不出现官方文档中提示的允许界面

暂时不知道原因，当时我退出了登录，关闭IDE并且重启了电脑，重新打开了出现了认证界面

✅DevEco如何下载有时候使用Dev eco时无法使用自动补全

这是因为语言服务器出现问题关闭了，在右下角的圆形图标那里可以看到是哪个语言服务器出了问题。直接左上角File -> Close Project，关闭工程，然后重新进入即可，这时语言服务器重启了就好了。

✅为什么我新建布局文件后直然后findComponentById一直报红色找不到的问题？
![在这里插入图片描述](https://cdn.jsdelivr.net/gh/liuchenyang0515/harmony_JS_Demo_breathe@1/read_png/p2.png)
目前这个2.0.8.203有些bug，官方已收到反馈，后续会修复。

目前在新建布局文件的时候，ResourceTable一定找不到你的布局文件和id，此时需要重启编译器，每新建一个布局文件，就需要重启编译器才能找到你布局文件对应的id。

✅不是说鸿蒙支持的是ES5.1吗，怎么还能用ES6的语法

鸿蒙的js runtime没有使用 V8，而是选择了三星的 JerryScript。JerryScript 是用于物联网的超轻量 JavaScript 引擎。它能够在内存少于 64 KB 的设备上执行 ECMAScript 5.1 源代码。这也是为什么在文档中说鸿蒙 JS 框架支持 ECMAScript 5.1 的原因。但鸿蒙会把一部分能支持的ES6语法自动转化为ES5.1。

https://blog.csdn.net/JustJavaC/article/details/108538873

轻量级智能穿戴支持ES6的语法如下（非轻量级的没有说明）：

```javascript
let/const

arrow functions

class

default value

destructuring assignment

destructuring binding pattern

enhanced object initializer

for-of

rest parameter

template strings
```

[https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-syntax-js-0000001055613463](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-syntax-js-0000001055613463)



✅DevEco中打开View -> Tool Windows 找不到Previewer

关闭当前工程，删除后重建工程，选择Lite Wearable中的任意一个模板，进入后Previewer出现。

TV和Wearable暂时没有Previewer，可以打开Tools -> HVD Manager，使用虚拟设备手表或者TV代替。
**博主个人第一次没找到，运行了模拟器之后就找到了。**

✅DevEco 运行按钮和Debug的虫子按钮变成灰色

这是因为丢失了配置Configuration，在运行按钮前面会出现个+add configuration的按钮。出现丢失配置的原因可能是之前卸载重装过DevEco，但是没有卸载完全。

先在系统里卸载DevEco（不要使用DevEco安装程序自动卸载，这会导致卸载不完全），然后卸载完全后重新安装DevEco。

如果之前卸载完全的话，安装好之后第一次启动DevEco时就会出现是否import配置的对话框，选择不导入后进入软件发现运行按钮变好了。

✅有时我编程时语法什么都是正确的，模拟器却不能正确显示？

模拟器需要网络，如果网络不正常时，模拟器会出现卡顿、卡死，无法正确响应代码的情况

✅模拟器启动失败、认证失败等等

请求是通过网络请求的，退出网页登录重进，重启IDE，注销用户，重启电脑，第一种不行就第二种，只要你网络没问题，应该就好了。还有一种情况是在使用chrome时一直无法认真，默认浏览器换成微软的edge浏览器就认证通过了。

✅新建js项目后，每次都要一路定位到index.hml，有没有更轻松的方法？
<br>
![在这里插入图片描述](https://cdn.jsdelivr.net/gh/liuchenyang0515/harmony_JS_Demo_breathe@1/read_png/p3.png)
<br>
项目新建后会默认打开app.js，这时只需要点图中的十字图标，就可以很快定位到文件了。离pages只有一步之遥。省得你再去手动点entry -> src -> main -> js -> default

✅怎样快速打开previewer
<br>
![在这里插入图片描述](https://cdn.jsdelivr.net/gh/liuchenyang0515/harmony_JS_Demo_breathe@1/read_png/p4.png)
<br>

左下角有个窗口的图标，点一下里面就有previewer

✅为什么官方教程找到的有些组件的语法用不了？

不同设备，支持的语法集大小不一样，猜测是跟内存和屏幕大小有关系。内存和屏幕小的设备支持的语法集比较小。有的语法TV支持，但是Lite Wearable不支持。

比如页面路由语法中Lite Wearable只能用router.replace这个语法，router.push、router.back这些语法都用不了。

同时，JS UI不支持后台页面，当打开一个页面时，上一个页面就销毁了。

