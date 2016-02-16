/**
 * -----------------------------------------------------------------------------
 * VITALS - JS METHOD HELPER - VALUE IN OBJECT
 * -----------------------------------------------------------------------------
 * @version 3.0.0-beta.1
 * @see [vitals]{@link https://github.com/imaginate/vitals/tree/master/src/methods}
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2016 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';

var _own = require('./own.js');

module.exports = _inObj;


////////////////////////////////////////////////////////////////////////////////
// PRIVATE HELPER - IN-OBJ
////////////////////////////////////////////////////////////////////////////////

/**
 * @param {!(Object|function)} source
 * @param {*} val
 * @return {boolean}
 */
function _inObj(source, val) {

  /** @type {string} */
  var key;

  for (key in source) {
    if ( _own(source, key) && source[key] === val ) return true;
  }
  return false;
}