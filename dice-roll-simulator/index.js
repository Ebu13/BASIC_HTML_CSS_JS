const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceFace(rollResult) {
  const diceFaces = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
  ];
  return diceFaces[rollResult - 1];
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
