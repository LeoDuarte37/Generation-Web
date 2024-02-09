let email = document.querySelector("#email");
let emailOk = false;
let password = document.querySelector("#password");
let passwordOk = false;

function checkEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerText = "Inválido";
        txtEmail.style.color = "red";
        email.style.borderColor = "red";
        emailOk = false;
    } else {
        txtEmail.innerText = "Válido";
        txtEmail.style.color = "green";
        email.style.borderColor = "green";
        emailOk = true;
    }
}

function checkPassword() {
    let txtPassword = document.querySelector("#txtPassword");

    if (password.value.length < 5) {
        txtPassword.innerText = "Inválido";
        txtPassword.style.color = "red";
        password.style.borderColor = "red";
        passwordOk = false;
    } else {
        txtPassword.innerText = "Válido";
        txtPassword.style.color = "green";
        password.style.borderColor = "green";
        passwordOk = true;
    }
}

function submitForm() {
    if (emailOk == true && passwordOk == true) {
        alert("Logando...")
    } else {
        alert("Preencha os campos corretamente!")
    }
} 