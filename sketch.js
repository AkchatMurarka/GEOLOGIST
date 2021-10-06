const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;
var wall1,wall2;
var plane1,plane2;
var iron,stone1,stone2,stone3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,height-10,1200,20);
    plane2 = new Plane(600,10,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,200,50);
  wall1 = new Wall(10,300,20,600);
  wall2 = new Wall(width-10,300,20,600);
iron = new Iron(750,350);
stone1 = new Stone(400,300);
stone2 = new Stone(450,300);
stone3 = new Stone(500,300);

}

function draw(){
    
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    plane2.display();
    hammer.display();
    rubber.display();
    wall1.display();
    wall2.display();
iron.display();
stone1.display();
stone2.display();
stone3.display();
    
 
}