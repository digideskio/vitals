/**
 * ---------------------------------------------------------------------------
 * THROWS-ERROR HELPER
 * ---------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life>
 */

'use strict';

/// #{{{ @group CONSTANTS
//////////////////////////////////////////////////////////////////////////////
// CONSTANTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const ASSERT
/**
 * @private
 * @const {!Function}
 */
var ASSERT = require('assert');
/// #}}} @const ASSERT

/// #{{{ @const IS
/**
 * @private
 * @const {!Object<string, !function>}
 * @struct
 */
var IS = require('./is.js');
/// #}}} @const IS

/// #}}} @group CONSTANTS

/// #{{{ @group HELPERS
//////////////////////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @group ERROR

/// #{{{ @func setError
/**
 * @private
 * @param {(!Error|!RangeError|!ReferenceError|!SyntaxError|!TypeError)} err
 * @param {string} msg
 * @return {(!Error|!RangeError|!ReferenceError|!SyntaxError|!TypeError)}
 */
var setError = require('./set-error.js');
/// #}}} @func setError

/// #{{{ @func setNoArgError
/**
 * @private
 * @param {!Error} err
 * @param {string} param
 * @return {!Error}
 */
var setNoArgError = setError.noArg;
/// #}}} @func setNoArgError

/// #{{{ @func setTypeError
/**
 * @private
 * @param {!TypeError} err
 * @param {string} param
 * @param {string} types
 * @return {!TypeError}
 */
var setTypeError = setError.type;
/// #}}} @func setTypeError

/// #}}} @group ERROR

/// #{{{ @group IS

/// #{{{ @func isFunction
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isFunction = IS.func;
/// #}}} @func isFunction

/// #{{{ @func isSetterError
/**
 * @private
 * @param {*} val
 * @param {string=} name = `undefined`
 * @return {boolean}
 */
var isSetterError = IS.setterError;
/// #}}} @func isSetterError

/// #{{{ @func isString
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isString = IS.string;
/// #}}} @func isString

/// #{{{ @func isVitalsError
/**
 * @private
 * @param {*} val
 * @param {string=} name = `undefined`
 * @return {boolean}
 */
var isVitalsError = IS.vitalsError;
/// #}}} @func isVitalsError

/// #}}} @group IS

/// #}}} @group HELPERS

/// #{{{ @group METHODS
//////////////////////////////////////////////////////////////////////////////
// METHODS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func throwsError
/**
 * @public
 * @param {!function} action
 * @return {void}
 */
function throwsError(action) {

  /// #{{{ @step verify-parameters

  if (!arguments.length) {
    throw setNoArgError(new Error, 'action');
  }
  if ( !isFunction(action) ) {
    throw setTypeError(new TypeError, 'action', '!function');
  }

  /// #}}} @step verify-parameters

  /// #{{{ @step run-assert

  ASSERT.throws(action, function isValidError(err) {
    return isVitalsError(err, 'Error');
  });

  /// #}}} @step run-assert
}
/// #}}} @func throwsError

/// #{{{ @func throwsRangeError
/**
 * @public
 * @param {!function} action
 * @return {void}
 */
function throwsRangeError(action) {

  /// #{{{ @step verify-parameters

  if (!arguments.length) {
    throw setNoArgError(new Error, 'action');
  }
  if ( !isFunction(action) ) {
    throw setTypeError(new TypeError, 'action', '!function');
  }

  /// #}}} @step verify-parameters

  /// #{{{ @step run-assert

  ASSERT.throws(action, function isValidError(err) {
    return isVitalsError(err, 'RangeError');
  });

  /// #}}} @step run-assert
}
/// #}}} @func throwsRangeError

/// #{{{ @func throwsSetterError
/**
 * @public
 * @param {!function} action
 * @return {void}
 */
function throwsSetterError(action) {

  /// #{{{ @step verify-parameters

  if (!arguments.length) {
    throw setNoArgError(new Error, 'action');
  }
  if ( !isFunction(action) ) {
    throw setTypeError(new TypeError, 'action', '!function');
  }

  /// #}}} @step verify-parameters

  /// #{{{ @step run-assert

  ASSERT.throws(action, function isValidError(err) {
    return isSetterError(err);
  });

  /// #}}} @step run-assert
}
/// #}}} @func throwsSetterError

/// #{{{ @func throwsTypeError
/**
 * @public
 * @param {!function} action
 * @return {void}
 */
function throwsTypeError(action) {

  /// #{{{ @step verify-parameters

  if (!arguments.length) {
    throw setNoArgError(new Error, 'action');
  }
  if ( !isFunction(action) ) {
    throw setTypeError(new TypeError, 'action', '!function');
  }

  /// #}}} @step verify-parameters

  /// #{{{ @step run-assert

  ASSERT.throws(action, function isValidError(err) {
    return isVitalsError(err, 'TypeError');
  });

  /// #}}} @step run-assert
}
/// #}}} @func throwsTypeError

/// #}}} @group METHODS

/// #{{{ @group EXPORTS
//////////////////////////////////////////////////////////////////////////////
// EXPORTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @step set-throws-properties

throwsError.range = throwsRangeError;
throwsError.setter = throwsSetterError;
throwsError.type = throwsTypeError;

/// #}}} @step set-throws-properties

module.exports = throwsError;

/// #}}} @group EXPORTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol