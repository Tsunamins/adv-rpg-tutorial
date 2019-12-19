let gameScene = new Phaser.Scene('Title');
let config = {
type: Phaser.AUTO,
width: 640,
height: 360,
parent: 'canvas',
scene: gameScene
};
let game = new Phaser.Game(config);