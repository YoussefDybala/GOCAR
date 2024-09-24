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
