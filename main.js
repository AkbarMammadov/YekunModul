document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password-input").value;

    if (email === "example@example.com" && password === "password") {
        console.log("Başarılı giriş!");
    } else {
        console.log("Hatalı giriş!");
    }
});
