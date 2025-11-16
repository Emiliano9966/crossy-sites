// Your games list
const games = [
    {
        name: "Capybara Clicker",
        thumb: "img/cappyclicker.png",
        url: "games/cappyclicker.html"
    }
];

// Build game cards automatically
window.onload = () => {
    const container = document.getElementById("gameContainer");

    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.onclick = () => openGame(game.name, game.url, game.thumb);

        card.innerHTML = `
            <img src="${game.thumb}" />
            <span>${game.name}</span>
        `;

        container.appendChild(card);
    });
};

// Open game screen
function openGame(name, url, icon) {
    document.getElementById("gameList").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    document.getElementById("gameTitle").innerText = name;
    document.getElementById("bottomIcon").src = icon;
    document.getElementById("gameFrame").src = url;

    // Sidebar population
    const side = document.getElementById("sidebarGames");
    side.innerHTML = "";

    games.forEach(g => {
        const img = document.createElement("img");
        img.src = g.thumb;
        img.onclick = () => openGame(g.name, g.url, g.thumb);
        side.appendChild(img);
    });
}

// Close game
function closeGame() {
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("gameList").style.display = "block";
    document.getElementById("gameFrame").src = "";
}
