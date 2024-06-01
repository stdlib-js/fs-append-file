"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=n(function(F,s){
var y=require("fs").appendFile;function v(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);y.apply(null,r)}s.exports=v
});var i=n(function(f,u){
var a=require("fs").appendFileSync;function d(r,e,l){try{arguments.length>2?a(r,e,l):a(r,e)}catch(c){return c}return null}u.exports=d
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=t(),o=i();g(p,"sync",o);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
