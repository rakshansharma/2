var bgImg , bathImg , brushImg , drinkImg , eatImg , gymImg , moveImg , sleepImg;
var bg , bath , brush , drink , eat , gym , move , sleep , astornoat , edges;
function preload() {
  bgImg = loadImage("iss.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  brushImg = loadAnimation("brush.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  gymImg = loadAnimation("gym11.png","gym12.png","gym1.png","gym2.png");
  moveImg = loadAnimation("move.png","move1.png");
  sleepImg = loadAnimation("sleep.png");
}

function setup() {
  createCanvas(600,500);
  edges=createEdgeSprites();
  
  
  astornoat = createSprite(300,230);
  astornoat.addAnimation("sleeping" , sleepImg);
  astornoat.scale = 0.1;

}

function draw() {
  background(bgImg);
  fill("white")
  textSize(20);
  text("instruction: ",20,35);

  textSize(15);
  text("Up Arrow = Brushing",20,55);

  text("Down Arrow = Gyming",20,70);

  text("Left Arrow = Eating",20,85);

  text("Right Arrow = Bathing",20,100);

  text("M key = Moving",20,115);
    astornoat.bounceOff(edges);
  
  if (keyDown("UP_ARROW")){
    astornoat.addAnimation("brushing" , brushImg);
    astornoat.changeAnimation("brushing");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astornoat.addAnimation("gyming" , gymImg);
    astornoat.changeAnimation("gyming");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astornoat.addAnimation("eating" , eatImg);
    astornoat.changeAnimation("eating");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astornoat.addAnimation("bathing" , bathImg);
    astornoat.changeAnimation("bathing");
    astornoat.y = 260;
    astornoat.velocityX = 0;
    astornoat.velocityY = 0;
  }
  if(keyDown("M")){

    astornoat.addAnimation("move" , moveImg);
    astornoat.changeAnimation("move");
    astornoat.velocityX = 1;
    astornoat.velocityY = 1;
  }

  drawSprites();
}