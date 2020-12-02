const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload() {
  
}


function setup(){
  var canvas = createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,450,1000,20);
  stand = new Ground(430,350,300,20);
  block1 = new Box(435,350,30,40);
  
}

function draw(){
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  ground.display();
  stand.display();
  block1.display();
  
}