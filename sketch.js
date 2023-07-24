var path,boy,cinnamoroll,keroppi,purin,letterX;
var pathImg,boyImg,cinnamorollImg,keroppiImg,purinImg,letterXImg;
var friendsCollection = 0;
var cinnamorollG,keroppiG,purinG,letterXGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Hello Kitty.png","Hello Kitty 2.png");
  cinnamorollImg = loadImage("Cinnamoroll.png");
  keroppiImg = loadImage("Keroppi.png");
  purinImg = loadImage("Purin.png");
  letterXImg = loadImage("X.png");
  endImg =loadAnimation("gameOver.png");
  sadkittyImg = loadImage("sadkitty-16.png.png")

//  hlmusic=loadSound("Hello Kitty Paradise.mp3")
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.addAnimation("sad",sadkittyImg)
  
  
cinnamorollG=new Group();
keroppiG=new Group();
purinG=new Group();
letterXGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  //hlmusic.play()
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createcinnamoroll();
    createkeroppi();
    createpurin();
    createletterX();

    if (cinnamorollG.isTouching(boy)) {
      cinnamorollG.destroyEach();
      friendsCollection=friendsCollection+50;
    }
    else if (keroppiG.isTouching(boy)) {
      keroppiG.destroyEach();
      friendsCollection=friendsCollection+100;
      
    }else if(purinG.isTouching(boy)) {
      purinG.destroyEach();
      friendsCollection= friendsCollection + 150;
      
    }else{
      if(letterXGroup.isTouching(boy)) {
        gameState=END;
        
        boy.changeAnimation("sad",sadkittyImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.4;
        
        cinnamorollG.destroyEach();
        keroppiG.destroyEach();
        letterXGroup.destroyEach();
        
        cinnamorollG.setVelocityYEach(0);
        keroppiG.setVelocityYEach(0);
        purinG.setVelocityYEach(0);
        letterXGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill("red");
  
  text("friends: "+ friendsCollection,150,30);
  }

}

function createcinnamoroll() {
  if (World.frameCount % 200 == 0) {
  var cinnamoroll = createSprite(Math.round(random(50, 350),40, 10, 10));
  cinnamoroll.addImage(cinnamorollImg);
  cinnamoroll.scale=0.4;
  cinnamoroll.velocityY = 3;
  cinnamoroll.lifetime = 150;
  cinnamorollG.add(cinnamoroll);
  }
}

function createkeroppi() {
  if (World.frameCount % 320 == 0) {
  var keroppi = createSprite(Math.round(random(50, 350),40, 10, 10));
  keroppi.addImage(keroppiImg);
  keroppi.scale=0.3;
  keroppi.velocityY = 3;
  keroppi.lifetime = 150;
  keroppiG.add(keroppi);
}
}

function createpurin() {
  if (World.frameCount % 410 == 0) {
  var purin = createSprite(Math.round(random(50, 350),40, 10, 10));
  purin.addImage(purinImg);
  purin.scale=0.6;
  purin.velocityY = 3;
  purin.lifetime = 150;
  purinG.add(purin);
  }
}

function createletterX(){
  if (World.frameCount % 530 == 0) {
  var letterX = createSprite(Math.round(random(50, 350),40, 10, 10));
  letterX.addImage(letterXImg);
  letterX.scale=0.1;
  letterX.velocityY = 3;
  letterX.lifetime = 150;
  letterXGroup.add(letterX);
  }
}