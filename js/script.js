 
 
 
 ///////////sign up form validation 
var signUpForm = document.getElementById("signUpForm");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var reType = document.getElementById("reType");
var signUpBtn = document.getElementById("SignUp");
var fnameError = document.getElementsByClassName("fname-Error")[0];
var lnameError = document.getElementsByClassName("lname-error")[0];
var retypeError = document.getElementsByClassName("retype-error")[0];
var emailError = document.getElementsByClassName("email-error")[0];
var passwordError = document.getElementsByClassName("password-error")[0];
 
var fnameMsg = document.getElementsByClassName("fnameMsg")[0];
var lnameMsg = document.getElementsByClassName("lnameMsg")[0];
var emailMsg = document.getElementsByClassName("emailMsg")[0];
var passwordMsg = document.getElementsByClassName("passwordMsg")[0];
var retypeMsg = document.getElementsByClassName("retypeMsg")[0];
 console.log(retypeMsg);
 console.log(retypeError);
 var nameRegex=/^[A-Za-z]+$/
 var emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 
 
 function fnameValidation(){
    if(!nameRegex.test(fname.value.trim())&&fname.value!==""){
      fname.style.borderColor="red";
      fnameError.style.display="flex";
      fnameMsg.innerHTML="Please enter a valid first name";
    }
    if(nameRegex.test(fname.value.trim())){
     fname.style.borderColor="";
     fnameError.style.display="none";
     fnameMsg.innerHTML="";
    }
     if(fname.value.trim()===""){
     fname.style.borderColor="red";
     fnameError.style.display="flex";
     fnameMsg.innerHTML="This field is required";
    }
  }
  
  function lnameValidation(){
    if(!nameRegex.test(lname.value.trim())&&lname.value.trim()!==""){
      lname.style.borderColor="red";
      lnameError.style.display="flex";
      lnameMsg.innerHTML="Please enter a valid last name";
    }
     if(nameRegex.test(lname.value.trim())){
       lname.style.borderColor="";
       lnameError.style.display="none";
       lnameMsg.innerHTML="";
    }
     if(lname.value.trim()==""){
       lname.style.borderColor="red";
       lnameError.style.display="flex";
       lnameMsg.innerHTML="This field is required";
    }
  }
  
  function emailValidation(){
    if(!emailRegex.test(email.value.trim())&&email.value.trim()!==""){
      email.style.borderColor="red";
      emailError.style.display="flex";
      emailMsg.innerHTML="Please enter a valid last name";
    }
    if(emailRegex.test(email.value.trim())){
      email.style.borderColor="";
      emailError.style.display="none";
      emailMsg.innerHTML="";
   }
    if(email.value.trim()==""){
      email.style.borderColor="red";
      emailError.style.display="flex";
      emailMsg.innerHTML="This field is required";
   }
  }
   function passwordValidation(){
   
    if(password.value.length<8&&password.value.trim()!==""){
      password.style.borderColor="red";
      passwordError.style.display="flex";
      passwordMsg.innerHTML="Password length must be at least 8";
     }
     if(password.value.length>=8){
      password.style.borderColor="";
      passwordError.style.display="none";
      passwordMsg.innerHTML="";
     }
  
     if(password.value.trim()==""){
      password.style.borderColor="red";
      passwordError.style.display="flex";
      passwordMsg.innerHTML="This field is required";
   }
   }
  
   function retypeValidation(){
    if(reType.value.trim()!==password.value&&password.value.trim()!==""){
      reType.style.borderColor="red";
      retypeError.style.display="flex";
      retypeMsg.innerHTML="Password don't match";
    }
    if(reType.value.trim()===password.value.trim()){
      reType.style.borderColor="";
      retypeError.style.display="none";
      retypeMsg.innerHTML="";
    }
    if(reType.value.trim()==""){
     reType.style.borderColor="red";
     retypeError.style.display="flex";
     retypeMsg.innerHTML="This field is required";
    }
    if(password.value.trim()==""){
        reType.style.borderColor="red";
        retypeError.style.display="flex";
        retypeMsg.innerHTML="Please Enter password first";
       }
   }
   console.log(signUpBtn)
   signUpBtn.addEventListener("click",function(e){
     
       
    if(reType.value.trim()===""||password.value.trim()===""||email.value.trim()===""||fname.value.trim()===""||fname.value.trim()===""||retypeMsg.innerHTML!==""||passwordMsg.innerHTML!==""||emailMsg.innerHTML!==""||lnameMsg.innerHTML!==""||fnameMsg.innerHTML!==""){
      
  
        if(reType.value.trim()==""){
          reType.style.borderColor="red";
          retypeError.style.display="flex";
          retypeMsg.innerHTML="This field is required";
         }
         if(password.value.trim()===""){
          password.style.borderColor="red";
          passwordError.style.display="flex";
          passwordMsg.innerHTML="This field is required";
        }
       if(email.value.trim()===""){
        email.style.borderColor="red";
        emailError.style.display="flex";
        emailMsg.innerHTML="This field is required";
       }
       if(fname.value.trim()===""){
        fname.style.borderColor="red";
        fnameError.style.display="flex";
        fnameMsg.innerHTML="This field is required";
       }
       if(lname.value.trim()===""){
        lname.style.borderColor="red";
        lnameError.style.display="flex";
        lnameMsg.innerHTML="This field is required";
     }
    } else{
     
       alert("sign up successfully");
       
       localStorage.setItem("email",email.value);
       localStorage.setItem("password",password.value);
       localStorage.setItem("fname",fname.value);
       localStorage.setItem("lname",lname.value);
        
       window.location.replace("login.html");

    }
    
   });

   

   
    