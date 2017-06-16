/**
 * ---------------------------------------------------------------------------
 * DIR CLASS
 * ---------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 */

'use strict';

/// #{{{ @func loadHelper
/**
 * @private
 * @param {string} name
 * @return {(!Object|!Function)}
 */
var loadHelper = require('./load-helper.js');
/// #}}} @func loadHelper

/// #{{{ @group OBJECT-CONTROL
//////////////////////////////////////////////////////////////////////////////
// OBJECT-CONTROL
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func capObject
/**
 * @private
 * @param {?Object} src
 * @param {boolean=} deep
 * @return {?Object}
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

/// #{{{ @func defineProp
/**
 * @private
 * @param {!Object} src
 * @param {string} key
 * @param {!Object} descriptor
 * @return {!Object}
 */
var defineProp = loadHelper('define-property');
/// #}}} @func defineProp

/// #{{{ @func freezeObject
/**
 * @private
 * @param {?Object} src
 * @param {boolean=} deep
 * @return {?Object}
 */
var freezeObject = loadHelper('freeze-object');
/// #}}} @func freezeObject

/// #{{{ @func sealObject
/**
 * @private
 * @param {?Object} src
 * @param {boolean=} deep
 * @return {?Object}
 */
var sealObject = loadHelper('seal-object');
/// #}}} @func sealObject

/// #}}} @group OBJECT-CONTROL

/// #{{{ @group CONSTANTS
//////////////////////////////////////////////////////////////////////////////
// CONSTANTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @const DEST_EXT
/**
 * @private
 * @const {!RegExp}
 */
var DEST_EXT = /\.js$/;
/// #}}} @const DEST_EXT

/// #{{{ @const DIR_TYPE_ID
/**
 * @private
 * @const {!Object}
 */
var DIR_TYPE_ID = loadHelper('type-ids').directory;
/// #}}} @const DIR_TYPE_ID

/// #{{{ @const IS
/**
 * @private
 * @const {!Object<string, !function>}
 */
var IS = loadHelper('is');
/// #}}} @const IS

/// #{{{ @const SRC_EXT
/**
 * @private
 * @const {!RegExp}
 */
var SRC_EXT = /\.js$/;
/// #}}} @const SRC_EXT

/// #}}} @group CONSTANTS

/// #{{{ @group HELPERS
//////////////////////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func cleanDirpath
/**
 * @private
 * @param {string} dirpath
 * @return {string}
 */
var cleanDirpath = loadHelper('clean-dirpath');
/// #}}} @func cleanDirpath

/// #{{{ @func cleanPath
/**
 * @private
 * @param {string} path
 * @return {string}
 */
var cleanPath = loadHelper('clean-path');
/// #}}} @func cleanPath

/// #{{{ @func getDirpaths
/**
 * @private
 * @param {string} dirpath
 * @param {?Object|boolean=} opts
 *   If the #opts is a `boolean`, the #opts.deep option is set to its value.
 * @param {?boolean=} opts.deep = `false`
 *   Make a recursive search for valid directory paths.
 * @param {?boolean=} opts.full = `false`
 *   Return absolute directory paths instead of relative directory paths.
 * @param {?boolean=} opts.extend = `false`
 *   When supplying a valid or invalid pattern to check paths against, the
 *   #opts.extend option allows you to supplement instead of overwrite the
 *   default valid or invalid test. If the default value is `null`, this
 *   option does not have any side effects.
 * @param {?RegExp=} opts.valid
 *   An alias for `opts.validDirs`.
 * @param {?RegExp=} opts.invalid
 *   An alias for `opts.invalidDirs`.
 * @param {?RegExp=} opts.validDirs = `null`
 *   A pattern for matching valid directory paths. If #opts.validDirs is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.validDirs pattern. Otherwise (i.e.
 *   if it does not have a forward slash), the path name is tested against the
 *   #opts.validDirs pattern.
 * @param {?RegExp=} opts.invalidDirs = `/^(?:\.git|\.bak|node_modules|vendor|\.?te?mp|\.?logs?|.*~)$/i`
 *   A pattern for matching invalid directory paths. If #opts.invalidDirs is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.invalidDirs pattern. Otherwise
 *   (i.e. if it does not have a forward slash), the path name is tested
 *   against the #opts.invalidDirs pattern.
 * @return {!Array<string>}
 */
var getDirpaths = loadHelper('get-dirpaths');
/// #}}} @func getDirpaths

/// #{{{ @func getFilepaths
/**
 * @private
 * @param {string} dirpath
 * @param {?Object|boolean=} opts
 *   If the #opts is a `boolean`, the #opts.deep option is set to its value.
 * @param {?boolean=} opts.deep = `false`
 *   Make a recursive search for valid files.
 * @param {?boolean=} opts.full = `false`
 *   Return absolute file paths instead of relative file paths.
 * @param {?boolean=} opts.extend = `false`
 *   When supplying a valid or invalid pattern to check paths against, the
 *   #opts.extend option allows you to supplement instead of overwrite the
 *   default valid or invalid test. If the default value is `null`, this
 *   option does not have any side effects.
 * @param {?RegExp=} opts.valid = `null`
 *   A pattern for matching valid file or directory paths. If #opts.valid is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.valid pattern. Otherwise (i.e. if
 *   it does not have a forward slash), the path name is tested against the
 *   #opts.valid pattern.
 * @param {?RegExp=} opts.invalid = `null`
 *   A pattern for matching invalid file or directory paths. If #opts.invalid
 *   is `null`, no check is performed. If it is a `RegExp`, the source
 *   property is checked for a forward slash, `"/"`. If it has a forward
 *   slash, the path tree is tested against the #opts.invalid pattern.
 *   Otherwise (i.e. if it does not have a forward slash), the path name is
 *   tested against the #opts.invalid pattern.
 * @param {?RegExp=} opts.validDirs = `null`
 *   Only used when #opts.deep is `true`. A pattern for matching valid
 *   directory paths. If #opts.validDirs is `null`, no check is performed. If
 *   it is a `RegExp`, the source property is checked for a forward slash,
 *   `"/"`. If it has a forward slash, the path tree is tested against the
 *   #opts.validDirs pattern. Otherwise (i.e. if it does not have a forward
 *   slash), the path name is tested against the #opts.validDirs pattern.
 * @param {?RegExp=} opts.invalidDirs = `/^(?:\.git|\.bak|node_modules|vendor|\.?te?mp|\.?logs?|.*~)$/i`
 *   Only used when #opts.deep is `true`. A pattern for matching invalid
 *   directory paths. If #opts.invalidDirs is `null`, no check is performed.
 *   If it is a `RegExp`, the source property is checked for a forward slash,
 *   `"/"`. If it has a forward slash, the path tree is tested against the
 *   #opts.invalidDirs pattern. Otherwise (i.e. if it does not have a forward
 *   slash), the path name is tested against the #opts.invalidDirs pattern.
 * @param {?RegExp=} opts.validFiles = `null`
 *   A pattern for matching valid file paths. If #opts.validFiles is `null`,
 *   no check is performed. If it is a `RegExp`, the source property is
 *   checked for a forward slash, `"/"`. If it has a forward slash, the path
 *   tree is tested against the #opts.validFiles pattern. Otherwise (i.e. if
 *   it does not have a forward slash), the path name is tested against the
 *   #opts.validFiles pattern.
 * @param {?RegExp=} opts.invalidFiles = `null`
 *   A pattern for matching invalid file paths. If #opts.invalidFiles is
 *   `null`, no check is performed. If it is a `RegExp`, the source property
 *   is checked for a forward slash, `"/"`. If it has a forward slash, the
 *   path tree is tested against the #opts.invalidFiles pattern. Otherwise
 *   (i.e. if it does not have a forward slash), the path name is tested
 *   against the #opts.invalidFiles pattern.
 * @return {!Array<string>}
 */
var getFilepaths = loadHelper('get-filepaths');
/// #}}} @func getFilepaths

/// #{{{ @func getPathName
/**
 * @private
 * @param {string} path
 * @return {string}
 */
var getPathName = loadHelper('get-pathname');
/// #}}} @func getPathName

/// #{{{ @func getPathNode
/**
 * @private
 * @param {(!Dir|!File)} src
 * @param {string} path
 * @return {(?Dir|?File)}
 */
var getPathNode = loadHelper('get-path-node');
/// #}}} @func getPathNode

/// #{{{ @func hasDirectory
/**
 * @private
 * @param {string} src
 *   The file path to check in.
 * @param {string} path
 *   The directory path to check for.
 * @return {boolean}
 */
var hasDirectory = loadHelper('has-directory');
/// #}}} @func hasDirectory

/// #{{{ @func hasOwnProp
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {boolean}
 */
var hasOwnProp = loadHelper('has-own-property');
/// #}}} @func hasOwnProp

/// #{{{ @func isBoolean
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isBoolean = IS.boolean;
/// #}}} @func isBoolean

/// #{{{ @func isBooleanMap
/**
 * @private
 * @param {!Object} vals
 * @return {boolean}
 */
var isBooleanMap = IS.booleanHashMap;
/// #}}} @func isBooleanMap

/// #{{{ @func isDirectory
/**
 * @private
 * @param {string} path
 * @return {boolean}
 */
var isDirectory = IS.directory;
/// #}}} @func isDirectory

/// #{{{ @func isDirNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isDirNode = loadHelper('is-directory-node');
/// #}}} @func isDirNode

/// #{{{ @func isFile
/**
 * @private
 * @param {string} path
 * @return {boolean}
 */
var isFile = IS.file;
/// #}}} @func isFile

/// #{{{ @func isFileNode
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isFileNode = loadHelper('is-file-node');
/// #}}} @func isFileNode

/// #{{{ @func isFunction
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isFunction = IS.func;
/// #}}} @func isFunction

/// #{{{ @func isNull
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isNull = IS.nil;
/// #}}} @func isNull

/// #{{{ @func isObject
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isObject = IS.object;
/// #}}} @func isObject

/// #{{{ @func isString
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isString = IS.string;
/// #}}} @func isString

/// #{{{ @func isUndefined
/**
 * @private
 * @param {*} val
 * @return {boolean}
 */
var isUndefined = IS.undefined;
/// #}}} @func isUndefined

/// #{{{ @func ownsCmd
/**
 * @private
 * @param {(!File|!Blk|!Cond)} src
 * @param {(string|!Blk|!Cond|!Incl)} node
 * @return {boolean}
 */
var ownsCmd = loadHelper('owns-command');
/// #}}} @func ownsCmd

/// #{{{ @func resolvePath
/**
 * @private
 * @param {(!Array<string>|...string)=} path
 * @return {string}
 */
var resolvePath = loadHelper('resolve-path');
/// #}}} @func resolvePath

/// #{{{ @func trimPathName
/**
 * @private
 * @param {string} path
 * @return {string}
 */
var trimPathName = loadHelper('trim-pathname');
/// #}}} @func trimPathName

/// #}}} @group HELPERS

/// #{{{ @group METHODS
//////////////////////////////////////////////////////////////////////////////
// METHODS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func mkDirs
/**
 * @private
 * @param {!Dir} parent
 * @return {void}
 */
function mkDirs(parent) {

  /** @type {!Array<string>} */
  var paths;
  /** @type {string} */
  var path;
  /** @type {!Object<string, !Dir>} */
  var dirs;
  /** @type {!Dir} */
  var dir;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  dirs = parent.dirs;
  paths = getDirpaths(parent.path, {
    'deep': false,
    'full': true,
    'extend': true,
    'invalidDirs': /^\./
  });
  len = paths.length;
  i = -1;
  while (++i < len) {
    path = paths[i];
    dir = new Dir(path, parent);
    dirs[dir.name] = dir;
  }

  capObject(dirs);
  sealObject(dirs);
}
/// #}}} @func mkDirs

/// #{{{ @func mkFiles
/**
 * @private
 * @param {!Dir} parent
 * @return {void}
 */
function mkFiles(parent) {

  /** @type {!Array<string>} */
  var paths;
  /** @type {!Object<string, !File>} */
  var files;
  /** @type {string} */
  var path;
  /** @type {!File} */
  var file;
  /** @type {number} */
  var len;
  /** @type {number} */
  var i;

  files = parent.files;
  paths = getFilepaths(parent.path, {
    'deep': false,
    'full': true,
    'validFiles': /\.js$/
  });
  len = paths.length;
  i = -1;
  while (++i < len) {
    path = paths[i];
    file = new File(path, parent);
    files[file.name] = file;
  }

  capObject(files);
  sealObject(files);
}
/// #}}} @func mkFiles

/// #}}} @group METHODS

/// #{{{ @group CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////
// CONSTRUCTORS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func Dir
/**
 * @public
 * @param {string} path
 * @param {?Dir=} parent
 * @constructor
 * @struct
 */
function Dir(path, parent) {

  if ( !isString(path) )
    throw new TypeError('invalid `path` data type\n' +
      '    valid-types: `string`');
  if (!path)
    throw new Error('invalid empty `string` for `path`');
  if ( !isDirectory(path) )
    throw new Error('invalid readable directory path `string` for `path`\n' +
      '    path: `' + path + '`');
  if ( !isNull(parent) && !isUndefined(parent) && !isDirNode(parent) )
    throw new TypeError('invalid `parent` data type\n' +
      '    valid-types: `?Dir=`');

  /// #{{{ @group Dir-Constants

  /// #{{{ @const PARENT
  /**
   * @private
   * @const {?Dir}
   */
  var PARENT = parent || null;
  /// #}}} @const PARENT

  /// #{{{ @const PATH
  /**
   * @private
   * @const {string}
   */
  var PATH = resolvePath(path);
  /// #}}} @const PATH

  /// #{{{ @const NAME
  /**
   * @private
   * @const {string}
   */
  var NAME = getPathName(PATH);
  /// #}}} @const NAME

  /// #{{{ @const TREE
  /**
   * @private
   * @const {string}
   */
  var TREE = !!PARENT
    ? cleanDirpath(PARENT.tree + name)
    : '';
  /// #}}} @const TREE

  /// #}}} @group Dir-Constants

  /// #{{{ @group Dir-Members

  /// #{{{ @member type
  /**
   * @public
   * @const {!Object}
   */
  defineProp(this, 'type', {
    'value': DIR_TYPE_ID,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member type

  /// #{{{ @member name
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'name', {
    'value': NAME,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member name

  /// #{{{ @member tree
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'tree', {
    'value': TREE,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member tree

  /// #{{{ @member path
  /**
   * @public
   * @const {string}
   */
  defineProp(this, 'path', {
    'value': PATH,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member path

  /// #{{{ @member parent
  /**
   * @public
   * @const {?Dir}
   */
  defineProp(this, 'parent', {
    'value': PARENT,
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member parent

  /// #{{{ @member dirs
  /**
   * @public
   * @const {!Object<string, !Dir>}
   */
  defineProp(this, 'dirs', {
    'value': {},
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member dirs

  /// #{{{ @member files
  /**
   * @public
   * @const {!Object<string, !File>}
   */
  defineProp(this, 'files', {
    'value': {},
    'writable': false,
    'enumerable': true,
    'configurable': false
  });
  /// #}}} @member files

  /// #}}} @group Dir-Members

  sealObject(this);
  capObject(this);
  mkFiles(this);
  mkDirs(this);
}
/// #}}} @func Dir

/// #{{{ @func File
/**
 * @private
 * @param {string} path
 * @param {!Dir} parent
 * @constructor
 * @struct
 */
var File = require('./file.js');
/// #}}} @func File

/// #}}} @group CONSTRUCTORS

/// #{{{ @group DIR-PROTOTYPE
//////////////////////////////////////////////////////////////////////////////
// DIR-PROTOTYPE
//////////////////////////////////////////////////////////////////////////////

Dir.prototype = createObject(null);
Dir.prototype.constructor = Dir;

/// #{{{ @func Dir.prototype.load
/**
 * @return {void}
 */
Dir.prototype.load = function load() {

  /** @type {!Object<string, !File>} */
  var files;
  /** @type {!Object<string, !Dir>} */
  var dirs;
  /** @type {string} */
  var name;

  files = this.files;
  for (name in files) {
    if ( hasOwnProp(files, name) )
      files[name].load();
  }

  dirs = this.dirs;
  for (name in dirs) {
    if ( hasOwnProp(dirs, name) )
      dirs[name].load();
  }
};
/// #}}} @func Dir.prototype.load

/// #{{{ @func Dir.prototype.preparse
/**
 * @return {void}
 */
Dir.prototype.preparse = function preparse() {

  /** @type {!Object<string, !File>} */
  var files;
  /** @type {!Object<string, !Dir>} */
  var dirs;
  /** @type {string} */
  var name;

  files = this.files;
  for (name in files) {
    if ( hasOwnProp(files, name) )
      files[name].preparse();
  }

  dirs = this.dirs;
  for (name in dirs) {
    if ( hasOwnProp(dirs, name) )
      dirs[name].preparse();
  }
};
/// #}}} @func Dir.prototype.preparse

/// #{{{ @func Dir.prototype.parse
/**
 * @return {void}
 */
Dir.prototype.parse = function parse() {

  /** @type {!Object<string, !File>} */
  var files;
  /** @type {!Object<string, !Dir>} */
  var dirs;
  /** @type {string} */
  var name;

  files = this.files;
  for (name in files) {
    if ( hasOwnProp(files, name) )
      files[name].parse();
  }

  dirs = this.dirs;
  for (name in dirs) {
    if ( hasOwnProp(dirs, name) )
      dirs[name].parse();
  }
};
/// #}}} @func Dir.prototype.parse

/// #{{{ @func Dir.prototype.run
/**
 * @param {string} src
 *   The file path to the source `File` instance you want to call
 *   `File.prototype.run` from. The file path may be relative or absolute. If
 *   it is a relative path, it is relative to the `Dir` instance (i.e. since
 *   only the root `Dir` instance is called from the exposed API, it is
 *   essentially relative to the root `Dir` instance).
 * @param {string} dest
 *   The file path to the destination you want to save the preprocessed result
 *   of `File.prototype.run`. The file path may be relative or absolute. If
 *   it is a relative path, it is relative to the `cwd`. The directory path up
 *   to the file name of the resolved #dest path must already exist. If a file
 *   exists at the resolved #dest path, it is overwritten.
 * @param {!Object<string, boolean>} state
 *   The enabled, `true`, or disabled, `false`, state for every conditional
 *   command defined within the #src `File` instance's *content* `array`. Each
 *   #state `object` key must be *hashed* (i.e. created) by combining each
 *   `Cond` instance's *tag* and *ID* with a colon, `":"`, separating them
 *   (e.g. `"tag:id"`). Every `Cond` instance within the #src `File` must be
 *   defined in the #state or an error will be thrown.
 * @param {(!function(string): string)=} alter
 *   The #alter `function` is optional. If it is defined, it allows you to
 *   provide custom alterations to the preprocessed result of
 *   `File.prototype.run` before it is saved to the #dest.
 * @return {string}
 */
Dir.prototype.run = function run(src, dest, state, alter) {

  /** @type {(?Dir|?File)} */
  var node;
  /** @type {string} */
  var path;
  /** @type {string} */
  var pwd;

  if ( !isUndefined(alter) && !isFunction(alter) )
    throw new TypeError('invalid `alter` data type\n' +
      '    valid-types: `(!function(string): string)=`');
  if ( !isObject(state) || !isBooleanMap(state) )
    throw new TypeError('invalid `state` data type\n' +
      '    valid-types: `!Object<string, boolean>`');
  if ( !isString(dest) )
    throw new TypeError('invalid `dest` data type\n' +
      '    valid-types: `string`');
  if ( !isString(src) )
    throw new TypeError('invalid `src` data type\n' +
      '    valid-types: `string`');

  pwd = this.path;

  if (!dest)
    throw new Error('invalid empty `string` for `dest`');
  if ( !DEST_EXT.test(dest) )
    throw new Error('invalid `dest` file extension\n' +
      '    should-match: `' + DEST_EXT.toString() + '`');

  dest = resolvePath(dest);
  path = trimPathName(dest);

  if ( !isDirectory(path) )
    throw new Error('invalid readable directory path for `dest`\n' +
      '    dest-path: `' + dest + '`\n' +
      '    dir-path: `' + path + '`');
  if ( hasDirectory(dest, pwd) )
    throw new Error('invalid `dest` file path location (' +
      'must NOT be within `Dir`)\n' +
      '    dir-path: `' + pwd + '`\n' +
      '    dest-path: `' + dest + '`');

  if (!src)
    throw new Error('invalid empty `string` for `src`');
  if ( !SRC_EXT.test(src) )
    throw new Error('invalid `src` file extension\n' +
      '    should-match: `' + SRC_EXT.toString() + '`');

  src = resolvePath(pwd, src);

  if ( !isFile(src) )
    throw new Error('invalid readable file path for `src`\n' +
      '    src-path: `' + src + '`');
  if ( !hasDirectory(src, pwd) )
    throw new Error('invalid `src` file path location (' +
      'must be within `Dir`)\n' +
      '    dir-path: `' + pwd + '`\n' +
      '    src-path: `' + src + '`');

  node = getPathNode(this, src);

  if ( !isFileNode(node) )
    throw new Error('no `File` node found for `src` path\n' +
      '    src-path: `' + src + '`');

  return isFunction(alter)
    ? node.run(dest, state, alter)
    : node.run(dest, state);
};
/// #}}} @func Dir.prototype.run

/// #}}} @group DIR-PROTOTYPE

/// #{{{ @group EXPORTS
//////////////////////////////////////////////////////////////////////////////
// EXPORTS
//////////////////////////////////////////////////////////////////////////////

module.exports = Dir;

/// #}}} @group EXPORTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol