const showHide = (...args) => {
  args.forEach((arg) => arg.classList.toggle("active"));
};
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const container = document.querySelector("body");
const curtain = document.querySelector(".curtain");

menu.addEventListener("click", () => {
  showHide(navbar, container, menu, curtain);
  console.log(menu.classList);
});

document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (container.classList.contains("active")) {
      container.classList.remove("active");
    }
    showHide(navbar, menu, curtain);
  });
});
