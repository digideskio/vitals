/**
 * -----------------------------------------------------------------------------
 * ACT TASK HELPER: getMatch
 * -----------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2016 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';

/**
 * @param {string} str
 * @param {!RegExp} pattern
 * @return {string}
 */
module.exports = function getMatch(str, pattern) {

  /** @type {Array} */
  var matches;
  /** @type {?string=} */
  var match;

  matches = pattern.exec(str);
  match = matches && matches[0];
  return match || '';
};