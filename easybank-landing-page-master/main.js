
let hamburger = document.querySelector(".hamburger");
let closeList = document.querySelector(".close");
let navList = document.getElementById("navlist");

hamburger.addEventListener("click", function(){
    hamburger.classList.add("d-none");
    closeList.classList.remove("d-none");
    navList.classList.add("active");
})

closeList.addEventListener("click", function(){
    hamburger.classList.remove("d-none");
    closeList.classList.add("d-none");
    navList.classList.remove("active");
})

