const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

function keys(obj) {
let arr= [];
  for(let key in obj)
  {
     arr.push(key);
  }
  return String(arr);
}
console.log(keys(testObject));

