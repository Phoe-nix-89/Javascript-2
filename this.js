const obj = {
    name : "John",
    greet : function() {
        console.log(`Hello my name is ${this.name}`);
    },
    greet2 : () => {
        console.log(`Hello my name is ${this.name}`);
    }
}

obj.greet() // this prints john as name is in its scope 
obj.greet2() // this prints undefined as arrow function do not have their own this keyword/method