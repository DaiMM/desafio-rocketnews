const submit = document.getElementById("submit");

submit.addEventListener("click", validateForm);

function validateFieldEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateForm(e) {
  e.preventDefault();
  
  const emailField = document.getElementById("email");
  let valid = true;
  
  const email = validateFieldEmail(emailField.value);
  console.log(email)
  
  if(!emailField.value || !email) {
    
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true); 
  }else{
    emailError.classList.remove("visible");
    emailField.classList.remove("invalid");
    emailField.value ="";
  }
  
  return valid;
}


