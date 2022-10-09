
const showHide = (...args) => {
    args.forEach((arg) => arg.classList.toggle("active"));
  };

  document.querySelector(".menu").addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    const open = document.querySelector(".open")
    const container = document.querySelector("body");
    showHide(navbar,open,container);
  })
  //document.querySelectorAll(".menu").forEach((menuBtn) => {
  //  menuBtn.addEventListener("click", () => {
  //    showHide(navbar, curtain);
  //  });
 // });