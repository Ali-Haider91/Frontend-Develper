// Retrieving HTMl element from the DOM 
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// function to update class and message for error
function showError(input, message) {
    // Get the parent element 
    const formControl =input.parentElement;
    // overwrite the class add error
    formControl.className = "form-control error";
    // get the small for the error message
    const small = formControl.querySelector("small");
    // overwrite the text for small element usong the input meesage
    small.innerText = message;



}
//    function to update class for success

function showSuccess(input) {
    // Get the parent element 
    const formControl =input.parentElement;
    // overwrite the class add success
    formControl.className = "form-control success";

}

// EventListeners
// Create event listener for submit  
form.addEventListener("submit", function(e){
    // stop page reloading on submit
    e.preventDefault();

    // if username is empty
    if(username.value === ''){
        showError(username,'username is required')
    }else{
        showSuccess(username)
    }
// if email is empty
    if(email.value === ''){
        showError(email,'email is required')
    }else{
        showSuccess(email)
    }
// if password is empty
    if(password.value === ''){
        showError(password,'password is required')
    }else{
        showSuccess(password)
    }
// if password2 is empty
    if(password2.value === ''){
        showError(password2,'Confirm password is required')
    }else{
        showSuccess(password2)
    }
});

