class Rope{
    constructor(bodyA, bodyB, x, y){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope);
        this.x = x;
        this.y = y;
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.x, pointB.y+this.y);
    }
}