// Create an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#create_an_array

// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// 'fruits' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits.length);
// 2

// 'fruits' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits.length);
// 2

// Create a string from an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#create_a_string_from_an_array

const fruits_2 = ["Orange", "Pear"];
const fruitsString = fruits_2.join(", ");
console.log(fruitsString);
// "Apple, Banana"

// Access an array item by its index
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#access_an_array_item_by_its_index

const fruits_3 = ["Strawberry", "Blueberry"];

// The index of an array's first element is always 0.
fruits_3[0]; // Apple
console.log(fruits_3[0]);
// The index of an array's second element is always 1.
fruits_3[1]; // Banana
console.log(fruits_3[1]);
