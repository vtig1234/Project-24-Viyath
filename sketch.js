//Project 24
//Viyath Wanninayake
//02/02/2021

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1
var ground1
var basket1
var ball2 = Bodies.circle(90, 280, 20);

function preload(){
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
  //Create a new ball
    ball1 = new ball(20,300,20);
  //Create a new ground
    ground1 = new ground();
  //Create a basket
    basket1 = new Basket();
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  fill("red");
  
  keyPressed();
  
  drawSprites();
  //Display the bodies
  ball1.display();
  ground1.display();
  basket1.display(); 
}

function keyPressed(){
  //If up key is pressed
   if (keyCode === UP_ARROW){
     //Apply force to the ball
  Matter.Body.applyForce(ball1.body,{x:ball1.x_pos(), y:ball1.y_pos()},{x:0.2,y:-3.2});
 }
}