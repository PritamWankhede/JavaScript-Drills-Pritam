const {solution1,solution2,solution3,solution4,solution5} = require('./Solution.js');
const {arrayOfObjects} = require('./PersonData.js');

//Solution 1 TestCases
console.log(solution1(arrayOfObjects));
//  console.log(solution1());
// console.log(solution1([]));
//console.log(solution1());

//Solution 2 TestCases
console.log(solution2(arrayOfObjects));
//  console.log(solution2());
//  console.log(solution2([]));


//Solution 3 TestCases
console.log(solution3(arrayOfObjects));
console.log(solution3());

//Solution 4 TestCases
console.log(solution4(arrayOfObjects,3));
console.log(solution4(arrayOfObjects,2));
console.log(solution4(arrayOfObjects,0));

//Soolution 5 TestCases
console.log(solution5(arrayOfObjects));
console.log(solution5());
console.log(solution5("25"));
console.log(solution5(30));