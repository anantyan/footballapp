(()=>{var t={39:(t,e,n)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===g)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return B()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=N(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=g;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:p,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f="suspendedStart",p="suspendedYield",g="executing",d="completed",y={};function v(){}function m(){}function w(){}var b={};b[a]=function(){return this};var k=Object.getPrototypeOf,L=k&&k(k(I([])));L&&L!==n&&o.call(L,a)&&(b=L);var x=w.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,a,c,s){var u=l(t[i],t,a);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"===r(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function N(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:B}}function B(){return{value:e,done:!0}}return m.prototype=x.constructor=w,w.constructor=m,m.displayName=u(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[c]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(h(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}("object"===r(t=n.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r](o,o.exports,n),o.loaded=!0,o.exports}n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";function t(t){for(var e=(t+"=".repeat((4-t.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(e),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}n(39),"serviceWorker"in navigator?window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js"),"Notification"in window?Notification.requestPermission().then((function(t){})):console.log("Browser tidak mendukung notification sekarang!"),navigator.serviceWorker.ready.then((function(){"PushManager"in window&&navigator.serviceWorker.getRegistration().then((function(e){e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t("BLdRjnEexc7CuREWMq_faCIpymuwdqItVZffyzFVsbKb8_AbzXy69BwCHeNjnLdql5glN4dhkqrAynbyGHd-KBM")}).then((function(t){console.log("Berhasil melakukan subscribe dengan endpoint: ",t.endpoint),console.log("Berhasil melakukan subscribe dengan p256dh key: ",btoa(String.fromCharCode.apply(null,new Uint8Array(t.getKey("p256dh"))))),console.log("Berhasil melakukan subscribe dengan auth key: ",btoa(String.fromCharCode.apply(null,new Uint8Array(t.getKey("auth")))))})).catch((function(t){console.error("Tidak dapat melakukan subscribe ",t.message)}))}))}))})):console.log("ServiceWorker not support this browser."),document.addEventListener("DOMContentLoaded",(function(){var t="Notif sederhana cek!",e={icon:"./assets/img/catpusheen_home.png",badge:"./assets/img/catpusheen_home.png",requireInteraction:!0,body:"Ini adalah konten notifikasi. \nBisa menggunakan baris baru.",actions:[{action:"yes-action",title:"Ya"},{action:"no-action",title:"Tidak"}]},n="Notif sederhana cek!",r={icon:"./assets/img/catpusheen_home.png",badge:"./assets/img/catpusheen_home.png",requireInteraction:!0,body:"Ini adalah konten notifikasi. \nBisa menggunakan baris baru.",tag:"tag1",renotify:!0,actions:[{action:"yes-action",title:"Ya"},{action:"no-action",title:"Tidak"}]},o={icon:"./assets/img/catpusheen_home.png",badge:"./assets/img/catpusheen_home.png",requireInteraction:!0,body:"Ini adalah konten notifikasi. \nBisa menggunakan baris baru.",tag:"tag2",image:"./assets/img/catpusheen_home.png",renotify:!0,actions:[{action:"yes-action",title:"Ya"},{action:"no-action",title:"Tidak"}]};$("#btnNotifSederhana").on("click",(function(){navigator.serviceWorker.ready.then((function(i){i.showNotification(t,e),i.showNotification(t,e),i.showNotification(n,r),i.showNotification(n,r),i.showNotification("Notif sederhana cek!",o)}))})),"granted"===Notification.permission||console.log("Fitur notifikasi diijinkan!")}))})()})();