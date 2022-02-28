
// constants
const bill = document.getElementById("bill");
const tipBtns = document.querySelectorAll(".tips>button");
const tipCustom = document.querySelector(".tips>input");
const people = document.getElementById("people");
const results = document.querySelectorAll(".result");
const resetBtn = document.getElementById("reset");
const errorText = document.querySelector(".error");


let billValue = 0.0; // default
let tipValue = 0.15; // default value -> 15% button
let peopleValue = 1;

// Eventlistener
bill.addEventListener("input", setBillValue);
tipBtns.forEach(btn =>{btn.addEventListener("click", handleClick)});
tipCustom.addEventListener("input", setTipCustomValue);
people.addEventListener("input", setPeopleValue);
resetBtn.addEventListener("click", reset);


function handleClick(event){
tipBtns.forEach(btn =>{
// clear active state
btn.classList.remove("active");
// set active state
if(event.target.textContent == btn.textContent){
btn.classList.add("active");
tipValue = parseFloat(btn.textContent)/100;
}
 })


 tipCustom.value = "";
 calculateTip();
}

function setBillValue(){
    if(bill.value.includes(",")){
        bill.value = bill.value.replace(",", ".");
    }
    billValue = parseFloat(bill.value);

    calculateTip();
}

function setTipCustomValue(){

tipValue = parseFloat(tipCustom.value/100)

// remove active state from buttons
tipBtns.forEach(btn => {
    btn.classList.remove("active");
})

calculateTip();
}

function setPeopleValue(){
peopleValue = parseFloat(people.value);

displayError();
calculateTip();
}

function displayError(){
    if(peopleValue == 0){
        errorText.classList.remove("d-none");
        people.style.outline = "2px solid orange";
        
        } else {
        errorText.classList.add("d-none");
        people.style.outline = "";

        
        }
}

function calculateTip(){
if(peopleValue >= 1){
let tipAmount = billValue * tipValue / peopleValue;
let total = billValue * (tipValue + 1) / peopleValue;
results[0].textContent = "$" + tipAmount.toFixed(2);
results[1].textContent = "$" + total.toFixed(2);
 }
}

function reset(){
bill.value = "";
tipBtns[2].click();
people.value = "";
results[0].textContent = "$0.00";
results[1].textContent = "$0.00";
}
