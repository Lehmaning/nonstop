# nonstop
## 规则介绍
Gooreplacer 规则，请搭配浏览器插件 [Gooreplacer](https://github.com/jiacai2050/gooreplacer) 使用。目前通过重定向可实现的功能有：

* 部分被墙网站改用墙内官方镜像。
* 重定向部分信息采集站、爬虫网站至源站，如GitCode。
* 部分静态资源改用 CDN 加速。
* 移除部分链接跟踪参数，如 ```utm```、```share```、```spm```等。
* 部分网站强制使用桌面端或移动端。
* Bilibili、Niconico 以及 YouTube 短链接直接跳转到原地址，并移除跟踪参数。
* 去除部分平台的外链跳转提醒。（目前因为URLEncoding，会无法跳转到正确的网址，请使用[替代品](https://github.com/OldPanda/Open-the-F-king-URL-Right-Now)来保证跳转）
* 部分短链接使用 [unshort.link](https://unshort.link) 解析（需要手动确认跳转，目前已禁用）。

大部分规则因为会导致网站出错已经默认禁用，需要启用的话可以手动将规则下载到本地，然后在 Gooreplacer 配置页面中导入并启用即可。

## 如何使用？
### 在线规则
1. 安装浏览器插件 [Gooreplacer](https://github.com/jiacai2050/gooreplacer)
2. 在 Gooreplacer 的配置页面中点击在线规则，点击编辑，将规则地址粘贴后点击 OK
3. 点击更新规则即可

本 repo 维护两个规则列表，请根据设备选择要导入的在线规则：

* 桌面端 (desktop.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/master/desktop.json)、[jsDelivr](https://fastly.jsdelivr.net/gh/Lehmaning/nonstop/desktop.json)
    * 仅启用的规则 (desktop.thin.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/master/desktop.thin.json)、[jsDelivr](https://fastly.jsdelivr.net/gh/Lehmaning/nonstop/desktop.thin.json)
* 移动端 (mobile.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/master/mobile.json)、[jsDelivr](https://fastly.jsdelivr.net/gh/Lehmaning/nonstop/mobile.json)
    * 仅启用的规则 (mobile.thin.json)：[Raw](https://github.com/Lehmaning/nonstop/raw/master/mobile.thin.json)、[jsDelivr](https://fastly.jsdelivr.net/gh/Lehmaning/nonstop/mobile.thin.json)

### 本地导入
1. 在 [Release](https://github.com/Lehmaning/nonstop/archive/refs/heads/main.zip)，并解压缩，在 Gooreplacer 页面中导入解压出来的 gson 文件即可。
注意：release 页面下的文件不会及时更新。
2. 下载在线规则后导入即可。

## 本地构建
### 生成
```shell
git clone https://github.com/Lehmaning/nonstop.git
cd nonstop
utils/merge
```

### 测试工具
你可以用如下命令对指定 URL 进行测试：
```shell
utils/sandbox <desktop/mobile> <source URL>
```

## 注意事项
* 由于 Gooreplacer 的规则为增量同步，如果因为使用了本在线规则导致网站出现问题可以尝试清空规则然后再同步，本地导入同理。
* 使用本规则可能会因为插件反复清理链接参数导致网站（如必应、知乎等）访问超时，刷新可以解决问题。
* 重定向 recaptcha 也可能导致 Google 官方网站登录时出现错误提示，如果有发现同样的问题请提交 issue 以便进一步优化规则。

## 其它同类型扩展以及规则
* [keqingrong/static-files-host](https://github.com/keqingrong/static-files-host)<br/>重定向谷歌静态资源及部分网站到官方镜像的 Gooreplacer 规则。
<!--* [Teddy-Zhu/gooreplacerRule](https://github.com/Teddy-Zhu/gooreplacerRule)<br/>重定向谷歌静态资源到极客族加速服务的旧版 Gooreplacer 规则。-->
* [OldPanda/Open-the-F-king-URL-Right-Now](https://github.com/OldPanda/Open-the-F-king-URL-Right-Now)：去除手动跳转的油猴脚本。
* [ClearUrls](https://github.com/ClearURLs/Addon)<br/>一个清理网页中 URL 的扩展，处理网页跳转链接的规则表现更灵活，甚至可以直接清理页面内的链接。<br/>
对应的规则正在收集中。
    * [lifegpc/clearUrls](https://github.com/lifegpc/clearUrls)<br/>针对中文网站的 ClearUrls 扩展规则。
