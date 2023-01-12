const artists = {
  name: "michel",
  lastName: "jackson",
  country: "the world",
};


// accemulator
let array = []

// using the dot notation will add new value to the object
artists.dateOfBirth = "61";


// declare new key name
let key = "occupation"
// declare value of the occupattion
let value = ["singer", "song writer", "intertainer"]

// add new key and value to object using brackets notation
artists[key] = value

// push the object in to a array
array.push(artists)
console.log(array)





// this methode will return array of arrays 
// where each sub array contains the key-value pairs of the object
// let arr = Object.entries(artists);



// the keys methode will turn the object in to a single array
// let arr = Object.keys(artists);
// console.log(arr);



