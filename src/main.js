require("pixi.js");
import $ from "jquery";

import TileType from "./TileType";
import Tile from "./Tile";
import EntityType from "./Entity/EntityType";
import Entity from "./Entity/Entity";
import * as EntityTypeLoader from "./Entity/EntityTypeLoader";
import Map from "./Map";
import * as Keyboard from "./Keyboard";

import EntityInfoModal from "./Ui/EntityInfoModal";

// Constants
export const ASSET_URL = "assets"; // base url where assets are stored
export const TILE_PIXELS = {width: 256, height: 256}; // size of each tile size unit in pixels. Virtually all tiles are 1x1 tile units in size.
export const TILE_PIXEL_DEADZONE = {width: 28, height: 28}; // the amount of pixels around the tiles where other tiles can overlap. This allows the tile's tabs to overlap properly.
export const TILE_CELLS = {width: 4, height: 4}; // how many individual squares are there on a single tile.
export const CAMERA_MOVEMENT_SPEED = 1.22; // speed the camera moves when pressing WASD.

// Types of tiles. Loaded from assets/tiles/tiles.json
var tileTypes;

// Types of entities. Loaded by EntityType.js.
var entityTypes;

// Current camera offset.
var cameraPosition = {x: 10, y: 10};

// Map object.
var map;

// Load tile types
tileTypes = TileType.loadTileTypes(require("../assets/tiles/tiles.json"), ASSET_URL);

// Load entity types.
entityTypes = EntityTypeLoader.loadEntityTypes();
console.log("Loaded " + Object.keys(entityTypes).length + " entity types!");

// Initialise the map.
map = new Map(tileTypes, entityTypes, {
    "tile_pixels": TILE_PIXELS,
    "tile_pixel_deadzone": TILE_PIXEL_DEADZONE
});

// Place some testing tiles.
map.placeTile(new Tile(1, {x: 0, y: 0}));
map.placeTile(new Tile(3, {x: 0, y: 1}));
map.placeTile(new Tile(7, {x: 1, y: 0}));
map.placeTile(new Tile(8, {x: 2, y: 0}));

// Place a testing entity.
var testWizard = new Entity(entityTypes["wizard"], {x: 9, y: 1});
map.placeEntity(testWizard);
var testVistra = new Entity(entityTypes["vistra"], {x: 2, y: 2});
map.placeEntity(testVistra);

// Init rendering
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(document.documentElement.clientWidth, document.documentElement.clientHeight);
renderer.backgroundColor = 0x0F0F0F; // dark gray background
document.body.appendChild(renderer.view);
window.addEventListener("resize", function (e) {
    // Update game size for window.
    renderer.resize(document.documentElement.clientWidth, document.documentElement.clientHeight);
    renderer.render(stage);

});

// Add board
var board = new PIXI.Container();
stage.addChild(board);

// Render the board.
map.render(board, cameraPosition);

$(document).ready(function () {
    // TODO: debug code
    var entityInfo = new EntityInfoModal(testVistra);
    entityInfo.show();
});

// Init input
Keyboard.bindEventHandlers(window);


// Begin render loop.
requestAnimationFrame(animate);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}

// Game update loop.
// TODO: work out a way to do this better.
setInterval(function () {
    if (Keyboard.isKeyDown("w")) {
        //cameraPosition.y += CAMERA_MOVEMENT_SPEED;
        board.y += CAMERA_MOVEMENT_SPEED;
    }
    if (Keyboard.isKeyDown("s")) {
        //cameraPosition.y -= CAMERA_MOVEMENT_SPEED;
        board.y -= CAMERA_MOVEMENT_SPEED;
    }
    if (Keyboard.isKeyDown("a")) {
        //cameraPosition.x += CAMERA_MOVEMENT_SPEED;
        board.x += CAMERA_MOVEMENT_SPEED;
    }
    if (Keyboard.isKeyDown("d")) {
        //cameraPosition.x -= CAMERA_MOVEMENT_SPEED;
        board.x -= CAMERA_MOVEMENT_SPEED;
    }
}, 10);

