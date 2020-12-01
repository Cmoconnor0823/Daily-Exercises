// Write a JavaScript function to list the properties of a JavaScript object to the console.

var developer = {
  name: "",
  yearsExperience: 1,
  data: {
    skills: ["HTML", "CSS", "SASS", "React"],
    codeEditor: "Visual Studio Code",
  }
}

function listProps(obj) {
  console.log(obj)
}
listProps(developer)


// Using the same object from above, write a statement to remove one property 
// and print the changed object to the console 

//listProps(developer);
delete developer.yearsExperience;
console.log(developer);