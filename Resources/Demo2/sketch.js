
var npts = 400;
var rmax = 200;
var gratio = 1.6180339

var slider

function setup(){
    createCanvas(600,600);

    slider = createSlider(1,2,gratio, 0.0001);
}

function draw(){
    background(51);
    translate(width/2,height/2);
    gratio = slider.value();

    for(let i = 0; i < npts; i++){

        let r = rmax * sqrt(i)/sqrt(npts);
        let a = i * gratio * TWO_PI;

        let x = r * cos(a);
        let y = r * sin(a);

        let rad = 10 + 8*i/npts
        ellipse(x,y,rad);
    }

}