class DexterGame extends Phaser.Scene {
    constructor() {
        super('dextergame');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('sectionimage', 'sectionimage.png');
        this.load.image('chickensoup', 'Chicken Soup Studio.png');
        console.log("finish preload");
    }
    create(){
        this.graphics = this.add.graphics();
        // add shapes
        this.graphics.fillStyle(0xff9900, 1); //color, opacity
        this.graphics.fillCircle(100,100,50);   //x, y, radius
        this.graphics.fillTriangle(250, 50, 200, 150, 300, 150); //x1, y1, x2, y2, x3, y3
        this.graphics.fillEllipse(250, 300, 100, 100, 16);   // x, y, width, height, smoothness

        //add lines
        this.graphics.lineStyle(5, 0x000000, 1);    //linewidth, color, opacity
        this.graphics.lineBetween(100,100,250,100); //x1, y1, x2, y2
        this.graphics.lineStyle(5, 0x000000, 0.5);
        this.graphics.lineBetween(250,100,450,100); 

        // add gradiant shapes
        // topleftcolor, toprightcolor, bottomleftcolor, bottomrightcolor, topleftopacity, toprightopacity, bottomleftopacity, bottomrightopacity 
        this.graphics.fillGradientStyle(0xff0000, 0xffff00, 0xffff00,0xffff00, 1, 1, 0.1, 0.1); 
        this.graphics.fillRect(600,50,150,100); //x1,y1, width, height

        //create text object
        this.textObject = this.add.text(
            0, //x
            550,//y
            "Hello This game is created by Chicken Soup Studio. Founded in April of 2023. \n \
            Mission is to create games that allow players to explore the fantasy world.", //text
            {
                font: "12px Georgia",
                color: "#6fa5d9",
            } //style
        );

        //create image object 
        this.imageObject1 = this.add.image(
            500,//x
            350,//y
            'sectionimage',//imagename
        )
        this.imageObject = this.add.image(
            200, 
            450, 
            'chickensoup',
        )
        this.imageObject.setScale(0.8) //resize

        // Add tweens
        this.tweens.add({
            targets: [this.imageObject1],
            y: -400,
            x: 1000,
            alpha:0,
            duration: 5000,
            ease: 'Linear',
            repeat: -1,
        });


    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x00ffff,
    scene: [DexterGame],
}

let game = new Phaser.Game(config);