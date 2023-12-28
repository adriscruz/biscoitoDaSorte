const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

function handleButtonClick(event) {
  event.preventDefault();
  console.log("Button clicked!");
  changeScreen();
}

function changeScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleReset() {
  changeScreen();
}
