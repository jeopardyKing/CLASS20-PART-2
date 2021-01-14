var fixedrec,movingrec;

function setup() {
  createCanvas(1200,1200);

  //creating sprite
  fixedrec=createSprite(100, 600, 200, 100);
  fixedrec.shapeColor="red";
  fixedrec.velocityX=5;
  
  //creating sprite
  movingrec=createSprite(1200,600,200,100);
  movingrec.shapeColor="red";
  movingrec.velocityX=-5
}

function draw() {
  background(0);
  
  //BOUNCE OFF ALGORITM HORIZONTALLY
  if(movingrec.x-fixedrec.x<fixedrec.width/2+movingrec.width/2 && 
    fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2){
     movingrec.velocityX=movingrec.velocityX*(-1);
     fixedrec.velocityX=movingrec.velocityX*(-1);
    }
    
    //BOUNCE OFF ALGORITHIM VERTICALLY
    if(fixedrec.y-movingrec.y<fixedrec.height/2+movingrec.height/2 &&
      movingrec.y-fixedrec.y<fixedrec.height/2+movingrec.height/2)
      {
        movingrec.velocityY=movingrec.velocityY*(-1);
        fixedrec.velocityY=fixedrec.velocityY*(-1);
      }

  drawSprites();
}