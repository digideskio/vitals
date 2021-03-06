/**
 * -----------------------------------------------------------------------------
 * VITALS UNIT TESTS HELPER: hasOwn
 * -----------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Annotations:
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

'use strict';

module.exports = hasOwn;

/**
 * @private
 * @param {*} key
 * @return {boolean}
 */
var hasOwnProp = Object.prototype.hasOwnProperty;

/**
 * @param {(!Object|function)} source
 * @param {*} key
 * @return {boolean}
 */
function hasOwn(source, key) {
  return hasOwnProp.call(source, key);
}
