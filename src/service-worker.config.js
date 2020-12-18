importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

import 'regenerator-runtime';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

precacheAndRoute([{
  url: './',
  revision: '1',
}, {
  url: './manifest.json',
  revision: '1',
}, {
  url: './index.html',
  revision: '1',
}, {
  url: './index-nav.html',
  revision: '1',
}, {
  url: './index-notif.html',
  revision: '1',
}, {
  url: './index-fallback.html',
  revision: '1',
}, {
  url: './pages/home.html',
  revision: '1',
}, {
  url: './pages/teams.html',
  revision: '1',
}, {
  url: './pages/standings.html',
  revision: '1',
}, {
  url: './pages/favorites.html',
  revision: '1',
}, {
  url: './assets/img/catpusheen_home.png',
  revision: '1',
}, {
  url: './assets/img/catpusheen_error.png',
  revision: '1',
}, {
  url: './assets/img/catpusheen_home.png',
  revision: '1',
}, {
  url: './assets/favicon/icon_96x96.png',
  revision: '1',
}, {
  url: './assets/favicon/icon_128x128.png',
  revision: '1',
}, {
  url: './assets/favicon/icon_192x192.png',
  revision: '1',
}, {
  url: './assets/favicon/icon_256x256.png',
  revision: '1',
}, {
  url: './assets/favicon/icon_384x384.png',
  revision: '1',
}, {
  url: './assets/favicon/icon_512x512.png',
  revision: '1',
}, {
  url: './script.bundle.css',
  revision: '1',
}, {
  url: './script.bundle.js',
  revision: '1',
}, {
  url: './script_notif.bundle.css',
  revision: '1',
}, {
  url: './script_notif.bundle.js',
  revision: '1',
}, {
  url: './assets/js/idb.js',
  revision: '1',
}, {
  url: './assets/js/jquery.js',
  revision: '1',
}, {
  url: './assets/js/materialize.js',
  revision: '1',
}], {
  ignoreURLParametersMatching: [/.*/],
});

registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-webfonts',
  }),
);

registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  new StaleWhileRevalidate({
    cacheName: 'api-cache',
  }),
);

registerRoute(
  /.*(?:png|gif|jpg|jpeg|svg)$/,
  new StaleWhileRevalidate({
    cacheName: 'images-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

self.addEventListener('push', (event) => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body,
    icon: './assets/favicon/icon_96x96.png',
    badge: './assets/favicon/icon_96x96.png',
    vibrate: [100, 50, 100],
    requireInteraction: true,
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification('Football Notification', options),
  );
});

self.__WB_MANIFEST;
