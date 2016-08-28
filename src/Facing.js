/*
Facing. Tile orientation is relative to the arrow; so if the arrow is pointing down, the tile is facing down.
 */

export const DOWN = 0;
export const LEFT = 1;
export const TOP = 2;
export const RIGHT = 3;

export function facingToDegrees(facing) {
    if (facing == DOWN) {
        return 0;
    } else if (facing == LEFT) {
        return 90;
    } else if (facing == TOP) {
        return 180;
    } else if (facing == RIGHT) {
        return 270;
    }
}

export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

export function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

export function facingToRadians(facing) {
    return degreesToRadians(facingToDegrees(facing));
}
