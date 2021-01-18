var cat,cat_running;
var mouse,mouse_teasing;
var garden,gardenImage;


function preload() {
gardenImage=loadImage("garden.png");
cat_running=loadAnimation("tomOne.png,tomTwo.png,tomThree.png,tomFour.png");
mouse_teasing=loadAnimation("jerryOne.png,jerryTwo.png,jerryThree.png,jerryFour.png");
}

function setup(){
createCanvas(500,500);
garden = createSprite(200,200,200,200)
garden.addImage(gardenImage);
cat = createSprite(200,200,20,20);
mouse = createSprite(100,100,10,10)
}

function draw() {
background(255)

drawSprites();
}


function keyPressed(){
if(keyCode == LEFT_ARROW){
  
cat.velocityX = -4;
cat.addAnimation("cat_running",catImage2)
cat.changeAnimation("cat_running")
mouse.addAnimation("mouse_teasing",mouseImage2)
mouse.changeAnimation("mouse_teasing")

}
if(cat.x-mouse.x<(cat.width-mouse.width)){
cat.velocitX = 0;
cat.addAnimation("catlastAnimation",catImage4)
cat.changeAnimation("catlastAnimation")
mouse.addAnimation("mouselastAnimation",mouseImage4)
mouse.changeAnimation("catlastAnimation")
 }
}
