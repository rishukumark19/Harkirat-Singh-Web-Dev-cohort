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
for (let i = 0; i <= 1000; i++) {
  console.log(i);
}
