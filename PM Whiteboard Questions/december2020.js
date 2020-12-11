//12/9/20

// A word is on the loose and now has tried to hide amongst a crowd of tall letters!
// Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Examples


//const  detectWord = str => str.match(/[a-z]/g).join("");


// Resources- String.prototype.match(), Array.prototype.join(), String.prototype.includes(), Array.prototype.filter(), Spread syntax (...), String.prototype.replace(), String.prototype.toLowerCase()

// function detectWord(str){
//     let wanted = "";
//     for(let letter of str){
//         if(letter === letter.toLowerCase()){
//             wanted += letter
//         }
//     }
    
//     return wanted
// }

// console.log(detectWord("UcUNFYGaFYFYGtNUH"))// ➞ "cat"
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"))// ➞ "burglar"
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))// ➞ "embezzlement"




// 12/8/2020
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// const sumOfCubes = (arr) => arr.reduce((x, y) => Math.pow(y, 3) + x, 0)

// function sumOfCubes(a){
// let result = 0;

// a.forEach((e, i)=> result += e ** 3)

// // for(let i = 0; i < a.length; i++){
// //     result += a[i] ** 3;
// // }
// return result;
// }

// console.log(sumOfCubes([1, 5, 9])) //➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// console.log(sumOfCubes([3, 4, 5]))// ➞ 216
// console.log(sumOfCubes([2])) //➞ 8
// console.log(sumOfCubes([])) //)➞ 0
/*
Notes
If given an empty array, return 0.
Check out the documentation on Math.pow(), Array.prototype.reduce(), Array.prototype.map(),Exponentiation (**), Array.prototype.forEach()
/*
//12/7/2020
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// Examples
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30
// getAbsSum([-1]) ➞ 1

// Notes
// The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
// All the elements in the given array are integers.
// Array.prototype.reduce(), Math.abs(),  Arrow Functions


// function getAbsSum(args){
//     // return args.reduce((a, b) => Math.abs(a) + Math.abs(b),0)
//     let answer = 0;
//     for(let i = 0; i < args.length; i++){
//         let currentItem = args[i] 
//         if ( currentItem < 0 ){
//             currentItem *= -1
//         }
//         answer += currentItem
//     }
//     return answer
// }

// console.log(getAbsSum([2, -1, 4, 8, 10])) //➞ 25
// console.log(getAbsSum([-3, -4, -10, -2, -3]))  // ➞ 22
// console.log(getAbsSum([2, 4, 6, 8, 10])) // ➞ 30
// console.log(getAbsSum([-1])) // ➞ 1)
//12/4/2020
/*~The sentence always starts with "Make me".
~Try to solve this without using conditional statements like if/else or switch.
~String.prototype.replace(), 
~Template literals (Template strings) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals, 
~String.prototype.split(), 
~Working with objects- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
*/
//const

// const emotify =(arg) => arg.replace("smile", ":D").replace(/grin/i, ":)").replace(/sad/i, ":(");



// console.log(emotify("Make me smile"))// ➞ "Make me :D"
// console.log(emotify("Make me grin"))// ➞ "Make me :)"
// console.log(emotify("Make me sad"))// ➞ "Make me :("

//~~~~~12/03/2020
// Given an array of scrabble tiles, create a function that outputs the 
//maximum possible score a player can achieve by summing up the total 
//number of points for all the tiles in their hand. Each hand contains 
//7 scrabble tiles.
// Here's an example hand:
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be
// 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
// Examples

// Notes
// Here, each tile is represented as an object with two keys: tile and 
// score. Look into using Array.prototype.reduce()
                                            //accum    value, set a to 0
//const maximumScore = arr => arr.reduce((a, b) => a + b.score, '');
//                  //args           accum   value
// 1+5+10 and so on

// console.log(maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ])) //➞ 28
// console.log(maximumScore([
//   { tile: "B", score: 2 },
//   { tile: "V", score: 4 },
//   { tile: "F", score: 4 },
//   { tile: "U", score: 1 },
//   { tile: "D", score: 2 },
//   { tile: "O", score: 1 },
//   { tile: "U", score: 1 }
// ])) //➞ 15


//~~~~~12/02/20
// Create a function that returns a capitalized version of the string passed. The first letter of
// each word in the string should be capitalized while the rest of each word should be lowercase.
// Examples
// emphasise("hello world") ➞ "Hello World"
// emphasise("GOOD MORNING") ➞ "Good Morning"
// emphasise("99 red balloons!") ➞ "99 Red Balloons!"
// Notes
// You won't run into any issues when dealing with numbers in strings.
// String.prototype.split(),  String.prototype.toUpperCase(), Array.prototype.join(),
// String.prototype.toLowerCase()

// const emphasise = (str) => str.split().toUpperCase(0);
// function emphasize(str) {
//   let newStr = str.toLowerCase().split(' ').map((x) => {
//     let word = x.split('')
//     word[0] = word[0].toUpperCase()
//     return word.join('')
//   })
//   return newStr.join(' ')
// }
// function emphasize(str) {
//   return str.length === 0
//     ? ""
//     : str
//         .split(" ")
//         .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
//         .join(" ");
// }

// function emphasize(str) {
//   return str.toLowerCase().replace(/\b./g, (x) => x.toUpperCase());
// }
// console.log(emphasize("hello world"));

// const b = String.prototype.toUpperCase.call(true);

// // prints out 'ABCDEF TRUE'.
// console.log(a, b);

//12/01/20
//
//	Examples
// const whichIsLarger = (f, g) => f() > g() ? "f" : f() < g() ? "g": "neither"
// const whichIsLarger = (f, g) =>  f() > g() && "f" || f() < g() && "g" || "neither"
// function whichIsLarger(f, g){
//   if(f() > g()){
//     return "f"
//   }else if(f() < g()){
//     return "g"
//   }
//   return "neither"
// }

// console.log(whichIsLarger(() => 5, () => 10)) //➞ "g"
// console.log(whichIsLarger(() => 25,  () => 25)) //➞ "neither"
// console.log(whichIsLarger(() => 505050, () => 5050))//➞ "f"
//		Notes
//if...else, Conditional (ternary) Operator, Higher order functions in W3 schools or the Pdf of Eloquent
//JavaScript chapter 5 in Shared drive> Resources> 02-JavaScript > Books >Eloquent_JavaScript
