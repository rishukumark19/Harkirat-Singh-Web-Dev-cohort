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
