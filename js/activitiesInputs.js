const addAppiontemnt = document.querySelector(".popup_box .add_appointment");

const addAward = document.querySelector(".popup_box .add_award");

function removeLine() {
  this.parentElement.remove();
}

function addLine(element) {
  const inputItem1 = document.createElement("div");
  inputItem1.className = "input_item";
  const label1 = document.createElement("label");
  label1.innerHTML = "التاريخ";
  const input1 = document.createElement("input");
  input1.setAttribute("type", "date");
  inputItem1.appendChild(label1);
  inputItem1.appendChild(input1);

  const inputItem2 = document.createElement("div");
  inputItem2.className = "input_item";
  const label2 = document.createElement("label");
  label2.innerHTML = "الوقت من";
  const input2 = document.createElement("input");
  input2.setAttribute("type", "time");
  inputItem2.appendChild(label2);
  inputItem2.appendChild(input2);

  const inputItem3 = document.createElement("div");
  inputItem3.className = "input_item";
  const label3 = document.createElement("label");
  label3.innerHTML = "الوقت الي";
  const input3 = document.createElement("input");
  input3.setAttribute("type", "time");
  inputItem3.appendChild(label3);
  inputItem3.appendChild(input3);

  const btnRemove = document.createElement("div");
  btnRemove.className = "btn_remove";
  const iconRemove = document.createElement("i");
  iconRemove.className = "fa-solid fa-trash";
  btnRemove.appendChild(iconRemove);

  btnRemove.addEventListener("click", removeLine);

  const line = document.createElement("div");
  line.classList.add("line_appointments");
  line.appendChild(inputItem1);
  line.appendChild(inputItem2);
  line.appendChild(inputItem3);
  line.appendChild(btnRemove);

  document.querySelector(`.${element} .appointments .lines`).appendChild(line);
}

addAppiontemnt.addEventListener("click", (e) => {
  e.preventDefault();

  addLine("popup_box");
});

function addLineAwards(element) {
  const inputItem1 = document.createElement("div");
  inputItem1.className = "input_item";
  const label1 = document.createElement("label");
  label1.innerHTML = "جائزه";
  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  inputItem1.appendChild(label1);
  inputItem1.appendChild(input1);

  const btnRemove = document.createElement("div");
  btnRemove.className = "btn_remove";
  const iconRemove = document.createElement("i");
  iconRemove.className = "fa-solid fa-trash";
  btnRemove.appendChild(iconRemove);

  btnRemove.addEventListener("click", removeLine);

  const line = document.createElement("div");
  line.classList.add("line_awards");
  line.appendChild(inputItem1);
  line.appendChild(btnRemove);

  document.querySelector(`.${element} .awards .lines`).appendChild(line);
}

addAward.addEventListener("click", (e) => {
  e.preventDefault();

  addLineAwards("popup_box");
});
