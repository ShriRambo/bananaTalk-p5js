
var npts = 300
var rmax = 200
var gratio = 1.61803398875 

var slider

function setup(){
    createCanvas(600,600);
    background(52);
    //frameRate(1)

    slider = createSlider(1, 2, gratio, 0.0001);
}

function draw(){
    background(52);
    translate(width/2,height/2);
    gratio = slider.value();

    for(let i = 0; i < npts; i++){
        let r = rmax * sqrt(i)/sqrt(npts);
        let a = gratio * i *  TWO_PI;

        let x = r * cos(a);
        let y = r * sin(a);

        let rad = 8 + 12 * i / npts;

        //fill(random(0,255), random(0,255), random(0,255)  )
        ellipse(x,y,rad);

    }
}


function mousePressed(){
   // noLoop();
}