var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var loginBtn= document.getElementById("loginBtn");
var loginForm=document.getElementById("loginForm");
var emailError = document.getElementsByClassName("Email-Error")[0];
var passwordError = document.getElementsByClassName("Password-Error")[0];
 var loginErrorMsg = document.getElementsByClassName("loginErrorMsg")[0];
 var emailSp=document.getElementsByClassName("email-error")[0];
 var passwordSp=document.getElementsByClassName("password-error")[0];

 


loginForm.addEventListener("submit",function(e){

 if(loginEmail.value!=="" &&loginPass.value !==""){
    if(loginEmail.value !== localStorage.getItem("email")||loginPass.value !==localStorage.getItem("password")){
         e.preventDefault();
         loginErrorMsg.style.display="flex";
         loginErrorMsg.textContent="Incorrect email and/or password";
         emailError.style.display="none";
         passwordError.style.display="none";
    }
 }
    
   if(loginEmail.value.trim()===""){
    e.preventDefault();
    emailError.style.display="flex";
    emailSp.innerHTML="This field is required";
    loginErrorMsg.style.display="none";
    
   }
   if(loginPass.value.trim()===""){
    e.preventDefault();
   passwordError.style.display="flex";
   passwordSp.textContent="This field is required";
   loginErrorMsg.style.display="none";
}

  if(loginEmail.value.trim()===""&&loginPass.value.trim()!==""){
    e.preventDefault();
    emailError.style.display="flex";
    emailSp.innerHTML="This field is required";
    loginErrorMsg.style.display="none";
    loginErrorMsg.style.display="none";
    
   }
   if(loginPass.value.trim()===""&&loginEmail.value.trim()!==""){
    e.preventDefault();
   passwordError.style.display="flex";
   passwordSp.textContent="This field is required";
   loginErrorMsg.style.display="none";
   emailError.style.display="none";
  }
   console.log(loginEmail.value === localStorage.getItem("email"));
   console.log(loginPass.value ===localStorage.getItem("password"))
  if(loginEmail.value.trim()=== localStorage.getItem("email")&&loginPass.value.trim()===localStorage.getItem("password")){
        e.preventDefault();
        loginErrorMsg.style.display="none";
        emailError.style.display="none";
        window.location.replace("quizes.html");

  }
  
});
 

