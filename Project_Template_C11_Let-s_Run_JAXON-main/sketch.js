var jaxonImg, jaxon, pathImg, path, left_boundary, right_boundary;


function preload(){
  //pre-load images

  jaxonImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
  jaxon=createSprite(180,340);
  jaxon.addAnimation("running", jaxonImg);
  
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
  
  left_boundary.visible=false;
  right_boundary.visible=false;

  

}

function draw() {
  background(0);
  jaxon.x=World.mouseX;
  if(path.y>400) {
    path.y=height/2 ;
  }
  jaxon.collide(left_boundary);
  jaxon.collide(right_boundary);
  edges=createEdgeSprites();
  jaxon.collide(edges)
 drawSprites();
}