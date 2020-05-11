'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b8052f41686583171dfb1f401bc510cb",
"/": "b8052f41686583171dfb1f401bc510cb",
"icons/apple-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"icons/apple-icon-152x152.png": "c0374cd9bd6848c227818012a8aa419e",
"icons/ms-icon-150x150.png": "e317aad0085615877abbf677e1be40d2",
"icons/favicon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"icons/apple-icon-180x180.png": "e48a9935b340d147f3ec87fbd0b94005",
"icons/apple-icon-114x114.png": "701cac581175059238a414f6d19447db",
"icons/apple-icon-57x57.png": "b44cdaec2a501c911c039a4496394ad3",
"icons/ms-icon-70x70.png": "15285b7e35c9cf31244b3ac626c9ec0d",
"icons/apple-icon-60x60.png": "0e76dbea8d4509dc8c103b4ebe1628ba",
"icons/favicon-16x16.png": "9cdb41b8f9b731da4f83bb0d0e84992c",
"icons/ms-icon-310x310.png": "abe43d3cd618943c6f3be4fd07ff5068",
"icons/android-icon-36x36.png": "96a3e622b59f0aba5c9cf10d1911abef",
"icons/apple-icon.png": "cd326132486b0bff49f1e0227e7ce69c",
"icons/favicon.ico": "3c0b06e426f3a5f2c9afcc1cf580d8d4",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"icons/ms-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"icons/apple-icon-precomposed.png": "cd326132486b0bff49f1e0227e7ce69c",
"icons/android-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"icons/android-icon-48x48.png": "b1306559376a5f20e6fb55e15125d019",
"icons/apple-icon-76x76.png": "4e36958e440b044aac5b31c1e883371f",
"icons/apple-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"icons/apple-icon-120x120.png": "448b9431e2c58f8c931436032964e995",
"icons/favicon-32x32.png": "b789218430188e48576b4aa67313a7f7",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"icons/android-icon-192x192.png": "dd753a63a27f45bed45e1bae823f2f51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/assets/img/lock.png": "b1c8da3b7b41c423315097f88c43279b",
"assets/assets/img/create_mvp.png": "46d86678abc625a0f12621cd00264cf2",
"assets/assets/img/touch_event.png": "bf09a69aefa57857971cbc417b010a9e",
"assets/assets/img/kotlin_3.png": "8bce1b30e211e137b1f29e2c13afcfdf",
"assets/assets/img/flutter_01.png": "04eca5a5cf95fc6fc24a53587601a76e",
"assets/assets/img/api_2.png": "1e29f9a37e5d4ee0ed703d777e9db36f",
"assets/assets/img/flutter_04.png": "aba419355e14a84123be52bad4f9356e",
"assets/assets/img/chat_something.png": "f0cb4fe76874e5a835ce8a27c676d95b",
"assets/assets/img/new_day.png": "9a384a085357d08e1fb736c0fefa96b9",
"assets/assets/img/kotlin_4.png": "08bee753c19dc3c38a5e4164c80a9701",
"assets/assets/img/flutter_05.png": "2501b597c2b808cca8bbb7f2001f116c",
"assets/assets/img/juejin.png": "e4f98e20c16cf47e62687e4d01afc8a0",
"assets/assets/img/my_idea.png": "67338b884252a1fc2be773c471a3d0fa",
"assets/assets/img/data_binding.png": "7a57e06fe3d1c5e4b561f40bd1077b64",
"assets/assets/img/hashmap.png": "e8fb0a971fcd6f8da76982245395bf08",
"assets/assets/img/api_1.png": "acf11ff0bdcd9b78eaee9acf31dd01a8",
"assets/assets/img/mourn.png": "ff04d13fb859b0c50bdf6945615e7c36",
"assets/assets/img/zongjie_2019.png": "9dc758759d0209893880d2fecd717c39",
"assets/assets/img/flutter_02.png": "407e825825d6ca4e2b6e4671d3ae9bfd",
"assets/assets/img/changlu.png": "db45516660102ce479929d3cf0e6f6e7",
"assets/assets/img/guoqing_2019.png": "684191c50b526645af8e39f29f0b3627",
"assets/assets/img/activity_start.png": "9a4f43d4ba9a6f7a103eef7e79b1e022",
"assets/assets/img/sleep_early.png": "8bf9bc403d04984d83062fd17afc54ed",
"assets/assets/img/room_database.png": "12f7230c70accfbdf91701f000f52758",
"assets/assets/img/wish_list.png": "2e5fcc14d0f0ce01d7c11729b5654bbd",
"assets/assets/img/retrofit.png": "510ea2f828ec235350204a1823f0c695",
"assets/assets/img/activity_start.jpg": "f16911813e2aea064a9bbd885212d8cb",
"assets/assets/img/view_step.png": "26c6a21b48dcd7601bd0e44048ad4057",
"assets/assets/img/kotlin_5.png": "4b91717f23bbe0207c589df77e5969d2",
"assets/assets/img/bugly.png": "a69b853aa47cbbca2c3a945dfa1cccd2",
"assets/assets/img/eventbus.png": "0c965a283da2cffb491269c9adf48b1d",
"assets/assets/img/kotlin_1.png": "79e75e57505c9d9f6bd27d7298594f53",
"assets/assets/img/github.png": "8e19edd9c39ab207200c51a5f2a95441",
"assets/assets/img/flutter_03.png": "30c68ee694f153a8e96ca4fafae2902f",
"assets/assets/img/kotlin_2.png": "06bc549c3551be9b1832315ae62fd4a0",
"assets/assets/img/handler.png": "112b31ff1270758d4309f61813800009",
"assets/assets/img/pic_text.png": "0e25c49ff018216c4b2845514c427c7e",
"assets/assets/img/wechat.png": "f93e5cd8ec449e4cfc0b8371f97414fe",
"assets/assets/img/head.png": "bf4de78bae7917467d833f6c7f009d37",
"assets/assets/img/wechat_pay.png": "a2f2b42b37b353a720aa841bb1fd21c7",
"assets/assets/img/study_flutter.png": "3714e5aecf50aea98829c51ef365fca7",
"assets/assets/img/play_1.png": "ab7843982d217ab0ffa1ef29450eb505",
"assets/assets/img/loading.gif": "33dbecea47ca2859427ae50c98b634ab",
"assets/assets/img/steam.png": "4d601f62031ddc22684d3d2925005b47",
"assets/assets/json/config_tag.json": "150cefa59752cd8105f2b14e9e5e002b",
"assets/assets/json/config_topic.json": "da886d6aee77a70848c337148fc9e14f",
"assets/assets/json/config_archive.json": "d0adb662fc314c34a24fc338ff1b6e0e",
"assets/assets/json/config_life.json": "dc2c012ad99013ae6fcba08c7176c953",
"assets/assets/json/config_study.json": "92f4f1fe780df68aa964fe78ffbfac95",
"assets/assets/json/config_all.json": "df2cddece28af65541b7a397ff88bdc2",
"assets/assets/fonts/huawen_kt.ttf": "2bd4fe0813fd329966191f6fb2165d7f",
"assets/FontManifest.json": "fe0bb2eb1515b6f797f8f3c11bf5c024",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "6b880be7c4319f236865a2366e937ac2",
"assets/LICENSE": "7d4aa38a3249a85c65b99e0d4e82bc14",
"main.dart.js": "73fa78e5ac16dfc244e5332f35659b69"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
