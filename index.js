//hide / show elements
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
// hide navbar when navlink is clicked
document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (container.classList.contains("active")) {
      container.classList.remove("active");
    }
    showHide(navbar, menu, curtain);
  });
});
curtain.addEventListener("click", () => {
  showHide(navbar, container, menu, curtain);
});
//show hidden description of projects
document.querySelectorAll(".show-work").forEach((work) =>
  work.addEventListener("click", (e) => {
    const clicked = e.target;
    const alreadyClicked = [...document.querySelectorAll(".clicked")];
    //close previously open description when a new one is clicked
    alreadyClicked.forEach((item) => {
      if (e.target !== item) {
        item.classList.remove("clicked");
      }
    });

    if (clicked.classList.contains("project-image")) {
      clicked.nextElementSibling.classList.add("clicked");
      clicked.classList.add("clicked");
    } else {
      clicked.classList.remove("clicked");

      clicked.previousElementSibling.classList.remove("clicked");
    }
  })
);
//scroll effect
const reveal = (e) => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
};
window.addEventListener("scroll", reveal);
//run page animation function on page load
reveal();
