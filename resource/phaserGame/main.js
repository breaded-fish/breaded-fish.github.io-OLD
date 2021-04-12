var game;

const gameButton = document.getElementById('startGameButton');
gameButton.onclick = function() {
  var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    parent: 'phaser-game',
    scene: [SceneMain],
    physics: {
      default: 'arcade',
      arcade: {debug:false}
    }
  };
    game = new Phaser.Game(config);
	  gameButton.disabled = "disabled";
}