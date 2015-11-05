var player;
var ball;
var goal;

//This is the setup//
function setup() {
  createCanvas{250, 500);
  player = createSprite(125, 400, 50, 50);
  ball = createSprite(125, 50, 25, 25);
  goal = createSprite(125, 5, 100, 25)
}

//This is the stuff that constantly changes//
function draw() {
  background(255, 240, 220);
  drawSprites();
  
  player.position.x = mouseX;
  player.position.y = mouseY;
  
  ball.bounce(player);
  if (ball.overlap(goal)) {
    ball.remove();
  }
}
