var dustbinleft,dustbinright,dustbincentre;
var ball;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(400,300);

	ball = new Ball(200,450,40);

	ground = new Ground(width/2,height,1200,10);

	//Create the Bodies Here.

	Engine.run(engine);
  
}

function draw() {
  	rectMode(CENTER);
	background("white");

	//console.log(ball.x);

	dustbin.display();

	ball.display();
	
	ground.display();

	drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x : 50, y : -55});
	}
}