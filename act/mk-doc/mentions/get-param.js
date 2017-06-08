/**
 * -----------------------------------------------------------------------------
 * ACT TASK HELPER: getParam
 * -----------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 *
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

'use strict';

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @const {!Object<string, function>}
 */
var IS = require('../../is.js');

/**
 * @private
 * @const {!RegExp}
 */
var PARAMS = /^params-/;

////////////////////////////////////////////////////////////////////////////////
// HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isString = IS.string;

////////////////////////////////////////////////////////////////////////////////
// EXPORTS
////////////////////////////////////////////////////////////////////////////////

/**
 * @public
 * @param {string} id
 * @return {string}
 */
module.exports = function getParam(id) {

  /** @type {string} */
  var param;

  if ( !isString(id) )
    throw new TypeError('invalid `id` type (must be a string)');
  if ( !id )
    throw new Error('invalid empty `id` string');

  param = id.replace(PARAMS, '');
  param = param.replace(/-/g, '.');

  if (!param)
    throw new Error('no param found when parsing mentions id `' + id + '`');

  return param;
};