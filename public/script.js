const allGames = [
    {
        name: "Capybara Clicker",
        image: "/img/cappyclicker.png",
        html: "/games/cappyclicker.html"
    }
    // add more games here
];

// Example continue-playing (you can fill using localStorage if u want)
const continuePlaying = [
    allGames[0],
    allGames[1]
];

function populateRow(rowId, games) {
    const row = document.getElementById(rowId);

    games.forEach(g => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${g.image}">
            <div class="card-title">${g.name}</div>
        `;

        card.onclick = () => window.location = g.html;
        row.appendChild(card);
    });
}

populateRow("continue-row", continuePlaying);
populateRow("all-row", allGames);

