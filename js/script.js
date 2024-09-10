let dropDownNav = document.querySelector(".open-nav")
let menuNav = document.querySelector(".drop-down")
let closeNav = document.querySelector(".close-nav")
dropDownNav.addEventListener("click" , function () {
  menuNav.classList.add("open-navv")
  })
  closeNav.addEventListener("click" , function () {
    menuNav.classList.remove("open-navv")
  })
