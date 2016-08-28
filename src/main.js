require("pixi.js");

// Init
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(800, 600);

document.body.appendChild(renderer.view);

requestAnimationFrame(animate);

// Add a dashpone for testing :3
var testTileTexture = PIXI.Texture.fromImage("assets/tiles/white01.png");
var testTile = new PIXI.Sprite(testTileTexture);
stage.addChild(testTile);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(stage);
}

