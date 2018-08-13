
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('static').then(function(cache) {
     return cache.addAll([

     ]);
   })
 );
});

self.addEventListener('activate', function () {
 console.log('serviceWorker Activated');
});



self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
