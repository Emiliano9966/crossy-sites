// Games list
const games = [
    {
        name: "Add a Game",
        thumb: "img/grf.jpg",
        url: "games/grf.html",
        isRecommended: false,
        thumb2: "img/grf_banner.webp"
    },
    {
        name: "Monkey Mart",
        thumb: "img/monkeymart.webp",
        url: "games/monkeymart.html",
        isRecommended: true,
        thumb2: "img/monkeymart_banner.webp"
    },
    {
        name: "Retro Bowl",
        thumb: "img/retrobowl.png",
        url: "games/retrobowl.html",
        isRecommended: false,
        thumb2: "img/retrobowl_banner.webp"
    },
    {
        name: "Ragdoll Archers",
        thumb: "img/arc.png",
        url: "games/arc.html",
        isRecommended: false,
        thumb2: ""
    },
    {
        name: "Basket Random",
        thumb: "img/bsr.png",
        url: "games/bsr.html",
        isRecommended: false
    },
    {
        name: "Capybara Clicker",
        thumb: "img/cappyclicker.png",
        url: "games/cappyclicker.html",
        isRecommended: true,
        thumb2: "img/cappy_banner.webp"
    },
    {
        name: "Doge Miner 2",
        thumb: "img/basketstars.png",
        url: "games/basketstars.html",
        isRecommended: false
    },
    {
        name: "Moto X3M",
        thumb: "img/motox3.png",
        url: "games/motox3.html",
        isRecommended: false
    },
    {
        name: "Drive Mad",
        thumb: "img/2048.png",
        url: "games/2048.html",
        isRecommended: false,
        thumb2: "img/drive_banner.webp"
    },
    {
        name: "Sushi Cat",
        thumb: "img/scat.png",
        url: "games/scat.html",
        isRecommended: false
    },
    {
        name: "FnF",
        thumb: "img/fnf.png",
        url: "games/fnf.html",
        isRecommended: false
    },
    {
        name: "Hardware Tycoon",
        thumb: "img/hrt.png",
        url: "games/hrt.html",
        isRecommended: false
    },
    {
        name: "OVO",
        thumb: "img/ovo.png",
        url: "games/ovo.html",
        isRecommended: false,
        thumb2: "img/ovo_banner.webp"
    },
    {
        name: "Cookie Clicker",
        thumb: "img/cookieclick.png",
        url: "games/cookieclick.html",
        isRecommended: false
    },
    {
        name: "Gun Spin",
        thumb: "img/gunspin.png",
        url: "games/gunspin.html",
        isRecommended: false
    },
    {
        name: "Tiny Fishing",
        thumb: "img/gn.png",
        url: "games/gn.html",
        isRecommended: true,
        thumb2: "img/gn_banner.webp"
    },
];

// =========================
// Build Game Grid
// =========================
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

    startRecommendedSlider();
};

// =========================
// Recommended Banner Rotator
// =========================

const recGames = games.filter(g => g.isRecommended && g.thumb2);
let recIndex = 0;

function showRecommended() {
    const g = recGames[recIndex];

    const img = document.getElementById("recImage");
    const name = document.getElementById("recName");

    img.classList.remove("fadeIn");
    img.classList.add("fadeOut");

    setTimeout(() => {
        img.src = g.thumb2;
        name.innerText = g.name;

        img.onclick = () => openGame(g.name, g.url, g.thumb);

        img.classList.remove("fadeOut");
        img.classList.add("fadeIn");
    }, 300);

    recIndex = (recIndex + 1) % recGames.length;
}

function startRecommendedSlider() {
    showRecommended();
    setInterval(showRecommended, 3000); // rotate every 3s
}

// =========================
// Game Screen open/close
// =========================

function openGame(name, url, icon) {
    document.getElementById("gameList").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    document.getElementById("gameTitle").innerText = name;
    document.getElementById("bottomIcon").src = icon;
    document.getElementById("gameFrame").src = url;

    const side = document.getElementById("sidebarGames");
    side.innerHTML = "";

    games.forEach(g => {
        const img = document.createElement("img");
        img.src = g.thumb;
        img.onclick = () => openGame(g.name, g.url, g.thumb);
        side.appendChild(img);
    });
}

function closeGame() {
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("gameList").style.display = "block";
    document.getElementById("gameFrame").src = "";
}


