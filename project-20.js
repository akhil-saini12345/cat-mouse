var cat,cat_running;
var mouse,mouse_teasing;
var garden,gardenImage;


function preload() {
garden.loadImage("garden.png");
cat.loadAnimation("tomOne.png,tomTwo.png,tomThree.png,tomFour.png");
mouse.loadAnimation("jerryOne.png,jerryTwo.png,jerryThree.png,jerryFour.png");
}

function setup(){
createCanvas(500,500);
garden = createSprite(200,200,200,200)
garden.addImage(gardenImage);

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


if(cat.x-mouse.x<(cat.width-mouse.width))
cat.velocitX = 0;
cat.addAnimation("catlastAnimation",catImage4)
cat.changeAnimation("catlastAnimation")
mouse.addAnimation("mouselastAnimation",mouseImage4)
mouse.changeAnimation("catlastAnimation")
 }
}
