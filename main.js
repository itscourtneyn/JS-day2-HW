
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(`${person3.pizza[0]} pizza`)
console.log(`${person3.pizza[1]} pizza`)
console.log(person3.tacos)
console.log(person3.burgers)
console.log(`${person3.ice_cream[0]} ice cream`)
console.log(`${person3.ice_cream[1]} ice cream`)
console.log(`${person3.ice_cream[2]} ice cream`)
console.log(`${person3.shakes[0].oberwise} shakes from Oberwise.`)
console.log(`${person3.shakes[0].dunkin} shakes from Dunkin.`)
console.log(`${person3.shakes[0].culvers} shakes from Culvers.`)
console.log(`${person3.shakes[0].mcDonalds}s from McDonalds.`)
console.log(`${person3.shakes[0].cupids_candies} shakes from Cupids Candies.`)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name; 
    this.age = age;

    
    // A method inside of a JS Prototype
    this.printInfo = () => {
        console.log(`${this.name} is  ${this.age} years old.`)
    }

    this.incrementAge = () => {
        this.age += 1;
      };
}

let person1 = new Person('Courtney', 31)
person1.printInfo()

let person2 = new Person('Blake', 30)
person2.printInfo()

person1.incrementAge()
person1.incrementAge()
person1.incrementAge()

person1.printInfo()








// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let stringLength = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            resolve(true) 
        } else {
            reject(false)
        }
    })
}

stringLength('afoieh38457h')

.then( (result) => {
    console.log(`Big word`)
})
.catch( (error) => {
    console.log(`Small Number`)
})


//CODEWARS:

//1:
function reverseList(list1) {
    list1.reverse()
    return list1
  }


  //2:
  
