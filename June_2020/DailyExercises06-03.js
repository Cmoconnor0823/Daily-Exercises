/*
Write a function that counts how many times every letter appears in a string.
Your result should be a 2 dimensional array similar to the example below.
[['a',2],['b',3]...['z',3]]
If a letter does not appear at all, still include that letter with a quantity of zero.
Remember to account for case sensitivity.

This one might make your head hurt a little, but I promise it is good for you. Give it your best shot.
*/
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function letterCount(str) {
    for(let i = 0; i < str.length, i++)

}


console.log(letterCount("bob")) // returns [['a',0],['b',2],...['o',1],...['z',0]]
console.log(letterCount("abcdefghijklmnopqrstuvwxyz")) // returns [['a',1],['b',1],...['z',1]]
console.log(letterCount("She sells sea shells by the sea shore"))