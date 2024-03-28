/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const { add } = require("nodemon/lib/rules");

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThreeNumbers = (x, y, z) => {
    if (x >= y) {
      return x;
    } else if(y >= z ){
      return y;
    } else{
        return z;
    }
}
  
console.log('Exercise 2 Result:', maxOfThreeNumbers(3, 9, 14));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const isCharAVowel = (i) => {
'i' === 'i'
}
console.log('Exercise 3 Result:', 'i' === 'i');

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

function addNums(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
  
  //console.log(addNums([2, 4, 5]))
  console.log('Exercise 4 Result:', addNums([2, 4, 5]))

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (numA, numB, numC) => {
    return numA * numB + numC
}

//result =  2, 4, 5;
console.log('Exercise 5 Result:', multiplyArray(2, 4, 5))

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

function reverseString(rockstar) {
    return rockstar.split("").reverse(rockstar).join("");
}
reverseString("rockstar");
console.log('Exercise 6 Result:', reverseString("rockstar"))

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

//Input array of strings
let arr = [
    "the_longest_yard",
    "fightorflight",
    "fof",
    "fight",
];

function fof_Run() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
 
//Display output
//console.log(fof_Run());
console.log('Exercise 7 Result:', fof_Run())

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

let str = "say hello in the morning";  
let truncatedStr = str.substring(4, 25); 
//console.log(truncatedStr); 
console.log('Exercise 8 Result:', (truncatedStr))