'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(firstStr) {
    let word = firstStr.split("");
    for (let i=0; i < 2; i++) {
        word.shift();
    }
    return word.join("");
}

function cutLast(lastStr) {
    let word = lastStr.split("");
    for (let i=0; i < 2; i++) {
        word.pop();
    }
    return word.join("");
}

function cutFirstLast(word) {
    word = cutFirst(word);
    word = cutLast(word);
    return word;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function', 'Should be a function')
assert.strictEqual(cutFirst.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutFirst('abcdef'), 'cdef')
assert.strictEqual(typeof cutLast, 'function', 'Should be a function')
assert.strictEqual(cutLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutLast('abcdef'), 'abcd')
assert.strictEqual(typeof cutFirstLast, 'function', 'Should be a function')
assert.strictEqual(cutFirstLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutFirstLast('abcdef'), 'cd')
assert.strictEqual(cutFirstLast('Xavier'), 'vi')
assert.strictEqual(cutFirstLast('Honda-Civic'), 'nda-Civ')
// End of tests */
//assert.fail('You must write your own tests')
// End of tests */
