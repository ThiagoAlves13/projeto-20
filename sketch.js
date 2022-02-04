
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var quadrado = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}

var circulo = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}

var retangulo = {
	restitution:0.1,
	friction:1,
	frictionAir:0.3
}


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.


	Engine.run(engine);
	Engine.update(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  var plane_options={
	isStatic=true
	}
  
 circulo = Bodies.circle(220,10,10,circulo_options);
 World.add(world,circulo);

 quadrado = Bodies.rectangle(110,50,10,10,quadrado_options);
 World.add(world,quadrado);

 retangulo = Bodies.rectangle(350,50,10,10,retangulo_options);
 World.add(world,retangulo);

  drawSprites();
 
}



