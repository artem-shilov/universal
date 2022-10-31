const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const menuList = document.querySelector(".menu-list");
const body = document.body;

hamburgerWrapper.addEventListener("click", () => {
  hamburgerWrapper.classList.toggle("active");
  menuList.classList.toggle("active");
  body.classList.toggle("stop-scroll");
});

const listItems = menuList.querySelectorAll("a");

listItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    hamburgerWrapper.classList.remove("active");
    menuList.classList.remove("active");
  });
});

