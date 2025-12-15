// let var const
const a = 2;
console.log(a);
// bool+concatenation
let firstName = "Rishu";
let age = 22;
let isMarried = false;

console.log("this person name is " + firstName + " and their age is " + age);
// conditional statements(if else)
if (isMarried == true) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}
//Loops
let answer = 0;
for (let i = 0; i < 100; i++) {
  answer = answer + i;
}
console.log(answer);
/*
Let’s write some code -  
1. Write the program to greet a person given their first and last name 
2. Write a program that greets a person based on their gender. (If else) 
3. Write a program that counts from 0 - 1000 and prints (for loop)
*/
//1
let FirstName = "Rishu";
let LastName = "Kumar";
console.log("Hello " + FirstName + " " + LastName);
//2
input = "Enter your gender 1:male ; 2: Female";
if (input == 1) {
  console.log("Hello Mr. " + firstName);
} else {
  console.log("Hello Ms. " + firstName);
}
//3
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Array : to aggrigate large data
const personArray = ["harkirat", "raman", "kirat"];
console.log(personArray[0]);
console.log(personArray[1]);

//odd number print:
const ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}
//write a program to print bigggest number in an array
const numbers = [12, 45, 67, 89, 23, 90, 34];
let biggestNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggestNumber) {
    biggestNumber = numbers[i];
  }
}
console.log("The biggest number is: " + biggestNumber);
//Write a program that prints all the male people’s first name
const personsArray = ["harkirat", "ramna", "kirat"];
const personsGender = ["male", "female", "male"];
for (let i = 0; i < personArray.length; i++) {
  if (personsGender[i] == "male") {
    console.log(personsArray[i]);
  }
}
console.log("-----Objects-----");
//Objects
const persons = {
  person1: { firstName: "harkirat", gender: "male" },
  person2: { firstName: "raman", gender: "female" },
  person3: { firstName: "kirat", gender: "male" },
};

//Write a program that prints all the male people’s first name given a complex object
for (let i = 0; i < persons.length; i++) {
  if (persons[i]["gender"] == "male") {
    console.log(persons[i]["firstName"]);
  }
}
//NOTE: this is not giving output as expected because persons is not an array.

// Write a program that reverses all the elements of an array
const numberList = [1, 2, 3, 4, 5];
let reverseList = [];
for (let i = numberList.length - 1; i >= 0; i--) {
  reverseList.push(numberList[i]);
}
console.log(reverseList);
