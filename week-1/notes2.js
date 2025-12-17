/*

Goal of  class:
1. I/O tasks
2. Callbacks
3. Functional arguments
4. Async vs Sync code
5. Event loops , callback queues,JS

Goal of tmro class:
1. Async await,Promises
2. Practising async JS


assignment : google it : try to create a promosified version of setTImeout |fetch |fs.readFile
*/

//Normal functions in JS
//FInd sum of two numbers
function sum(a, b) {
  //google : parse it to a number
  return a + b;
}
console.log(sum(1, 2));
console.log(sum("1", 2)); //concatination answer : 12

//FInd sum from 1 to a number

function sumToN(n) {
  total = 0;
  for (i = 1; i <= n; i++) {
    total += i;
  }
  return total; // return n*(n+1)
}
console.log(sumToN(3));

//Synchronous code : run line by line , in the order its been writeen .Each operation waits for the previous one to complete before moving on to the next one.

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans1 = sum(100); //1st this run
console.log(ans1);
const ans2 = sum(1000); //then this
console.log(ans2);
const ans3 = sum(10000); //then this
console.log(ans3);

/*
I/O heavy operations
---------------------
I/O (Input/Output) heavy operations 
refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. 
These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.
*/
