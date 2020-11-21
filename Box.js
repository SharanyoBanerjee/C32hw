class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        'restitution':0.8,
        'friction':5.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 2){
       var angle = this.body.angle;
       var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world,this.body);
               
       push();
       
       this.Visibility = this.Visibility-2;
       tint(255,this.Visibility);
       
       pop();
     }
    
    
  }
   score () {
    if(this.Visibility < 0 && this.Visibility >- 105){
     score++;
     
    }
  }
  
};
