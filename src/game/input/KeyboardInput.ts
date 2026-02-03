import Phaser from 'phaser';

export default class KeyboardInput {
    private keys: Record<string, Phaser.Input.Keyboard.Key>;

    constructor(scene: Phaser.Scene) {
        this.keys = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,

            upArrow: Phaser.Input.Keyboard.KeyCodes.UP,
            downArrow: Phaser.Input.Keyboard.KeyCodes.DOWN,
            leftArrow: Phaser.Input.Keyboard.KeyCodes.LEFT,
            rightArrow: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        }) as Record<string, Phaser.Input.Keyboard.Key>;
    }

    getDirection(): Phaser.Math.Vector2 {
        let x = 0;
        let y = 0;

        if (this.keys.left.isDown || this.keys.leftArrow.isDown) {
            x -= 1;
        }
        if (this.keys.right.isDown || this.keys.rightArrow.isDown) {
            x += 1;
        }
        if (this.keys.up.isDown || this.keys.upArrow.isDown) {
            y -= 1;
        }
        if (this.keys.down.isDown || this.keys.downArrow.isDown) {
            y += 1;
        }

        const direction = new Phaser.Math.Vector2(x, y);

        if (direction.lengthSq() > 0) {
            direction.normalize();
        }

        return direction;
    }
}
