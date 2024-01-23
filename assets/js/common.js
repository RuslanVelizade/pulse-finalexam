const BASE_URL = "http://localhost:7777";

let menuIconCont = document.querySelector(".menuIconCont");

let menuIcon = document.querySelector(".fa-bars");
let nav = document.querySelector("nav")
menuIconCont.addEventListener("click", function (params) {
//   menuIcon.classList.add("fa-solid fa-x");

  if (menuIcon.className === "fa-solid fa-bars") {
    menuIcon.className === "fa-solid fa-x";
    nav.style.dipslay = "block"
  } else {
    menuIcon.className === "fa-solid fa-bars";
  }
});
