
// mobile slider
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const images = document.querySelector('.slides').children;
const totalImages = images.length;
let index = 0;


prev.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('d-block');
    }
    images[index].classList.add('d-block');
}


// desktop slider
const thumbnails = document.querySelectorAll(".thumbnail");
let mainImg = document.querySelectorAll(".product-img");

for (let i = 0; i < thumbnails.length && i < mainImg.length; i++) {
    thumbnails[i].addEventListener("click",function() {

        thumbnails.forEach(function(thumbnail){
            thumbnail.classList.remove("active");
        })

        mainImg.forEach(function (x) {
            x.classList.remove("d-block");
        })
        mainImg[i].classList.add("d-block");
        thumbnails[i].classList.add("active");
    }, false);
}




// shopping cart
const cart = document.getElementById("cart");
const cartOpen = document.getElementById("shopping-cart");
const cartFilled = document.getElementById("shopping-cart-content");
const cartEmpty = document.getElementById("empty-cart");


// change input value on button click
let minus = document.getElementById("btn-decrease");
let plus = document.getElementById("btn-increase");
let input = document.getElementById("quantity-input");

minus.addEventListener("click", function () {
    if (input.value == 0) {
        input.value = 0;
    } else {
        input.value--;
    }
})

plus.addEventListener("click", function () {
    if (input.value == 10) {
        input.value = 10;
    } else {
        input.value++
    }
})

input.value = 0;


// open close cart
cart.addEventListener("click", function () {
    cartOpen.classList.toggle("active");

    if (cartOpen.classList.contains("active")) {
        cartOpen.style.display = "none";
    } else {
        cartOpen.style.display = "block";
    }
})



// get input.value onclick
let cartInfo = document.getElementById("cart-info");
let cartQuantity = document.getElementById("quantity-info");
let addValueBtn = document.getElementById("cart-add");
let cartContent = document.getElementById("shopping-cart-content");
let totalPrice = document.getElementById("total-price");
let itemQuantity = document.getElementById("item-quantity");



addValueBtn.addEventListener("click", function () {
    if (input.value != 0) {
        cartQuantity.innerHTML = input.value;
        cartInfo.style.display = "block";

        // add elments to shopping cart

        if (input.value > 0) {
            cartFilled.style.display = "block";
            itemQuantity.innerHTML = " " + "x" + input.value;
            totalPrice.innerHTML = "$" + input.value * 125;
            cartEmpty.style.display = "none";
        }

    } else {
        cartInfo.style.display = "none";
    }

})


// delete cart 
const deleteCart = document.getElementById("delete-icon");
deleteCart.addEventListener("click", function () {
    cartContent.style.display = "none";
    cartInfo.style.display = "none";
    cartEmpty.style.display = "block";
})




// open/close mobile nav
const iconBar = document.getElementById("icon-bars");
const iconClose = document.getElementById("icon-close");
const mobileNav = document.getElementById("mobile-nav");

iconBar.addEventListener("click", function () {
    mobileNav.style.display = "block";
})

iconClose.addEventListener("click", function () {
    mobileNav.style.display = "none";
})





