/**
 * ---------------------------------------------------------------------------
 * VITALS CUT
 * ---------------------------------------------------------------------------
 * @section base
 * @version 4.1.3
 * @see [vitals.cut](https://github.com/imaginate/vitals/wiki/vitals.cut)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://imaginate.life)
 */

'use strict';

var newErrorMaker = require('./helpers/new-error-maker.js');
var sliceArr = require('./helpers/slice-arr.js');
var escape = require('./helpers/escape.js');
var match = require('./helpers/match.js');
var own = require('./helpers/own.js');
var copy = require('./copy.js');
var _is = require('./helpers/is.js');
var is = require('./is.js');

///////////////////////////////////////////////////////////////////////// {{{1
// VITALS CUT
//////////////////////////////////////////////////////////////////////////////

var cut = (function cutPrivateScope() {

  //////////////////////////////////////////////////////////
  // PUBLIC METHODS
  // - cut
  // - cut.property   (cut.prop)
  // - cut.key
  // - cut.index      (cut.i)
  // - cut.type
  // - cut.value      (cut.val)
  // - cut.pattern
  // - cut.properties (cut.props)
  // - cut.keys
  // - cut.indexes    (cut.ii)
  // - cut.values     (cut.vals)
  // - cut.patterns
  //////////////////////////////////////////////////////////

  /* {{{2 Cut References
   * @ref [bind]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
   * @ref [call]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
   * @ref [func]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
   * @ref [this]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
   * @ref [type]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
   * @ref [clone]:(https://en.wikipedia.org/wiki/Cloning_(programming))
   * @ref [equal]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
   * @ref [slice]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
   * @ref [delete]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
   * @ref [minify]:(https://en.wikipedia.org/wiki/Minification_(programming))
   * @ref [splice]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
   * @ref [func-name]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
   * @ref [func-length]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
   */

  /// {{{2
  /// @method cut
  /**
   * Removes properties from an `object`, `array`, or `function` or characters
   * from a `string` and returns the amended #source.
   *
   * @public
   * @param {(!Object|function|!Array|string)} source
   * @param {...*} val
   *   If only one `array` #val is provided, it is considered an `array` of
   *   values. All other details are as follows (per #source type):
   *   - *`!Object|function`*!$
   *     - **The leading #val is a `RegExp`**!$
   *       This method will [delete][delete] all properties with a key that
   *       matches (via a @has#pattern test) any #val. If a #val is not a
   *       `RegExp`, it is converted to a `string` before a test is ran.
   *     - **The leading #val is a `string`**!$
   *       This method will [delete][delete] all properties with a key that
   *       matches (via a [strict equality][equal] test) any #val. If a #val
   *       is not a `string`, it is converted to a `string` before a
   *       comparison is made.
   *     - **The leading #val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the property is [deleted][delete]). It has the following
   *       optional parameters:
   *       - **value** *`*`*
   *       - **key** *`string`*
   *       - **source** *`!Object|function`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `object` within the filter make sure you define the
   *       filter's third parameter so you can safely assume all references to
   *       the #source are its original values).
   *     - **All other situations**!$
   *       This method will [delete][delete] all properties with a value that
   *       matches (via a [strict equality][equal] test) any #val.
   *   - *`!Array`*!$
   *     - **Every #val is a `number`**!$
   *       This method will [splice][splice] from the #source each property
   *       with an index that matches (via a [strict equality][equal] test)
   *       any #val.
   *     - **The leading #val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the property is [spliced][splice] from the #source). It has
   *       the following optional parameters:
   *       - **value** *`*`*
   *       - **index** *`number`*
   *       - **source** *`!Array`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `array` within the filter make sure you define the filter's
   *       third parameter so you can safely assume all references to the
   *       #source are its original values).
   *     - **All other situations**!$
   *       This method will [splice][splice] from the #source all properties
   *       with a value that matches (via a [strict equality][equal] test) any
   *       #val.
   *   - *`string`*!$
   *     Each `substring` of characters that matches any #val is removed from
   *     the #source. Each #val that is not a `RegExp` or `string` is
   *     converted to a `string` before checking the #source for any matches.
   * @param {?Object=} thisArg
   *   Only applicable when a filter `function` is defined for #val (i.e. the
   *   #source must be an `object`, `function`, or `array`, and the leading
   *   #val must be a `function`). If #thisArg is defined, the filter
   *   `function` is bound to its value. Note that the native
   *   [Function.prototype.bind][bind] is not used to bind the filter
   *   `function`. Instead the filter `function` is wrapped with a regular new
   *   [Function][func] that uses [Function.prototype.call][call] to call the
   *   filter `function` with #thisArg. The new wrapper `function` has the
   *   same [length property][func-length] value as the filter `function`
   *   (unless more than three parameters were defined for the filter
   *   `function` as the wrapper has a max value of `3`) and the
   *   [name property][func-name] value of `"filter"` (unless you are using a
   *   [minified][minify] version of `vitals`).
   * @return {(!Object|function|!Array|string)}
   *   The amended #source.
   */
  function cut(source, val, thisArg) {

    if (arguments.length < 2)
      throw _error('No val defined');

    if ( _is.str(source) ) {
      if (arguments.length > 2)
        val = sliceArr(arguments, 1);
      return _is.arr(val)
        ? _cutPatterns(source, val)
        : _cutPattern(source, val);
    }

    if ( !_is._obj(source) )
      throw _error.type('source');

    if ( _is.args(source) )
      source = sliceArr(source);

    if ( _is.func(val) ) {

      if ( !_is.nil.un.obj(thisArg) )
        throw _error.type('thisArg');

      return _is.arr(source)
        ? _filterArr(source, val, thisArg)
        : _filterObj(source, val, thisArg);
    }

    if (arguments.length > 2)
      val = sliceArr(arguments, 1);
    return _is.arr(val)
      ? _cutProps(source, val)
      : _cutProp(source, val);
  }

  /// {{{2
  /// @method cut.property
  /// @alias cut.prop
  /**
   * Removes a property from an `object`, `array`, or `function` and returns
   * the amended #source.
   *
   * @public
   * @param {(!Object|function|!Array)} source
   * @param {*} val
   *   All details are as follows (per #source type):
   *   - *`!Object|function`*!$
   *     - **#val is a `RegExp`**!$
   *       This method will [delete][delete] all properties with a key that
   *       matches (via a @has#pattern test) #val.
   *     - **#val is a `string`**!$
   *       This method will [delete][delete] all properties with a key that
   *       matches (via a [strict equality][equal] test) #val.
   *     - **#val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the property is [deleted][delete]). It has the following
   *       optional parameters:
   *       - **value** *`*`*
   *       - **key** *`string`*
   *       - **source** *`!Object|function`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `object` within the filter make sure you define the
   *       filter's third parameter so you can safely assume all references to
   *       the #source are its original values).
   *     - **All other situations**!$
   *       This method will [delete][delete] all properties with a value that
   *       matches (via a [strict equality][equal] test) #val.
   *   - *`!Array`*!$
   *     - **#val is a `number`**!$
   *       This method will [splice][splice] from the #source each property
   *       with an index that matches (via a [strict equality][equal] test)
   *       #val.
   *     - **#val is a `function`**!$
   *       The #val is considered a filter `function` (i.e. if it returns
   *       `false` the property is [spliced][splice] from the #source). It has
   *       the following optional parameters:
   *       - **value** *`*`*
   *       - **index** *`number`*
   *       - **source** *`!Array`*
   *       Note that this method lazily [clones][clone] the #source based on
   *       the filter's [length property][func-length] (i.e. if you alter the
   *       #source `array` within the filter make sure you define the filter's
   *       third parameter so you can safely assume all references to the
   *       #source are its original values).
   *     - **All other situations**!$
   *       This method will [splice][splice] from the #source all properties
   *       with a value that matches (via a [strict equality][equal] test)
   *       #val.
   * @param {?Object=} thisArg
   *   Only applicable when a filter `function` is defined for #val. If
   *   #thisArg is defined, the filter `function` is bound to its value. Note
   *   that the native [Function.prototype.bind][bind] is not used to bind the
   *   filter `function`. Instead the filter `function` is wrapped with a
   *   regular new [Function][func] that uses [Function.prototype.call][call]
   *   to call the filter `function` with #thisArg. The new wrapper `function`
   *   has the same [length property][func-length] value as the filter
   *   `function` (unless more than three parameters were defined for the
   *   filter `function` as the wrapper has a max value of `3`) and the
   *   [name property][func-name] value of `"filter"` (unless you are using a
   *   [minified][minify] version of `vitals`).
   * @return {(!Object|function|!Array)}
   *   The amended #source.
   */
  cut.property = function cutProperty(source, val, thisArg) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'property');
    if (arguments.length < 2)
      throw _error('No val defined', 'property');

    if ( _is.args(source) )
     source = sliceArr(source);

    if ( _is.func(val) ) {

      if ( !_is.nil.un.obj(thisArg) )
        throw _error.type('thisArg', 'property');

      return _is.arr(source)
        ? _filterArr(source, val, thisArg)
        : _filterObj(source, val, thisArg);
    }

    return _cutProp(source, val);
  };
  // define shorthand
  cut.prop = cut.property;

  /// {{{2
  /// @method cut.key
  /**
   * Removes a property by key name from an `object` or `function` and returns
   * the amended #source.
   *
   * @public
   * @param {(!Object|function)} source
   * @param {*} key
   *   If a property exists in #source with #key for its key name, it is
   *   [deleted][delete]. If #key is not a `string`, it is converted to a
   *   `string` before the #source is checked for #key.
   * @return {(!Object|function)}
   *   The amended #source.
   */
  cut.key = function cutKey(source, key) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'key');
    if (arguments.length < 2)
      throw _error('No key defined', 'key');

    return _cutKey(source, key);
  };

  /// {{{2
  /// @method cut.index
  /// @alias cut.i
  /**
   * Removes properties by index from an `array` or array-like `object` and
   * returns the amended #source. If an array-like `object` is supplied, it is
   * copied via [slice][slice] (i.e. converted to an `array`) before removing
   * any properties.
   *
   * @public
   * @param {(!Object|function|!Array)} source
   * @param {number} index
   *   The property index to [splice][splice] from #source.
   * @param {number=} toIndex
   *   If defined all property indexes from #index to #toIndex (not including
   *   #toIndex) are [spliced][splice] from #source.
   * @return {!Array}
   *   The amended #source or when an array-like `object` is defined for the
   *   #source, an amended copy (via [slice][slice]) of #source.
   */
  cut.index = function cutIndex(source, index, toIndex) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'index');
    if ( !_is.num(source.length) )
      throw _error.type('source.length', 'index');
    if ( !_is.num(index) )
      throw _error.type('index', 'index');
    if ( !_is.un.num(toIndex) )
      throw _error.type('toIndex', 'index');

    if ( !_is.arr(source) )
      source = sliceArr(source);
    return _cutIndex(source, index, toIndex);
  };
  // define shorthand
  cut.i = cut.index;

  /// {{{2
  /// @method cut.type
  /**
   * Removes properties by their value's [data type][type] from an `object`,
   * `function`, or `array` and returns the amended #source. @is#main is used
   * to complete the type checks.
   *
   * @public
   * @param {(!Object|function|!Array)} source
   * @param {string} type
   *   All properties with a value that match #type (via a @is#main test) will
   *   be [deleted][delete]. Refer to @is#main for all valid #type options.
   * @return {(!Object|function|!Array)}
   *   The amended #source.
   */
  cut.type = function cutType(source, type) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'type');
    if ( !_is.str(type) )
      throw _error.type('type', 'type');

    if ( _is.args(source) )
      source = sliceArr(source);

    if ( _is.empty(source) ) {
      is(type, ''); // run once to catch invalid types
      return source;
    }

    return _cutType(source, type);
  };

  /// {{{2
  /// @method cut.value
  /// @alias cut.val
  /**
   * Removes properties by value from an `object`, `function`, or `array` and
   * returns the amended #source.
   *
   * @public
   * @param {(!Object|function|!Array)} source
   * @param {*} val
   *   All details are as follows (per #source type):
   *   - *`!Object|function`*!$
   *     This method will [delete][delete] all properties with a value that
   *     matches (via a [strict equality][equal] test) #val.
   *   - *`!Array`*!$
   *     This method will [splice][splice] from the #source all properties
   *     with a value that matches (via a [strict equality][equal] test) #val.
   * @return {(!Object|function|!Array)}
   *   The amended #source.
   */
  cut.value = function cutValue(source, val) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'value');
    if (arguments.length < 2)
      throw _error('No val defined', 'value');

    if ( _is.args(source) )
      source = sliceArr(source);
    return _cutVal(source, val);
  };
  // define shorthand
  cut.val = cut.value;

  /// {{{2
  /// @method cut.pattern
  /**
   * Removes a pattern from a `string` and returns the amended #source.
   *
   * @public
   * @param {string} source
   * @param {*} pattern
   *   Each `substring` of characters that matches #pattern is removed from
   *   the #source. If #pattern is not a `RegExp` or `string`, it is converted
   *   into a `string` before checking the #source for any matches.
   * @return {string}
   *   The amended #source.
   */
  cut.pattern = function cutPattern(source, pattern) {

    if ( !_is.str(source) )
      throw _error.type('source', 'pattern');
    if (arguments.length < 2)
      throw _error('No pattern defined', 'pattern');

    return _cutPattern(source, pattern);
  };

  /// {{{2
  /// @method cut.properties
  /// @alias cut.props
  /**
   * Removes properties from an `object`, `array`, or `function` and returns
   * the amended #source.
   *
   * @public
   * @param {(!Object|function|!Array)} source
   * @param {...*} val
   *   If only one `array` #val is provided, it is considered an `array` of
   *   values. All other details are as follows (per #source type):
   *   - *`!Object|function`*!$
   *     - **The leading #val is a `RegExp`**!$
   *       This method will [delete][delete] all properties with a key that
   *       matches (via a @has#pattern test) any #val. If a #val is not a
   *       `RegExp`, it is converted into a `string` before a test is ran.
   *     - **The leading #val is a `string`**!$
   *       This method will [delete][delete] all properties with a key that
   *       matches (via a [strict equality][equal] test) any #val. If a #val is
   *       not a `string`, it is converted into a `string` before a comparison
   *       is made.
   *     - **All other situations**!$
   *       This method will [delete][delete] all properties with a value that
   *       matches (via a [strict equality][equal] test) any #val.
   *   - *`!Array`*!$
   *     - **Every #val is a `number`**!$
   *       This method will [splice][splice] from the #source each property with
   *       an index that matches (via a [strict equality][equal] test) any #val.
   *     - **All other situations**!$
   *       This method will [splice][splice] from the #source all properties
   *       with a value that matches (via a [strict equality][equal] test) any
   *       #val.
   * @return {(!Object|function|!Array)}
   *   The amended #source.
   */
  cut.properties = function cutProperties(source, val) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'properties');
    if (arguments.length < 2)
      throw _error('No val defined', 'properties');

    if ( _is.args(source) )
      source = sliceArr(source);
    if (arguments.length > 2)
      val = sliceArr(arguments, 1);
    return _is.arr(val)
      ? _cutProps(source, val)
      : _cutProp(source, val);
  };
  // define shorthand
  cut.props = cut.properties;

  /// {{{2
  /// @method cut.keys
  /**
   * Removes properties by key name from an `object` or `function` and returns
   * the amended #source.
   *
   * @public
   * @param {(!Object|function)} source
   * @param {...*} key
   *   If only one `array` #key is provided, it is considered an `array` of
   *   keys. If a property exists in #source with any #key for its key name,
   *   it is [deleted][delete]. If a #key is not a `string`, it is converted
   *   into a `string` before the #source is checked.
   * @return {(!Object|function)}
   *   The amended #source.
   */
  cut.keys = function cutKeys(source, key) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'keys');
    if (arguments.length < 2)
      throw _error('No key defined', 'keys');

    if (arguments.length > 2)
      key = sliceArr(arguments, 1);
    return _is.arr(key)
      ? _cutKeys(source, key)
      : _cutKey(source, key);
  };

  /// {{{2
  /// @method cut.indexes
  /// @alias cut.ii
  /**
   * Removes properties by index from an `array` or array-like `object` and
   * returns the amended #source. If an array-like `object` is supplied, it is
   * copied via [slice][slice] (i.e. converted to an `array`) before removing
   * any properties.
   *
   * @public
   * @param {(!Object|function|!Array)} source
   * @param {(!Array<number>|...number)} index
   *   If only one `array` #index is provided, it is considered an `array` of
   *   indexes. If a property with any #index exists in #source, it is
   *   [spliced][splice] from #source.
   * @return {!Array}
   *   The amended #source or when an array-like `object` is defined for the
   *   #source, an amended copy (via [slice][slice]) of #source.
   */
  cut.indexes = function cutIndexes(source, index) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'indexes');
    if ( !_is.num(source.length) )
      throw _error.type('source.length', 'indexes');
    if (arguments.length < 2)
      throw _error('No index defined', 'indexes');

    if ( !_is.arr(source) )
      source = sliceArr(source);
    if (arguments.length > 2)
      index = sliceArr(arguments, 1);

    if ( !_is.arr(index) ) {

      if ( !_is.num(index) )
        throw _error.type('index', 'indexes');

      return _cutIndex(source, index);
    }

    if ( !is('!nums', index) )
      throw _error.type('index', 'indexes');

    return _cutIndexes(source, index);
  };
  // define shorthand
  cut.ii = cut.indexes;

  /// {{{2
  /// @method cut.values
  /// @alias cut.vals
  /**
   * Removes properties by value from an `object`, `function`, or `array` and
   * returns the amended #source.
   *
   * @public
   * @param {(!Object|function|!Array)} source
   * @param {...*} val
   *   If only one `array` #val is provided, it is considered an `array` of
   *   values. All other details are as follows (per #source type):
   *   - *`!Object|function`*!$
   *     This method will [delete][delete] all properties with a value that
   *     matches (via a [strict equality][equal] test) any #val.
   *   - *`!Array`*!$
   *     This method will [splice][splice] from the #source all properties
   *     with a value that matches (via a [strict equality][equal] test) any
   *     #val.
   * @return {(!Object|function|!Array)}
   *   The amended #source.
   */
  cut.values = function cutValues(source, val) {

    if ( !_is._obj(source) )
      throw _error.type('source', 'value');
    if (arguments.length < 2)
      throw _error('No val defined', 'value');

    if ( _is.args(source) )
      source = sliceArr(source);
    if (arguments.length > 2)
      val = sliceArr(arguments, 1);
    return _is.arr(val)
      ? _cutVals(source, val)
      : _cutVal(source, val);
  };
  // define shorthand
  cut.vals = cut.values;

  /// {{{2
  /// @method cut.patterns
  /**
   * Removes patterns from a `string` and returns the amended #source.
   *
   * @public
   * @param {string} source
   * @param {...*} pattern
   *   If only one `array` #pattern is provided, it is considered an `array`
   *   of patterns. Each `substring` of characters that matches any #pattern
   *   is removed from the #source. If a #pattern is not a `RegExp` or
   *   `string`, it is converted into a `string` before checking the #source
   *   for any matches.
   * @return {string}
   *   The amended #source.
   */
  cut.patterns = function cutPatterns(source, pattern) {

    if ( !_is.str(source) )
      throw _error.type('source', 'patterns');
    if (arguments.length < 2)
      throw _error('No pattern defined', 'patterns');

    if (arguments.length > 2)
      pattern = sliceArr(arguments, 1);
    return _is.arr(pattern)
      ? _cutPatterns(source, pattern)
      : _cutPattern(source, pattern);
  };

  ///////////////////////////////////////////////////// {{{2
  // CUT HELPERS - MAIN
  //////////////////////////////////////////////////////////

  /// {{{3
  /// @func _cutProp
  /**
   * @private
   * @param {(!Object|function|!Array)} source
   * @param {*} val
   * @return {(!Object|function|!Array)}
   */
  function _cutProp(source, val) {
    return _is.arr(source)
      ? _is.num(val)
        ? _spliceKey(source, val)
        : _spliceVal(source, val)
      : is('!str|regex', val)
        ? _deleteKey(source, val)
        : _deleteVal(source, val);
  }

  /// {{{3
  /// @func _cutProps
  /**
   * @private
   * @param {(!Object|function|!Array)} source
   * @param {!Array<*>} vals
   * @return {(!Object|function|!Array)}
   */
  function _cutProps(source, vals) {
    return _is.arr(source)
      ? is('nums', vals)
        ? _spliceKeys(source, vals)
        : _spliceVals(source, vals)
      : is('!str|regex', vals[0])
        ? _deleteKeys(source, vals)
        : _deleteVals(source, vals);
  }

  /// {{{3
  /// @func _cutKey
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {*} key
   * @return {(!Object|function)}
   */
  function _cutKey(source, key) {
    delete source[key];
    return source;
  }

  /// {{{3
  /// @func _cutKeys
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {!Array} keys
   * @return {(!Object|function)}
   */
  function _cutKeys(source, keys) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = keys.length;
    i = -1;
    while (++i < len)
      delete source[ keys[i] ];
    return source;
  }

  /// {{{3
  /// @func _cutIndex
  /**
   * @private
   * @param {!Array} source
   * @param {number} key
   * @param {number=} toKey
   * @return {!Array}
   */
  function _cutIndex(source, key, toKey) {

    /** @type {number} */
    var len;

    len = source.length;
    if (key < 0)
      key = len + key;

    if (key >= len)
      return source;

    if ( _is.undefined(toKey) ) {
      if (key < 0)
        return source;
      source.splice(key, 1);
      return source;
    }

    if (key < 0)
      key = 0;
    toKey = toKey > len
      ? len
      : toKey < 0
        ? len + toKey
        : toKey;

    if (key >= toKey)
      return source;

    source.splice(key, toKey - key);
    return source;
  }

  /// {{{3
  /// @func _cutIndexes
  /**
   * @private
   * @param {!Array} source
   * @param {!Array<number>} keys
   * @return {!Array}
   */
  function _cutIndexes(source, keys) {
    return _spliceKeys(source, keys);
  }

  /// {{{3
  /// @func _cutType
  /**
   * @private
   * @param {(!Object|function|!Array)} source
   * @param {string} type
   * @return {(!Object|function|!Array)}
   */
  function _cutType(source, type) {
    return _is.arr(source)
      ? _spliceValByType(source, type)
      : _deleteValByType(source, type);
  }

  /// {{{3
  /// @func _cutVal
  /**
   * @private
   * @param {(!Object|function|!Array)} source
   * @param {*} val
   * @return {(!Object|function|!Array)}
   */
  function _cutVal(source, val) {
    return _is.arr(source)
      ? _spliceVal(source, val)
      : _deleteVal(source, val);
  }

  /// {{{3
  /// @func _cutVals
  /**
   * @private
   * @param {(!Object|function|!Array)} source
   * @param {!Array<*>} vals
   * @return {(!Object|function|!Array)}
   */
  function _cutVals(source, vals) {
    return _is.arr(source)
      ? _spliceVals(source, vals)
      : _deleteVals(source, vals);
  }

  /// {{{3
  /// @func _cutPattern
  /**
   * @private
   * @param {string} source
   * @param {*} pattern
   * @return {string}
   */
  function _cutPattern(source, pattern) {
    if ( !_is.regex(pattern) ) {
      pattern = String(pattern);
      pattern = escape(pattern);
      pattern = new RegExp(pattern, 'g');
    }
    return source.replace(pattern, '');
  }

  /// {{{3
  /// @func _cutPatterns
  /**
   * @private
   * @param {string} source
   * @param {!Array} patterns
   * @return {string}
   */
  function _cutPatterns(source, patterns) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = patterns.length;
    i = -1;
    while (++i < len)
      source = _cutPattern(source, patterns[i]);
    return source;
  }

  ///////////////////////////////////////////////////// {{{2
  // CUT HELPERS - DELETE
  //////////////////////////////////////////////////////////

  /// {{{3
  /// @func _deleteKey
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {*} key
   * @param {boolean=} useMatch
   * @return {(!Object|function)}
   */
  function _deleteKey(source, key, useMatch) {

    /** @type {!RegExp} */
    var pattern;

    if ( _is.undefined(useMatch) )
      useMatch = _is.regex(key);

    if (!useMatch) {
      if ( own(source, key) )
        delete source[key];
      return source;
    }

    pattern = key;
    for (key in source) {
      if ( own(source, key) && match(key, pattern) )
        delete source[key];
    }
    return source;
  }

  /// {{{3
  /// @func _deleteKeys
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {!Array} keys
   * @return {(!Object|function)}
   */
  function _deleteKeys(source, keys) {

    /** @type {boolean} */
    var useMatch;
    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    useMatch = _is.regex( keys[0] );
    len = keys.length;
    i = -1;
    while (++i < len)
      source = _deleteKey(source, keys[i], useMatch);
    return source;
  }

  /// {{{3
  /// @func _deleteVal
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {*} val
   * @return {(!Object|function)}
   */
  function _deleteVal(source, val) {

    /** @type {string} */
    var key;

    for (key in source) {
      if ( own(source, key) && source[key] === val )
        delete source[key];
    }
    return source;
  }

  /// {{{3
  /// @func _deleteValByType
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {string} type
   * @return {(!Object|function)}
   */
  function _deleteValByType(source, type) {

    /** @type {string} */
    var key;

    for (key in source) {
      if ( own(source, key) && is(type, source[key]) )
        delete source[key];
    }
    return source;
  }

  /// {{{3
  /// @func _deleteVals
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {!Array} vals
   * @return {(!Object|function)}
   */
  function _deleteVals(source, vals) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    len = vals.length;
    i = -1;
    while (++i < len)
      source = _deleteVal(source, vals[i]);
    return source;
  }

  ///////////////////////////////////////////////////// {{{2
  // CUT HELPERS - SPLICE
  //////////////////////////////////////////////////////////

  /// {{{3
  /// @func _spliceKey
  /**
   * @private
   * @param {!Array} source
   * @param {number} key
   * @return {!Array}
   */
  function _spliceKey(source, key) {

    /** @type {number} */
    var len;

    len = source.length;
    if (key < 0)
      key = len + key;

    if (key < 0 || key >= len)
      return source;

    source.splice(key, 1);
    return source;
  }

  /// {{{3
  /// @func _spliceKeys
  /**
   * @private
   * @param {!Array} source
   * @param {!Array<number>} keys
   * @return {!Array}
   */
  function _spliceKeys(source, keys) {

    /** @type {!Object} */
    var sorted;
    /** @type {number} */
    var first;
    /** @type {number} */
    var count;
    /** @type {number} */
    var i;

    if (!source.length || !keys.length)
      return source;

    if (keys.length < 2)
      return _spliceKey(source, keys[0]);

    sorted = _sortIndexes(keys, source.length);
    i = sorted.first.length;
    while (i--) {
      first = sorted.first[i];
      count = sorted.last[i] - first + 1;
      source.splice(first, count);
    }
    return source;
  }

  /// {{{3
  /// @func _spliceVal
  /**
   * @private
   * @param {!Array} source
   * @param {*} val
   * @return {!Array}
   */
  function _spliceVal(source, val) {

    /** @type {number} */
    var i;

    i = source.length;
    while (i--) {
      if (source[i] === val)
        source.splice(i, 1);
    }
    return source;
  }

  /// {{{3
  /// @func _spliceValByType
  /**
   * @private
   * @param {!Array} source
   * @param {string} type
   * @return {!Array}
   */
  function _spliceValByType(source, type) {

    /** @type {number} */
    var i;

    i = source.length;
    while (i--) {
      if ( is(type, source[i]) )
        source.splice(i, 1);
    }
    return source;
  }

  /// {{{3
  /// @func _spliceVals
  /**
   * @private
   * @param {!Array} source
   * @param {!Array} vals
   * @return {!Array}
   */
  function _spliceVals(source, vals) {

    /** @type {*} */
    var val;
    /** @type {number} */
    var len;
    /** @type {number} */
    var ii;
    /** @type {number} */
    var i;

    len = vals.length;
    i = source.length;
    while (i--) {
      val = source[i];
      ii = len;
      while (ii--) {
        if (vals[ii] === val) {
          source.splice(i, 1);
          break;
        }
      }
    }
    return source;
  }

  ///////////////////////////////////////////////////// {{{2
  // CUT HELPERS - FILTER
  //////////////////////////////////////////////////////////

  /// {{{3
  /// @func _filterObj
  /**
   * @private
   * @param {(!Object|function)} source
   * @param {function} filter
   * @param {?Object=} thisArg
   * @return {(!Object|function)}
   */
  function _filterObj(source, filter, thisArg) {

    /** @type {!Object} */
    var obj;
    /** @type {string} */
    var key;

    if ( !_is.undefined(thisArg) )
      filter = _bind(filter, thisArg);
    obj = filter.length > 2
      ? copy(source)
      : source;
    switch (filter.length) {
      case 0:
        for (key in obj) {
          if ( own(obj, key) && !filter() )
            delete source[key];
        }
        break;
      case 1:
        for (key in obj) {
          if ( own(obj, key) && !filter(obj[key]) )
            delete source[key];
        }
        break;
      case 2:
        for (key in obj) {
          if ( own(obj, key) && !filter(obj[key], key) )
            delete source[key];
        }
        break;
      default:
        for (key in obj) {
          if ( own(obj, key) && !filter(obj[key], key, obj) )
            delete source[key];
        }
        break;
    }
    return source;
  }

  /// {{{3
  /// @func _filterArr
  /**
   * @private
   * @param {!Array} source
   * @param {function} filter
   * @param {?Object=} thisArg
   * @return {!Array}
   */
  function _filterArr(source, filter, thisArg) {

    /** @type {!Array} */
    var arr;
    /** @type {number} */
    var i;

    if ( !_is.undefined(thisArg) )
      filter = _bind(filter, thisArg);
    arr = filter.length > 2
      ? copy.arr(source)
      : source;
    i = arr.length;
    switch (filter.length) {
      case 0:
        while (i--) {
          if ( !filter() )
            source.splice(i, 1);
        }
        break;
      case 1:
        while (i--) {
          if ( !filter(arr[i]) )
            source.splice(i, 1);
        }
        break;
      case 2:
        while (i--) {
          if ( !filter(arr[i], i) )
            source.splice(i, 1);
        }
        break;
      default:
        while (i--) {
          if ( !filter(arr[i], i, arr) )
            source.splice(i, 1);
        }
        break;
    }
    return source;
  }

  ///////////////////////////////////////////////////// {{{2
  // CUT HELPERS - SORT
  //////////////////////////////////////////////////////////

  /**
   * @typedef {{
   *   first: !Array<number>,
   *   last:  !Array<number>
   * }} SortedIndexes
   */

  /// {{{3
  /// @func _sortIndexes
  /**
   * @private
   * @param {!Array<number>} indexes
   * @param {number} sourceLen
   * @return {!SortedIndexes}
   */
  var _sortIndexes = (function() {

    /// {{{4
    /// @func sortIndexes
    /**
     * @private
     * @param {!Array<number>} indexes
     * @param {number} sourceLen
     * @return {!SortedIndexes}
     */
    function sortIndexes(indexes, sourceLen) {

      /** @type {number} */
      var index;
      /** @type {number} */
      var len;
      /** @type {number} */
      var i;

      setup();

      len = indexes.length;
      i = 0;

      // push 1st index
      index = parse(indexes[i], sourceLen);
      while (index === -1 && ++i < len)
        index = parse(indexes[i], sourceLen);
      push(index);

      // push remaining indexes
      while (++i < len) {
        index = parse(indexes[i], sourceLen);
        if (index !== -1)
          sort(index, 0, last.length);
      }

      return result();
    }

    ///////////////////////// {{{4
    // SORT MEMBERS
    // - FIRST
    // - LAST

    /** @type {!Array<number>} */
    var first;
    /** @type {!Array<number>} */
    var last;

    ///////////////////////// {{{4
    // SORT METHODS
    // - SETUP
    // - RESULT
    // - PARSE
    // - PUSH
    // - UNSHIFT
    // - INSERT
    // - REMOVE
    // - SORT
    // - COMPARE PREV
    // - COMPARE NEXT

    /// {{{5
    /// @func setup
    /**
     * @private
     * @type {function}
     */
    function setup() {
      first = [];
      last = [];
    }

    /// {{{5
    /// @func result
    /**
     * @private
     * @return {!SortedIndexes}
     */
    function result() {
      return {
        first: first,
        last:  last
      };
    }

    /// {{{5
    /// @func parse
    /**
     * @private
     * @param {number} index
     * @param {number} len
     * @return {number}
     *   If invalid #index is given `-1` is returned.
     */
    function parse(index, len) {
      if (index < 0)
        index = len + index;
      return index < 0 || index >= len
        ? -1
        : index;
    }

    /// {{{5
    /// @func push
    /**
     * @private
     * @param {number} index
     */
    function push(index) {
      first.push(index);
      last.push(index);
    }

    /// {{{5
    /// @func unshift
    /**
     * @private
     * @param {number} index
     */
    function unshift(index) {
      first.unshift(index);
      last.unshift(index);
    }

    /// {{{5
    /// @func insert
    /**
     * @private
     * @param {number} index
     * @param {number} pos
     */
    function insert(index, pos) {
      first.splice(pos, 0, index);
      last.splice(pos, 0, index);
    }

    /// {{{5
    /// @func remove
    /**
     * @private
     * @param {number} index
     * @param {number} pos
     */
    function remove(pos) {
      first.splice(pos, 1);
      last.splice(pos, 1);
    }

    /// {{{5
    /// @func sort
    /**
     * @private
     * @param {number} index
     * @param {number} left
     * @param {number} right
     */
    function sort(index, left, right) {

      /** @type {number} */
      var mid;
      /** @type {number} */
      var min;

      mid = (left + right) >>> 1;
      min = first[mid];
      if (index < min)
        comparePrev(index, left, mid);
      else if (index > last[mid])
        compareNext(index, mid, right);
    }

    /// {{{5
    /// @func comparePrev
    /**
     * @private
     * @param {number} index
     * @param {number} left
     * @param {number} mid
     */
    function comparePrev(index, left, mid) {

      /** @type {number} */
      var prev;
      /** @type {number} */
      var min;
      /** @type {number} */
      var max;

      min = first[mid];
      if (!mid) {
        if (index === --min)
          first[mid] = index;
        else
          unshift(index);
        return;
      }
      prev = mid - 1;
      max = last[prev];
      if (index === --min) {
        if (index === ++max) {
          last[prev] = last[mid];
          remove(mid);
        }
        else
          first[mid] = index;
      }
      else if (index > max) {
        if (index === ++max)
          last[prev] = index;
        else
          insert(index, mid);
      }
      else
        sort(index, left, prev);
    }

    /// {{{5
    /// @func compareNext
    /**
     * @private
     * @param {number} index
     * @param {number} mid
     * @param {number} right
     */
    function compareNext(index, mid, right) {

      /** @type {number} */
      var next;
      /** @type {number} */
      var min;
      /** @type {number} */
      var max;

      next = mid + 1;
      max = last[mid];
      if (next === last.length) {
        if (index === ++max)
          last[mid] = index;
        else
          push(index);
        return;
      }
      min = first[next];
      if (index === ++max) {
        if (index === --min) {
          last[mid] = last[next];
          remove(next);
        }
        else
          last[mid] = index;
      }
      else if (index < min) {
        if (index === --min)
          first[next] = index;
        else
          insert(index, next);
      }
      else
        sort(index, next, right);
    }

    /// }}}4
    // END OF INDEX SORT PRIVATE SCOPE
    return sortIndexes;
  })();

  ///////////////////////////////////////////////////// {{{2
  // CUT HELPERS - MISC
  //////////////////////////////////////////////////////////

  /// {{{3
  /// @func _bind
  /**
   * @private
   * @param {function} func
   * @param {?Object} thisArg
   * @return {function} 
   */
  function _bind(func, thisArg) {
    switch (func.length) {
      case 0:
        return function filter() {
          return func.call(thisArg);
        };
      case 1:
        return function filter(val) {
          return func.call(thisArg, val);
        };
      case 2:
        return function filter(val, key) {
          return func.call(thisArg, val, key);
        };
    }
    return function filter(val, key, obj) {
      return func.call(thisArg, val, key, obj);
    };
  }

  /// {{{3
  /// @func _error
  /**
   * @private
   * @type {!ErrorAid}
   */
  var _error = newErrorMaker('cut');

  /// }}}2
  // END OF PRIVATE SCOPE FOR CUT
  return cut;
})();
/// }}}1

module.exports = cut;

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
