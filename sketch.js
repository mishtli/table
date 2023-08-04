/*bananas by svaultz*/

var canvas;

function windowResized(){
    resizeCanvas(windowWidth,WindowHeight);
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    background(194,24,7);
    frameRate(10);
}

function draw(){
    //background(194,24,7);
    drawBanana(random(0, width), random(0, height), random(20), random(270));
    //drawBanana(50,50,random(40),random(360));
    drawBanana(random(0, width), random(0,height), random(10), random(360));
    drawBanana(random(0, width), random(0,height), random(15), random(180));
    stroke(8);
    // drawBanana(random(0, width), random(0,height), random(5), random(360));
    // drawBanana(random(0, width), random(0,height), random(5), random(360));
    // drawBanana(random(0, width), random(0,height), random(5), random(360));
    // drawBanana(random(0, width), random(0,height), random(5), random(360));
    // drawBanana(random(0, width), random(0,height), random(5), random(360));
    // drawBanana(random(0, width), random(0,height), random(5), random(360));
}

function drawBanana(x, y, w, rot){
    push();
    translate(x, y); x=0; y=0;
    rotate(rot*PI/180); 
    noFill();
    scale(w);
    translate(-(w-1)*x/w) -((w-1)*y/w);
    stroke(255,245,100,255);
    strokeWeight(5);
    curve(x-50, y-30, x-20, y-2, x+17.5, y-2, x+50, y-30);
    stroke(255,240,0,255);
    strokeWeight(8);
    curve(x-50, y-50, x-20,y, x+15, y, x+50, y-50);
    stroke(240,220,0,255);
    strokeWeight(4);
    curve(x-30, y-70, x-22.5, y, x+17.5, y, x+30, y-70);
    stroke(250, 230, 0, 255);
    strokeWeight(4);
    line(x-23, y-3, x-30, y-7);
    stroke(210, 200, 0, 255);
    point(x+19, y-3);
    pop();   
}