
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(370,200,480,20)
b1=new Ball(200,500,40)
b2=new Ball(280,500,40)
b3=new Ball(360,500,40)
b4=new Ball(440,500,40)
b5=new Ball(520,500,40)
r1=new Rope(roof.body,b1.body,-160,0)
r2=new Rope(roof.body,b2.body,-80,0)
r3=new Rope(roof.body,b3.body,0,0)
r4=new Rope(roof.body,b4.body,80,0)
r5=new Rope(roof.body,b5.body,160,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 roof.display()
 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 r1.display()
 r2.display()
 r3.display()
 r4.display()
 r5.display()
}

function keyPressed() {
	if(keyCode==32){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45}
			)
	}
}

