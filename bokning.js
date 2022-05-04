let boka = document.getElementsByClassName("boka");
console.log(boka)
for (let i = 0; i < boka.length; i++) {
    boka[i].addEventListener("mouseover", function (e) {
        e.target.innerHTML = "boka";
    })
}
for (let i = 0; i < boka.length; i++) {
    boka[i].addEventListener("mouseleave", function (e) {
        e.target.innerHTML = "";
    })
}