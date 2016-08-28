require("pixi.js");

import TileType from "./TileType";

var tileTypes;

/**
 * Load game tile types...
 */
function loadTileTypes() {
    console.log("Loading tile types...");

    var tileTypeConfig = require("../assets/tiles/tiles.json");
    var tileTypes = {};

    for (var tileTypeId in tileTypeConfig) {
        if (!tileTypeConfig.hasOwnProperty(tileTypeId)) { continue; }
        var tileTypeDef = tileTypeConfig[tileTypeId];
        var id = parseInt(tileTypeId);

        tileTypes[id] = new TileType(id, tileTypeDef.texture, tileTypeDef.encounter);
    }

    console.log("Loaded " + Object.keys(tileTypes).length + " tiles!");

    return tileTypes;
}
tileTypes = loadTileTypes();

// Init rendering
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

requestAnimationFrame(animate);

// Add a test tile for testing.
var testTileTexture = PIXI.Texture.fromImage("assets/tiles/white01.png");
var testTile = new PIXI.Sprite(testTileTexture);
stage.addChild(testTile);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(stage);
}

