/**
 * -----------------------------------------------------------------------------
 * VITALS - JS METHOD - UNTIL
 * -----------------------------------------------------------------------------
 * @version 3.0.0
 * @see [vitals.until]{@link https://github.com/imaginate/vitals/blob/master/src/methods/until.js}
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2016 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Supporting Libraries:
 * @see [are]{@link https://github.com/imaginate/are}
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';

var newErrorAid = require('./helpers/errorAid.js');
var _splitKeys = require('./helpers/splitKeys.js');
var _own = require('./helpers/own.js');
var is = require('node-are').is;
var copy = require('./copy.js');


////////////////////////////////////////////////////////////////////////////////
// UNTIL
////////////////////////////////////////////////////////////////////////////////

var until = (function untilPrivateScope() {

  //////////////////////////////////////////////////////////
  // PUBLIC METHODS
  // - until
  // - until.object (until.obj)
  // - until.array  (until.arr)
  // - until.cycle  (until.time)
  //////////////////////////////////////////////////////////

  /**
   * A shortcut for iterating over object maps, arrays, or cycles until an end
   *   value is returned.
   * @public
   * @param {*} end - A value that ends the iteration if returned by the
   *   iteratee.
   * @param {!(Object|function|Array|number|string)=} source - If the source is
   *   defined the iteration will also stop as follows (per source type):
   *   - object source: Ends after all properties are visited.
   *   - array source:  Ends after all indexes are visited.
   *   - number source: Ends after the count of cycles equals the source.
   *   - string source: Converted to an array source and ends after all indexes
   *     are visited. Use this list of chars for the separator (chars listed in
   *     order of rank):  ", "  ","  "|"  " "
   * @param {function(*=, (string|number)=, (!Object|function)=)} iteratee - It
   *   has the optional params - value, key/index, source. Note this method
   *   lazily clones the source based on the iteratee's [length property]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length}
   *   (i.e. if you alter the source object within the iteratee ensure to define
   *   the iteratee's third param so you can safely assume all references to the
   *   source are its original values).
   * @param {Object=} thisArg - If defined the iteratee is bound to this value.
   * @return {boolean} - This method will return true if the iteratee returns
   *   the end value or false if the iteratee does not.
   */
  function until(end, source, iteratee, thisArg) {

    if (arguments.length < 2) throw _error('No end or iteratee defined');

    if (arguments.length === 2) {
      iteratee = source;
      if ( !is.func(iteratee) ) throw _error.type('iteratee');
      return _untilEnd(end, iteratee);
    }

    if ( arguments.length === 3 && is.func(source) && is('?obj', iteratee) ) {
      thisArg = iteratee;
      iteratee = source;
      return _untilEnd(end, iteratee, thisArg);
    }

    if ( !is.func(iteratee)   ) throw _error.type('iteratee');
    if ( !is('obj=', thisArg) ) throw _error.type('thisArg');

    if ( is.num(source) ) return _untilCycle(end, source, iteratee, thisArg);

    if ( is.str(source) ) source = _splitKeys(source);

    if ( !is._obj(source) ) throw _error.type('source');

    return is._arr(source)
      ? _untilArr(end, source, iteratee, thisArg)
      : _untilObj(end, source, iteratee, thisArg);
  }

  /**
   * A shortcut for iterating over object maps until an end value is returned or
   *   all properties are visited.
   * @public
   * @param {*} end - A value that ends the iteration if returned by the
   *   iteratee.
   * @param {!(Object|function)} obj
   * @param {function(*=, string=, !(Object|function)=)} iteratee - The iteratee
   *   must be a function with the optional params - value, key, source. Note
   *   this method lazily clones the source based on the iteratee's
   *   [length property]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length}
   *   (i.e. if you alter the source object within the iteratee ensure to define
   *   the iteratee's third param so you can safely assume all references to the
   *   source are its original values).
   * @param {Object=} thisArg
   * @return {boolean} - If the iteration is terminated by the end value this
   *   method will return true. Otherwise if all the properties are visited this
   *   method will return false.
   */
  until.object = function untilObject(end, obj, iteratee, thisArg) {

    if ( !is._obj(obj)        ) throw _error.type('obj',      'object');
    if ( !is.func(iteratee)   ) throw _error.type('iteratee', 'object');
    if ( !is('obj=', thisArg) ) throw _error.type('thisArg',  'object');

    return _untilObj(end, obj, iteratee, thisArg);
  };
  // define shorthand
  until.obj = until.object;

  /**
   * A shortcut for iterating over array-like objects until an end value is
   *   returned or all indexed values are visited.
   * @public
   * @param {*} end - A value that ends the iteration if returned by the
   *   iteratee.
   * @param {!(Object|function|string)} source - If source is a string it is
   *   converted to an array. Use the following list of chars for the separator
   *   (chars listed in order of rank):  ", "  ","  "|"  " "
   * @param {function(*=, number=, !Array=)} iteratee - The iteratee must be a
   *   function with the optional params - value, index, source. Note this
   *   method lazily slices (see [vitals.copy.array]{@link https://github.com/imaginate/vitals/blob/master/src/methods/copy.js})
   *   the source based on the iteratee's [length property]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length}
   *   (i.e. if you alter the source object within the iteratee ensure to define
   *   the iteratee's third param so you can safely assume all references to the
   *   source are its original values).
   * @param {Object=} thisArg
   * @return {boolean} - If the iteration is terminated by the end value this
   *   method will return true. Otherwise if all the indexed values are visited
   *   this method will return false.
   */
  until.array = function untilArray(end, source, iteratee, thisArg) {

    if ( is.str(source) ) source = _splitKeys(source);

    if ( !is._obj(source)       ) throw _error.type('source',        'array');
    if ( !is.num(source.length) ) throw _error.type('source.length', 'array');
    if ( !is.func(iteratee)     ) throw _error.type('iteratee',      'array');
    if ( !is('obj=', thisArg)   ) throw _error.type('thisArg',       'array');

    return _untilArr(end, source, iteratee, thisArg);
  };
  // define shorthand
  until.arr = until.array;

  /**
   * A shortcut for invoking an action until an end value is returned or the
   *   number of cycles is reached.
   * @public
   * @param {*} end - A value that ends the iteration if returned by the
   *   iteratee.
   * @param {number} count - The number of cycles.
   * @param {function(number=)} action
   * @param {Object=} thisArg
   * @return {boolean} - If the iteration is terminated by the end value this
   *   method will return true. Otherwise if the number of cycles is reached
   *   this method will return false.
   */
  until.cycle = function untilCycle(end, count, action, thisArg) {

    if ( !is.num(count)       ) throw _error.type('count',   'cycle');
    if ( !is.func(action)     ) throw _error.type('action',  'cycle');
    if ( !is('obj=', thisArg) ) throw _error.type('thisArg', 'cycle');

    return _untilCycle(end, count, action, thisArg);
  };
  // define shorthand
  until.time = until.cycle;

  //////////////////////////////////////////////////////////
  // PRIVATE METHODS - MAIN
  //////////////////////////////////////////////////////////

  /**
   * @private
   * @param {*} end
   * @param {function} action
   * @param {Object=} thisArg
   * @return {boolean}
   */
  function _untilEnd(end, action, thisArg) {

    /** @type {number} */
    var i;

    action = is.undefined(thisArg) ? action : _bind(action, thisArg);
    if (action.length) {
      i = 0;
      while(action(i++) !== end) {}
    }
    else {
      while(action() !== end) {}
    }
    return true;
  }

  /**
   * @private
   * @param {*} end
   * @param {!(Object|function)} obj
   * @param {function(*, string=, !(Object|function)=)} iteratee
   * @param {Object=} thisArg
   * @return {boolean}
   */
  function _untilObj(end, obj, iteratee, thisArg) {

    /** @type {string} */
    var key;

    obj = iteratee.length > 2 ? copy(obj) : obj;
    iteratee = is.undefined(thisArg) ? iteratee : _bind(iteratee, thisArg);
    switch (iteratee.length) {
      case 0:
      for (key in obj) {
        if ( _own(obj, key) ) {
          if (iteratee() === end) return true;
        }
      }
      break;
      case 1:
      for (key in obj) {
        if ( _own(obj, key) ) {
          if (iteratee(obj[key]) === end) return true;
        }
      }
      break;
      case 2:
      for (key in obj) {
        if ( _own(obj, key) ) {
          if (iteratee(obj[key], key) === end) return true;
        }
      }
      break;
      default:
      for (key in obj) {
        if ( _own(obj, key) ) {
          if (iteratee(obj[key], key, obj) === end) return true;
        }
      }
    }
    return false;
  }

  /**
   * @private
   * @param {*} end
   * @param {!(Object|function)} obj
   * @param {function(*, number=, !Array=)} iteratee
   * @param {Object=} thisArg
   * @return {boolean}
   */
  function _untilArr(end, obj, iteratee, thisArg) {

    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    obj = iteratee.length > 2 ? copy.arr(obj) : obj;
    iteratee = is.undefined(thisArg) ? iteratee : _bind(iteratee, thisArg);
    len = obj.length;
    i = -1;
    switch (iteratee.length) {
      case 0:
      while (++i < len) {
        if (iteratee() === end) return true;
      }
      break;
      case 1:
      while (++i < len) {
        if (iteratee(obj[i]) === end) return true;
      }
      break;
      case 2:
      while (++i < len) {
        if (iteratee(obj[i], i) === end) return true;
      }
      break;
      default:
      while (++i < len) {
        if (iteratee(obj[i], i, obj) === end) return true;
      }
    }
    return false;
  }

  /**
   * @private
   * @param {*} end
   * @param {number} count
   * @param {function(number=)} action
   * @param {Object=} thisArg
   * @return {boolean}
   */
  function _untilCycle(end, count, action, thisArg) {

    /** @type {number} */
    var i;

    action = is.undefined(thisArg) ? action : _bind(action, thisArg);
    if (action.length) {
      i = 0;
      while(count--) if (action(i++) === end) return true;
    }
    else {
      while(count--) if (action() === end) return true;
    }
    return false;
  }

  //////////////////////////////////////////////////////////
  // PRIVATE METHODS - GENERAL
  //////////////////////////////////////////////////////////

  /**
   * @private
   * @param {function} func
   * @param {Object} thisArg
   * @return {function} 
   */
  function _bind(func, thisArg) {
    switch (func.length) {
      case 0:
      return function iteratee() { return func.call(thisArg); };
      case 1:
      return function iteratee(val) { return func.call(thisArg, val); };
      case 2:
      return function iteratee(val, key) { return func.call(thisArg,val,key); };
    }
    return function iteratee(val, key, obj) {
      return func.call(thisArg, val, key, obj);
    };
  }

  /**
   * @private
   * @type {!ErrorAid}
   */
  var _error = newErrorAid('until');

  //////////////////////////////////////////////////////////
  // END OF PRIVATE SCOPE FOR UNTIL
  return until;
})();


module.exports = until;
