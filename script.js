let form = document.querySelector('form');
let emailInput = document.querySelector('#email');
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let phoneInput = document.querySelector('#phone');
let message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!validateEmail(emailInput.value)) {
    message.innerHTML = 'Please enter a valid email address.';
    return;
  }

  if (!validatePassword(passwordInput.value)) {
    message.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase and one lowercase letter, and one number.';
    return;
  }
  if (!validateUsername(usernameInput.value)) {
    message.innerHTML = 'you can only use letters,_ and numbers in username.';
    return;
  }
  if (!validatePhone(phoneInput.value)) {
    message.innerHTML = 'phone number should be valid and contain 9 digits';
    return;
  }
  form.submit();
});

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function validateUsername(username) {
  let re = /^[A-Z0-9 _]*$/;
  return re.test(password);
}
function validatePassword(password) {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(password);
}

function validatePhone(phone) {
  let re = /^\d{10}$/;
  return re.test(phone);
}