
const {users} = require('../User.js');

// const data = Object.keys(users);
// console.log(data);
// console.log(users);

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

module.exports = {solution1}; 