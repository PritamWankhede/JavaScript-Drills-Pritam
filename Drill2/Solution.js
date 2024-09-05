
const {users} = require('../User.js');

//Solution 1
function solution1(users){
 let userName = [];
 let hobby = /video games/i;
 
for(let user in users){
 if(hobby.test(users[user].interests)){
    userName.push(user);
 }
 }

return userName;
}
// console.log(solution1(users));

//Solution 2
function solution2(users){
    let userInGermany = [];
    for(let user in users){
        if(users[user].nationality === "Germany"){
            userInGermany.push(user);
        }
    }
    return userInGermany;
}
// console.log(solution2());


//Solution 3
function solution3(users){
    let masterDegreeUsers = [];
      // console.log(users);
    for(let user in users){
      if(users[user].qualification === "Masters")
       {
          masterDegreeUsers.push(user);  
       }
    }
  
    return masterDegreeUsers.length !== 0 ? masterDegreeUsers.toString() : "No such user with Masters Degree";
  }
//   console.log(solution3(users));

module.exports = {solution1,solution2,solution3}; 