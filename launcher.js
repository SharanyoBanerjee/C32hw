class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
       }
      
       attach(body){
           this.launcher.bodyA = body;
       }
    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
             
                       
            stroke('#301608');
            if(pointA.x<220){
            
             line(pointA.x-20,pointA.y,pointB.x,pointB.y);
            
             strokeWeight(4);
            }
           
           }
    }
    
}