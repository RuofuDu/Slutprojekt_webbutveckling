let submit = document.getElementById("submit");
let errorMessage = document.getElementById("errorMessage");
let mailformat = /^\S+@\S+\.\S+$/i;
submit.addEventListener("click", function (event) {
    let email = document.getElementById("mail");
    let password = document.getElementById("password");
    if (email.value == "" || password.value == "") {
        console.log(email.value)
        console.log(password.value)
        event.preventDefault(); //meaning that the default action that belongs to the event will not occur.
        errorMessage.innerHTML = "Du måste ange ditt mejl och lösenord";
        document.getElementById("errorMessage").style.color = "red";
    }
    else {
        let regexp = RegExp(mailformat)
        console.log(mailformat, email.value, regexp.test(email))
        if (regexp.test(email.value) == false) {
            event.preventDefault();
            errorMessage.innerHTML = "Du måste ange ett lämpligt mail adress";
            document.getElementById("errorMessage").style.color = "red";
        }
        else {
            localStorage.setItem("email", JSON.stringify(email.value))
            localStorage.setItem("password", JSON.stringify(password.value))
        }
    }
})

