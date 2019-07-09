var foo, bar;

function preload() {
   // foo = loadImage('./foo.png');
}

function setup() {
    createCanvas(400, 400);
    background(51);
}

function draw() {
    fill(225);
    ellipse(mouseX, mouseY, 60, 60);
}