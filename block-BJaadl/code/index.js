let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

let findLongestWord =  words.reduce((acc,cv)=> {
  if(acc.length > cv.length){
    return acc 
  }
  else if(acc.length === cv.length){
    return acc;
  }
  else {
    return cv;
  }
},"")


// function findLongestWord(acc,cv){
//   if(acc.length > cv.length){
//     return acc;
//   }
//   else if(acc.length === cv.length){
//     return acc;
//   }
//   else {
//     return cv;
//   }
//   return acc;
// }
// console.log(words.reduce(findLongestWord));

// - Convert the above array "words" into an array of length of word instead of word.





// let lengthOfEachWordInwords = words.reduce((acc,cv,ci,array)=> {
//    acc.push(array[ci] = cv.length);
//    return acc;
// },[])

// - Create a new array that only contains word with atleast one vowel.
let vowelArray = words.filter(word => word.toLowerCase().includes("a" || "e" || "i" || "o" || "u"));

// let vowelArray = words.reduce((acc,cv)=> {
//   if(cv.toLowerCase().startsWith("a" || "e" || "i" || "o" || "u")){
//     acc.push(cv);
//   }
//   return acc;
// },[]);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
// let noVowelArray = words.filter(word => {
//   if(!(word.toLowerCase().startsWith("a") || word.toLowerCase().startsWith("e") || word.toLowerCase().startsWith("o")|| word.toLowerCase().startsWith("i") || word.toLowerCase().startsWith("u"))){
//     console.log(word);
//   }
// })
let NoVowelArray = words.reduce((acc, cv) => {
  console.log("global : ", cv);
  if (!(cv.startsWith("a") || cv.startsWith("e") || cv.startsWith("i") || cv.startsWith("o") || cv.startsWith("u"))) {
    console.log("inside :", cv);
    acc.push(cv)
    // return acc;

  }
  return acc;
}, []);

// - Create a new array that contianse words not ending with vowel
let noVowelArray = words.filter(word => {
  if(!(word.endsWith("a") || word.endsWith("e") || word.endsWith("i") || word.endsWith("o") || word.endsWith("u"))){
    return word;
  }
})



// let NoVowelAtTheEndArray = words.reduce((acc, cv) => {
//   if (!(cv.endsWith("a") || cv.endsWith("e") || cv.endsWith("o") || cv.endsWith("i") || cv.endsWith("u"))) {
//     acc.push(cv);
//   }
//   return acc;
// }, [])


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
// let sumArray = numbers.reduce((acc,cv) => acc += cv,0)
let sumArray = numbers.reduce((acc, cv) => {
  return acc += cv;
}, 0)
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
const multiplyByThree = numbers.reduce((acc,cv) => {
  acc.push(cv*3);
  return acc;
},[])
// let multipliedByThree = numbers.reduce((acc, cv) => {
//   acc.push(cv * 3);
//   return acc;
// }, [])
// - Create a new array that contains only even numbers
let evenNumber = numbers.reduce((acc,cv) => {
  if(cv % 2 === 0){
    acc.push(cv);
  }
  return acc;
},[]) 
// let evenNumbers = numbers.reduce((acc, cv) => {
//   if (cv % 2 == 0) {
//     acc.push(cv);
//   }
//   return acc;
// }, [])

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.reduce((acc, cv) => {
  if (cv % 2 !== 0) {
    acc.push(cv);
  }
  return acc;
}, [])

// - Create a new array that should have true for even number and false for odd numbers.

 let newArrayForEvenAndOdd = numbers.reduce((acc,cv)=> {
   (cv % 2 === 0) ? acc.push(true): acc.push(false);
   return acc;
 },[]);
 console.log(newArrayForEvenAndOdd);
// let newArrayForEvenAndOdd = numbers.reduce((acc, cv) => {
//   if (cv % 2 === 0) {
//     acc.push(true)
//   }
//   else {
//     acc.push(false);
//   }
//   return acc;
// }, [])
// - Sort the above number in assending order.
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(numbers);

// - Does sort mutate the original array?
// yes, sort mutates original array
// - Find the sum of the numbers in the array.
let sumArray1 = numbers.reduce((acc, cv) => {
  return acc += cv;
}, 0)
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageArray = numbers.reduce((acc, cv) => {
  acc += cv;
  return acc;
}, 0)
let averageOfNumbers = averageArray / numbers.length;


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = strings.reduce((acc, cv) => {
  acc += cv.length;
  return acc;
}, 0) / numbers.length;
