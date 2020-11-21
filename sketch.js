
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16;
var polygon,slingShot;
var roof,bg,backgroundImg;
var score = 0;

function preload(){
 dat();
}

function setup() {
  var canvas = createCanvas(1400,700);

  engine = Engine.create();
	world = engine.world;
 

  box1 = new Box(415,490,40,40);
  box2 = new Box(425,490,40,40);
  box3 = new Box(445,490,40,40);
  box4 = new Box(465,490,40,40);
  box5 = new Box(485,490,40,40);
  box6 = new Box(505,490,40,40);
  box7 = new Box(525,490,40,40);
  box8 = new Box(425,490,40,40);
  box9 = new Box(445,490,40,40);
  box10 = new Box(465,490,40,40);
  box11 = new Box(485,490,40,40);
  box12 = new Box(505,490,40,40);
  box13 = new Box(445,490,40,40);
  box14 = new Box(465,490,40,40);
  box15 = new Box(485,490,40,40);
  box16 = new Box(465,460,40,40);

  polygon = new Polygon(200,350,25);
  
    
  slingShot = new Launcher(polygon.body,{x:200,y:350})
  ground1 = new Ground(460,500,300,20)
  ground2 = new Ground(1000,690,2200,20)

  Engine.run(engine);

}

function draw() {
  if (backgroundImg){
    background(backgroundImg);
   }
   fill("red");
   text("SCORE :"+score,750,40);

   Engine.update(engine); 
  
  ground1.display();
  ground2.display();

  slingShot.display();

  polygon.display();
  
  box1.display();
  box1.score();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
 
 
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  drawSprites();
}

function mouseDragged(){
	
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}
async function dat () {
  var responce = await fetch( "http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var JSONresponce  = await responce.json()
  var dateTime = JSONresponce.datetime;
  var hour = dateTime.slice(11,13);
  if(hour > 6 && hour < 17 ){
    bg = "ybg.jpg";
  }
  else{
    bg = "bbg.jpg"
  }
  backgroundImg = loadImage(bg) 
} 

