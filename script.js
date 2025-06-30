const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const historyList = document.getElementById("historyList");
const modeToggle = document.getElementById("modeToggle");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        const result = eval(currentInput);
        addToHistory(`${currentInput} = ${result}`);
        currentInput = result.toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      if (currentInput === "Error") currentInput = "";
      currentInput += value;
    }

    display.textContent = currentInput || "0";
  });
});

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

// Light/Dark Toggle
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  modeToggle.textContent = isDark ? "☀️" : "🌙";
});
