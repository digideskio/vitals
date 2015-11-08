/**
 * -----------------------------------------------------------------------------
 * TEST - VITALS - JS METHOD - AMEND
 * -----------------------------------------------------------------------------
 * @see [vitals.amend]{@link https://github.com/imaginate/vitals/blob/master/src/js-methods/amend.js}
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

describe('amend', function() {
  var title;

  //////////////////////////////////////////////
  // BASIC TESTS

  title = callStr({}, { a: 1, b: 2, c: 3 });
  it(title, function() {
    var obj;
    var result;
    obj = freeze({ a: 1, b: 2, c: 3 });
    result = vitals.amend({}, make(obj));
    each(obj, function(val, key) {
      assert(result[key] === val);
      assert(key in result);
      result[key] = ++val;
      assert(result[key] === val);
    });
  });

  title = callStr({}, [ 'a', 'b', 'c' ], 5);
  it(title, function() {
    var arr;
    var result;
    arr = freeze([ 'a', 'b', 'c' ]);
    result = vitals.amend({}, slice(arr), 5);
    each(arr, function(val) {
      assert(result[val] === 5);
      assert(val in result);
      result[val] = 6;
      assert(result[val] === 6);
    });
  });

  title = callStr({}, 'a,b,c', 5);
  it(title, function() {
    var result;
    result = vitals.amend({}, 'a,b,c', 5);
    each([ 'a','b','c' ], function(val) {
      assert(result[val] === 5);
      assert(val in result);
      result[val] = 6;
      assert(result[val] === 6);
    });
  });

  title = callStr({}, {
    a: { value: 1, enumerable: false },
    b: { value: 2, enumerable: false }
  });
  it(title, function() {
    var result;
    result = vitals.amend({}, {
      a: { value: 1, enumerable: false },
      b: { value: 2, enumerable: false }
    });
    each({ a: 1, b: 2 }, function(val, key) {
      assert(result[key] === val);
      assert( !(key in result) );
      result[key] = ++val;
      assert(result[key] === val);
    });
  });

  //////////////////////////////////////////////
  // DEFAULT DESCRIPTOR TESTS

  title = callStr({}, { a: 1, b: 2, c: 3 }, { enumerable: false });
  it(title, function() {
    var obj;
    var result;
    obj = freeze({ a: 1, b: 2, c: 3 });
    result = vitals.amend({}, make(obj), { enumerable: false });
    each(obj, function(val, key) {
      assert(result[key] === val);
      assert( !(key in result) );
      result[key] = ++val;
      assert(result[key] === val);
    });
  });

  title = callStr({}, [ 'a', 'b', 'c' ], 5, { enumerable: false });
  it(title, function() {
    var arr;
    var result;
    arr = freeze([ 'a', 'b', 'c' ]);
    result = vitals.amend({}, slice(arr), 5, { enumerable: false });
    each(arr, function(val) {
      assert(result[val] === 5);
      assert( !(val in result) );
      result[val] = 6;
      assert(result[val] === 6);
    });
  });

  title = callStr({}, 'a,b,c', 5, { enumerable: false });
  it(title, function() {
    var result;
    result = vitals.amend({}, 'a,b,c', 5, { enumerable: false });
    each([ 'a','b','c' ], function(val) {
      assert(result[val] === 5);
      assert( !(val in result) );
      result[val] = 6;
      assert(result[val] === 6);
    });
  });

  title = callStr({}, {
    a: { value: 1, enumerable: true },
    b: 2
  }, { enumerable: false });
  it(title, function() {
    var result;
    result = vitals.amend({}, {
      a: { value: 1, enumerable: true },
      b: 2
    }, { enumerable: false });
    each({ a: 1, b: 2 }, function(val, key) {
      assert(result[key] === val);
      if (key === 'a') assert(key in result);
      if (key === 'b') assert( !(key in result) );
      result[key] = ++val;
      assert(result[key] === val);
    });
  });

  //////////////////////////////////////////////
  // STATIC TYPE TESTS

  title = callStr({}, { a: 1, b: 2, c: 3 }, 'number');
  it(title, function() {
    var obj;
    var result;
    obj = freeze({ a: 1, b: 2, c: 3 });
    result = vitals.amend({}, make(obj), 'number');
    each(obj, function(val, key) {
      assert(result[key] === val);
      assert(key in result);
      result[key] = ++val;
      assert(result[key] === val);
      result[key] = 'string';
      assert(result[key] === val);
    });
  });

  title = callStr({}, [ 'a', 'b', 'c' ], 5, 'number');
  it(title, function() {
    var arr;
    var result;
    arr = freeze([ 'a', 'b', 'c' ]);
    result = vitals.amend({}, slice(arr), 5, 'number');
    each(arr, function(val) {
      assert(result[val] === 5);
      assert(val in result);
      result[val] = 6;
      assert(result[val] === 6);
      result[val] = 'string';
      assert(result[val] === 6);
    });
  });

  title = callStr({}, 'a,b,c', 5, 'number');
  it(title, function() {
    var result;
    result = vitals.amend({}, 'a,b,c', 5, 'number');
    each([ 'a','b','c' ], function(val) {
      assert(result[val] === 5);
      assert(val in result);
      result[val] = 6;
      assert(result[val] === 6);
      result[val] = 'string';
      assert(result[val] === 6);
    });
  });

  title = callStr({}, {
    a: { value: 1, enumerable: false },
    b: { value: 2, enumerable: false }
  }, 'number');
  it(title, function() {
    var result;
    result = vitals.amend({}, {
      a: { value: 1, enumerable: false },
      b: { value: 2, enumerable: false }
    }, 'number');
    each({ a: 1, b: 2 }, function(val, key) {
      assert(result[key] === val);
      assert( !(key in result) );
      result[key] = ++val;
      assert(result[key] === val);
      result[key] = 'string';
      assert(result[key] === val);
    });
  });

  title = callStr({}, {
    a: { value: 1, enumerable: true },
    b: { value: 2 }
  }, { enumerable: false }, 'number');
  it(title, function() {
    var result;
    result = vitals.amend({}, {
      a: { value: 1, enumerable: true },
      b: { value: 2 }
    }, { enumerable: false }, 'number');
    each({ a: 1, b: 2 }, function(val, key) {
      assert(result[key] === val);
      if (key === 'a') assert(key in result);
      if (key === 'b') assert( !(key in result) );
      result[key] = ++val;
      assert(result[key] === val);
      result[key] = 'string';
      assert(result[key] === val);
    });
  });

  //////////////////////////////////////////////
  // SETTER TESTS

  title = callStr({}, { a: 1, b: 2, c: 3 }, getSetter());
  it(title, function() {
    var obj;
    var result;
    obj = freeze({ a: 1, b: 2, c: 3 });
    result = vitals.amend({}, make(obj), getSetter());
    each(obj, function(val, key) {
      assert(result[key] === ++val);
      assert(key in result);
      result[key] = 1;
      assert(result[key] === ++val);
    });
  });

  title = callStr({}, [ 'a', 'b', 'c' ], 5, getSetter());
  it(title, function() {
    var arr;
    var result;
    arr = freeze([ 'a', 'b', 'c' ]);
    result = vitals.amend({}, slice(arr), 5, getSetter());
    each(arr, function(val) {
      assert(result[val] === 6);
      assert(val in result);
      result[val] = 1;
      assert(result[val] === 7);
    });
  });

  title = callStr({}, 'a,b,c', 5, getSetter());
  it(title, function() {
    var result;
    result = vitals.amend({}, 'a,b,c', 5, getSetter());
    each([ 'a','b','c' ], function(val) {
      assert(result[val] === 6);
      assert(val in result);
      result[val] = 1;
      assert(result[val] === 7);
    });
  });

  title = callStr({}, {
    a: { value: 1, enumerable: false },
    b: { value: 2, enumerable: false }
  }, getSetter());
  it(title, function() {
    var result;
    result = vitals.amend({}, {
      a: { value: 1, enumerable: false },
      b: { value: 2, enumerable: false }
    }, getSetter());
    each({ a: 1, b: 2 }, function(val, key) {
      assert(result[key] === ++val);
      assert( !(key in result) );
      result[key] = 1;
      assert(result[key] === ++val);
    });
  });

  title = callStr({}, {
    a: { value: 1, enumerable: true },
    b: { value: 2, enumerable: false }
  }, { enumerable: false }, getSetter());
  it(title, function() {
    var result;
    result = vitals.amend({}, {
      a: { value: 1, enumerable: true },
      b: { value: 2, enumerable: false }
    }, { enumerable: false }, getSetter());
    each({ a: 1, b: 2 }, function(val, key) {
      assert(result[key] === ++val);
      if (key === 'a') assert(key in result);
      if (key === 'b') assert( !(key in result) );
      result[key] = 1;
      assert(result[key] === ++val);
    });
  });

  title = callStr({}, {
    a: { value: 1, enumerable: true },
    b: { value: 2, enumerable: false }
  }, { enumerable: false }, 'number', getSetter());
  it(title, function() {
    var result;
    result = vitals.amend({}, {
      a: { value: 1, enumerable: true },
      b: { value: 2, enumerable: false }
    }, { enumerable: false }, 'number', getSetter());
    each({ a: 1, b: 2 }, function(val, key) {
      assert(result[key] === ++val);
      if (key === 'a') assert(key in result);
      if (key === 'b') assert( !(key in result) );
      result[key] = 1;
      assert(result[key] === ++val);
      result[key] = 'string';
      assert(result[key] === val);
    });
  });

});

////////////////////////////////////////////////////////////////////////////////
// PRIVATE HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @param {...*} args
 * @return {string}
 */
function callStr(args) {
  args = slice(arguments);
  return testCall('amend', args);
}

/**
 * Creates a new object with the properties of the given object.
 * @param {!Object} obj
 * @return {!Object}
 */
function make(obj) {

  /** @type {!Object} */
  var newObj;
  /** @type {string} */
  var key;

  newObj = {};
  for (key in obj) {
    if ( has(obj, key) ) newObj[key] = obj[key];
  }
  return newObj;
}

/**
 * @private
 * @return {function}
 */
function getSetter() {
  return function setter(newVal, oldVal) {
    oldVal = oldVal || 1;
    return newVal + oldVal;
  };
}
