/**
 * Represents a game tile.
 */
class Tile {
    constructor(tileType, position = {x: 0, y: 0}) {
        this.tileType = tileType;
        this.position = position;
        this.size = {width: 1, height: 1};
        this.orientation = 0;
    }
}

export default Tile;


