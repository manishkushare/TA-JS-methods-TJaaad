// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  // your code goes here
//  return got.houses.reduce((acc,cv)=>{
//     acc += cv.people.length;
//     return acc ;
//   },0);
let totalPeople = 0;
got.houses.forEach(house => {
  totalPeople = totalPeople + house.people.length;
  // return totalPeople;
})
return totalPeople;
}

function peopleByHouses() {
  // your code goes here
  // return got.houses.reduce((acc,cv)=>{
  //   acc[cv.name] = cv.people.length;
  //   return acc;
  // },{})

  let peopleObj = {};
  got.houses.forEach(house => {
    peopleObj[house.name] = house.people.length;
  });
  return peopleObj;
}

function everyone() {
  // your code goes here
// return   got.houses.map(house => {
//     return house.people.reduce((acc,cv)=>{
//       acc.push(cv.name);
//       return acc;
//     },[]);
//   }).flat(Infinity);
let final = [];
got.houses.forEach(house => {
  let peopleName = house.people.map(p => p.name);
  final = final.concat(peopleName);
})
return final;
}

function nameWithS() {
  // your code goes here
  // return got.houses.map(house => {
  //   return house.people.reduce((acc,cv)=> {
  //     if(cv.name.toLowerCase().includes("s")){
  //       acc.push(cv.name);
  //     }
  //     return acc;
  //   },[])
  // }).flat()
//   let final = [];
// got.houses.map(house => {
//   let peopleName = house.people.filter(p => {
//     if(p.name.toLowerCase().includes("s")){
//       return p.name;
//     }
//   });
//   console.log(peopleName)
//   final = final.concat(peopleName);
// })
// return final;
let allPeople = everyone();
return allPeople.filter(p => p.toLowerCase().includes("s"));
}

function nameWithA() {
  // your code goes here
  return got.houses.map(house => {
    return house.people.reduce((acc,cv)=> {
      if(cv.name.toLowerCase().includes("a")){
        acc.push(cv.name);
      }
      return acc;
    },[])
  }).flat()
}

function surnameWithS() {
  // your code goes here
  return got.houses.map(house => {
    return house.people.reduce((acc,cv)=> {
      if(cv.name.split(" ")[cv.name.split(" ").length-1].startsWith("S")){
        acc.push(cv.name);
      }
      return acc;
    },[])
  }).flat()

}

function surnameWithA() {
  // your code goes here
  return got.houses.map(house => {
    return house.people.reduce((acc,cv)=> {
      if(cv.name.split(" ")[cv.name.split(" ").length-1].startsWith("A")){
        acc.push(cv.name);
      }
      return acc;
    },[])
  }).flat()
  
}

function peopleNameOfAllHouses() {
  // your code goes here
  return got.houses.reduce((acc,cv)=>{
    acc[cv.name] = cv.people.reduce((acc,cv)=> {
      acc.push(cv.name);
      return acc;
    },[])
    return acc;
  },{})
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA(),"a");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
