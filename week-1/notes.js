/*
Properties of JS

1. Interpreted : meaning , running line by line .
upside : 1 step preocess ;compilation seprately can take time
downside : performance overhead
        : more prone to runtime error(thats the reason typescript was introduce)

2. DYnamically TYped:variables in js are not bound to specific data type . (u can change data type)
    int a=1;
    a="hello world"

3. Single threaded:Js executes code in a single-threaded env , meaning it processes one task at a time. 
4. Garbage collected:
        memory management(storing,changing,removing data -u cant do omn your own like RUST , it does itself)

Conclusion:
    beginner friendly,interpreted,donot have types(can have though).
    single threated makes them not very scalable
    slow cause of garbage collecter
    slow cause they are interpreted , dont have seprate compilation.



Syntax of Js
1. Variables : are used to store data.type can also change in js . VAR LET  CONST

*/
let firstName = "John";
const age = 30; //cannot change its valur ; use when yk the value shouldnt be change
var isStudent = true; //use let insted of var(forget var even exist)
//print
console.log(firstName);
console.log(age);
console.log(isStudent);

/*
Assignment:
Create a variable for each of the following: your favorite color, your height in centimeters,
and weather you like pizza. Use appropriate variable declarations (let,const,var).
Try logging it using console. log
*/
const favColor = "blue";
let height = 180;
var isPizza = true;
console.log(favColor, height, isPizza);

/*
2. Data types
*/

let firstName1 = "John"; //string
let age1 = 30; //Number
let isStudent1 = true; //bool
let number1 = [1, 2, 3]; //Array - lets u aggregate data together, let u store value in single variable
//print
//Array:
console.log(number1[0]); //prints 1(0th index)

console.log(firstName1, age1, isStudent1, number1);

/*
3. Operators
*/
let sum = 10 + 5; //Arithmetic operator
let isEqual = 10 === 10; //Comparison
let isTrue = true && false; //Logical
//Print
console.log(sum, isEqual, isTrue);

/*
4. Functions
 */
function greet(name) {
  //declaration of function
  return "Hello , " + name;
}
let ans = greet("Rishu"); //calling functon
console.log(ans); //print

//function sum
function sum1(a, b) {
  let totalSum = a + b;
  return totalSum;
}
let ans1 = sum1(1, 2);
console.log(ans1); //prints 3

/*
Assignment
    write a function called canVote that returns true or false if the age of a user is >18
*/

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(canVote(17));

/*
5. if /Else Statements
Example: same as above canVote function

/*
6. Loops  : lets u run a certain logic again and again.
*/
let users1 = ["Rishu", "John", "Doe"];
for (let i = 0; i < 3; i++) {
  //initialization ; condition ; increment
  console.log(users1[i]);
}

/*Complex topics 
-------------------------------------------------------------
1. Objects 
2. Arrays
*/
//Object :collection of  key value pair ; lets u aggregate related data together
let person = {
  name: "Rishu",
  age: 21,
  gender: "male",
};
console.log(person["name"]); //accessing value using key
console.log(person.age); //accessing value using key
//-------------------------------------------------------------
//Assignment : write a function that takes a user as an input and greets them with their name and age
function greetUser(user) {
  console.log("Hello," + user.name + ".Your age is " + 19); //concatinating
}
greetUser(person);
//Array : collection of similar data types ; lets u aggregate data together
let arr = ["apple", "banana", "cherry"];
console.log(arr[1]); //prints banana
//Array of objects
let users = [
  { name: "Rishu", age: 21 },
  { name: "John", age: 30 },
  { name: "Doe", age: 25 },
];
console.log(users[0].name); //prints Rishu
console.log(users[1].age); //prints 30

/*
Assignment:
    Create a function that takes an array of objects as input,
    and returns the users whose age > 18 and are male
 */

//initialise a new array,push to a new array
//you can use filter funcction inside an array |map|reduce

const userList = [
  { name: "Rishu", age: 21, gender: "male" },
  { name: "John", age: 17, gender: "male" },
  { name: "Jane", age: 22, gender: "female" },
  { name: "Doe", age: 19, gender: "male" },
];
//for way
// for (let i = 0; i < userList.length; i++) {
//   if (userList[i]["age"] >= 18 && userList[i]["gender"] == "male") {
//     console.log(userList[i]);
//   }
// }

console.log("function way");
function sortMale(array) {
  let arraySorted = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].gender === "male" && array[i].age >= 18) {
      arraySorted.push(array[i]);
    }
  }
  return arraySorted;
}
console.log(sortMale(userList));


