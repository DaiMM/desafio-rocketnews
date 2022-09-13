const submit = document.getElementById("sumbmit")
submit.addEventListener(onclick, "sendEmail")

function validateFieldEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendEmail(e) {
  e.preventDefault();
    
  const emailField = document.getElementById("email");
  const email = validateFieldEmail(emailField.value);

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
    
    const data =  { 
      "data" : 
      {"email" : `${email}`}  
    };

    fetch("http://localhost:1337/api/user-emails",
    {
      method:'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
      } )
    .then(response => response.json())
  }
  
}


