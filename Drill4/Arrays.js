const items = [1, 2, 3, 4, 5, 5];

function find(elements,cb){
  
  for(let i=0;i<elements.length;i++)
  {  
     cb(elements[i],i);
  }
}
 
 function findNumber(element,i){
    console.log(`Element at ${i} is ${element}`)
 }


console.log(find(items,findNumber));
