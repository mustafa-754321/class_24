// name space
const Engine = Matter.Engine ;
const World = Matter.World; ;
const Bodies = Matter.Bodies; 

var engine, world ; 
var box1 ;
var box2 ;
var box3 ;
var box4;
var ground1;
var pig1;
var pig2;
var log1;
var log2;
var box5;
var log3;
var log4;
var bird;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create ();
  world = engine.world;


  box1= new Box (700,320,70,70);
 
  box2 = new Box (920,320,70,70);

  box3 = new Box (700,240,70,70);

  box4 = new Box (920,240,70,70);

  box5 = new Box (810,160,70,70);

  log3 = new Log (760,120,150,PI/7);
  
  log4 = new Log (868,120,150,-PI/7)

  ground1 = new ground (600,height,1200,20);

  pig1 = new pig (810,350);

  pig2 = new pig (810,220);

  log1 = new Log (810,260,300,PI/2);

  log2 = new Log (810,180,300,PI/2);

  bird = new Bird (100,100);
}

function draw() {
  background("black"); 
  Engine.update (engine); 
  box1.display ();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  log2.display();
  box3.display ();
  box4.display();
  pig2.display();
  log3.display();
  log4.display();
  box5.display ();
  bird.display();
} 
 
