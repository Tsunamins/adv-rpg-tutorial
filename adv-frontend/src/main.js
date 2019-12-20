let titleScene = new TitleScene();
let bootScene = new BootScene();

let config = {
type: Phaser.AUTO,
width: 640,
height: 360,
parent: 'canvas',
physics: {
    default: 'arcade',
    
    },
    scene: [
        TitleScene, 
        BootScene, 
        LoadingScene
    ]
}    



let game = new Phaser.Game(config);
game.scene.add('TitleScene', titleScene);
game.scene.add('BootScene', bootScene);
game.scene.start('BootScene', {scene: 'title'});

import TitleScene from './scenes/TitleScene.js';
import BootScene from './scenes/BootScene.js';
import LoadingScene from './scenes/LoadingScene.js';