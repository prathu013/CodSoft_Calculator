let displayOutput = document.getElementById("display_output");
let displayInput = document.getElementById("display_input"); // remove this line, it's not needed

function display(value) {
  if (value === "AC") {
    displayOutput.value = "";
  } else if (value === "←") {
    displayOutput.value = displayOutput.value.slice(0, -1);
  } else {
    if (value === "x") {
      value = "*";
    } else if (value === "÷") {
      value = "/";
    }
    displayOutput.value += value;
  }
}

let equal = document.getElementById("equal");
equal.addEventListener("click", function () {
  let displayOutputValue = displayOutput.value;
  let result = eval(displayOutputValue);
  displayOutput.value = result;
});
