const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var maxDrops=100;
var drops=[];
var thunder, thunder1, thunder2, thunder3, thunder4;

function preload(){
    thunder1_img=("thunderbolt/1.png");
    thunder2_img=("thunderbolt/2.png");
    thunder3_img=("thunderbolt/3.png");
    thunder4_img=("thunderbolt/4.png");
}

function setup(){
    engine=Engine.create();
    world=engine.world;

    canvas=createCanvas(400,700);
   umbrella=new Umbrella(200,500);
   if(frameCount%150===0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }
}
}

function draw(){
    Engine.update(engine);
    background(0);
    var rand = Math.round(random(1,4)%12);
    /*switch(rand) {
      case 1: thunder.addImage(thunder1_img);
              break;
      case 2: thunder.addImage(thunder2_img);
              break;
      case 3: thunder.addImage(thunder3_img);
              break;
      case 4: thunder.addImage(thunder4_img);
              break;
      default: break;
    }*/
    umbrella.display();
    for(var i=0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].update();
    }
}   

