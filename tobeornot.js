/**
 * @param {string} v
 * @return {Object}
 */
var expect = function(v) {
    return {
        toBe: (val) => {
            if(v === val) return true;
            else throw new Error("Not Equal");
        },
        notToBe: (val) => {
            if(v !== val) return true;
            else throw new Error("Equal");
        }
    }

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

//for this one they want me to to compare values and return true if both values are equal
// the parameter named v = val and i ihad to define the first method which is
// toBe that takes one argument and checks if it is equal to another value. 
// and the second method would be notTobe and this one checks if its NOT equal too.
// 
// 