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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.reduce((acc,cv)=> {
  acc.push(cv.name);
  return acc;
},[])
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.reduce((acc,cv)=> {
  acc.push(cv.grade);
  return acc;
},[]);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.reduce((acc,cv)=> {
  acc.push(cv.sex);
  return acc;
},[])
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopleName.filter(name => {
  if(name.startsWith("J" || "P")){
    console.log(name);
  }
})
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopleName.filter(name => {
  if(name.startsWith("A") || name.startsWith("C")){
    console.log("starts with a or c :",name);
  }
})
// Log all the filtered male ('M') in persons array
persons.forEach(person => {
  if(person.sex === "M"){
    console.log("filteredM:",person.sex);
  }
})
// Log all the filtered female ('F') in persons array
persons.forEach(person => {
  if(person.sex !== "M"){
    console.log("filteredF:",person.sex);
  }
})
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons.forEach(person => {
  if(person.sex !== "M"){
    if(person.name.startsWith("C") || person.name.startsWith("J")){

      console.log("filteredF:",person.sex);
    }
  }
})
// Log all the even numbers from peopleGrade array
persons.reduce((acc,cv,ci)=> {
  if(cv.grade % 2 === 0){
    console.log("even grade :",`${cv.name} at ${ci} : ${cv.grade}`);
  }
},0)
// Find the first name that starts with 'J' in persons array and log the object
let startWithJ = persons.reduce((acc,cv,ci)=> {
  if(cv.name.startsWith("J")){
    // console.log("acc:",acc)
    console.log(cv);    
    acc[ci] = cv;
  }
  return acc;
},{})
// Find the first name that starts with 'P' in persons array and log the object
let startsWithP = persons.reduce((acc,cv,ci)=> {
  if(cv.name.startsWith("J")){
    // console.log("acc:",acc)
    console.log(cv);    
    acc[ci] = cv;
  }
  return acc;
},{})
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let startWithJAndGradeGreaterThanTenIsFemale = persons.reduce((acc,cv)=>{
  if(cv.name.startsWith("J") && (cv.grade > 10) && (cv.sex === "F")){
    // console.log(cv);
    acc.push(cv);
  }
  return acc;
},[])
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.reduce((acc,cv) => {
  if(cv.sex === "F"){
    acc.push(cv);
  }
  return acc;
},[])
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.reduce((acc,cv)=> {
  if(cv.sex === "M"){
    acc.push(cv);
  }
  return acc;
},[])
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc,cv)=> {
  return acc + cv.grade;
  
},0)
// Find the average grade
let averageGrade = gradeTotal/persons.length;
// Find the average grade of male
// let gradeOfMale = 
// persons.reduce((acc,cv)=> {
//   if(cv.sex === "M"){
//     acc += cv.grade;
//   }
//   return acc;
// },0);
let gradeOfMale = persons.filter(person => person.sex === "M");
let averageGradeOfMale = gradeOfMale.reduce((acc,cv) => {
  return acc + cv.grade;
},0)/gradeOfMale.length;


// Find the average grade of female
let gradeOfFemale = persons.filter(person => person.sex === "F");
let averageGradeOfFemale = gradeOfFemale.reduce((acc,cv) => {
  return acc + cv.grade;
},0)/gradeOfFemale.length;

// Find the highest grade
let highestGrade = persons.reduce((acc,cv,ci)=> {
  if(cv.grade > acc){
    console.log("inside if :",acc);
    return cv.grade;
  }
  else {
    console.log("inside else :",acc)
    return acc;
  }
},0);
// Find the highest grade in male
let highestGradeInMale = persons.filter(person => {
  if(person.sex ==="M"){
    return person;
  }
})
.reduce((acc,cv) => {
  if(cv.grade > acc){
    return cv.grade;
  }
  else {
    return acc;
  }    
},0)
// Find the highest grade in female
let highestGradeInFemale = persons.filter(person => {
  if(person.sex === "F"){
    return person;
  }
})
.reduce((acc,cv)=> {
  if(cv.grade > acc){
    return cv.grade;
  }
  else{
    return acc;
  }
},0);
// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeOfPeopleNameStartWithJOrP = persons.filter(person => {
  if(person.name.startsWith("J") || person.name.startsWith("P")){
    return person;
  }
})
.reduce((acc,cv)=> {
  if(cv.grade > acc){
    return cv.grade;
  }
  else{
    return acc;
  }
},0);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
// console.log( persons.map(person => {
//   return person.grade;
// })
// .sort((a,b) => a-b));
console.log("peopleGrade:",peopleGrade);
let sortedPeopleGrade =  peopleGrade.sort((a,b) => a-b);
/*
Yes, peopleGrade elements changed.
*/ 

// Sort the peopleGrade in descending order
let sortedPeopleGradeInDescendingOrder =  peopleGrade.sort((a,b) => b-a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let SortWithoutMutation = [...peopleGrade].sort((a,b) => b-a);
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName);
let sortedPeopleName = peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let sortedPeopleNameWithoutMutation = [...peopleName].sort();