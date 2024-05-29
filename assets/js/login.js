
// Html elments
var emailLoginInput = document.getElementById('emailLoginInput');
var passwordLoginInput = document.getElementById('passwordLoginInput');
var loginBtn = document.getElementById('loginBtn');
var anchor = document.querySelector('.submit-btn a');
var error = document.querySelector('.error p');
//  app variables
var users = [];
if (localStorage.getItem("Users") !== null) {
    users = JSON.parse(localStorage.getItem("Users"));
}

// functions 

function validateUsers ()
{
    var validateEmail = emailLoginInput.value;
    var validatePassword = passwordLoginInput.value;
    for(var i = 0; i <=users.length;i++)
        {
            if(validateEmail===users[i].userEmail && validatePassword === users[i].userPassword )
                {
                    // anchor.setAttribute("href","TODOAPP.html");
                    localStorage.setItem("userName",users[i].userName);
                }
                else
                {
                    error.classList.remove('d-none');
                }
        }
        clear();
}
function clear ()
{
    emailLoginInput.value = "";
    passwordLoginInput.value = "";
}
// events
loginBtn.addEventListener("click",validateUsers );

