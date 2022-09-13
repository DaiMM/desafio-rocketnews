const submit = document.getElementById("submit");
submit.addEventListener("click", validateForm);


function storeEmail(email) {
  let data =  { "data" : {"email" : `${email}`}  };

  fetch("http://localhost:1337/api/user-emails",{
    method:'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  } )
  .then(response => response.json())
}

function validateForm(e) {
  e.preventDefault();
    
  const emailField = document.getElementById("email");
    
  const re = /\S+@\S+\.\S+/;
  const isEmail =re.test(emailField.value);
   
  if(!emailField.value || !isEmail) {
        
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true); 
    
  }else{

    storeEmail(emailField.value);

    emailError.classList.remove("visible");
    emailField.classList.remove("invalid");
    emailField.value ="";
  }
}


