let submit = document.getElementById("submit");
let errorMessage = document.getElementById("errorMessage");
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
submit.addEventListener("click", function (event) {
    let email = document.getElementById("mail");
    let password = document.getElementById("password");
    if (email.value == "" || password.value == "") {
        console.log(email.value)
        console.log(password.value)
        event.preventDefault(); //meaning that the default action that belongs to the event will not occur.
        errorMessage.innerHTML = "Du måste ange ditt mejl och lösenord";
    }
    else {
        let regexp = RegExp(mailformat)
        if (regexp.test(email) == false) {
            event.preventDefault();
            errorMessage.innerHTML = "Du måste ange ett lämpligt mail adress";
        }
    }
})

