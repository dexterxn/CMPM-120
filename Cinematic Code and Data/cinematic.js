
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

        this.textObject = this.add.text(
            100, //x
            100,//y
            "Chicken Soup Studios", //text
            {
                font: "50px Georgia",
                color: "#6fa5d9",
            } //style
        );

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
        this.load.image('face', 'assets/bro.png');
    }

    create ()
    {
        const image = this.add.sprite(400, 300, 'face').setAlpha(1.0);
        image.scale = 0.25;
        
        this.textObject = this.add.text(
            300, //x
            100,//y
            "Where are all my shep?", //text
            {
                font: "30px Georgia",
                color: "#6fa5d9",
            } //style
        );

        this.input.once('pointerdown', function ()
        {

            console.log('From SceneA to SceneB');

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
    }

    create ()
    {
        const img = this.arrow = this.add.sprite(400, 300, 'arrow').setOrigin(0, 0.5);
        img.scale = 0.25;

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneB to SceneC');

            this.scene.start('sceneC');

        }, this);
    }

    update (time, delta)
    {
        this.arrow.rotation += 0.01;
    }
}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }

    preload ()
    {
        this.load.image('mech', 'assets/Tepig.png');
    }

    create ()
    {
        const img = this.add.sprite(Phaser.Math.Between(0, 800), 300, 'mech');
        img.scale = 0.25;

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneC to SceneA');

            this.scene.start('sceneD');

        }, this);
    }
}

class SceneD extends Phaser.Scene {

    constructor() 
    {
        super({ key: 'sceneD' });
    }

    preload()
    {
        this.load.path = './assets/';
        this.load.image('scene1', 'scene1.jpg');
        this.load.image('scene2', 'scene2.jpg');
        this.load.image('scene3', 'scene3.jpg');
        this.load.image('chickensoup', 'Chicken Soup Studio.png');
        this.load.image('tepig', 'Tepig.png');
        console.log("finish preload");
    }

    create()
    {
        const image = this.add.image(900, 300, 'tepig');
        image.scale = 0.5;
        this.tweens.add({
            targets: image,
            x: 250,
            ease: 'easeIn',
            yoyo: false,
            repeat: 0,
            duration: 3000
        });
        this.input.keyboard.once('keydown-SPACE', () => {
            // fade to black
            this.cameras.main.fadeOut(6000, 0, 0, 0)

            // this.cameras.main.once('camerafadeincomplete', function (camera) {
            //     camera.fadeOut(6000);
            // });
        })
    
        this.cameras.main.fadeIn(6000);
        console.log('SceneD');
    }
    update(){}
}



let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x421278,
    scene: [Title, SceneA, SceneB, SceneC, SceneD],
}

let game = new Phaser.Game(config);