/////////////// start nav
let dropDownNav = document.querySelector(".open-nav")
let megaMenu = document.querySelector(".mega-menu")
let closeNav = document.querySelector(".close-nav")
dropDownNav.addEventListener("click" , function () {
    megaMenu.classList.add("open-navv")
  })
  closeNav.addEventListener("click" , function () {
    megaMenu.classList.remove("open-navv")
  })
/////////////// end nav


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  let imgActiveOne = document.querySelector(".active-one")
  let imgActiveTwo = document.querySelector(".active-two")
  let imgActiveThree = document.querySelector(".active-three")
  let imgActiveFour = document.querySelector(".active-four")
  let imgActiveFive = document.querySelector(".active-five")
  let swipImgOne = document.querySelector(".swip-one")
  let swipImgTwo = document.querySelector(".swip-two")
  let swipImgThree = document.querySelector(".swip-three")
  let swipImgFour = document.querySelector(".swip-four")
  let swipImgFive = document.querySelector(".swip-five")

  swipImgOne.addEventListener("click" , function () {
    setTimeout(() => {
         imgActiveOne.style.display = "block"
         imgActiveOne.classList.add("remove-opacity")
    },-10);
    setTimeout(() => {
         imgActiveOne.classList.add("add-opacity")
         imgActiveOne.classList.remove("remove-opacity")
    },100);
    imgActiveTwo.style.display = "none"
    imgActiveThree.style.display = "none"
    imgActiveFour.style.display = "none"
    imgActiveFive.style.display = "none"
  })



  swipImgTwo.addEventListener("click" , function () {
    setTimeout(() => {
         imgActiveTwo.style.display = "block"
         imgActiveTwo.classList.add("remove-opacity")
    },-10);
    setTimeout(() => {
         imgActiveTwo.classList.add("add-opacity")
         imgActiveTwo.classList.remove("remove-opacity")
    },100);
    imgActiveOne.style.display = "none"
    imgActiveThree.style.display = "none"
    imgActiveFour.style.display = "none"
    imgActiveFive.style.display = "none"
  })




  swipImgThree.addEventListener("click" , function () {
    setTimeout(() => {
         imgActiveThree.style.display = "block"
         imgActiveThree.classList.add("remove-opacity")
    },-10);
    setTimeout(() => {
         imgActiveThree.classList.add("add-opacity")
         imgActiveThree.classList.remove("remove-opacity")
    },50);
    imgActiveOne.style.display = "none"
    imgActiveTwo.style.display = "none"
    imgActiveFour.style.display = "none"
    imgActiveFive.style.display = "none"
  })




  swipImgFour.addEventListener("click" , function () {
    setTimeout(() => {
         imgActiveFour.style.display = "block"
         imgActiveFour.classList.add("remove-opacity")
    },-10);
    setTimeout(() => {
         imgActiveFour.classList.add("add-opacity")
         imgActiveFour.classList.remove("remove-opacity")
    },50);
    imgActiveOne.style.display = "none"
    imgActiveTwo.style.display = "none"
    imgActiveThree.style.display = "none"
    imgActiveFive.style.display = "none"
  })



  swipImgFive.addEventListener("click" , function () {
    setTimeout(() => {
         imgActiveFive.style.display = "block"
         imgActiveFive.classList.add("remove-opacity")
    },-10);
    setTimeout(() => {
         imgActiveFive.classList.add("add-opacity")
         imgActiveFive.classList.remove("remove-opacity")
    },50);
    imgActiveOne.style.display = "none"
    imgActiveTwo.style.display = "none"
    imgActiveThree.style.display = "none"
    imgActiveFour.style.display = "none"
  })

