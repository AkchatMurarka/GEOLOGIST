class Iron {
    constructor(x, y) {
      var options = {
        'density':40,
        'friction': 3,
        'restitution':0.05
      };
      this.body = Bodies.rectangle(x, y, 200, 200, options);
      this.width = 200;
      this.height = 200;
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
      stroke('white')
      fill(140,140,140);
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  