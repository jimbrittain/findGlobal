"use strict";
/* globals window, __imns */
var adr = __imns('util.tools');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('findGlobal' in adr)){
    /**
     * @function findGlobal
     * @return {Object} global object
     * finds the Global Object, either by using window or anonymous function this call;
     */
    adr.findGlobal = function(){
        if(window !== undefined){
            return window;
        } else {
            var r = (function () { return this; }());
            return r; }};
}
