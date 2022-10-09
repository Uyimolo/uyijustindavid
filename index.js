
const showHide = (...args) => {
    args.forEach((arg) => arg.classList.toggle("active"));
  };
const navbar = document.querySelector(".navbar");
    const open = document.querySelector(".open")
    const container = document.querySelector("body");

  document.querySelector(".menu").addEventListener("click", () => {
    showHide(navbar,open,container);
  })
  document.querySelectorAll(".nav-link").forEach((navLink) => {
    navLink.addEventListener("click", () => {
      showHide(navbar,open,container);
    });
 
