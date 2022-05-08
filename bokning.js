let bookingTable = document.getElementById("bookingTable");
let trnode = document.createElement("tr");
for (let startTime=7; startTime < 21; startTime++) {
    thnode =  document.createElement("th");
    let thtext = "";
    if (startTime > 7) { 
    thtext = "kl " + startTime.toString() + "-" + (startTime+1).toString();
    }
    thnode.textContent = thtext;
    trnode.appendChild(thnode);
}
bookingTable.appendChild(trnode);
for (let bana=1; bana < 5; bana++) {
    trnode = document.createElement("tr");
    for (let startTime=7; startTime < 21; startTime++) {
        tdnode =  document.createElement("td");
        tdtext = "";
        if (startTime == 7) { 
        tdtext = "Bana " + bana.toString();
        tdnode.classList.add('header');
        } else if (startTime > 15) {
            if (bana == 1) {
                tdtext = "Tavling";
            } else if (bana ==2 ) {
                tdtext = "Träning";
            } else if (bana ==4 ) {
                tdtext = "Träning";
            }
            if (bana != 3) {
                tdnode.classList.add('adminbooked');
            } else {
                tdnode.classList.add('bookable');
            }
        } else if (startTime == 8 || startTime == 10 || startTime == 11) {
            tdtext = "bokad";
            tdnode.classList.add('otherbooked');
        } else if (startTime == 13 && bana == 3)  {
            tdtext = "bokad";
            tdnode.classList.add('ownbooked');
        } else {
            tdtext = "";
            tdnode.classList.add('bookable');
        }
        tdnode.textContent = tdtext;
        trnode.appendChild(tdnode);
    }
    bookingTable.appendChild(trnode);
}
 
let bookedhour = 0;
let cancelledhour = 0;
let amount = 0;
 
function replaceClass (e, before, after) {
    e.target.classList.remove(before);
    e.target.classList.add(after);    
}
 
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
let operable = document.querySelectorAll('.bookable,.ownbooked,.selected,.cancelled');
 
for (let i = 0; i < operable.length; i++) {
    operable[i].addEventListener("mouseleave", function (e) {
        if (e.target.classList.contains('bookable')) {
            e.target.innerHTML = "";
        } else if (e.target.classList.contains('selected')) {
            e.target.innerHTML = "bokad";
        } else if (e.target.classList.contains('ownbooked')) {
            console.log("ownbooked");
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
            replaceClass (e, 'bookable', 'selected')
        } else if (e.target.classList.contains('selected')) {
            bookedhour -= 1;
            replaceClass (e, 'selected', 'bookable')
        } else if (e.target.classList.contains('ownbooked')) {
            cancelledhour += 1;
            replaceClass (e, 'ownbooked', 'cancelled')
        } else if (e.target.classList.contains('cancelled')) {
            cancelledhour -= 1;
            replaceClass (e, 'cancelled', 'ownbooked')
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
        }
        if (operable[i].classList.contains('cancelled')) {
            updateClass(operable[i], 'cancelled', 'bookable');
            operable[i].innerHTML = "";
        }        
    }
    alert("Okay");
    bookedhour = 0;
    cancelledhour = 0;
    amount = 0;
    updateAmount();                
}
