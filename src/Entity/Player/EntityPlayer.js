import EntityType from "../EntityType";

class EntityPlayer extends EntityType {
    constructor(id, name, subtitle, texture, health, armor, speed, surgeValue) {
        var size = {width: 1, height: 1};
        super(id, name, subtitle, texture, size, "player", false, health, armor, 0);

        this.speed = speed;
        this.surgeValue = surgeValue;
    }
}

export default EntityPlayer;
