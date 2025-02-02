function moveRandoEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
     elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.EventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});
