class Movement extends Phaser.Scene {
    constructor() {
        super("movementScene");
    }
    init() {
        this.PLAYER_VELOCITY = 5;
    }
    preload() {
        this.load.spritesheet(
            "character",
            "./assets/spritesheets/Character_002.png",
            {
                frameWidth: 48,
            }
        );
    }

    create() {
        this.cameras.main.setBackgroundColor("0xDDDDDD");
        this.player = this.add
            .sprite(width / 2, height / 2, "character")
            .setScale(2);

        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // left/Right
        if (cursors.left.isDown) {
            this.player.x -= this.PLAYER_VELOCITY;
        }
        if (cursors.right.isDown) {
            this.player.x += this.PLAYER_VELOCITY;
        }
        // Up/Down
        if (cursors.up.isDown) {
            this.player.y -= this.PLAYER_VELOCITY;
        }
        if (cursors.down.isDown) {
            this.player.y += this.PLAYER_VELOCITY;
        }
    }
}
