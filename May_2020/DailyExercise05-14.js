/*
Create an object to hold information on your favorite recipe. It should have properties for 
title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

var recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}




/* Write a JavaScript function to display the reading status
 (i.e. display book name, author name and reading status)
  of the following books.


Expected output to the console:
Already read 'Bill Gates' by The Road Ahead.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
*/


var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

function bookStatus(library) {
    for (var i = 0; i < library.length; i++) {
        var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
        if (library[i].readingStatus) {
            console.log("Already read " + book);
        } else {
            console.log("You still need to read " + book);
        }
    }
}
bookStatus(library);

//Or

// library.forEach((book)=>{
//     let readstatus='';
//     if(book.readingStatus==true)
//     readstatus='Already read';
//     else
//     readstatus='You still need to read';
    
//     console.log(` ${readstatus} ${book.title} by ${book.author}`);
    
//     })
    
    
