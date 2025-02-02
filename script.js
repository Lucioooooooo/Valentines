function moveRandoEl(elm) {
    elm.style.position = "absolute"; // Ensure it can move

    let maxWidth = window.innerWidth - elm.clientWidth;
    let maxHeight = window.innerHeight - elm.clientHeight;

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    elm.style.left = randomX + "px";
    elm.style.top = randomY + "px";
}

const moveRandom = document.querySelector("#move-random");

// Change the event listener to 'click' instead of 'mouseenter'
moveRandom.addEventListener("click", function (e) {
    moveRandoEl(e.target);
});
