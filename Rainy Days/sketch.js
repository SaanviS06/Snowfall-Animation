const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var droplets;

function preload(){
    
}

function setup(){
 createCanvas(400,800);  
 engine = Engine.create();
	world = engine.world;

    droplets = new drops(200,20,90);
    
}

function draw(){
    background("black"); 

    droplets.display();
}   