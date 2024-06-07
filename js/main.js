var userName = document.querySelector(".name"); // register
var userEmail = document.querySelector(".mail"); // register
var pass = document.querySelector(".pass"); // register
var signUp = document.querySelector(".signUp"); // anchor
var signIn = document.querySelector(".signIn"); // anchor
var registerBtn = document.querySelector(".sign-up"); // register
var loginBtn = document.querySelector(".login"); // login
var loginEmail = document.querySelector(".user-mail"); // login
var loginPass = document.querySelector(".user-pass"); // login
var logOut = document.querySelector(".logOut");
var data;


// validation
function nameValidation() {
    var regex = /^[A-Z][a-z]{3,20}[0-9]*$/

    if (regex.test(userName.value) == true) {
        document.getElementById("nameError").classList.replace("d-block", "d-none");
        return true;
    }

    document.getElementById("nameError").classList.replace("d-none", "d-block");
    return false;
}

function emailValidation() {
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if (regex.test(userEmail.value) == true) {
        document.getElementById("mailError").classList.replace("d-block", "d-none");
        return true;
    }

    document.getElementById("mailError").classList.replace("d-none", "d-block");
    return false;
    window.alert("false");
}

function passValidation() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/

    if (regex.test(pass.value) == true) {
        document.getElementById("passError").classList.replace("d-block", "d-none")
        return true;
    }

    document.getElementById("passError").classList.replace("d-none", "d-block");
    return false;
}


if (localStorage.getItem('details') == null) {
    data = [];
}
else {
    data = JSON.parse(localStorage.getItem('details'));
}


// Register Data
registerBtn.onclick = function RegData () {
    
    if (nameValidation() == true && emailValidation() == true && passValidation() == true) {
        var userData = {
            name: userName.value,
            email: userEmail.value,
            passkey: pass.value,
        }
        

        data.push(userData);
        localStorage.setItem('details', JSON.stringify(data));
        document.querySelector(".sucess").classList.replace("d-none", "d-block");
        document.querySelector(".register").classList.replace("d-block", "d-none");
        document.querySelector(".enter").classList.replace("d-none", "d-block");
        event.preventDefault();
    }
}


// clear
function clearInputs() {
    userName.value = "";
    userEmail.value = "";
    pass.value = "";
}


// Transfer
signUp.addEventListener("click", function (e) {
    document.querySelector(".enter").classList.replace("d-block", "d-none");
    document.querySelector(".register").classList.replace("d-none", "d-block");
    e.preventDefault();
})

/* signIn.addEventListener("click", function () {
    document.querySelector(".register").classList.replace("d-block", "d-none");
    document.querySelector(".enter").classList.replace("d-none", "d-block");
 
}) */


//login
function emptyInputs() {
    if (loginEmail.value == "" || loginPass.value == "") {
        return true;
    }
    else {
        return false;
    }
}

loginBtn.addEventListener("click", function () {
    if (emptyInputs() == true) {
        document.getElementById('required').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return true;
    }

    var eml = loginEmail.value
    var pswd = loginPass.value
    for (var i = 0; i < data.length; i++) {
        if (data[i].email.toLowerCase() == eml.toLowerCase() && data[i].passkey.toLowerCase() == pswd.toLowerCase()) {
            localStorage.setItem("UserName", data[i].name)
            document.querySelector(".welcome").classList.replace("d-none", "d-block");
            document.querySelector(".enter").classList.replace("d-block", "d-none");
            clearLogInputs();
        }
        else {
            document.querySelector(".wrong").classList.replace("d-none", "d-block");
        }

        var username = localStorage.getItem('UserName')
        if (username) {
            document.getElementById('hello').innerHTML = "Welcome " + username
        }
    }
})



function clearLogInputs() {
    loginEmail.value = "";
    loginPass.value = "";
}

logOut.addEventListener("click", function logOut() {
    document.querySelector(".welcome").classList.replace("d-block", "d-none");
    document.querySelector(".enter").classList.replace("d-none", "d-block");
    document.querySelector(".wrong").classList.replace("d-block", "d-none");
})









