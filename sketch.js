
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	//create box
	box1=createSprite(400,655,200,10);
	box2=createSprite(300,635,10,50);
	box3=createSprite(500,635,10,50);

	//paper
	paper = new Paper(500,500,50,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position, {x:85,y:-85});
	   
	 }
   }
   
   


