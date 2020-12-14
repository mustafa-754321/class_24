class ground {
    constructor(x,y,width,height){
        this.posX=x;
        this.posY=y;
        this.width=width;
        this.height=height;
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(this.posX, this.posY, this.width, this.height, options);
        World.add (world, this.body);
    } // constructor ends
    display() {
        var pos =this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
//        pop();.
    } // display ends here
}
