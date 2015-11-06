/**
 * -----------------------------------------------------------------------------
 * VITALS - JS METHOD - FREEZE
 * -----------------------------------------------------------------------------
 * @version 2.0.0
 * @see [vitals.freeze]{@link https://github.com/imaginate/vitals/blob/master/src/js-methods/freeze.js}
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

var is = require('node-are').is;
var has = require('./has.js');


////////////////////////////////////////////////////////////////////////////////
// FREEZE
////////////////////////////////////////////////////////////////////////////////

var freeze = (function freezePrivateScope() {

  //////////////////////////////////////////////////////////
  // PUBLIC METHODS
  // - freeze
  // - freeze.object (freeze.obj)
  //////////////////////////////////////////////////////////

  /**
   * Freezes an object with optional deep freeze.
   * @public
   * @param {?(Object|function)} obj
   * @param {boolean=} deep
   * @return {?(Object|function)}
   */
  function freeze(obj, deep) {

    if ( is.null(obj) ) return null;

    if ( !is._obj(obj)      ) throw _error.type('obj');
    if ( !is('bool=', deep) ) throw _error.type('deep');

    return deep ? _deepFreeze(obj) : _freeze(obj);
  }

  /**
   * Freezes an object with optional deep freeze.
   * @public
   * @param {?(Object|function)} obj
   * @param {boolean=} deep
   * @return {?(Object|function)}
   */
  freeze.object = function freezeObject(obj, deep) {

    if ( is.null(obj) ) return null;

    if ( !is._obj(obj)      ) throw _error.type('obj',  'object');
    if ( !is('bool=', deep) ) throw _error.type('deep', 'object');

    return deep ? _deepFreeze(obj) : _freeze(obj);
  };
  // define shorthand
  freeze.obj = freeze.object;

  //////////////////////////////////////////////////////////
  // PRIVATE PROPERTIES - MAIN
  //////////////////////////////////////////////////////////

  /**
   * @private
   * @param {!(Object|function)} obj
   * @return {!(Object|function)}
   */
  var _freeze = !Object.freeze
    ? function ObjectFreeze(obj) { return obj; }
    : Object.freeze;

  /**
   * @private
   * @param {?(Object|function)} obj
   * @return {?(Object|function)}
   */
  var _deepFreeze = !Object.freeze
    ? function _deepFreeze(obj) { return obj; }
    : function _deepFreeze(obj) {

      /** @type {string} */
      var key;
      /** @type {*} */
      var val;

      for (key in obj) {
        if ( _own(obj, key) ) {
          val = obj[key];
          if ( is._obj(val) ) {
            obj[key] = _deepFreeze(val);
          }
        }
      }
      return _freeze(obj);
    };

  //////////////////////////////////////////////////////////
  // PRIVATE METHODS - GENERAL
  //////////////////////////////////////////////////////////

  /**
   * @private
   * @param {?(Object|function)} obj
   * @param {*} key
   * @return {boolean}
   */
  var _own = has.key;

  /**
   * @private
   * @type {!ErrorAid}
   */
  var _error = makeErrorAid('freeze');

  //////////////////////////////////////////////////////////
  // END OF PRIVATE SCOPE FOR FREEZE
  return freeze;
})();


module.exports = freeze;
