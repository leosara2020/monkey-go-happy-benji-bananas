var m,mI;
var g;
var ob,obI,obG;
var B,BI,BG;

function preload(){
  mI=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

  BI=loadImage("banana.png");
  obI=loadImage("obstacle.png");
}
function setup(){
  createCanvas(600,200);
  m=createSprite(50,160,10,10);
  m.scale=0.1;
  m.addAnimation("mI",mI);
  
  g=createSprite(500,180,10000,10);
  g.velocityX=-4;
  g.x=g.width/2;
  console.log(g.x);
  
  BG=createGroup();
  if(frameCount%60){
  B=createSprite(590,Math.round(random(120,200)),10,10)
  B.velocityX=-4;
  }
  
    obG=createGroup();
  
  
}
function draw(){
  background("red");
   if (keyDown("space")){
    m.velocityY=m.velocityY-5;
  }
 
  
  
  m.collide(g);
  drawSprites();

  }
 
