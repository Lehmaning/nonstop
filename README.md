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

* 桌面端 (desktop.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/main/desktop.json)、[jsDelivr](https://cdn.jsdelivr.net/gh/Lehmaning/nonstop/desktop.json)
* 移动端 (mobile.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/main/mobile.json)、[jsDelivr](https://cdn.jsdelivr.net/gh/Lehmaning/nonstop/mobile.json)

注意：**两个规则可能不会同步更改。**

### 本地导入

下载[压缩包](https://github.com/Lehmaning/nonstop/archive/refs/heads/main.zip)，在 Gooreplacer 页面中导入即可。
