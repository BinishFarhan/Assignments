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

// var num = 8798798.4565
// var toStr = num.toString()
// var rep = toStr.replaceAll("." , "")
// console.log("🚀 ~ file: string-method.js:76 ~ rep:", rep)
// console.log("🚀 ~ file: string-method.js:75 ~ toStr:", toStr)
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

// //Q20
// var pass = prompt('enter password')
// var speChar = false
// var numAtStart = false
// document.write(`Enter Password : ${pass}<br>`)
// if (pass.length >= 6) {
//     for (let i = 0; i < pass.length; i++) {
//         var char = pass[i].charCodeAt()
//         if (!((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57))) {
//             speChar = true
//         }
//         if (!(speChar)) {
//             var char1 = pass.slice(0, 1).charCodeAt()
//             if (char1 >= 48 && char1 <= 57) {
//                 numAtStart = true
//             }
//         }
//     }
//     if (speChar) {
//             document.write(`Special characters are not allowed <br> `)
//         }
//     if (numAtStart) {
//             document.write(`Password can not begin with a number <br> `)
//         }
//     if (!(speChar) && !(numAtStart)) {
//         document.write('Strong Password')
//     }else{
//         document.write('Please enter a valid password')
//     }
// } else {
//     document.write(`Please enter atleast six characters <br>`)
// }




// Q20 // for password must contain alphabets and numbers.
// var pass = prompt('enter password')
// var alpha = ""
// var num = ""
// var numAtStart = false
// var validPass = true
// console.log(`Enter Password : ${pass}`)
// if (pass.length >= 6) {
//     for (let i = 0; i < pass.length; i++) {
//         var char = pass[i].charCodeAt()
//         if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122) ) {
//             // console.log(pass[i])
//             alpha += pass[i]
//         }
//         if((char >= 48 && char <= 57)){
//             // console.log(pass[i])
//             num += pass[i]
//             var char1 = pass.slice(0, 1).charCodeAt()
//             if (char1 >= 48 && char1 <= 57) {
//                 numAtStart = true
//             }
            
//         }
//     }

// }else{
//     console.log('Password must contain six character' )
// }


// // console.log(alpha)
// console.log(num)
// if(numAtStart){
//     console.log('Password can not begin with a number')
//    validPass = false
// }

// if(!(alpha && num)){
//     console.log('password must contain alphabets and numbers ' )
//      validPass = false
// }


// if(validPass){
//     console.log('Strong Password ')
// }
// if(!(validPass)){
//     // alert('Password is not valid')
//     console.log('Password is not valid')
//     // document.write('Password is not valid')
// }



//Q21 //Q22
// var str = "Binish Farooq"
// console.log(str.slice(-1))
// // var arr = str.split("")
// // console.log("🚀 ~ file: string-method.js:128 ~ arr:", arr)
// // // for(let i = 0; i < arr.length; i++){
// //     document.write(arr[i] , "<br>")
// // }

// //Q23 to count the occurence of any word in a text.
var str = "The quick brown fox jumps over the lazy dog"
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

// ===== by count method =====
// var strLower = str.toLowerCase()
// var word = "the"
// var count = 0
// for(let i =0; i < strLower.length; i++){
//     if(strLower.slice(i, i+ word.length) === word){
//         console.log('done')
//         count++
//     }
// }

// console.log(`there are ${count} occurences of the word ${word}`)

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
