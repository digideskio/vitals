/* vitals v5.0.0 (http://vitalsjs.com)
 * Copyright (c) 2014-2017 Adam A Smith <adam@imaginate.life>
 * The Apache License (http://vitalsjs.com/license) */
(function(D,O){function H(c){if(b.g(c))return c;if(b.f(c)||b.a(c)){if(!("toString"in c&&b.a(c.toString)))return E(c);c=c.toString();return b.g(c)?c:E(c)}return b.b(c)?"undefined":b.c(c)?"null":b.s(c)?c?"true":"false":b.u(c)?"NaN":E(c)}function P(c){function b(){return c.apply(null,arguments)}for(var n in c)y(c,n)&&(b[n]=c[n]);return b}function I(c){if(!c)return[""];var b=G(c,", ")?", ":G(c,",")?",":G(c,"|")?"|":" ";return c.split(b)}var C=function(){function c(b){switch(b){case "object":case "function":return!0}return!1}
function b(b){return!!b&&b.Object===Object}function n(b){return!!b&&(!("nodeType"in b)||!b.nodeType)}var l=c(typeof exports)&&n(exports),e=c(typeof module)&&n(module),p=l&&e&&"object"===typeof global&&b(global),d=c(typeof window)&&b(window),t="function"===typeof define&&"amd"in define&&"object"===typeof define.amd,h=c(typeof self)&&b(self),x=c(typeof D)&&b(D),z=p?global:d&&window!==(D&&D.window)?window:h?self:x?D:Function("return this")();return{B:l,C:e,L:p,F:d,A:t,D:h,M:x,G:z}}(),A=C.G,Q=A.Array,
l=A.Error,r=A.Object,J=r.prototype,K=A.RegExp,L=K.prototype,E=A.String,M=E.prototype,u=A.TypeError,v=function(){var b=J.toString;return function(c){return b.call(c)}}(),y=function(){var b=J.hasOwnProperty;return function(c,n){return b.call(c,n)}}(),b=function(){function b(a){return"number"===typeof a&&a===a&&isFinite(a)}function k(a){return!!a&&"object"===typeof a}function n(a){return!!a&&"function"===typeof a}function l(a){return k(a)&&"[object Array]"===v(a)}function e(a){return h.test(a)}var p=
function(){var a=function(){return"[object Arguments]"===v(arguments)}(),b=function(){try{"callee"in{}}catch(F){return!1}return"callee"in arguments}();return{l:a,j:b}}(),d=p.l?function(a){return k(a)&&"[object Arguments]"===v(a)}:p.j?function(a){return k(a)&&"callee"in a}:function(){return!1};p=p.l?function(a){if(!k(a))return!1;switch(v(a)){case "[object Array]":case "[object Arguments]":return!0;default:return!1}}:p.j?function(a){return k(a)&&("[object Array]"===v(a)||"callee"in a)}:function(a){return k(a)&&
"[object Array]"===v(a)};var t=/^(?:cr|lf|crlf)$/i,h=function(){var a="img";"sticky"in L&&(a+="y");"unicode"in L&&(a+="u");var b="^(?:[\\+\\-]["+a+"\\+\\-]*|["+a+"]*)$";var c=new K(b);c.i=a;c.m="/"+b+"/";return c}();e.i=h.i;e.m=h.m;var x=function(){if(!("isExtensible"in r&&n(r.isExtensible)))return function(){return!1};var a=r.isExtensible;try{return a(function(){}),a}catch(m){return function(b){return"object"===typeof b&&a(b)}}}(),z=function(){if(!("isFrozen"in r&&n(r.isFrozen)))return function(){return!1};
var a=r.isFrozen;try{return a(function(){}),a}catch(m){return function(b){return"object"===typeof b&&a(b)}}}(),q=function(){if(!("isSealed"in r&&n(r.isSealed)))return function(){return!1};var a=r.isSealed;try{return a(function(){}),a}catch(m){return function(b){return"object"===typeof b&&a(b)}}}();return{c:function(a){return null===a},b:function(a){return a===O},s:function(a){return"boolean"===typeof a},g:function(a){return"string"===typeof a},O:function(a){return!!a&&"string"===typeof a},v:b,N:function(a){return!!a&&
"number"===typeof a&&a===a&&isFinite(a)},u:function(a){return a!==a},f:k,h:function(a){if(!a)return!1;switch(typeof a){case "object":case "function":return!0;default:return!1}},a:n,H:l,o:p,P:d,J:function(a){return k(a)&&"[object RegExp]"===v(a)},R:function(a){return k(a)&&"[object Date]"===v(a)},V:function(a){return k(a)&&"[object Error]"===v(a)},S:function(a){return k(a)&&"nodeType"in a&&9===a.nodeType},T:function(a){return k(a)&&"nodeType"in a&&1===a.nodeType},I:function(a){if(l(a))return!0;a=a.length;
return b(a)&&!(a%1)&&0<=a},empty:function(a){var b;if(!a)return!0;if("function"===typeof a)return 0===a.length;if("object"!==typeof a)return!1;if("[object Array]"===v(a))return 0===a.length;for(b in a)if(y(a,b))return!1;return!0},U:function(a){return t.test(a)},X:e,extend:x,Y:z,aa:q,w:function(a){return!(a%1)},Z:function(a){return!!(a%2)},W:function(a){return!(a%2)}}}(),N=function(){function c(e,p){p=p||0;if(b.h(e))if(b.J(e))var d=e.toString();else{var t=p;b.a(e)?(d="Function",e.name&&(d+="("+e.name+
")")):(d=v(e),d=n.test(d)?d.replace(n,"$1"):"UnknownObjectType");d+=": ";if(b.o(e)){var h=t;var x;var z=e.length;if(1>z)h="[]";else{var q=k(h);h+=1;t="[\n";for(x=-1;++x<z;)t+=q+x+": ",t+=c(e[x],h)+",\n";t=t.replace(l,"\n");h=t+"]"}}else{b:{for(q in e)if(y(e,q)){q=!1;break b}q=!0}if(q)h="{}";else{z=k(t);t+=1;q="{\n";for(h in e)y(e,h)&&(q+=z,q+="'"+H(h)+"': ",q+=c(e[h],t)+",\n");q=q.replace(l,"\n");h=q+"}"}}d+=h}else b.s(e)?d=e?"true":"false":b.c(e)?d="null":b.b(e)?d="undefined":b.u(e)?d="NaN":b.g(e)?
(d=e.replace(/\\/g,"\\\\"),d=d.replace(/\n/g,"\\n"),d=d.replace(/\r/g,"\\r"),d=d.replace(/\t/g,"\\t"),d=d.replace(/\v/g,"\\v"),d=d.replace(/\0/g,"\\0"),d=d.replace(/\b/g,"\\b"),d=d.replace(/\f/g,"\\f"),d='"'+d+'"'):d=H(e);return d}function k(b){var c;if(1>c)return"";for(c="";b--;)c+="    ";return c}var n=/^\[object ([a-zA-Z0-9_\$]+)\]$/,l=/,\n$/;return c}();(function(){var c=function(){function c(){}return"create"in r&&b.a(r.create)?r.create:function(b){c.prototype=b;b=new c;c.prototype=null;return b}}();
return function(b){return c(b)}})();var R=function(){function c(c){if(b.b(c))return"newVitals";c=c.replace(e,"");return"vitals."+c}function k(b){if(!b)return"";if(p.test(b))return b.replace(p,"");b=b.replace(r,"");return"#"+b}function l(b,c,e,k){b.__vitals=!0;b.vitals=!0;b.name=c;switch(c){case "TypeError":b.__type=!0;b.type=!0;break;case "RangeError":b.__range=!0,b.range=!0}b.message=e;b.msg=e;3<arguments.length&&(b.value=k,b.val=k);return b}var r=/^#/,e=/^vitals\./,p=/^\!/;return function(d){function e(b){b=
b?h+"."+b:h;return"`"+b+"`"}var h=c(d);return{error:function(b,c,d){d=e(d);return l(b,"Error",c+(" for "+d+" call"))},K:function(b,c,d,a,h){h=e(h);c=k(c);var F=N(d);a="invalid "+c+" data type for "+h+" call\n"+("valid data types: `"+a+"`\n")+("actual "+c+" value: `"+F+"`");return l(b,"TypeError",a,d)},$:function(c,d,h,a){a=e(a);d="out-of-range "+k(d)+" for "+a+" call";if(b.g(h))d+="\nvalid range: `"+h+"`";else if(b.H(h)){var m;a="";var F=h.length;for(m=-1;++m<F;)a+="\n- `"+N(h[m])+"`";d+="\nvalid options:"+
a}return l(c,"RangeError",d)}}}}(),G=function(){return"includes"in M&&b.a(M.includes)?function(b,k){return b.includes(k)}:function(b,k){return-1!==b.indexOf(k)}}(),B=function(){function c(c,g,f,w){switch(arguments.length){case 0:throw a(new l,"no #end defined");case 1:throw a(new l,"no #iteratee defined");case 2:f=g;if(!b.a(f))throw m(new u,"iteratee",f,"!function(*\x3d, (string|number)\x3d, (!Object|!Function|!Array)\x3d): *");return e(c,f);case 3:if(b.a(g)&&(b.c(f)||b.b(f)||b.f(f)))return e(c,g,
f);break;default:if(!b.c(w)&&!b.b(w)&&!b.f(w))throw m(new u,"thisArg",w,"?Object\x3d");}if(!b.a(f))throw m(new u,"iteratee",f,"!function(*\x3d, (string|number)\x3d, (!Object|!Function|!Array)\x3d): *");if(b.v(g)){if(!b.w(g))throw a(new l,"invalid #source `number` (must be whole `number`)");return t(c,g,f,w)}if(b.g(g))g=I(g);else if(!b.h(g))throw m(new u,"source",g,"(!Object|!Function|!Array|!Arguments|string|number)\x3d");return b.o(g)?d(c,g,f,w):p(c,g,f,w)}function k(c,g,f,d){switch(arguments.length){case 0:throw a(new l,
"no #end defined","object");case 1:throw a(new l,"no #source defined","object");case 2:throw a(new l,"no #iteratee defined","object");case 3:break;default:if(!b.c(d)&&!b.b(d)&&!b.f(d))throw m(new u,"thisArg",d,"?Object\x3d","object");}if(!b.a(f))throw m(new u,"iteratee",f,"!function(*\x3d, string\x3d, (!Object|!Function)\x3d): *","object");if(!b.h(g))throw m(new u,"source",g,"(!Object|!Function)","object");return p(c,g,f,d)}function n(c,g,f,w){switch(arguments.length){case 0:throw a(new l,"no #end defined",
"array");case 1:throw a(new l,"no #source defined","array");case 2:throw a(new l,"no #iteratee defined","array");case 3:break;default:if(!b.c(w)&&!b.b(w)&&!b.f(w))throw m(new u,"thisArg",w,"?Object\x3d","array");}if(!b.a(f))throw m(new u,"iteratee",f,"!function(*\x3d, number\x3d, !Array\x3d): *","array");if(b.g(g))g=I(g);else{if(!b.h(g))throw m(new u,"source",g,"!Array|!Arguments|!Object|!Function|string","array");if(!b.I(g))throw a(new l,"#source failed `array-like` test (#source.length must be a whole `number` that is `0` or more)",
"array");}return d(c,g,f,w)}function r(c,g,f,d){switch(arguments.length){case 0:throw a(new l,"no #end defined","cycle");case 1:throw a(new l,"no #cycles defined","cycle");case 2:throw a(new l,"no #iteratee defined","cycle");case 3:break;default:if(!b.c(d)&&!b.b(d)&&!b.f(d))throw m(new u,"thisArg",d,"?Object\x3d","cycle");}if(!b.a(f))throw m(new u,"iteratee",f,"!function(number\x3d, number\x3d): *","cycle");if(!b.v(g))throw m(new u,"cycles",g,"number","cycle");if(!b.w(g))throw a(new l,"invalid #cycles `number` (must be whole `number`)",
"cycle");return t(c,g,f,d)}function e(a,c,f){b.b(f)||(c=h(c,f));if(0<c.length)for(f=0;c(f++)!==a;);else for(;c()!==a;);return!0}function p(a,c,f,d){var g;if(2<f.length){if(b.a(c))var e=P(c);else{var h={};for(e in c)y(c,e)&&(h[e]=c[e]);e=h}c=e}b.b(d)||(f=x(f,d));switch(f.length){case 0:for(g in c)if(y(c,g)&&f()===a)return!0;break;case 1:for(g in c)if(y(c,g)&&f(c[g])===a)return!0;break;case 2:for(g in c)if(y(c,g)&&f(c[g],g)===a)return!0;break;default:for(g in c)if(y(c,g)&&f(c[g],g,c)===a)return!0}return!1}
function d(a,c,d,e){if(2<d.length){var g=new Q(c.length);for(f in c)y(c,f)&&(g[f]=c[f]);c=g}b.b(e)||(d=x(d,e));e=c.length;var f=-1;switch(d.length){case 0:for(;++f<e;)if(d()===a)return!0;break;case 1:for(;++f<e;)if(d(c[f])===a)return!0;break;case 2:for(;++f<e;)if(d(c[f],f)===a)return!0;break;default:for(;++f<e;)if(d(c[f],f,c)===a)return!0}return!1}function t(a,c,d,e){var f;b.b(e)||(d=v(d,e));e=0<c?c:0;switch(d.length){case 0:for(;e--;)if(d()===a)return!0;break;case 1:for(f=0;e--;)if(d(f++)===a)return!0;
break;default:for(f=0;e--;)if(d(f++,c)===a)return!0}return!1}function h(a,c){return 1>a.length?function(){return a.call(c)}:function(b){return a.call(c,b)}}function x(a,c){switch(a.length){case 0:return function(){return a.call(c)};case 1:return function(b){a.call(c,b)};case 2:return function(b,d){a.call(c,b,d)}}return function(b,d,e){a.call(c,b,d,e)}}function v(a,c){switch(a.length){case 0:return function(){return a.call(c)};case 1:return function(b){return a.call(c,b)}}return function(b,d){return a.call(c,
b,d)}}c.main=c;c.object=k;c.obj=k;c.array=n;c.arr=n;c.cycle=r;c.time=r;var q=R("until"),a=q.error,m=q.K;return c}();B.until=B;B.VERSION="5.0.0";(function(){function b(b){b.vitals=B;b.VITALS=B}C.F&&b(window);C.D&&b(self);b(A);C.B&&C.C&&(module.exports===exports?module.exports=B:b(exports));C.A&&define(function(){return B})})()})(this);