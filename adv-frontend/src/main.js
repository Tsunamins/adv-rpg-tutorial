

let config = {
type: Phaser.AUTO,
width: 640,
height: 360,
parent: 'canvas',
physics: {
    default: 'arcade',
    
    },
    scene: [
        TitleScene
    ]
}    



let game = new Phaser.Game(config);

import TitleScene from './scenes/TitleScene.js';
