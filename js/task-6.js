function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
  input.value = ""; // Clear input value after creating boxes
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Clear existing boxes before creating new ones
  const boxSize = 30; // Initial size of the first box
  const boxElements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = boxSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = `${i + 1}`;
    boxElements.push(box);
  }

  boxesContainer.append(...boxElements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
