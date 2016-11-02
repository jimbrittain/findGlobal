/* globals window */
/* jshint strict:false */
/**
 * @function findGlobal
 * @return {Object} global object
 * finds the Global Object, either by using window or anonymous function this call;
 */
var findGlobal = function(){
    "use strict"; 
    if(window !== undefined){
        return window;
    } else {
        var r = (function () { return this; }());
        return r; }};
