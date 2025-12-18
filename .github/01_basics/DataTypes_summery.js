// Primitive Data Types in JavaScript

//7 Types: STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, SYMBOL, BIGINT

const score = 100; // Number
const scorevalue = "100"; // String

const isLoggedIn = false; // Boolean
const loggedInUser = null; // Null
let UserEmail; // Undefined


const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Symbol

console.log(id === anotherId); // false

const bigNumber = BigInt("1234567890123456789012345678901234567890"); // BigInt
console.log(bigNumber);

// Examples of Primitive Data Types
// 1. Number
let age = 25; // Integer
let price = 19.99; // Floating-point number

// 2. String
let name = "John Doe"; // Double quotes
let greeting = 'Hello, World!'; // Single quotes
let templateLiteral = `My name is ${name}`; // Template literal

// 3. Boolean
let isStudent = true; // true
let hasGraduated = false; // false

// 4. Undefined
let address; // Variable declared but not assigned a value

// 5. Null
let phoneNumber = null; // Explicitly set to no value

// 6. Symbol
let uniqueId = Symbol('id'); // Unique identifier

// 7. BigInt
let bigNumber = BigInt(9007199254740991); // Large integer value

// Summary of Primitive Data Types
console.log(typeof age); // "number"
(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof address); // "undefined"
console.log(typeof phoneNumber); // "object" (this is a known quirk in JavaScript)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"

//Reference(Non-Primitive) Data Types in JavaScript
// Data Types: Objects, Arrays, Functions

const heros = ["Superman", "Batman", "  Wonder Woman"]; // Array
let myObj = {
    name: "Sourav",
    age: 20
}; 

const myFunction = function() { // Function
    console.log("Hello, World!");
}
console.log(typeof outsideTemp);
console.log(typeof bigNumber); 

// Object           
let person = {
    name: "John",
    age: 25,
    isStudent: true
};                
console.log(typeof person);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object"

// Function
function greet() {
    return "Hello!";
}
console.log(typeof greet); // "function"        


// Summary of Reference Data Types
//Undefined	=> "undefined"
//Null =>	"object"
//Boolean =>	"boolean"
//Number =>	"number"
//String =>	"string"
//Object (native and does not implement [[Call]])	=> "object"
//Object (native or host and does implement [[Call]]) => 	"function"
//Object (host and does not implement [[Call]]) =>	Implementation-defined except may not be "undefined", "boolean", "number", or "string".


//https://262.ecma-international.org/5.1/#sec-11.4.3