/**
 * Represents a tile type.
 */
class TileType {
    constructor(id, texture, encounter = false) {
        this.id = id;
        this.texture = texture;
        this.encounter = encounter;
    }
}

export default TileType;
