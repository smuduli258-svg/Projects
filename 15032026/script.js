


const rain = document.getElementById("rain");
const drops = 200; // number of raindrops

for (let i = 0; i < drops; i++) {

    const drop = document.createElement("div");
    drop.classList.add("drop");

    // random horizontal position
    drop.style.left = Math.random() * 100 + "vw";

    // random animation duration
    drop.style.animationDuration = (0.5 + Math.random()) + "s";

    // random delay
    drop.style.animationDelay = Math.random() * 2 + "s";

    // random height
    drop.style.height = (10 + Math.random() * 20) + "px";

    rain.appendChild(drop);
}
