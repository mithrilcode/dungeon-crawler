import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Rectangle {
    private readonly speed: number;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 32, 32, 0xffffff);

        this.speed = 200;

        scene.add.existing(this);
    }

    update(_delta: number): void {
        // Movement will be added in Phase 2.3
    }
}
