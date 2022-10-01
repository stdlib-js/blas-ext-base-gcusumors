// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t,a,i){var o,d,f;if(r<=0)return a;for(o=t<0?(1-r)*t:0,d=i<0?(1-r)*i:0,f=0;f<r;f++)n+=e[o],a[d]=n,o+=t,d+=i;return a}function e(r,n,e,t,a,i,o,d){var f,s,u;if(r<=0)return i;for(f=a,s=d,u=0;u<r;u++)n+=e[f],i[s]=n,f+=t,s+=o;return i}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
