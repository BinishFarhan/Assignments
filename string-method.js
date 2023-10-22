// //Q1
// var firstName = "binish"
// var lastName = "farhan"
// var fullName = firstName + " " + lastName
// console.log("🚀 ~ file: string-method.js:5 ~ fullName:", fullName)
// console.log(firstName.concat(` ${lastName}`))
// //Q2

// // var userInp = prompt('Enter you favourite mobile phone model');
// // console.log(`My fv8 phone is ${userInp}`)
// // console.log(`length of string is : ${userInp.length}`)

// // Q3
// var name = "Pakistani"
// console.log(`String : ${name}`)
// console.log(`index of "n" : ${name.indexOf("n")}`)

// //Q4
// var str = "Hello World"
// console.log(`string ${str}`);
// console.log(`Last index of "l" : ${str.lastIndexOf("l")}` )

// // //Q5
// // var str1 = "Pakistani"
// // console.log(`string ${str1}`);
// // console.log(`Character at index 3 : ${str1.charAt(3)}` )

// // //Q7
// // var city = "Hyderabad"
// // console.log("🚀 ~ file: string-method.js:30 ~ city:", city)
// // console.log(`After replacement : ${city.replace("Hyder", "Islam")}`)

// // //Q8
// // var message = "“Ali and Sami are best friends. They play cricket and football together.”"
// // var replace = message.replaceAll("and" , "&")
// // console.log("🚀 Message:"+" "+ message)
// // console.log("🚀 After replacement"+" "+ replace)

// //Q9
// var str = "472"
// console.log(`Value : ${str}`)
// console.log(`Type : ${typeof(str)}`)
// var strToNum = Number(str)
// console.log(`Value : ${strToNum}`)
// console.log(`Type : ${typeof(strToNum)}`)

// //Q10
// var str = "www.facebook.com"
// var domain = str.slice(4)
// console.log("🚀 URL:", str)
// console.log("🚀 Domain:", domain)

// //Q11 //Q12
// var uI = "Peanuts"
// console.log(`User Input: ${uI}`)
// console.log(`Uppe Case: ${uI.toUpperCase()}`)
// console.log(`Uppe Case: ${uI.toLowerCase()}`)

//Q13

// var uI = "javascript"

// var capLet = uI.slice(0,1).toUpperCase()
// console.log("🚀 ~ file: string-method.js:62 ~ capLet:", capLet)
// var newWord = capLet + uI.slice(1)
// console.log("🚀 ~ file: string-method.js:64 ~ newWord:", newWord)
//    ====== OR ======
// var titleCase = uI.charAt(0).toUpperCase() + uI.slice(1)
// console.log("🚀 ~ file: string-method.js:62 ~ titleCase:", titleCase)

//Q14

// var num = 35.36
// var toStr = num.toString()
// var rdec = toStr.slice(0,2) + toStr.slice(3)
// console.log("Number:", toStr)
// console.log("Result:", rdec)

//Q15 //Q16
// var a = "3";  b = "3";
// var x = a + b
// console.log("a+b is", x)
// var y = a - b
// console.log("a-b is", y)

//Q17
// var uI = prompt('enter your name');

// for(let i = 0; i < uI.length; i++){
//     if(uI.charCodeAt(i) === 33 || uI.charCodeAt(i) === 44 || uI.charCodeAt(i) === 46 || uI.charCodeAt(i) === 64){
//         alert('please provide a valid username')
//     }
// }

//Q18
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var uI = prompt('Welcome to ABC bakery! What do you want to order Sir?')
// var flag = true

// for(let i = 0; i < A.length; i++){
//     if(uI.toLowerCase().trim() === A[i]){
//         flag = false
//         document.write(`${A[i]} is availabe at index ${[i]} in our bakery`)
//     }
// }
// if(flag){
//     document.write(`we are sorry ${uI} is not available in bakery`)
// }


//Q19
// var str1 = "A"
// var str2 = "a"
// if(str1 > str2){
//     alert(`${str1} is greater than ${str2}`)
// }else if(str2 > str1){
//     alert(`yuppy !${str2} is greater than ${str1}`)
// }else{
//     alert("Both are equal")
// }

//Q20
// var num = "binish"
// var char = num.slice(0,1).charCodeAt()
// console.log("🚀 ~ file: string-method.js:125 ~ char:", char)

// if(char >! 48 || char <! 57){
//     console.log('ok')
// }

var pass = prompt('enter password')
var speChar = false
var numAtStart = false
document.write(`Enter Password : ${pass}<br>`)
if (pass.length > 6) {
    for (let i = 0; i < pass.length; i++) {
        var char = pass[i].charCodeAt()
        if (!((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57))) {
            speChar = true
        }
        if (!(speChar)) {
            var char1 = pass.slice(0, 1).charCodeAt()
            if (char1 >= 48 && char1 <= 57) {
                numAtStart = true
            }

        }
    }

} else {
    document.write(`Please enter atleast six characters <br>`)
}
if (true) {
    if (speChar) {
        document.write(`Special characters are not allowed <br> `)
    }
    if (numAtStart) {
        document.write(`Password can not begin with a number <br> `)
    }
    
    
}
if (!(speChar) && !(numAtStart)) {
    document.write('Strong Password')
}

//Q21 //Q22
// var str = "Binish Farooq"
// console.log(str.slice(-1))
// // var arr = str.split("")
// // console.log("🚀 ~ file: string-method.js:128 ~ arr:", arr)
// // // for(let i = 0; i < arr.length; i++){
// //     document.write(arr[i] , "<br>")
// // }

// //Q23 to count the occurence of any word in a text.
// var str = "The quick brown fox jumps over the lazy dog"
// var wordToSearch = "the"
// var len = wordToSearch.length
// var res = " "
// for(let i = 0; i < str.length; i++){
//     if(str.slice(i,i+len).toLowerCase() === wordToSearch ){
//         res++
//     }
// }

// console.log("Text:", str)
// console.log(`There are ${res} occurences of the word '${wordToSearch}'`)

//Q24
// var cntry = "Pakistan"
// var len = cntry.length
// var vowels = " "
// var consonants = " "

// for(let i = 0; i < cntry.length; i++){
//     var char = cntry.charAt(i).toLowerCase()
//     if(char >= "a" && char <= "z"){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
//             vowels++

//     }else{
//         consonants++
//     }
//     }
// }

// console.log("consonants ===> "+consonants)
// console.log("vowels ===> " + vowels)


// var grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// for (var i = 0; i < grid.length; i++) {
//     for (var j = 0; j < grid[i].length; j++) {
//         console.log(grid[i][j]);
//     }
// }

// var array1 = [1, 2];
// var array2 = ['a', 'b'];
// for (var i = 0; i < array1.length; i++) {
//     for (var j = 0; j < array2.length; j++) {
//         console.log(array1[i] + array2[j]);
// //     }
// // }


// for (var i = 1; i <= 4; i++) {
//     // Create an empty string for the current row
//     var rowPattern = "";
//     // console.log(i)

//     // Use an inner loop to generate the numbers in the current row
//     for (var j = 1; j <= i; j++) {
//         // Append the current number to the rowPattern
//         rowPattern += j + " "
//     }

//     // // Display the rowPattern for the current row
//     console.log(rowPattern);
// }


// // Call the function with the number of rows you want in the pattern
// createNumberPattern(5); // You can change the argument to create patterns with different numbers of rows



// var arr = ["sun" , "mon" , "tues"];
// var uI = prompt('Enter your birthday');
// var flag = "yes"

// for(let i = 0; i < arr.length; i++){
//     if(uI === arr[i]){
//         flag = "no"
//         console.log("Youe birthday is in our data")
//         break;
//     }
// }
// if(flag === "yes"){
//     console.log('no day')
// }


// var arr = [23 ,45 , 67, 12, 89,100];
// var minNum = arr[0] // 23
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < minNum){
//         minNum = arr[i]
//     }

// }
// console.log(minNum)



// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// for(let i = 0; i < students.length; i++){
//     for(let j = 0 ; j < scores.length; j++){
//         conso
//     }
// }

// // var uI = prompt('enter a number')
// // var sum = "22" - 2
// console.log("🚀 ~ file: string-method.js:246 ~ sum:", sum)