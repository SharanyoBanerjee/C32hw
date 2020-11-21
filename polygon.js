class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = r
        this.image = loadImage("hexagon.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world, this.body);
    }
    display(){
        var polpos = this.body.position;
        push()
        translate(polpos.x,polpos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r*6.4,this.r*3.2)
        pop()
    }
}