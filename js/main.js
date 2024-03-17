// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle Nav
function toggleMenu() {
  if (window.innerWidth <= 800) {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");

    let toggle = document.querySelector(".toggle");
    toggle.classList.toggle("active");
  }
}


// update current year
window.onload = function() {
  const currentYearEl = document.querySelector("#currentYear");
  if(currentYearEl) {currentYearEl.innerText = new Date().getFullYear();}
}