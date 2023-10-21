// =====PRACTICE EXERCIESE======>



//5. Write a program to check whether the given input number is 
// divisible by 3 or not by using Switch Case statements. Show a 
// message “Number is not divisible by 3” or “Number is divisible 
// by 3”.

// var num = prompt('enter number');

// switch (num ) {
//     case num  %:
//         alert(`${num} is divisible by 3`)
//         break;
//     default:
//         alert(`${num} is not divisible by 3`)
        
//     }

// 6. Write a program that takes a character(number or string) in a 
// variable & checks whether the given input is a number, 
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122 

// var char = prompt('Enter any character or number');
// var uppAlp = ""
// var lowAlp = ""
// var num = ""
// var spechar = ""


// if (char !== "") {
//     for (let i = 0; i < char.length; i++) {
//         if (char.charCodeAt(i) >= 65 && char.charCodeAt(i) <= 90) {
//             uppAlp += char[i]
//         } else if (char.charCodeAt(i) >= 97 && char.charCodeAt(i) <= 122) {
//             lowAlp += char[i]
//         } else if (char.charCodeAt(i) >= 48 && char.charCodeAt(i) <= 57) {
//             num += char[i]
//         } else {
//             spechar += char[i]
//         }
//     }
// } else {
//     console.log("Please provide a proper alphabet or number only")
// }
// if (uppAlp !== "" && (lowAlp !== "" || num !== "" || spechar !== "")) {
//     console.log('The given input is a mixture of characters')
// } else if (lowAlp !== "" && (num !== "" || spechar !== "")) {
//     console.log('The given input is a mixture of characters')
// } else if (num !== "" && spechar !== "") {
//     console.log('The given input is a mixture of characters')
// } else if (uppAlp !== "") {
//     console.log('the given input is uppercase letter')
// } else if (lowAlp !== "") {
//     console.log('the given input is lowercase letter')
// } else if (num !== "") {
//     console.log('the given input is number')
// } else if (spechar !== "") {
//     console.log('the given input is special char')
// }

// Write a program that takes a calendar year in YYYY format in 
// a variable. Check & notify the user whether it is a leap year or 
// not.

// var year = 2024
// var res = Math.floor(year % 400)

// if(res === 0){
//     console.log("leap year")
// }

//10.  Write a program that 
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give 
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect 
// password” otherwise.

// var corrpass = 'abcdef'
// var password = prompt('enter a password')
// if(password === ""){
//     alert('Please enter your password');
// }else if(corrpass === password){
//     alert('Correct! the password you entered matches the original password.')

// }else{
//     alert('Incorrect password')
// }

// 11. Write a program that adds an else statement to the following 
// script to display “You are not Fahad”
// var firstName = "Fahad";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }else{
//     document.write('You are not Fahad')
// }

// 12. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour > 18) {
//  greeting = "Good day";
//  }
//  else{
//  greeting = "Good evening";
//  } 
//  alert(greeting)

//13. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

// var inp1 = 46
// var inp2 = 46

// if(inp1 === inp2){
//     console.log('they are equal')

// }else{
//     console.log( "the higher no is " +" " + Math.max(inp1 , inp2))
// }

//14. Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero
// var num = -78
// if (num >= 0){
//     alert('positive no.')
// }else if(num === 0 ){
//     alert('its zero')

// }else {
//     alert('neg num')
// }

// Q 18
// var char = "a"
// var vowels = false
// if (char == "a" || char == "e") {
//     vowels = true
// }
// console.log(vowels)

// // Q 19
// var month = 2
// switch (month) {
//     case 1:
//         alert('jan')
//         break;
//     case 2:
//         alert('feb')
//         break;
//     default:
//         alert('no')
// }

// ternary opt
// var age = 20
// var allowed = (age < 18)? "too young" : "old enough"; 
// console.log("🚀 ~ file: if-else-switch.js:166 ~ allowed:", allowed)


