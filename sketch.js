
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground
var tree
var backImage
var mango, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8
var boyImg, boy
var slingShot
var stone

function preload()
{
 backImage = loadImage("back.png")
boyImg = loadImage("boy.png")


}

function setup() {
	createCanvas(1300, 550);


	engine = Engine.create();
	world = engine.world;

boy = createSprite(140, 440)
boy.addImage(boyImg)
boy.scale = 0.8

ground = new Ground(650, 545, 1300, 10)
tree = new Tree(1500, 260, 400, 500)
mango = new Mango(1200, 160, 20)
mango1 = new Mango(950, 160, 20)
mango2 = new Mango(1200, 280, 20)
mango3 = new Mango(1050, 100, 20)
mango4 = new Mango(1110, 130, 20)
mango5 = new Mango(1150, 200, 20)
mango6 = new Mango(920, 170, 20)
mango7 = new Mango(1110, 230, 20)
mango8 = new Mango(950, 250, 20)

stone = new Stone(130, 490, 20)
slingShot = new Sling(stone.body, {x:180, y:405});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImage);

 
  boy.display();
  ground.display();
  tree.display();
  stone.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  detectCollision(stone, mango)
  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
  detectCollision(stone, mango6)
  detectCollision(stone, mango7)
  detectCollision(stone, mango8)

  drawSprites();
 
}

function detectCollision(lstone, lmango) {

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
console.log(distance)	
console.log(lmango.r+ lstone.r)
if(distance<=lmango.r + lstone.r){

	Matter.Body.setStatic(lmango.body, false)

	}
}


        

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
	
	}
	
	function mouseReleased(){
	
		
		slingShot.fly()
		
		}

    function keyPressed(){

      if(keyCode === 32){
      Matter.Body.setPosition(stone.body, {x:235, y:420})
    slingShot.attach(stone.body)

      }
      
      }