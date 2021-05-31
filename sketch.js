const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];
var score=0;
var divisionHeight=270;

function preload(){
bg=loadImage("bg.jpg")

}

function setup() {
  createCanvas(450,600);

  engine = Engine.create();
  world = engine.world;
    
  ground1=new Ground(225,580,450,20);

  celing1=new Ground(225,5,450,10);
  celing2=new Ground(445,300,10,600);
  celing3=new Ground(5,300,10,600);
  celing4=new Ground(225,595,450,10);

  division1=new Division(15,455,10,270);
  division2=new Division(75,455,10,270);
  division3=new Division(135,455,10,270);
  division4=new Division(195,455,10,270);
  division5=new Division(255,455,10,270);
  division6=new Division(315,455,10,270);
  division7=new Division(375,455,10,270);
  division8=new Division(435,455,10,270);


// for(var i=70;i<width;i=i+40){
//   plinkos.push(new Plinko(i,70))
// }


 plinko1=new Plinko(40,70,20);
 plinko2=new Plinko(80,70,20);
 plinko3=new Plinko(120,70,20);
 plinko4=new Plinko(160,70,20);
 plinko5=new Plinko(200,70,20);
 plinko6=new Plinko(240,70,20);
 plinko7=new Plinko(280,70,20);
 plinko8=new Plinko(320,70,20);
 plinko9=new Plinko(360,70,20);
 plinko10=new Plinko(400,70,20);

 plinko11=new Plinko(40,120,20);
 plinko12=new Plinko(80,120,20);
 plinko13=new Plinko(120,120,20);
 plinko14=new Plinko(160,120,20);
 plinko15=new Plinko(200,120,20);
 plinko16=new Plinko(240,120,20);
 plinko17=new Plinko(280,120,20);
 plinko18=new Plinko(320,120,20);
 plinko19=new Plinko(360,120,20);
 plinko20=new Plinko(400,120,20);

 plinko21=new Plinko(40,170,20);
 plinko22=new Plinko(80,170,20);
 plinko23=new Plinko(120,170,20);
 plinko24=new Plinko(160,170,20);
 plinko25=new Plinko(200,170,20);
 plinko26=new Plinko(240,170,20);
 plinko27=new Plinko(280,170,20);
 plinko28=new Plinko(320,170,20);
 plinko29=new Plinko(360,170,20);
 plinko30=new Plinko(400,170,20);

 plinko31=new Plinko(40,220,20);
 plinko32=new Plinko(80,220,20);
 plinko33=new Plinko(120,220,20);
 plinko34=new Plinko(160,220,20);
 plinko35=new Plinko(200,220,20);
 plinko36=new Plinko(240,220,20);
 plinko37=new Plinko(280,220,20);
 plinko38=new Plinko(320,220,20);
 plinko39=new Plinko(360,220,20);
 plinko40=new Plinko(400,220,20);

 plinko41=new Plinko(40,270,20);
 plinko42=new Plinko(80,270,20);
 plinko43=new Plinko(120,270,20);
 plinko44=new Plinko(160,270,20);
 plinko45=new Plinko(200,270,20);
 plinko46=new Plinko(240,270,20);
 plinko47=new Plinko(280,270,20);
 plinko48=new Plinko(320,270,20);
 plinko49=new Plinko(360,270,20);
 plinko50=new Plinko(400,270,20);

 
 }






function draw() {
  background(bg);  
  Engine.update(engine);


    fill("white");
    text("Press Space Bar to drop particles ",40,40);
    text("Score :" + score, 250,40)
    
  fill("brown")
  celing1.display();

  fill("white")
 ground1.display();

 fill("brown")
  celing2.display();

  fill("brown")
  celing3.display();

 fill("brown")
  celing4.display();

  

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  

  // for(var i=0;i<plinkos.length;i++){
  //   plinkos[i].display()
  // }
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko2.display();

  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();

  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
 
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();

  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();

 
 //particles.display();

 //there are a bunch
  for(k=0;k<particles.length;k++){
    particles[k].display();
  }

}
function keyPressed(){
    if (keyCode===32){
   
// if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2-10),10,20));
  score++
  // }
    }
}