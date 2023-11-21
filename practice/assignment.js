
// ========QUESTION 1======


// var num = +prompt("Enter any number to check it's divisibility by 3");
// var division = num / 3
// var remainder = num % 3

// if(remainder === 0  ){
//     alert(division);
// }
// else{
//     alert('The number is not divisible by 3');
// }

// ======= QUESTION 2 ========
// var num = +prompt("Enter any number");
// var division = num / 2
// var remainder = num % 2

// if(remainder === 0  ){
//     alert("It's an even no");
// }
// else{
//     alert("It's an odd no.");
// }

// ======QUESTION 3 ======

// var age = +prompt("Enter your age")

// if(age > 18){
//     alert("Old enough");
// }
// else if(age == 0){
//     alert("Not provided");
// }
// else{
//     alert("Too young");
// }

// ====QUESTION 4 =======

// var name = prompt('Enter your name please!');
// if(name.toLowerCase() === "binish"){
//     alert('Wow! We have the same name. ');
// }

// ====QUESTION 5 =====

var num = +prompt('Enter any number');
var division = num / 3
var remainder = num % 3

switch (remainder ) {
    case 0:
        alert('This number is divisible by 3');
        break;
    case 1:
        alert('This number is not divisible by 3');

    
}
