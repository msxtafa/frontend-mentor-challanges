
//open close sidebar
const openNav = document.querySelector(".open-icon");
const closeNav = document.querySelector(".close-icon");
const sideBar = document.querySelector(".sidebar");


openNav.addEventListener("click", () => {
sideBar.classList.toggle("d-none");
closeNav.classList.toggle("d-none");
openNav.classList.toggle("d-none");
})

closeNav.addEventListener("click", () => {
sideBar.classList.toggle("d-none");
closeNav.classList.toggle("d-none");
openNav.classList.toggle("d-none");
})



// open/close dropdown
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdownContent = document.querySelectorAll(".dropdown-content");

for(let i = 0; i < 2; i++){
   let currentBtn = dropdownBtn[i];
   let openDropdown = dropdownContent[i];

   currentBtn.addEventListener("click", () => {
   openDropdown.classList.toggle("d-none");
   currentBtn.classList.toggle("rotate");
 })
}







