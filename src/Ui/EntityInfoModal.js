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
        modal.find(".stat-hp").html(this.entity.entityType.health + " HP");
        modal.find(".stat-speed").html(this.entity.entityType.speed);
        modal.find(".stat-surge").html(this.entity.entityType.surgeValue + " HP");
        modal.find(".entityIcon")[0].src = this.entity.entityType.texture.baseTexture.imageUrl;

        // Render HP points
        var hitsTaken = this.entity.entityType.health - this.entity.health;
        var hp5s = Math.floor(hitsTaken / 5);
        var hp1s = hitsTaken % 5;
        console.log("HP5s: " + hp5s + "  HP1s:" + hp1s);
        var healthBar = modal.find(".entityMeta-health");
        for (var i = 0; i < hp5s; i++) {
            healthBar.append("<img src='assets/tokens/5hp.png' alt='5HP' class='entityMeta-health-hp'>");
        }
        for (var i = 0; i < hp1s; i++) {
            healthBar.append("<img src='assets/tokens/1hp.png' alt='1HP' class='entityMeta-health-hp'>");
        }
    }
}

export default EntityInfoModal;

