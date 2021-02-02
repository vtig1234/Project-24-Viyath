class Basket{
  constructor(x,y,width,height){
    var options={
      //Cannot move
      isStatic:true
    }
    //Create the three walls of the basket
    this.body=Bodies.rectangle(500,575,100,20,options);
    this.body1=Bodies.rectangle(455,540,20,100,options);
    this.body2=Bodies.rectangle(545,540,20,100,options);
    //Add them to the world
    World.add(world,this.body);
    World.add(world,this.body1);
    World.add(world,this.body2);
  }
  display(){
    //Create a variable pos
    var pos = this.body.position;
    var pos1 = this.body1.position;
    var pos2 = this.body2.position;
    
    rectMode(CENTER);
    fill("red");
    //Make rectangles in the same positions
    rect(pos.x,pos.y,100,20);
    rect(pos1.x,pos1.y,20,75);
    rect(pos2.x,pos2.y,20,75);
  }
}