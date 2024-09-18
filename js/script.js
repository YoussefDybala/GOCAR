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
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
   autoplay: {
    delay : 3000 ,
    disableOnInteraction : false 
  }

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

  /////////////////////// start pricing 
let yearly = document.querySelector(".yearly")
let monthly = document.querySelector(".monthly")
let priceOne = document.querySelector(".price-One")
let priceTwo = document.querySelector(".price-Two")
let priceThree = document.querySelector(".price-Three")
monthly.onclick = function () {
  priceOne.textContent = "$29.50"
  priceTwo.textContent = "$44.40"
  priceThree.textContent = "$70.50"
  yearly.onclick = function () {
    priceOne.textContent = "$350.70"
    priceTwo.textContent = "$530.60"
    priceThree.textContent = "$840.30"
  }
}
  /////////////////////// end pricing 
