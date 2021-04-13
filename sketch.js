var bullet;
var wall;
var speed;
var weight;
var thickness;





function setup() {
  createCanvas(1600,400);

  speed=random(100,150);
  weight=random(30,52);
  thickness=random(22,83);

  bullet= createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor="white";

 
}

function draw() {
  background("black"); 

  
  if(keyDown("right")){
    bullet.velocityX=speed;
 
  }

  if(keyDown("left")){
    reset();
  }
  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage<10){
      wall.shapeColor="green";
    }
    if(damage>10){
      wall.shapeColor="red";
    }

    

  }
  
  if(bullet.velocityX>100 && bullet.velocityX<120){
    bullet.shapeColor="blue";
  }
  if(bullet.velocityX>120 && bullet.velocityX<140){
    bullet.shapeColor="yellow";
  }
  if(bullet.velocityX>140 && bullet.velocityX<150){
    bullet.shapeColor="magenta";
  }



  drawSprites();
}


function hasCollided(bullet,wall){
  var bulletRightEdge=bullet.x+bullet.width;
  var wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}

function reset(){
  bullet.x=50;
  bullet.velocityX=0;
  bullet.shapeColor="white";
  weight=random(30,52);
  speed=random(100,150);
  thickness=random(22,83);
  wall.width=thickness;
}



