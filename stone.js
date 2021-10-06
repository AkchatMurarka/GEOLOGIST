class Stone {
    constructor(x, y) {
      var options = {
        'density':20,
        'friction': 2,
        'restitution':0.08
      };
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
    //   pos.x = mouseX;
    //   pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill(87,26,7);
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius, this.radius);
      pop();
    };
  };
  