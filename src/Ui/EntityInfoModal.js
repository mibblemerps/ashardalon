import $ from "jquery";

/**
 * Entity information screen.
 */
class EntityInfoModal {
    /**
     *
     * @param entity Entity
     */
    constructor(entity) {
        this.entity = entity;
    }

    show() {
        // Fill in data.
        var modal = $("#modal-entityInfo").show();
        modal.find(".entityMeta-name").html(this.entity.entityType.name);
        modal.find(".entityMeta-subtitle").html(this.entity.entityType.subtitle);
        modal.find(".stat-armour").html(this.entity.entityType.armor);
        modal.find(".stat-hp").html(this.entity.entityType.health);
    }
}

export default EntityInfoModal;

