//Group users based on their Programming language mentioned in their designation.
const {users} = require('./UserData');

// //Solution 1
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


//Solution 4
function solution4(users){
    let RegexPython = /\bPython\b/i;
    let RegexJs = /\bJavaScript\b/i;
    let RegexGolang = /\bGolang\b/i; 
  
    let userObj ={
     "JavaScriptDeveloper" : [],
     "GolangDeveloper" : [],
     "PythonDeveloper" : []
    };
  
    for(let user in users){
      if(RegexPython.test(users[user].desgination)){
         userObj["PythonDeveloper"].push(user);
      }
      if(RegexJs.test(users[user].desgination)){
          userObj["JavaScriptDeveloper"].push(user);
       }
       if(RegexGolang.test(users[user].desgination)){
          userObj["GolangDeveloper"].push(user);
       }
    }
  
  return userObj;
  }
//   console.log(solution4(users));
  

module.exports = {solution1,solution2,solution3,solution4}; 