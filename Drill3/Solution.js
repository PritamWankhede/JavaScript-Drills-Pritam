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
// solution1(inventory);

//Solution 2



function solution2(inventory){
    console.log([inventory.length]);
    console.log(`Last car is a ${inventory[inventory.length].car_make} ${inventory[inventory.length].car_model}`);
}
// solution2(inventory);

module.exports={solution2};

function solution3(inventory){
  let carModels =[];
     for(let index=0 ;index<inventory.length;index++){
       carModels.push(inventory[index].car_model);
     }
     
     return carModels.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
// console.log(solution3(inventory));

function solution4(inventory){
  for(let index=0;index<inventory.length;index++)
  {
    // console.log(inventory[index]);
    console.log(inventory[index].car_year);
  }
}



function solution5(inventory){
    let olderCars = [];
    let oldCarCount = 0;
  for(index =0 ;index < inventory.length;index++){
    if(inventory[index].car_year < 2000){
        olderCars.push(inventory[index].car_model);
        oldCarCount++;
    }
  }
  return `Count of Cars before 2000 year are ${oldCarCount} \n Car Models are ${olderCars}`
}
// console.log(solution5(inventory));

function solution6(inventory){
    let Cars=[];
    for(let index=0 ;index < inventory.length;index++){
   if(inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi'){
          Cars.push(inventory[index]);
   }
   }
   return `${JSON.stringify(Cars)} `;
}
module.exports={solution6};
