const cacheName = 'meine-pwa-v2';
const assets = ['./', './index.html', './manifest.json'];

// Dateien in den Cache laden
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Anfragen über den Cache beantworten
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );

});
