/**
 * ---------------------------------------------------------------------------
 * VITALS.AMEND.PROPERTY.CONFIG UNIT TESTS
 * ---------------------------------------------------------------------------
 * @method vitals.amend.property.config
 * @submethod property.config
 * @super amend
 * @section strict
 * @section all
 * @build browser
 * @build node
 *
 * @see [vitals.amend](https://github.com/imaginate/vitals/wiki/vitals.amend)
 *
 * @author Adam Smith <adam@imaginate.life> (http://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life>
 */

/// #{{{ @group HELPERS
//////////////////////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @func loadHelper
/**
 * @private
 * @param {string} name
 * @return {(!Object|!Function)}
 */
var loadHelper = global.VITALS_TEST.loadHelper;
/// #}}} @func loadHelper

/// #{{{ @func assert
/**
 * @private
 * @param {boolean} result
 * @return {void}
 */
var assert = require('assert');
/// #}}} @func assert

/// #{{{ @func freeze
/**
 * @private
 * @param {(?Object|?Function)} src
 * @param {boolean=} deep = `false`
 * @return {?Object}
 */
var freeze = loadHelper('freeze-object');
/// #}}} @func freeze

/// #{{{ @func getDescriptor
/**
 * @private
 * @param {(!Object|!Function)} src
 * @param {(string|number)} key
 * @return {!Object}
 */
var getDescriptor = loadHelper('get-descriptor');
/// #}}} @func getDescriptor

/// #{{{ @func throws
/**
 * @private
 * @param {!function} action
 * @return {void}
 */
var throws = loadHelper('throws-error');
/// #}}} @func throws

/// #{{{ @const vitals
/**
 * @private
 * @const {(!Object|!Function)}
 */
var vitals = global.VITALS_TEST.VITALS;
/// #}}} @const vitals

/// #}}} @group HELPERS

/// #{{{ @group TESTS
//////////////////////////////////////////////////////////////////////////////
// TESTS
//////////////////////////////////////////////////////////////////////////////

/// #{{{ @suite amend.property.config
method('amend.property.config', 'amend.prop.config', function amendPropertyConfigTests() {

  /// #{{{ @tests A
  should('A', "update the property's descriptor", function amendPropertyConfigTestsA() {

    /// #{{{ @test A1
    test('A1', [
      '<object>',
      'a',
      '<descriptor>'
    ], function amendPropertyConfigTestA1() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {
        'a': 1,
        'b': 2,
        'c': 3
      };
      desc = freeze({
        'configurable': false
      });

      result = vitals.amend.property.config(obj, 'a', desc);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);
      assert(result.c === 3);

      desc = getDescriptor(result, 'a');

      assert(desc.enumerable === true);
      assert(desc.configurable === false);

      desc = getDescriptor(result, 'b');

      assert(desc.enumerable === true);
      assert(desc.configurable === true);

      desc = getDescriptor(result, 'c');

      assert(desc.enumerable === true);
      assert(desc.configurable === true);
    });
    /// #}}} @test A1

    /// #{{{ @test A2
    test('A2', [
      '<object>',
      'b',
      '<descriptor>'
    ], function amendPropertyConfigTestA2() {

      /** @type {!Object} */
      var result;
      /** @type {!Object} */
      var desc;
      /** @type {!Object} */
      var obj;

      obj = {
        'a': 1,
        'b': 2,
        'c': 3
      };
      desc = freeze({
        'configurable': true
      });

      result = vitals.amend.property.config(obj, 'b', desc);

      assert(result === obj);

      assert(result.a === 1);
      assert(result.b === 2);
      assert(result.c === 3);

      desc = getDescriptor(result, 'a');

      assert(desc.enumerable === true);
      assert(desc.configurable === true);

      desc = getDescriptor(result, 'b');

      assert(desc.enumerable === true);
      assert(desc.configurable === true);

      desc = getDescriptor(result, 'c');

      assert(desc.enumerable === true);
      assert(desc.configurable === true);
    });
    /// #}}} @test A2

  });
  /// #}}} @tests A

  /// #{{{ @tests B
  should('B', 'throw a vitals error', function amendPropertyConfigTestsB() {

    /// #{{{ @test B1
    test('B1', [], function amendPropertyConfigTestB1() {

      throws(function() {
        vitals.amend.property.config();
      });

    });
    /// #}}} @test B1

    /// #{{{ @test B2
    test('B2', [
      '<object>'
    ], function amendPropertyConfigTestB2() {

      throws(function() {
        vitals.amend.property.config({ 'a': 1, 'b': 2, 'c': 3 });
      });

    });
    /// #}}} @test B2

    /// #{{{ @test B3
    test('B3', [
      '<object>',
      'a'
    ], function amendPropertyConfigTestB3() {

      throws(function() {
        vitals.amend.property.config({ 'a': 1, 'b': 2, 'c': 3 }, 'a');
      });

    });
    /// #}}} @test B3

    /// #{{{ @test B4
    test('B4', [
      'fail',
      'a',
      '<descriptor>'
    ], function amendPropertyConfigTestB4() {

      throws.type(function() {
        vitals.amend.property.config('fail', 'a', {
          'configurable': false
        });
      });

    });
    /// #}}} @test B4

    /// #{{{ @test B5
    test('B5', [
      { '5': 1 },
      5,
      '<descriptor>'
    ], function amendPropertyConfigTestB5() {

      throws.type(function() {
        vitals.amend.property.config({ '5': 1 }, 5, {
          'configurable': false
        });
      });

    });
    /// #}}} @test B5

    /// #{{{ @test B6
    test('B6', [
      '<object>',
      'd',
      '<descriptor>'
    ], function amendPropertyConfigTestB6() {

      throws(function() {
        vitals.amend.property.config({ 'a': 1, 'b': 2, 'c': 3 }, 'd', {
          'configurable': false
        });
      });

    });
    /// #}}} @test B6

  });
  /// #}}} @tests B

});
/// #}}} @suite amend.property.config

/// #}}} @group TESTS

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
