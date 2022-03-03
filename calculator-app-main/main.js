
// THEME SWITCH FUNCTION
function switchThemeOnClick(){
  let themeBox = document.querySelectorAll(".theme");
  let themeCircle = document.querySelector(".circle");
  
  themeBox.forEach(box => {
  box.addEventListener("click", function(e){
  // remove all classes from body
  document.body.removeAttribute("class");
  
  if(e.target.dataset.theme == 1){
   themeCircle.style.left = "4px";
   document.body.classList.add("theme-1");
  }
  
  else if(e.target.dataset.theme == 2){
   themeCircle.style.left = "20px";
   document.body.classList.add("theme-2");
  }  
  else{
  themeCircle.style.left = "35px";
  document.body.classList.add("theme-3");
  } 
    }) 
  })
} 


// CALCULATOR APP
function calculator(){

  const numbers = document.querySelectorAll("[data-number]")
  const operators = document.querySelectorAll("[data-operator]")
  const equal = document.querySelector("[data-equal]")
  const del = document.querySelector("[data-delete]");
  const screen = document.querySelector(".output");
  const reset = document.querySelector("[data-reset]");
  
  numbers.forEach(number => {
  number.addEventListener("click", function(){
  screen.textContent += number.textContent
  })
  })
  
  operators.forEach(operator => {
  operator.addEventListener("click", function(){
  firstOperand = screen.textContent;
  selectedOperator = operator.dataset.operator;
  screen.textContent = "";
  })
  })
  
  equal.addEventListener("click", function(){
  let secondOperand = screen.textContent;
  
  if(selectedOperator == "plus"){
  screen.textContent = parseInt(firstOperand) + parseInt(secondOperand);
  }
  
  if(selectedOperator == "divide"){
    screen.textContent = parseInt(firstOperand) / parseInt(secondOperand);
  }
  
  if(selectedOperator == "multiplicate"){
    screen.textContent = parseInt(firstOperand) * parseInt(secondOperand);
  }
  
  if(selectedOperator == "minus"){
    screen.textContent = parseInt(firstOperand) - parseInt(secondOperand);
  
    console.log(screen.textContent)
  }
  
  
  console.log(firstOperand, selectedOperator, secondOperand)
  
  })
  
  
  del.addEventListener("click", function(){
  screen.textContent = screen.textContent.slice(0, -1)
  })
  
  reset.addEventListener("click", function(){
  screen.textContent = "";
  })
  
  
}


calculator();
switchThemeOnClick();