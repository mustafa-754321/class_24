class pig {
    constructor(x,y){
    this.posX=x;
    this.posY=y;
    this.width=50;
    this.height=50;
    
    var options = {
        'restitution':0.9,
        'friction':0.5,
        'density':0.4
    }

    this.body = Bodies.rectangle(this.posX, this.posY, this.width, this.height, options);
    World.add (world, this.body);
    }
    display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}