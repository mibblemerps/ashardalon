/**
 * Represents an entity type.
 */
class EntityType {
    constructor(id, texture, size = {width: 1, height: 1},
                category = null, attackable = false, health = null, armor = null, experience = 1) {
        this.id = id;
        this.texture = texture;
        this.size = size;

        this.category = category;
        this.attackable = attackable;
        this.health = health;
        this.armor = armor;
        this.experience = experience;
    }
}

export default EntityType;
