// 018 Properties and methods in arrays

var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

/* 
PROPERTIES:
Get a property of an object by name:
 */
console.log("Array length: ", pens.length);
/* 
METHODS:
Reverse the array: */
// pens.reverse();


// Remove the first value of the array:
pens.shift();
console.log("After: ", pens);


var pens2 = ["red", "blue", "green", "orange", "black"];
console.log("pens2 array: ", pens2);
pens2.shift();
console.log("After apply shift() : ",pens2);

var pens3 = ["red", "blue", "green", "orange", "black"];
console.log("pens3 array: ", pens3);

// Extra element add in array
pens3.unshift("purple", "white");
console.log("After unshift apply: ", pens3);

// Remove the last value of the array:
var pens4 = ["red", "blue", "green", "orange", "black"];
console.log("pens4 array: ", pens4);
pens4.pop();
console.log("After apply pop in pens4 array: ", pens4);

// Add comma-separated list of values to the end of the array
var pens5 = ["green", "orange", "black"];
console.log("pens5 array: ", pens5);
pens5.push("pink", "prussian blue");
console.log("After apply push in pens5 array: ", pens5);

// Remove an item from array by using splice(শুরুর ইলিমেন্টএর অবস্থান, এরের সংখ্যা নং)
var pens6 = ["green", "orange", "black", "white"];
console.log("pens6 array: ", pens6);
console.log("After apply splice in pens6 array: ", pens6);

// Remove an item from array by using splice(শুরুর ইলিমেন্টএর অবস্থান, এরের সংখ্যা নং)
var pens7 = ["green", "orange", "black", "white"];
var newPens = pens7.slice(1,3);
console.log("After apply slice in newPens array: ", newPens);

var pens8 = ["green", "orange", "black", "white"];
var result = pens8.indexOf("white", 2);
console.log("The index position is: ", result);
console.log("The value is: ", pens8[result]);


var pens9 = ["green", "orange", "black", "white"];
var arrayString = pens9.join(", "); // You can use space / , / | - \ as a separator
console.log("String from array with separator: ", arrayString);