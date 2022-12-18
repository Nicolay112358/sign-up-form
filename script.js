const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector(".error");
const pas = document.querySelector('.pas');

function removErro() {
    error.remove();
}

function addError() {
    pas.appendChild(error);
}

function checkMatchs() {
    if (password.value == confirmPassword.value) {
        removErro();
    } else {
        addError();
    }

    if (password.value == "" || confirmPassword.value == "") { addError() }
}

password.oninput = function () {
    checkMatchs();
}

confirmPassword.oninput = function () {
    checkMatchs()
}