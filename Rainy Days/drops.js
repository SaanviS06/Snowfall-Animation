class drops{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.1,
            friction: 1,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
    }
    display(){
    var dropsPos = this.body.position;
    push()
    translate(dropsPos.x, dropsPos.y);
    rotate(this.body.angle);
    fill("blue")
    ellipseMode(CENTER);
    pop()

 }
}

