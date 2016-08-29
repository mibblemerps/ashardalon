import * as Main from "../main";

class Entity {
    constructor(entityType, position) {
        this.entityType = entityType;
        this.position = position;
    }

    /**
     * Get the tile coordinates of the entities current tile.
     *
     * @returns {{x: number, y: number}}
     */
    getTilePosition() {
        return {
            x: Math.floor(this.position / Main.TILE_CELLS.width),
            y: Math.floor(this.position / Main.TILE_CELLS.height)
        };
    }
}

export default Entity;
