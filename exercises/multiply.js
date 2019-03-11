'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(numberOne, numberTwo) {
    let result = 0;
    
    if (numberOne == 0 || numberTwo == 0) {
        return 0;
    } else if (numberOne < 0 && numberTwo > 0) {
        numberOne = Math.abs(numberOne);
        for (let i = 0; i < numberTwo; i++) {
            result += numberOne;
        }
        return -Math.abs(result);
    } else if (numberOne > 0 && numberTwo < 0) {
        numberTwo = Math.abs(numberTwo);
        for (let i = 0; i < numberOne; i++) {
            result += numberTwo;
        }
        return -Math.abs(result);
    } else if (numberOne < 0 && numberTwo < 0){
        numberOne = Math.abs(numberOne);
        numberTwo = Math.abs(numberTwo);
        for (let i = 0; i < numberTwo; i++) {
            result += numberOne;
        }
        return result;
    } else {
        for (let i = 0; i < numberOne; i++) {
            result += numberTwo;
        }
        return result;
    }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
