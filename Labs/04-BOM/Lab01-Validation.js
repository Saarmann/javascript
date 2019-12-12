alert("Implement relevant code in Lab01-Validation.js file");

//Use classes (.error and .valid) defined in html style element as shown in example fields

//1) validation should occur after 

// 1.1) user enters data field by field 
// 1.1) user clicks on submit for all fields

//2) On validation failure message box should be displayed with relevant message

//3) error message should disappear when user clicks on it (use class .message-box-closed)

function validateInputName() {

    let input = document.getElementById("txtName").value;

    if (input == "") {

        document.getElementById("txtName").className = "error span6"; //peaks kasutama .add, st lisama klassile juurde error
        document.getElementById("txtError").style = "visibility: visible";

    } else {
        document.getElementById("txtName").className = "span6 valid";
        document.getElementById("txtError").style = "visibility: hidden";
    }
}

function validateAge() {

    let inputAge = document.getElementById("txtAge").value;
    let input = parseInt(inputAge);

    if (isNaN(input) || input < 0) {

        document.getElementById("txtAge").className = "error span6";
        document.getElementById("ageError").style = "visibility: visible";

    } else {
        document.getElementById("txtAge").className = "span6 valid";
        document.getElementById("ageError").style = "visibility: hidden";
    }
}

function validateEmail() {

    let input = document.getElementById("txtEmail").value;

    if (input == "") {

        document.getElementById("txtEmail").className = "error span6";
        document.getElementById("emailError").style = "visibility: visible";

    } else {
        document.getElementById("txtEmail").className = "span6 valid";
        document.getElementById("emailError").style = "visibility: hidden";
    }
}

function validatePassword() {

    let password = document.getElementById("txtPassword").value;

    if (password == "") {

        document.getElementById("txtPassword").className = "error span6";
        document.getElementById("passwordError").style = "visibility: visible";

    } else {
        document.getElementById("txtPassword").className = "span6 valid";
        document.getElementById("passwordError").style = "visibility: hidden";
    }
}

function validateRepeatPassword() {

    let password = document.getElementById("txtPassword").value;
    let repeatPassword = document.getElementById("txtRepeatPassword").value;


    if (repeatPassword == "" || repeatPassword != password) { // peab olema sama mis eelmine

        document.getElementById("txtRepeatPassword").className = "error span6";
        document.getElementById("repeatPasswordError").style = "visibility: visible";


    } else {
        document.getElementById("txtRepeatPassword").className = "span6 valid";
        document.getElementById("repeatPasswordError").style = "visibility: hidden";
    }
}



function validateId() {

    let inputAge = document.getElementById("txtIdCode").value;
    let input = parseInt(inputAge);

    if (isNaN(input)) {

        document.getElementById("txtIdCode").className = "error span6";
        document.getElementById("idCodeError").style = "visibility: visible";

    } else {
        document.getElementById("txtIdCode").className = "span6 valid";
        document.getElementById("idCodeError").style = "visibility: hidden";
    }
}

function validateEvenNumber() {

    let inputAge = document.getElementById("txtEvenNumber").value;
    let input = parseInt(inputAge);

    if (isNaN(input) || (input % 2 != 0)) {

        document.getElementById("txtEvenNumber").className = "error span6";
        document.getElementById("evenNumberError").style = "visibility: visible";

    } else {
        document.getElementById("txtEvenNumber").className = "span6 valid";
        document.getElementById("evenNumberError").style = "visibility: hidden";

    }

}

function validateCreditCard() {

    let inputAge = document.getElementById("txtCreditCard").value;
    let input = parseInt(inputAge);

    if (isNaN(input)) {

        document.getElementById("txtCreditCard").className = "error span6";
        document.getElementById("credidCardError").style = "visibility: visible";

    } else {
        document.getElementById("txtCreditCard").className = "span6 valid";
        document.getElementById("credidCardError").style = "visibility: hidden";
    }
}

function validateIsbn() {

    let inputAge = document.getElementById("txtIsbn").value;
    let input = parseInt(inputAge);

    if (isNaN(input) || inputAge.length != 13) {

        document.getElementById("txtIsbn").className = "error span6";
        document.getElementById("isBnError").style = "visibility: visible";

    } else {
        document.getElementById("txtIsbn").className = "span6 valid";
        document.getElementById("isBnError").style = "visibility: hidden";
    }
}

function saveButton (){

    document.getElementById("saveButton").href = "javascript:validateAll()";

}

function validateAll() {
  
    validateInputName();
    validateAge();
    validateEmail();
    validatePassword();
    validateRepeatPassword();
    validateId();
    validateEvenNumber();
    validateCreditCard();
    validateIsbn();

}
