import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Rectangle {
    private readonly speed: number;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 32, 32, 0xffffff);

        this.speed = 200;

        scene.add.existing(this);
    }

    update(_delta: number, direction: Phaser.Math.Vector2): void {
        if (direction.lengthSq() === 0) {
            return;
        }

        const distance = (this.speed * delta) / 1000;

        this.x += direction.x * distance;
        this.y += direction.y * distance;
    }
}
