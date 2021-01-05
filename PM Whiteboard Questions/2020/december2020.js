//01/04/2021

//Rozakis

function convertToDecimal(numbers){

let convertednumbersArray = [];

    for(let i = 0; i < numbers.length; i++){
        convertednumbersArray.push(parseFloat(numbers[i]) / 100)
    }
    return convertednumbersArray
}

// Examples
console.log(convertToDecimal(["1%", "2%", "3%"]))// ➞ [0.01, 0.02, 0.03]
console.log(convertToDecimal(["45%", "32%", "97%", "33%"]))// ➞ [0.45, 0.32, 0.97, 0.33]
console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))// ➞➞ [0.33, 0.981, 0.5644, 1]

// Hints
// parseFloat(), Array.prototype.map(), String.prototype.substring(), String.prototype.slice() 

//12/31/2020
// const addUp=(num) => (num * (num + 1))/2;

// console.log(addUp(4))// ➞ 10

// const addUp = (num) =>{
//     let i = 1
//     let sum = 0
//     while(i <= num){
//         sum+= i
//         i++
//     }
//     return sum
// }

// function addUp(num) {
//     if (num === 1) return 1;
//     return num + addUp(num - 1);
//   }

//Rozakis

// function addUp(num){
//     let newNum = 0
//     for (let i = 0; i <= num; i++){
//         newNum += i;
//     }
//     return newNum
// };

// Examples
// console.log(addUp(13))// ➞ 91
// console.log(addUp(600))// ➞ 180300

//12/30/2020

// function replaceVowel(word){
//     return word.replace(/[aeiou]/g, v=> "aeiou".indexOf(v)+1)
// }

// const replaceVowel = (str) => str.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5')


//Rozakis
// function replaceVowel(str){
//     let strArr = str.split("")
//     for(i = 0; i < strArr.length; i++){
//             if(strArr[i] === "a"){
//                 strArr[i] = "1";
//             }else if(strArr[i] === "e"){
//                 strArr[i] = "2";
//             }else if(strArr[i] === "i"){
//                 strArr[i] = "3";
//             }else if(strArr[i] === "o"){
//                 strArr[i] = "4";
//             }else if(strArr[i] === "u"){
//                 strArr[i] = "5";
//             }
//         };
//         return strArr.join('');
//     };
    

    // function replaceVowel(word){
    //     let arr = word.split('');
    //     let vowels = ["a", "e", "i", "o" ,"u"];
    //     let result = [];
        
    //     for(i=0; i<arr.length; i++) {
    //         if(vowels.indexOf(arr[i]) != -1) {
    //             result.push(vowels.indexOf(arr[i]) + 1)
    //         } else {
    //             result.push(arr[i])
    //         }
    //     }
        
    //     return result.join('')
    // }





    
    // Examples
    // console.log(replaceVowel("karachi"))// ➞ "k1r1ch3"
    // console.log(replaceVowel("chembur"))// ➞ "ch2mb5r"
    // console.log(replaceVowel("khandbari"))// ➞ "kh1ndb1r3"


// A group of friends have decided to start a secret society. 
// The name will be the first letter of each of their names,
//  sorted in alphabetical order.
// Create a function that takes in an array of names and 
// returns the name of the secret society.
// Examples

// const societyName = (arr) => arr.map(curVal => curVal[0].toUpperCase()).sort().join('');

// function societyName(arr){
//  let secretSoc = [];
//  for(let i = 0; i < arr.length; i++){
//     secretSoc.push(arr[i][0])
//     secretSoc.sort()
//     //console.log(secretSoc)
//  }
//  return secretSoc.join('')
// }







// const lg = console.log;
// function societyName(arr){
// var first = arr.map((name) =>name[0]).sort().join("").toUpperCase();
// return first

// }

// lg(societyName(["Adam", "sarah", "Malcolm"]))// ➞ "AMS"
// lg(societyName(["Harry", "Newt", "Luna", "Cho"]))// ➞ "CHLN"
// lg(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]))// ➞ "CJMPRR"

// Notes
// The secret society's name should be entirely uppercased.

// Hints
// Array.prototype.sort(), Array.prototype.join(), Array.prototype.map(),//12/28/2020
//=============================================================================================================================


// // Create a function that returns true if a string is empty and false otherwise.
// const isEmpty = str => str.length > 0 ? false : true;


//  console.log(isEmpty(""))// ➞ true
//  console.log(isEmpty(" "))// ➞ false
//  console.log(isEmpty("a"))// ➞ false
// ===========================================================================================================
// Notes
// A string containing only white spaces " " does not count as empty.
// Don't forget to return the result.
// Hints: MDN-String Length, Logical NOT (!), W3-Comparison and Logical Operators,
//  String Length Property, Arrow Functions (edited) 

// 12-24-2020
// const gifts = [
//   "partridge in a pear tree",
//   "turtle doves",
//   "french hens",
//   "calling birds",
//   "GOLDEN RINGS",
//   "geese-a-laying",
//   "swans-a-swimming",
//   "maids-a-milking",
//   "ladies dancing",
//   "lords-a-leaping",
//   "pipers piping",
//   "drummers drumming",
// ];
// const ordinals = [
//   "first",
//   "second",
//   "third",
//   "fourth",
//   "fifth",
//   "sixth",
//   "seventh",
//   "eighth",
//   "ninth",
//   "tenth",
//   "eleventh",
//   "twelfth",
// ];
// const numbersToWords = [
//   "One",
//   "Two",
//   "Three",
//   "Four",
//   "FIVE",
//   "Six",
//   "Seven",
//   "Eight",
//   "Nine",
//   "Ten",
//   "Eleven",
//   "Twelve",
// ];

// function twelveDays() {
//   for (var i = 0; i < gifts.length+1; i++) {
//     console.log(
//       `On the ${ordinals[i-1]} day of Christmas,\nMy true love gave to me,`
//     );
//     if (i < 0) {
//       console.log(`a ${gifts[0]}. \n`);
//     } else {
//       giftForDays(i);
//     }
//   }
// }
// function giftForDays(day) {
//   if (day == 0) {
//     console.log(`And a ${gifts}.\n`);
//   } else {
//     console.log(`${numbersToWords[day-1]} ${gifts[day-1]},`);
//     giftForDays(day - 1);
//   }
// }
// twelveDays();
// const lyrics = [" 1 Partridge in a Pear Tree", ' and 1 Partridge in a Pear Tree', " 2 Turtle Doves", ' 3 French Hens', ' 4 Calling Birds', ' 5 Golden Rings', ' 6 Geese a Laying', ' 7 Swans a Swimming', ' 8 Maids a Milking', ' 9 Ladies Dancing', ' 10 Lords a Leaping', ' 11 Pipers Piping', ' 12 Drummers Drumming']
// const days = [' first', ' second', ' third', ' fourth', ' fifth', ' sixth', ' seventh', ' eight', ' ninth', ' tenth', ' eleventh', ' twelfth']
// const song1 = 'On the'
// const song2 =  ' day of Cristmas My true love sent to me:'
// function twelveDays(num) {
//     switch (num) {
//         case 1:
//             return song1 + days[0] + song2 + lyrics[0]
//         case 2:
//             return song1 + days[1] + song2 + lyrics[2] + lyrics[1]
//         case 3:
//             return song1 + days[2] + song2 + lyrics[3] + lyrics[2] + lyrics[1]
//         case 4:
//             return song1 + days[3] + song2 + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 5:
//             return song1 + days[4] + song2 + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 6:
//             return song1 + days[5] + song2 + lyrics[6] + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 7:
//             return song1 + days[6] + song2 + lyrics[7] + lyrics[6] + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 8:
//             return song1 + days[7] + song2 + lyrics[8] + lyrics[7] + lyrics[6] + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 9:
//             return song1 + days[8] + song2 + lyrics[9] + lyrics[8] + lyrics[7] + lyrics[6] + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 10:
//             return song1 + days[9] + song2 + lyrics[10] + lyrics[9] + lyrics[8] + lyrics[7] + lyrics[6] + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 11:
//             return song1 + days[10] + song2 + lyrics[11] + lyrics[10] + lyrics[9] + lyrics[8] + lyrics[7] + lyrics[6] + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//         case 12:
//             return song1 + days[11] + song2 + lyrics[12] + lyrics[11] + lyrics[10] + lyrics[9] + lyrics[8] + lyrics[7] + lyrics[6] + lyrics[5] + lyrics[4] + lyrics[3] + lyrics[2] + lyrics[1]
//     }
// }
// console.log(twelveDays(1))
// console.log(twelveDays(2))
// console.log(twelveDays(3))
// console.log(twelveDays(4))
// console.log(twelveDays(5))
// console.log(twelveDays(6))
// console.log(twelveDays(7))
// console.log(twelveDays(8))
// console.log(twelveDays(9))
// console.log(twelveDays(10))
// console.log(twelveDays(11))
// console.log(twelveDays(12))

// "The Twelve Days of Christmas" is an English Christmas
// carol that enumerates in the manner of a cumulative song a series
// of increasingly grand gifts given on each of the twelve days of Christmas.
// This year rather than keeping track of the gifts in a song, Create a function that
// will take in a day 1-12 and will then print out the lyrics of
// The Twelve Days of Christmas up till that day.
// Feel free to use the variables at the end of the instructions to get you started,
// and a copy of the song lyrics are located in Daily Exercise> PmDailyExercise.

// Example output:

// twelveDays(1) -->
// On the first day of Christmas
// my true love sent to me:
// 1 Partridge in a Pear Tree

// twelveDays(12) -->
// On the first day of Christmas
// my true love sent to me:
// 1 Partridge in a Pear Tree
// On the second day of Christmas
// my true love sent to me:
// 2 Turtle Doves
// and 1 Partridge in a Pear Tree
// ...
// (days 3 - 11)
// ...
// On the twelfth day of Christmas
// my true love sent to me:
// 12 Drummers Drumming
// 11 Pipers Piping
// 10 Lords a Leaping
// 9 Ladies Dancing
// 8 Maids a Milking
// 7 Swans a Swimming
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and 1 Partridge in a Pear Tree

// Resources:
// const gifts = ['partridge in a pear tree', 'turtle doves', 'french hens', 'calling birds', 'GOLDEN RINGS', 'geese-a-laying',
//  'swans-a-swimming', 'maids-a-milking', 'ladies dancing', 'lords-a-leaping', 'pipers piping', 'drummers drumming'];
// const ordinals = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth'];
// const numbersToWords = ['One','Two','Three','Four','FIVE','Six','Seven','Eight','Nine','Ten','Eleven','Twelve'];

// 12/23/2020
// Write a function that takes in a date object and returns true if that date
// is christmas eve and false otherwise

//const timeForMilkAndCookies = (arg) => arg.getDate() === 24 && arg.getMonth() === 11

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24))) //➞ true
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23))) //➞ false
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24))) //➞ true

// 12/22/2020

// Given a number n, write a function that returns PI to n decimal places.

// Examples
// myPi(5) ➞ 3.14159
// myPi(4) ➞ 3.1416
// myPi(15) ➞ 3.141592653589793
// 	Notes
// n will not be above 15, to keep this challenge simple.
// Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
// The return value must be a number, not a string.
// 	Hints- Number.prototype.toFixed(), Math.PI, Number.parseFloat(),Number

// function myPi(n){
//   return Math.PI.toFixed(n)
// }

// console.log(myPi(5))
// console.log(myPi(4))
// console.log(myPi(15))

//12/21/2020
// Create a function that takes an array of numbers and returns the second largest number.
// Examples

// function secondLargest(nums) {
//   let sorted = nums.sort((a, b) => a - b);

//   let secondLargestNum = sorted[sorted.length - 2]

//   for (let i = 0; i < sorted.length; i++){
//     if(secondLargestNum === sorted[sorted.length - (1+i)]){
//       secondLargestNum = sorted[sorted.length - (3+i)]
//     }else {
//       return secondLargestNum
//     }
//   }
// };

// console.log(secondLargest([10, 40, 30, 20, 50]))// ➞ 40
// console.log(secondLargest([1, 2, 3, 143, 105]))// ➞ 105
// console.log(secondLargest([54, 23, 11, 17, 10]))// ➞ 23

// Notes/ Hints:
// Sort, Array.prototype.filter(),reverse(),Math.max(),Array

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
// Examples
// function isSymmetrical(numbers) {
//   let arr = numbers.toString().split('')
//   if(arr.join('') === arr.reverse().join('')){
//       return true
//   }
//   return false;
// }

// const isSymmetrical = (num) => num == num.toString().split('').reverse().join('') ? true : false

// function isSymmetrical(num) {
//   let reversed = parseInt([num].join("").split('').reverse().join(''))
//   if(num === reversed) {
//     return true
//   }return false
// }

// function isSymmetrical(num){
//   let str = num.toString()
//   for(let i = 0; i < str.length/2; i++){
//     if (str[i] != str[str.length - (i+1)]){
//       return false
//     }
//   }
//   return true
// }

// console.log(isSymmetrical(7227)); // ➞ true
// console.log(isSymmetrical(12567)); // ➞ false
// console.log(isSymmetrical(44444444)); //➞ true
// console.log(isSymmetrical(9939)); // ➞ false
// console.log(isSymmetrical(1112111)); //➞ true
// 	Notes
// Array.prototype.reverse(),Array.prototype.join(),String.prototype.split()

// const doubleChar = (str) => str.split('').map((a,b) => b = a.repeat(2)).join('');
// const doubleChar = (str) => str.split('').map((a) => a+a).join('');

// function doubleChar(data){
//   let result = []
//   data.split('').forEach(e => result.push(e+e))
//   return result.join('')
// }
// function doubleChar(data){
// let result = []
// for(let i =0; i < data.length; i++) {
//   result += data[i] + data[i]
// }
// return result

// }

// function doubleChar(data){
//   let result = []
//   for(let i =0; i < data.length; i++) {
//     result.push(data[i] + data[i])
//   }
//   return result.join("");

//   }

// console.log(doubleChar("String")) // ➞ "SSttrriinngg"
// console.log(doubleChar("Hello World!")) // ➞ "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ ")) // ➞ "11223344!!__  "

// Good Afternoon! Don't forget your masks!
// I believe that if one always looked at the skies, one would end up with wings. --Gustave Flaubert

// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "

// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

// Hints
// Array.prototype.join(), Array.prototype.map(), String.prototype.split(), String.prototype.repeat(), Array.prototype.push(), String.prototype.replace(), Array.prototype.forEach(), Template literals (Template stri

// Integer in Range

// Create a function that validates whether a number n is with the bounds
// of lower and upper.Return false if n is not an integer.

// Examples

// function intWithinBounds(num, low, high) {
// if(num > low && num < high && Number.isInteger(num)) {
//   return true;
// }
// return false
// }

// const intWithinBounds = (n, lowBound, highBound) =>
//   lowBound < n && highBound > n && n % 1 ==0 ? true : false

// console.log(intWithinBounds(3, 1, 9)) // -> true
// console.log(intWithinBounds(6, 1, 6))// -> false
// console.log(intWithinBounds(4.5, 3, 8)) // -> false
// console.log(intWithinBounds(5, 3, 8)) // -> false

//#Hint - W3 > JavaScript > JS Number

// The Travelling Salesman

// A salesman has a number of cities to visit.They want to calculate the total number of
// possible paths they could take, visiting each city once before returning
// home. Return the total number of possible paths a salesman can travel,
// given n cities.

//If we have cities A, B and C, possible paths would be:
// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B
// ... which gives us 6 as the possible number of paths.

// function paths(num) {
//     let x = num - 1;
//     let originalPlaceholder = num;
//     while (x > 1) {
//       num *= x;
//       x--;
//     }
//     return num + " is the factorial of " + originalPlaceholder + ".";
//   }

// function paths(num) {
//   let originalPlaceholder = num;
// for(let x = num - 1; x > 1; x--){
//    num *= x
// }
//   return num + " is the factorial of " + originalPlaceholder + ".";
// }

// function paths(n){
//   if(n == 0 || n == 1) {
//     return 1;
//   } else {
//     n * paths(n-1);
//   }
// }

// console.log(paths(4)); // -> 24
// console.log(paths(1)); // -> 1
// console.log(paths(9)); // -> 362880

//#Hint - factorials

/*
Write a function to retrieve all the values of an object's properties
*/
//let card = {name:"Pikachu",hp:75,attacks:["shock", "thunder bolt"]}

//const getValues = (obj) => Object.values(obj).toString().split(',').join(', ')

// function getValues(obj){
//   let arr = Object.values(obj)
//   let result = ""
//   let keyCount = 0;

//   for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === "string" || typeof arr[i] === "number" ){
//       result += arr[i] + ', '
//       keyCount++
//     } else if ( Array.isArray(arr[i]) ){
//       for(let j = 0; j < arr[i].length; j++){
//         result += arr[i][j] + ', '
//         keyCount++
//       }
//     }
//   }

//   return result.split(",", keyCount).join()
// }

// console.log(getValues(card));// -> Pikachu, 75, shock, thunder bolt

// Write a function that takes a string and calculates the number of letters
//  and digits within it. Return the result as an object.
// Examples

// const countAll = (str) => ({
//   LETTERS: (str.match(/[a-z]/gi) || []).length,
//   DIGITS: (str.match(/\d/g) || []).length,
// })

// var answer = {

// }

// let number = 0;
// let letter = 0;
// let a = 0;
// let b = 0;
// function countAll(str){
// number = str.match(/[0-9]/g);
// letter = str.match(/[a-z]/ig);

// if(letter){
//   b = letter.length;
// }else{
//   b = 0;
// }
// answer["LETTERS"] = b;

// if(number){
//   a = number.length;
// }else{
//   a = 0;
// }
// answer["NUMBER"] = a
// return answer
// }

// function countAll (str) {
//   // var obj = Object.createString(digit,string)
//   const digit = /[0-9]/g;
//   const string = /[a-z]/gi;
//   const answer = (str.match(digit)  || []).length
//   const result = (str.match(string) || []).length
//   return {"LETTER": answer,  "DIGITS": result}
// }

// console.log(countAll("Hello World")) //➞ { "LETTERS":  10, "DIGITS": 0 }
// console.log(countAll("H3ll0 Wor1d")) //➞ { "LETTERS":  7, "DIGITS": 3 }
// console.log(countAll("149990")) //➞ { "LETTERS": 0, "DIGITS": 6 }
//Notes
// Tests contain only alphanumeric characters.
// Spaces are not letters.
// All tests contain valid strings.
// Hints:
// String.prototype.match(), string.length, String.prototype.charCodeAt()

//Create a function that determines whether a shopping order is eligible for free shipping.
// An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

//Examples
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) //➞ false

// freeShipping({ "Flatscreen TV": 399.99 })/// ➞ true/

// freeShipping({ "Monopoly": 11.99, "soad-pop": 2.99, "tide": 11.50})// false
// function freeShipping(obj){
//   // collect all values
//   // add values
//   //check total if exceeds $50
//   // return true or false
// }

//12/10/2020

// Given an array and an integer n, return the sum of the first n numbers in the array.
// Example
//sliceSum([9, 8, 7, 6], 3)// ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.

//Examples

//const sliceSum = (arr, num) => arr.slice(0, num).reduce((x,y) => y + x,0);

// function sliceSum(a, b){
//     let sum = 0;
//     let c = a.slice(0, b)
//     console.log(c)
//     for(let i = 0; i < c.length; i++){
//         sum += a[i];
//     }
//     return sum;
// }

// console.log(sliceSum([1, 3, 2], 2))// ➞ 4
// console.log(sliceSum([4, 2, 5, 7], 4))// ➞ 18
// console.log(sliceSum([3, 6, 2], 0))// ➞ 0

// Notes
// If n is larger than the length of the array, return the sum of the whole array.
// Hints:
// Array.prototype.reduce(), Array.prototype.slice(),Array.prototype.length

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
