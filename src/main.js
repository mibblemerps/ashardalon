require("pixi.js");

import TileType from "./TileType";
import Tile from "./Tile";
import Map from "./Map";
import * as Keyboard from "./Keyboard";

// Constants
export const ASSET_URL = "assets"; // base url where assets are stored
export const TILE_PIXELS = {width: 256, height: 256}; // size of each tile size unit in pixels. Virtually all tiles are 1x1 tile units in size.
export const TILE_PIXEL_DEADZONE = {width: 28, height: 28}; // the amount of pixels around the tiles where other tiles can overlap. This allows the tile's tabs to overlap properly.
export const CAMERA_MOVEMENT_SPEED = 1.22; // speed the camera moves when pressing WASD.

// Types of tiles. Loaded from assets/tiles/tiles.json
var tileTypes;

// Current camera offset.
var cameraPosition = {x: 10, y: 10};

// Map object.
var map;

// Load tile types
tileTypes = TileType.loadTileTypes(require("../assets/tiles/tiles.json"), ASSET_URL);

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

// Init input
Keyboard.bindEventHandlers(window);


// Begin render loop.
requestAnimationFrame(animate);
function animate() {
    // Render placed tiles.
    map.render(stage, cameraPosition);

    requestAnimationFrame(animate);
    renderer.render(stage);
}

// Game update loop.
// TODO: work out a way to do this better.
setInterval(function () {
    if (Keyboard.isKeyDown("w")) {
        cameraPosition.y += CAMERA_MOVEMENT_SPEED;
    }
    if (Keyboard.isKeyDown("s")) {
        cameraPosition.y -= CAMERA_MOVEMENT_SPEED;
    }
    if (Keyboard.isKeyDown("a")) {
        cameraPosition.x += CAMERA_MOVEMENT_SPEED;
    }
    if (Keyboard.isKeyDown("d")) {
        cameraPosition.x -= CAMERA_MOVEMENT_SPEED;
    }
}, 10);

