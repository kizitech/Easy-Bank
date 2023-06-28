const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu")
const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  body.classList.toggle("open")

  if (body.classList.contains("open")) {
    btnHamburger.src = "Images/icon-close.svg"
  } else {
    btnHamburger.src = "Images/icon-hamburger.svg"
  }
});