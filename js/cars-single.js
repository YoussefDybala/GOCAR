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



  
///////////////// start setting menu 


let spin = document.querySelector(".spin")
let hide = document.querySelector(".hide")
let settingBoxes = document.querySelector(".setting-boxes")
let settingBox = document.querySelector(".setting-box")
function close_OpenSettingBox() {
  spin.onclick = function () {
    settingBoxes.classList.add("open")
  }
  hide.onclick = function () {
    settingBoxes.classList.remove("open")
  }
}

close_OpenSettingBox()

let bulletsControl = document.querySelectorAll(".tog span")
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
let bulletsLinks = document.querySelector(".bulletLinks")
bulletsControl.forEach((ele) => {
ele.onclick = function () {
  bulletsControl.forEach((ele) => {
    ele.classList.remove("yn")
})
  ele.classList.add("yn")
  if (ele === no) {
    bulletsLinks.style.display = "none"
} else {
  bulletsLinks.style.display = "block"
}
}
})


let darkLightMode = document.querySelectorAll(".DL span")
let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
let body = document.querySelector("body")
let landing = document.querySelector(".Cars-Single")
let navBar = document.querySelector(".navbar")

let service = document.querySelector(".service")
let serviceBox = document.querySelector(".service-box")
let contact = document.querySelector(".contact")
darkLightMode.forEach((ele) => {
ele.onclick = function () {
  darkLightMode.forEach((ele) => {
  ele.classList.remove("dl")
})
ele.classList.add("dl")
}
if (ele === dark) {
  dark.addEventListener("click" , function () {
    body.classList.add("darkColor")
    body.classList.add("whiteColor")
    settingBoxes.classList.add("darkColor")
    settingBox.classList.add("darkColor")
    landing.classList.add("darkColor")
    megaMenu.classList.add("darkColor")

    service.classList.add("darkColor")
    serviceBox.classList.add("darkColor")
    contact.classList.add("darkColor")
    navBar.classList.add("darkColor")

  })
} else {
light.addEventListener("click" , function () {
  body.classList.remove("darkColor")
  body.classList.remove("whiteColor")
  settingBoxes.classList.remove("darkColor")
  settingBox.classList.remove("darkColor")
  landing.classList.remove("darkColor")
  megaMenu.classList.remove("darkColor")

  service.classList.remove("darkColor")
  serviceBox.classList.remove("darkColor")
  contact.classList.remove("darkColor")
  navBar.classList.remove("darkColor")


})

}
})


function colorChange() {
  let red = document.getElementById("red").value
  let green = document.getElementById("green").value
  let blue = document.getElementById("blue").value
  document.querySelector(".colorGenerator").style.backgroundColor = 'rgb('+red+','+green+','+blue+')'
  let changeColor =  document.querySelector(".rgb-value").innerHTML = 'rgb('+red+','+green+','+blue+')'
  


  document.querySelector(".changeColor").onclick = function () {
    document.documentElement.style.setProperty('--main-color' , changeColor  )
    
 }
    

}
 colorChange()
///////////////// end setting menu 

