alert("Implement relevant code in Lab01-Validation.js file");

//Use classes (.error and .valid) defined in html style element as shown in example fields

//1) validation should occur after 

// 1.1) user enters data field by field 
// 1.1) user clicks on submit for all fields

//2) On validation failure message box should be displayed with relevant message

//3) error message should disappear when user clicks on it (use class .message-box-closed)

function validateInputName () {
   
   let input = document.getElementById("txtName").value;

    if (input == "" ) {

       document.getElementById("txtName").className = "error span6";
       document.getElementById("txtError").style = "visibility: visible";  

        document.getElementById("txtName").appendChild(newSpan);

    } else {
        document.getElementById("txtName").className = "span6 valid";
}       document.getElementById("txtError").style = "visibility: hidden";
}

// function setSpan() {
    
//     let parent = document.getElementsByClassName("span 9");
//     let newSpan = document.createElement('span');
    
//     newSpan.setAttribute(´"class", "alert alert-error");
//     newSpan.innerHTML = "<strong>Error!</strong> Not a Number";

//     parent.insertBefore()

// }