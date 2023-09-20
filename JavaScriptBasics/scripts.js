console.log("hello from script.js");

// var
// console.log("animal", animal);

var animal = undefined; //declaration - default value is undefined. Hoisting to the top of scope

animal = "cat"; // assignment

var animal2 = "cat";

//ES6
// console.log("animal3", animal3);
let animal3;
animal3 = "cat3";
console.log("animal3", animal3);

// console.log("animal4", animal4);
// similar to final in java, you have to assign the variable the value during initialization
const animal4 = "cat4";

// simliar to dictionary, or hashmap in java
const MY_OBJECT = {
  KEY: "value",
  key2: 2,
  key3: true,
  name: "amy",
  age: 18,
};

console.log("MY_OBJECT name is", MY_OBJECT.name);

MY_OBJECT.name = "charlie";

console.log("MY_OBJECT new name is", MY_OBJECT.name);

const MY_ARRAY = ["A", 1, true, MY_OBJECT];

console.log("my_array[0]", MY_ARRAY[0]);

// == VS ===

console.log("1 == '1'", 1 == "1"); // number("1") -> 1
console.log("1 == true", 1 == true); // number(true) -> 1
console.log("2 == true", 2 == true); // number(true) -> 1

console.log("underfine == null", undefined == null); // both are falsy value
console.log("underfine == false", undefined == false); // false

console.log("1 === '1'", 1 === "1"); // number("1") -> 1

// function
// case matters in JS
// f(1) f(2)

function introduceYourself(name) {
  console.log("hello my name is", name);
  // your main logic
  return "name is " + name; // concatination
  // return default is underfined (whether you have this line or not)
}

let introduceYourself2 = function (name) {
  console.log("hello my name is", name);
  // your main logic
  return "name is " + name; // concatination
};

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const addTwoNumbers2 = (num1, num2) => num1 + num2; // one liner function, has to be like this

//IIFE Immediately Invoked Function Expression (snapchat, 阅后即焚), cannot utilise this function again anymore
(function introduceYourself_IIFE(name) {
  console.log("IIFE: AWU AWU" + name);
})("charlie");

// callback function
// func1
// func2(fun1)

// in this case, function 1 is called a callback function

function animalSound(sound) {
  sound(); // callback function
}

const dogSound = () => {
  console.log("woof, Wang Wang");
};

const catSound = () => {
  console.log("Miao Miao");
};

animalSound(dogSound);
animalSound(dogSound);
animalSound(catSound);
