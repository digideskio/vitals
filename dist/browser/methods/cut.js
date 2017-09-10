/* vitals v5.0.0 (http://vitalsjs.com)
 * Copyright (c) 2014-2017 Adam A Smith <adam@imaginate.life>
 * The Apache License (http://vitalsjs.com/license) */
(function(G,H){function N(c){if(a.b(c))return c;if(a.o(c)||a.g(c)){if(!("toString"in c&&a.g(c.toString)))return I(c);c=c.toString();return a.b(c)?c:I(c)}return a.c(c)?"undefined":a.m(c)?"null":a.u(c)?c?"true":"false":a.v(c)?"NaN":I(c)}function X(a){function c(){return a.apply(null,arguments)}for(var m in a)w(a,m)&&(c[m]=a[m]);return c}function x(c,k){var m,e;var f=c.length;a.c(k)&&(k=0);a.c(m)&&(m=f);0>k&&(k+=f);0>k&&(k=0);m>f?m=f:0>m&&(m+=f);if(k>=m)return[];f=new U(m-k);var t=k-1;for(e=0;++t<m;)f[e++]=
c[t];return f}var E=function(){function a(a){switch(a){case "object":case "function":return!0}return!1}function k(a){return!!a&&a.Object===Object}function m(a){return!!a&&(!("nodeType"in a)||!a.nodeType)}var e=a(typeof exports)&&m(exports),f=a(typeof module)&&m(module),t=e&&f&&"object"===typeof global&&k(global),h=a(typeof window)&&k(window),Q="function"===typeof define&&"amd"in define&&"object"===typeof define.amd,u=a(typeof self)&&k(self),A=a(typeof G)&&k(G),B=t?global:h&&window!==(G&&G.window)?
window:u?self:A?G:Function("return this")();return{L:e,M:f,U:t,O:h,K:Q,N:u,V:A,P:B}}(),D=E.P,U=D.Array,e=D.Error,z=D.Object,J=z.prototype,R=D.RangeError,S=D.RegExp,K=S.prototype,I=D.String,L=I.prototype,n=D.TypeError,C=function(){var a=J.toString;return function(c){return a.call(c)}}(),w=function(){var a=J.hasOwnProperty;return function(c,e){return a.call(c,e)}}(),a=function(){function a(a){return"number"===typeof a&&a===a&&isFinite(a)}function k(a){return!!a&&"object"===typeof a}function e(a){return!!a&&
"function"===typeof a}function n(a){return k(a)&&"[object Array]"===C(a)}function f(a){return u.test(a)}var t=function(){var a=function(){return"[object Arguments]"===C(arguments)}(),c=function(){try{"callee"in{}}catch(y){return!1}return"callee"in arguments}();return{H:a,G:c}}(),h=t.H?function(a){return k(a)&&"[object Arguments]"===C(a)}:t.G?function(a){return k(a)&&"callee"in a}:function(){return!1};t=t.H?function(a){if(!k(a))return!1;switch(C(a)){case "[object Array]":case "[object Arguments]":return!0;
default:return!1}}:t.G?function(a){return k(a)&&("[object Array]"===C(a)||"callee"in a)}:function(a){return k(a)&&"[object Array]"===C(a)};var Q=/^(?:cr|lf|crlf)$/i,u=function(){var a="img";"sticky"in K&&(a+="y");"unicode"in K&&(a+="u");var c="^(?:[\\+\\-]["+a+"\\+\\-]*|["+a+"]*)$";var h=new S(c);h.F=a;h.I="/"+c+"/";return h}();f.F=u.F;f.I=u.I;var A=function(){if(!("isExtensible"in z&&e(z.isExtensible)))return function(){return!1};var a=z.isExtensible;try{return a(function(){}),a}catch(r){return function(g){return"object"===
typeof g&&a(g)}}}(),B=function(){if(!("isFrozen"in z&&e(z.isFrozen)))return function(){return!1};var a=z.isFrozen;try{return a(function(){}),a}catch(r){return function(g){return"object"===typeof g&&a(g)}}}(),q=function(){if(!("isSealed"in z&&e(z.isSealed)))return function(){return!1};var a=z.isSealed;try{return a(function(){}),a}catch(r){return function(g){return"object"===typeof g&&a(g)}}}();return{m:function(a){return null===a},c:function(a){return a===H},u:function(a){return"boolean"===typeof a},
b:function(a){return"string"===typeof a},X:function(a){return!!a&&"string"===typeof a},h:a,W:function(a){return!!a&&"number"===typeof a&&a===a&&isFinite(a)},v:function(a){return a!==a},o:k,f:function(a){if(!a)return!1;switch(typeof a){case "object":case "function":return!0;default:return!1}},g:e,a:n,R:t,j:h,l:function(a){return k(a)&&"[object RegExp]"===C(a)},A:function(a){return k(a)&&"[object Date]"===C(a)},D:function(a){return k(a)&&"[object Error]"===C(a)},B:function(a){return k(a)&&"nodeType"in
a&&9===a.nodeType},C:function(a){return k(a)&&"nodeType"in a&&1===a.nodeType},w:function(g){if(n(g))return!0;g=g.length;return a(g)&&!(g%1)&&0<=g},empty:function(a){var g;if(!a)return!0;if("function"===typeof a)return 0===a.length;if("object"!==typeof a)return!1;if("[object Array]"===C(a))return 0===a.length;for(g in a)if(w(a,g))return!1;return!0},Y:function(a){return Q.test(a)},$:f,extend:A,aa:B,ea:q,s:function(a){return!(a%1)},ca:function(a){return!!(a%2)},Z:function(a){return!(a%2)}}}(),M=function(){function c(f,
t){t=t||0;if(a.f(f))if(a.l(f))var h=f.toString();else{var m=t;a.g(f)?(h="Function",f.name&&(h+="("+f.name+")")):(h=C(f),h=e.test(h)?h.replace(e,"$1"):"UnknownObjectType");h+=": ";if(a.R(f)){var u=m;var A;var B=f.length;if(1>B)u="[]";else{var q=k(u);u+=1;m="[\n";for(A=-1;++A<B;)m+=q+A+": ",m+=c(f[A],u)+",\n";m=m.replace(n,"\n");u=m+"]"}}else{b:{for(q in f)if(w(f,q)){q=!1;break b}q=!0}if(q)u="{}";else{B=k(m);m+=1;q="{\n";for(u in f)w(f,u)&&(q+=B,q+="'"+N(u)+"': ",q+=c(f[u],m)+",\n");q=q.replace(n,"\n");
u=q+"}"}}h+=u}else a.u(f)?h=f?"true":"false":a.m(f)?h="null":a.c(f)?h="undefined":a.v(f)?h="NaN":a.b(f)?(h=f.replace(/\\/g,"\\\\"),h=h.replace(/\n/g,"\\n"),h=h.replace(/\r/g,"\\r"),h=h.replace(/\t/g,"\\t"),h=h.replace(/\v/g,"\\v"),h=h.replace(/\0/g,"\\0"),h=h.replace(/\b/g,"\\b"),h=h.replace(/\f/g,"\\f"),h='"'+h+'"'):h=N(f);return h}function k(a){var c;if(1>c)return"";for(c="";a--;)c+="    ";return c}var e=/^\[object ([a-zA-Z0-9_\$]+)\]$/,n=/,\n$/;return c}();(function(){var c=function(){function c(){}
return"create"in z&&a.g(z.create)?z.create:function(a){c.prototype=a;a=new c;c.prototype=null;return a}}();return function(a){return c(a)}})();var V=function(){function c(c){if(a.c(c))return"newVitals";c=c.replace(f,"");return"vitals."+c}function e(a){if(!a)return"";if(t.test(a))return a.replace(t,"");a=a.replace(n,"");return"#"+a}function m(a,c,e,f){a.__vitals=!0;a.vitals=!0;a.name=c;switch(c){case "TypeError":a.__type=!0;a.type=!0;break;case "RangeError":a.__range=!0,a.range=!0}a.message=e;a.msg=
e;3<arguments.length&&(a.value=f,a.val=f);return a}var n=/^#/,f=/^vitals\./,t=/^\!/;return function(f){function h(a){a=a?k+"."+a:k;return"`"+a+"`"}var k=c(f);return{error:function(a,c,e){e=h(e);return m(a,"Error",c+(" for "+e+" call"))},J:function(a,c,f,g,r){r=h(r);c=e(c);var y=M(f);g="invalid "+c+" data type for "+r+" call\n"+("valid data types: `"+g+"`\n")+("actual "+c+" value: `"+y+"`");return m(a,"TypeError",g,f)},T:function(c,f,k,g){g=h(g);f="out-of-range "+e(f)+" for "+g+" call";if(a.b(k))f+=
"\nvalid range: `"+k+"`";else if(a.a(k)){var r;g="";var y=k.length;for(r=-1;++r<y;)g+="\n- `"+M(k[r])+"`";f+="\nvalid options:"+g}return m(c,"RangeError",f)}}}}(),Y=function(){return"includes"in L&&a.g(L.includes)?function(a,e){return a.includes(e)}:function(a,e){return-1!==a.indexOf(e)}}(),T=function(){function c(c,B){switch(arguments.length){case 0:throw h(new e,"no #types defined");case 1:throw h(new e,"no #val defined");case 2:var q=!1;break;default:q=!0}if(!a.b(c))throw z(new n,"types",c,"string");
if(!c)throw h(new e,"invalid empty #types `string`");if(f["*"](c))return!0;a:{var g=c;var r;f["\x3d"](g)&&(g+="|undefined");g=g.toLowerCase();g=g.replace(x,"");g=g.split("|");for(r=g.length;r--;){var y="_"+g[r];if(!w(m,y)){y=null;break a}g[r]=m[y]}y=g.length?g:null}if(!y)throw u(new R,"types","https://github.com/imaginate/vitals/wiki/vitals.is-types");r=c;g=f["?"](r);r=f["!"](r);g=(g&&r?0:g||r)?!r&&g:H;if(q)a:{q=y;y=arguments;for(r=y.length;--r;)if(!k(q,y[r],g)){q=!1;break a}q=!0}else q=k(y,B,g);
return q}function k(a,c,e){var g;for(g=a.length;g--;)if(a[g](c,e))return!0;return!1}c.main=c;var m=function(){function c(a,c,f){for(var g in c)w(c,g)&&e(a,g,c[g],f)}function e(c,h,k,m){w(e,c)&&(k=e[c](k));m=!1!==m;f["_"+h]=function(c,e){a.u(e)||(e=m);return a.m(c)?e:k(c)}}var f={};e.arrays=function(c){return function(e){var f;if(!a.a(e))return!1;for(f=e.length;f--;)if(!c(e[f]))return!1;return!0}};e.maps=function(c){return function(e){var f;if(!a.o(e))return!1;for(f in e)if(w(e,f)&&!c(e[f]))return!1;
return!0}};c("primitives",{undefined:a.c,"boolean":a.u,string:a.b,number:a.h,nan:a.v},!1);e("primitives","null",a.m);c("js_objects",{object:a.o,regexp:a.l,array:a.a,error:a.D,date:a.A});e("js_objects","arguments",a.j);e("js_objects","function",a.g,!1);c("dom_objects",{element:a.C,document:a.B});e("others","empty",a.empty);c("arrays",{undefineds:a.c,nulls:a.m,booleans:a.u,strings:a.b,numbers:a.h,nans:a.v,objects:a.o,functions:a.g,regexps:a.l,arrays:a.a,dates:a.A,errors:a.D,elements:a.C,documents:a.B});
c("maps",{undefinedmap:a.c,nullmap:a.m,booleanmap:a.u,stringmap:a.b,numbermap:a.h,nanmap:a.v,objectmap:a.o,functionmap:a.ba,regexpmap:a.da,arraymap:a.a,datemap:a.A,errormap:a.D,elementmap:a.C,documentmap:a.B});(function(a){for(e in a)if(w(a,e)){var c="_"+a[e];var e="_"+e;f[e]=f[c]}})({nil:"null",bool:"boolean",str:"string",num:"number","void":"undefined",obj:"object",func:"function",fun:"function",fn:"function",regex:"regexp",regx:"regexp",re:"regexp",arr:"array",err:"error",args:"arguments",elem:"element",
doc:"document",undefinedes:"undefineds",voids:"undefineds",nils:"nulls",strs:"strings",nums:"numbers",bools:"booleans",objs:"objects",funcs:"functions",funs:"functions",fns:"functions",regexes:"regexps",regexs:"regexps",res:"regexps",arrs:"arrays",errs:"errors",elems:"elements",docs:"documents",voidmap:"undefinedmap",nilmap:"nullmap",strmap:"stringmap",nummap:"numbermap",boolmap:"booleanmap",objmap:"objectmap",funcmap:"functionmap",funmap:"functionmap",fnmap:"functionmap",regexmap:"regexpmap",regxmap:"regexpmap",
remap:"regexpmap",arrmap:"arraymap",errmap:"errormap",elemmap:"elementmap",docmap:"documentmap"});return f}(),x=/[^a-z\|]/g,f=function(){var a=/\|/,c=/\!/,e=/\?/,f=/\=/,h=/\*|any/;return{"|":function(c){return a.test(c)},"!":function(a){return c.test(a)},"?":function(a){return e.test(a)},"\x3d":function(a){return f.test(a)},"*":function(a){return h.test(a)}}}(),t=V("is"),h=t.error,z=t.J,u=t.T;return c}(),F=function(){function c(b,d,l){switch(arguments.length){case 0:throw p(new e,"no #source defined");
case 1:throw p(new e,"no #val defined");case 2:if(a.b(b))return a.a(d)?D(b,d):y(b,d);if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments|string");a.j(b)&&(b=x(b));return a.g(d)?a.a(b)?O(b,d,H):P(b,d,H):a.a(d)?B(b,d):A(b,d);default:if(a.b(b))return d=x(arguments,1),D(b,d);if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments|string");a.j(b)&&(b=x(b));if(a.g(d)){if(!a.m(l)&&!a.c(l)&&!a.o(l))throw v(new n,"thisArg",l,"?Object\x3d");return a.a(b)?O(b,d,l):P(b,d,
l)}d=x(arguments,1);return B(b,d)}}function k(b,d,l){switch(arguments.length){case 0:throw p(new e,"no #source defined","property");case 1:throw p(new e,"no #val defined","property");case 2:if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments","property");a.j(b)&&(b=x(b));return a.g(d)?a.a(b)?O(b,d,H):P(b,d,H):A(b,d);default:if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments","property");a.j(b)&&(b=x(b));if(a.g(d)){if(!a.m(l)&&!a.c(l)&&!a.o(l))throw v(new n,
"thisArg",l,"?Object\x3d","property");return a.a(b)?O(b,d,l):P(b,d,l)}return A(b,d)}}function m(b,d,l){switch(arguments.length){case 0:throw p(new e,"no #source defined","index");case 1:throw p(new e,"no #index defined","index");case 2:if(!a.f(b))throw v(new n,"source",b,"!Array|!Arguments|!Object|!Function","index");if(!a.w(b))throw p(new e,"#source failed `array-like` test (#source.length must be a whole `number` that is `0` or more)","index");if(!a.h(d))throw v(new n,"index",d,"number","index");
if(!a.s(d))throw p(new e,"invalid #index `number` (must be a whole `number`)","index");a.a(b)||(b=x(b));return g(b,d,H);default:if(!a.f(b))throw v(new n,"source",b,"!Array|!Arguments|!Object|!Function","index");if(!a.w(b))throw p(new e,"#source failed `array-like` test (#source.length must be a whole `number` that is `0` or more)","index");if(!a.h(d))throw v(new n,"index",d,"number","index");if(!a.s(d))throw p(new e,"invalid #index `number` (must be a whole `number`)","index");if(!a.c(l)){if(!a.h(l))throw v(new n,
"toIndex",l,"number","index");if(!a.s(d))throw p(new e,"invalid #toIndex `number` (must be a whole `number`)","index");}a.a(b)||(b=x(b));return g(b,d,l)}}function z(b,d){switch(arguments.length){case 0:throw p(new e,"no #source defined","value");case 1:throw p(new e,"no #val defined","value");}if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments","value");a.j(b)&&(b=x(b));return r(b,d)}function f(b,d){switch(arguments.length){case 0:throw p(new e,"no #source defined","pattern");
case 1:throw p(new e,"no #pattern defined","pattern");}if(!a.b(b))throw v(new n,"source",b,"string","pattern");return y(b,d)}function t(b,d){switch(arguments.length){case 0:throw p(new e,"no #source defined","properties");case 1:throw p(new e,"no #val defined","properties");case 2:break;default:d=x(arguments,1)}if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments","properties");a.j(b)&&(b=x(b));return a.a(d)?B(b,d):A(b,d)}function h(b,d){switch(arguments.length){case 0:throw p(new e,
"no #source defined","indexes");case 1:throw p(new e,"no #index defined","indexes");case 2:break;default:d=x(arguments,1)}if(!a.f(b))throw v(new n,"source",b,"!Array|!Arguments|!Object|!Function","indexes");if(!a.w(b))throw p(new e,"#source failed `array-like` test (#source.length must be a whole `number` that is `0` or more)","indexes");a.a(b)||(b=x(b));if(!a.a(d)){if(!a.h(d))throw v(new n,"index",d,"(!Array\x3cnumber\x3e|...number)","indexes");if(!a.s(d))throw p(new e,"invalid #index `number` (must be a whole `number`)",
"indexes");return g(b,d)}a:{var l=d;var c;if(a.a(l)){var f=l.length;for(c=-1;++c<f;)if(!a.h(l[c])){l=!1;break a}l=!0}else l=!1}if(!l)throw v(new n,"index",d,"(!Array\x3cnumber\x3e|...number)","indexes");a:{l=d;f=l.length;for(c=-1;++c<f;)if(!a.s(l[c])){l=!1;break a}l=!0}if(!l)throw p(new e,"an invalid #index `number` (every #index must be a whole `number`)","indexes");return J(b,d)}function C(b,d){switch(arguments.length){case 0:throw p(new e,"no #source defined","values");case 1:throw p(new e,"no #val defined",
"values");case 2:break;default:d=x(arguments,1)}if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments","values");a.j(b)&&(b=x(b));if(a.a(d)){var c=b;var f=d;c=a.a(c)?L(c,f):G(c,f)}else c=r(b,d);return c}function u(b,d){switch(arguments.length){case 0:throw p(new e,"no #source defined","patterns");case 1:throw p(new e,"no #pattern defined","patterns");case 2:break;default:d=x(arguments,1)}if(!a.b(b))throw v(new n,"source",b,"string","patterns");return a.a(d)?D(b,d):y(b,d)}function A(b,
d){return a.a(b)?a.h(d)&&a.s(d)?I(b,d):K(b,d):a.b(d)||a.l(d)?F(b,d):E(b,d)}function B(b,d){if(a.a(b)){a:{var c;var e=d.length;for(c=-1;++c<e;){var f=d[c];if(!a.h(f)||!a.s(f)){f=!1;break a}}f=!0}f=f?J(b,d):L(b,d)}else if(a.b(d[0])||a.l(d[0])){f=b;var g;e=a.l(d[0]);c=d.length;for(g=-1;++g<c;)f=F(f,d[g],e)}else f=G(b,d);return f}function q(a,d){w(a,d)&&delete a[d];return a}function g(b,d,c){var l=b.length;0>d&&(d+=l);if(d>=l)return b;if(a.c(c)){if(0>d)return b;b.splice(d,1);return b}0>d&&(d=0);c>l?c=
l:0>c&&(c+=l);if(d>=c)return b;b.splice(d,c-d);return b}function r(b,d){return a.a(b)?K(b,d):E(b,d)}function y(b,d){a.l(d)||(d=N(d),d=d.replace(/[\\^$.*+?|(){}[\]]/g,"\\$\x26"),d=new S(d,"g"));return b.replace(d,"")}function D(a,d){var b;var c=d.length;for(b=-1;++b<c;)a=y(a,d[b]);return a}function F(b,d,c){a.c(c)&&(c=a.l(d));if(!c)return w(b,d)&&delete b[d],b;c=d;for(d in b){var l;if(l=w(b,d)){l=d;var e=c;a.l(e)?l=e.test(l):(e=N(e),l=l?e?Y(l,e):!0:!e)}l&&delete b[d]}return b}function E(a,d){for(var b in a)w(a,
b)&&a[b]===d&&delete a[b];return a}function G(a,d){var b;var c=d.length;for(b=-1;++b<c;)a=E(a,d[b]);return a}function I(a,d){var b=a.length;0>d&&(d+=b);if(0>d||d>=b)return a;a.splice(d,1);return a}function J(a,d){var b;if(!a.length||!d.length)return a;if(1===d.length)return I(a,d[0]);var c=R(d,a.length);for(b=c.first.length;b--;){var e=c.first[b];var f=c.S[b]-e+1;a.splice(e,f)}return a}function K(a,d){var b;for(b=a.length;b--;)a[b]===d&&a.splice(b,1);return a}function L(a,d){var b,c;var e=d.length;
for(c=a.length;c--;){var f=a[c];for(b=e;b--;)if(d[b]===f){a.splice(c,1);break}}return a}function P(b,d,c){var e;a.c(c)||(d=M(d,c));if(2<d.length)if(a.g(b))var f=X(b);else{c={};for(f in b)w(b,f)&&(c[f]=b[f]);f=c}else f=b;switch(d.length){case 0:for(e in f)w(f,e)&&!d()&&delete b[e];break;case 1:for(e in f)w(f,e)&&!d(f[e])&&delete b[e];break;case 2:for(e in f)w(f,e)&&!d(f[e],e)&&delete b[e];break;default:for(e in f)w(f,e)&&!d(f[e],e,f)&&delete b[e]}return b}function O(b,c,e){a.c(e)||(c=M(c,e));if(2<
c.length){e=new U(b.length);for(d in b)w(b,d)&&(e[d]=b[d]);var d=e}else d=b;e=d.length;switch(c.length){case 0:for(;e--;)c()||b.splice(e,1);break;case 1:for(;e--;)c(d[e])||b.splice(e,1);break;case 2:for(;e--;)c(d[e],e)||b.splice(e,1);break;default:for(;e--;)c(d[e],e,d)||b.splice(e,1)}return b}function M(a,c){switch(a.length){case 0:return function(){return a.call(c)};case 1:return function(b){return a.call(c,b)};case 2:return function(b,d){return a.call(c,b,d)}}return function(b,d,e){return a.call(c,
b,d,e)}}c.main=c;c.property=k;c.prop=k;c.key=function(b,c){switch(arguments.length){case 0:throw p(new e,"no #source defined","key");case 1:throw p(new e,"no #key defined","key");}if(!a.f(b))throw v(new n,"source",b,"!Object|!Function","key");return q(b,c)};c.index=m;c.i=m;c.type=function(b,c){switch(arguments.length){case 0:throw p(new e,"no #source defined","type");case 1:throw p(new e,"no #type defined","type");}if(!a.f(b))throw v(new n,"source",b,"!Object|!Function|!Array|!Arguments","type");
if(!a.b(c))throw v(new n,"type",c,"string","type");a.j(b)&&(b=x(b));if(a.empty(b))return T(c,""),b;var d=b;if(a.a(d)){var f;for(f=d.length;f--;)T(c,d[f])&&d.splice(f,1)}else for(f in d)w(d,f)&&T(c,d[f])&&delete d[f];return d};c.value=z;c.val=z;c.pattern=f;c.patt=f;c.properties=t;c.props=t;c.keys=function(b,c){switch(arguments.length){case 0:throw p(new e,"no #source defined","keys");case 1:throw p(new e,"no #key defined","keys");case 2:break;default:c=x(arguments,1)}if(!a.f(b))throw v(new n,"source",
b,"!Object|!Function","keys");if(a.a(c)){var d=b;var f=c,g;var h=f.length;for(g=-1;++g<h;)d=q(d,f[g])}else d=q(b,c);return d};c.indexes=h;c.ii=h;c.values=C;c.vals=C;c.patterns=u;c.patts=u;var R=function(){function a(a,c){0>a&&(a+=c);return 0>a||a>=c?-1:a}function c(a,c){g.splice(c,0,a);h.splice(c,0,a)}function e(a){g.splice(a,1);h.splice(a,1)}function f(a,b,d){var k=b+d>>>1;if(a<g[k]){var l=g[k];if(k){d=k-1;var m=h[d];a===--l?a===++m?(h[d]=h[k],e(k)):g[k]=a:a>m?a===++m?h[d]=a:c(a,k):f(a,b,d)}else a===
--l?g[k]=a:(g.unshift(a),h.unshift(a))}else a>h[k]&&(b=k+1,m=h[k],b===h.length?a===++m?h[k]=a:(g.push(a),h.push(a)):(l=g[b],a===++m?a===--l?(h[k]=h[b],e(b)):h[k]=a:a<l?a===--l?g[b]=a:c(a,b):f(a,b,d)))}var g,h;return function(c,b){g=[];h=[];var d;var e=c.length;var k=0;for(d=a(c[k],b);-1===d&&++k<e;)d=a(c[k],b);g.push(d);for(h.push(d);++k<e;)d=a(c[k],b),-1!==d&&f(d,0,h.length);return{first:g,S:h}}}(),W=V("cut"),p=W.error,v=W.J;return c}();F.cut=F;F.VERSION="5.0.0";(function(){function a(a){a.vitals=
F;a.VITALS=F}E.O&&a(window);E.N&&a(self);a(D);E.L&&E.M&&(module.exports===exports?module.exports=F:a(exports));E.K&&define(function(){return F})})()})(this);