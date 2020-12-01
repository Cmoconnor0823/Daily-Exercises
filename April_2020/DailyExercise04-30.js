/*
Good day Developer, 
Let's review some slightly more advanced JavaScript. 
*/


/*
	1. Create a function that takes a parameter, an array of numbers. Using the map method,
	return a new array that contains every value from the input array with 10 added to each.
	The input array should not change!
*/ 

// ############################### for loop #################################

function addTen(arr) {
	var newArr = []
	for (let i = 0; i < arr.length; i++) {
	newArr.push(arr[i] + 10);
}
return newArr
}
// ###########################################################################


// ############################## using map  #################################

function addTen(arr) {
const newArr = arr.map(x => x + 10)
  return newArr
}
// ############################################################################

// 1. Test Cases
addTen([1,2,3,4,5]) // returns [11,12,13,14,15]
addTen([45,13,0,-20,1]) // returns [55,23,10,-10,11]


/*
	2. Create a function that takes a parameter, an array of numbers. Using the filter method,
	return a new array that contains every even number from the input array.
	The input array should not change!
*/ 


// ######################### using a for loop ##############
 function getEvens(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            answer.push(arr[i])
        }
    }
    return answer
}
// ############################################################


// ######################### using filter #####################
function getEvens(arr){
const answer = arr.filter(x => x % 2 == 0)
return answer
}
// #############################################################



getEvens([1,2,3,4,5]) // returns [2,4]
getEvens([45,13,0,-20,1]) // returns [0,-20]


/*
	3. Create a JavaScript object named car. Give it the following key value pairs.
	The car should have:
	a name that is a string,
	4 wheels,
	a boolean called isFast,
	a method called "drive"
*/ 


// #################### my car object #######################

let car  = {
    name: "Ford",
    wheels: 4,
    isFast: true,
    drive: () => "road"
    
}

console.log(car.drive())

//  ############################################################

