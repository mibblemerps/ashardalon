require("pixi.js");

import EntityPlayer from "./EntityPlayer"

/**
 * Dragonborn Wizard
 */
class EntityVistra extends EntityPlayer {
    constructor() {
        var texture = PIXI.Texture.fromImage("assets/entities/player/vistra.png");
        super("vistra", "Vistra", "Dwarf Fighter", texture, 8, 17, 5, 4);

    }
}

export default EntityVistra;
