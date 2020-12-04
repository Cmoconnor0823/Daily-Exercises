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
const maximumScore = arr => arr.reduce((a, b) => a + b.score, '');
//                  //args           accum   value
// 1+5+10 and so on

console.log(maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
])) //➞ 28
console.log(maximumScore([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 }
])) //➞ 15


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
