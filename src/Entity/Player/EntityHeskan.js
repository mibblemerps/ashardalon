require("pixi.js");

import EntityPlayer from "./EntityPlayer"

/**
 * Dragonborn Wizard
 */
class EntityHeskan extends EntityPlayer {
    constructor() {
        var texture = PIXI.Texture.fromImage("assets/entities/player/wizard.png");
        super("wizard", texture, 6, 14);

    }
}

export default EntityHeskan;
