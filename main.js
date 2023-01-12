const object = {
  name: "michel",
  lastName: "jackson",
  country: "the world",
};

console.log(object);

// this methode will return array of arrays 
// where each sub array contains the key-value pairs of the object
console.log(Object.entries(object));

// the keys methode will turn the object in to a array
console.log(Object.keys(object));

