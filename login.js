let bokaBana = document.getElementById("boka-bana");
console.log(bokaBana)
bokaBana.addEventListener("click", function () {
    bokaBana.style.color = "purple";
})

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

