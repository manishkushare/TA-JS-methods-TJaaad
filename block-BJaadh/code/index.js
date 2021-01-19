// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.findIndex(num => num === 101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log((strings.join(" ")));

// - Add two new words in the strings array "called" and "sentance"
strings.splice(strings.length,0,"called","sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.splice(strings.length-2,2);

// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"));
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divisbleBThree = numbers.every(num => num % 3 == 0);
// -  Sort Array from smallest to largest
// numbers.sort((a,b) => {
//   return a-b;
// })
console.log("sorted numbers :",numbers)
// - Remove the last word in strings
console.log(strings.pop());
// - Find largest number in numbers
let largestNumber = numbers.reduce((acc,cv) => {
    return  Math.max(acc,cv)
})
// - Find longest string in strings
let longestString = strings.reduce((acc,cv) => {
  return (acc.length > cv.length)? acc:cv;
})
// - Find all the even numbers
let evenNumbers = numbers.filter(number => {
  return number % 2 == 0;
})
// - Find all the odd numbers
let oddNumbers = numbers.filter(number => {
  return number % 2 !== 0;
})
// - Place a new word at the start of the array use (unshift)
strings.unshift("manish");
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2,4));
// - Replace 12 & 18 with 1221 and 1881
let replaceNum = numbers.reduce((acc,cv,ci,array) => {
  if(cv === 12){
    array[ci] = 1221;
  }
  if(cv === 18){
    array[ci] = 1881;
  }
  return array;

},[])
// - Replace words in strings array with the length of the word
let replaceString = strings.reduce((acc,cv,ci,array)=> {
  array[ci] = cv.length;
  return array;
},[])
// - Find the sum of the length of words using above question
let sumOfLengthOfWords = replaceString.reduce((acc,cv,ci,array) => {
  return acc += cv;
},0);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
console.log(customers.filter(customer => {
  return customer.firstname.startsWith("J");
}))
// - Create new array with only first name
let firstName = customers.map(customer => {
  return customer.firstname;
})
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = customers.reduce((acc,cv) => {
  acc.push(cv.firstname + " " + cv.lastname);
  return acc;
}, [])
// - Sort the array created above alphabetically
let sortedAlphabetically = fullName.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let filteredArray = customers.filter(customer => {
  if(customer.firstname.toLowerCase().includes("a" || "e" || "i" || "o" || "u")){
    return customer.firstname;
  }
})