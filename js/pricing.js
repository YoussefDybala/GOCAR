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