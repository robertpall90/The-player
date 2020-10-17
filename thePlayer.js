const player = document.getElementById("player");
const enemy1 = document.getElementById("enemy1");
let x = 270, x1 = 60, x2 = 290, x3 = 270, x4 = -180, x5 = -190;
let y = 270, y1 = 60, y2 = 120, y3 = 450, y4 = 480, y5 = 270;

initialPosition();
function initialPosition() {
    player.style.position = "relative";
    player.style.left = `${x}px`;
    player.style.top = `${y}px`;
}

window.addEventListener("keydown", movePosition);
function movePosition(event) {
    // console.log(event.code);

    if (event.code == "ArrowLeft" && x >= 30) {
        x = x - 30;
        player.style.left = `${x}px`;
    } else if (event.code == "ArrowRight" && x <= 510) {
        x = x + 30;
        player.style.left = `${x}px`;
    } else if (event.code == "ArrowUp" && y >= 30) {
        y = y - 30;
        player.style.top = `${y}px`;
    } else if (event.code == "ArrowDown" && y <= 510) {
        y = y + 30;
        player.style.top = `${y}px`;
    }
}

positionEnemy();
function positionEnemy() {
    enemy1.style.position = "relative";
    enemy1.style.left = `${x1}px`
    enemy1.style.top = `${y1}px`

    enemy2.style.position = "relative";
    enemy2.style.left = `${x2}px`
    enemy2.style.top = `${y2}px`

    enemy3.style.position = "relative";
    enemy3.style.left = `${x3}px`
    enemy3.style.top = `${y3}px`

    enemy4.style.position = "relative";
    enemy4.style.left = `${x4}px`
    enemy4.style.top = `${y4}px`

    enemy5.style.position = "relative";
    enemy5.style.left = `${x5}px`
    enemy5.style.top = `${y5}px`
}


