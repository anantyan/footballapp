(self.webpackChunkfrontend_mpwa=self.webpackChunkfrontend_mpwa||[]).push([[207],{401:(t,e,n)=>{"use strict";function r(t){for(var e=(t+"=".repeat((4-t.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(e),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}function o(t){return t?t.replace(/^http:\/\//i,"https://"):t}n.d(e,{M:()=>r,r:()=>o})},264:(t,e,n)=>{"use strict";n(666),n(611),document.addEventListener("DOMContentLoaded",(function(){var t="Notif sederhana cek!",e={icon:"./assets/img/catpusheen_home.png",badge:"./assets/img/catpusheen_home.png",requireInteraction:!0,body:"Ini adalah konten notifikasi. \nBisa menggunakan baris baru.",actions:[{action:"yes-action",title:"Ya"},{action:"no-action",title:"Tidak"}]},n="Notif sederhana cek!",r={icon:"./assets/img/catpusheen_home.png",badge:"./assets/img/catpusheen_home.png",requireInteraction:!0,body:"Ini adalah konten notifikasi. \nBisa menggunakan baris baru.",tag:"tag1",renotify:!0,actions:[{action:"yes-action",title:"Ya"},{action:"no-action",title:"Tidak"}]},o={icon:"./assets/img/catpusheen_home.png",badge:"./assets/img/catpusheen_home.png",requireInteraction:!0,body:"Ini adalah konten notifikasi. \nBisa menggunakan baris baru.",tag:"tag2",image:"./assets/img/catpusheen_home.png",renotify:!0,actions:[{action:"yes-action",title:"Ya"},{action:"no-action",title:"Tidak"}]};$("#btnNotifSederhana").on("click",(function(){navigator.serviceWorker.ready.then((function(i){i.showNotification(t,e),i.showNotification(t,e),i.showNotification(n,r),i.showNotification(n,r),i.showNotification("Notif sederhana cek!",o)}))})),"granted"===Notification.permission||console.log("Fitur notifikasi diijinkan!")}))},611:(t,e,n)=>{"use strict";var r=n(401);"serviceWorker"in navigator?window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js"),"Notification"in window?Notification.requestPermission().then((function(t){})):console.log("Browser tidak mendukung notification sekarang!"),navigator.serviceWorker.ready.then((function(){"PushManager"in window&&navigator.serviceWorker.getRegistration().then((function(t){t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:(0,r.M)("BLdRjnEexc7CuREWMq_faCIpymuwdqItVZffyzFVsbKb8_AbzXy69BwCHeNjnLdql5glN4dhkqrAynbyGHd-KBM")}).then((function(t){console.log("Berhasil melakukan subscribe dengan endpoint: ",t.endpoint),console.log("Berhasil melakukan subscribe dengan p256dh key: ",btoa(String.fromCharCode.apply(null,new Uint8Array(t.getKey("p256dh"))))),console.log("Berhasil melakukan subscribe dengan auth key: ",btoa(String.fromCharCode.apply(null,new Uint8Array(t.getKey("auth")))))})).catch((function(t){console.error("Tidak dapat melakukan subscribe ",t.message)}))}))}))})):console.log("ServiceWorker not support this browser.")},346:()=>{},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=h(t,e,n);if("normal"===s.type){if(r=n.done?g:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=g,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",g="completed",d={};function y(){}function v(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,k=b&&b(b(C([])));k&&k!==n&&r.call(k,i)&&(w=k);var L=m.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=L.constructor=m,m.constructor=v,v.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),s(L,c,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},0,[[346,666],[264,666]]]);