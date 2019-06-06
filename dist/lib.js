!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-native-webview-messaging"]=t():e["react-native-webview-messaging"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RN_MESSAGES_CHANNEL_PREFIX="f251c210-e7c9-42fa-bae3-b9352ec3722a"},function(e,t,n){"use strict";function r(e){console&&console.warn&&console.warn(e)}function o(){o.init.call(this)}function i(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function s(e,t,n,o){var s,u,f;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===n?"undefined":h(n)));if(u=e._events,void 0===u?(u=e._events=Object.create(null),e._eventsCount=0):(void 0!==u.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),u=e._events),f=u[t]),void 0===f)f=u[t]=n,++e._eventsCount;else if("function"==typeof f?f=u[t]=o?[n,f]:[f,n]:o?f.unshift(n):f.push(n),(s=i(e))>0&&f.length>s&&!f.warned){f.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=f.length,r(c)}return e}function u(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,m(this.listener,this.target,e))}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=u.bind(r);return o.listener=n,r.wrapFn=o,o}function c(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?v(o):a(o,o.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function a(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function l(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function v(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}var y,h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="object"===("undefined"==typeof Reflect?"undefined":h(Reflect))?Reflect:null,m=d&&"function"==typeof d.apply?d.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};y=d&&"function"==typeof d.ownKeys?d.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var b=Number.isNaN||function(e){return e!==e};e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var _=10;Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(e){if("number"!=typeof e||e<0||b(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");_=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||b(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return i(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var u=o[e];if(void 0===u)return!1;if("function"==typeof u)m(u,this,t);else for(var f=u.length,c=a(u,f),n=0;n<f;++n)m(c[n],this,t);return!0},o.prototype.addListener=function(e,t){return s(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return s(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===t?"undefined":h(t)));return this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===t?"undefined":h(t)));return this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,o,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===t?"undefined":h(t)));if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():l(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return c(this,e,!0)},o.prototype.rawListeners=function(e){return c(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?y(this._events):[]}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return JSON.stringify({type:e,payload:t})}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)},c=n(1),p=function(e){return e&&e.__esModule?e:{default:e}}(c),a=n(0),l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"sendJSON",value:function(e){window.postMessage(a.RN_MESSAGES_CHANNEL_PREFIX+s("json",e),"*")}},{key:"send",value:function(e){window.postMessage(a.RN_MESSAGES_CHANNEL_PREFIX+s("text",e),"*")}},{key:"emit",value:function(e,n,r){f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"emit",this).call(this,e,n),r||window.postMessage(a.RN_MESSAGES_CHANNEL_PREFIX+JSON.stringify({type:"event",meta:{eventName:e},payload:n}),"*")}}]),t}(p.default);window.RNMessagesChannel=new l,e.exports=window.RNMessagesChannel}])});