/**
 * ---------------------------------------------------------------------------
 * HAS-DEFINE-COMMAND HELPER
 * ---------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 */

'use strict';

/// #{{{ @func loadTaskHelper
/**
 * @private
 * @param {string} name
 * @return {(!Object|!Function)}
 */
var loadTaskHelper = require('./load-task-helper.js');
/// #}}} @func loadTaskHelper

/// #{{{ @group CONSTANTS
//////////////////////////////////////////////////////////////////////////////
// CONSTANTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const CMD
/**
 * @private
 * @const {!RegExp}
 */
var CMD = /^[ \t]*\/\/\/[ \t]+#def(?:\{{3}|\}{3})[ \t]/;
/// #}}} @const CMD

/// #{{{ @const IS
/**
 * @private
 * @const {!Object<string, !function>}
 */
var IS = loadTaskHelper('is');
/// #}}} @const IS

/// #}}} @group CONSTANTS

/// #{{{ @group HELPERS
//////////////////////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func isString
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isString = IS.string;
/// #}}} @func isString

/// #}}} @group HELPERS

/// #{{{ @group EXPORTS
//////////////////////////////////////////////////////////////////////////////
// EXPORTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func hasDefineCommand
/**
 * @public
 * @param {string} text
 * @return {boolean}
 */
function hasDefineCommand(text) {

  if ( !isString(text) )
    throw new TypeError('invalid `text` data type\n' +
      '    valid-types: `string`');

  return !!text && CMD.test(text);
}
/// #}}} @func hasDefineCommand

module.exports = hasDefineCommand;

/// #}}} @group EXPORTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
