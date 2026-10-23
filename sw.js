var CACHE = 'xix-tour-v1';
self.addEventListener('install', function (e) {
  e.waitUntil(
    fetch('assets.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) {
      CACHE = 'xix-tour-' + j.v;
      return caches.open(CACHE).then(function (c) { return Promise.all(j.assets.map(function (a) { return c.add(a).catch(function () {}); })); });
    }).then(function () { return self.skipWaiting(); })
  );
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k.indexOf('xix-tour-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    return hit || fetch(e.request).then(function (r) {
      var copy = r.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      return r;
    });
  }));
});
