function myFunction() {
    var x = document.getElementById("mymenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }  

let bookedhour = 0;
let cancelledhour = 0;
let amount = 0;
 
function updateAmount (){
    document.getElementById('bookedhour').innerText = bookedhour;
    document.getElementById('cancelledhour').innerText = cancelledhour;
    amount = (bookedhour - cancelledhour) * 120;
    document.getElementById('amount').innerText = amount;
    if (bookedhour == 0 && cancelledhour == 0) {
        document.getElementById("confirm").disabled = true; 
    } else {
        document.getElementById("confirm").disabled = false;
    }
}
 
updateAmount();
//all the td tag that user can operate, querySelectorAll returns all the nodes (elements) specified by the class
let operable = document.querySelectorAll('.bookable,.ownbooked,.selected,.cancelled');
 
for (let i = 0; i < operable.length; i++) {
    operable[i].addEventListener("mouseleave", function (e) {
        if (e.target.classList.contains('bookable')) {
            e.target.innerHTML = "obokad";
        } else if (e.target.classList.contains('selected')) {
            e.target.innerHTML = "vald";
        } else if (e.target.classList.contains('ownbooked')) {
            e.target.innerHTML = "bokad";
        } else if (e.target.classList.contains('cancelled')) {
            e.target.innerHTML = "avbokad";
        }                
    })
}
 
for (let i = 0; i < operable.length; i++) {
    operable[i].addEventListener("mouseover", function (e) {
        if (e.target.classList.contains('bookable')) {
            e.target.innerHTML = "boka";
        } else if (e.target.classList.contains('selected')) {
            e.target.innerHTML = "avboka";
        } else if (e.target.classList.contains('ownbooked')) {
            e.target.innerHTML = "avboka";
        } else if (e.target.classList.contains('cancelled')) {
            e.target.innerHTML = "boka";
        }                
    })
}
 
for (let i = 0; i < operable.length; i++) {
    operable[i].addEventListener("click", function (e) {
        if (e.target.classList.contains('bookable')) {
            bookedhour += 1;
            updateClass (e.target, 'bookable', 'selected')// If bookable is clicked, change class to selected        
        } else if (e.target.classList.contains('selected')) {
            bookedhour -= 1;
            updateClass (e.target, 'selected', 'bookable')
        } else if (e.target.classList.contains('ownbooked')) {
            cancelledhour += 1;
            updateClass (e.target, 'ownbooked', 'cancelled')
        } else if (e.target.classList.contains('cancelled')) {
            cancelledhour -= 1;
            updateClass (e.target, 'cancelled', 'ownbooked')
        }
        updateAmount();                
    })
}
 
function updateClass (o, before, after) {
    o.classList.remove(before);
    o.classList.add(after);       
}
 
function confirm() {
    let operable = document.querySelectorAll('.selected,.cancelled');
    for (let i = 0; i < operable.length; i++) {
        if (operable[i].classList.contains('selected')) {
            updateClass(operable[i], 'selected', 'ownbooked');
            operable[i].innerHTML = "bokad";
        }
        if (operable[i].classList.contains('cancelled')) {
            updateClass(operable[i], 'cancelled', 'bookable');
            operable[i].innerHTML = "obokad";
        }        
    }
    alert("Du har klarat bokning/avbokning");
    bookedhour = 0;
    cancelledhour = 0;
    amount = 0;
    updateAmount();        
}


 
 
 
