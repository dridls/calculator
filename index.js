let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

const handleSymbol = (symbol) => {
  //   if (symbol === "AC") {
  //     buffer = "0";
  //     runningTotal = 0;
  //   }

  switch (symbol) {
    case "AC":
      buffer = "0";
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "÷":
    case "×":
    case "%":
      handleMath(symbol);
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;

    // case "&comma;":
  }
};

const handleMath = (symbol) => {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;

  buffer = "0";
};

const flushOperation = (intBuffer) => {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  } else if (previousOperator === "%") {
    runningTotal = runningTotal / 100;
  }
};

const handleNumber = (numberString) => {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer = buffer + numberString;
  }
};

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
