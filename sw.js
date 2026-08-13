const CACHE_NAME = 'dna-detective-v1';
const urlsToCache = [
  './',
  './index.html',
  './admin-dashboard.html',
  './site.webmanifest',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png'
];

// Install the service worker and cache the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if found, otherwise fetch from internet
        return response || fetch(event.request);
      })
  );
});