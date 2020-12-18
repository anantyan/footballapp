import { urlBase64ToUint8Array } from './helper.js';

function funcSubscribe() {
  if ('PushManager' in window) {
    navigator.serviceWorker.getRegistration().then((registration) => {
      registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('BLdRjnEexc7CuREWMq_faCIpymuwdqItVZffyzFVsbKb8_AbzXy69BwCHeNjnLdql5glN4dhkqrAynbyGHd-KBM'),
      }).then((subscribe) => {
        console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
        console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
          null, new Uint8Array(subscribe.getKey('p256dh')),
        )));
        console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
          null, new Uint8Array(subscribe.getKey('auth')),
        )));
      }).catch((e) => {
        console.error('Tidak dapat melakukan subscribe ', e.message);
      });
    });
  }
}

function funcServiceWorker() {
  navigator.serviceWorker.register('./service-worker.js');
}

function funcNotification() {
  if ('Notification' in window) {
    Notification.requestPermission().then((result) => {
      if (result === 'denied') {

      } else if (result === 'default') {

      }
    });
  } else {
    console.log('Browser tidak mendukung notification sekarang!');
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    funcServiceWorker();
    funcNotification();
    navigator.serviceWorker.ready.then(() => {
      funcSubscribe();
    });
  });
} else {
  console.log('ServiceWorker not support this browser.');
}
