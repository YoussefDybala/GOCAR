/////////////// start nav
let dropDownNav = document.querySelector(".open-nav")
let menuNav = document.querySelector(".drop-down")
let closeNav = document.querySelector(".close-nav")
dropDownNav.addEventListener("click" , function () {
  menuNav.classList.add("open-navv")
  })
  closeNav.addEventListener("click" , function () {
    menuNav.classList.remove("open-navv")
  })
/////////////// end nav

/////////////////////// start cars 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
/////////////////////// end cars 

  //////////////////// start test 
  var swiper = new Swiper(".mySwipere", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //////////////////// end test 
