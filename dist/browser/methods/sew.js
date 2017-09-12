/* vitals v5.0.0 (http://vitalsjs.com)
 * Copyright (c) 2014-2017 Adam A Smith <adam@imaginate.life>
 * The Apache License (http://vitalsjs.com/license) */
(function(k,w){function q(b){if(d.h(b))return b;if(d.B(b)||d.g(b)){if(!("toString"in b&&d.g(b.toString)))return p(b);b=b.toString();return d.h(b)?b:p(b)}return d.C(b)?"undefined":d.A(b)?"null":d.v(b)?b?"true":"false":d.w(b)?"NaN":p(b)}var e=function(){function b(b){switch(b){case "object":case "function":return!0}return!1}function c(b){return!!b&&b.Object===Object}function l(b){return!!b&&(!("nodeType"in b)||!b.nodeType)}var d=b(typeof exports)&&l(exports),f=b(typeof module)&&l(module),m=d&&f&&"object"===
typeof global&&c(global),g=b(typeof window)&&c(window),h="function"===typeof define&&"amd"in define&&"object"===typeof define.amd,e=b(typeof self)&&c(self),n=b(typeof k)&&c(k),p=m?global:g&&window!==(k&&k.window)?window:e?self:n?k:Function("return this")();return{j:d,l:f,D:m,o:g,i:h,m:e,F:n,s:p}}(),n=e.s,f=n.Object,r=f.prototype,t=n.RegExp,u=t.prototype,p=n.String,g=function(){var b=r.toString;return function(c){return b.call(c)}}(),x=function(){var b=r.hasOwnProperty;return function(c,l){return b.call(c,
l)}}(),d=function(){function b(a){return"number"===typeof a&&a===a&&isFinite(a)}function c(a){return!!a&&"object"===typeof a}function l(a){return!!a&&"function"===typeof a}function d(a){return c(a)&&"[object Array]"===g(a)}function e(a){return k.test(a)}var m=function(){var a=function(){return"[object Arguments]"===g(arguments)}(),b=function(){try{"callee"in{}}catch(y){return!1}return"callee"in arguments}();return{c:a,b:b}}(),h=m.c?function(a){return c(a)&&"[object Arguments]"===g(a)}:m.b?function(a){return c(a)&&
"callee"in a}:function(){return!1};m=m.c?function(a){if(!c(a))return!1;switch(g(a)){case "[object Array]":case "[object Arguments]":return!0;default:return!1}}:m.b?function(a){return c(a)&&("[object Array]"===g(a)||"callee"in a)}:function(a){return c(a)&&"[object Array]"===g(a)};var n=/^(?:cr|lf|crlf)$/i,k=function(){var a="img";"sticky"in u&&(a+="y");"unicode"in u&&(a+="u");var b="^(?:[\\+\\-]["+a+"\\+\\-]*|["+a+"]*)$";var c=new t(b);c.a=a;c.f="/"+b+"/";return c}();e.a=k.a;e.f=k.f;var p=function(){if(!("isExtensible"in
f&&l(f.isExtensible)))return function(){return!1};var a=f.isExtensible;try{return a(function(){}),a}catch(v){return function(b){return"object"===typeof b&&a(b)}}}(),q=function(){if(!("isFrozen"in f&&l(f.isFrozen)))return function(){return!1};var a=f.isFrozen;try{return a(function(){}),a}catch(v){return function(b){return"object"===typeof b&&a(b)}}}(),r=function(){if(!("isSealed"in f&&l(f.isSealed)))return function(){return!1};var a=f.isSealed;try{return a(function(){}),a}catch(v){return function(b){return"object"===
typeof b&&a(b)}}}();return{A:function(a){return null===a},C:function(a){return a===w},v:function(a){return"boolean"===typeof a},h:function(a){return"string"===typeof a},J:function(a){return!!a&&"string"===typeof a},V:b,H:function(a){return!!a&&"number"===typeof a&&a===a&&isFinite(a)},w:function(a){return a!==a},B:c,I:function(a){if(!a)return!1;switch(typeof a){case "object":case "function":return!0;default:return!1}},g:l,u:d,G:m,K:h,X:function(a){return c(a)&&"[object RegExp]"===g(a)},M:function(a){return c(a)&&
"[object Date]"===g(a)},R:function(a){return c(a)&&"[object Error]"===g(a)},N:function(a){return c(a)&&"nodeType"in a&&9===a.nodeType},O:function(a){return c(a)&&"nodeType"in a&&1===a.nodeType},L:function(a){if(d(a))return!0;a=a.length;return b(a)&&!(a%1)&&0<=a},empty:function(a){var b;if(!a)return!0;if("function"===typeof a)return 0===a.length;if("object"!==typeof a)return!1;if("[object Array]"===g(a))return 0===a.length;for(b in a)if(x(a,b))return!1;return!0},P:function(a){return n.test(a)},T:e,
extend:p,U:q,Y:r,Z:function(a){return!(a%1)},W:function(a){return!!(a%2)},S:function(a){return!(a%2)}}}(),h=function(){function b(b){switch(arguments.length){case 0:return"";case 1:return d.u(b)?c(b):q(b);default:return c(arguments)}}function c(b){var c;var d="";var e=b.length;for(c=-1;++c<e;)d+=q(b[c]);return d}return b.main=b}();h.sew=h;h.VERSION="5.0.0";(function(){function b(b){b.vitals=h;b.VITALS=h}e.o&&b(window);e.m&&b(self);b(n);e.j&&e.l&&(module.exports===exports?module.exports=h:b(exports));
e.i&&define(function(){return h})})()})(this);