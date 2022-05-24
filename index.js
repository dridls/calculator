let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSign(value);
  } else {
    handleNumber(value);
  }
}

const handleSign = (sign) => {};

const handleNumber = (numberString) => {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer = buffer + numberString;
  }
  console.log(buffer);
};

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      console.log(event);
      buttonClick(event.target.innerText);
    });
}

init();
