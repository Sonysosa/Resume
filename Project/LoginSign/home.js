function checking() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validation() {
  // alert("validation here");
  var e = document.getElementById("email").value;  
  var p = document.getElementById("password").value; 
  emailValidation(e);
  passwordValidation(p);
  checkValidation(e,p);
  storeValue(e,p);
}

function emailValidation(e) {
  // alert("email validation");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(e.match(mailformat)) {
    return true;
  }else {
    alert(" Enter a valid email address!");
    return false;
  }
}

function passwordValidation(p) {
  // alert("password validation");
  passformat  =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  if(p. match(passformat)) {
    // alert("your password correct")
   return true;
  }else {
    alert("Password must be at least 8 -16 digits one alphabet one special character."); 
    return false;
  }
}

function checkValidation(e,p) {
  if(emailValidation(e) == true && passwordValidation(p) == true) {
    window.location.href = "file:///home/aiesys/Desktop/Project/LoginSign/login.html";
  }
}

function storeValue(e,p) {
  localStorage.setItem("ekey", e);
  localStorage.setItem("pkey", p);
}
