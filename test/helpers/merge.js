/**
 * -----------------------------------------------------------------------------
 * VITALS UNIT TESTS HELPER: merge
 * -----------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2016 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';

module.exports = merge;

var own = require('./own');

/**
 * @param {(!Object|function)} dest
 * @param {(!Object|function)} source
 * @return {(!Object|function)}
 */
function merge(dest, source) {

  /** @type {string} */
  var key;

  for (key in source) {
    if ( own(source, key) ) dest[key] = source[key];
  }
  return dest;
}
