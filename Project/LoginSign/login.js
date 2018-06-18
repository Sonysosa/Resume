function logIn() {
    // alert("Login")
    var eLog = document.getElementById("email").value;
    var pLog = document.getElementById("password").value;
    // alert(eLog);
    // alert(pLog);
    var emailLog = localStorage.getItem("ekey");
    var passwordLog = localStorage.getItem("pkey");
    // alert(emailLog);
    // alert(passwordLog);
    if( eLog == emailLog && pLog == passwordLog){
      alert("login Successfully")
       window.location.href = "file:///home/aiesys/Desktop/Project/LoginSign/dashboard.html";
    }else {
      alert("Please check Your email and password");
    }
  }
