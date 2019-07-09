var symbolSize = 30
var streams = [];
var Canvas

var looping = true
var track

function preload(){
    //track = loadSound('./ClubbedToDeath.mp3');
}

function setup() {
    Canvas = createCanvas(
      window.innerWidth ,
      window.innerHeight);
    Canvas.parent('canvas');
    Canvas.position(window.innerWidth/2 - width/2, window.innerHeight/2 - height/2)
  background(0);
  
  var x = 0;
  for (var i = 0; i <= width/symbolSize;i++) {
      var stream = new Stream();
      stream.generateSymbols(x,random(-1000));
      streams.push(stream);
      x+=symbolSize;
}

 setTimeout( function(){noLoop()}, 30000);

  
}


function draw() {
    background(0, 100);
    
   streams.forEach(function(stream){
       stream.render();
});
}


function Symbol(x,y,speed, first) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switchInterval = round(random(2,20));
    this.first = first;
    
    this.setToRandomSymbol = function() {
        if (frameCount % this.switchInterval == 0){
        this.value = String.fromCharCode(
            0x30A0 + round(random(0,96)) //0x30A0  Hindi char 0x0903 
        );
        }
    }
    

    this.rain = function() {
        
        this.y = (this.y>= height) ? 0 : this.y += this.speed;

    }
    
}



function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(5,20));
    this.speed = random(5,12);
    this.symSize = symbolSize - 20 + this.speed

    
    this.generateSymbols = function(x,y) {
        
        var first = round(random(0,4)) == 1;
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x,y,this.speed,first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
            first = false;
        }
    }
    
    this.render = function() {
        textSize(this.symSize);
        this.symbols.forEach(function(symbol){
            if (symbol.first){
                fill(180,255,180);
            }else {
            fill(0,255,70);
            }
            text(symbol.value,symbol.x,symbol.y);
            symbol.rain();
            symbol.setToRandomSymbol();
        });
    }
    
}


function mousePressed() {
    if (looping){
        //noLoop();
       // track.pause();
        looping = false
    }  else{
        //loop();
       // track.play();
        looping = true;
    } 
}














function keyPressed() {
    
    if(keyCode == DELETE){
        console.log('Animation Stopped');
        noLoop();
    }
}
