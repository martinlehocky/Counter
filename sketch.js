var resetbutton;
var buttonimage;
var counter = 0;
var resetbuttonImage;
var button;

function preload(){
  
  buttonimage = loadImage("button.png");
  resetbuttonImage = loadImage("reset.png");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  button = createSprite(windowWidth /2 ,windowHeight /2 + 100,10,10);
  button.addImage(buttonimage);
  button.scale = 0.4;
   
  
  resetbutton = createSprite(windowWidth /2, button.y - 150, 10, 10);
  resetbutton.addImage(resetbuttonImage);
  resetbutton.scale = 0.1;
}

function draw() {
  background(220);
  
  textSize(100);
  text(counter, windowWidth /2 - 30 , resetbutton.y - 100);
  
  if(touches.length > 0 && touches.Y > 360 && touches.Y <  480 && touches.X > 280 && touches.X < 400){
    
    counter = counter + 1;
    
  }
     
  //if()){
    
    
    
 // }
  
     drawSprites();
  
}
  
  
  
  