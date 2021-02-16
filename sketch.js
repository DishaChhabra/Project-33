 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=250;
var score =0;

var count = 0;
var play, end;
var gameState = "play";

function setup() {
  createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (var k = 20; k <=width; k = k + 70){
     divisions.push(new Division(k, 500, 10, divisionHeight));
   }

    for (var j = 25; j <=width; j=j+50){
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,135));
    }

     for (var j = 25; j <=width; j=j+50){
      plinkos.push(new Plinko(j,195));
    }

     for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,255));
     }
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,35);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
     }
   
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   fill("yellow")

   text("500", 40, 500)
   text("500", 107, 500)
   text("500", 177, 500)
   text("100", 247, 500)
   text("100", 317, 500)
   text("200", 387, 500)
   text("200", 458, 500)
   text("200", 530, 500)
  
   

   //console.log(count)
   if(gameState === "play"){
    if(particle != null){
      particle.display()
      if(particle.body.position.y>540){
       if(particle.body.position.x<240){
         score = score + 500;
         particle = null
       }
       else if(particle.body.position.x>240 && particle.body.position.x<380){
        score = score + 100;
        particle = null
      }
      else if(particle.body.position.x>380){
        score = score + 200;
        particle = null
      }
    }
      }
   }
   
   
   if(count>5){
     gameState = "end";
   }
   if(gameState === "end"){
     textSize(42)
     text("GAME OVER!", 160, 335)
   }
   
  }

  function mousePressed(){
    if(gameState === "play")
       particle=new Particle(mouseX, 10, 10, 10); 
       count++
       console.log(mouseX, mouseY)
  }
