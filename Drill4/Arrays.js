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



function find(elements,cb){
   for(let i=0;i<elements.length;i++)
  {  
   
    if(cb(elements[i])){
        return true;
    }
  }
  return undefined;
}
 function findNumber(element){
  return element === 7;
 }
console.log(find(items,findNumber));

 