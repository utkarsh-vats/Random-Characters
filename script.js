const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const images = {};
images.player = new Image();
images.player.src = "./character.png";

// const characterActions = ["up", "up right", "right", "down right", "down", "jump"];
const characterActions = ["up", "right", "down", "down right"];
const characters = [];
const characterCount = 20;
for(let i = 0; i < characterCount; i++) {
    characters.push(new Character(characterActions));
}
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    // ctx.drawImage(image, dx, dy);
    // ctx.drawImage(image, dx, dy, dw, dh);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    // s -> source attributes
    // d -> display/destination attributes
    //  i.e. picking a part of image from source and printing it on the canvas
    // basically a cropped image
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    characters.forEach(char => {
        char.draw();
        char.update();
    });
}

window.onload = setInterval(animate, 1000/30);
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});