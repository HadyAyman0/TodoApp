// Html elments
var userNameInput = document.getElementById('userNameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var signUpBtn = document.getElementById('signUpBtn');
//  app variables 
var users = [];
if (localStorage.getItem("Users") !== null) {
    users = JSON.parse(localStorage.getItem("Users"));
}

// functions 
function addUsers()
{
 var user = {
    userName : userNameInput.value,  
    userEmail : emailInput.value, 
    userPassword : passwordInput.value ,
}
users.push(user);
localStorage.setItem("Users", JSON.stringify(users));
clear();
}
function clear ()
{
    userNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}
// events
signUpBtn.addEventListener("click", addUsers );
signUpBtn.addEventListener("click", function(){
    signUpBtn.setAttribute("href","login.html");
} );
