import 'regenerator-runtime';
import './init.js';

document.addEventListener('DOMContentLoaded', () => {
  const title = 'Notif sederhana cek!';
  const option = {
    icon: './assets/img/catpusheen_home.png',
    badge: './assets/img/catpusheen_home.png',
    requireInteraction: true,
    body: 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru.',
    actions: [
      {
        action: 'yes-action',
        title: 'Ya',
      },
      {
        action: 'no-action',
        title: 'Tidak',
      },
    ],
  };
  const title1 = 'Notif sederhana cek!';
  const option1 = {
    icon: './assets/img/catpusheen_home.png',
    badge: './assets/img/catpusheen_home.png',
    requireInteraction: true,
    body: 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru.',
    tag: 'tag1',
    renotify: true,
    actions: [
      {
        action: 'yes-action',
        title: 'Ya',
      },
      {
        action: 'no-action',
        title: 'Tidak',
      },
    ],
  };
  const title2 = 'Notif sederhana cek!';
  const option2 = {
    icon: './assets/img/catpusheen_home.png',
    badge: './assets/img/catpusheen_home.png',
    requireInteraction: true,
    body: 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru.',
    tag: 'tag2',
    image: './assets/img/catpusheen_home.png',
    renotify: true,
    actions: [
      {
        action: 'yes-action',
        title: 'Ya',
      },
      {
        action: 'no-action',
        title: 'Tidak',
      },
    ],
  };
  const btnBasic = $('#btnNotifSederhana').on('click', () => {
    navigator.serviceWorker.ready.then((regis) => {
      regis.showNotification(title, option); // jika memiliki tag yang sama akan ditimpa
      regis.showNotification(title, option); // jika tidak memiliki tag atau berbeda tag tidak akan ditimpa
      regis.showNotification(title1, option1);
      regis.showNotification(title1, option1);
      regis.showNotification(title2, option2);
    });
  });
  if (Notification.permission === 'granted') {
    btnBasic;
  } else {
    console.log('Fitur notifikasi diijinkan!');
  }
});
