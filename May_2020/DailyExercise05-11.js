/*
	1.	Wrtie a function that takes an object and a property name.
	The function returns true if that property exists in the object,
	and false if it does not. 
*/ 
const student = {
	idNum : 123,
	name : 'Austin',
	grade : 'A'
}
​
​
function hasProp(obj, key){
	return obj.hasOwnProperty(key);
}
​
console.log(hasProp(student, 'name'))


const findsVals= obj => Object.keys(obj).map(k => obj[k]);



/*
	2.	Write a function that stores all values (from the key value pairs) of an object in an array.
	Return the array
*/
	​
function getVals(obj){
	let vals = []
	for(key in obj){
		vals.push(obj[key])
	}
	return vals
}
