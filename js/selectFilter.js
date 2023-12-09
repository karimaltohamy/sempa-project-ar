const selectFilterProducts = document.querySelector(".select_filter_products");
const popupDate = document.querySelector(".popup_date");
const closeDate = document.querySelector(".close_date");
const btnPublishing = document.querySelector(".btn_publishing");
const popupPublishing = document.querySelector(".popup_publishing");
const closePublishing = document.querySelector(".close_publishing");

selectFilterProducts &&
  selectFilterProducts.addEventListener("change", (e) => {
    if (e.target.value == "date") {
      popupDate.classList.add("active");
    }
  });

closeDate &&
  closeDate.addEventListener("click", () => {
    popupDate.classList.remove("active");
  });

btnPublishing &&
  btnPublishing.addEventListener("click", (e) => {
    popupPublishing.classList.add("active");
  });

closePublishing &&
  closePublishing.addEventListener("click", () => {
    popupPublishing.classList.remove("active");
  });
