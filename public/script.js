const allGames = [
    {
        name: "Capybara Clicker",
        image: "img/cappyclicker.png",
        html: "games/cappyclicker.html"
    }
];

const continuePlaying = [
    allGames[0],
    allGames[1]
];

// Populate card rows
function populateRow(rowId, games) {
    const row = document.getElementById(rowId);

    games.forEach(g => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${g.image}">
            <div class="card-title">${g.name}</div>
        `;

        // Open game viewer instead of navigating
        card.onclick = () => openGame(g.html);

        row.appendChild(card);
    });
}

populateRow("continue-row", continuePlaying);
populateRow("all-row", allGames);

// GAME VIEWER FUNCTIONS
function openGame(path) {
    document.getElementById("game-frame").src = path;
    document.getElementById("game-viewer").style.display = "flex";

    // Scroll to viewer
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

document.getElementById("back-button").onclick = () => {
    document.getElementById("game-viewer").style.display = "none";
    document.getElementById("game-frame").src = "";
};

