// Q1
//var arr = [];

//=== Question 2 
// var myArray = {
//     0: 'Apple',
//     1: 'kj'
// }

// == Question 3 ====

// var strngArray = ['karachi', 'islamabad' , 'lahore'];
// console.log("🚀 ~ file: array.js:107 ~ strngArray:", strngArray)

//====Q 4 ===

// var numArray = [25 , 50 , 75, 100];
// console.log("🚀 ~ file: array.js:111 ~ numArray:", numArray)

//===Q 5===

// var boolArray= [true , false];
// console.log("🚀 ~ file: array.js:115 ~ boolArray:", boolArray)

//== Q6 == 

// var mixedArray = ['Binish' , 'Farhan' , 2019 , true ];
// console.log("🚀 ~ file: array.js:122 ~ mixedArray:", mixedArray)

//==Q7 ===

// var mobNetwork = ['Ufone' , 'Jazz' , 'Telenor' , 'Zong'];

//== Q8 ==

// var eduArray = ['SSC' , 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'M.PHIL' , 'PHD'];
// console.log("Qualifications" , '\n' ,'1) ' ,  eduArray[0]
// , '\n' ,'2) ' ,  eduArray[1]
// , '\n' ,'3) ' ,  eduArray[2]
// , '\n' ,'4) ' ,  eduArray[3]
// , '\n' ,'5) ' ,  eduArray[4]
// , '\n' ,'6) ' ,  eduArray[5]
// , '\n' ,'7) ' ,  eduArray[6]
// , '\n' ,'8) ' ,  eduArray[7]);

//===Q9==

// var movies2015 = [];
// movies2015[0] = 'age of Ultron';
// movies2015.push('Spectre' , 'Jurassic World' , 'Inside Out')
// console.log("Top movies of 2015" 
// , '\n' ,'1) ' ,  movies2015[0]
// , '\n' ,'2) ' ,  movies2015[1]
// , '\n' ,'3) ' ,  movies2015[2]
// , '\n' ,'4) ' ,  movies2015[3]
// );

// console.log('Length of the Array: ' ,  movies2015.length)

//===Q10===

// var fv8Cars = ['Audi' , 'Volvo' , 'Ford' ,'Lamborghini'];
// console.log("🚀 First Index of the array: ", fv8Cars.indexOf('Audi'));
// console.log("🚀 Car at first index of the array: ", fv8Cars[0]);
// console.log("🚀 last Index of the array: ", fv8Cars.length - 1);
// console.log("🚀 Car at last Index of the array: ", fv8Cars[fv8Cars.length-1]);

// Q11
var stdName = ["hira", "faiza", "zoobia"];
var score = [345.45, 567.345, 890.345]
for(let i = 0; i <score.length; i++){
    score[i] = Math.round(score[i]/1000*100) + "%"
}
console.log("🚀 ~ file: array.js:72 ~ score:", score)
if(stdName.length === score.length){
    for (let i = 0; i < stdName.length; i++) {
        console.log(stdName[i]+ " " +score[i])
    }
}

//====Q12====
// var colorNames = ['blue' , 'red' , 'yellow'];
// document.write(' Array: ',colorNames, '<br>')
// // var color1 = prompt('Which color you want to add in begining');
// // colorNames.unshift(color1);
// // document.write(" Array with added color in begining: ",colorNames, '<br>');
// // var color2 = prompt('Which color you want to add to the end');
// // colorNames.push(color2);
// // document.write("Array with added color in end: ",colorNames , '<br>');
// // colorNames.push('Grey' , 'black');
// // document.write("Array with two added color in end: ",colorNames , '<br>');
// // colorNames.shift();
// // document.write(" Array with first color deleted: ",colorNames , '<br>');
// // colorNames.pop();
// // document.write(" Array with last color deleted: ",colorNames , '<br>');
// // var position = prompt('write the index on which you want to add color');
// // var color3 = prompt('write the color name on desired index')
// // colorNames.splice(position , 0 , color3)
// // document.write(" Array with added color on desired index: ",colorNames , '<br>');
// var positionDlt = prompt('write the index on which you want to dlt color');

// colorNames.splice(0 , positionDlt )
// document.write(" Array with added color on desired index: ",colorNames , '<br>');


//======Q13==

// var score = [ 'Audi' , 'Volvo' , 'Ford' ,'Lamborghini']

// document.write(score)
// var copied = score.slice(2,3)
// document.write(copied)




