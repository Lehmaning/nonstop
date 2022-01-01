# nonstop

## 规则介绍

Gooreplacer 规则，请搭配浏览器插件 [Gooreplacer](https://github.com/jiacai2050/gooreplacer) 使用。目前通过重定向可实现的功能有：

* 去除部分平台的外链跳转提醒。
* 部分静态资源改用第三方 CDN 加速。
* 部分短链接使用 [unshort.link](https://unshort.link) 解析（需要手动确认跳转）。
* 移除部分链接跟踪参数。
* Bilibili、Niconico 以及 YouTube 短链接直接跳转到原地址，并移除跟踪参数。
* 部分网站强制使用桌面端或移动端。
* 部分被墙网站改用墙内官方镜像。

部分规则因为会导致网站出错已经默认禁用，需要启用的话可以手动将规则下载到本地，然后在 Gooreplacer 配置页面中导入即可。

## 如何使用？

### 在线规则

1. 安装浏览器插件 [Gooreplacer](https://github.com/jiacai2050/gooreplacer)
2. 在 Gooreplacer 的配置页面中点击在线规则，点击编辑，将规则地址粘贴后点击 OK
3. 点击更新规则即可

本 repo 维护两个规则列表，请根据设备选择要导入的在线规则：

* 桌面端 (desktop.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/master/desktop.json)、[jsDelivr](https://cdn.jsdelivr.net/gh/Lehmaning/nonstop/desktop.json)
* 移动端 (mobile.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/master/mobile.json)、[jsDelivr](https://cdn.jsdelivr.net/gh/Lehmaning/nonstop/mobile.json)

注意：**两个规则可能不会同步更改。**
<!--
### 本地导入
在 [Release](https://github.com/Lehmaning/nonstop/archive/refs/heads/main.zip)，并解压缩，在 Gooreplacer 页面中导入解压出来的 gson 文件即可。
-->
## 本地构建
### 依赖
* nodejs
    * fs
    * path

### 生成
```shell
git clone https://github.com/Lehmaning/nonstop.git
cd nonstop
npm install
node src/merge.js
```

## 其它同类型扩展以及规则
* [keqingrong/static-files-host](https://github.com/keqingrong/static-files-host)：重定向谷歌静态资源及部分网站到官方镜像的 Gooreplacer 规则。
* [Teddy-Zhu/gooreplacerRule](https://github.com/Teddy-Zhu/gooreplacerRule)：重定向谷歌静态资源到极客族加速服务的旧版 Gooreplacer 规则。

* [ClearUrls](https://github.com/ClearURLs/Addon)：一个清理网页中 URL 的扩展，处理网页跳转链接的规则表现更灵活，甚至可以直接清理页面内的链接。<br/>
对应的规则正在收集中。
    * [lifegpc/clearUrls](https://github.com/lifegpc/clearUrls)：针对中文网站的 ClearUrls 扩展规则。