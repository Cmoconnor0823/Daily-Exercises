// 10/30/2020
// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
// String.prototype.repeat() is not allowed
// Examples
// repetition("ab", 3) // ➞ "ababab"
// repetition("kiwi", 1) // ➞ "kiwi"
// repetition("cherry", 2) // ➞ "cherrycherry"
// Notes
// The second parameter of the function is positive integer.

// const repetition = (str, num) => {
// 	return num ? str + repetition(str, num-1) : "";
// }

// function repetition(str, num){
// 	//place to stor final answer
// 	var data = ""
// while(num>0){
// data +=str;
// num--
// repetition(str,num);
// }
// 	// copy our string num of times
// return data

//}

//console.log(repetition("cherry", 2))

// // Write a function redundant that takes in a string str and
// // returns a function that returns str.

// const f1 = redundant("apple")
// f1() //➞ "apple"
// const f2 = redundant("pear")
// f2()// ➞ "pear"
// const f3 = redundant("")
// f3()// ➞ ""
// // Notes
// // Your function should return a function, not a string.

// function redundant(str) {

// }

// 10/28/2020

//Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.
// function parent(x) {
//   return function closure() {    // Closure is declared here.
//     return x
//   }
// }
// const remember = parent("remembers me")   // Seems like the variable x would be gone after parent is executed, but it's not.
// closure() //Returns "remembers me" because the inner  function remembers x.

// Fix the greetingMaker() function so that it works with the greeting() function.
// The greeting() function has already been created for you below, but it needs to be edited to return the expected output.
// Example
// function greetingMaker() {
// 	function closure(name) {
// 	  return salutation + ", " + name
// 	}
// }

// const greetingMaker = (salutation) => closure = (name) => `${salutation}, ${name}`

//  function greetingMaker(salutation) {
// 	return function closure(name) {
//     salutation + ", " + name
// 	}
// }
// const greeting = greetingMaker("Hello")
// console.log(greeting('sparky'))
// greeting("James"); // ➞ "Hello, James"

// 10/26/2020

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Examples
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
// Notes
// Watch out for negative integers (numbers).

// function findLargestNums(arr){
//     let nums = []
//     for(let i = 0; i < arr.length; i++){
//         let max = arr[i][0]
//         console.log(max, 'max')
//         for(let j =0; j < arr[i].length; j++){
//             let number = arr[i][j]
//             if(number >= max){
//                 max = number
//             }
//         }
//             // if(arr[i][j] > num){
//             //     console.log(arr[i][j], "hi")
//             //     return num = arr[i][j]

//             nums.push(max)
//         }
//         // arr[i].sort((a,b) => b-a)

//     return nums
// }
// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))

// function findLargestNums(arr){
//     var output =[];
//     arr.array.forEach(function(subArr)  {
//         output.push(Math.max(...subArr));

//     });

// return output
// }

// 10/23/2020

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// Examples:
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

// Notes:
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.

// If you are stuck look into resources on Array.prototype.filter(), typeof Operator, or Number.isInteger()

// function filterArray(arr){
//     let num = []
//     for(let i = 0; i< arr.length; i++){
//         if(!isNaN(arr[i])){
//             num.push(arr[i])
//         }
//     }
//     return num
// }

// function filterArray(arr){
//     let newArr = []
//         for( let num of arr){
//             if (typeof num !== "string"){
//                 newArr.push(num)
//             }

//         }
//     return newArr
// }

// const filterArray = ([...arr]) => arr.filter(item => Number.isInteger(item) && item >= 0 ? item : null)

// console.log(filterArray([1, 3,5,5, "a", "c","123", true, -43, '75', 42]))

// 10.22 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4
// Notes: Your output must be case-sensitive (see second example).
// Resources/ Hints:
// .filter()     .split()	.charAt()	    .from()		Spread Syntax	For Loop

// const charCount = (char, str) => {
//     let regX = new RegExp(char, 'g')
//     return str.match(regX).length
// }

// const charCount = (myChar, str) => (str.match(new RegExp(myChar,"g"))|| []).length;

// console.log(charCount('ea', "Please excuse my dear aunt Sally"))
// console.log(charCount("c", "Chamber of secrets"))

// const charCount = (a, b) => {
//     let number = 0
//     for(let i =0; i< b.length; i++){
//         if(a === b[i]){
//             number++
//         }
//     }
//     return number
// }

// const charCount = (arg1, arg2) =>{
//     let answer = []
//     let arr = arg2.split('')
//     let i = 0;
//     while(i < arr.length){
//         if(arr[i] == arg1){
//             answer.push(arr[i])
//         }
//         i += 1
//     }
//     return answer.length
// }

// const charCount = (myChar, str) => {
//     return (str.split("").filter( char => char === myChar)).length;
// }