/* vitals v5.0.0 (http://vitalsjs.com)
 * Copyright (c) 2014-2017 Adam A Smith <adam@imaginate.life>
 * The Apache License (http://vitalsjs.com/license) */
(function(z,M){function A(a){if(d.a(a))return a;if(d.G(a)||d.f(a)){if(!("toString"in a&&d.f(a.toString)))return B(a);a=a.toString();return d.a(a)?a:B(a)}return d.i(a)?"undefined":d.b(a)?"null":d.s(a)?a?"true":"false":d.u(a)?"NaN":B(a)}function D(a,c){if(d.h(c))return c.test(a);c=A(c);return a?c?E(a,c):!0:!c}function F(a,c){var d;var m=a.length;for(d=-1;++d<m;)if(a[d]===c)return!0;return!1}var w=function(){function a(a){switch(a){case "object":case "function":return!0}return!1}function c(a){return!!a&&
a.Object===Object}function d(a){return!!a&&(!("nodeType"in a)||!a.nodeType)}var m=a(typeof exports)&&d(exports),f=a(typeof module)&&d(module),k=m&&f&&"object"===typeof global&&c(global),e=a(typeof window)&&c(window),g="function"===typeof define&&"amd"in define&&"object"===typeof define.amd,h=a(typeof self)&&c(self),p=a(typeof z)&&c(z),t=k?global:e&&window!==(z&&z.window)?window:h?self:p?z:Function("return this")();return{w:m,A:f,I:k,C:e,v:g,B:h,J:p,D:t}}(),x=w.D,q=x.Error,l=x.Object,C=l.prototype,
H=x.RegExp,I=H.prototype,B=x.String,J=B.prototype,y=x.TypeError,r=function(){var a=C.toString;return function(c){return a.call(c)}}(),u=function(){var a=C.hasOwnProperty;return function(c,d){return a.call(c,d)}}(),d=function(){function a(b){return"number"===typeof b&&b===b&&isFinite(b)}function c(b){return!!b&&"object"===typeof b}function d(b){return!!b&&"function"===typeof b}function m(b){return c(b)&&"[object Array]"===r(b)}function f(b){return h.test(b)}var k=function(){var b=function(){return"[object Arguments]"===
r(arguments)}(),a=function(){try{"callee"in{}}catch(P){return!1}return"callee"in arguments}();return{m:b,l:a}}(),e=k.m?function(b){return c(b)&&"[object Arguments]"===r(b)}:k.l?function(b){return c(b)&&"callee"in b}:function(){return!1};k=k.m?function(b){if(!c(b))return!1;switch(r(b)){case "[object Array]":case "[object Arguments]":return!0;default:return!1}}:k.l?function(b){return c(b)&&("[object Array]"===r(b)||"callee"in b)}:function(b){return c(b)&&"[object Array]"===r(b)};var g=/^(?:cr|lf|crlf)$/i,
h=function(){var b="img";"sticky"in I&&(b+="y");"unicode"in I&&(b+="u");var a="^(?:[\\+\\-]["+b+"\\+\\-]*|["+b+"]*)$";var e=new H(a);e.j=b;e.o="/"+a+"/";return e}();f.j=h.j;f.o=h.o;var p=function(){if(!("isExtensible"in l&&d(l.isExtensible)))return function(){return!1};var b=l.isExtensible;try{return b(function(){}),b}catch(K){return function(a){return"object"===typeof a&&b(a)}}}(),t=function(){if(!("isFrozen"in l&&d(l.isFrozen)))return function(){return!1};var b=l.isFrozen;try{return b(function(){}),
b}catch(K){return function(a){return"object"===typeof a&&b(a)}}}(),n=function(){if(!("isSealed"in l&&d(l.isSealed)))return function(){return!1};var b=l.isSealed;try{return b(function(){}),b}catch(K){return function(a){return"object"===typeof a&&b(a)}}}();return{b:function(b){return null===b},i:function(b){return b===M},s:function(b){return"boolean"===typeof b},a:function(b){return"string"===typeof b},L:function(b){return!!b&&"string"===typeof b},X:a,K:function(b){return!!b&&"number"===typeof b&&b===
b&&isFinite(b)},u:function(b){return b!==b},G:c,c:function(b){if(!b)return!1;switch(typeof b){case "object":case "function":return!0;default:return!1}},f:d,F:m,g:k,M:e,h:function(b){return c(b)&&"[object RegExp]"===r(b)},O:function(b){return c(b)&&"[object Date]"===r(b)},T:function(b){return c(b)&&"[object Error]"===r(b)},P:function(b){return c(b)&&"nodeType"in b&&9===b.nodeType},R:function(b){return c(b)&&"nodeType"in b&&1===b.nodeType},N:function(b){if(m(b))return!0;b=b.length;return a(b)&&!(b%
1)&&0<=b},empty:function(b){var a;if(!b)return!0;if("function"===typeof b)return 0===b.length;if("object"!==typeof b)return!1;if("[object Array]"===r(b))return 0===b.length;for(a in b)if(u(b,a))return!1;return!0},S:function(b){return g.test(b)},V:f,extend:p,W:t,$:n,aa:function(b){return!(b%1)},Y:function(b){return!!(b%2)},U:function(b){return!(b%2)}}}(),L=function(){function a(f,k){k=k||0;if(d.c(f))if(d.h(f))var e=f.toString();else{var g=k;d.f(f)?(e="Function",f.name&&(e+="("+f.name+")")):(e=r(f),
e=G.test(e)?e.replace(G,"$1"):"UnknownObjectType");e+=": ";if(d.g(f)){var h=g;var p;var t=f.length;if(1>t)h="[]";else{var n=c(h);h+=1;g="[\n";for(p=-1;++p<t;)g+=n+p+": ",g+=a(f[p],h)+",\n";g=g.replace(m,"\n");h=g+"]"}}else{b:{for(n in f)if(u(f,n)){n=!1;break b}n=!0}if(n)h="{}";else{t=c(g);g+=1;n="{\n";for(h in f)u(f,h)&&(n+=t,n+="'"+A(h)+"': ",n+=a(f[h],g)+",\n");n=n.replace(m,"\n");h=n+"}"}}e+=h}else d.s(f)?e=f?"true":"false":d.b(f)?e="null":d.i(f)?e="undefined":d.u(f)?e="NaN":d.a(f)?(e=f.replace(/\\/g,
"\\\\"),e=e.replace(/\n/g,"\\n"),e=e.replace(/\r/g,"\\r"),e=e.replace(/\t/g,"\\t"),e=e.replace(/\v/g,"\\v"),e=e.replace(/\0/g,"\\0"),e=e.replace(/\b/g,"\\b"),e=e.replace(/\f/g,"\\f"),e='"'+e+'"'):e=A(f);return e}function c(a){var c;if(1>c)return"";for(c="";a--;)c+="    ";return c}var G=/^\[object ([a-zA-Z0-9_\$]+)\]$/,m=/,\n$/;return a}();(function(){var a=function(){function a(){}return"create"in l&&d.f(l.create)?l.create:function(c){a.prototype=c;c=new a;a.prototype=null;return c}}();return function(c){return a(c)}})();
var N=function(){function a(a){if(d.i(a))return"newVitals";a=a.replace(f,"");return"vitals."+a}function c(a){if(!a)return"";if(k.test(a))return a.replace(k,"");a=a.replace(m,"");return"#"+a}function l(a,c,d,p){a.__vitals=!0;a.vitals=!0;a.name=c;switch(c){case "TypeError":a.__type=!0;a.type=!0;break;case "RangeError":a.__range=!0,a.range=!0}a.message=d;a.msg=d;3<arguments.length&&(a.value=p,a.val=p);return a}var m=/^#/,f=/^vitals\./,k=/^\!/;return function(e){function g(a){a=a?h+"."+a:h;return"`"+
a+"`"}var h=a(e);return{error:function(a,c,d){d=g(d);return l(a,"Error",c+(" for "+d+" call"))},H:function(a,d,e,b,h){h=g(h);d=c(d);var f=L(e);b="invalid "+d+" data type for "+h+" call\n"+("valid data types: `"+b+"`\n")+("actual "+d+" value: `"+f+"`");return l(a,"TypeError",b,e)},Z:function(a,e,h,b){b=g(b);e="out-of-range "+c(e)+" for "+b+" call";if(d.a(h))e+="\nvalid range: `"+h+"`";else if(d.F(h)){var f;b="";var p=h.length;for(f=-1;++f<p;)b+="\n- `"+L(h[f])+"`";e+="\nvalid options:"+b}return l(a,
"RangeError",e)}}}}(),E=function(){return"includes"in J&&d.f(J.includes)?function(a,c){return a.includes(c)}:function(a,c){return-1!==a.indexOf(c)}}(),O=function(){var a=C.propertyIsEnumerable;return function(c,d){return u(c,d)&&a.call(c,d)}}(),v=function(){function a(a,c){switch(arguments.length){case 0:throw k(new q,"no #source defined");case 1:throw k(new q,"no #val defined");}if(d.b(a))return!1;if(d.a(a))return D(a,c);if(!d.c(a))throw e(new y,"source",a,"?Object|?Function|?Array|?Arguments|?string");
if(d.g(a))var g=F(a,c);else if(d.h(c))a:{for(g in a)if(u(a,g)&&c.test(g)){g=!0;break a}g=!1}else g=u(a,c);return g}function c(a,c){switch(arguments.length){case 0:throw k(new q,"no #source defined","value");case 1:throw k(new q,"no #val defined","value");}if(d.b(a))return!1;if(!d.c(a))throw e(new y,"source",a,"?Object|?Function|?Array|?Arguments","value");if(d.g(a))var g=F(a,c);else a:{for(g in a)if(u(a,g)&&a[g]===c){g=!0;break a}g=!1}return g}function l(a,c){switch(arguments.length){case 0:throw k(new q,
"no #source defined","substring");case 1:throw k(new q,"no #val defined","substring");}if(!d.a(a))throw e(new y,"source",a,"string","substring");var g=A(c);return a?g?E(a,g):!0:!g}function m(a,c){switch(arguments.length){case 0:throw k(new q,"no #source defined","enumerableKey");case 1:throw k(new q,"no #key defined","enumerableKey");}if(d.b(a))return!1;if(!d.c(a))throw e(new y,"source",a,"?Object|?Function","enumerableKey");return O(a,c)}a.main=a;a.key=function(a,c){switch(arguments.length){case 0:throw k(new q,
"no #source defined","key");case 1:throw k(new q,"no #key defined","key");}if(d.b(a))return!1;if(!d.c(a))throw e(new y,"source",a,"?Object|?Function","key");return u(a,c)};a.value=c;a.val=c;a.pattern=function(a,c){switch(arguments.length){case 0:throw k(new q,"no #source defined","pattern");case 1:throw k(new q,"no #pattern defined","pattern");}if(!d.a(a))throw e(new y,"source",a,"string","pattern");return D(a,c)};a.substring=l;a.substr=l;a.enumerableKey=m;a.enumerable=m;a.enumKey=m;try{a["enum"]=
m}catch(g){}var f=N("has"),k=f.error,e=f.H;return a}();v.has=v;v.VERSION="5.0.0";(function(){function a(a){a.vitals=v;a.VITALS=v}w.C&&a(window);w.B&&a(self);a(x);w.w&&w.A&&(module.exports===exports?module.exports=v:a(exports));w.v&&define(function(){return v})})()})(this);