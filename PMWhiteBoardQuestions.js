//12/01/20
// 
//	Examples
// const whichIsLarger = (f, g) => f() > g() ? "f" : f() < g() ? "g": "neither"
const whichIsLarger = (f, g) =>  f() > g() && "f" || f() < g() && "g" || "neither"
// function whichIsLarger(f, g){
//   if(f() > g()){
//     return "f"
//   }else if(f() < g()){
//     return "g"
//   }
//   return "neither"
// }

console.log(whichIsLarger(() => 5, () => 10)) //➞ "g"
console.log(whichIsLarger(() => 25,  () => 25)) //➞ "neither"
console.log(whichIsLarger(() => 505050, () => 5050))//➞ "f"
//		Notes
//if...else, Conditional (ternary) Operator, Higher order functions in W3 schools or the Pdf of Eloquent 
//JavaScript chapter 5 in Shared drive> Resources> 02-JavaScript > Books >Eloquent_JavaScript


// 11/30/20
// "Always be a first rate version of you, instead of a second rate version of somebody else." -Judy Garland

//   Create a method in the Person class which returns how another person's age compares. 
//   Given the instances p1, p2 and p3, which will be initialized with the attributes name and age, 
//   return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.

//Examples:

// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."
  //Notes: Review lessons on classes in PCC or look up Classes on developer.modzilla.org 
  //or w3 schools for more information.

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
//   }
  
//     var p1 = Person("Samuel", 24);
//     var p2 = Person("Joel", 36);
//     var p3 = Person("Lily", 24);
  
//     function compareAge(args) {
//       if (args > 24){
//         return "Joel is older than me."
//       } 
//       console.log(compareAge)
    

    
    
    
// 		// Write code here!	
// 	}

//11/25/20
// Create a function that returns true if all parameters are truthy, and false otherwise.
// Examples
//allTruthy(true, true, true) //➞ true
// allTruthy(true, [], {}) ➞ true
// allTruthy(5, 4, 3, 2, 1, 0) ➞ false
// allTruthy("Charlie, "apple", "") ➞ false
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is 
// truthy.
// You will always be supplied with at least one parameter.
// Resources/hints: Array.prototype.every(), Array.prototype.reduce()

// function allTruthy(...args){
// 	let a;
// 	for(let i = 0; i < args.length; i ++) {
// 		if(args[i]){
// 			a = true;
// 		}
// 		if(!args[i]){
// 			a = false
// 		}
// 	}

// 	return a
// }

// const allTruthy = (...args) => args.map((x) => x ? true: false)


// console.log(allTruthy(true, true, true)) //➞ true
// console.log(allTruthy(true, [], {}))// ➞ true
// console.log(allTruthy(5, 4, 3, 2, 1, 0))//➞ false
// console.log(allTruthy("Charlie", "apple", ""))// ➞ false











// var myArr = [ 2, 3, 4, 5, 6];
// // Only change code below this line
// var survey = [
// 	{ name: "Steve", answer: "Yes"},
// 	{ name: "Jessica", answer: "Yes"},
// 	{ name: "Peter", answer: "Yes"},
// 	{ name: "Elaine", answer: "No"}
//   ];
  
//   function isSameAnswer(el, index, arr) {
// 	if (index === 0){
// 	  return true;
// 	} else {
// 	  return (el.answer === arr[index - 1].answer);
// 	}
//   }
//   console.log(survey)
//11/24/20

// How many programmers does it take to change a light bulb?
// None – It’s a hardware problem

// Your task, is to create NxN multiplication table, of size provided in parameter.
// for example, when given size is 3:
// 	1 2 3
// 	2 4 6
// 	3 6 9
// multiplicationTable(3) // -> [[1,2,3],[2,4,6],[3,6,9]]

// function multiplicationTable(num){

// 	return [...Array(num+1).keys()].slice(1).map((val, idx, arr) =>{
	
// 	return arr.map(x=> x* val);
// 	})
	
	
// 	}


// 	console.log(multiplicationTable(3))




// function addTen(arr) {
// 	var newArr = []
// 	for (let i = 0; i < arr.length; i++) {
// 	newArr.push(arr[i] + 10);
// }
// return newArr
// }
//console.log(addTen([1,2,3,4,5]))
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// var john = new Person("John", "Smith");
// var jane = new Person("Jane", "Doe");
// var emily = new Person("Emily", "Jones");

// console.table([john, jane, emily], ["firstName"]);



// Write a class called Name and create the following attributes given
//a first name and last name (as fname and lname):
// An attribute called fullname which returns the first and last names.
// A attribute called initials which returns the first letters of the
// first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed
// individually as well.
// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"
// a1.lname ➞ "Smith"
// a1.fullname ➞ "John Smith"
// a1.initials ➞ "J.S"
// Notes
// Make sure only the first letter of each name is capitalized.
// Look into PCC W3 schools and developer.modzilla.org for info on Classes





//11/23/20

// You will be given an array of drinks, with each drink being an object with two properties: 
// name and price. Create a function that has the drinks array as an argument and return the 
// drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
// var drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ];

// const sortDrinkByPrice = (arr) => {arr.sort((a, b) => a.price - b.price);
// }


// console.log(sortDrinkByPrice);

// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];
  
//   // sort by value
//   items.sort(function (a, b) {
//     return  a.value - b.value;
//   });
//   console.log(items)


// The output of the sorted drinks object will be:
// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
// Resources: Array.prototype.sort(), Array.prototype.slice(),

//cons
// const sortDrinkByPrice = (arr) => {
  
//   return arr.slice().sort();
  
// return arr.sort(function(a, b) {
// return a - b;
// });


  // Add your code above this line
// }
    




// 11/20/2020
// Given an object of how many more pages each ink color can print, output the maximum 
//number of pages the printer can print before any of the colors run out.
// Examples

// const inkLevels = (obj) => Math.min(...Object.values(obj)) 
// // function inkLevels(obj){
// //   let a = Object.values(obj)
// //   return Math.min(...a)
  
// // }

// console.log(inkLevels({
// "cyan": 23,
// "magenta": 12,
// "yellow": 10
// })) //➞ 10
// console.log(inkLevels({
// "cyan": 432,
// "magenta": 543,
// "yellow": 777
// }))// ➞ 432
// console.log(inkLevels({
// "cyan": 700,
// "magenta": 700,
// "yellow": 0
// }))// ➞ 0













// 11/19/2020

// Create a function that takes an array of objects and returns the total budget for the given group.
// 	Examples

// 	Resources/Hints: Array.prototype.reduce(), Array.prototype.forEach(), Object.entries(), Array.prototype.map(), Array.prototype.flat()

// const getBudgets = (arr) =>arr.map(x => x.budget).reduce((a,b) => a+b)
 
// const getBudgets = (arr) => arr[0].budget + arr[1].budget + arr[2].budget
// let arr1 =[];
// let arr2 =[];
// let i = 0;
// function getBudgets(arr){
//   console.log(arr.length, "length")
//    while(i < arr.length){
//      arr2.push(arr[i].budget);
//      console.log(arr2);
//      i++
//    }
//    return arr2
   
// }



// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])) //➞ 65700
// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])) //➞ 62600



//11/18/20

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) // ➞ false
//largestSwap(43) // ➞ true
//     If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other 
//     hand, swapping 43 gives us 34, and 43 > 34.
// 	Examples
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true
// 	Notes
// 	Numbers with two identical digits (third example) should yield true (you can't do better).
// Math.trunc(), String.prototype.charAt(), String.prototype.split(), String.prototype.slice(), 
// Object.prototype.toString(), Array.prototype.reverse(), Number Object




// function largestSwap(arg = 23){
// newArg = arg.toString();
// newArg.split('')
// console.log(newArg)
// if(newArg[0] < newArg[1]){ 
//    return false
// }else{
//   return true
// }
// }
//const largestSwap =(num) => num >= num.toString().split("").reverse().join("");

//const largestSwap = (num) => Math.floor(num / 10) >= num % 10
//const largestSwap = (num) => num.toString().split('')[0] >= num.toString().split('')[1] ; 

// console.log(largestSwap())
// console.log(largestSwap(53))
// console.log(largestSwap(99))


// function largestSwap(num) {
//   if (num.reverse() > 27) {
//     //   console.log(num);
//     return true;
//   } else{ 
//   return false;
// }
// }
// console.log(largestSwap(53));

//11/17/20

// Write a function that returns an **anonymous function**, which transforms its input by adding a particular suffix at the end.
// 	Examples
// add_ly = add_suffix("ly")
// // add_ly("hopeless") ➞ "hopelessly"
// // add_ly("total") ➞"totally"
// add_less = add_suffix("less")
// add_less("fear") // ➞ "fearless"
// add_less("ruth") // ➞ "ruthless"

// function add_suffix(suffix) {

//     return function(word){
//         return word + suffix
//     }
// }


// console.log(add_less("fear"))
//Hints/ Resources: Look at the MDN pages for Closures, and Functions










// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice.
// If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
// Examples
// possible_bonus(3, 7) //➞ true
// possible_bonus(1, 9) //➞ false
// possible_bonus(5, 3) //➞ false
// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.
// Hints/ Resources- developer.mozilla.org Logical AND (&&), Greater than or equal (>=), Less than or equal (<=)

//const possible_bonus = (num1, num2) => (num2 - num1 <= 6) && (num2 - num1 >= 0)  ? true : false;

// function possible_bonus(num1, num2) {
//   if (num2 - num1 <= 6 && num2 - num1 >= 0) {
//     return true;
//   }
//   return false;
// }
// console.log(possible_bonus(3, 3));

// Create a function that concatenates n input arrays, where n is variable.
// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

// to enable deep level flatten use recursion with reduce and concat
// const concat = (...arr1) => arr1.concat().join();

// console.log(concat([4, 4, 4, 4, 4]));

// function concat(...args) {

// }

//   var children = hege.concat(stale);
// function concat(...args) {
// }
// Notes
// Arrays should be concatenated in order of the arguments.

//Resources: Array.prototype.flat(), arguments Object, Array.prototype.concat(), Spread Syntax, Array.prototype.reduce()

//11/12/2020

// Create a function that takes an array of numbers and returns the second largest number.

// Examples
// secondLargest([10, 40, 30, 20, 50]) ➞ 40
// secondLargest([25, 143, 89, 13, 105]) ➞ 105
// secondLargest([54, 23, 11, 17, 10]) ➞ 23

// Stuck? Look up on the MDN website- Array.prototype.filter(), Sort, reverse(), Math.max(), Array
// function secondLargest (arr) {
//   let numbers = arr.sort((a,b) => b-a);
//   return numbers[1]
// }
// console.log(secondLargest([54, 23, 11, 17, 10]))

// 11/10/2020

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// Notes
// You can expect only positive integers for vote counts.
// function getVoteCount(vote){
//   let up = vote.upvotes;
//   let down = vote['downvotes'];
//   return up - down;
// }
//  let test = { upvotes: 132, downvotes: 132 }
// const getVC = vote => vote.upvotes - vote.downvotes;

// const gettingVotes = {
//   "upvotes": [13, 2, 132],
//   "downvotes": [0, 33, 132]
// }

// function billyJim(obj){
// var up = obj.upvotes;
// var down = obj.downvotes;
// var votes = [];
// for(let i = 0; i < 4; i++){

// votes.push(up[i] - down[i]);

// }
// return votes
// }

// console.log(billyJim(gettingVotes));

// function getVoteCount(vote){
//     let before = Object.values(vote)
//     let votes = before[0] - before[1]
//     return votes
// }

// console.log(getVC({ upvotes: 13, downvotes: 0 }),"Should return 13")
// console.log(getVC({ upvotes: 2, downvotes: 33 }), "Should return -31")
// console.log(getVC({ upvotes: 132, downvotes: 132 }), "Should return 0")

//11/7/2020
//  You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54").
//= Create a function that takes the video length and return it in seconds.
// Examples
// minutesToSeconds("01:00") // ➞ 60
// minutesToSeconds("13:56")// ➞ 836
// minutesToSeconds("10:60")// ➞ false
// Notes
// The video length is given as a string.
// If the number of seconds is 60 or over, return false (see example #3).
// You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).

//Resources/Hints:

//String.prototype.split(), Array.prototype.reduce()

// function minutesToSeconds(time){
//     let [m,s] = time.split(':').map(Number)
//     console.log(m, s, "hi")
//     if(s>=60) return false
//     return m*60+s
// }

//var time = [];

// function minToSec(time) {
//     let [m,s] = time.split(':').map(Number)
// //   let minutes = time.split(":").map(Number);
// //   let seconds = time.split(":")[1].map(Number);
//   console.log(time,"hi")
//   for (let i = 0; i < time.length; i++) {
//     let result = (m * 60) + s;
//  console.log(typeof result);
//  return result
//   }

// }

// console.log(minToSec("13:56"), "hi");

// function minutesToSeconds(time){
//     let newArr = []
//     newArr = time.split(':')
//     let first = eval(newArr[0] * 60)
//     let second = eval(newArr[1])
//     if(newArr[1] >= 60){
//         return false
//     }
//     return first + second
// }

// function minutesToSeconds(time) {
//     const chars = time.split("");
//     for (let i = 0; i < chars.length; i++) {
//         if (chars.length == 1) {
//             let seconds = chars[0];
//             return seconds
//         } else if (chars.length == 2) {
//             let seconds = parseInt(chars[0]) + parseInt(chars[1]);
//             return seconds
//         }else if(chars.length == 4){
//             let seconds = parseInt(chars[0])*60 + parseInt(chars[2])*10 + parseInt(chars[3]);
//             return seconds
//         }else if(chars.length == 5){
//         let seconds = parseInt(chars[0])*600 + parseInt(chars[1])*60 + parseInt(chars[3]*10 + parseInt(chars[4]));
//         return seconds
//         }
//     }

// }

// console.log(minutesToSeconds("59"));

//  11/5/2020

// Write a function that converts an object into an array of keys and values.
// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }); // ➞ [["D", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }); // ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

//Stuck? Check out resources for the statements/ methods below
//Object.entries(), for...in, Array.prototype.map(), Object​.keys(), Array.from(), Array​.prototype​.push().

// const objectToArray = (obj) => Object.entries(obj);

// const objectToArray = (obj) => {
//   let result = []
//   for(let key in obj) {
//     result.push([key, obj[key]])
//   }
//   return result
// }

// console.log(objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }))

// const objectToArray = (obj) => Object.entries(obj);

// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

/// start with my function taking in an array
// create a place holder array for final result
// First I need to convert my array to a string
// Or have a way to iterate through each item and compare at the item

//from there I still need the regex to grab the word to compare

// then at each word I have held I will compare it to the rest of the string

// if there is a match, replace the word with nothing
// if no match leave in the string

// then return out each word left in the array

// \b - matches word boundary
// \S - matches character that is not white space(tabs, line breaks,etc)
// \b, match word boundry including the trailing comma
// ?= - used for positive lookahead
// ig - flags for in-casesensitive,global search respectively
// +,* - quantifiers. + -> 1 or more, * -> 0 or more
// () - define a group
// \1 - back-reference to the results of the previous group

// function removeDups(arr){
//   arrStr = arr.toString()
//   // replace is first using the regex string to check for what to replace,
//   // the empty string as the second parameter is what to replace the word with
//   var solved = arrStr.replace(/(\b\S+\b,)(?=.*\1)/ig, "")
//   return solved.split(",") ;
//   //newArr.map(i => i.replace(/(\b\S+\b)(?=.*\1)/ig))
// }

//  console.log(removeDups(["John", "Taylor", "John", 'ford', 'ford', 'arthur']))

//function removeDups
//let newArr = []
//for loop
//if i = newArr
//push i into newArr
//return newArr

// function removeDups(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) == -1){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr

// }

// create a function that loops thru the arr using a for loop
// use includes to see if [i] is already in the arr
// then [i] push to newArr

// function removeDups(arr){
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     if(!newArr.includes(arr[i])){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// create an arrow func to create an array from args pass, removing any dups
// const removeDups = (...arr) => Array.from(new Set(...arr))

// console.log(removeDups([1, 0, 1, 0]))

// 11/2/2020

// Create a function that takes two numbers and a mathematical operator +  -  /  * and will perform a calculation with the given numbers.
// Examples
// calculator(2, "+", 2) ➞ 4
// calculator(2, "*", 2) ➞ 4
// calculator(4, "/", 2) ➞ 2
// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"

// function calculator(a, b, c) {
// 	if(b == "+") {
// 		return a + c
// 	} else if(b == "*") {
// 		return a * c
// 	} else if(c == 0) {
// 		return "Can't divide by 0!"
// 	} else {
// 		return a / c
// 	}
// }

// function calculator(a, b, c) {
//   switch (b) {
//     case "+":
//       return a + c;
//       break;
//     case "-":
//       return a - c;
//       break;
//     case "*":
//       return a * c;
//       break;
//     case "/":
//       if (c === 0) return "Can't divide by 0!";
//       return a / c;
//       break;
//   }
//   return null;
// }

// // const calculator = (a, b, c) =>
// //   b == "/" && c == 0 ? "can't dived by 0" : eval(a + b + c);

// console.log(calculator(2, "+", 2));
// console.log(calculator(2, "*", 42));
// console.log(calculator(2, "/", 0));

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
