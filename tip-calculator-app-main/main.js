
/** add active class to tip input **/
let tip = document.querySelectorAll(".tips")

tip.forEach(function (x) {
    x.addEventListener("click", function () {
        RemoveClass();
        x.classList.add("active");
    })
})

// remove active class from tip input
function RemoveClass() {
    tip.forEach(function (x) {
        x.classList.remove("active");
    })
}

// get Bill value
let billValue = document.getElementById("billvalue").value;

// get Number of People
let peopleValue = document.getElementById("peoplevalue").value;


// Display Results
let amount = document.getElementById("amount");
let total = document.getElementById("total");

// tip amount per person   -> ((billValue/peopleValue) / 100) * TipValue = TipAmount per Person
function TipAmount() {
    let amountdisplay = amount.textContent;
    amountdisplay = ((billValue / peopleValue) / 100);
}


// total per person
let totaldisplay = total.textContent;