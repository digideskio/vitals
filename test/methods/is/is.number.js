/**
 * -----------------------------------------------------------------------------
 * VITALS UNIT TESTS: VITALS.IS.NUMBER
 * -----------------------------------------------------------------------------
 * @see [vitals.is]{@link https://github.com/imaginate/vitals/wiki/vitals.is}
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

describe('vitals.is.number (section:base)', function() {
  var title;

  title = titleStr('should return true');
  describe(title, function() {

    title = callStr(5);
    it(title, function() {
      var result = vitals.is.num(5);
      assert( result === true );
    });

    title = callStr(-1, 0, 5);
    it(title, function() {
      var result = vitals.is.num(-1, 0, 5);
      assert( result === true );
    });

  });

  title = titleStr('should return false');
  describe(title, function() {

    title = callStr(NaN);
    it(title, function() {
      var result = vitals.is.num(NaN);
      assert( result === false );
    });

    title = callStr(new Number(1), 0, 5);
    it(title, function() {
      var result = vitals.is.num(new Number(1), 0, 5);
      assert( result === false );
    });

  });

  title = titleStr('should throw an error');
  describe(title, function() {

    title = callStr();
    it(title, function() {
      assert.throws(function() {
        vitals.is.num();
      });
    });

  });

});

////////////////////////////////////////////////////////////////////////////////
// PRIVATE HELPERS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 * @param {string} shouldMsg
 * @return {string}
 */
function titleStr(shouldMsg) {
  return breakStr(shouldMsg, 2);
}

/**
 * @private
 * @param {...*} args
 * @return {string}
 */
function callStr() {
  return testCall('is.num', arguments, 3);
}
