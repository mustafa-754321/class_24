class Box {
    constructor(x,y,width,height){
    this.posX=x;
    this.posY=y;
    this.width=width;
    this.height=height;
    
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1
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
        strokeWeight(13);
        stroke ("blue");
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
    }
}