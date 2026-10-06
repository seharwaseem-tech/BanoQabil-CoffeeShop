const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", ()=>{
    // TOGGLE MOBILE VIEW VISIBILITY
    document.body.classList.toggle("show-mobile-menu");
});

// CLOSE MENU WHEN CLOSE BUTTON IS CLICKED
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());


// CLOSE MENU WHEN NAV LINKS IS CLICKED
navLinks.forEach(link =>{
    link.addEventListener("click", ()=> menuOpenButton.click());
});


// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // RESPONSIVE BREAKPOINTS
  breakpoints: {
    0: {
        slidesPerView :1
    },
    768: {
        slidesPerView :2
    },
    1024: {
        slidesPerView :3
    }
  }

});