class DexterGame extends Phaser.Scene {
    constructor() {
        super('dextergame');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('scene2', 'johannes-plenio-DKix6Un55mw-unsplash.jpg');
        this.load.image('scene1', 'linus-sandvide-5DIFvVwe6wk-unsplash.jpg');
        this.load.image('scene3', 'cederic-vandenberghe-21DP3hytVHw-unsplash.jpg');
        this.load.image('chickensoup', 'Chicken Soup Studio.png');
        this.load.image('tepig', 'Tepig-Pokemon-Transparent-Background.png');
        console.log("finish preload");
    }
    create(){
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

    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x421278,
    scene: [DexterGame],
}

let game = new Phaser.Game(config);