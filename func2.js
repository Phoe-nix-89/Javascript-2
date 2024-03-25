// function greet(name) {
//     console.log(`Hello ${name}!`)
// }

// greet("Koustav")

// function greet(name = "Guest") { // default parameter for the function
//     console.log(`Hello ${name}!`)
// }

// greet()


// const arr = [1,2,3,4,5]
// function print() {
//     console.log(arr)
// }
// print(arr)


// function add(n1,n2,n3,n4,n5) {
//     return n1 + n2
// }
// console.log(add(4,5))


// function print({name,city}) { // values passed as a key value pair or as objects
//     console.log(`Hello ${name} from city ${city}`);
// }
// print({city:"Delhi",name:"John"})




// using arguments object :-
// function add() { // arguments - array like data str , allows use of unlimited no of arguments in a function
//     console.log(arguments);
//     const arr = Array.from(arguments)
//     let a = 0
//     for(let i=0;i<arr.length;i++){
//         a += arr[i]
//     }

//     console.log(a);
// }

// add(1,2,3)
// add(4,5,64,33,3)


// Using rest ... :-
function add(...numbers) { // ... converts the stream of data directly into an array
    let a = 0
    for(let i=0;i<numbers.length;i++){
        a += numbers[i]
    }
        
    console.log(a);
}

console.log(add(1,2,3))
console.log(add(1,2,3,4,5))