//Write a function that takes an input character and returns that character repeated 5 times using recursion. 
//For example, if the input is 'g', then the output should be 'ggggg'.

// create function fiveTimes (letter)
const fiveTimes = (letter, n=5) =>{
// base case: n === 1 print letter
  if(n===1) return letter;
// consisently adding letter to itself
  return letter + fiveTimes(letter, n-1);
}

console.log(fiveTimes('g')); 


//Write a function that returns the factorial of a number.
//EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

const factorial = (num) => {
// base case: num === 1 return num
  if (num <= 1) return num;
// decrease num by 1 each time func is called
  return num * factorial(num-1);
};

console.log(factorial(4));


//Get the length of an array using recursion without accessing its length property.

// create function with a defualt param (l=0) that will return itself
const getLength=(array, i=0)=>{
// base case: when array's length is met return l
  if(array[i] === undefined) return array[i-1];
//return function
  return getLength(array, i+=1);
};

console.log(getLength([1,2,3,]));


 /*
 Write a function that takes two inputs, a base and an exponent, and returns 
 the expected value of base ^ exponent. For instance, if our base is 2 and our exponent 
 is 3, then return 8 because 2^3 = 2*2*2 = 8.
 */
 

 // create function pow (baseNum, exponent)
 function pow (baseNum, exponent){
 // return the expected value of baseNum^exponent
 // base case: if exponent is 1, then return baseNum;
  if (exponent === 1) return baseNum;
 // baseNum x function and subtracting the exponent
  return baseNum * pow(baseNum, exponent - 1);
 };

 console.log(pow(2,3));


 /*
Write a function that takes an array of functions and a number that will be piped through all those functions. 
The input number passes through the first function, whose output is passed as input to the second function, 
whose output is passed as input to the third function, and so on. Use recursion to return the final output of 
the last function in the array.
 */


// create function (array, num, i=0)
const pipedThru = (input, array, i=0)=>{
// base case: once the array is undefined return the final result of the last function in the array
  if(array[i]=== undefined) return input;
// return this function(array[i], num, i+=1)
  return pipedThru(array[i](input), array, i+=1);
};

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(pipedThru(2, arrayOfFunctions)); // -> -7



/*
Write a recursive function countdown that accepts a positive integer n 
as an input and logs every number from n (inclusive) to 0 (exclusive) to 
the console.
*/

// create a function that accepts a positive integer (n) && add counter equal to n
const countdown =(n)=> { 
// need base case
  if (n === 0) return console.log(n);
// console.log every number from (n) to 0
  console.log(n);
  return countdown(n-=1);

}

//countdown(5);

/*
Write a recursive function sum that calculates the sum of 
an array of integers.
*/
const sum =(array)=> {
  if (array.length === 0) return 0;
  return array[0] + sum(array.slice(1)); 
}


/* -----> why doesn't this code work? We need to KNOW
const sum = (array, i=0) => { 
  if (array[i] === undefined) return array;
  return array[i] + sum(array[i], i+=1);
}
*/

const fart = [1, 2, 3];
console.log(sum(fart));
console.log(sum([1,2,2,4,5,6])); // -> returns 20








