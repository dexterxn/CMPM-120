
class Title extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'Title' });
    }
    preload()
    {
        this.load.image('title', 'assets/scene1.jpg');
    }
    create ()
    {
        
        const img = this.add.sprite(400, 300, 'title').setAlpha(1.0);
        img.scale = 0.2;

        const text1 = this.textObject = this.add.text(
            100, //x
            100,//y
            "Chicken Soup Studios", //text
            {
                font: "50px Georgia",
                color: "#6fa5d9",
            } //style
        );
        text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        let box = this.textObject = this.add.text(
            100, //x
            450,//y
            "Dedicated to provide positive experiences for the player. Founded in April 2023 at University of Califorina Santa Cruz.", //text
            {
                font: "20px Georgia",
                color: "#6fa5d9",
            } //style
        );
        
        box.setWordWrapWidth(250); 

        this.input.once('pointerdown', function ()
        {

            console.log('From SceneA to SceneB');

            this.scene.start('sceneA');

        }, this);
    }
        
}


class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.image('shepard', 'assets/bro.png');
        this.load.image('scene2', 'assets/scene2.jpg');
        this.load.image('sheep', 'assets/Sheep.png');
        this.load.audio('baa', ['assets/baa.mp3']);
        this.load.audio('backgroundMusic', ['assets/SOM.mp3']);
        
    }

    create ()
    {
        let baa = this.sound.add('baa', { loop: false });
        let backgroundMusic = this.sound.add('backgroundMusic', { loop: true });

        const img = this.add.sprite(400, 300, 'scene2').setAlpha(1.0);
        img.scale = 0.2;

        const image = this.add.sprite(300, 300, 'shepard').setAlpha(1.0);
        image.scale = 0.25;
        
        this.textObject = this.add.text(
            50, //x
            80,//y
            "Where are all my shep?", //text
            {
                font: "30px Georgia",
                color: "#E53D1B",
            } //style
        );

        backgroundMusic.play();
        console.log("start background");
        this.time.delayedCall(1000, () =>{
            const sheep = this.add.sprite(400, 500, 'sheep')
            sheep.scale = 0.25;
            baa.play();
            this.tweens.add({
                targets: sheep,
                x: 700,
                flipX: false,
                yoyo: true,
                duration: 2000,
                repeat: -1
            });
        });

        this.input.once('pointerdown', function ()
        {

            console.log('From SceneA to SceneB');

            // fade to black
            this.cameras.main.fadeOut(3000, 0, 0, 0)
            backgroundMusic.stop();
            this.scene.start('sceneB');

        }, this);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.image('arrow', 'assets/Tepig.png');
        this.load.image('scene3', 'assets/scene3.jpg');
    }

    create ()
    {
        this.cameras.main.fadeIn(6000);

        const img = this.scene3 = this.add.sprite(400, 300, 'scene3');
        img.scale = 0.25;

        this.textObject = this.add.text(
            100, //x
            100,//y
            "My 99 Shep", //text
            {
                font: "50px Georgia",
                color: "#E5CBC6",
            } //style
        );
        
        

        let pos = 250;
        let space = 50;
        let c = "#1B4F72";
        let b = 0xA2D9CE;
        let d = 0xF9E79F;
        
        const circle = new Phaser.Geom.Circle(75, pos +10, 10);
        const graphics0 = this.add.graphics({ fillStyle: { color: d } });
        graphics0.fillCircleShape(circle);

        const rect = new Phaser.Geom.Rectangle(90, pos - 10, 100, 40);
        const graphics = this.add.graphics({ fillStyle: { color: b } });
        graphics.fillRectShape(rect);

        const rect2 = new Phaser.Geom.Rectangle(90, pos+space - 10, 100, 40);
        const graphics2 = this.add.graphics({ fillStyle: { color: b } });
        graphics2.fillRectShape(rect2);

        const rect3 = new Phaser.Geom.Rectangle(90, pos +2*space- 10, 100, 40);
        const graphics3 = this.add.graphics({ fillStyle: { color: b } });
        graphics3.fillRectShape(rect3);

        const rect4 = new Phaser.Geom.Rectangle(90, pos+3*space - 10, 100, 40);
        const graphics4 = this.add.graphics({ fillStyle: { color: b } });
        graphics4.fillRectShape(rect4);
        
        this.textObject = this.add.text(
            100, //x
            pos,//y
            "Play", //text
            {
                font: "20px Georgia",
                color: c,
            } //style
        );
        this.textObject = this.add.text(
            100, //x
            pos+space,//y
            "Options", //text
            {
                font: "20px Georgia",
                color: c,
            } //style
        );
        this.textObject = this.add.text(
            100, //x
            pos+2*space,//y
            "Credits", //text
            {
                font: "20px Georgia",
                color: c,
            } //style
        );
        this.textObject = this.add.text(
            100, //x
            pos+3*space,//y
            "Quit", //text
            {
                font: "20px Georgia",
                color: c,
            } //style
        );

        this.input.once('pointerdown', function ()
        {

            console.log('END');

            // fade to black
            this.cameras.main.fadeOut(6000, 0, 0, 0);

        }, this);

    }

    // update (time, delta)
    // {
    //     this.arrow.rotation += 0.01;
    // }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x421278,
    scene: [Title, SceneA, SceneB],
}

let game = new Phaser.Game(config);