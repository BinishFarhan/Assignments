// for loop // 
// syntax //
// for(var i = 3 ; i <= 9 ; i++){
//     console.log(i)
// }

// to print table

// var userInput = +prompt('Table of:' , '4' );
// var lastNum = +prompt('Upto which number do you need the multiplication table', '15');

// for(var i = 1 ; i <= lastNum ; i++){
//     document.write(userInput , ' x ' , " " , i , ' = ' ," ", userInput*i, "<br>" );
// }


// another method to print table using template literal

// var userInput = +prompt('Table of:' , '4' );
// var lastNum = +prompt('Upto which number do you need the multiplication table', '15');
//   for(var i = 1 ; i <= lastNum ; i= i+2){
//     var element = userInput*i
//       document.write(`${userInput} * ${i} = ${element} <br>`);
//   }

//   for(var i = 0 ; i <= 100 ; i= i+2){
//       document.write(i ,"<br>");
//   }

// var myWork = [];
// for(let i = 1; i <= 10; i++){
//     // var myWork = 'Lesson ' + i
//     myWork.push('Lesson ' + i)
// }
// console.log(myWork);


//==== for loop on array 

// var userInput = prompt('Enter your city');
// var cities = ['karachi' , 'islamabad' , 'lahore', 'muree', 'rawalpindi', 'quetta', 'sukkur'];
// var match = false;

// for(let i = 0 ; i < cities.length ; i++ ){
//     if(userInput.toLowerCase() === cities[i]){
//         match = true
//         alert('city found');
//         break       
//     }
// }

// if( match === false){
//     alert('not found');
// }


// var countries = ['Pakistan' , 'USA' , 'London'];
// var cities = ['Isalamabad' , 'Newyork' , 'Paris'];

// for(let i = 0 ; i < countries.length ; i++){
//     for(let j = 0 ; j < cities.length ; j++){
//         document.write(j ,") " , countries[i] , ' ' , cities[j] , '<br>');
//     }

// }
// console.log(countries[0], ' ' , cities[0])

// for(let i = 1 ; i <= 100 ; i= i+10){
//     for(j=i ; j < i+10 ; j++){
//         document.write(j , " ")

//     }

//     document.write( '<br>');
// }


// let myTable = [];
// let rows = [0,1,2,3,4]
// let coloumns = [0,1,2,3,4,5,6]
// for (let i = 0; i < rows.length; i++){
//  var tempTable = [];
//  for (let j = 0; j < coloumns.length; j++) {
//  tempTable.push[j];
//  }
//  myTable.push(tempTable);
// }

// console.table(myTable);

// var str = 'pakistan'
// // console.log(str[str.length-1])
// var flag = true


// for (let i = 0; i <= str.length / 2; i++) {
//      if (str[i] !== str[str.length - 1 - i]){
//         flag = false
//          console.log('it is not palindrom')
//         }
//         break;
//     }
        
//     if(flag){
//         console.log('it is palindrom')
//     }