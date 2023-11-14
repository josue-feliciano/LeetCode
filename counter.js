/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
// so for this one they wanted me to add a digit for everytime the function gets called
// they kinda already gave the answer if you just look above 10,11,12
// i remember we went over this. so i grabbed the function (n) and they are returning the function which
// would be (n) so i return it with the function plus ++
// the n would be 10 as you see cause it says createCounter(10) the first time its called it will return 
// 10 then the second time it would be 11 and the third time would be 12..