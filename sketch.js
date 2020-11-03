var bullet,wall;
var speed, weight,thickness;
var deformation;

function setup() 
{
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness  = random(22,83);

  bullet = createSprite(50,200,70,15); 
  bullet.shapeColor = "white" 
  bullet.debug = true;
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.debug = true;
  wall.shapeColor = (80,80,80)
  


    
   
}

function draw() 
{
  background(0);
  
  if ( wall.x -  bullet.x  < (bullet.width + wall.width)/2 )
 {
    
    bullet.velocityX = 0;
  
 }

  var damage = 0.5*speed*speed*weight/thickness*thickness*thickness

  if (damage> 10)
  {
     wall.shapeColor = "red"
  }

  if (damage< 10)
  {
    wall.shapeColor = "green"
  } 





  drawSprites();
 }
  
    
     
 

