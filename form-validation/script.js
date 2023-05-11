const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  let isValid = true;

  //get values from inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //show error & add error class
    setErrorFor(username, "Username cannot be blank");
    isValid = false;
  } else if (usernameValue.length < 5) {
    setErrorFor(username, "Username is too short (minimum is 5 characters)");
    isValid = false;
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    isValid = false;
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    isValid = false;
  } else if (passwordValue.length < 5) {
    setErrorFor(password, "Password is too short (minimum is 5 characters)");
    isValid = false;
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password check cannot be blank");
    isValid = false;
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do not match");
    isValid = false;
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password is too short (minimum is 8 characters)");
    isValid = false;
  } else if (!/[A-Z]/.test(passwordValue)) {
    setErrorFor(password, "Password needs at least one uppercase letter");
    isValid = false;
  } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordValue)) {
    setErrorFor(password, "Password need at least one special character");
    isValid = false;
  } else {
    setSuccessFor(password2);
  }

  //last success message
  const btn = document.querySelector("button");
  if (isValid) {
    btn.innerHTML = "Validation Successful ✔";
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  //add error msg inside small
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  //select the div .form-control
  const formControl = input.parentElement;

  //add sucess class
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
