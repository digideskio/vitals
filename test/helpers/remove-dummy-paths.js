/**
 * ---------------------------------------------------------------------------
 * REMOVE-DUMMY-PATHS HELPER
 * ---------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life>
 */

'use strict';

/// #{{{ @group TYPEDEFS
//////////////////////////////////////////////////////////////////////////////
// TYPEDEFS
//////////////////////////////////////////////////////////////////////////////

/**
 * @typedef {(string|!Array<string>)} Files
 */

/**
 * @typedef {!Object<string, (?Files|?Dirs)>} Dirs
 */

/// #}}} @group TYPEDEFS

/// #{{{ @group CONSTANTS
//////////////////////////////////////////////////////////////////////////////
// CONSTANTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const FS
/**
 * @private
 * @const {!Object}
 * @struct
 */
var FS = require('fs');
/// #}}} @const FS

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

/// #{{{ @func setEmptyError
/**
 * @private
 * @param {!Error} err
 * @param {string} param
 * @return {!Error}
 */
var setEmptyError = setError.empty;
/// #}}} @func setEmptyError

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

/// #{{{ @group FS

/// #{{{ @func removeDirectory
/**
 * @private
 * @param {string} path
 * @return {string}
 */
function removeDirectory(path) {

  /// #{{{ @step declare-variables

  /** @type {!Error} */
  var err;

  /// #}}} @step declare-variables

  /// #{{{ @step verify-parameters

  if (!arguments.length) {
    throw setNoArgError(new Error, 'path');
  }
  if ( !isString(path) ) {
    throw setTypeError(new TypeError, 'path', 'string');
  }
  if (!path) {
    throw setEmptyError(new Error, 'path');
  }

  /// #}}} @step verify-parameters

  /// #{{{ @step verify-no-existing-file

  if ( isFile(path) ) {
    throw setError(new Error,
      'file exists (instead of directory) at path set by `path` parameter\n'
      + '    path: `' + path + '`');
  }

  /// #}}} @step verify-no-existing-file

  /// #{{{ @step check-existing-directory

  if ( !isDirectory(path) ) {
    return path;
  }

  /// #}}} @step check-existing-directory

  /// #{{{ @step remove-directory

  try {
    rmdir(path);
  }
  catch (err) {
    throw setError(err, err.message);
  }

  /// #}}} @step remove-directory

  /// #{{{ @step return-path

  return path;

  /// #}}} @step return-path
}
/// #}}} @func removeDirectory

/// #{{{ @func removeFile
/**
 * @private
 * @param {string} path
 * @return {string}
 */
function removeFile(path) {

  /// #{{{ @step declare-variables

  /** @type {!Error} */
  var err;

  /// #}}} @step declare-variables

  /// #{{{ @step verify-parameters

  if (!arguments.length) {
    throw setNoArgError(new Error, 'path');
  }
  if ( !isString(path) ) {
    throw setTypeError(new TypeError, 'path', 'string');
  }
  if (!path) {
    throw setEmptyError(new Error, 'path');
  }

  /// #}}} @step verify-parameters

  /// #{{{ @step verify-no-existing-directory

  if ( isDirectory(path) ) {
    throw setError(new Error,
      'directory exists (instead of a regular file) at the path set by `path`'
      + ' parameter\n'
      + '    path: `' + path + '`');
  }

  /// #}}} @step verify-no-existing-directory

  /// #{{{ @step check-existing-file

  if ( !isFile(path) ) {
    return path;
  }

  /// #}}} @step check-existing-file

  /// #{{{ @step remove-file

  try {
    rmfile(path);
  }
  catch (err) {
    throw setError(err, err.message);
  }

  /// #}}} @step remove-file

  /// #{{{ @step return-path

  return path;

  /// #}}} @step return-path
}
/// #}}} @func removeFile

/// #{{{ @func rmdir
/**
 * @private
 * @param {string} path
 * @return {void}
 */
var rmdir = FS.rmdirSync;
/// #}}} @func rmdir

/// #{{{ @func rmfile
/**
 * @private
 * @param {string} path
 * @return {void}
 */
var rmfile = FS.unlinkSync;
/// #}}} @func rmfile

/// #}}} @group FS

/// #{{{ @group HAS

/// #{{{ @func hasOwnEnumProperty
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
var hasOwnEnumProperty = require('./has-own-enum-property.js');
/// #}}} @func hasOwnEnumProperty

/// #}}} @group HAS

/// #{{{ @group IS

/// #{{{ @func isArray
/**
 * @private
 * @param {*} val
 * @return {Array}
 */
var isArray = IS.array;
/// #}}} @func isArray

/// #{{{ @func isDirectory
/**
 * @private
 * @param {string} path
 * @return {boolean}
 */
var isDirectory = IS.directory;
/// #}}} @func isDirectory

/// #{{{ @func isFile
/**
 * @private
 * @param {string} path
 * @return {boolean}
 */
var isFile = IS.file;
/// #}}} @func isFile

/// #{{{ @func isNull
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isNull = IS.nil;
/// #}}} @func isNull

/// #{{{ @func isPlainObject
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isPlainObject = IS.plainObject;
/// #}}} @func isPlainObject

/// #{{{ @func isString
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isString = IS.string;
/// #}}} @func isString

/// #{{{ @func isStringList
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isStringList = IS.stringList;
/// #}}} @func isStringList

/// #{{{ @func isUndefined
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isUndefined = IS.void;
/// #}}} @func isUndefined

/// #}}} @group IS

/// #{{{ @group OBJECT

/// #{{{ @func forEachProperty
/**
 * @private
 * @param {(!Array|!Arguments|!Object|!Function)} src
 * @param {!function(*, (number|string))} func
 * @return {(!Array|!Arguments|!Object|!Function)}
 */
var forEachProperty = require('./for-each-property.js');
/// #}}} @func forEachProperty

/// #}}} @group OBJECT

/// #{{{ @group PATH

/// #{{{ @func resolveDummyPath
/**
 * @private
 * @param {(!Array<string>|!Arguments<string>|...string)=} path
 * @return {string}
 */
var resolveDummyPath = require('./resolve-dummy-path.js');
/// #}}} @func resolveDummyPath

/// #}}} @group PATH

/// #}}} @group HELPERS

/// #{{{ @group METHODS
//////////////////////////////////////////////////////////////////////////////
// METHODS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func removeDummyPaths
/**
 * @public
 * @param {(?Files|?Dirs)=} paths = `null`
 * @return {void}
 */
function removeDummyPaths(paths) {

  /// #{{{ @step verify-parameters

  if (!arguments.length) {
    throw setNoArgError(new Error, 'paths');
  }

  /// #}}} @step verify-parameters

  /// #{{{ @step check-dummy-paths

  if ( isNull(paths) || isUndefined(paths) ) {
    return;
  }

  /// #}}} @step check-dummy-paths

  /// #{{{ @const DIRS
  /**
   * @private
   * @const {!Array<string>}
   */
  var DIRS = [];
  /// #}}} @const DIRS

  /// #{{{ @const FILES
  /**
   * @private
   * @const {!Array<string>}
   */
  var FILES = [];
  /// #}}} @const FILES

  /// #{{{ @func parseFile
  /**
   * @private
   * @param {string} path
   * @param {string} file
   * @return {void}
   */
  function parseFile(path, file) {

    /// #{{{ @step verify-parameters

    switch (arguments.length) {
      case 0:
        throw setNoArgError(new Error, 'path');
      case 1:
        throw setNoArgError(new Error, 'file');
    }

    if ( !isString(path) ) {
      throw setTypeError(new TypeError, 'path', 'string');
    }
    if ( !isString(file) ) {
      throw setTypeError(new TypeError, 'file', 'string');
    }

    if (!file) {
      throw setEmptyError(new Error, 'file');
    }

    /// #}}} @step verify-parameters

    /// #{{{ @step parse-file

    path = resolveDummyPath(path, file);
    FILES.push(path);

    /// #}}} @step parse-file
  }
  /// #}}} @func parseFile

  /// #{{{ @func parseFiles
  /**
   * @private
   * @param {string} path
   * @param {!Array<string>} files
   * @return {void}
   */
  function parseFiles(path, files) {

    /// #{{{ @step verify-parameters

    switch (arguments.length) {
      case 0:
        throw setNoArgError(new Error, 'path');
      case 1:
        throw setNoArgError(new Error, 'files');
    }

    if ( !isString(path) ) {
      throw setTypeError(new TypeError, 'path', 'string');
    }
    if ( !isArray(files) ) {
      throw setTypeError(new TypeError, 'files', '!Array<string>');
    }

    /// #}}} @step verify-parameters

    /// #{{{ @step parse-files

    forEachProperty(files, function _parsefile(file) {
      parseFile(path, file);
    });

    /// #}}} @step parse-files
  }
  /// #}}} @func parseFiles

  /// #{{{ @func parseDir
  /**
   * @private
   * @param {string} path
   * @param {string} dir
   * @return {void}
   */
  function parseDir(path, dir) {

    /// #{{{ @step verify-parameters

    switch (arguments.length) {
      case 0:
        throw setNoArgError(new Error, 'path');
      case 1:
        throw setNoArgError(new Error, 'dir');
    }

    if ( !isString(path) ) {
      throw setTypeError(new TypeError, 'path', 'string');
    }
    if ( !isString(dir) ) {
      throw setTypeError(new TypeError, 'dir', 'string');
    }

    if (!dir) {
      throw setEmptyError(new Error, 'dir');
    }

    /// #}}} @step verify-parameters

    /// #{{{ @step parse-dir

    path = resolveDummyPath(path, dir);
    DIRS.push(path);

    /// #}}} @step parse-dir
  }
  /// #}}} @func parseDir

  /// #{{{ @func parseDirs
  /**
   * @private
   * @param {string} path
   * @param {!Dirs} dirs
   * @return {void}
   */
  function parseDirs(path, dirs) {

    /// #{{{ @step verify-parameters

    switch (arguments.length) {
      case 0:
        throw setNoArgError(new Error, 'path');
      case 1:
        throw setNoArgError(new Error, 'dirs');
    }

    if ( !isString(path) ) {
      throw setTypeError(new TypeError, 'path', 'string');
    }
    if ( !isPlainObject(dirs) ) {
      throw setTypeError(new TypeError, 'dirs', '!Dirs');
    }

    /// #}}} @step verify-parameters

    /// #{{{ @step parse-dirs

    forEachProperty(dirs, function _parseDir(val, key) {

      /// #{{{ @step declare-variables

      /** @type {string} */
      var dirpath;

      /// #}}} @step declare-variables

      /// #{{{ @step check-undefined-value

      if ( isUndefined(val) ) {
        return;
      }

      /// #}}} @step check-undefined-value

      /// #{{{ @step resolve-new-parent-path

      dirpath = resolveDummyPath(path, key);

      /// #}}} @step resolve-new-parent-path

      /// #{{{ @step parse-new-paths

      if ( isString(val) ) {
        parseFile(dirpath, val);
      }
      else if ( isArray(val) ) {
        parseFiles(dirpath, val);
      }
      else if ( isPlainObject(val) ) {
        parseDirs(dirpath, val);
      }
      else if ( !isNull(val) ) {
        throw setTypeError(new TypeError, 'dirs.' + key, '(?Files|?Dirs)=');
      }

      /// #}}} @step parse-new-paths

      /// #{{{ @step parse-new-directory

      parseDir(path, key);

      /// #}}} @step parse-new-directory
    });

    /// #}}} @step parse-dirs
  }
  /// #}}} @func parseDirs

  /// #{{{ @step parse-paths

  if ( isString(paths) ) {
    parseFile('', paths);
  }
  else if ( isArray(paths) ) {
    parseFiles('', paths);
  }
  else if ( !isPlainObject(paths) ) {
    throw setTypeError(new TypeError, 'paths', '(?Files|?Dirs)=');
  }
  else if ( hasOwnEnumProperty(paths, 'root') ) {
    parseFiles('', paths.root);
    paths.root = undefined;
    parseDirs('', paths);
  }
  else {
    parseDirs('', paths);
  }

  /// #}}} @step parse-paths

  /// #{{{ @step remove-dummy-directories

  forEachProperty(DIRS, removeDirectory);

  /// #}}} @step remove-dummy-directories

  /// #{{{ @step remove-dummy-files

  forEachProperty(FILES, removeFile);

  /// #}}} @step remove-dummy-files
}
/// #}}} @func removeDummyPaths

/// #}}} @group METHODS

/// #{{{ @group EXPORTS
//////////////////////////////////////////////////////////////////////////////
// EXPORTS
//////////////////////////////////////////////////////////////////////////////

module.exports = removeDummyPaths;

/// #}}} @group EXPORTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
