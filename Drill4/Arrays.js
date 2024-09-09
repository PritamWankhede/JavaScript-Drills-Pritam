const items = [1, 2, 3, 4, 5, 5];

// function findEach(elements,cb){
  
//     for(let i=0;i<elements.length;i++)
//     {  
    
//        cb(elements[i],i);
//     }
//   }
   
//    function findNumber(element,i){
//       console.log(`Element at ${i} is ${element}`)
//    }
  
  
//   console.log(find(items,findNumber));



// function find(elements,cb){
//    for(let i=0;i<elements.length;i++)
//   {  
   
//     if(cb(elements[i])){
//         return true;
//     }
//   }
//   return undefined;
// }
//  function findNumber(element){
//   return element === 7;
//  }
// console.log(find(items,findNumber));

 
// function filter(elements,cb){
//     let newArr=[];
//        for(let i=0;i<elements.length;i++)
//       {  
       
//         if(cb(elements[i])){
//              newArr.push(elements[i]);
//         }
//       }
//       return newArr ? newArr : [];
//     }
//      function filterarray(element){
//       return element%2 === 0;
//      }
//     console.log(filter(items,filterarray));

// function map(elements,cb){
//   let newArray=[];
//   for(let i=0;i<elements.length;i++){
//     newArray.push(cb(elements[i]))
//   }
//   return newArray;
// }

// function mapArray(element){
//   return element*2;
// }
// console.log(map(items,mapArray));

function reduce(elements, cb, startingValue){
 let newEle=0;
  for(let i=0;i<elements.length;i++)
  {
    newEle += cb(elements[i],startingValue);
  }
  return newEle;
}
function reduceArray(element,startingValue){
  return element + startingValue;
}
console.log(reduce(items,reduceArray,0))