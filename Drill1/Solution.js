

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

module.exports = {solution1,solution2,solution3,solution4};

