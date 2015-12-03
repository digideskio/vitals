/**
 * -----------------------------------------------------------------------------
 * VITALS - METHOD HELPER - IS STRING AN END-OF-LINE CHARACTER
 * -----------------------------------------------------------------------------
 * @version 2.0.1
 * @see [vitals]{@link https://github.com/imaginate/vitals/tree/master/src/methods}
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2015 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Supporting Libraries:
 * @see [are]{@link https://github.com/imaginate/are}
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';


////////////////////////////////////////////////////////////////////////////////
// PRIVATE HELPER - IS-EOL
////////////////////////////////////////////////////////////////////////////////

var _isEol = (function _isEolPrivateScope() {

  /**
   * @param {string} val
   * @return {boolean}
   */
  function _isEol(val) {
    return EOL.test(val);
  }

  /**
   * @private
   * @type {!RegExp}
   * @const
   */
  var EOL = /^(?:cr|lf|crlf)$/i;

  //////////////////////////////////////////////////////////
  // END OF PRIVATE SCOPE FOR IS-EOL
  return _isEol;
})();


module.exports = _isEol;