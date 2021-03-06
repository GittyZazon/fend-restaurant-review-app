const staticCacheName = 'restaurant-review-v2';

self.addEventListener('install', function(event) { 
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'./',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg',
				'./data/restaurants.json',
				'./css/styles.css',
				'./index.html',
				'./restaurants.html',
				'./sw.js',
				'./register.js'
			]);
		})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('restaurant-review') &&
							cacheName != staticCacheName;
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		}).catch(function(error) {
			console.log('Everything is a mess', error);
		})
	);
});


