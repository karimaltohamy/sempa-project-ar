//   popup booking
const btnOpenPopup = document.querySelector(".btn_open_popup");
const popupBox = document.querySelector(".popup_box");
const closePopup = document.querySelector(".close_popup");

btnOpenPopup.addEventListener("click", () => {
  popupBox.classList.add("active");
});

closePopup.addEventListener("click", () => {
  popupBox.classList.remove("active");
});
