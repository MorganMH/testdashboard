
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "bp_user" && password === "bp_pass") {
        alert("You have successfully logged in.");
        location.reload();
        window.location.href = "dashboard.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
