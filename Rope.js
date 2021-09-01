class Rope{
    constructor(body1,body2,x,y){
        this.x=x
        this.y=y
    var options={
        bodyA:body1,
        bodyB:body2,
        pointA:{x:this.x,y:this.y}


    }
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    
    
    }
display(){
    strokeWeight(2)
    line(this.rope.bodyA.position.x+this.x,this.rope.bodyA.position.y+this.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
}
}
