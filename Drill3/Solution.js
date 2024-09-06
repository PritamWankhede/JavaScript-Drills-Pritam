const {inventory} =require('./InventoryData');

// console.log(inventory);
//Solution 1
function solution1(inventory){
    // console.log(inventory);
  for(let index=0;index<inventory.length;index++)
  {
    if(inventory[index].id === 33)
    {
      console.log(`Car 33 is a ${inventory[index].car_year} ${inventory[index].car_make} ${inventory[index].car_model}`);
   
    }
  }
}
solution1(inventory);