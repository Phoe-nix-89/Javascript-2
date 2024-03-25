// function add(a,b) {
//     console.log(a+b);
// }

// add(10,20)

// let sum = function add(a,b) {
//     console.log(a+b)
// }

// console.log(sum(10,20));

function x(callback) {
    console.log("Hello")
    callback()
}

function y() {
    console.log("Bye")
}

x(y)