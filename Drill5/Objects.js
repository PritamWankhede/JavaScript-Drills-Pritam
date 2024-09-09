const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

// function keys(obj) {
// let arr= [];
//   for(let key in obj)
//   {
//      arr.push(key);
//   }
//   return String(arr);
// }
// console.log(keys(testObject));


// function values(obj){
//     let arr =[];
//     for(let key in obj){
//         arr.push(obj[key]);
//     }
//     return String(arr);
// }
// console.log(values(testObject));

// function pairs(obj) { 
// let arr = [];
// for(let key in obj)
//   {
//       arr.push([key,obj[key]]);
//   }
//  return arr;
// }
// console.log(pairs(testObject));


function mapObject(obj, cb){
    let newObj = {};
    for(let key in obj)
    {
        // console.log(cb(key));
       newObj[cb(key)]=obj[key];  
      
    }
    return newObj;
 }

 function map(key)
 {
    return key.toUpperCase();
 }
 console.log(mapObject(testObject, map));
