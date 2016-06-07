// javascript for the greatest game you've ever played
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
		preload: preload, create: create, update: update
});

function preload() {
	game.load.image('jellard', 'img/jellard.png');
}

function create() {
	game.add.sprite(0, 0, 'jellard');
}

function update() {

}
