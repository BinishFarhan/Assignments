// ====== Q1 ======>
// function abc() {

// }

// ====== Q2 ======>

// function displayDate() {
//     var date = new Date()
//     document.write(`Today is ${date}`)

// }
// displayDate()

//// ====== Q3 ======>
// function greet(a,b) {
//     alert(`Assalam-u-Alaikum ${a} ${b}`)

// }
// var firstName = prompt('Enter your First Name');
// var lastName = prompt('Enter your last name')
// greet(firstName,lastName)

// ====== Q4 ======>
// function add(a,b) {
//     return a + b

// }
// var num1 = +prompt('Enter first number')
// var num2 = +prompt('Enter Second number')
// var add = add(num1,num2)
// console.log("🚀 ~ file: function.js:31 ~ add:", add)

// ====== Q5 ======>
// function calculator(num1, operator, num2 ) {
//     switch (operator) {
//         case "+":
//             var opt = num1 + num2;
//             break;
//         case "-":
//             var opt = num1 - num2;
//             break;
//         case "*":
//             var opt = num1 * num2;
//             break;
//         case "/":
//             var opt = num1 / num2;
//             break;
//         case "%":
//             var opt = num1 % num2;
//             break;
//         default:
//             alert ('Please enter valid operation')
//     }
//     return opt;
// }

// var num1 = +prompt('Enter first number')
// var operator = prompt('Enter a Mathematical Operation you want!')
// var num2 = +prompt('Enter Second number')

// console.log(`The ${operator} of ${num1} & ${num2} is ${calculator(num1,operator,num2)}`)


// ====== Q6 ======>

// function squaresNum(a){
//     console.log(Math.pow(a,2))
// }
// squaresNum(2)


// ====== Q7 ======>
// function numFactorial(num){
//     if(num === 0 || num === 1){
//         return 1
//     }else if(num < 0){
//         return -1
//     }else{
//         for(let i = num-1; i >=1 ; i--){
//             console.log(i)
//             num *= i
//         }
//     }
//     return num;
// }
// console.log(numFactorial(5))

// ====== Q8 ======>
// function counting(a, b) {
//     for (let i = a; i <= b; i++) {
//         console.log(i)
//     }
// }

// var startingNum = prompt('Enter starting number of your counting')
// var endingNum = prompt('Enter ending number of your counting')
// console.log(counting(startingNum, endingNum))

// ====== Q9 ======>

// function calculateSquare(sqr){
//     return (Math.pow(sqr,2))
// }
// function calculateHypo(a,b){
//     var baseSqr = calculateSquare(a)
//     var perpendicularSqr = calculateSquare(b)
//     var HypotenusSqr = baseSqr + perpendicularSqr
//     console.log( `The HypotenusSqr of ${base} and ${perpendicular} is ${HypotenusSqr}`)
// }
// var base = prompt('Enter value of base')
// var perpendicular = prompt('Enter value of perpendicular')
// calculateHypo(base,perpendicular)


// ====== Q10 ======>
// function length(a){
//     return (`The length of ${a} is ${a.length}`)
// }
// document.write(length("string"))

// ====== Q11 ======>
// function largestNum(){
//     // console.log(arguments)
//     var largNum = 0
//     for(let i = 0; i < arguments.length; i++){
//         // console.log(arguments[i])
//         if(arguments[i] > largNum){
//             largNum =+ arguments[i]
//         }
//     }
//     return largNum;
// }

// console.log(largestNum(103,45386, 239,456,6789));

// ====== Q12 ======>
// function areaOfRectangle(width, height){
//     return width * height
// }
// var width = 45
// var height = 89
// console.log(`the area of rectange is ${areaOfRectangle(7,4)}`)
// console.log(`the area of rectange is ${areaOfRectangle(width,height)}`)

// ====== Q13 ======>
// function sortArr(a){
//     console.log(a.sort());

// }
// var newArr = ["Farooq" , "Farhan" , "Binish" ]
// var Arr = [34,56,78,34,52,75,9]
// sortArr(Arr)

// ====== Q14 ======>
// function sumArr(a){
//     var sum = 0
//     for(let i = 0; i < a.length; i++){
//         // console.log(a[i])
//         sum += a[i]
//     }
//     return  sum
// }
// var Arr = [34,56,78,34,52,75,9,2,89,56]
// console.log(sumArr(Arr))

// ====== Q15 ======>
var param = function inner() { 
       return typeof inner; 
}
alert(param()); 

// ====== Q16 ======>
// function powOfNum(a,b){
//     return Math.pow(a,b)
// }
// console.log(powOfNum(16,3))

// ====== Q17 ======>
// function dice(){
//     return  Math.ceil(Math.random()*6)

// }
// console.log(dice())

// ====== Q18 ======>
// function revNum(a) {
//     var numToString = a.toString()
//     var revNumb = " "
//     for (let i = numToString.length - 1; i >= 0; i--) {
//         revNumb += numToString[i]
//     }
//     return revNumb
// }
// var num = 56789
// console.log(revNum(num))

// // ====== Q19 ======>

// function palindrom(str){
//     var fwdStr = "" 
//     var bkwStr = ""
//     for(let i = 0; i < str.length; i++){
//         console.log(str[i])
//         fwdStr += str[i]
//     }
//     for(let i=str.length-1; i >=0; i--){
//         console.log(str[i])
//         bkwStr += str[i]
//     }
//     if(fwdStr === bkwStr){
//         console.log('its a palindrom')
//     }else{
//         console.log('its not a palindrom word')
//     }
// }
// var str = 'Binish'
// palindrom(str)


// function palindrom2(str) {
//     var flag = true
//     for (let i = 0; i <= str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             flag = false
//             console.log('it is not palindrom')
//         }
//         break;
//     }

//     if (flag) {
//         console.log('it is palindrom')
//     }
// }

// var str = 'madam'
// palindrom2(str)

// ====== Q20 ======>

// function capitalize(str){
//     var word = str.split(" ");
//     var capitalArr = []

//     for(let i = 0; i < word.length; i++){
//         var word1 = word[i]
//         var capital = word1.charAt(0).toUpperCase() + word1.slice(1) 
//         capitalArr.push(capital)
//     }

//     var newStr = capitalArr.join(" ")
//     return newStr
// }

// var string = "binish farhan"
// console.log(capitalize(string))


// ====== Q21 ======>
// function longestWord(str) {
//     var str = str.split(" ")
//     var longest = ""
//     var len = str[0].length

//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i].length)
//         if (str[i].length > len) {
//             len = str[i].length
//             longest = str[i]
//         }

//     }
//     return longest;

// }

// var str = "My country name is Pakistanii"
// console.log(longestWord(str))

// ====== Q22 ======>
// function vowels(str){
//     var vowels = ""
//     for(let i = 0; i < str.length; i++){
//         // console.log(str[i])
//         var char = str[i]
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             vowels += str[i]
//         }
//     }
//     return vowels;
// }

// var str = 'The quick brown fox'
// console.log(`There are ${vowels(str).length} vowels in "${str}"`)

