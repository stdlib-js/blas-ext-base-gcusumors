"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=g(function(E,p){
function R(e,r,o,s,u,a,c,i){var v,n,x,f,t,q,y;for(v=o.data,n=a.data,x=o.accessors[0],f=a.accessors[1],t=u,q=i,y=0;y<e;y++)r+=x(v,t),f(n,q,r),t+=s,q+=c;return a}p.exports=R
});var l=g(function(F,P){
var d=require('@stdlib/array-base-arraylike2object/dist'),h=b();function w(e,r,o,s,u,a,c,i){var v,n,x,f,t;if(e<=0)return a;if(x=d(o),f=d(a),x.accessorProtocol||f.accessorProtocol)return h(e,r,x,s,u,f,c,i),a;for(v=u,n=i,t=0;t<e;t++)r+=o[v],a[n]=r,v+=s,n+=c;return a}P.exports=w
});var m=g(function(G,k){
var j=require('@stdlib/strided-base-stride2offset/dist'),z=l();function A(e,r,o,s,u,a){var c=j(e,s),i=j(e,a);return z(e,r,o,s,c,u,a,i)}k.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=m(),C=l();B(O,"ndarray",C);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
