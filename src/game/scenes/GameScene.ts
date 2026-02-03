import Phaser from 'phaser';

import Player from '../entities/Player';
import KeyboardInput from '../input/KeyboardInput';

export default class GameScene extends Phaser.Scene {
    private player!: Player;
    private inputHandler!: KeyboardInput;

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
        this.inputHandler = new KeyboardInput(this);
    }

    update(_time: number, delta: number): void {
        const direction = this.inputHandler.getDirection();
        this.player.update(delta, direction);
        // Input will be passed to Player in Phase 2.3
    }
}
