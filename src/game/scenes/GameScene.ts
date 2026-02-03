import Phaser from 'phaser';

import Player from '../entities/Player';

export default class GameScene extends Phaser.Scene {
    private player!: Player;

    constructor() {
        super('GameScene');
    }

    preload(): void {
        console.log('GameScene preload');
    }

    create(): void {
        console.log('GameScene create');

        const { width, height } = this.scale;

        this.player = new Player(this, width / 2, height / 2);
    }

    update(_time: number, delta: number): void {
        this.player.update(delta);
    }
}
