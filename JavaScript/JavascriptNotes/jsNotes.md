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

1. function declaration:
    made of function keyword followed by an obligatory function name, a list of params inside of parenthesis () and a pair of curly braces {} that delimits the body code... or in lamens terms is the part that holds how the damn thing works and what it returns
    ex:  function fnName(paramName){ 
        //does things with paramName then
        return  thingsParamNameAnswer;
    }
then is invoked by doing:   fnName(paramName);

2. function expression:
    determined by a function keyword followdd by and optional function name, list of params in () and then the {} that delimits the body code just like the before mentioned.
    ex: const count = function(array){
        return array.length;
    }
    ex2: const methods= {
    numbers: [1,5,8],
    sum: function(){
        return this.numbers.reduce(function(acc,num){
        return acc + num;
        });
    }
    }

    now using them
    count([5,7,8]); //answer is 3
    methods.sum(); // answer to this one is 14

3.Shorthand method:
    definition can be used in a method declaration on ogject literals and es5 classes. can define using a function name followed by the  list of params in () and then the curly braces {} that again delimits the body statements

    ex: const collection = {
        items:[],
        add(...items){
            this.items.push(...items);
        },
        get(index){
            return this.items[index];
        }
    };
    now using them
    collection.add("c", "java", "php");
    collenction.get(1)  //asnwer is "java" you know since arrays are zero indexed...

4. Arrow functions:
    is defined using a pair of () that contains the params followed by a fat arrow => and then {} that then delimits the body statement...
    ex: const absValue = (number) => {
        if (number < 0){
            return -number;
            // this returns the number multiplied by -1 making it then positive number
        }
        //outside the if returns the number since its positive already
        return number;
    }
    now using it
    absValue(-10); // answer is 10
    absValue(5);  // answer is 5

5.using good examples from https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/ to get specific and great info on explaining this info.. will be paraphrasing as well as taking exact examples from the article... will site once done here

6.
lets talk about Objects

lets talk about arrays

lets talk about sets

lets talk loops - all types

lets talk about state

lets talk about the dom and how to manipulate

lets talk about api calls -using different ways to call.. fetch, useEffect etc...

lets talk about setting up a backend (server)-there is a lot to this one... maybe link to video