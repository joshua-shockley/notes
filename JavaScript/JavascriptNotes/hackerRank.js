// this is to place some of the HackerRank code so that i can review it without being online and so I can save it for learning purposes




// In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return this.w * this.h;

}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.w = s;
        this.h = s;
    };
}



///In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

// Task

// Complete the reverseString function; it has one parameter, . You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
// Input Format

// Locked stub code in the editor reads variable  from stdin and passes it to the function.

// Output Format

// You must write two print statements using console.log():

// Print the contents of a caught exception's  on a new line. If no exception was thrown, this line should not be printed.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
// Sample Input 0

// "1234"
// Sample Output 0

// 4321
// Explanation 0

//  is a string type, so it can be reversed without throwing an exception. Thus, we print the reversed value, 4321, as our answer.

// Sample Input 1

// Number(1234)
// Sample Output 1

// s.split is not a function
// 1234
// Explanation 1

//  is not a string type, so it can't be reversed using string functions. 
//  When we try to reverse it anyway, it throws an exception. 
//  We then catch the exception and print its , which is s.split is not a function. 
//  Next, we finally print  which, because it wasn't able to be reversed, is Number(1234).
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let newStr;
    try {
        let splitUp = s.split("");
        let fliped = splitUp.reverse();
        let backTogether = fliped.join("");
        newStr = backTogether;
        console.log(newStr);
    }
    catch{
        let message = 's.split is not a function\n' + s;
        console.log(message)
    }
}


///
//this is a really easy one

// * Complete the isPositive function.
// * If 'a' is positive, return "YES".
// * If 'a' is 0, throw an Error with the message "Zero Error"
// * If 'a' is negative, throw an Error with the message "Negative Error"
// */
function isPositive(a) {
    let pStr = "YES";
    let zStr = "Zero Error";
    let nStr = "Negative Error";
    if (a > 0) {
        return pStr;
    }
    if (a === 0) {
        return zStr;
    }
    if (a < 0) {
        return nStr;
    }
}


///
// In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

// Constraints

// The length of string  is  .
// String  consists of lowercase letters only (i.e., [a-z]).
// Output Format

// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.

// Sample Input 0

// bcd
// Sample Output 0

// false
// Explanation 0

// This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

// Sample Input 1

// abcd
// Sample Output 1

// false
// Explanation 1

// This string ends in a consonant, so it cannot start and end with the same vowel.

// Sample Input 2

// abcda
// Sample Output 2

// true
// Explanation 2

// This string starts and ends with the same vowel (a).

// Sample Input 3

// abcdo
// Sample Output 3

// false
// Explanation 3

// This string starts with the vowel a but ends in the vowel o.
function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou])[a-z]*\1$/;

    /*
     * Do not remove the return statement
     */
    return re;
}
// more on this on at https://www.hackerrank.com/challenges/js10-regexp-1/forum

//// the crazy factorial is next...
// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task

// Implement a function named factorial that has one parameter: an integer, .
//  It must return the value of  (i.e.,  factorial).

// Input Format

// Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

// Constraints
// 1 <= n <= 0
// Output Format

// The function must return the value of n!.

// Sample Input 0

// 4
// Sample Output 0

// 24
// Explanation 0

// We return the value of  4!=4 * 3 * 2 * 1 = 24.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    };
}

////
// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, 
// if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. 
// Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// The first line contains two space-separated integers  and , the size of  and 
// the number of left rotations you must perform.
// The second line contains  space-separated integers .

// Constraints
// for constraints see  https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
// Output Format

// Print a single line of  space-separated integers denoting the final state 
// of the array after performing  left rotations.

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// When we perform d=4 left rotations, the array undergoes the following sequence of changes:
// 
// 1,2,3,4,5 => 2,3,4,5,1 => 3,4,5,1,2 => 4,5,1,2,3 => 5,1,2,3,4

// Complete the rotLeft function below.
function rotLeft(a, d) {//a is array of ints, d is how many times to move
    // need to move from index 0 to end of a,  d amount of times
    //use while loop with indexed counting down from "d" to quit at 0
    let brray = [];
    let count = d;
    let str = "";
    brray.push(a[d]);
    count += 1;
    while (count !== d) {

        if (count === a.length) {
            count = 0;
            brray.push(a[count]);
            count++;
        } else {
            brray.push(a[count])
            count++
        }

    }
    // for(let i=0; i<brray.length; i++){
    //     str+= brray[i] + " ";
    // // console.log(str);
    // //needs to be returned as a single line single spaced string of the new array orientation.
    // }
    // console.log(str)
    return brray;
}


////
// this one is really easy
// Given an array of integers, find the sum of its elements.

// For example, if the array  ar = [1,2,3], so return 6.

// Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers
function simpleArraySum(ar) {
    let array = ar;
    let theSum = 0;
    for (let i = 0; i < array.length; i++) {
        theSum = theSum + array[i];
    }
    console.log(theSum);
    return theSum;


}


// another easier one
// compare the values in the two arrays for points
// return the score as a 2
function compareTriplets(a, b) {
    let score = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            score[0]++;
        }
        else if (a[i] !== b[i]) {
            score[1]++;
        }
    }
    return score;

}
