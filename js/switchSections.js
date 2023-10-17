const links = document.querySelectorAll(".head_switchs .link");
const sections = document.querySelectorAll(".switch_sections .section");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    sections.forEach((ele) => ele.classList.remove("active"));
    links.forEach((ele) => ele.classList.remove("active"));
    link.classList.add("active");

    if (
      link.getAttribute("data-num") == sections[index].getAttribute("data-num")
    ) {
      sections[index].classList.add("active");
    }
  });
});
