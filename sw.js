importScripts('/blog/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/blog/_nuxt/529e5ab313a9366d8809.js",
    "revision": "f84224157b49e979697706bdd7dfcb33"
  },
  {
    "url": "/blog/_nuxt/5f8b50e1be513bb80227.js",
    "revision": "9de55f32151545e631ef120805e5652b"
  },
  {
    "url": "/blog/_nuxt/687e8f38e0ef2790a091.js",
    "revision": "261254664a81feb2c03f6a004916dc75"
  },
  {
    "url": "/blog/_nuxt/7c7f7af21c7765250776.js",
    "revision": "2ea0da7ccdcdf47e39eaccf84a9446ce"
  },
  {
    "url": "/blog/_nuxt/aa19fea874f0963b6e09.js",
    "revision": "5e56fad954bfd06a38fdc3ba7743455e"
  }
], {
  "cacheId": "blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/blog/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/blog/.*'), workbox.strategies.networkFirst({}), 'GET')
