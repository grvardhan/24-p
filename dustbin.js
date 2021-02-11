class DustBin {
    constructor(x,y,width,higth){
        var options = {
            'isStatic': true
        }
        this.bodyb = Bodies.rectangle(x,y,width,higth);
        World.add(wrold,this.bodyb);
        this.body1= Bodies.rectangle((x-(width/2))),(y-(higth*2)),higth
        World.add(wrold,this.body1);
        this.bodyr= Bodies.rectangle((x+(width/2))),(y-(higth*2)),higth
        World.add(wrold,this.bodyr);
        this.bodyb.width = width
        this.bodyb.higth = higth
    }
}
display()