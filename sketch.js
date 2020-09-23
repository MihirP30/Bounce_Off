var fixed_rectangle, moving_rectangle;

function setup() {
  createCanvas(800,400);
  fixed_rectangle = createSprite(200, 200, 50, 80);
  fixed_rectangle.shapeColor = "green";
  fixed_rectangle.debug = true;
  fixed_rectangle.velocityX = 3;
  moving_rectangle = createSprite(400, 200, 80, 30);
  moving_rectangle.shapeColor = "green";
  moving_rectangle.debug = true;
  moving_rectangle.velocityX = -3;
}

function draw() {
  background(0,0,0);

    if(moving_rectangle.x - fixed_rectangle.x <= fixed_rectangle.width/2 + moving_rectangle.width/2 &&
       fixed_rectangle.x - moving_rectangle.x <= fixed_rectangle.width/2 + moving_rectangle.width/2 &&
       moving_rectangle.y - fixed_rectangle.y <= fixed_rectangle.height/2 + moving_rectangle.height/2 &&
       fixed_rectangle.y - moving_rectangle.y <= fixed_rectangle.height/2 + moving_rectangle.height/2) {
      // fixed_rectangle.shapeColor = "red";
      // moving_rectangle.shapeColor = "red";
      fixed_rectangle.velocityX = fixed_rectangle.velocityX * -1;
      moving_rectangle.velocityX = moving_rectangle.velocityX * -1;
    }
    else {
      fixed_rectangle.shapeColor = "green";
      moving_rectangle.shapeColor = "green";
    }

  drawSprites();
}