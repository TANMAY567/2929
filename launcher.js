class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.rubberband= Constraint.create(options);
        World.add(world, this.rubberband);
    }

    fly(){
        this.rubberband.bodyA = null;
    }

    display(){
        
        if(this.rubberband.bodyA){
            var pointA = this.rubberband.bodyA.position;
            var pointB = this.pointB;
            push()
            
            stroke(48,22,8);

            if(pointA.x<220){
                strokeWeight(10);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                image(this.rubberband3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                image(this.rubberband3,pointA.x+25,pointA.y-10,15,30);
            }
            
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           pop()
        }
    }
    
}