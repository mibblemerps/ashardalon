import "./main";
import * as Facing from "./Facing";

/**
 * The game map.
 */
class Map {
    constructor(tileTypes, options = {}) {
        this.tileTypes = tileTypes;
        this.placedTiles = [];
        this.placedSprites = [];

        this.tilePixels = (options["tile_pixels"] === undefined) ? {width: 256, height: 256} : options["tile_pixels"];
        this.tilePixelDeadzone = (options["tile_pixel_deadzone"] === undefined) ? {width: 0, height: 0} : options["tile_pixel_deadzone"];

        console.log(this.tilePixels);
    }

    placeTile(tile) {
        this.placedTiles.push(tile);
    }

    /**
     * Render the map to the specified target.
     *
     * @param stage Target to render onto.
     * @param cameraPosition Camera position (offset) to render at.
     */
    render(stage, cameraPosition = {x: 0, y: 0}) {
        // Remove old tile sprites
        for (var spriteId in this.placedSprites) {
            stage.removeChild(this.placedSprites[spriteId]);
        }
        this.placedSprites = [];

        // Generate new sprites.
        for (var i in this.placedTiles) {
            var placedTile = this.placedTiles[i];

            // Create new sprite for this tile.
            var newSprite = new PIXI.Sprite(this.tileTypes[placedTile.tileType].texture);
            newSprite.x = cameraPosition.x + (this.tilePixels.width / 2) + placedTile.position.x * this.tilePixels.width - (this.tilePixelDeadzone.width * placedTile.position.x);
            newSprite.y = cameraPosition.y + (this.tilePixels.height / 2) + placedTile.position.y * this.tilePixels.height - (this.tilePixelDeadzone.height * placedTile.position.y);
            newSprite.width = this.tilePixels.width;
            newSprite.height = this.tilePixels.height;
            newSprite.pivot.set(this.tilePixels.width / 2, this.tilePixels.height / 2);
            newSprite.rotation = Facing.facingToRadians(placedTile.facing);

            // Place sprite
            this.placedSprites.push(newSprite);
            stage.addChild(newSprite);
        }
    }
}

export default Map;
