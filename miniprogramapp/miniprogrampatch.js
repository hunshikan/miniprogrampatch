// miniprogrampatch v1.1.1 Tue Oct 23 2018  
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.miniprogrampatch=e():t.miniprogrampatch=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r=n(1),a=n(6);t.exports={patchComponent:a.patchComponent,patchPage:r.patchPage}},function(t,e,n){"use strict";e.__esModule=!0,e.patchPage=function(t,e){if(t.__patchPage)return t;var n=!1,u=(e||{}).debug,c=function(e){e||(e={}),e.__computed=(0,r.initializeComputed)(e.computed||{});var c=e,s=c.onLoad,f=c.watch;return e.onLoad=function(t){this.__setData=this.setData,this.$setData=this.updateData=function(t,e){return(0,a.default)(t,e,{ctx:this})};var e=(0,r.evaluateComputed)(this,null,{initial:!0});this.__setData(e),this.__watch=(0,o.initializeWatchers)(this,f||{});try{n||(this.setData=this.$setData)}catch(t){n=!0,u&&(console.log(t),console.log("using this.$setData instead of this.setData to support watch and computed features."))}(0,i.isFunction)(s)&&s.call(this,t)},t(e)};return c.__patchPage=!0,c};var r=n(2),a=function(t){return t&&t.__esModule?t:{default:t}}(n(4)),i=n(3),o=n(5)},function(t,e,n){"use strict";e.__esModule=!0,e.initializeComputed=function(t){var e=[],n=void 0,a=void 0;for(n in t)if(a=t[n],(0,r.isFunction)(a))e.push({name:n,require:[],fn:a});else if((0,r.isObject)(a)){var i=a,o=i.require,u=void 0===o?[]:o,c=i.fn;(0,r.isFunction)(c)&&e.push({name:n,require:u,fn:c})}e.length>1&&e.sort(function(t,e){return~e.require.indexOf(t.name)?-1:~t.require.indexOf(e.name)?1:0});return e},e.evaluateComputed=function(t,e,n){var a=(n||{}).initial,i={},o=t.__computed,u=void 0;if(o.length)if(a)for(var c in o){var s=o[c],f=s.fn,l=s.require,d=s.name;u=l.reduce(function(e,n){var a=(0,r.result)(t.data,n),o=a.key,u=a.value;return e[n]=o?u:(0,r.result)(i,n).value,e},{}),i[d]=f.call(t,u)}else{var h=Object.keys(e);if(h.length){var p={},v=h.map(function(t){return p[t]=(0,r.pathToArray)(t)});for(var _ in o){var y=o[_],f=y.fn,l=y.require,d=y.name;l.length&&function(){var e=!1,n=void 0,a=void 0;for(var o in l)if(n=l[o],a=p[n]||(p[n]=(0,r.pathToArray)(n)),~v.findIndex(function(t){return(0,r.isUpstream)(a,t)})){v.push(p[d]||(p[d]=(0,r.pathToArray)(d))),e=!0;break}e&&(u=l.reduce(function(e,n){var a=(0,r.result)(i,n),o=a.key,u=a.value;return e[n]=o?u:(0,r.result)(t.__data,n).value,e},{}),i[d]=f.call(t,u))}()}}}return i};var r=n(3)},function(t,e,n){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.result=function(t,e){if(!t)return{key:!1};if(t.hasOwnProperty(e))return{key:!0,value:t[e],path:[e]};e=l(e);var n=void 0;for(var r in e){if(!a(t)||!t.hasOwnProperty(e[r]))return{key:!1};n=t[e[r]],t=n}return{key:!0,value:n,path:e}},e.setResult=function(t,e,n){var r=t,a=void 0,i=void 0;if(!(e=f(e)).length)throw Error("Path can not be empty");for(var o in e){var u=e[o],c=u.name,s=u.type;if(0==o){if("array"===s)throw Error("Path can not start with []")}else d(t)!==s&&(t=a[i]="array"===s?[]:{});t=(a=t)[c],i=c}return a[i]=n,r},e.isUpstream=function(t,e,n){if(t.length>e.length)return!1;if(n&&t.length===e.length)return!1;for(var r in t)if(t[r]!==e[r])return!1;return!0},e.hasIntersection=function(t,e){for(var n in t)if(t[n]===e[n])return!0;return!1};var a=e.isObject=function(t){return null!==t&&"object"===(void 0===t?"undefined":r(t))},i=(e.isFunction=function(t){return"function"==typeof t},e.isString=function(t){return"string"==typeof t},e.isArray=function(t){return t&&t.constructor===Array}),o=e.trim=function(t){return t.replace(/(^\s+)|(\s+$)/g,"")},u=function(t){return t.replace(/^\.|\.$/g,"")},c=function(t){return/^\[/.test(t)},s=function(t){return/^\./.test(t)};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t=o(t),s(t))return f(t=u(t),e);if(c(t)){var n=/^\[(\d+)\]/.exec(t);if(n)return e.push({name:n[1],type:"array"}),n[0]===t?e:f(t.slice(n[0].length),e);throw Error("Only number 0-9 could inside []")}var r=/^([^\[\.]+)/.exec(t);return r?(e.push({name:r[1],type:"object"}),r[0]===t?e:f(t.slice(r[0].length),e)):e}var l=e.pathToArray=function(t){return f(t).map(function(t){return t.name})};function d(t){return a(t)?"object":i(t)?"array":"other"}},function(t,e,n){"use strict";e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t,e,n){if(!(0,a.isObject)(t))return;var c=n.ctx,s=n.initial,f=c.__changing;c.__changing=!0,f||(c.__data=r({},c.data),c.__changed={});for(var l=Object.keys(t),d={},h=void 0,p=void 0,v=void 0,_=0;_<l.length;_++)v=l[_],h=(0,a.result)(c.__data,v).value,p=t[v],h!==p&&(d[v]=p);Object.assign(c.__changed,d),u(c.__data,t);var y=(0,i.evaluateComputed)(c,d,{initial:s});if(Object.assign(c.__changed,y),u(c.__data,y),f)return c.__data;var m={};for(var g in c.__changed){var b=(0,a.result)(c.__data,g),j=b.key,O=b.value;j&&(m[g]=O)}c.__changing=!1,c.__data=null,c.__changed=null,c.__setData(m,e),(0,o.default)(c,m)};var a=n(3),i=n(2),o=function(t){return t&&t.__esModule?t:{default:t}}(n(5));function u(t,e){for(var n in e)(0,a.setResult)(t,n,e[n])}},function(t,e,n){"use strict";e.__esModule=!0,e.initializeWatchers=function(t,e){var n={},a=void 0;for(var i in e)a=e[i],(0,r.isFunction)(a)&&(n[i]={cb:a,value:(0,r.result)(t.data,i).value,path:(0,r.pathToArray)(i)});return n},e.default=function(t,e){var n=t.__watch,a=n?Object.keys(n):[],i=Object.keys(e),o={},u=void 0;if(a.length&&i.length){var c=function(a){var i=u=n[a],c=i.cb,s=i.value,f=i.path;for(var l in e)(0,r.hasIntersection)(f,o[l]||(o[l]=(0,r.pathToArray)(l)))&&function(){var e=(0,r.result)(t.data,a).value;e!==s&&(u.value=e,setTimeout(function(){return c.call(t,e,s)}))}()};for(var s in n)c(s)}};var r=n(3)},function(t,e,n){"use strict";e.__esModule=!0,e.patchComponent=function(t,e){if(t.__patchComponent)return t;var n=!1,c=(e||{}).debug,s=function(e){e||(e={}),e.properties=function(t){var e=function(e){var n=t[e];((0,i.isFunction)(n)||null===n)&&(n=t[e]={type:n});var a=n,o=a.observer;n.observer=function(t,n,a){var c,s,f=(0,r.evaluateComputed)(this,((c={})[e]=t,c));Object.keys(f).length&&this.$setData(f),(0,u.default)(this,((s={})[e]=t,s)),(0,i.isFunction)(o)&&o.call(this,t,n,a)}};for(var n in t)e(n);return t}(e.properties||{});var s=e.lifetimes||e,f=s.attached,l=s.watch,d=function(){this.__setData=this.setData,this.$setData=this.updateData=function(t,e){return(0,a.default)(t,e,{ctx:this})},this.__computed=(0,r.initializeComputed)(e.computed||{});var t=(0,r.evaluateComputed)(this,null,{initial:!0});this.__setData(t),this.__watch=(0,o.initializeWatchers)(this,l||{});try{n||(this.setData=this.$setData)}catch(t){n=!0,c&&(console.log(t),console.log("using this.$setData instead of this.setData to support watch and computed features."))}(0,i.isFunction)(f)&&f.apply(this,arguments)};return e.lifetimes?e.lifetimes.attached=d:e.attached=d,t(e)};return s.__patchComponent=!0,s};var r=n(2),a=c(n(4)),i=n(3),o=n(5),u=c(o);function c(t){return t&&t.__esModule?t:{default:t}}}])});