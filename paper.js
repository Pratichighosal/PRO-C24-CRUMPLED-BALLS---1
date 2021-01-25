class Paper{
    constructor(x, y, radius, maxSides) {
      var options = {
          
        istatic : false,
        restitution : 0.3 ,
        friction : 0.5,
        density : 1.2

      }
      this.body = Bodies.circle(x, y, radius,options,maxSides)
      this.radius = radius;
      this.maxSides = maxSides;
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("purple");
        rect(0,0, this.radius, this.maxSides);
        pop();
      }
    }