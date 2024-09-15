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


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop : true ,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
// autoplay: {
//   delay : 3000 , 
//   disableOnInteraction : false
// }
});

  //////////////////// start test 
  // var swiper = new Swiper(".mySwiper", {
  //   spaceBetween: 50,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });
  // var swiper2 = new Swiper(".mySwiper2", {
  //   direction: "vertical",
  //   spaceBetween: 50,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });
  //////////////////// end test 
