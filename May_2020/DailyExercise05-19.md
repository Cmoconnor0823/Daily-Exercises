# Add up the Numbers from a Single Number


Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

````
Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
````


# Is it Time for Milk and Cookies?


Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

````


Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
````

The getDate() method returns the day of the month for the specified date according to local time.

The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).