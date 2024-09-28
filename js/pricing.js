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
let landing = document.querySelector(".Pricing")
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
