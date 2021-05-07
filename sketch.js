const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = 0;
var play = 0;
var end = 1;
var score = 0;
function preload(){
  img = loadImage("ball.png");
  backgroundImg = loadImage("morning.jpg")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
 
  createCanvas(1360,650);
 ground1 = new Ground (3,640,2715,20);
 ground2 = new Ground (700,400,350,20);
 ground3 = new Ground (1150,300,350,20);
 block1 = new Box(700,340,50,100);
 block2 = new Box(650,340,50,100);
 block3 = new Box(600,340,50,100);
 block4 = new Box(700,140,50,100);
 block5 = new Box(750,340,50,100);
 block6 = new Box(800,340,50,100);
 block7 = new Box(750,140,50,100);
 block8 = new Box(670,240,50,100);
 block9 = new Box(720,240,50,100);
 block10 = new Box(770,240,50,100);
 block12 = new Box(670,40,50,100);
 block13 = new Box(620,240,50,100);
 block14 = new Box(730,40,50,100);
 block15 = new Box(1050,240,50,100);
 block16 = new Box(650,140,50,100);
 block17 = new Box(1100,240,50,100);
 block18 = new Box(1150,240,50,100);
 block19 = new Box(1200,240,50,100);
 block20 = new Box(1250,240,50,100);
 block21 = new Box(1120,140,50,100);
 block22 = new Box(1170,140,50,100);
 block23 = new Box(1220,140,50,100);
 block24 = new Box(1070,140,50,100);
 block11 = new Box(1150,40,50,100);
 block25 = new Box(1200,40,50,100);
ball = Bodies.circle(50,200,20);
World.add(world,ball);

thread = new Shooter(this.ball,{x:100,y:200});
 Engine.run(engine);
 
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
 // drawSprites();
 //if(gamestate)
  ground1.display();
  ground2.display();
  ground3.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
 block21.display();
  block22.display();
  block23.display();
  block24.display();
  block11.display();
  block25.display();
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();

thread.display();
imageMode(CENTER);
image(img,ball.position.x,ball.position.y,40,40);
textSize(15)
text("score:"+score,100,100)
getTime();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  thread.fly()
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var dt = responseJSON.datetime;
  var hour = dt.slice(11,13);
  console.log (hour);
  if(hour>=05&&hour<=16){
      bg = "morning.jpg"
  }else{
      bg = "night.jpg"
  }backgroundImg = loadImage(bg);
}
