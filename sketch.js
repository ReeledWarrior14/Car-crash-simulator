var car, wall;

var speed, weight, deformation;

var gamestate;

function preload(){
  car1 = loadAnimation('car.png');
}

function setup() {
  createCanvas(1500, 400);

  car = createSprite(100, 200, 50, 50);
  car.addAnimation('car', car1);
  car.scale = 0.05;

  wall = createSprite(1450, 200, 60, 300);
  wall.shapeColor = 'black';

  speed = 0;

  gamestate = 'waiting';

  speed = prompt('What do you want the speed (in MPH) to be?');
  speed = speed/3;
  weight = prompt('What do you want the weight (in pounds) to be?');
}

function draw() {
  background(220);

  if (gamestate == 'waiting' && keyDown('space')){
    car.velocityX = 5 + speed;
    gamestate = 'playing';
  }

  if (gamestate == 'playing'){
    car.overlap(wall, played)
  }

  if (gamestate == 'played' && keyDown('space') && car.overlap(wall)){
    car.x = -50;
    car.velocityX = 2.5;
  }

  if (gamestate == 'played'){
    deformation = 0.5 * weight * speed * speed;
    deformation = deformation/22500;
    fill('blue');
    textSize(20);
    text('Deformation: ' + deformation + '%', width/2, height/5);
  }
  
  car.collide(wall);

  drawSprites();

  textSize(20);
  fill('blue');
  text('Weight: ' + weight + '   Speed: ' + speed, 50, 50);
}

function played(){
  gamestate = 'played';
}