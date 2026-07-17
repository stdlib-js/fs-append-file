"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var a=s(function(F,t){
var y=require("fs").appendFile;function v(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);y.apply(null,r)}t.exports=v
});var p=s(function(f,i){
var u=require("fs").appendFileSync;function d(r,e,n){try{arguments.length>2?u(r,e,n):u(r,e)}catch(c){return c}return null}i.exports=d
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=a(),o=p();g(l,"sync",o);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
