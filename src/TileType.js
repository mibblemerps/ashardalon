/**
 * Represents a tile type.
 */
class TileType {
    constructor(id, texture, encounter = false) {
        this.id = id;
        this.texture = texture;
        this.encounter = encounter;
    }

    static loadTileTypes(tileTypeConfig, assetUrl) {
        console.log("Loading tile types...");

        var tileTypes = {};

        for (var tileTypeId in tileTypeConfig) {
            if (!tileTypeConfig.hasOwnProperty(tileTypeId)) { continue; }
            var tileTypeDef = tileTypeConfig[tileTypeId];
            var id = parseInt(tileTypeId);

            var tileTexture = PIXI.Texture.fromImage(assetUrl + "/tiles/" + tileTypeDef.texture);
            tileTypes[id] = new TileType(id, tileTexture, tileTypeDef.encounter);
        }

        console.log("Loaded " + Object.keys(tileTypes).length + " tiles!");

        return tileTypes;
    }
}

export default TileType;
