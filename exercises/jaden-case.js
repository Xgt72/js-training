'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 // Your code

 let jadenCase = function (sentence) {
    sentence = sentence.split(" ");
    let word = "";
    for (let i=0; i < sentence.length; i++) {
        word = sentence[i].toLowerCase();
        word = word.split("");
        if (word[0].match(/[a-z]/i)) {
            word[0] = word[0].toUpperCase();
            sentence[i] = word.join("");
        }
    }
    return sentence.join(" ");
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")
assert.strictEqual(jadenCase("We neeD yOU !!"), "We Need You !!")
assert.strictEqual(jadenCase("WhAt aRE yOU dOiNg hERe ?"), "What Are You Doing Here ?")
// End of tests */
