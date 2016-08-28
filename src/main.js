require("pixi.js");

import TileType from "./TileType";
import Tile from "./Tile";

// Constants
const ASSET_URL = "assets"; // base url where assets are stored
const TILE_PIXELS = {width: 256, height: 256}; // size of each tile size unit in pixels. Virtually all tiles are 1x1 tile units in size.
const TILE_PIXEL_DEADZONE = {width: 28, height: 28}; // the amount of pixels around the tiles where other tiles can overlap. This allows the tile's tabs to overlap properly.

var tileTypes;

// Array of all the placed tiles.
var placedTiles = [];

var placedTileSprites = [];

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

        var tileTexture = PIXI.Texture.fromImage(ASSET_URL + "/tiles/" + tileTypeDef.texture);
        tileTypes[id] = new TileType(id, tileTexture, tileTypeDef.encounter);
    }

    console.log("Loaded " + Object.keys(tileTypes).length + " tiles!");

    return tileTypes;
}
// Load tile types
tileTypes = loadTileTypes();

// Place initial tile
placedTiles.push(new Tile(1, {x: 0, y: 0}));
placedTiles.push(new Tile(1, {x: 0, y: 1}));
placedTiles.push(new Tile(1, {x: 1, y: 0}));
placedTiles.push(new Tile(1, {x: 2, y: 0}));

// Init rendering
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

/**
 * Render placed tiles.
 */
function renderPlacedTileSprites() {
    // Remove old tile sprites
    for (var spriteId in placedTileSprites) {
        stage.removeChild(placedTileSprites[spriteId]);
    }
    placedTileSprites = [];

    // Generate new sprites.
    placedTiles.forEach(function (placedTile) {
        // Create new sprite for this tile.
        var newSprite = new PIXI.Sprite(tileTypes[placedTile.tileType].texture);
        //console.log(newSprite);
        newSprite.x = placedTile.position.x * TILE_PIXELS.width - (TILE_PIXEL_DEADZONE.width * placedTile.position.x);
        newSprite.y = placedTile.position.y * TILE_PIXELS.height - (TILE_PIXEL_DEADZONE.height * placedTile.position.y);
        newSprite.width = TILE_PIXELS.width;
        newSprite.height = TILE_PIXELS.height;

        placedTileSprites.push(newSprite);
        stage.addChild(newSprite);
    });
}

// Begin render loop.
requestAnimationFrame(animate);
function animate() {
    // Render placed tiles.
    renderPlacedTileSprites();

    requestAnimationFrame(animate);
    renderer.render(stage);
}

