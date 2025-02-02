function moveRandoEl(elm) {
    elm.style.position = "absolute"; // Ensure absolute positioning
    let maxWidth = window.innerWidth - elm.clientWidth;
    let maxHeight = window.innerHeight - elm.clientHeight;

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    elm.style.left = randomX + "px";
    elm.style.top = randomY + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandoEl(e.target); // Correct function call
});
