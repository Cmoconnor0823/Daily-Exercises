/*
The scariest moment is always just before you start
-Stephen King 
*/

// Write a JavaScript function to check whether a
// given value is US zip code or not. Your function should return true or false

// Remove code below before adding to the shared drive
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function zipCode(str) {
    var re = /^[0-9]{5}(?:-[0-9]{4})?$/;  //-- Solution for bonus test
    //var re = /^\d{5}$/;
    return re.test(str);
}


// Your function should pass the following tests
console.log(zipCode("55242")); // Should return true
console.log(zipCode("5522")); // Should return false
console.log(zipCode("505242")); // Should return false
console.log(zipCode("55-242")); // Should return false
// Bonus tests 
console.log(zipCode("55242-4567")); // Should return true
console.log(zipCode("552a2-4567"))  // Should return false



// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

// Remove code below before adding to the shared drive
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var sum = 0;
for (var x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
        sum += x;
    }
}
console.log(sum);



/*
JavaScript: Tips of the Day
Returns true if the given year is a leap year, false otherwise

Example:

const tips_isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
console.log(tips_isLeapYear(2015));
console.log(tips_isLeapYear(2012));
*/