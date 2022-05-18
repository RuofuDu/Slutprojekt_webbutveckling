function myFunction() {
    var x = document.getElementById("mymenu");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }