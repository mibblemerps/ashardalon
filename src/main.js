require("pixi.js");

import TileType from "./TileType";
import Tile from "./Tile";
import Map from "./Map";

// Constants
const ASSET_URL = "assets"; // base url where assets are stored
const TILE_PIXELS = {width: 256, height: 256}; // size of each tile size unit in pixels. Virtually all tiles are 1x1 tile units in size.
const TILE_PIXEL_DEADZONE = {width: 28, height: 28}; // the amount of pixels around the tiles where other tiles can overlap. This allows the tile's tabs to overlap properly.

var tileTypes;

var cameraPosition = {x: 10, y: 10};
var map;
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

// Initialise the map.
map = new Map(tileTypes, {
    "tile_pixels": TILE_PIXELS,
    "tile_pixel_deadzone": TILE_PIXEL_DEADZONE
});

// Place some testing tiles.
map.placeTile(new Tile(1, {x: 0, y: 0}));
map.placeTile(new Tile(3, {x: 0, y: 1}));
map.placeTile(new Tile(7, {x: 1, y: 0}));
map.placeTile(new Tile(8, {x: 2, y: 0}));

// Init rendering
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);


// Begin render loop.
requestAnimationFrame(animate);
function animate() {
    // Render placed tiles.
    map.render(stage, cameraPosition);

    requestAnimationFrame(animate);
    renderer.render(stage);
}

