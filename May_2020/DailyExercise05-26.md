

## Question One


What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?


## Question Two

What will the code below output to the console and why?
````
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
````

