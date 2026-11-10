
const fighters = [
    "🐉", "🐥", "🐊", "💩", "🦍",
    "🐢", "🐩", "🦭", "🦀", "🐝",
    "🤖", "🐘", "🐸", "🕷️", "🐆",
    "🦕", "🦁"
];

const stage = document.getElementById("stage");
const fightButton = document.getElementById("fightButton");
const message = document.getElementById("message");

fightButton.addEventListener("click", function () {
    const firstIndex = Math.floor(
        Math.random() * fighters.length
    );

    let secondIndex = Math.floor(
        Math.random() * fighters.length
    );

    // Make sure the fighters are different
    while (secondIndex === firstIndex) {
        secondIndex = Math.floor(
            Math.random() * fighters.length
        );
    }

    stage.replaceChildren();

    const firstFighter = document.createElement("span");
    firstFighter.textContent = fighters[firstIndex];

    const versus = document.createElement("span");
    versus.className = "versus";
    versus.textContent = "VS";

    const secondFighter = document.createElement("span");
    secondFighter.textContent = fighters[secondIndex];

    stage.append(firstFighter, versus, secondFighter);

    message.textContent = "A new battle is ready!";
});