// Connector Pro - Service Worker

const CACHE_NAME = 'connector-v3';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/l10n.js',
    './js/app.js',
    './manifest.json',
    './icons/icon-192.svg',
    './icons/icon-512.svg'
];

// Install
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((cached) => {
                // Return cached version or fetch new
                const fetched = fetch(event.request)
                    .then((response) => {
                        // Cache new response
                        if (response.ok) {
                            const clone = response.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => cache.put(event.request, clone));
                        }
                        return response;
                    })
                    .catch(() => cached);

                return cached || fetched;
            })
    );
});
