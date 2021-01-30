var fr, mr
function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 300, 50, 50);
  mr = createSprite(900, 300, 80, 60)
  mr.shapeColor="green"
  fr.shapeColor="green"
  mr.velocityX = -5
}

function draw() {
  background(0);  
  if(mr.x - fr.x <= fr.width/2 + mr.width/2 && 
     fr.x - mr.x <= fr.width/2 + mr.width/2 ){
     fr.velocityX = 0
     mr.velocityX = - mr.velocityX
  }
  if( mr.y - fr.y <= fr.height/2 + mr.height/2 &&
     fr.y - mr.y <= fr.height/2 + mr.height/2){
      fr.velocityY = 0
      mr.velocityY = -mr.velocityY
  }
  if(mr.x == 40 || mr.x == 1160 ){
    mr.velocityX = - mr.velocityX
  }
  drawSprites();
}