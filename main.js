const object = {
  name: "michel",
  lastName: "jackson",
  country: "the world",
};

// using the dot notation will add new value to the object
object.dateOfBirth = "61";


// declare new values
let key = "occupation"
let value = ["singer", "song writer", "intertainer"]

// add new value to object using brackets notation
object[key] = value

console.log(object);



// this methode will return array of arrays 
// where each sub array contains the key-value pairs of the object
// console.log(Object.entries(object));

// the keys methode will turn the object in to a array
// console.log(Object.keys(object));



// let array = []

// for (let i = 0; i < object.length; i++) {
//     console.log(object[i])
    
// }
