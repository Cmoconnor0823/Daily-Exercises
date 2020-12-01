/*
Write a JavaScript function that accepts two arguments, a string and a letter,
the function will count the number of occurrences of the specified letter within the string.

Sample arguments: 'w3resource.com', 'o'
Expected output: 2
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//Basic solution below
//Source https://www.w3resource.com/javascript-exercises/javascript-function-exercise-22.php
/*
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

//A regex approach
function charCount(str,char){
var re = new RegExp(char,"g");
return str.match(re).length;
}
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Write a JavaScript function to extract unique characters from a string.

Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"

*/

//Basic solution below
//Source https://www.w3resource.com/javascript-exercises/javascript-function-exercise-16.php
/*
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

Or

function findUniqueCharacters(str) {
return [...new Set(str)].join('');
}

console.log(findUniqueCharacters( "thequickbrownfoxjumpsoverthelazydog"))
*/