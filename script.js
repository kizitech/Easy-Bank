const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fades = document.querySelectorAll(".has-fade");
const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  
  // Close Hamburger Menu
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fades.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } 
  
  // Open Hamburger Menu
  else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fades.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
