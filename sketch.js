var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(100,200,50,50);
  object1.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
  else if(isTouching(movingRect,object1)){
   movingRect.shapeColor="red";
   object1.shapeColor="red";
  }
 else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor= "green";
   object1.shapeColor="green";

 }
  



  drawSprites();
}
function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) 
    {
       return true;
    }
    else{
      return false;
    }
}
