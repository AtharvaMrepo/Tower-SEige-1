const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand1,stand2;
var polygon,polygonImg;
var slingShot;

function preload (){
polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,370,1200,10);
    stand1 = new Ground(390,300,250,10)
    stand2 = new Ground(700,200,200,10)
    
    
    
    //level one 
    Box1 = new Box(300,275,30,40); 
    console.log(Box1); Box2 = new Box(330,275,30,40); 
    Box3 = new Box(360,275,30,40); 
    Box4 = new Box(390,275,30,40); 
    Box5 = new Box(420,275,30,40); 
    Box6 = new Box(450,275,30,40); 
    Box7 = new Box(480,275,30,40); 
    
    //level 2
    Box8 = new Box(330,235,30,40); 
    Box9 = new Box(360,235,30,40); 
    Box10 = new Box(390,235,30,40); 
    Box11 = new Box(420,235,30,40); 
    Box12 = new Box(450,235,30,40); 
    
    //level three 
    Box13 = new Box(360,195,30,40); 
    Box14 = new Box(390,195,30,40); 
    Box15 = new Box(420,195,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)
    slingShot = new SlingShot(this.polygon,{x:100,y:100})
}



function draw(){
    background("grey")
    Engine.update(engine);
    
    ground.display();
    stand1.display();
    stand2.display();
    
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    Box13.display();
    Box14.display();
    Box15.display();
    
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingShot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
    
}

function mouseReleased(){
    slingShot.fly();
}