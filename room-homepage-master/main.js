
// slider

// hero data
const content = [
{
desktopImg: "url(/images/desktop-image-hero-1.jpg)",
mobileImg: "url(/images/mobile-image-hero-1.jpg)",
heading: "Discover innovative ways to decorate",
para: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
}
,

{
desktopImg: "url(/images/desktop-image-hero-2.jpg)",
mobileImg: "url(/images/mobile-image-hero-2.jpg)",
heading: "We are available all across the globe",
para: "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
}
,
{
desktopImg: "url(/images/desktop-image-hero-3.jpg)",
mobileImg: "url(/images/mobile-image-hero-3.jpg)",
heading: "Manufactured with the best materials",
para: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
}

]

//Image
const heroImg = document.querySelector(".hero");

// browser width
const mobileSize = window.matchMedia("(max-width:800px)");

// Display
const headingDisplay = document.getElementById("hero-heading");
const paraDisplay = document.getElementById("hero-para");


// buttons
const ButtonForward = document.querySelector(".arrow-right");
const ButtonBackward = document.querySelector(".arrow-left");

// index
let i = 0;

console.log(content[0])


let updateContent = () => {
const {desktopImg,mobileImg,heading,para} = content[i];
headingDisplay.innerText = heading;
paraDisplay.innerText = para;

if(mobileSize.matches){
heroImg.style.backgroundImage = mobileImg;
} else {
heroImg.style.backgroundImage = desktopImg;
}

}

ButtonForward.addEventListener("click", () => {

if(i >= 2){
i = 0
} else {
i++
}

updateContent();
})

ButtonBackward.addEventListener("click", () => {

if(i == 0){
i = 2
} else {
i--
}

updateContent();
})

updateContent();


//navbar

const navOpenIcon = document.querySelector(".hamburger");
const navCloseIcon = document.querySelector(".icon-close");
const mobileNav = document.querySelector(".mobile-nav");

navOpenIcon.addEventListener("click", () => {
mobileNav.classList.toggle("d-none");
})

navCloseIcon.addEventListener("click", () => {
mobileNav.classList.toggle("d-none");
})