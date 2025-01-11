"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=q(function(j,x){
function m(e,r,t,u,i,a,s,n){var o,v,c;if(e<=0)return a;for(o=i,v=n,c=0;c<e;c++)r+=t[o],a[v]=r,o+=u,v+=s;return a}x.exports=m
});var p=q(function(k,d){
var y=require('@stdlib/strided-base-stride2offset/dist'),l=f();function O(e,r,t,u,i,a){var s=y(e,u),n=y(e,a);return l(e,r,t,u,s,i,a,n)}d.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),b=f();R(g,"ndarray",b);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
