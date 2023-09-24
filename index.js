// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCos=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,g=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,g,"e"),n=s.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var A=String.fromCharCode,E=isNaN,O=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,f,l,p,s;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(c(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function k(r){var t,e,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var N,U=Object.prototype,B=U.toString,G=U.__defineGetter__,I=U.__defineSetter__,C=U.__lookupGetter__,L=U.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=U,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var M=N;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=X()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[D]=e:delete r[D],n}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return H(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",H),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!H(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var sr,yr=/^\s*function\s*([^(]*)/i;R(pr,"REGEXP",yr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=sr;function vr(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vr);function _r(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(vr,"isObjectLikeArray",dr);var gr="function"==typeof $||"object"==typeof lr||"function"==typeof fr?function(r){return _r(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?_r(r).toLowerCase():t};function wr(r){return"function"===gr(r)}var hr=/./,mr="function"==typeof Object.defineProperty?Object.defineProperty:null;var jr,Ar=Object.defineProperty,Er=Object.prototype,Or=Er.toString,Fr=Er.__defineGetter__,Sr=Er.__defineSetter__,Tr=Er.__lookupGetter__,Pr=Er.__lookupSetter__;jr=function(){try{return mr({},"x",{}),!0}catch(r){return!1}}()?Ar:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Or.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Or.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Tr.call(r,t)||Pr.call(r,t)?(n=r.__proto__,r.__proto__=Er,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Fr&&Fr.call(r,t,e.get),a&&Sr&&Sr.call(r,t,e.set),r};var xr=jr;function Vr(r,t,e){xr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function kr(r){return"boolean"==typeof r}var Nr=Boolean.prototype.toString;var Ur=X();function Br(r){return"object"==typeof r&&(r instanceof K||(Ur?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Gr(r){return kr(r)||Br(r)}function Ir(){return new Function("return this;")()}Vr(Gr,"isPrimitive",kr),Vr(Gr,"isObject",Br);var Cr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Mr="object"==typeof global?global:null,Rr="object"==typeof globalThis?globalThis:null;var $r=function(r){if(arguments.length){if(!kr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ir()}if(Rr)return Rr;if(Cr)return Cr;if(Lr)return Lr;if(Mr)return Mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Hr=$r.document&&$r.document.childNodes,Wr=Int8Array;function Xr(){return/^\s*function\s*([^(]*)/i}var Zr=/^\s*function\s*([^(]*)/i;function Yr(r){return null!==r&&"object"==typeof r}Vr(Xr,"REGEXP",Zr);var zr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Yr);function qr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Zr.exec(n.toString()))return t[1]}return Yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Vr(Yr,"isObjectLikeArray",zr);var Dr="function"==typeof hr||"object"==typeof Wr||"function"==typeof Hr?function(r){return qr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?qr(r).toLowerCase():t};function Jr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Dr(r)}(r.next)}var Kr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Qr,rt=Object.defineProperty,tt=Object.prototype,et=tt.toString,nt=tt.__defineGetter__,ot=tt.__defineSetter__,it=tt.__lookupGetter__,at=tt.__lookupSetter__;Qr=function(){try{return Kr({},"x",{}),!0}catch(r){return!1}}()?rt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===et.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===et.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(it.call(r,t)||at.call(r,t)?(n=r.__proto__,r.__proto__=tt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&nt&&nt.call(r,t,e.get),a&&ot&&ot.call(r,t,e.set),r};var ut=Qr;function ct(r,t,e){ut(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ft(r){return"number"==typeof r}var lt=Number,pt=lt.prototype.toString;var st=X();function yt(r){return"object"==typeof r&&(r instanceof lt||(st?function(r){try{return pt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function bt(r){return ft(r)||yt(r)}ct(bt,"isPrimitive",ft),ct(bt,"isObject",yt);var vt="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var dt=/./,_t="function"==typeof Object.defineProperty?Object.defineProperty:null;var gt,wt=Object.defineProperty,ht=Object.prototype,mt=ht.toString,jt=ht.__defineGetter__,At=ht.__defineSetter__,Et=ht.__lookupGetter__,Ot=ht.__lookupSetter__;gt=function(){try{return _t({},"x",{}),!0}catch(r){return!1}}()?wt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===mt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===mt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Et.call(r,t)||Ot.call(r,t)?(n=r.__proto__,r.__proto__=ht,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jt&&jt.call(r,t,e.get),a&&At&&At.call(r,t,e.set),r};var Ft=gt;function St(r,t,e){Ft(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Tt(r){return"boolean"==typeof r}var Pt=Boolean.prototype.toString;var xt=X();function Vt(r){return"object"==typeof r&&(r instanceof K||(xt?function(r){try{return Pt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function kt(r){return Tt(r)||Vt(r)}function Nt(){return new Function("return this;")()}St(kt,"isPrimitive",Tt),St(kt,"isObject",Vt);var Ut="object"==typeof self?self:null,Bt="object"==typeof window?window:null,Gt="object"==typeof global?global:null,It="object"==typeof globalThis?globalThis:null;var Ct=function(r){if(arguments.length){if(!Tt(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Nt()}if(It)return It;if(Ut)return Ut;if(Bt)return Bt;if(Gt)return Gt;throw new Error("unexpected error. Unable to resolve global object.")}(),Lt=Ct.document&&Ct.document.childNodes,Mt=Int8Array;function Rt(){return/^\s*function\s*([^(]*)/i}var $t=/^\s*function\s*([^(]*)/i;function Ht(r){return null!==r&&"object"==typeof r}St(Rt,"REGEXP",$t);var Wt=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ht);function Xt(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=$t.exec(n.toString()))return t[1]}return Ht(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}St(Ht,"isObjectLikeArray",Wt);var Zt="function"==typeof dt||"object"==typeof Mt||"function"==typeof Lt?function(r){return Xt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Xt(r).toLowerCase():t};function Yt(r){return"function"===Zt(r)}var zt=Object,qt=/./,Dt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Jt,Kt=Object.defineProperty,Qt=Object.prototype,re=Qt.toString,te=Qt.__defineGetter__,ee=Qt.__defineSetter__,ne=Qt.__lookupGetter__,oe=Qt.__lookupSetter__;Jt=function(){try{return Dt({},"x",{}),!0}catch(r){return!1}}()?Kt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===re.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===re.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ne.call(r,t)||oe.call(r,t)?(n=r.__proto__,r.__proto__=Qt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&te&&te.call(r,t,e.get),a&&ee&&ee.call(r,t,e.set),r};var ie=Jt;function ae(r,t,e){ie(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ue(r){return"boolean"==typeof r}var ce=Boolean.prototype.toString;var fe=X();function le(r){return"object"==typeof r&&(r instanceof K||(fe?function(r){try{return ce.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function pe(r){return ue(r)||le(r)}function se(){return new Function("return this;")()}ae(pe,"isPrimitive",ue),ae(pe,"isObject",le);var ye="object"==typeof self?self:null,be="object"==typeof window?window:null,ve="object"==typeof global?global:null,de="object"==typeof globalThis?globalThis:null;var _e=function(r){if(arguments.length){if(!ue(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return se()}if(de)return de;if(ye)return ye;if(be)return be;if(ve)return ve;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=_e.document&&_e.document.childNodes,we=Int8Array;function he(){return/^\s*function\s*([^(]*)/i}var me=/^\s*function\s*([^(]*)/i;function je(r){return null!==r&&"object"==typeof r}ae(he,"REGEXP",me);var Ae=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(je);function Ee(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=me.exec(n.toString()))return t[1]}return je(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ae(je,"isObjectLikeArray",Ae);var Oe="function"==typeof qt||"object"==typeof we||"function"==typeof ge?function(r){return Ee(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ee(r).toLowerCase():t};var Fe,Se,Te=Object.getPrototypeOf;Se=Object.getPrototypeOf,Fe="function"===Oe(Se)?Te:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Pe=Fe;var xe=Object.prototype;function Ve(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(t=function(r){return null==r?null:(r=zt(r),Pe(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&Yt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&Yt(t.isPrototypeOf)&&(t===xe||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function ke(r,t){return Ve(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ne(r,t,e){var n,o,i,a;if(!Jr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=ke(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),vt&&wr(r[vt])&&R(o,vt,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:ft(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Ne(r[vt](),t,n)}}var Ue="function"==typeof Uint32Array;var Be="function"==typeof Uint32Array?Uint32Array:null;var Ge,Ie="function"==typeof Uint32Array?Uint32Array:void 0;Ge=function(){var r,t;if("function"!=typeof Be)return!1;try{r=function(r){return Ue&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Be(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ie:function(){throw new Error("not implemented")};var Ce=Ge,Le="function"==typeof Float64Array;var Me="function"==typeof Float64Array?Float64Array:null;var Re,$e="function"==typeof Float64Array?Float64Array:void 0;Re=function(){var r,t;if("function"!=typeof Me)return!1;try{r=function(r){return Le&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Me([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$e:function(){throw new Error("not implemented")};var He=Re,We="function"==typeof Uint8Array;var Xe="function"==typeof Uint8Array?Uint8Array:null;var Ze,Ye="function"==typeof Uint8Array?Uint8Array:void 0;Ze=function(){var r,t;if("function"!=typeof Xe)return!1;try{r=function(r){return We&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new Xe(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ye:function(){throw new Error("not implemented")};var ze=Ze,qe="function"==typeof Uint16Array;var De="function"==typeof Uint16Array?Uint16Array:null;var Je,Ke="function"==typeof Uint16Array?Uint16Array:void 0;Je=function(){var r,t;if("function"!=typeof De)return!1;try{r=function(r){return qe&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new De(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ke:function(){throw new Error("not implemented")};var Qe,rn={uint16:Je,uint8:ze};(Qe=new rn.uint16(1))[0]=4660;var tn=52===new rn.uint8(Qe.buffer)[0],en=!0===tn?1:0,nn=new He(1),on=new Ce(nn.buffer);function an(r){return nn[0]=r,on[en]}function un(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var cn=-.16666666666666632;function fn(r,t){var e,n,o;return e=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===t?r+n*(cn+o*e):r-(o*(.5*t-n*e)-t-n*cn)}var ln=2147483647,pn=2146435072,sn="function"==typeof Float64Array;var yn="function"==typeof Float64Array?Float64Array:null;var bn,vn="function"==typeof Float64Array?Float64Array:void 0;bn=function(){var r,t;if("function"!=typeof yn)return!1;try{r=function(r){return sn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new yn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var dn=!0===tn?0:1,_n=new bn(1),gn=new Ce(_n.buffer);var wn="function"==typeof Float64Array;var hn="function"==typeof Float64Array?Float64Array:null;var mn,jn,An,En="function"==typeof Float64Array?Float64Array:void 0;mn=function(){var r,t;if("function"!=typeof hn)return!1;try{r=function(r){return wn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new hn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?En:function(){throw new Error("not implemented")},!0===tn?(jn=1,An=0):(jn=0,An=1);var On={HIGH:jn,LOW:An},Fn=new mn(1),Sn=new Ce(Fn.buffer),Tn=On.HIGH,Pn=On.LOW;function xn(r,t){return Sn[Tn]=r,Sn[Pn]=t,Fn[0]}var Vn=Math.floor,kn=Number.POSITIVE_INFINITY,Nn=lt.NEGATIVE_INFINITY;function Un(r){return r!=r}function Bn(r){return r===kn||r===Nn}var Gn="function"==typeof Object.defineProperty?Object.defineProperty:null;var In,Cn=Object.defineProperty,Ln=Object.prototype,Mn=Ln.toString,Rn=Ln.__defineGetter__,$n=Ln.__defineSetter__,Hn=Ln.__lookupGetter__,Wn=Ln.__lookupSetter__;In=function(){try{return Gn({},"x",{}),!0}catch(r){return!1}}()?Cn:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Mn.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Mn.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Hn.call(r,t)||Wn.call(r,t)?(n=r.__proto__,r.__proto__=Ln,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Rn&&Rn.call(r,t,e.get),a&&$n&&$n.call(r,t,e.set),r};var Xn=In;var Zn="function"==typeof Float64Array;var Yn="function"==typeof Float64Array?Float64Array:null;var zn,qn,Dn,Jn="function"==typeof Float64Array?Float64Array:void 0;zn=function(){var r,t;if("function"!=typeof Yn)return!1;try{r=function(r){return Zn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Yn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jn:function(){throw new Error("not implemented")},!0===tn?(qn=1,Dn=0):(qn=0,Dn=1);var Kn={HIGH:qn,LOW:Dn},Qn=new zn(1),ro=new Ce(Qn.buffer),to=Kn.HIGH,eo=Kn.LOW;function no(r,t,e,n){return Qn[0]=r,t[n]=ro[to],t[n+e]=ro[eo],t}function oo(r){return no(r,[0,0],1,0)}!function(r,t,e){Xn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(oo,"assign",no);var io=[0,0];var ao="function"==typeof Object.defineProperty?Object.defineProperty:null;var uo,co=Object.defineProperty,fo=Object.prototype,lo=fo.toString,po=fo.__defineGetter__,so=fo.__defineSetter__,yo=fo.__lookupGetter__,bo=fo.__lookupSetter__;uo=function(){try{return ao({},"x",{}),!0}catch(r){return!1}}()?co:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===lo.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===lo.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(yo.call(r,t)||bo.call(r,t)?(n=r.__proto__,r.__proto__=fo,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&po&&po.call(r,t,e.get),a&&so&&so.call(r,t,e.set),r};var vo=uo;function _o(r,t,e,n){return Un(r)||Bn(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){vo(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return _o(r,[0,0],1,0)}),"assign",_o);var go=[0,0],wo=[0,0];function ho(r,t){var e,n,o,i,a,u;return 0===t||0===r||Un(r)||Bn(r)?r:(_o(r,go,1,0),t+=go[1],t+=function(r){var t=an(r);return(t=(t&pn)>>>20)-1023|0}(r=go[0]),t<-1074?(o=0,i=r,oo.assign(o,io,1,0),a=io[0],a&=ln,u=an(i),xn(a|=u&=2147483648,io[1])):t>1023?r<0?Nn:kn:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,oo.assign(r,wo,1,0),e=wo[0],e&=2148532223,n*xn(e|=t+1023<<20,wo[1])))}function mo(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var jo=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ao=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Eo=16777216,Oo=5.960464477539063e-8,Fo=mo(20),So=mo(20),To=mo(20),Po=mo(20);function xo(r,t,e,n,o,i,a,u,c){var f,l,p,s,y,b,v,d,_;for(s=i,_=n[e],d=e,y=0;d>0;y++)l=Oo*_|0,Po[y]=_-Eo*l|0,_=n[d-1]+l,d-=1;if(_=ho(_,o),_-=8*Vn(.125*_),_-=v=0|_,p=0,o>0?(v+=y=Po[e-1]>>24-o,Po[e-1]-=y<<24-o,p=Po[e-1]>>23-o):0===o?p=Po[e-1]>>23:_>=.5&&(p=2),p>0){for(v+=1,f=0,y=0;y<e;y++)d=Po[y],0===f?0!==d&&(f=1,Po[y]=16777216-d):Po[y]=16777215-d;if(o>0)switch(o){case 1:Po[e-1]&=8388607;break;case 2:Po[e-1]&=4194303}2===p&&(_=1-_,0!==f&&(_-=ho(1,o)))}if(0===_){for(d=0,y=e-1;y>=i;y--)d|=Po[y];if(0===d){for(b=1;0===Po[i-b];b++);for(y=e+1;y<=e+b;y++){for(c[u+y]=jo[a+y],l=0,d=0;d<=u;d++)l+=r[d]*c[u+(y-d)];n[y]=l}return xo(r,t,e+=b,n,o,i,a,u,c)}}if(0===_)for(e-=1,o-=24;0===Po[e];)e-=1,o-=24;else(_=ho(_,-o))>=Eo?(l=Oo*_|0,Po[e]=_-Eo*l|0,o+=24,Po[e+=1]=l):Po[e]=0|_;for(l=ho(1,o),y=e;y>=0;y--)n[y]=l*Po[y],l*=Oo;for(y=e;y>=0;y--){for(l=0,b=0;b<=s&&b<=e-y;b++)l+=Ao[b]*n[y+b];To[e-y]=l}for(l=0,y=e;y>=0;y--)l+=To[y];for(t[0]=0===p?l:-l,l=To[0]-l,y=1;y<=e;y++)l+=To[y];return t[1]=0===p?l:-l,7&v}function Vo(r,t,e,n){var o,i,a,u,c,f,l;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Fo[c]=f<0?0:jo[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Fo[a+(c-f)];So[c]=o}return 4,xo(r,t,4,So,u,4,i,a,Fo)}var ko=Math.round;function No(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=ko(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(an(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(an(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var Uo=1.5707963267341256,Bo=6077100506506192e-26,Go=2*Bo,Io=3*Bo,Co=4*Bo,Lo=[0,0,0],Mo=[0,0];function Ro(r,t){var e,n,o,i,a,u,c;if((o=an(r)&ln|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?No(r,o,t):o<=1073928572?r>0?(c=r-Uo,t[0]=c-Bo,t[1]=c-t[0]-Bo,1):(c=r+Uo,t[0]=c+Bo,t[1]=c-t[0]+Bo,-1):r>0?(c=r-2*Uo,t[0]=c-Go,t[1]=c-t[0]-Go,2):(c=r+2*Uo,t[0]=c+Go,t[1]=c-t[0]+Go,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?No(r,o,t):r>0?(c=r-3*Uo,t[0]=c-Io,t[1]=c-t[0]-Io,3):(c=r+3*Uo,t[0]=c+Io,t[1]=c-t[0]+Io,-3):1075388923===o?No(r,o,t):r>0?(c=r-4*Uo,t[0]=c-Co,t[1]=c-t[0]-Co,4):(c=r+4*Uo,t[0]=c+Co,t[1]=c-t[0]+Co,-4);if(o<1094263291)return No(r,o,t);if(o>=pn)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return _n[0]=r,gn[dn]}(r),c=xn(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)Lo[a]=0|c,c=16777216*(c-Lo[a]);for(Lo[2]=c,i=3;0===Lo[i-1];)i-=1;return u=Vo(Lo,Mo,n,i),r<0?(t[0]=-Mo[0],t[1]=-Mo[1],-u):(t[0]=Mo[0],t[1]=Mo[1],u)}var $o=[0,0];function Ho(r){var t;if(t=an(r),(t&=2147483647)<=1072243195)return t<1044381696?1:un(r,0);if(t>=2146435072)return NaN;switch(3&Ro(r,$o)){case 0:return un($o[0],$o[1]);case 1:return-fn($o[0],$o[1]);case 2:return-un($o[0],$o[1]);default:return fn($o[0],$o[1])}}return function(r){return Ne(r,Ho)}}));
//# sourceMappingURL=index.js.map
