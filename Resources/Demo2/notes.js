var rmax = 200;
var gratio = 1.6180339
var npts = 400;

var slider


function setup() {
  createCanvas(600, 600);
  background(51);

  fill(230);
  noStroke();

  slider = createSlider(1, 2, 1.6180339, 0.0001);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  gratio = slider.value();

  for (let n = 0; n < npts; n++) {

    let a = n * gratio * 2 * PI;
    let r = rmax * sqrt(n) / sqrt(npts);

    let x = r * cos(a);
    let y = r * sin(a);
    let rad = 10 - 5 * n / npts;
    ellipse(x, y, rad);

  }
}
