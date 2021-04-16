let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
const averageGrade =  persons.reduce((acc,cv)=> {
  return acc += cv.grade;
  
},0)/persons.length;

console.log("average grade:",averageGrade);



// console.log(persons.length)
// let averageGrade = persons.reduce((acc,cv)=> {
//   return acc+cv.grade;
// },0)/persons.length;
// Find the average grade of male
let gradeOfMale = persons.filter(person => {
  if(person.sex === "M"){
    return person.grade;
  }
});
let averageGradeOfMale = gradeOfMale.reduce((acc,cv)=> {
  return acc+cv.grade;
},0)/gradeOfMale.length;
// Find the average grade of female;
let gradeOfFemale = persons.filter(person => {
  if(person.sex === "F"){
    return person;
  }
});
let averageGradeOfFemale = gradeOfFemale.reduce((acc,cv)=> {
  return acc + cv.grade;
},0)/gradeOfFemale.length;
// Find the highest grade
let highestGrade = persons.reduce((acc,cv)=>{
 if(cv.grade > acc){
   return cv.grade;
 }
 else{
   return acc;
 }
},0)
// Find the highest grade in male
let highestGradeInMale = gradeOfMale.reduce((acc,cv)=>{
  if(cv.grade> acc){
    return cv.grade;
  }
  else{
    return acc;
  }
},0);
// Find the highest grade in female
let highestGradeInFemale = gradeOfFemale.reduce((acc,cv)=>{
  if(cv.grade>acc){
    return cv.grade;
  }
  else {
    return acc;
  }
},0);
// Find the highest grade for people whose name starts with 'J' or 'P'
let peopleNameStartsWithJOrP = persons.reduce((acc,cv)=>{
  if(cv.name.startsWith("J") || cv.name.startsWith("P")){
    acc.push(cv);
  }
  return acc;
},[]);
let highestGradeOfPeopleWithNameStartingFromJOrP = peopleNameStartsWithJOrP.reduce((acc,cv)=> {
  if(cv.grade > acc) {
    return cv.grade;
  }
  else return acc;
},0)
const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
// let fruitsObj = new Object();

const arrayOfFruitsWithValueOfOccurance = fruitBasket.reduce((acc,cv)=> {
  if(acc.hasOwnProperty(cv)){
    acc[cv] += 1; 
  }
  else {
     acc[cv] = 1;
  }
  return acc;
},{})

console.log("here is the array with fruits and its occurance:",arrayOfFruitsWithValueOfOccurance)

// let fruitObj = new Object();
// let fruitObj = fruitBasket.reduce((acc,cv)=>{
//   if(acc.hasOwnProperty(cv)){
//     acc[cv] += 1;
//   }
//   else {

//     acc[cv] = 1;
//   }
//   return acc;
// },{})
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]

*/


// let fruitBasketArray = Object.keys(fruitObj).reduce((acc,cv) => {
//   console.log(cv);
//   // let arr = new Array();
//   acc = acc.concat([[cv,fruitObj[cv]]]);
//   // acc.push(arr);
//   return acc;
// },[]);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
let flatData = data.reduce((acc,cv)=>{
  return acc.concat(cv);
},[])



const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
function flatten(arr) {
   return arr.reduce((acc, cv) => {
    console.log("I am watching you:",cv);
    console.log("acc , am keeoing my eye on you:", acc);
    return Array.isArray(cv) ? acc.concat(flatten(cv)) : acc.concat(cv);

  },[]);
}
let flattened = flatten(dataTwo);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  "increment",
  "double",
  "decrement",
  "decrement",  
  "double",
  "triple",
  "half",
  "increment",
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
// function operation(num){
//   return pipeline.reduce((acc,cv)=>{
//     console.log(acc);
//     console.log(cv);
//     if(cv === "increment"){
//       acc++;
//     }
//     if(cv === "decrement"){
//       acc--;
//     }
//     if(cv === "double"){
//       acc*= 2;
//     }
//     if(cv === "triple"){
//       acc *= 3;
//     }
//     if(cv === "half"){
//       acc /= 2;
//     }
//     return acc;
//   },num)
// }

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

let a = pipeline2.reduce((acc,cv) => {
  console.log(cv);
  // console.log("before:",acc);
  acc = cv(acc);
  console.log(acc);
  return acc;
},8);
// Find the output using pipeline2 the initial value if 8


function increment(num){
  return ++num;
}
function decrement(num){
  return --num;
}
function double(num){
  return num*=2;
}
function triple(num){
  return num*=3;
}
function half(num){
  return num/=2;
}
// function initialValue(number){


//   return pipeline2.reduce((acc,cv)=>{
//     console.log(cv)
//     if(cv === "increment"){
//       return increment(acc);
//     }
//     if(cv === "decrement"){
//       return  decrement(acc);
//     }
//     if(cv === "double"){
//       acc= double(acc);
//     }
//     if(cv === "triple"){
//       acc = triple(acc);
//     }
//     if(cv === "half"){
//       acc = half(acc)
//     }
//     // return acc  ;
//   },number);

// }