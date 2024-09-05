

//Solution 1
function solution1(arrayOfObjects){
    let emailArray = [];
    for(let index=0;index<arrayOfObjects.length;index++)
    {
         emailArray.push(arrayOfObjects[index].email);
    }
    return emailArray;
}


//Solution 2
function solution2(arrayOfObjects){
    for(let index=0; index < arrayOfObjects.length ;index++)
     {
       console.log(`Person age is ${arrayOfObjects[index].age} and hobbies are ${arrayOfObjects[index].hobbies}`);
     }
  }


//Solution 3
function solution3(arrayOfObjects){
    let name = [];
    for(let index=0; index<arrayOfObjects.length ;index++)
     {
      if(arrayOfObjects[index].country === 'Australia'){
           name.push(arrayOfObjects[index].name);
        }
     }
   return name;
 }




// Solution 4
function solution4(arrayOfObjects,index){
    if(index >= 0 && index < arrayOfObjects.length){
     if(index === 3){
        console.log(`Name of Perosn is ${arrayOfObjects[index].name} and City is ${arrayOfObjects[index].city}` )
     }
     else{
       console.log("Index is not 3");
    }
  }
}


//solution 5
function solution5(arrayOfObjects){
    let age = [];
    for(let index=0; index<arrayOfObjects.length ;index++)
     {
        age.push(arrayOfObjects[index].age);
     }
   return age;
 }

 //solution 6
 function solution6(arrayOfObjects){
    
    for(let index=0; index < arrayOfObjects.length ;index++)
    {
      console.log(`First Hobby of Person is ${arrayOfObjects[index].hobbies[0]}`);
    }
   }
 
 //solution 7
   function solution7(arrayOfObjects){
     if(arrayOfObjects.age === 25){
     console.log(`Person name is ${arrayOfObjects.name} and age is ${arrayOfObjects.age}`)
    }
    else{
     console.log("Invalid age ");
    }
  }
 
  //solution 8
  function session8(arrayOfObjects){
    let city = [];
    let country = [];
    for(let index=0;index<arrayOfObjects.length;index++)
    {
        city.push(arrayOfObjects[index].city);
        country.push(arrayOfObjects[index].country);
    }
    return `City of Person ${city} and Contry of Person ${country}`;
}

module.exports = {solution1,solution2,solution3,solution4,solution5,solution6,solution7,session8};

