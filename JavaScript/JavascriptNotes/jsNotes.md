this is for notes for javascript concepts


lets talk about the uses for var, let and const
var     :
scope-globally scoped when declared out side function
      functionally scoped when declared inside functions

can be redeclared and updated

will utilize hoisting -> ex....  
console.log(greater);
var greater = "say hello";

problem - too easy to change if not careful due to scoping

not conventional after ES5

let     :
now prefered to var
scope-block scoped          you know, inside the {} part of the function
                            can't access outside of the {} either
problem - hoisting is an issue - instead of undefined during hoisting
                                 it has a reference error

const     :
can't be redeclared or redifined
but if const is an object can manipulate the object properties/methods
ex:
const greeting={
    message: "say hi",
    times: 0
}
can change greeting.message = "yo! What Up?";

scope - block scoped -> inside {}

problem - works like let so isn't initialized and creates a reference error
          So must be initialized upon declaration

          


let talk about what a function is and the ways to write them


lets talk about Objects

lets talk about arrays

lets talk about sets

lets talk loops - all types

lets talk about state

lets talk about the dom and how to manipulate

lets talk about api calls -using different ways to call.. fetch, useEffect etc...

lets talk about setting up a backend (server)-there is a lot to this one... maybe link to video