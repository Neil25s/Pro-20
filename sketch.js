var garden;
var cat,cat1,cat2,cat3,cat4;
var mouse,mouse1,mouse2,mouse3,mouse4;

function preload() {    
   
    garden=loadImage("images/garden.png");
    mouse2=loadAnimation("images/mouse4.png","images/mouse3.png","images/mouse2.png","images/mouse1.png");
    cat1=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
  
}
function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(800,600,400,50);
    cat.addAnimation("v",cat1)
    mouse=createSprite(50,600,600,50);
    mouse.addAnimation("a",mouse2)
}

function draw(){   

    background(garden);

    cat.scale = 0.2
    mouse.scale = 0.2

    if(cat1.x-mouse2.x<mouse2.width/2+cat1.width/2 && mouse2.x-cat.x<mouse2.width/2+cat1.width/2 &&
        ca1t.y-mouse2.y<mouse2.height/2+cat1.height/2 && mouse2.y-cat.y<mouse2.height/2+cat1.height/2){
        }

        
    drawSprites();
}


function keyPressed(){
   
if (keyCode === ("space")){
    cat1.velocityY=3
    mouse.addAnimation("a",mouse2);
    cat.addAnimation("v",cat1);

}
}