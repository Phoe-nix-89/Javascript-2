// function add(n1,n2,n3,n4,n5) {
//     return n1 + n2
// }
// console.log(add(4,5))


// let sum = (a,b) => {
//     return a+b
// }
// console.log(sum(10,20));

// let sum = (a,b) => a+b
// console.log(sum(10,20));

// let print = a => console.log(a)
// print(10)

// Diff btwn regular and arrow function is : arguments object is not there in arrow function

function print() {
    console.log(arguments);
}
print(1,2,3)

let prnt = () => console.log(arguments);
prnt(1,2,3)