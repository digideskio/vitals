/**
 * -----------------------------------------------------------------------------
 * VITALS HELPER: inObj
 * -----------------------------------------------------------------------------
 * @version 4.1.3
 * @see [vitals]{@link https://github.com/imaginate/vitals}
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Annotations:
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

'use strict';


////////////////////////////////////////////////////////////////////////////////
// VITALS HELPER: inObj
////////////////////////////////////////////////////////////////////////////////

var inObj = (function inObjPrivateScope() {

  /**
   * @private
   * @param {*} key
   * @return {boolean}
   */
  var hasOwn = Object.prototype.hasOwnProperty;

  /**
   * @param {(!Object|function)} source
   * @param {*} val
   * @return {boolean}
   */
  function inObj(source, val) {

    /** @type {string} */
    var key;

    for (key in source) {
      if ( hasOwn.call(source, key) && source[key] === val ) return true;
    }
    return false;
  }

  ////////////////////////////////////////////////////
  // PRIVATE SCOPE END: inObj
  return inObj;
})();


module.exports = inObj;
