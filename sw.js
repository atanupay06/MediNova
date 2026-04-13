const CACHE_NAME = 'meditech-v1';

// Install the Service Worker and skip waiting
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate and immediately claim the browser
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// A real fetch listener that makes Chrome happy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('MediTech OS is offline. Please check your internet connection.');
        })
    );
});
