
let arr = []

// console.log(typeof arr);
console.log(Array.isArray(arr));


// using constructor :-
let fruits = new Array("apples","oranges","mangoes","bananas")
console.log(fruits)


// using array literal way:-
let mixed = Array("apple",10,12.5,true,{name:"John"})
console.log(mixed);


// delete keyword:
let array = [10,20,30,40]
console.log(array)
delete array[1] // delete keyword goes to the particular position and removes the value but it does not modify the array in any sense , and hence the array size remains the same
console.log(array)


// for of loop:-
let nums = [10,20,30,40]
for(let n of nums){
    console.log(`Value = ${n}`)
}