require("pixi.js");

import EntityPlayer from "./EntityPlayer"

/**
 * Dragonborn Wizard
 */
class EntityHeskan extends EntityPlayer {
    constructor() {
        var texture = PIXI.Texture.fromImage("assets/entities/player/wizard.png");
        super("wizard", "Heskan", "Dragonborn Wizard", texture, 6, 14, 6, 3);

    }
}

export default EntityHeskan;
