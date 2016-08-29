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

    static loadEntityTypes() {
        console.log("Loading entity types...");

        // Initialisations of entity types.
        /*
        ================= ADD NEW ENTITIES HERE =================
         */
        var allEntityTypes = [
            new EntityHeskan()
        ];

        // Consolidate into an indexed array.
        var entityTypes = {};
        for (var i in allEntityTypes) {
            if (!allEntityTypes.hasOwnProperty(i)) { continue; }
            var entityType = allEntityTypes[i];

            entityTypes[entityType.id] = entityType;
        }

        return entityTypes;
    }
}

export default EntityType;
