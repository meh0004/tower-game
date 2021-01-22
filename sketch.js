const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9,box10, box11, box12, box13, box14, box15, box16 ;

var polygon, polygon_img;

var ground;
var sling;
var world, engine;
var stand1, stand2;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(800,400);
    ground = new Ground(450,390,width,10);
    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(700,200,200,10);
     
    //level one
   box1 = new Box( 300,275,30,40);
   box2 = new Box( 330,275,30,40);
   box3 = new Box( 360,275,30,40);
   box4 = new Box( 390,275,30,40);
   box5 = new Box( 420,275,30,40);
   box6 = new Box( 450,275,30,40);
   box7 = new Box( 480,275,30,40);
   //level two
   box8 = new Box( 330,235,30,40);
   box9 = new Box( 360,235,30,40);
   box10 = new Box( 390,235,30,40);
   box11 = new Box( 420,235,30,40);
   box12 = new Box( 450,235,30,40);
   //level three
   box13 = new Box( 360,195,30,40);
   box14 = new Box( 390,195,30,40);
   box15 = new Box( 420,195,30,40);
   //top
   box16 = new Box( 390,155,30,40);


   

   polygon = Bodies.circle(50, 200, 20);
   World.add(world, polygon);

   sling = new Sling(this.polygon, {x:100, y:200});
}

function draw(){
   background("lightblue");
   Engine.update(engine);
    fill("orange")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("blue")
    box13.display();
    box14.display();
    box15.display();
    fill("green") 
    box16.display();
    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    sling.display();
    stand1.display();
    stand2.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keycode === 32){
        sling.attach(this.polygon);
    }
}

    

 



