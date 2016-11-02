"use strict";
var __imns = function(){ return window; }
describe("isLoaded Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/c/Namespace/Namespace.js'
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }
        setTimeout(function(){ done(); }, 1000);
    });

        var adr = __imns();
        var obj = {}, arr = [];

    it("findGlobal is a function", function(){ expect(typeof adr.findGlobal === 'function').toBe(true); });
    it("findGlobal: window === true", function(){ expect(adr.findGlobal() === window).toBe(true); });
});
