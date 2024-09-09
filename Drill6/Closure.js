

function counterFactory() {
    let count = 0;
    return {
    increment(){
        count += 1;
        return count;
    } ,
    decrement(){
        count -= 1;
        return count;
    }
 };
}
let counter = counterFactory();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());


