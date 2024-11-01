"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=c(function(h,x){
function m(e,r,o,t,s,a){var u,n,i;if(e<=0)return s;for(t<0?u=(1-e)*t:u=0,a<0?n=(1-e)*a:n=0,i=0;i<e;i++)r+=o[u],s[n]=r,u+=t,n+=a;return s}x.exports=m
});var q=c(function(j,p){
function y(e,r,o,t,s,a,u,n){var i,v,f;if(e<=0)return a;for(i=s,v=n,f=0;f<e;f++)r+=o[i],a[v]=r,i+=t,v+=u;return a}p.exports=y
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=l(),R=q();O(g,"ndarray",R);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
