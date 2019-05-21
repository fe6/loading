/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a48074b010ac18678b38337d6b1dc54"
  },
  {
    "url": "assets/css/0.styles.43b70755.css",
    "revision": "9d33ee896f58766fc0ad7a70f0ecef37"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9b2e7370.js",
    "revision": "f27daba15b7c7f2f94b7d96149da7ebe"
  },
  {
    "url": "assets/js/3.45322922.js",
    "revision": "0e70d3394b1dffe710d094b93d66ed7a"
  },
  {
    "url": "assets/js/4.f71a369c.js",
    "revision": "957092c8513d6d2bb7a23218191ae277"
  },
  {
    "url": "assets/js/5.b7ff157d.js",
    "revision": "b02fe4526494abd5f841299c37128136"
  },
  {
    "url": "assets/js/6.58189f0b.js",
    "revision": "e0e96cbb81e11160dfae79e17821dc84"
  },
  {
    "url": "assets/js/app.de79062f.js",
    "revision": "7bd420b30c39129720f3fec859d17872"
  },
  {
    "url": "index.html",
    "revision": "6ecdd512d8fb49a13827477a40143332"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "pc/zh-cn.html",
    "revision": "e9406d9eb03b9f39296fb3231ca95491"
  },
  {
    "url": "wap/zh-cn.html",
    "revision": "de965e4a6cb78a3da1699a0fa0c8db3f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
