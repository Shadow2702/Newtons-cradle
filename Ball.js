class Ball{
    constructor(x,y,r){
        var options={
        restitution:1,
        density:0.8,
     
        }
        
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world,this.body)
        
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        fill("white")
        ellipse(0,0,this.r)
        pop()
            }
    }