/**
 * -----------------------------------------------------------------------------
 * VITALS UNIT TESTS: VITALS.IS.ARGS
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

describe('vitals.is.args (section:base)', function() {
  var title;

  title = titleStr('should return true');
  describe(title, function() {

    title = callStr( (function(){ return arguments; })() );
    it(title, function() {
      var args = (function(){ return arguments; })();
      var result = vitals.is.args(args);
      assert( result === true );
    });

    title = callStr(
      (function(){ return arguments; })(),
      (function(){ return arguments; })(),
      (function(){ return arguments; })()
    );
    it(title, function() {
      var args1 = (function(){ return arguments; })();
      var args2 = (function(){ return arguments; })();
      var args3 = (function(){ return arguments; })();
      var result = vitals.is.args(args1, args2, args3);
      assert( result === true );
    });

  });

  title = titleStr('should return false');
  describe(title, function() {

    title = callStr(null);
    it(title, function() {
      var result = vitals.is.args(null);
      assert( result === false );
    });

    title = callStr(
      (function(){ return arguments; })(),
      (function(){ return arguments; })(),
      []
    );
    it(title, function() {
      var args1 = (function(){ return arguments; })();
      var args2 = (function(){ return arguments; })();
      var result = vitals.is.args(args1, args2, []);
      assert( result === false );
    });

  });

  title = titleStr('should throw an error');
  describe(title, function() {

    title = callStr();
    it(title, function() {
      assert.throws(function() {
        vitals.is.args();
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
  return testCall('is.args', arguments, 3);
}
