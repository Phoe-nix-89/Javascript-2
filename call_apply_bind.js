function print(name) { // the original function
    // console.log(`Hello ${name}`)
}
print("Koustav")

print.city = "Asansol" // the object part of the function
// console.log(print.city)


// call method :-
const obj1 = {
    name : "Koustav",
    // greeting : function() {
    //     console.log(`Hello ${this.name}`);
    // }
}

const obj2 = {
    name : "Raj"
}

function greeting() {
    console.log(`Hello ${this.name}`);
}

// obj1.greeting()
// obj1.greeting.call(obj2) // used for function borrowing , changing the context of this keyword

greeting.call(obj1)
greeting.call(obj2)

// we can also pass multiple values as arguments in call method :-
function print(city,age) {
    console.log(`Hello ${this.name} from ${city} age ${age}`)
}
print.call(obj1,"Delhi",21) // the first value is used to change the reference of the this keyword and the others are multiple values in the call method
print.call(obj2,"gop",22)


// apply method :- // only diff is that in apply method we pass the multiple arguments in the form of an array as compared to call where we pass the values as , separated
print.apply(obj1, ["Delhi",21])
print.apply(obj2, ["Asansol",22])



// bind method :-

const user1 = {
    name : "Koustav",
    greet : function(city,age){
        console.log(`Hello ${this.name} from ${city} of ${age}`);
    }
}
const user2 = {
    name : "Raj"
}

const newf = user1.greet.bind(user2,"Asansol",21) // the bind method creates a new function whose this reference is fixed
newf()