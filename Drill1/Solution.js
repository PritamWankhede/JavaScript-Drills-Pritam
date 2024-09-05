

//Solution 1
function solution1(arrayOfObjects){
    let emailArray = [];
    for(let index=0;index<arrayOfObjects.length;index++)
    {
         emailArray.push(arrayOfObjects[index].email);
    }
    return emailArray;
}
// personsEmail(arrayOfObjects);

//Solution 2
function solution2(arrayOfObjects){
    for(let index=0; index < arrayOfObjects.length ;index++)
     {
       console.log(`Person age is ${arrayOfObjects[index].age} and hobbies are ${arrayOfObjects[index].hobbies}`);
     }
  }
module.exports = {solution1,solution2};

