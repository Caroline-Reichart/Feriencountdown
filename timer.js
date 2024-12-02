const releaseDate = new Date("Dec 20, 2024 13:30:00").getTime();

const timerFunction = setInterval(() => {
    const now = new Date().getTime();
    const diff = releaseDate - now;

    if (diff < 0) {
        clearInterval(timerFunction);
        document.getElementById("timer").innerHTML = "Ferien";
        return;
    }

    const timeUnits = [
        { unit: "Tage", value: Math.floor(diff / (1000 * 60 * 60 * 24)) },
        { unit: "Stunden", value: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) },
        { unit: "Minuten", value: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) },
        { unit: "Sekunden", value: Math.floor((diff % (1000 * 60)) / 1000) }
    ];

    document.getElementById("timer").innerHTML = timeUnits
        .map(({ unit, value }) => `<span>${value}<br><i>${unit}</i></span>`)
        .join("");
}, 1000);

