// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCos=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){return"string"==typeof r}function N(r){var t,e,n;if(!I(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var k,V=Object.prototype,P=V.toString,C=V.__defineGetter__,G=V.__defineSetter__,L=V.__lookupGetter__,$=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(L.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,t,e.get),a&&G&&G.call(r,t,e.set),r};var H=k;function W(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=Z()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return R(r)||tr(r)}function nr(){return new Function("return this;")()}W(er,"isPrimitive",R),W(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!R(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;W(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=pr.exec(n.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}W(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vr));var gr="function"==typeof B||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dr(r).toLowerCase():t};function br(r){return"function"===gr(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function wr(r){return"number"==typeof r}var mr=Number,jr=mr.prototype.toString;var Ar=Z();function _r(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return wr(r)||_r(r)}W(Er,"isPrimitive",wr),W(Er,"isObject",_r);var Or="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var Sr,xr=Object,Ur=Object.getPrototypeOf;Sr=br(Object.getPrototypeOf)?Ur:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Sr;var Fr=Object.prototype;function Ir(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=xr(r),Tr(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Fr||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Nr(r,t){return Ir(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t))}function kr(r,t,e){var n,o,i,a;if(!hr(r))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(t))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Nr(n,e)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&br(r[Or])&&W(o,Or,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:wr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[Or](),t,n)}}var Vr="function"==typeof Uint32Array;var Pr="function"==typeof Uint32Array?Uint32Array:null;var Cr,Gr="function"==typeof Uint32Array?Uint32Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Vr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Cr,$r="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null;var Wr,Br="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr([1,3.14,-3.14,NaN]),e=t,r=($r&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr=Wr,Mr="function"==typeof Uint8Array;var Zr="function"==typeof Uint8Array?Uint8Array:null;var Xr,Yr="function"==typeof Uint8Array?Uint8Array:void 0;Xr=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,256,257]),e=t,r=(Mr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr=Xr,qr="function"==typeof Uint16Array;var Dr="function"==typeof Uint16Array?Uint16Array:null;var Jr,Kr="function"==typeof Uint16Array?Uint16Array:void 0;Jr=function(){var r,t,e;if("function"!=typeof Dr)return!1;try{t=new Dr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(qr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr,rt={uint16:Jr,uint8:zr};(Qr=new rt.uint16(1))[0]=4660;var tt=52===new rt.uint8(Qr.buffer)[0],et=!0===tt?1:0,nt=new Rr(1),ot=new Lr(nt.buffer);function it(r){return nt[0]=r,ot[et]}function at(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var ut=-.16666666666666632;function ct(r,t){var e,n,o;return e=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===t?r+n*(ut+o*e):r-(o*(.5*t-n*e)-t-n*ut)}var ft,lt,st=2147483647,pt=2146435072,yt=!0===tt?0:1,vt=new Rr(1),dt=new Lr(vt.buffer);!0===tt?(ft=1,lt=0):(ft=0,lt=1);var gt={HIGH:ft,LOW:lt},bt=new Rr(1),ht=new Lr(bt.buffer),wt=gt.HIGH,mt=gt.LOW;function jt(r,t){return ht[wt]=r,ht[mt]=t,bt[0]}var At=Math.floor,_t=Number.POSITIVE_INFINITY,Et=mr.NEGATIVE_INFINITY;function Ot(r){return r!=r}function St(r){return r===_t||r===Et}var xt,Ut;!0===tt?(xt=1,Ut=0):(xt=0,Ut=1);var Tt={HIGH:xt,LOW:Ut},Ft=new Rr(1),It=new Lr(Ft.buffer),Nt=Tt.HIGH,kt=Tt.LOW;function Vt(r,t,e,n){return Ft[0]=r,t[n]=It[Nt],t[n+e]=It[kt],t}function Pt(r){return Vt(r,[0,0],1,0)}W(Pt,"assign",Vt);var Ct=[0,0];function Gt(r,t,e,n){return Ot(r)||St(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}W((function(r){return Gt(r,[0,0],1,0)}),"assign",Gt);var Lt=[0,0],$t=[0,0];function Ht(r,t){var e,n,o,i,a,u;return 0===t||0===r||Ot(r)||St(r)?r:(Gt(r,Lt,1,0),t+=Lt[1],t+=function(r){var t=it(r);return(t=(t&pt)>>>20)-1023|0}(r=Lt[0]),t<-1074?(o=0,i=r,Pt.assign(o,Ct,1,0),a=Ct[0],a&=st,u=it(i),jt(a|=u&=2147483648,Ct[1])):t>1023?r<0?Et:_t:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Pt.assign(r,$t,1,0),e=$t[0],e&=2148532223,n*jt(e|=t+1023<<20,$t[1])))}function Wt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var Bt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Rt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Mt=16777216,Zt=5.960464477539063e-8,Xt=Wt(20),Yt=Wt(20),zt=Wt(20),qt=Wt(20);function Dt(r,t,e,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[e],g=e,y=0;g>0;y++)l=Zt*b|0,qt[y]=b-Mt*l|0,b=n[g-1]+l,g-=1;if(b=Ht(b,o),b-=8*At(.125*b),b-=d=0|b,s=0,o>0?(d+=y=qt[e-1]>>24-o,qt[e-1]-=y<<24-o,s=qt[e-1]>>23-o):0===o?s=qt[e-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<e;y++)g=qt[y],0===f?0!==g&&(f=1,qt[y]=16777216-g):qt[y]=16777215-g;if(o>0)switch(o){case 1:qt[e-1]&=8388607;break;case 2:qt[e-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Ht(1,o)))}if(0===b){for(g=0,y=e-1;y>=i;y--)g|=qt[y];if(0===g){for(v=1;0===qt[i-v];v++);for(y=e+1;y<=e+v;y++){for(c[u+y]=Bt[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return Dt(r,t,e+=v,n,o,i,a,u,c)}}if(0===b)for(e-=1,o-=24;0===qt[e];)e-=1,o-=24;else(b=Ht(b,-o))>=Mt?(l=Zt*b|0,qt[e]=b-Mt*l|0,o+=24,qt[e+=1]=l):qt[e]=0|b;for(l=Ht(1,o),y=e;y>=0;y--)n[y]=l*qt[y],l*=Zt;for(y=e;y>=0;y--){for(l=0,v=0;v<=p&&v<=e-y;v++)l+=Rt[v]*n[y+v];zt[e-y]=l}for(l=0,y=e;y>=0;y--)l+=zt[y];for(t[0]=0===s?l:-l,l=zt[0]-l,y=1;y<=e;y++)l+=zt[y];return t[1]=0===s?l:-l,7&d}function Jt(r,t,e,n){var o,i,a,u,c,f,l;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Xt[c]=f<0?0:Bt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Xt[a+(c-f)];Yt[c]=o}return 4,Dt(r,t,4,Yt,u,4,i,a,Xt)}var Kt=Math.round;function Qt(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=Kt(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(it(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(it(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var re=1.5707963267341256,te=6077100506506192e-26,ee=2*te,ne=3*te,oe=4*te,ie=[0,0,0],ae=[0,0];function ue(r,t){var e,n,o,i,a,u,c;if((o=it(r)&st|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Qt(r,o,t):o<=1073928572?r>0?(c=r-re,t[0]=c-te,t[1]=c-t[0]-te,1):(c=r+re,t[0]=c+te,t[1]=c-t[0]+te,-1):r>0?(c=r-2*re,t[0]=c-ee,t[1]=c-t[0]-ee,2):(c=r+2*re,t[0]=c+ee,t[1]=c-t[0]+ee,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Qt(r,o,t):r>0?(c=r-3*re,t[0]=c-ne,t[1]=c-t[0]-ne,3):(c=r+3*re,t[0]=c+ne,t[1]=c-t[0]+ne,-3):1075388923===o?Qt(r,o,t):r>0?(c=r-4*re,t[0]=c-oe,t[1]=c-t[0]-oe,4):(c=r+4*re,t[0]=c+oe,t[1]=c-t[0]+oe,-4);if(o<1094263291)return Qt(r,o,t);if(o>=pt)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return vt[0]=r,dt[yt]}(r),c=jt(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)ie[a]=0|c,c=16777216*(c-ie[a]);for(ie[2]=c,i=3;0===ie[i-1];)i-=1;return u=Jt(ie,ae,n,i),r<0?(t[0]=-ae[0],t[1]=-ae[1],-u):(t[0]=ae[0],t[1]=ae[1],u)}var ce=[0,0];function fe(r){var t;if(t=it(r),(t&=2147483647)<=1072243195)return t<1044381696?1:at(r,0);if(t>=2146435072)return NaN;switch(3&ue(r,ce)){case 0:return at(ce[0],ce[1]);case 1:return-ct(ce[0],ce[1]);case 2:return-at(ce[0],ce[1]);default:return ct(ce[0],ce[1])}}return function(r){return kr(r,fe)}}));
//# sourceMappingURL=index.js.map
