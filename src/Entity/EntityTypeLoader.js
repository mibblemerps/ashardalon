/*
Entity type loader.
TODO: work out why circular depdencies prevent me from having this in the EntityType class.
 */

import EntityHeskan from "./Player/EntityHeskan";


/*
 ================= ADD NEW ENTITIES HERE =================
 */
var allEntityTypes = [
    new EntityHeskan()
];


export function loadEntityTypes() {
    console.log("Loading entity types...");

    // Consolidate into an indexed array.
    var entityTypes = {};
    for (var i in allEntityTypes) {
        if (!allEntityTypes.hasOwnProperty(i)) { continue; }
        var entityType = allEntityTypes[i];

        entityTypes[entityType.id] = entityType;
    }

    return entityTypes;
}
