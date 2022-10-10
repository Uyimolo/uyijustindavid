const showHide = (...args) => {
  args.forEach((arg) => arg.classList.toggle("active"));
};
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".open");
const container = document.querySelector("body");
const curtain = document.querySelector(".curtain");

document.querySelector(".menu").addEventListener("click", () => {
  showHide(navbar, container, menu, curtain);
});

document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", () => {
    showHide(navbar, menu, container, curtain);
  });
});
