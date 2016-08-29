
class UiEntityLivingInfo {
    constructor(entity, entityType) {
        this.entity = entity;
        this.entityType = entityType;

        this.dialogContainer = null;
    }

    render(stage) {
        // Calculate dialog sizing and positioning.
        var dialogWidth = 420;
        var dialogHeight = 320;
        var x = (stage.width / 2) + (dialogWidth / 2);
        var y = 44;

        // Create dialog
        this.dialogContainer = new PIXI.Container();
        this.dialogContainer.x = x;
        this.dialogContainer.y = y;
        this.dialogContainer.width = dialogWidth;
        this.dialogContainer.height = dialogHeight;
        stage.addChild(this.dialogContainer);

        // Draw background
        var dialogBg = new PIXI.Graphics();
        dialogBg.lineStyle(0, 0, 1);
        dialogBg.beginFill(0x404040, 0.98);
        dialogBg.drawRect(0, 0, dialogWidth, dialogHeight);
        this.dialogContainer.addChild(dialogBg);

        // Draw entity icon
        var entityIcon = new PIXI.Sprite(this.entityType.texture);
        entityIcon.x = 5;
        entityIcon.y = 30;
        entityIcon.width = 150;
        entityIcon.height = 150;
        this.dialogContainer.addChild(entityIcon);

        // Render statistics.
        var statsContainer = this.renderStats();
        statsContainer.x = 160;
        statsContainer.y = 20;
        this.dialogContainer.addChild(statsContainer);
    }

    renderStats() {
        var container = new PIXI.Container();

        // Render stats
        var stats = {
            "Armor": this.entityType.armor,
            "Health": this.entityType.health,
            "Speed": 6, // TODO: actually store speed in EntityType class
            "Surge": 3 // TODO: actually store surge value in EntityType class
        };

        // Draw surrounding boxes first.
        var statsGraphics = new PIXI.Graphics();
        statsGraphics.lineStyle(0, 0, 1);
        statsGraphics.beginFill(0xFFD89B, 1);
        var tmpY = 0;
        for (var statName in stats) {
            // Draw surrounding box.
            statsGraphics.drawRect(0, tmpY, 210, 32);
            tmpY += 32 + 10;

        }
        container.addChild(statsGraphics);

        // Draw stat labels.
        tmpY = 0;
        for (var statName in stats) {
            var statLabel = new PIXI.Text(statName, {
                font: "bold 22px Arial",
                fill: "#F7EDCA",
                stroke: "#4a1850",
                strokeThickness: 3,
                dropShadow : true,
                dropShadowColor : '#000000',
                dropShadowAngle : Math.PI / 6,
                dropShadowDistance : 6
            });
            statLabel.x = 10;
            statLabel.y = tmpY;
            container.addChild(statLabel);

            tmpY += 32 + 10;
        }

        // Draw stat values
        tmpY = 0;
        for (var statName in stats) {
            var statValue = stats[statName];

            var statLabel = new PIXI.Text(statValue, {
                font: "bold 23px Arial",
                fill: "#000000",
                stroke: "#199FFF",
                strokeThickness: 4,
            });
            statLabel.x = 210 - 10 - statLabel.width;
            statLabel.y = tmpY;
            container.addChild(statLabel);

            tmpY += 32 + 10;
        }

        return container;
    }
}

export default UiEntityLivingInfo;
