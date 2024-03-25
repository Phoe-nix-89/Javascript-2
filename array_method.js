// let arr = [1,2,3,4]
// console.log(arr)
// arr.push(5)
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)
// arr.unshift(0)
// console.log(arr)


// console.log(arr.slice(1,3))


//let nums = [1,2,3,4,5,6,7]
// nums.splice(1,3) // delete
// nums.splice(1,3,8,9,10) // delete and insertion
//nums.splice(2,0,11,12,13) // here deletecount is 0 hence no elem is removed and hence just insertion of elements take place
//console.log(nums);



// let arr = [1,2,3]

// console.log(arr.concat([4,5]));
// console.log(arr.concat([4,5],6,7));
// console.log(arr.concat([4,5],[6,7]));


// [10,20,30].forEach(function(item,index,array){
//     console.log(`${item} is at index ${index} in ${array}`);
// })


// let arr = [1,10,false]
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(100));
// console.log(arr.includes(1));
// console.log(arr.includes(false));
// console.log(arr.includes(100));


// let users = [
//     {id:1 , name:"Raj"},
//     {id:2 , name:"Taj"},
//     {id:3 , name:"Maj"}
// ]
// let user = users.find(function(item,index,array) {
//     return item.id == 1
// })
// console.log(user)



// let arr = [1,2,3,4]
// arr.reverse()
// console.log(arr);


// let arr = 'Raj, Koustav, Mil'
// let n = arr.split(', ')
// console.log(n)


let names = 'new, on, two'
let arr = names.split(', ')
let str = arr.join('')
console.log(str);