const cacheName = 'v1';

self.addEventListener('install', (e) => {
    console.log("ServiceWorker: Installed");
});

self.addEventListener('activate', (e) => {
    console.log("ServiceWorker: Activated");
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});


self.addEventListener('fetch', e => {
    console.log('Service Worker: fetching...');
    e.respondWith(
        fetch(e.request)
        .then(res => {
            const resClone = res.clone();
            caches.open(cacheName)
            .then(cache => {
                cache.put(e.request, resClone);
            })
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    )
})



