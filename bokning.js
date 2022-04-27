let boka = document.getElementsByClassName("boka");

for (let i = 0; i < boka.length; i++) {
    boka[i].addEventListener("mouseover", function () {
        boka[i].innerHTML = "boka";
    })
}