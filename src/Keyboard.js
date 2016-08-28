/*
Module for handling keyboard input.
 */

var pressedKeys = {};

function keyDownHandler(e) {
    pressedKeys[e.key] = true;
}

function keyUpHandler(e) {
    pressedKeys[e.key] = false;
}


/**
 * Bind event handlers to allow the keyboard module to begin receiving input.
 *
 * @param windowObj Window object to bind to.
 */
export function bindEventHandlers(windowObj) {
    windowObj.addEventListener("keydown", keyDownHandler);
    windowObj.addEventListener("keyup", keyUpHandler);
    console.debug("Keyboard handler bound event handlers.");
}

/**
 * Check if a particular key is currently down.
 *
 * @param keyCode
 * @returns {boolean}
 */
export function isKeyDown(key) {
    return !!pressedKeys[key];
}

/**
 * Check if a particular key is currently up.
 *
 * @param keyCode
 * @returns {boolean}
 */
export function isKeyUp(key) {
    return !pressedKeys[key];
}
