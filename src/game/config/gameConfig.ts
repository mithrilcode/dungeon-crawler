import Phaser from 'phaser';

import { GameScene } from '../scenes/GameScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'app',
    backgroundColor: '#1d1d1d',
    scene: [GameScene]
};
