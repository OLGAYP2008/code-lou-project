
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
  console.log(content.classList);

  if (content.classList.contains("hidden")) {
    btn.textContent = "Скрыть элемент";
  } else {
    btn.textContent = "Показать элемент";
  }

  content.classList.toggle("hidden");
}

