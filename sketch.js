
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,ball,ground;
var box1,box2;



function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

box1=new Box(200,360,60,60);
box2=new Box(220,100,60,100)

ground=new Ground(200,400,400,20);
console.log(box2)
}

function draw() {
  background(0);  
  Engine.update(engine);

    box1.display();
    box2.display();

    ground.display();


}










