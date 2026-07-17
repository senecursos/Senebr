const CACHE_NAME = 'sene-hub-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/imagem1.jpg',
  '/logo-sene.jpg',
  '/imagem3.jpg',
  '/imagem4.jpg',
  '/imagem5.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
