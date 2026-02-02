import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload(): void {
        console.log('GameScene preload');
    }

    create(): void {
        console.log('GameScene create');
    }

    update(): void {}
}
