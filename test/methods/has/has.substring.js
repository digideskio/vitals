/**
 * -----------------------------------------------------------------------------
 * VITALS UNIT TESTS: vitals.has.substring
 * -----------------------------------------------------------------------------
 * @section base
 * @see [vitals.has docs](https://github.com/imaginate/vitals/wiki/vitals.has)
 * @see [test api](https://github.com/imaginate/vitals/blob/master/test/setup/interface.js)
 * @see [test helpers](https://github.com/imaginate/vitals/blob/master/test/setup/helpers.js)
 *
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Annotations:
 * @see [JSDoc3](http://usejsdoc.org)
 * @see [Closure Compiler JSDoc Syntax](https://developers.google.com/closure/compiler/docs/js-for-compiler)
 */

method('has.substring', 'has.substr', function() {

  should('return true', function() {

    test('abc123', 'a', function() {
      var result = vitals.has.substr('abc123', 'a');
      assert( result === true );
    });

    test('abc123', 3, function() {
      var result = vitals.has.substr('abc123', 3);
      assert( result === true );
    });
  });

  should('return false', function() {

    test('abc123', /[a-z]/, function() {
      var result = vitals.has.substr('abc123', /[a-z]/);
      assert( result === false );
    });

    test('abc123', 'd', function() {
      var result = vitals.has.substr('abc123', 'd');
      assert( result === false );
    });

    test('abc123', 5, function() {
      var result = vitals.has.substr('abc123', 5);
      assert( result === false );
    });
  });

  should('throw an error', function() {

    test(function() {
      assert.throws(function() {
        vitals.has.substr();
      }, validTypeErr);
    });

    test('str', function() {
      assert.throws(function() {
        vitals.has.substr('str');
      }, validErr);
    });

    test({}, 'val', function() {
      assert.throws(function() {
        vitals.has.substr({}, 'val');
      }, validTypeErr);
    });
  });
});
