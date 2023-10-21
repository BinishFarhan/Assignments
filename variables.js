// =========Practice Exercises=========>

//1. Declare a variable called username.
var username;

//2.  Declare a variable called myName & assign to it a string 
// that represents your Full Name.
var myName;
myName = 'Binish Farhan';

//3.  Write a script to 
// a. declare a JS variable, titled message
// b. assign “Hello World” to the variable message
// c. display the message in alert box 
var message;
message = 'Hello World!';
alert(message);

//4. Write a script to save student’s bio data in JS variables 
// and show the data in alert boxes. 
var name = 'Ali Khan';
var age = '17 years old';
var uni = 'SSUET'
var course = 'Mobile & cloud computing - Module A'

alert(name);
alert(age);
alert(uni);
alert(course);

//5.Write a script to display the following alert using one JS 
//variable.
var pizza = 'PIZZA \nPIZZ \nPIZ \nPI \nP';
alert(pizza)

//6.Fortune Teller: Why pay a fortuneteller when you can 
// just program your fortune yourself?
// Store the following into variables: number of children, 
// partner’s name, geographic location, and job title

var numOfChild = 0
var partner = 'Farhan Ahmed'
var geoLoc = 'Surjani'
var jobTitle = 'Developer'
alert(`You will be a ${jobTitle} in ${geoLoc}, and married to ${partner} with ${numOfChild} kids. ` )

//7. Declare a variable called email & assign to it a string that 
// represents your Email Address (e.g. abc@xyz.com). Show 
// the below mentioned message in an alert box. (Hint: use 
// string concatenation

var email = 'binishfarhan89@gmail.com'
alert('My email is' +" "+ email)

// 8. Declare a variable called book & give it the value “A 
// smarter way to learn JavaScript”. Display the following
// message in an alert box

var book = 'A smarter way to learn JavaScript'
alert('I am trying to learn from the book'+ " " + book);

// 9. Use the variables, declared in exercise 4 & show the details 
// giving meaning to data. Like “My name is Ali Khan”, “I am 
// 17 years old”, “I study in SSUET”, “I take Mobile & Cloud 
// Computing, Module A classes.

document.write(`"My name is ${name}" <br>
 "I am ${age} years old" <br>
 "I study in ${uni}" <br>
 "I take ${course}" <br>`)

 //10 Write a script to display this in browser through JS.
 document.write('Yay! I can write HTML content through JavaScript')

