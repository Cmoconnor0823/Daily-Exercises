/*
  1.
  Write a function that returns the extension of a file name.

  Hint:
  Split the string (at a certain character) into an array.
*/
function getFileExtension(str){
  let strArray = str.split('.');
  return strArray.pop()
}


// test cases
console.log(getFileExtension("index.html")) // should return "html"
console.log(getFileExtension("App.min.js")) // should return "js"



/*
  2.
  Write a function that moves all values in an array one space to the right.
  This function should not change the array that is input to it.

*/

let testArr = [1, 2, 3, 4, 5];

// write your function below here
function toTheRight(arr) {
  let copyArr = [...arr]
  let x =copyArr.pop();
  copyArr.unshift(x)
  return copyArr;

}
// write your function above here


console.log(toTheRight(testArr)) // should return [5,1,2,3,4]// the global variable
console.log(testArr)             // should return [1,2,3,4,5]