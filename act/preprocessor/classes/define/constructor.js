/**
 * ---------------------------------------------------------------------------
 * DEFINE CONSTRUCTOR
 * ---------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 */

'use strict';

/// #{{{ @group LOADERS
//////////////////////////////////////////////////////////////////////////////
// LOADERS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func loadHelper
/**
 * @private
 * @param {string} name
 * @return {(!Object|!Function)}
 */
var loadHelper = require('./.load-helper.js');
/// #}}} @func loadHelper

/// #}}} @group LOADERS

/// #{{{ @group CONSTANTS
//////////////////////////////////////////////////////////////////////////////
// CONSTANTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const DEF_TYPE_ID
/**
 * @private
 * @const {!Object}
 */
var DEF_TYPE_ID = loadHelper('type-ids').DEF;
/// #}}} @const DEF_TYPE_ID

/// #{{{ @const IS
/**
 * @private
 * @const {!Object<string, !function>}
 */
var IS = loadHelper('is');
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
var setError = loadHelper('set-error');
/// #}}} @func setError

/// #{{{ @func setCloseError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setCloseError = setError.close;
/// #}}} @func setCloseError

/// #{{{ @func setCmdError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setCmdError = setError.cmd;
/// #}}} @func setCmdError

/// #{{{ @func setDefChildError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} child
 * @param {!Line} parent
 * @return {!SyntaxError}
 */
var setDefChildError = setError.defChild;
/// #}}} @func setDefChildError

/// #{{{ @func setEmptyError
/**
 * @private
 * @param {!Error} err
 * @param {string} param
 * @return {!Error}
 */
var setEmptyError = setError.empty;
/// #}}} @func setEmptyError

/// #{{{ @func setIdError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setIdError = setError.id;
/// #}}} @func setIdError

/// #{{{ @func setIndexError
/**
 * @private
 * @param {!RangeError} err
 * @param {string} param
 * @param {number} index
 * @param {number=} min = `0`
 * @return {!RangeError}
 */
var setIndexError = setError.index;
/// #}}} @func setIndexError

/// #{{{ @func setMatchError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} open
 * @param {!Line} close
 * @return {!SyntaxError}
 */
var setMatchError = setError.match;
/// #}}} @func setMatchError

/// #{{{ @func setNewError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {string} constructor
 * @return {!SyntaxError}
 */
var setNewError = setError.new_;
/// #}}} @func setNewError

/// #{{{ @func setNoArgError
/**
 * @private
 * @param {!Error} err
 * @param {string} param
 * @return {!Error}
 */
var setNoArgError = setError.noArg;
/// #}}} @func setNoArgError

/// #{{{ @func setNoCloseError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setNoCloseError = setError.noClose;
/// #}}} @func setNoCloseError

/// #{{{ @func setOpenError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setOpenError = setError.open;
/// #}}} @func setOpenError

/// #{{{ @func setTagError
/**
 * @private
 * @param {!SyntaxError} err
 * @param {!Line} line
 * @return {!SyntaxError}
 */
var setTagError = setError.tag;
/// #}}} @func setTagError

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

/// #{{{ @func setWholeError
/**
 * @private
 * @param {!RangeError} err
 * @param {string} param
 * @param {number} value
 * @return {!RangeError}
 */
var setWholeError = setError.whole;
/// #}}} @func setWholeError

/// #}}} @group ERROR

/// #{{{ @group GET

/// #{{{ @func getIdComponent
/**
 * @private
 * @param {(string|!Line)} text
 * @return {string}
 */
var getIdComponent = loadHelper('get-id-component');
/// #}}} @func getIdComponent

/// #{{{ @func getTagComponent
/**
 * @private
 * @param {(string|!Line)} text
 * @return {string}
 */
var getTagComponent = loadHelper('get-tag-component');
/// #}}} @func getTagComponent

/// #}}} @group GET

/// #{{{ @group HAS

/// #{{{ @func hasClose
/**
 * @private
 * @param {string} text
 * @return {boolean}
 */
var hasClose = loadHelper('has-close-command');
/// #}}} @func hasClose

/// #{{{ @func hasCommand
/**
 * @private
 * @param {string} text
 * @return {boolean}
 */
var hasCommand = loadHelper('has-command');
/// #}}} @func hasCommand

/// #{{{ @func hasDefine
/**
 * @private
 * @param {string} text
 * @return {boolean}
 */
var hasDefine = loadHelper('has-define-command');
/// #}}} @func hasDefine

/// #{{{ @func hasInsert
/**
 * @private
 * @param {string} text
 * @return {boolean}
 */
var hasInsert = loadHelper('has-insert-command');
/// #}}} @func hasInsert

/// #{{{ @func hasOpen
/**
 * @private
 * @param {string} text
 * @return {boolean}
 */
var hasOpen = loadHelper('has-open-command');
/// #}}} @func hasOpen

/// #{{{ @func hasOwnProperty
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
var hasOwnProperty = loadHelper('has-own-property');
/// #}}} @func hasOwnProperty

/// #{{{ @func hasValidDefine
/**
 * @private
 * @param {string} text
 * @return {boolean}
 */
var hasValidDefine = loadHelper('has-valid-define');
/// #}}} @func hasValidDefine

/// #}}} @group HAS

/// #{{{ @group IS

/// #{{{ @func isArray
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isArray = IS.array;
/// #}}} @func isArray

/// #{{{ @func isBlkNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isBlkNode = loadHelper('is-block-node');
/// #}}} @func isBlkNode

/// #{{{ @func isCondNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isCondNode = loadHelper('is-conditional-node');
/// #}}} @func isCondNode

/// #{{{ @func isFileNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isFileNode = loadHelper('is-file-node');
/// #}}} @func isFileNode

/// #{{{ @func isInclNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isInclNode = loadHelper('is-include-node');
/// #}}} @func isInclNode

/// #{{{ @func isInstanceOf
/**
 * @private
 * @param {*} inst
 * @param {!Function} constructor
 * @return {boolean}
 */
var isInstanceOf = IS.instanceOf;
/// #}}} @func isInstanceOf

/// #{{{ @func isLineNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isLineNode = loadHelper('is-line-node');
/// #}}} @func isLineNode

/// #{{{ @func isLocNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isLocNode = loadHelper('is-location-node');
/// #}}} @func isLocNode

/// #{{{ @func isNull
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isNull = IS.nil;
/// #}}} @func isNull

/// #{{{ @func isNumber
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isNumber = IS.number;
/// #}}} @func isNumber

/// #{{{ @func isUndefined
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isUndefined = IS.undefined;
/// #}}} @func isUndefined

/// #{{{ @func isWholeNumber
/**
 * @private
 * @param {number} val
 * @return {boolean}
 */
var isWholeNumber = IS.wholeNumber;
/// #}}} @func isWholeNumber

/// #}}} @group IS

/// #{{{ @group OBJECT

/// #{{{ @func capObject
/**
 * @private
 * @param {(?Object|?Function)} src
 * @param {boolean=} deep = `false`
 * @return {(?Object|?Function)}
 */
var capObject = loadHelper('cap-object');
/// #}}} @func capObject

/// #{{{ @func createObject
/**
 * @private
 * @param {?Object} proto
 * @return {!Object}
 */
var createObject = loadHelper('create-object');
/// #}}} @func createObject

/// #{{{ @func defineProperty
/**
 * @private
 * @param {!Object} src
 * @param {string} key
 * @param {!Object} descriptor
 * @return {!Object}
 */
var defineProperty = loadHelper('define-property');
/// #}}} @func defineProperty

/// #{{{ @func freezeObject
/**
 * @private
 * @param {(?Object|?Function)} src
 * @param {boolean=} deep = `false`
 * @return {(?Object|?Function)}
 */
var freezeObject = loadHelper('freeze-object');
/// #}}} @func freezeObject

/// #{{{ @func lockObject
/**
 * @private
 * @param {(?Object|?Function)} src
 * @param {boolean=} deep = `false`
 * @return {(?Object|?Function)}
 */
var lockObject = loadHelper('lock-object');
/// #}}} @func lockObject

/// #{{{ @func sealObject
/**
 * @private
 * @param {(?Object|?Function)} src
 * @param {boolean=} deep = `false`
 * @return {(?Object|?Function)}
 */
var sealObject = loadHelper('seal-object');
/// #}}} @func sealObject

/// #}}} @group OBJECT

/// #{{{ @group PATH

/// #{{{ @func resolvePath
/**
 * @private
 * @param {(!Array<string>|...string)=} path
 * @return {string}
 */
var resolvePath = loadHelper('resolve-path');
/// #}}} @func resolvePath

/// #}}} @group PATH

/// #{{{ @group SETUP

/// #{{{ @func setupPrototype
/**
 * @private
 * @param {string} classname
 * @param {!Function} constructor
 * @param {string} funcname
 *   The constructor's name.
 * @param {string} path
 *   The absolute path to the directory containing the methods for the class.
 * @return {!Function}
 */
var setupPrototype = loadHelper('setup-prototype');
/// #}}} @func setupPrototype

/// #}}} @group SETUP

/// #}}} @group HELPERS

/// #{{{ @group PATHS
//////////////////////////////////////////////////////////////////////////////
// PATHS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const DIR
/**
 * @private
 * @const {!Object<string, string>}
 * @struct
 */
var DIR = freezeObject({
  MAIN: resolvePath(__dirname),
  METHODS: resolvePath(__dirname, './methods')
});
/// #}}} @const DIR

/// #}}} @group PATHS

/// #{{{ @group CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////
// CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func Def
/**
 * @public
 * @param {!Line} open
 * @param {!File} file
 * @constructor
 * @struct
 */
function Def(open, file) {

  /// #{{{ @step verify-new-keyword

  if ( !isInstanceOf(this, Def) )
    throw setNewError(new SyntaxError, 'Def');

  /// #}}} @step verify-new-keyword

  /// #{{{ @step verify-parameters

  switch (arguments.length) {
    case 0:
      throw setNoArgError(new Error, 'open');
    case 1:
      throw setNoArgError(new Error, 'file');
  }

  if ( !isLineNode(open) )
    throw setTypeError(new TypeError, 'open', '!Line');
  if ( !isFileNode(file) )
    throw setTypeError(new TypeError, 'file', '!File');

  /// #}}} @step verify-parameters

  /// #{{{ @step set-constants

  /// #{{{ @const OPEN
  /**
   * @private
   * @const {!Line}
   */
  var OPEN = open;
  /// #}}} @const OPEN

  /// #{{{ @const FILE
  /**
   * @private
   * @const {!File}
   */
  var FILE = file;
  /// #}}} @const FILE

  /// #{{{ @const TEXT
  /**
   * @private
   * @const {string}
   */
  var TEXT = OPEN.text;
  /// #}}} @const TEXT

  /// #{{{ @const TAG
  /**
   * @private
   * @const {string}
   */
  var TAG = getTagComponent(TEXT);
  /// #}}} @const TAG

  /// #{{{ @const ID
  /**
   * @private
   * @const {string}
   */
  var ID = getIdComponent(TEXT);
  /// #}}} @const ID

  /// #{{{ @const KEY
  /**
   * @private
   * @const {string}
   */
  var KEY = TAG + ':' + ID;
  /// #}}} @const KEY

  /// #}}} @step set-constants

  /// #{{{ @step verify-syntax

  if (!TAG)
    throw setTagError(new SyntaxError, OPEN);
  if (!ID)
    throw setIdError(new SyntaxError, OPEN);
  if ( !hasOpen(TEXT) )
    throw setOpenError(new SyntaxError, OPEN);
  if ( !hasValidDefine(TEXT) )
    throw setCmdError(new SyntaxError, OPEN);

  /// #}}} @step verify-syntax

  /// #{{{ @step set-members

  /// #{{{ @member type
  /**
   * @public
   * @const {!Object}
   */
  defineProperty(this, 'type', {
    'value': DEF_TYPE_ID,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member type

  /// #{{{ @member tag
  /**
   * @public
   * @const {string}
   */
  defineProperty(this, 'tag', {
    'value': TAG,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member tag

  /// #{{{ @member id
  /**
   * @public
   * @const {string}
   */
  defineProperty(this, 'id', {
    'value': ID,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member id

  /// #{{{ @member key
  /**
   * @public
   * @const {string}
   */
  defineProperty(this, 'key', {
    'value': KEY,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member key

  /// #{{{ @member file
  /**
   * @public
   * @const {!File}
   */
  defineProperty(this, 'file', {
    'value': FILE,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member file

  /// #{{{ @member open
  /**
   * @public
   * @const {!Line}
   */
  defineProperty(this, 'open', {
    'value': OPEN,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member open

  /// #{{{ @member close
  /**
   * @public
   * @type {?Line}
   */
  defineProperty(this, 'close', {
    'value': null,
    'writable': true,
    'enumerable': true,
    'configurable': true
  });
  /// #}}} @member close

  /// #{{{ @member lines
  /**
   * @public
   * @const {!Array<!Line>}
   */
  defineProperty(this, 'lines', {
    'value': [],
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member lines

  /// #}}} @step set-members

  /// #{{{ @step cap-instance

  capObject(this);

  /// #}}} @step cap-instance
}
/// #}}} @func Def

setupPrototype('define', Def, 'Def', DIR.METHODS);

/// #}}} @group CONSTRUCTORS

/// #{{{ @group EXPORTS
//////////////////////////////////////////////////////////////////////////////
// EXPORTS
//////////////////////////////////////////////////////////////////////////////

module.exports = Def;

/// #}}} @group EXPORTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol