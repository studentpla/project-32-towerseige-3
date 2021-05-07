class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
      }
     
        this.pointB = pointB
        this.shooter = Constraint.create(options);
        World.add(world, this.shooter);
    }

    fly(){
        this.shooter.bodyA = null;
    }

    display(){
        if(this.shooter.bodyA){
            var pointA = this.shooter.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
        }
    }
    
}