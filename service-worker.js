const CACHE_NAME = 'tdetailing-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/afbeeldingen/2.png',
  '/afbeeldingen/1.png',
  '/afbeeldingen/3.png',
  '/afbeeldingen/4.png',
  '/afbeeldingen/5.png',
  '/afbeeldingen/6.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
