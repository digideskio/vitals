/**
 * -----------------------------------------------------------------------------
 * ACT TASK HELPER: getMethod
 * -----------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Annotations:
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

'use strict';

var TRIM = /\bfunction\b|[ \]']/g;

/**
 * @param {!Array<string>} lines
 * @return {string}
 */
module.exports = function getMethod(lines) {

  /** @type {string} */
  var method;
  /** @type {number} */
  var last;

  last = lines.length - 1;
  method = lines[last].replace(TRIM, '');
  return method.replace('[', '.');
};
