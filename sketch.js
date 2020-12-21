var rect1, rect2, rect3;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(400, 300, 50, 50);
  rect3 = createSprite(400, 400, 50, 50);
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
  rect1.velocityY = 3;
  rect2.velocityY = -3;
  rect3.velocityY = -5;
}

function draw() {
  background(0);  

  bounceOff(rect1, rect3);

  if(isTouching(rect3, rect2)){

    rect3.shapeColor = "red";
    rect2.shapeColor = "blue";
  } else {
    rect3.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  drawSprites();
}