### PWA

- Q：什么是 PWA？
- A：Progressive Web App, 简称 PWA，是提升 Web App 的体验的一种新方法，能给用户原生应用的体验。PWA 能做到原生应用的体验不是靠特指某一项技术，而是经过应用一些新技术进行改进，在安全、性能和体验三个方面都有很大提升，PWA 本质上是 Web App，借助一些新技术也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点。PWA 的主要特点包括下面三点：
 - 可靠 - 即使在不稳定的网络环境下，也能瞬间加载并展现；
 - 体验 - 快速响应，并且有平滑的动画响应用户的操作；
 - 粘性 - 像设备上的原生应用，具有沉浸式的用户体验，用户可以添加到桌面。。PWA 本身强调渐进式，并不要求一次性达到安全、性能和体验上的所有要求。

- Q：PWA 为什么是渐进式的？
- A：降低站点改造的代价，逐步支持各项新技术，不要一蹴而就；新技术标准的支持度还不完全，新技术的标准还未完全确定。

- Q：基于成本考虑，PWA 的改造步骤推荐：
- A：PWA 涉及到从安全、性能和体验等方面的优化，想要一次性支持所有特性，代价很高，老板也不一定愿意投入大量人力来支持这项大工程。所以，从改造的成本考虑，我们也建议采取渐进式的方式，可以考虑按照下面的步骤来改造：
 - 第一步，应该是安全，将全站 HTTPS 化，因为这是 PWA 的基础，没有 HTTPS，就没有 Service Worker
 - 第二步，应该是 Service Worker 来提升基础性能，离线提供静态文件，把用户首屏体验提升上来
 - 第三步，App Manifest，这一步可以和第二步同时进行
 - 后续，再考虑其他的特性，离线消息推送等

PWA 提供了```添加到主屏幕```和```网络推送通知```功能，开发者可以很方便地编写配置文件或者是调用 API，让您的站点更具吸引力。
 - 添加到主屏幕
    >> PWA 提供了 manifest.json 配置文件，可以让开发者自定义添加至桌面时的图标、显示名称、启动方式等等信息，并提供 API 方便开发者管理网络应用安装横幅，让用户可以方便快捷地将您的站点添加到主屏幕中 [使用入门](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/introduction)

```JSON
{
    "short_name": "短名称",
    "name": "这是一个完整名称",
    "icon": [
        {
            "src": "icon.png",
            "type": "image/png",
            "sizes": "48x48"
        }
    ],
    "start_url": "index.html"
}

```

使用 link 标签将 manifest.json 部署到 PWA 站点 HTML 页面的头部，如下所示：

```html
<link rel="manifest" href="path-to-manifest/manifest.json">
```

 - 网络推送通知
    >> 即使在浏览器关闭的情况下，网络推送通知也可以像原生 APP 那样进行消息推送，并且将推送的消息显示在通知栏里。推送通知将分为以下两部分内容进行说明：


----

### Service Worker

**惊呼：站点秒开，离线也可以浏览，但不是 file:// 协议！！**

Service Worker 在 Web Worker 的基础上加上了持久离线缓存能力。

Service Worker 有以下功能和特性：
 - 一个独立的 worker 线程，独立于当前网页进程，有自己独立的 worker context。
 - 一旦被 install，就永远存在，除非被手动 unregister
 - 用到的时候可以直接唤醒，不用的时候自动睡眠
 - 可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）
 - 离线内容开发者可控
 - 能向客户端推送消息
 - 不能直接操作 DOM
 - 必须在 HTTPS 环境下才能工作
 - 异步实现，内部大都是通过 Promise 实现

Service Worker 的使用过程很简单，所处理的事情也相对单一，我们基本上需要做的就是利用这个 API 做好站点的缓存策略。

Service Worker 是个代理服务器，它的钩子就是凭借 scope 和 fetch 事件两大利器把站点的请求管理的井井有条。






----

参考链接：[PWA文档](https://lavas.baidu.com/pwa/README)
