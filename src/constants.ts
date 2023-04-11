import { uaDetect } from './utils';

/**
 * @const {boolean} IS_MAC Check if device is a Mac
 */
export const IS_MAC = uaDetect("macOS", /Mac/);
/**
 * @const {number} KEY_A
 */
export const KEY_A = 65;
/**
 * @const {number} KEY_COMMA
 */
export const KEY_COMMA = 188;
/**
 * @const {number} KEY_RETURN
 */
export const KEY_RETURN = 13;
/**
 * @const {number} KEY_ESC
 */
export const KEY_ESC = 27;
/**
 * @const {number} KEY_LEFT
 */
export const KEY_LEFT = 37;
/**
 * @const {number} KEY_UP
 */
export const KEY_UP = 38;
/**
 * @const {number} KEY_P
 */
export const KEY_P = 80;
/**
 * @const {number} KEY_RIGHT
 */
export const KEY_RIGHT = 39;
/**
 * @const {number} KEY_DOWN
 */
export const KEY_DOWN = 40;
/**
 * @const {number} KEY_N
 */
export const KEY_N = 78;
/**
 * @const {number} KEY_BACKSPACE
 */
export const KEY_BACKSPACE = 8;
/**
 * @const {number} KEY_DELETE
 */
export const KEY_DELETE = 46;
/**
 * @const {number} KEY_SHIFT
 */
export const KEY_SHIFT = 16;
/**
 * @const {number} KEY_CMD
 */
export const KEY_CMD = IS_MAC ? 91 : 17;
/**
 * @const {number} KEY_CTRL
 */
export const KEY_CTRL = IS_MAC ? 18 : 17;
/**
 * @const {number} KEY_TAB
 */
export const KEY_TAB = 9;
/**
 * @const {number} TAG_SELECT
 */
export const TAG_SELECT = 1;
/**
 * @const {number} TAG_INPUT
 */
export const TAG_INPUT = 2;

/**
 * @const {number} SUPPORTS_VALIDITY_API Check if device support validity api, for now, android support in general is too spotty to support validity
 */
export const SUPPORTS_VALIDITY_API = !uaDetect("Android", /android/i) && !!document.createElement("input").validity;
