require("pixi.js");

// Init
var stage = new PIXI.Stage(0x66FF99);
var renderer = PIXI.autoDetectRenderer(800, 600);

document.body.appendChild(renderer.view);

requestAnimationFrame(animate);

// Add a dashpone for testing :3
var texture = PIXI.Texture.fromImage("dashpone.png");
var dashpone = new PIXI.Sprite(texture);
dashpone.anchor.x = 0.5;
dashpone.anchor.y = 0.5;
dashpone.position.x = 200;
dashpone.position.y = 200;
stage.addChild(dashpone);

function animate() {
    requestAnimationFrame(animate);

    dashpone.rotation += 0.1;

    renderer.render(stage);
}

