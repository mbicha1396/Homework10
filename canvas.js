var redColor = 255;
var greenColor = 210;
var blueColor = 210;
// var head
var x = 250;
var y = 250;
var diameter = 120;
// eyes
var xx = 225;
var yy = 240;
var xxx = 275;
// hands
var m = 95;
var n = 375;
var o = 305;
var p = 30;
// name size
var size = 20;
var count = 0;
var nameDirection = 2;
// shape speed
var movement;
var movementTwo;
var movementThree;
var movementFour;
var movementFive;
// shoes
var q = 175;
var r = 560;

function setup() {
    createCanvas(500,600);
    movement = floor(random() * 10);
    movementTwo = floor(random() * 10);
    movementThree = floor(random() * 10);
    movementFour = floor(random() * 10);
    movementFive = floor(random() * 10);
  }
  function draw() {
    background(50,55,100);
    strokeWeight(1);
    stroke(0);
    fill (255);
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
    stroke(0);
    strokeWeight(1);
    // head
    fill(redColor,greenColor,blueColor);
    circle(x,y,diameter);
    if(x >= 500 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;
    // eyes
    fill(255);
    circle(xx,yy,30);
    circle(xxx,yy,30);
    if(yy >= 600 || yy <= 0)
    {
       movementTwo *= -1;
    }

     yy += movementTwo;
    // pupils
    fill(0);
    circle(xx,yy,10);
    circle(xxx,yy,10);
    //nose
    fill(255,210,210);
    triangle(240,260,250,250,260,260);
    // mouth
    fill(120,0,0);
    rect(225,265,50,25);
    fill(175,0,0);
    rect(240,275,20,15);
    // teeth
    fill(255);
    rect(225,265,10,5);
    rect(235,265,10,5);
    rect(245,265,10,5);
    rect(255,265,10,5);
    rect(265,265,10,5);
    // shirt
    fill(50,225,225);
    rect(200,310,100,125);
    fill(255,210,210);
    // arms
    // left
    rect(125,310,75,25);
    // right
    rect(300,310,75,25);
    // hands
    // left
    rect(m,305,p,p);
    if(m >= 500 || m <= 0)
    {
       movementThree *= -1;
    }

     m += movementThree;
    // right
    rect(n,o,p,p);
    if(o >= 500 || o <= 0)
    {
       movementFour *= -1;
    }

     o += movementFour;
    // sleeves
    fill(50,225,225);
    rect(175,310,25,25);
    rect(300,310,25,25);
    // pants
    fill(0);
    rect(200,435,100,25);
    rect(200,460,35,100);
    rect(265,460,35,100);
    // freckles hair and shoes
    fill(150,90,50);
    rect(q,r,60,25);
    if(q >= 500 || q <= 0)
    {
       movementFive *= -1;
    }
    q += movementFive;
     if(r >= 600 || r <= 0)
     {
        movementFive *= -1;
     }
 
      r += movementFive;
    rect(265,560,60,25);
    strokeWeight(5);
    stroke(150,90,50);
    line(220,175,230,195);
    line(250,170,250,195);
    line(280,175,270,195);
    point(215,260);
    point(210,265);
    point(220,265);
    point(285,260);
    point(290,265);
    point(280,265);
    strokeWeight(1);
    stroke(0,0,0);
    fill (0,150,30);
    textSize(size);
    size+= nameDirection;
    count++;
    if(count > 5)
    {
      nameDirection *=-1;
      count = 0;
    }
    text("My Self Portrait",25,25);
    fill (150,0,150);
    textSize(20);
    text("Marley Bicha",25,575);
  
  }