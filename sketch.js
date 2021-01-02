var f,m;
function setup() {
  createCanvas(800,400);
 f =  createSprite(400, 200, 50, 50);
 m = createSprite (400,300, 70 , 55);
 
}

function draw() {
  background(255,255,255);  
 m.x = mouseX;
 m.y = mouseY; 
 if (isTouching(m,f)){
  m.shapeColor= "red";
  f.shapeColor= "red";
  
 }
 else {
  m.shapeColor= "silver";
  f.shapeColor= "silver";
 }

  drawSprites();
  
}
