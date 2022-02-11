
// Selectors
let todoContainer = document.getElementById("todo-container");
let input = document.getElementById("input");
let options = document.querySelector(".options")
let todoCounterDisplay = document.querySelector(".items-left");
let themeIcon = document.querySelector(".theme-icon");
let inputText;


// create todos
function createTodo(text, active = true){

    // create Todo Element
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo","d-block", "border-bottom", "align-center", "shadow");


    // add active/completed
    if(active){
    newTodo.classList.add("active");
    } else{
    newTodo.classList.add("completed");
    }

    // create circle
    let circle = document.createElement("div");
    circle.classList.add("circle");

    // create text
    let textDisplay = document.createElement("p");
    textDisplay.classList.add("new-task-text");
    textDisplay.textContent = text;

    // create cross
    let cross = document.createElement("img");
    cross.src = "./images/icon-cross.svg";
    cross.setAttribute("id" ,"cross");
    cross.classList.add("trash-btn");

    newTodo.append(circle,textDisplay,cross);
      

      // delete todo on cross click
      DeleteTodo(cross);

      // toggle completed class
      toggleClass(circle,newTodo);
  
      // clear all completed Todos
      clearCompletedTodos(newTodo);

      // select todos
       SelectTodo();

      //count todos
      CountTodos();

    return newTodo
}
// init todos
function initTaskContainer(){
    todoContainer.appendChild(createTodo("Jog Around the park 3x"))
    todoContainer.appendChild(createTodo("10 minutes meditation"))
    todoContainer.appendChild(createTodo("Read for 1 hour"))
    todoContainer.appendChild(createTodo("Pick up groceries"))

    CountTodos();
}
// init input
function initInput(){
input.addEventListener("keyup", () => {
    if(event.keyCode === 13 && input.value != ""){
    // get input value
    inputText = input.value;
    // clear input
    input.value = "";
    
    
    let task = createTodo(inputText);
    todoContainer.appendChild(task);

    CountTodos();
    }
})
}

// count todos getting length of active classes
function CountTodos(){
    let openTasks = document.querySelectorAll(".todo.active");
    todoCounterDisplay.innerHTML = openTasks.length + " items left";
} 

// delete todos on click
function DeleteTodo(deleteBtn){
    deleteBtn.addEventListener("click", function(){
    deleteBtn.closest(".todo").remove();

    CountTodos();
})

   

}
// toggle active/completed classes
function toggleClass(toggleBtn, todo){
toggleBtn.addEventListener("click", function(){
todo.classList.toggle("completed");
todo.classList.toggle("active");

CountTodos();
})


}
  
// delete all completed todos on click
function clearCompletedTodos(todos){
    let clearCompletedBtns = document.querySelector(".clear-completed");

    clearCompletedBtns.addEventListener("click", function(){
        if(todos.classList.contains("completed")){
            todos.remove();
            CountTodos();
        }
    })

}

// display only active or completed todos
function SelectTodo(){
    options.addEventListener("click", function(e){
        let value = e.target.dataset.value;
         let todos = todoContainer.children;
        
         // Display Selected
         for(todo of todos){
             if(value == "active"){
                if(todo.classList.contains("active")){
                 todo.style.display = "flex";
                } else {
                todo.style.display = "none";
                }
             }
        
           else if(value == "completed"){
                if(todo.classList.contains("completed")){
                 todo.style.display = "flex";
                } else{
                todo.style.display = "none";
                }
             }
        
             else if(value == "all"){
                todo.style.display = "flex";
             }      
        }


       
        
        
        CountTodos();
        })
}

// switch color theme
function switchTheme(){
themeIcon.addEventListener("click", function(){
themeIcon.classList.toggle("sun");
themeIcon.classList.toggle("moon");

if(themeIcon.classList.contains("moon")){
document.body.classList.add("lightmode");
} else {
document.body.classList.remove("lightmode");
}

})
}

// switch color of radio btns 
function switchColor(){
 let buttons = document.querySelectorAll(".options>p");

 buttons.forEach(btn => {
 btn.addEventListener("click", function(){

    buttons.forEach(btn => {
    btn.style.color = "var(--clr-secondary)";
    })

   btn.style.color = "rgba(45, 203, 255, 0.986)";
})



})
    
}


switchColor();
switchTheme();
initInput();
initTaskContainer();








