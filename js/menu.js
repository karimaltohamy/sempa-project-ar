const btnMenu = document.querySelector(".icon_menu");
const btnclose = document.querySelector(".btn_close_menu");
const menuMobile = document.querySelector(".menu_mobile");
const overflow = document.querySelector(".overflow");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  overflow.classList.add("active");
});

btnclose.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  overflow.classList.remove("active");
});
