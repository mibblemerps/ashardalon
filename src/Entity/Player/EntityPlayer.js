import EntityType from "../EntityType";

class EntityPlayer extends EntityType {
    constructor(id, texture, health, armor) {
        var size = {width: 1, height: 1};

        super(id, texture, size, "player", false, health, armor, 0);
    }
}

export default EntityPlayer;
