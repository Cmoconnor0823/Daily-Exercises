/*
Write a JavaScript function 
to convert an object into a list of '[key, value]' pairs.
*/

var data = {
    key: 12345,
    person: "John Doe",
    date: "4/21/2020",
    pets: 3,
    employed: true,

}



function getPairs(obj) {
    let pairsList = [];
    pairsList = Object.entries(obj);
    return pairsList;
}

console.log(getPairs(data));


/* function getPairs(obj){
var newArr = [];
    var key = Object.keys(obj)
for(var i = 0; i < key.length; i++){
      newArr.push([
          key[i],   //  keys
           obj[key[i]] // values
        ])  
}
    return newArr
}


console.log(getPairs(data));

// OR
function list(obj) {
    console.log(Object.entries(obj));
};
list(data);
/*

/*
Write a JavaScript function to get a copy of the object 
where the keys have become the values and the values the keys.
*/


function changer(obj) {
    var newObj = new Object();
    for (var key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
};
console.log(changer(data));


/*
function changer(obj){
var newObj = {};
    var key = Object.keys(obj)
for(var i = 0; i < key.length; i++){
         newObj[obj[key[i]]] // values
        = key[i]  //keys
}

    return newObj
}

console.log(changer(data));

Or
function changer(data){
    newObj = {}
    Object.keys(data).map((n)=> newObj[data[n]]= n)
    return newObj 
}



console.log(changer(data));
*/