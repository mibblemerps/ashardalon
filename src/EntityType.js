/**
 * Represents an entity type.
 */
class EntityType {
    constructor(id, texture, size = {width: 1, height: 1},
                type = null, attackable = false, health = null, armor = null, experience = 1) {
        this.id = id;
        this.texture = texture;
        this.size = size;

        this.type = type;
        this.attackable = attackable;
        this.health = health;
        this.armor = armor;
        this.experience = experience;
    }
}

export default EntityType;
