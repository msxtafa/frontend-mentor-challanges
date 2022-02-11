

// MOBILE NAV START

let mobileNav = document.getElementById("nav-mobile");
let navOpen = document.getElementById("nav-open");
let navClose = document.getElementById("nav-close");



navOpen.addEventListener("click" , function(){
    navOpen.style.display = "none";
    navClose.style.display = "block";
    mobileNav.style.display = "block";
},false)

navClose.addEventListener("click", function(){
    navOpen.style.display = "block";
    navClose.style.display = "none";
    mobileNav.style.display = "none";
},false)


// MOBILE NAV END
// @@@@@@@@@@@@@@@@@@@@

// MOBILE SLIDER START



/* slider effect */
var slider = function(){

    var i;
    var slides = document.querySelectorAll(".reference");
    var circles = document.querySelectorAll(".circle");
    
    
    for ( i = 0; i < slides.length; i++){
    slides[i].setAttribute("style", "display:none");
    circles[i].setAttribute("style", "background-color:transparent");
    }

    count++;
    
    if(count > slides.length){count = 1;}
    slides[count-1].setAttribute("style", "display:block");
    circles[count-1].setAttribute("style", "background-color:red");
}
var count = 0;

/* Reset all CSS values of slider elements */
function reset(){
    var slides = document.querySelectorAll(".reference");
    var circles = document.querySelectorAll(".circle");

    slides.forEach(slide => slide.setAttribute("style", "display:none"));
    circles.forEach(circle => circle.setAttribute("style", "background-color:transparent"));

    slides[0].setAttribute("style", "display:block");
    circles[0].setAttribute("style", "background-color:red");
}

/* Main program */

// Use interval to assure, that every 5 second the slider effect is triggered
let interval = null;

//JS media query
let query = window.matchMedia('(min-width: 1024px');

//Listen for changes when viewport has been resized
query.addEventListener('change', (event) => {
    // in this case: if viewport matches desktop display
    if(event.matches){
        // Clear interval for desktops, if interval is active
        if(interval)
            clearInterval(interval);

        // Display all references
        var slides = document.querySelectorAll(".reference");
        slides.forEach(slide => slide.style.display= 'block')
    //in this case: else viewport is smaller than desktop display
    } else {
        // activate interval and reset CSS values if it is not disabled
        if(!interval){
            interval = setInterval(slider, 5000);
            reset();
        }
    }
});

// Initial call
if(!query.matches){
    interval = setInterval(slider, 5000);
    reset();
}
    


   
  
   

















      
     











