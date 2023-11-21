function submitForm() {
    var name = document.getElementById("name")
    var email = document.getElementById('email')
    // when we click on submit button it will show empty console to validate it that input fields only submit when they hav some inputs.
        if (name.value.trim() && email.value.trim()) { // when we press space only it will take it as true and will go with if block.
            // to validate for space we use trim method.
            // trim method removes space in start and end. (not in between)
            // this is good method to validate text field .. 
        console.log(name.value)
        console.log(email.value)

        // to make input fields empty after submission . 
        name.value = " ";
        email.value = ' ';

    }else{
        console.log('please enter value')
    }
}