
// Problem 1:

// Only Odds
// Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.

// Input Arrays	                    Expected Results
// [2, 4, 6, 8, 11, 20, 15, 22]     [11, 15]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	[1, 3, 5, 7, 9]
// [70, 42, 55, 81, 21, 91, 34]	    [55, 81, 21, 91]
// [2, 4, 6, 8, 10, 11, 12] 	    [11]

// Answer:
let arr1 = [2, 4, 6, 8, 11, 20, 15, 22]
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr3 = [70, 42, 55, 81, 21, 91, 34]
let arr4 = [2, 4, 6, 8, 10, 11, 12]


function oddNumbers (arr) {
    let newArray = []
    for (let i = arr.length-1;i > 0; i--) {
        if (arr[i] % 2 === 0) {
            arr.shift(arr[0])
        } else if (arr[i] % 2 === 1) {
            let num = arr.splice(arr[i],1)
            newArray.push(num)
        }
    }
    return newArray
}

console.log(oddNumbers(arr1))

/* I dont know why I'm having such a hard time with this one. I'm hoping this can be reviewed tomorrow? */



// Problem 2:

// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels. 

// Every other letter is considered a consonant.

// Hint: Define two variables that keep track of the number of consonants and vowels.

// Input Arrays	    Expected Results
// "hello"	        "hello has 3 consonants and 2 vowels"
// "ukelele"	    "ukelele has 3 consonants and 4 vowels"
// "awesome"	    "awesome has 3 consonants and 4 vowels"
// "onomonopia"	    "onomonopia has 4 consonants and 6 vowels"
// "textbook"	    "textbook has 5 consonants and 3 vowels"

/* Answer */

// function letters(word) {
//     let consonants = 0;
//     let vowels = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
//             vowels++
//         } else {
//             consonants++
//         }
//     }
//     let sentence = `${word} has ${consonants} consenants and ${vowels} vowels`
//     return sentence
// }

// console.log(letters("hello"))
// console.log(letters("ukelele"))
// console.log(letters("awesome"))
// console.log(letters("onomonopia"))
// console.log(letters("textbook"))

// Problem 3:

// Reverse Array
// With a for loop, create a JavaScript code that creates a new array in reverse order.

// Input Arrays	                Expected Results
// [1, 2, 3]	                [3, 2, 1]
// [1, 3, 5, 7, 9, 11]	        [11, 9, 7, 5, 3, 1]
// [20, 50, 30, 60, 200]	    [200, 60, 30, 50, 20]
// [1, -1, 2, -3, 5, -8, 13]	[13, -8, 5, -3, 2, -1, 1]

// Answer:

// function backwards(arr) {
//     let newArray = []
//     for(let i = arr.length - 1; i >= 0; i--) {
//         let num = arr[i]
//         newArray.push(num)
//     }
//     return newArray
// }

// console.log(backwards([1, 2, 3]))
// console.log(backwards([1, 3, 5, 7, 9, 11]))
// console.log(backwards([20, 50, 30, 60, 200]))
// console.log(backwards([1, -1, 2, -3, 5, -8, 13]))

// Problem 4:

// FizzBuzz
// Create a JavaScript code that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// let arr = [];

// for (let i = 1; i <= 100; i++) {
//     arr.push(i)
//     if (i % 3 === 0 && i % 5 === 0) {
//         arr.pop()
//         arr.push("FizzBuzz")
//     } else if (i % 5 === 0) {
//         arr.pop()
//         arr.push("Buzz")
//     } else if (i % 3 === 0) {
//         arr.pop()
//         arr.push("Fizz")
//     } 
// }

// console.log(arr)

