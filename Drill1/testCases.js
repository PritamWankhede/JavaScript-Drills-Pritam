const {solution1,solution2,solution3,solution4} = require('./Solution.js');
const {arrayOfObjects} = require('./PersonData.js');

//Solution1 TestCases
console.log(solution1(arrayOfObjects));
//  console.log(solution1());
// console.log(solution1([]));
//console.log(solution1());

//Solution2 TestCases
console.log(solution2(arrayOfObjects));
//  console.log(solution2());
//  console.log(solution2([]));


//Solution3 TestCases
console.log(solution3(arrayOfObjects));
console.log(solution3());

//Solution4 TestCases
console.log(solution4(arrayOfObjects,3));
console.log(solution4(arrayOfObjects,2));
console.log(solution4(arrayOfObjects,0));