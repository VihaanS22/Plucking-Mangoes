class Stone {
    constructor(x, y, r) {
      var options = {
    
        'restitution':0,
          'friction':1,
          
      }
      
      this.x = x
      this.y = y
      this.r = r
      //this.diameter = 50
      
 //this.image = loadImage("paper.png");
      this.body = Matter.Bodies.circle(x, y, (this.r)/2, options);
      

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
     // var angle = this.body.angle;
     // push();
     // translate(pos.x, pos.y);
     
     
      fill("black");
     ellipse(pos.x, pos.y , 20,20);
     // imageMode(CENTER);
      //image(this.image, 0, 0, this.diameter, this.diameter);
     //pop();
    }
  };
 
  