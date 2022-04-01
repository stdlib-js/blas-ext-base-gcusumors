// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t,a,i){var o,f,u;if(r<=0)return a;for(o=t<0?(1-r)*t:0,f=i<0?(1-r)*i:0,u=0;u<r;u++)e+=n[o],a[f]=e,o+=t,f+=i;return a},n=function(r,e,n,t,a,i,o,f){var u,d,s;if(r<=0)return i;for(u=a,d=f,s=0;s<r;s++)e+=n[u],i[d]=e,u+=t,d+=o;return i};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
