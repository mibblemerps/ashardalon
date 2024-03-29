/**
 * Represents a game tile.
 */
class Tile {
    constructor(tileType, position = {x: 0, y: 0}, facing = 0) {
        this.tileType = tileType;
        this.position = position;
        this.size = {width: 1, height: 1};
        this.facing = facing;
    }
}

export default Tile;
