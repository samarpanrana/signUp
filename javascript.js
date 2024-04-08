let pwdDom = document.querySelector('#pwd');
let pwdDomConfirm = document.querySelector('#pwd-confirm');

pwdDom.addEventListener("input", confirmPassword);
pwdDomConfirm.addEventListener("input", confirmPassword);

let form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function confirmPassword () {
    let pwd = pwdDom.value;
    let pwdConfirm = pwdDomConfirm.value;

    if (pwd == pwdConfirm) {
        pwdDom.style.border = `2px solid green`;
        pwdDomConfirm.style.border = `2px solid green`;
    }
    else {
        pwdDom.style.border = `2px solid red`;
        pwdDomConfirm.style.border = `2px solid red`;
    }
}

