// Create a function to convert an array of percentages to their decimal equivalents.

// const convertToDecimal = (arr) => arr.map(i=> Number.parseFloat(i) * .01)


const convertToDecimal = (arr) => arr.map(i=> parseFloat(i) / 100)
// function convertToDecimal(numbers){

//     let convertednumbersArray = [];
    
//         for(let i = 0; i < numbers.length; i++){
//             convertednumbersArray.push(parseFloat(numbers[i]) / 100)
//         }
//         return convertednumbersArray
//     }

// Examples
console.log(convertToDecimal(["1%", "2%", "3%"]))// ➞ [0.01, 0.02, 0.03]
console.log(convertToDecimal(["45%", "32%", "97%", "33%"]))// ➞ [0.45, 0.32, 0.97, 0.33]
console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))// ➞➞ [0.33, 0.981, 0.5644, 1]

// Hints
// parseFloat(), Array.prototype.map(), String.prototype.substring(), String.prototype.slice() 

