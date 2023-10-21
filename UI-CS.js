// ===== practice exercise =====


//1. Write a program that takes input a name from user & greet the user.
// var userInp = prompt('Please Enter your name');
// alert(`Hi! ${userInp}`);

// Write a program to take input a number from user & display 
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by 
// default

// var table = prompt('Enter a number to print its multiplication table', 5)
// document.write(`${table} x 1 =  ${table*1} <br>`)
// document.write(`${table} x 2 =  ${table*2} <br>`)
// document.write(`${table} x 3 =  ${table*3} <br>`)
// document.write(`${table} x 4 =  ${table*4} <br>`)
// document.write(`${table} x 5 =  ${table*5} <br>`)
// document.write(`${table} x 6 =  ${table*6} <br>`)
// document.write(`${table} x 7 =  ${table*7} <br>`)
// document.write(`${table} x 8 =  ${table*8} <br>`)
// document.write(`${table} x 9 =  ${table*9} <br>`)
// document.write(`${table} x 10 =  ${table*10}`)

// 3.Write a program to take “city” name as input from user. If user 
// enters “Karachi”, welcome the user like this: “Welcome to city 
// of lights”

// var userInp1 = prompt('Enter your city name');
// if(userInp1.toLowerCase() === 'karachi'){
//     alert('Welcome to the city of lights');
// }else{
//     alert('error');
// }

// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is 
// female, give the message: Good Morning Ma’am

// var uI = prompt('Enter your gender');
// if(uI.toLowerCase() === 'male'){
//     alert('Good Morning Sir.');
// }else{
//     alert('Good Morning Mam');
// }

//5.  Write a program to take input color of road traffic signal from 
// the user & show the message according to this table
// var uI = prompt('Enter color of road traffic signal')
// if(uI.toLowerCase() === "red"){
//  alert('vehicles must stop')
// }
// else if(uI.toLowerCase() === "yellow"){
//     alert('vehicles should get ready to move ');

// }
// else if(uI.toLowerCase() === 'green'){
//     alert('vehicles can move down');
// }
// else{
//     alert('please enter valid color')
// }
//6. Write a program to take input max age & current age from 
// user. If the current age is less than or equal to max age, show 
// the message “You are welcome

// var maxage = 25;
// var uI = prompt('Please enter your age');
// if(uI <= maxage){
//     alert('You are welcome')
// }else{
//     alert('You are older than required age')
// }

//7. Write a program to take input remaining fuel in car (in litres) 
// from user. If the current fuel is less than 0.25litres, show the 
// message “Please refill the fuel in your car
// var remFeul = prompt('Remaining feul in car in litres');
// if(remFeul < 0.25){
//     alert('Please refill the fuel in car')
// }else{
//     alert('You have enough fuel')
// }

//8. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true"); // T
// }
// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true"); //False
// }
//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true"); // flase
// }
// if (c === 13){
//  alert("condition 2 is true"); // true
// }
// if (++c < 14){
//  alert("condition 3 is true"); //false
// }
// if(c === 14){
//  alert("condition 4 is true");//true
// }
  
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// } // true

//  if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }
//  if("car" < "cat"){
//  alert("car is smaller than cat");}

// 9. Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as 
// per following table: 

// var markObt = prompt('enter your marks in three subjects from 300')
// var totalMarks = 300
// var per = (markObt/totalMarks) * 100
// var grade;
// var remarks; 

// if(per >= 80){
//     grade = "A-one"
//     remarks = "Excellent!"
// }else if(per >= 70){
//     grade = "A"
//     remarks = "Good!"
// }else if(per >= 60){
//     grade = "B"
//     remarks = 'You need improvement'
// }else{
//     grade = "F"
//     remarks = "sorry"
// }

// document.write(`<h1> Marks Sheet</h1> <br>
// Total Marks: ${totalMarks} <br>
// Marks Obtained: ${markObt} <br>
// Percentage: ${per.toFixed()} % <br>
// Grade: ${grade} <br>
// Remarks: ${remarks}`);

//10.  Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Take input 
// from users, the following: 
// a. Name of item1 
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser

// var item1 = +prompt('Enter price of a bag');
// var orderedQtyI1= +prompt('Enter no. of bags');
// var item2 = +prompt('Enter price of a suit');
// var orderedQtyI2 = +prompt('Enter no. of suits');
// var shipCharges = 150;
// alert('Delivery charges are 150 ' );
// // var purchaseAmountOfItem1 = item1 * orderedQtyI1;
// // var purchaseAmountOfItem2 = item2 * orderedQtyI2;
// var bill = 1500
// alert(bill)
// if(bill >= 2000){
//     discount  = bill * 0.1
//     bill -= discount
//     alert(bill)
// } else{
//     alert(bill)
// }
// // bill = (bill >= 2000) ? bill * 0.90 : bill;
// alert(bill) 

// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”

// var secretNum = 3
// var uI = +prompt('Guess the secret number');
// if(uI == secretNum){
//     alert('Bingo! Correct answer');
// }else if(uI == secretNum + 1 || uI == secretNum - 1){
//     alert('Close enough to the correct answer')
// }else {
//     alert('Sorry')
// }


//12. Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number is 
// divisible by 3
// var num = prompt('enter a number to check wether it is divisible by 3')

// if(num % 3 == 0){
// alert('the number is divisible by 3')
// }else{
//     alert('the number is not divisible by 3')
// }

//13. Names & Total scores of two teams are taken as input. Write 
// a program that shows which team has won the game or show if 
// there is a tie. (Team A or Team B)

// var teamA = "Pakistan"
// var scoreA = 300
// var teamB = "England"
// var scoreB = 200
// if(scoreA > scoreB){
//     alert(`${teamA} won the game`)
// }else if(scoreA < scoreB){
//     alert(`${teamB} won the game`)
// }else{
//     alert('Tie')
// }

// 14. Take a string, a number and a Boolean in three variables. 
// Write a program that checks the type of variables & responds 
// accordingly. Like 

// var str = "Karachi"
// var num = 23
// var bool = true
// alert(`${str} is a ${typeof(str)}`)
// alert(`${num} is a ${typeof(num)}`)
// alert(`${bool} is a ${typeof(bool)}`)

//15.Write a program that checks whether the given input is an 
// even number or an odd number
// var inp = 3456
// if(inp % 2 == 0){
//     alert('even number')
// }else{
//     alert('Odd num')
// }


//16.Weather in Karachi nowadays is too cool, write a program 
// that takes temperature as input

// var inp = prompt('enter the temperature')
// if(inp > 40){
//     alert('It is too hot outside')
// }else if(inp > 30){
//     alert('the weather today is normal')
// }else if(inp > 20){
//     alert('todays weather is cool')
// }else if(inp > 10){
//     alert('OMG! todays weather is cool')
// }else{
//     alert('Freezing')
// }

//17.Write a program to create a calculator for +,-,*, / & % using if 
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

// var num = +prompt('enter value 1 ')
// var num2 = +prompt('enter value 2')
// var opt = prompt('enter operation value')
// if(opt === "+"){
//     var add = num + num2
//     alert(`${num} + ${num2} is ${add}`)
// }else if(opt === "-"){
//     var sub = num - num2
//     alert(`${num} - ${num2} is ${sub}`)
// }else if(opt === "*"){
//     var product = num * num2
//     alert(`${num} * ${num2} is ${product}`)
// }else if(opt === "/"){
//     var division = num / num2
//     alert(`${num} / ${num2} is ${division}`)
// }else if(opt === "%"){
//     var mod = num % num2
//     alert(`${num} % ${num2} is ${mod}`)

// }else if(opt === ""){
//     alert('Please provide values')
// }

// 18. Write a program that takes user input day name. If the day is 
// Monday, Tuesday, Wednesday, Thursday or Friday, then show 
// “It’s a week day”. If the day is Saturday then show “It’s 
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

// var day = prompt('enter a day')
// if(day.toLowerCase() === "monday" || day.toLowerCase() === "tuesday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "thursday" || day.toLowerCase() === "friday"){
//     alert('Its a week day')
// }else if(day.toLowerCase() === "saturday"){
//     alert('Its weekend')
// }else if(day.toLowerCase() === 'sunday'){
//     alert(' Yay! Its a holiday')
// }else{
//     alert('Provide proper day name')
// }

//19. Write a program that takes input user’s score, if it’s greater

// var score = prompt('enter score')
// if(score > 50){
//     alert('You are passed')
// }else{
//     alert('Try again');
// }
//20.Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater 
// number of 5 and 10 is 10.")

// var inp1 = prompt('Enter value 1');
// var inp2 = prompt('enter value 2');
// if(inp1 === inp2){
//     alert('They are equal')
// }else if(inp1 > inp2){
//     alert(`The greater number of ${inp1} and ${inp2} is ${inp1}`)
// }else if(inp2 > inp1){
//     alert(`The greater number of ${inp1} and ${inp2} is ${inp2}`)
// }

//22.Write a program to take input a number & tell whether it’s a positive or negative number
// var num = prompt('enter num')
// if(num < 0 ){
//     alert('negetive number');

// }else{
//     alert('positive num')
// }

//23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1 
// dog".
// var num = prompt('Enter a num')
// var noun = prompt('Enter a noun')
// if(num === 1){
//     alert(`${num} ${noun}`)
// }else{
//     alert(`${num} ${noun}s`)
// }