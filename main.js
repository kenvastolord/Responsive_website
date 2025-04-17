const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.getElementById("navLinks");
const nav = document.querySelector("nav");
const body = document.body;

hamburger.addEventListener("click", () => {
  nav.classList.add("nav-open");
  navLinks.classList.add("active");
  body.classList.add("menu-open");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  navLinks.classList.remove("active");
  body.classList.remove("menu-open");
});
