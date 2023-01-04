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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "492f412707ec584de9f2fc0f296860d8"
  },
  {
    "url": "assets/css/0.styles.12c93c8c.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f2f57d3.js",
    "revision": "c83f2f4dff7aff81c3639bcb1275f25b"
  },
  {
    "url": "assets/js/11.e93ba376.js",
    "revision": "6332b1fdbf4da3098bc2a9f54807b6f8"
  },
  {
    "url": "assets/js/12.079805e1.js",
    "revision": "8b0f9237c3bb88c8bba9f824c0b3af7e"
  },
  {
    "url": "assets/js/13.4af98693.js",
    "revision": "dedb2ea0837cf02ccc3d35e79a964c99"
  },
  {
    "url": "assets/js/14.51dfb6aa.js",
    "revision": "132fa818b53c6b3c4ae99d389292384d"
  },
  {
    "url": "assets/js/15.7bd667ca.js",
    "revision": "a451607350e78e4da52e1f2a710d858c"
  },
  {
    "url": "assets/js/16.77ad9260.js",
    "revision": "8960d575d229a603a5779e21b91d5be4"
  },
  {
    "url": "assets/js/17.9f4102b3.js",
    "revision": "ab5802c321606f0eb24429bf1c5ef4ce"
  },
  {
    "url": "assets/js/18.b594a6b2.js",
    "revision": "e5b7d833e6675c8268b68c9515be61ea"
  },
  {
    "url": "assets/js/19.7b395b59.js",
    "revision": "2a951126b2e68ef00f1a5b6b47241b29"
  },
  {
    "url": "assets/js/20.464020aa.js",
    "revision": "7bb17b170f4ca25d040cbf88deb43bb4"
  },
  {
    "url": "assets/js/21.75bf6c9d.js",
    "revision": "44843b04b76ed1a06c08e65ca5bb8b6b"
  },
  {
    "url": "assets/js/22.307e825c.js",
    "revision": "ccc0d346aadcf518d99972dd75c311ab"
  },
  {
    "url": "assets/js/23.95faae54.js",
    "revision": "3c3d52c3e54459cb670c252f6b73f240"
  },
  {
    "url": "assets/js/24.1acfb38a.js",
    "revision": "e99c4637e9dd3b8f3ee92ca97d7d6de5"
  },
  {
    "url": "assets/js/25.89d81fd4.js",
    "revision": "6e811613991ebf26a973f517fe06f238"
  },
  {
    "url": "assets/js/26.f63ea45c.js",
    "revision": "64afad2f60f3017b528cf3566a15a457"
  },
  {
    "url": "assets/js/27.f9b6c104.js",
    "revision": "894dc7d534ea19e8c1d1b925f2d0eb5b"
  },
  {
    "url": "assets/js/28.84d6415e.js",
    "revision": "083719da789333acf0827c609e37844b"
  },
  {
    "url": "assets/js/29.90b47631.js",
    "revision": "132e93a27ee9072990539cf29d9574c7"
  },
  {
    "url": "assets/js/30.87bc84ac.js",
    "revision": "2afbc7e29f4bf07496e79ef3a01bae74"
  },
  {
    "url": "assets/js/31.6ceef109.js",
    "revision": "00ceb0e2f6509f32195033b24e472571"
  },
  {
    "url": "assets/js/32.5bffb61a.js",
    "revision": "14519553e413fb75afcf50d3e644a25d"
  },
  {
    "url": "assets/js/33.35ec9cad.js",
    "revision": "f492aa08f3143f1b4aeaf193c72f3533"
  },
  {
    "url": "assets/js/34.a5791133.js",
    "revision": "fd7eba7d88c2ec83c6e4310fcb9d3ad0"
  },
  {
    "url": "assets/js/35.fa65f12b.js",
    "revision": "1527c025b1403dc48afa2eeadabcac4f"
  },
  {
    "url": "assets/js/36.1267087c.js",
    "revision": "43ca179a98d8bbf1dda71e5ccc616549"
  },
  {
    "url": "assets/js/37.d211658e.js",
    "revision": "b6575f3c91536461b62fae4c6d76e4c4"
  },
  {
    "url": "assets/js/38.086f98dc.js",
    "revision": "48a8bc069a25b77d42515026bbec9345"
  },
  {
    "url": "assets/js/39.0b34c430.js",
    "revision": "95b7a939977bd449d8079d48a5bfc406"
  },
  {
    "url": "assets/js/4.bb006f44.js",
    "revision": "f4263c236dfaabc96645040d157b5303"
  },
  {
    "url": "assets/js/40.20ae22a0.js",
    "revision": "6abf884451b68cfbc169ecb7a7698299"
  },
  {
    "url": "assets/js/5.66d20001.js",
    "revision": "8837584cfd4649e03fb1a91127d416f4"
  },
  {
    "url": "assets/js/6.01620b08.js",
    "revision": "c1cb3ef1b4bc39bdf6dac6d658eceb4f"
  },
  {
    "url": "assets/js/7.89eac06a.js",
    "revision": "65ad5d3613e255fd1f72cd587370ce2a"
  },
  {
    "url": "assets/js/8.7860022d.js",
    "revision": "7866e5ec4b3bc5b29887c5b74d18d162"
  },
  {
    "url": "assets/js/9.7f8903d3.js",
    "revision": "fb8cb34ac3c9543fc4502f5f5a91e268"
  },
  {
    "url": "assets/js/app.4ac29be6.js",
    "revision": "f2cd4ad00f9ee74786ad6aa7ae8d0fe2"
  },
  {
    "url": "assets/js/vendors~docsearch.eb9067e8.js",
    "revision": "f5f3a74ff3aa6a503d72919490ac7a67"
  },
  {
    "url": "assets/js/vendors~notification.7822af06.js",
    "revision": "572675a5d71ac99ae57daae40bc30654"
  },
  {
    "url": "faq/index.html",
    "revision": "d292187a577895595010167d97a81a1e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4d649ff9948586e34e7c3492d633c506"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "785ce8b5b8ab3ac8d051ea21f322061e"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ffab14500bdbfbd30ff18b300850e3e6"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f64505598538c5ed3085ac185d84bd17"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c533809b2141c6ff9962c6355c58649f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "90ab619125a499b23f25c0f18b01c078"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c2f631fe821271c6ab5b125949eccd8d"
  },
  {
    "url": "guide/index.html",
    "revision": "b4120a6b9e53ecca7df897f791ebad0b"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "159fa91d534a842884f09d759aa784b3"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "b056c0d14b3a8e36db582a3a3a900389"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "64c42275f6a00696b82045595fc95ac4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ca9c1130960d7a876ced5757418aa029"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "8a378d0d69540876ad41e32610751a95"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "185cdf7cafafe908822386f5e6c9b4b3"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "54af33feb2ca90115367a020664e83b0"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "687791063e7038dee6549848e18ec831"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "6c6fe8420403676c080764e972d9ef7b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c6cabff3dd7d3ac99410e5de7dd9929a"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "02f4a3ed5060ef99ec95d7088c8c9796"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f6b1438818030ae7bd88cebc902a11bc"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "ce3580fc768b6e65285ce33e8ccb81cf"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "59b84c61326d6921b7ace8d88c0ff283"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "6498e719285ab4dda6fcd8ee050dc0da"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "a0d307dc4154270c1a364769cc5200a2"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "e4133d62294c9a14ca78e02bd59d0c76"
  },
  {
    "url": "guide/snaps.html",
    "revision": "005e6cbfe8ae87066f67f13ee77f7ae4"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  }
].concat(self.__precacheManifest || []);
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
