

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

module.exports = {solution1};
