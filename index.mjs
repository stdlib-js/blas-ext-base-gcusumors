// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s,d,i,o){var a,f,m;if(r<=0)return d;for(a=s,f=o,m=0;m<r;m++)e+=t[a],d[f]=e,a+=n,f+=i;return d}function n(r,n,s,d,i,o){return t(r,n,s,d,e(r,d),i,o,e(r,o))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
