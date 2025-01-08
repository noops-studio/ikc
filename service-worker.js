self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('redirect-form-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/manifest.json',
                '/icon-192x192.png',
                '/icon-512x512.png',
                '/bootstrap.min.css'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
