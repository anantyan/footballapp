const webPush = require('web-push');

const vapidKeys = {
  publicKey: 'BLdRjnEexc7CuREWMq_faCIpymuwdqItVZffyzFVsbKb8_AbzXy69BwCHeNjnLdql5glN4dhkqrAynbyGHd-KBM',
  privateKey: 'GxjmU-ETPNkpoX0v0G0MLny3VUUO02ok2PoEA1_yDLw',
};

webPush.setVapidDetails(
  'mailto:anantya4995@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/dCSsvKPisqs:APA91bFHRy6kJ0FvbWAsUHznOFcbN0gUttFa9TXPtU-Srd4m3pjLk_0VUZ0JgQv_0Rjj8GjHVFQxinWsGF-_u8TopbNe0HfL0imEBNJGoQS1nj2nvVhL3qCQp8EzYGr1NYkMS90Rq5_v',
  keys: {
    p256dh: 'BB5fNJTidp5HXS/mwSCdBWr42/CisTawgzic/yAu0aePJwON8eo8BblahaXg1gc8dCT+3rggNIUAvPd0q3hNk9Y=',
    auth: 'C0YhVmPJqXfimOFkNc5sXA==',
  },
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
  gcmAPIKey: '493755482003',
  TTL: 60,
};
webPush.sendNotification(
  pushSubscription,
  payload,
  options,
).catch((error) => {
  console.log(error);
});
