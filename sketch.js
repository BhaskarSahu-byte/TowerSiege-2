const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, ground;
var stand1, stand2;
var slingShot;
var polygon_img;

function preload() {
  polygon_img=loadImage("ball.png");
};

function setup() {
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);
 
  //level one
  block1 = new RedBlock(300, 275, 30, 40);
  block2 = new RedBlock(330, 275, 30, 40);
  block3 = new RedBlock(360, 275, 30, 40);
  block4 = new RedBlock(390, 275, 30, 40);
  block5 = new RedBlock(420, 275, 30, 40);
  block6 = new RedBlock(450, 275, 30, 40);
  block7 = new RedBlock(480, 275, 30, 40);

  //level two
  block8 = new BlueBlock(330, 235, 30, 40);
  block9 = new BlueBlock(360, 235, 30, 40);
  block10 = new BlueBlock(390, 235, 30, 40);
  block11 = new BlueBlock(420, 235, 30, 40);
  block12 = new BlueBlock(450, 235, 30, 40);

  //level three
  block13 = new GreenBlock(360, 195, 30, 40);
  block14 = new GreenBlock(390, 195, 30, 40);
  block15 = new GreenBlock(420, 195, 30, 40);

  //top
  block16 = new RedBlock(390, 155, 30, 40);

  //set 2 for second stand

  //level one
  blocks1 = new GreenBlock(640, 175, 30, 40);
  blocks2 = new GreenBlock(670, 175, 30, 40);
  blocks3 = new GreenBlock(700, 175, 30, 40);
  blocks4 = new GreenBlock(730, 175, 30, 40);
  blocks5 = new GreenBlock(760, 175, 30, 40);

  //level two
  blocks6 = new BlueBlock(670, 135, 30, 40);
  blocks7 = new BlueBlock(700, 135, 30, 40);
  blocks8 = new BlueBlock(730, 135, 30, 40);

  //top
  blocks9 = new RedBlock(700, 95, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon, {x:100, y:200});
};

function draw() {
  background(56, 44, 44); 
 
  Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks", 300, 30);

  textSize(18);
  text("Press Space to get a second Chance to Play!!", 510, 350);

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y, 40, 40);

  slingShot.display();
};

function mouseDragged() {
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
};

function mouseReleased() {
  slingShot.fly();
};

function keyPressed() {
  if( keyCode === 32) {
    Matter.Body.setPosition(polygon, {x: 50, y: 200});
    slingShot.attach(polygon);
  };  
};