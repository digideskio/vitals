/**
 * -----------------------------------------------------------------------------
 * TEST - VITALS - JS METHOD - CLONE
 * -----------------------------------------------------------------------------
 * @see [vitals.clone]{@link https://github.com/imaginate/vitals/blob/master/src/js-methods/clone.js}
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

describe('clone', function() {
  var title;

  //////////////////////////////////////////////
  // CLONE TESTS

  title = callStr();
  it(title, function() {
    // insert test
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
  return testCall('clone', args, 3, true);
}

/**
 * @private
 * @param {string} subMethod
 * @param {...*} args
 * @return {string}
 */
function callStrSub(subMethod, args) {
  args = slice(arguments, 1);
  return testCall('clone.' + subMethod, args, 3, true);
}
