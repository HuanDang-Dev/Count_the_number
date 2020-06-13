class Menu extends Phaser.Scene {

    constructor() {
        super('Menu')
    }

    preload() {
        this.load.image('khanAcademyKids', "assets/images/background/khanAcademyKids.jpg");
        this.load.image('play', 'assets/images/background/play.png');
    }

    create(){
        
        this.khanAcademyKids = this.add.image(0, 100, "khanAcademyKids").setOrigin(0, 0);
        
        // Choose scene 1 
        this.play = this.add.sprite(520, 400, 'play').setOrigin(0,0).setScale(0.5);

        this.play.setInteractive().on('pointerdown', () => {
            time = 0;
            this.scene.start('Scene1');

        });

        this.textPlay = this.add.text(605, 330, "Play", {
            font: "40px Arial", 
            fill: "grey"

        }).setOrigin(0, 0);

        this.textPlay.setInteractive().on('pointerdown', () =>{
            time = 0;
            this.scene.start('Scene1');

        });

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTint(0xE973CF);

        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });
    }
     
    update() {
    }
}