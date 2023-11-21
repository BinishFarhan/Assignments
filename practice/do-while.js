// do while loop run always for 1 time then it check condition. 
//syntax
// var i = 0; // initilization of variable
// do { // order to run code inside it atleast 1 time.
//     console.log(i); // code
//     i++; // increament
// }while( i < 10) // now check condition.


// // in this case we put the condition that when i is less than 0 , run code.
// // although the condition is false but it will run atleast 1 time . 
// // so , it will console only 0 at this stage.
// var i = 0; 
// do { 
//     console.log(i); 
//     i++; 
// }while( i < 0) 


// in this example .. we use flag variables to match and stop the condition.
var myName = 'binish'
var flag = true
var i = 0
do{
    var name = prompt('enter your name').toLowerCase()
    if(name === myName){
        flag = false
        console.log("ok")
    }
    i++
    
}while(flag)

// define differ... used in script tag when placed into head section.
