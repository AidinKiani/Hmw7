var usernameError = document.getElementById('username-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var phoneError = document.getElementById('phone-error');
var submitError = document.getElementById('submit-error');

function validateUsername(){
    var username = document.getElementById('contact-username').value;

    if(usernameError.length == 0){
        usernameError.innerHTML = 'username is required!';
        return false;
    }

    if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        usernameError.innerHTML = 'write another Username';
        return false;
    }

    usernameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(emailError.length == 0){
        emailError.innerHTML = 'email is required!';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid!';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'password is required!';
        return false;
    }

    if(password.length < 8) {  
        passwordError.innerHTML = 'Password length must be at least 8 characters';  
        return false;  
     }  
    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phoneError.length == 0){
        emailError.innerHTML = 'phone number is required!';
        return false;
    }

    if(!phone.match(/^\d{10}$/)){
        emailError.innerHTML = 'phone number invalid!';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateForm(){
    if(!validateUsername() || !validateEmail() || !validatePassword() || !validatePhone()){
        submitError.style.display = 'block';
        submitError.innerHTML('Please try again');
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }else{
        alert("Correct :)");
        return true;
    }
}
