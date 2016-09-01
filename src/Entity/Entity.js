import * as Main from "../main";

class Entity {
    /**
     *
     * @param entityType EntityType Type of entity.
     * @param position {{x: number, y: number}} Position of the entity when it's placed into the map.
     */
    constructor(entityType, position) {
        this.entityType = entityType;
        this.health = entityType.health;
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
