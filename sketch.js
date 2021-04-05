var bgImg;

var cat,catimg;

var mouse,mouseImg;

function preload() {
    //load the images here

bgImg = loadImage("garden.png");
catsleeping = loadAnimation("cat1.png");
catwalking = loadAnimation("cat2.png","cat3.png");
catsitting = loadAnimation("cat4.png");
mousestanding = loadAnimation("mouse1.png");
mouseup = loadAnimation("mouse2.png");
mousesearch = loadAnimation("mouse4.png");
mousethumbsup = loadAnimation("mouse3.png");

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat = createSprite(900,650)
    cat.addAnimation("sleeping",catsleeping);
    cat.scale= 0.1;

    mouse = createSprite(100,650);
    mouse.addAnimation("walking",mousestanding);
    mouse.scale = 0.1;
    mouse.velocityX = 2;


    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide


if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("up",mouseup);
    mouse.changeAnimation("up",mouseup);
    mouse.velocityX = 0;


}

if(keyCode===DOWN_ARROW){
mouse.addAnimation("search",mousesearch);
mouse.changeAnimation("search",mousesearch);
mouse.velocityX = 0;

}

if(cat.isTouching(mouse)){
    cat.addAnimation("sitting",catsitting);
    cat.changeAnimation("sitting",catsitting);
    cat.velocityX = 0;
    mouse.addAnimation("thumbsup",mousethumbsup);
    mouse.changeAnimation("thumbsup",mousethumbsup);
    


}



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.addAnimation("walking",catwalking);
      cat.changeAnimation("walking",catwalking);
      cat.velocityX = -2;
  }


}
