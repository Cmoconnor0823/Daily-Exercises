/*
“Life has two rules: number 1, never quit!
 Number 2, always remember rule number one.” —Duke Ellington
*/

/*
Write a JavaScript function which will take an array of numbers
stored and find the second lowest and second greatest numbers, respectively.
*/

//Sample array : [1,2,3,4,5]
//Expected Output : 2,4

// Remove answer below before adding to drive
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));


//OR

function Second_Greatest_Lowest2(arr) {
    arr = arr.sort();
    var newArr = [arr[1], arr[(arr.length - 2)]];
    newArr = newArr.toString();
    return newArr;
}
console.log(Second_Greatest_Lowest2([2, 1, 3, 5, 4]));





/*
 Write a JavaScript function to convert an amount to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
-----Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1

*/


// Remove answer below before adding to drive
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        }
        else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// Or

function amountToCoins2(num, coins) {
    return coins.reduce((res, coin) => {
        while (num - coin >= 0) {
            res.push(coin);
            num -= coin;
        }
        return res;
    }, []);
}
console.log(amountTocoins2(46, [25, 10, 5, 2, 1]));



/* JavaScript: Tips of the Day
Randomizes the order of the values of an array, returning a new array */

// Example:

const tips_shuffle = ([...arr]) => {
    let x = arr.length;
    while (x) {
        const i = Math.floor(Math.random() * x--);
        [arr[x], arr[i]] = [arr[i], arr[x]];
    }
    return arr;
};
const foo = [2, 4, 6];
console.log(tips_shuffle(foo));

// Output: [4, 2, 6]