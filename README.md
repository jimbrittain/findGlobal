# Javascript findGlobal function
findGlobal attempts to find the global object, assuming `window` fulfills this context in general, else by creating an anonymous function and finding the route.
## Usage
```
    findGlobal() === window
```

## Methodology

```
    if(window !== undefined){
        return window;
    } else {
        var r = (function () { return this; }());
        return r; }
```

## Issues

* Need to ensure works with ECMAScript 2015, 2016 scoping changes
* Add an attribution as the anonymous function, I vaguely remember reading about in one of O'Reily's JS best practice books. Find source.
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
