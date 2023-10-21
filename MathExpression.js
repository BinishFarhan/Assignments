// ======== practice exercises=====
//1. Write a program that take two numbers & add them in a new 
// variable. Show the result in your browser.
// var num1 = 500;
// var num2 = 200;
// var res = num1 + num2;
// alert(`Sum of ${num1} and ${num2} is ${res}`);

// // 2. Repeat task1 for subtraction, multiplication, division & 
// // modulus. E.g

// var res = num1 - num2;
// alert(`Difference of ${num1} and ${num2} is ${res}`);

// var res = num1 * num2;
// alert(`Product of ${num1} and ${num2} is ${res}`);

// var res = num1 / num2;
// alert(`result of division of ${num1} and ${num2} is ${res}`);

// var res = num1 % num2;
// alert(`remainder of ${num1} and ${num2} is ${res}`);


//3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// var num;

// // b. Show the value of variable in your browser like “Value 
// // after variable declaration is: ??”.
// alert(`Value after variable declartaion is: ${num}`)

// // c. Initialize the variable with some number.
// num = 3;

// // d. Show the value of variable in your browser like “Initial 
// // value: 3”.
// alert(`Initial Value: ${num}`);

// // e. Increment the variable.
// num++

// // f. Show the value of variable in your browser like “Value 
// // after increment is: 4”.
// alert(`value after increament is ${num}`);

// // g. Add 7 to the variable.
// num += 7

// // h. Show the value of variable in your browser like “Value 
// // after addition is: 11”.
// alert(`value after addition is ${num}`);

// // i. Decrement the variable.
// num--

// // j. Show the value of variable in your browser like “Value 
// // after decrement is: 10”.
// alert(`value after decreament is ${num}`);

// // k. Show the remainder after dividing the variable’s value by 
// // 3. Output : “The remainder is : 1
// num %= 3;
// alert(`The remainder is  ${num}`);

//4. Cost of one movie ticket is 600 PKR. Write a script to store 
// ticket price in a variable & calculate the cost of buying 5 tickets 
// to a movie. Example output
// var priceOf1Ticket = 600;
// var priceOf5Ticket = priceOf1Ticket * 5;
// alert(`Total cost to buy 5 tickets to a movie is ${priceOf5Ticket} PKR`)

//5. Write a script to display multiplication table of any number in 
// your browser. E.g;
// var table = 4;

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

//6. The Temperature Converter:
// var F = +prompt('Enter a value to convert from Farhenheit to centigrade');
// var C = (F - 32)*5/9;
// alert(`${F} Degree F is ${C} Degree C`)

// var Centigrade = +prompt('Enter a value to convert from Centigrade to farhenhiet');
// var Farhenhiet = (Centigrade * 9/5 ) + 32;
// alert(`${Centigrade} Degree C is ${Farhenhiet} Degree F`)

//7. Write a program to implement checkout process of a shopping 
// cart system for an e-commerce website. Store the following in 
// variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// var item1 = +prompt('Enter price of a bag');
// var orderedQtyI1= +prompt('Enter no. of bags');
// var item2 = +prompt('Enter price of a suit');
// var orderedQtyI2 = +prompt('Enter no. of suits');
// var shipCharges = 150;
// alert('Delivery charges are 150 ' );
// var purchaseAmountOfItem1 = item1 * orderedQtyI1;
// var purchaseAmountOfItem2 = item2 * orderedQtyI2;
// var total =purchaseAmountOfItem1 + purchaseAmountOfItem2 + shipCharges

// document.write("<h1>" + "Shopping Cart" + "</h1>");
// document.write("<p>" + " Price of bag is " +' '+ item1+ "</p>");
// document.write("<p>" +"No.of bags are " +' '+ orderedQtyI1+"</p>");
// document.write("<p>" + " Price of a suit is " +' '+ item2+ "</p>");
// document.write("<p>" +"No.of suits are " +' '+ orderedQtyI2 + "</p>");
// document.write("<p>" + " Shipping Charges " +' '+ shipCharges + "</p>");

// document.write("<p>" + "Total cost of your order is " +' '+ total +" "+ "PKR" +"</p>")

//8. Write a script to take total marks & marks obtained by a 
// student. Compute the percentage & show the result in your 
// browse

// var marksObtained = +prompt('Enter Obtained No from 1200');
// var totalMarks = 1200;
// var percentage = marksObtained / totalMarks * 100;

// document.write("<h1>"+"Marks Sheet" + "</h1>");
// document.write("<p>"+"Total marks :" +' '+ totalMarks + "</p>");
// document.write("<p>"+"Obatined Marks :" +' '+ marksObtained + "</p>");
// document.write("<p>"+"Percentage :" +' '+ percentage + "%" + "</p>");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script 
// to convert the total currency to Pakistani Rupees. Perform all 
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and 
// 1 Saudi Riyal = 28 Pakistani Rupee)

// var PKR = (10 * 104)+ (25 * 28) 
// document.write("<h1>"+"Currency in PKR" + "</h1>");
// document.write("<p>"+"Total currency in PKR :" +" "+ PKR + "</p>");

// 10. Write a program to initialize a variable with some number 
// and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 
// Perform all calculations in a single expression

//  var opt = 45 
//  var res = ((opt + 5) * 10) / 2;
//  alert(res);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN 
// years old”.

// var currentYear = 2023
// var birthYear = 1989;
// var currentAge = currentYear - birthYear
// alert(currentAge)

//  12. The Geometrizer: Calculate properties of a circle.
//  a. Store a radius into a variable.
//  var radius = 12

// // b. Calculate the circumference based on the radius, and 
// var circumference = 2 * 3.142 * radius 

// // Calculate the area based on the radius, and output “The area is 
// var area = 3.142 * radius * radius

// document.write(`<h1>The Geometrizer</h1> <br>
// Radius of a Circle: ${radius} <br>
// The circumference is: ${circumference} <br>
// The area is: ${area}`)

// 13. Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser:
// var a = 10
// document.write(`The value of a is: ${a}<br>`)
// ++a
// document.write(`The value of ++a is: ${a} <br> Now the value of a is: ${a}<br>`)
// a++
// document.write(`The value of a++ is: ${a} <br> Now the value of a is: ${a}<br>`)
// --a
// document.write(`The value of --a is: ${a} <br> Now the value of a is: ${a}<br>`)
// a--
// document.write(`The value of a-- is: ${a} <br> Now the value of a is: ${a}<br>`)

//14. What will be the output in variables a, b & result after 
// execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
//  console.log("🚀 ~ file: MathExpression.js:204 ~ result:", result)
// // Explain the output at each stage:
// //  --a;
// //  --a - --b;
// //  --a - --b + ++b;
// //  --a - --b + ++b + b--;

// var a = 2, b = 1
// var res = --a - --b + ++b + b--
// console.log("🚀 ~ file: MathExpression.js:212 ~ res:", res)
// //         1 - 0 + 1 + 1


// 15. The Lifetime Supply Calculator:
// Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
var fv8Snack = 'zinger';
document.write(`<h1>The Liftime Supply Calculator</h1> <br>`)
document.write(`Favourite snack: ${fv8Snack}<br>`)
// b. Store your current age into a variable.
var age = 34 ;
document.write(`Current age: ${age} <br>`)
// c. Store a maximum age into a variable.
var maxAge = 50 ;
document.write(`Estimated Max age: ${maxAge} <br>`)
// d. Store an estimated amount per day (as a number).
var estAmount = 12;
document.write(`Amount of snack per year: ${estAmount} <br>`)

// e. Calculate how many would you eat total for the rest of 
// your life.
var res = (maxAge - age) * estAmount
document.write(`you will need ${res} to last you untill the ripe old age of ${maxAge}`)

