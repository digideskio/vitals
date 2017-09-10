/* vitals v5.0.0 (http://vitalsjs.com)
 * Copyright (c) 2014-2017 Adam A Smith <adam@imaginate.life>
 * The Apache License (http://vitalsjs.com/license) */
(function(D,N){function y(a){if(c.b(a))return a;if(c.H(a)||c.f(a)){if(!("toString"in a&&c.f(a.toString)))return E(a);a=a.toString();return c.b(a)?a:E(a)}return c.h(a)?"undefined":c.v(a)?"null":c.s(a)?a?"true":"false":c.u(a)?"NaN":E(a)}function H(a,e){if(c.c(e))return e.test(a);e=y(e);return a?e?O(a,e):!0:!e}var C=function(){function a(a){switch(a){case "object":case "function":return!0}return!1}function e(a){return!!a&&a.Object===Object}function c(a){return!!a&&(!("nodeType"in a)||!a.nodeType)}var q=
a(typeof exports)&&c(exports),f=a(typeof module)&&c(module),h=q&&f&&"object"===typeof global&&e(global),d=a(typeof window)&&e(window),l="function"===typeof define&&"amd"in define&&"object"===typeof define.amd,g=a(typeof self)&&e(self),t=a(typeof D)&&e(D),x=h?global:d&&window!==(D&&D.window)?window:g?self:t?D:Function("return this")();return{A:q,B:f,J:h,D:d,w:l,C:g,K:t,F:x}}(),z=C.F,P=z.Array,m=z.Error,n=z.Object,I=n.prototype,F=z.RegExp,G=F.prototype,E=z.String,J=E.prototype,v=z.TypeError,r=function(){var a=
I.toString;return function(e){return a.call(e)}}(),w=function(){var a=I.hasOwnProperty;return function(e,c){return a.call(e,c)}}(),c=function(){function a(b){return"number"===typeof b&&b===b&&isFinite(b)}function e(b){return!!b&&"object"===typeof b}function c(b){return!!b&&"function"===typeof b}function q(b){return e(b)&&"[object Array]"===r(b)}function f(b){return g.test(b)}var h=function(){var b=function(){return"[object Arguments]"===r(arguments)}(),a=function(){try{"callee"in{}}catch(u){return!1}return"callee"in
arguments}();return{l:b,j:a}}(),d=h.l?function(b){return e(b)&&"[object Arguments]"===r(b)}:h.j?function(b){return e(b)&&"callee"in b}:function(){return!1};h=h.l?function(b){if(!e(b))return!1;switch(r(b)){case "[object Array]":case "[object Arguments]":return!0;default:return!1}}:h.j?function(b){return e(b)&&("[object Array]"===r(b)||"callee"in b)}:function(b){return e(b)&&"[object Array]"===r(b)};var l=/^(?:cr|lf|crlf)$/i,g=function(){var b="img";"sticky"in G&&(b+="y");"unicode"in G&&(b+="u");var a=
"^(?:[\\+\\-]["+b+"\\+\\-]*|["+b+"]*)$";var d=new F(a);d.i=b;d.m="/"+a+"/";return d}();f.i=g.i;f.m=g.m;var t=function(){if(!("isExtensible"in n&&c(n.isExtensible)))return function(){return!1};var b=n.isExtensible;try{return b(function(){}),b}catch(p){return function(a){return"object"===typeof a&&b(a)}}}(),x=function(){if(!("isFrozen"in n&&c(n.isFrozen)))return function(){return!1};var b=n.isFrozen;try{return b(function(){}),b}catch(p){return function(a){return"object"===typeof a&&b(a)}}}(),k=function(){if(!("isSealed"in
n&&c(n.isSealed)))return function(){return!1};var b=n.isSealed;try{return b(function(){}),b}catch(p){return function(a){return"object"===typeof a&&b(a)}}}();return{v:function(b){return null===b},h:function(b){return b===N},s:function(b){return"boolean"===typeof b},b:function(b){return"string"===typeof b},M:function(b){return!!b&&"string"===typeof b},X:a,L:function(b){return!!b&&"number"===typeof b&&b===b&&isFinite(b)},u:function(b){return b!==b},H:e,a:function(b){if(!b)return!1;switch(typeof b){case "object":case "function":return!0;
default:return!1}},f:c,G:q,g:h,N:d,c:function(b){return e(b)&&"[object RegExp]"===r(b)},O:function(b){return e(b)&&"[object Date]"===r(b)},T:function(b){return e(b)&&"[object Error]"===r(b)},P:function(b){return e(b)&&"nodeType"in b&&9===b.nodeType},R:function(b){return e(b)&&"nodeType"in b&&1===b.nodeType},o:function(b){if(q(b))return!0;b=b.length;return a(b)&&!(b%1)&&0<=b},empty:function(b){var a;if(!b)return!0;if("function"===typeof b)return 0===b.length;if("object"!==typeof b)return!1;if("[object Array]"===
r(b))return 0===b.length;for(a in b)if(w(b,a))return!1;return!0},S:function(b){return l.test(b)},V:f,extend:t,W:x,$:k,aa:function(b){return!(b%1)},Y:function(b){return!!(b%2)},U:function(b){return!(b%2)}}}(),K=function(){function a(f,h){h=h||0;if(c.a(f))if(c.c(f))var d=f.toString();else{var l=h;c.f(f)?(d="Function",f.name&&(d+="("+f.name+")")):(d=r(f),d=B.test(d)?d.replace(B,"$1"):"UnknownObjectType");d+=": ";if(c.g(f)){var g=l;var t;var x=f.length;if(1>x)g="[]";else{var k=e(g);g+=1;l="[\n";for(t=
-1;++t<x;)l+=k+t+": ",l+=a(f[t],g)+",\n";l=l.replace(q,"\n");g=l+"]"}}else{b:{for(k in f)if(w(f,k)){k=!1;break b}k=!0}if(k)g="{}";else{x=e(l);l+=1;k="{\n";for(g in f)w(f,g)&&(k+=x,k+="'"+y(g)+"': ",k+=a(f[g],l)+",\n");k=k.replace(q,"\n");g=k+"}"}}d+=g}else c.s(f)?d=f?"true":"false":c.v(f)?d="null":c.h(f)?d="undefined":c.u(f)?d="NaN":c.b(f)?(d=f.replace(/\\/g,"\\\\"),d=d.replace(/\n/g,"\\n"),d=d.replace(/\r/g,"\\r"),d=d.replace(/\t/g,"\\t"),d=d.replace(/\v/g,"\\v"),d=d.replace(/\0/g,"\\0"),d=d.replace(/\b/g,
"\\b"),d=d.replace(/\f/g,"\\f"),d='"'+d+'"'):d=y(f);return d}function e(a){var c;if(1>c)return"";for(c="";a--;)c+="    ";return c}var B=/^\[object ([a-zA-Z0-9_\$]+)\]$/,q=/,\n$/;return a}();(function(){var a=function(){function a(){}return"create"in n&&c.f(n.create)?n.create:function(c){a.prototype=c;c=new a;a.prototype=null;return c}}();return function(c){return a(c)}})();var Q=function(){function a(a){if(c.h(a))return"newVitals";a=a.replace(f,"");return"vitals."+a}function e(a){if(!a)return"";if(h.test(a))return a.replace(h,
"");a=a.replace(q,"");return"#"+a}function B(a,c,e,f){a.__vitals=!0;a.vitals=!0;a.name=c;switch(c){case "TypeError":a.__type=!0;a.type=!0;break;case "RangeError":a.__range=!0,a.range=!0}a.message=e;a.msg=e;3<arguments.length&&(a.value=f,a.val=f);return a}var q=/^#/,f=/^vitals\./,h=/^\!/;return function(d){function f(a){a=a?g+"."+a:g;return"`"+a+"`"}var g=a(d);return{error:function(a,c,e){e=f(e);return B(a,"Error",c+(" for "+e+" call"))},I:function(a,c,d,b,g){g=f(g);c=e(c);var k=K(d);b="invalid "+
c+" data type for "+g+" call\n"+("valid data types: `"+b+"`\n")+("actual "+c+" value: `"+k+"`");return B(a,"TypeError",b,d)},Z:function(a,d,g,b){b=f(b);d="out-of-range "+e(d)+" for "+b+" call";if(c.b(g))d+="\nvalid range: `"+g+"`";else if(c.G(g)){var h;b="";var k=g.length;for(h=-1;++h<k;)b+="\n- `"+K(g[h])+"`";d+="\nvalid options:"+b}return B(a,"RangeError",d)}}}}(),O=function(){return"includes"in J&&c.f(J.includes)?function(a,c){return a.includes(c)}:function(a,c){return-1!==a.indexOf(c)}}(),L=function(){var a=
/g/,c=function(){var a={ignoreCase:"i",multiline:"m",global:"g"};"sticky"in G&&(a.sticky="y");"unicode"in G&&(a.unicode="u");return a}();return function(e,q){var f;var h="";for(f in c)w(c,f)&&e[f]&&(h+=c[f]);return q&&!a.test(h)?h+"g":h}}(),M=function(){var a=function(){return"\\n"!==/\n/.source?function(a){return a.replace(/\\/g,"\\\\")}:function(a){return a}}();return function(c,m){var e=a(c.source);return m?new F(e,m):new F(e)}}(),A=function(){function a(a,b){switch(arguments.length){case 0:throw p(new m,
"no #source defined");case 1:if(c.b(a))throw p(new m,"no #val defined");if(!c.a(a))throw u(new v,"source",a,"!Object|!Function|!Array|!Arguments|string");return c.g(a)?g(a):f(a);default:if(c.b(a))return c.c(b)?k(a,b):r(a,b);if(!c.a(a))throw u(new v,"source",a,"!Object|!Function|!Array|!Arguments|string");return c.g(a)?t(a,b):c.c(b)?l(a,b):d(a,b)}}function e(a,b){switch(arguments.length){case 0:throw p(new m,"no #source defined","keys.byValue");case 1:throw p(new m,"no #val defined","keys.byValue");
default:if(!c.a(a))throw u(new v,"source",a,"!Object|!Function","keys.byValue");return d(a,b)}}function n(a,b){switch(arguments.length){case 0:throw p(new m,"no #source defined","indexes");case 1:if(c.b(a))throw p(new m,"no #val defined","indexes");if(!c.a(a))throw u(new v,"source",a,"!Array|!Arguments|!Object|!Function|string","indexes");if(!c.o(a))throw p(new m,"#source failed `array-like` test (#source.length must be a whole `number` that is `0` or more)","indexes");return g(a);default:if(c.b(a))return r(a,
b);if(!c.a(a))throw u(new v,"source",a,"!Array|!Arguments|!Object|!Function|string","indexes");if(!c.o(a))throw p(new m,"#source failed `array-like` test (#source.length must be a whole `number` that is `0` or more)","indexes");return t(a,b)}}function q(a,b){switch(arguments.length){case 0:throw p(new m,"no #source defined","values");case 1:if(c.b(a))throw p(new m,"no #val defined","values");if(!c.a(a))throw u(new v,"source",a,"!Object|!Function|string","values");var d;var e=[];for(d in a)w(a,d)&&
e.push(a[d]);return e;default:if(c.b(a))return k(a,b);if(!c.a(a))throw u(new v,"source",a,"!Object|!Function|string","values");return l(a,b)}}function f(a){var b;var c=[];for(b in a)w(a,b)&&c.push(b);return c}function h(a,b){var d;c.c(b)||(b=y(b));var e=[];for(d in a)w(a,d)&&H(d,b)&&e.push(d);return e}function d(a,b){var c;var d=[];for(c in a)w(a,c)&&a[c]===b&&d.push(c);return d}function l(a,b){var d;c.c(b)||(b=y(b));var e=[];for(d in a)w(a,d)&&H(d,b)&&e.push(a[d]);return e}function g(a){var b;var c=
a.length;a=new P(c);for(b=-1;++b<c;)a[b]=b;return a}function t(a,b){var c;var d=[];var e=a.length;for(c=-1;++c<e;)a[c]===b&&d.push(c);return d}function r(a,b){if(c.c(b)){var d=b;var e;var f=L(d,!0);d=M(d,f);f=[];for(e=d.exec(a);e;)f.push(e.index),e=d.exec(a)}else for(d=y(b),f=[],e=a.indexOf(d);-1!==e;)f.push(e),e=a.indexOf(d,++e);return d=f}function k(a,b){if(c.c(b)){var d=b;var e=L(d,!0);d=M(d,e);var f=[];for(e=d.exec(a);e;)f.push(e[0]),e=d.exec(a);d=f}else{d=y(b);e=[];for(f=a.indexOf(d);-1!==f;)e.push(d),
f=a.indexOf(d,++f);d=e}return d}a.main=a;a.keys=function(a,b){switch(arguments.length){case 0:throw p(new m,"no #source defined","keys");case 1:if(!c.a(a))throw u(new v,"source",a,"!Object|!Function","keys");return f(a);default:if(!c.a(a))throw u(new v,"source",a,"!Object|!Function","keys");return c.c(b)?h(a,b):d(a,b)}};a.keys.byKey=function(a,b){switch(arguments.length){case 0:throw p(new m,"no #source defined","keys.byKey");case 1:throw p(new m,"no #key defined","keys.byKey");default:if(!c.a(a))throw u(new v,
"source",a,"!Object|!Function","keys.byKey");return h(a,b)}};a.keys.byValue=e;a.keys.byVal=e;a.indexes=n;a.ii=n;a.values=q;a.vals=q;var b=Q("get"),p=b.error,u=b.I;return a}();A.get=A;A.VERSION="5.0.0";(function(){function a(a){a.vitals=A;a.VITALS=A}C.D&&a(window);C.C&&a(self);a(z);C.A&&C.B&&(module.exports===exports?module.exports=A:a(exports));C.w&&define(function(){return A})})()})(this);