//logic

const operators = ["+", "/", "*", ".", "Backspace", "Enter"];
const display = document.getElementById("display");

function deleteItem() {
  if (display.value.includes("Error")) return clearDisplay();
  const lastIndex = display.value.length - 1;
  display.value = display.value.substring(0, lastIndex);
}

function appendToDisplay(input) {
  if (!display.value && operators.includes(input)) return;
  const lastIndex = display.value.length - 1;
  const lastValue = display.value.charAt(lastIndex);
  if (operators.includes(lastValue) && lastValue === input) return;
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (!display.value) return;
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
//you can use keys on your keyboard
window.addEventListener("keydown", (e) => {
  if (!isFinite(+e.key) && !operators.includes(e.key) && e.key !== "-") return;
  if (e.key === "Backspace") return deleteItem();
  if (e.key === "Enter") return calculate();
  appendToDisplay(e.key);
});
