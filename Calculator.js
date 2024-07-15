const display = document.getElementById("display");
let code = "0";

const calculate = () => {
  return eval(code).toString();
}

const buttonClicked = (elem) => {
  if (elem === "DEL") {
    if (code === "0") {
      return;
    } else if (code.length === 1) {
      code = "0";
    } else {
      code = code.substring(0, code.length - 1);
    }
  } else if (elem === "AC") {
    code = "0";
  } else if (elem === "=") {
    code = calculate();
  } else if (code === "0") {
    code = elem;
  } else {
    code += elem;
  }
  display.value = code;
  return;
};

window.addEventListener("DOMContentLoaded", (event) => {
  display.value = code;
});
