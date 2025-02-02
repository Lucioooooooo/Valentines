function moveRandoEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "px";
    elm.style.left= Math.floor(Math.random() * 90 + 5) + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});
