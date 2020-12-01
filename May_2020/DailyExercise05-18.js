/*
	1. 
	Write a JavaScript function to create a specified number of elements and pre-filled string value array.
*/
var strVals = "here is an array of strings";

function createStuff(num, str) {

}
// test cases
console.log(array_filled(3, 'default value')); // ["default value", "default value", "default value"]
console.log(array_filled(4, 'password')); //["password", "password", "password", "password"]


/*
	2.
	Write a JavaScript function to move an array element from one position to another.
*/


function move(arr, startIdx, endIdx) {

	
}

// test cases
console.log(move([10, 20, 30, 40, 50], 0, 2));//[20, 30, 10, 40, 50]

//extra credit, solve for negitive number like it is shown below.
console.log(move([10, 20, 30, 40, 50], -1, -2));//[10, 20, 30, 50, 40]