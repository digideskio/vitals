/** @preserve blank-line */

/**
 * -----------------------------------------------------------------------------
 * Vitals.js (v2.0.0)
 * -----------------------------------------------------------------------------
 * @file Vitals.js is a collection of cross-browser compatible JavaScript & DOM
 *   shortcut methods that make programming in JavaScript simple! You will be
 *   able to accurately type check values, deep freeze objects, create elements,
 *   and so much more with ease. With an intuitive API and clear documentation
 *   you will rejoice from the time saved and the stress lost!
 * @module Vitals
 * @version 2.0.0
 * @author Adam Smith adamsmith@algorithmiv.com
 * @copyright 2015 Adam A Smith [github.com/imaginate]{@link https://github.com/imaginate}
 * @license The Apache License [algorithmiv.com/vitals/license]{@link http://algorithmiv.com/vitals/license}
 * @see [Contributing Guide]{@link https://github.com/imaginate/vitals/blob/master/CONTRIBUTING.md}
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

/**
 * -----------------------------------------------------------------------------
 * Pre-Defined JSDoc Types
 * -----------------------------------------------------------------------------
 * @typedef {*} val
 * @typedef {Array<*>} vals
 * @typedef {Array<string>} strings
 * @typedef {Array<number>} numbers
 * @typedef {Array<Object>} objects
 * @typedef {Array<boolean>} booleans
 */

////////////////////////////////////////////////////////////////////////////////
// JS & DOM Environment Stabilizers
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * Cure.js v0.0.5 (resources/cure.min.js)
 * -----------------------------------------------------------------------------
 * @desc JavaScript & DOM Polyfills for Browser Compatibility
 * @see [algorithmiv.com/cure]{@link http://www.algorithmiv.com/cure}
 * -------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
 * JSON3 v3.3.2 (resources/cure.min.js)
 * -----------------------------------------------------------------------------
 * @desc JSON Polyfills for Browser Compatibility
 * @see [bestiejs.github.io/json3]{@link https://bestiejs.github.io/json3}
 * -------------------------------------------------------------------------- */
// insert-cure

////////////////////////////////////////////////////////////////////////////////
// Export Vitals
////////////////////////////////////////////////////////////////////////////////

;(function(/** Object */ root, /** function(Object): Object */ makeVitals) {

/* -----------------------------------------------------------------------------
 * Export Vitals (export.js)
 * -------------------------------------------------------------------------- */
// insert-export

})(this, function(/** Object */ root, undefined) {

  "use strict";

////////////////////////////////////////////////////////////////////////////////
// The Vitals Module
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * The Module's Public Variables (module-vars.js)
 * -------------------------------------------------------------------------- */
// insert-module-vars

////////////////////////////////////////////////////////////////////////////////
// The JS Shortcuts
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * The JS Feature Detection (js-methods/feature-detect.js)
 * -------------------------------------------------------------------------- */
// insert-js-feature-detect

/* -----------------------------------------------------------------------------
 * The JS Helper Methods (js-methods/helpers.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-helpers

/* -----------------------------------------------------------------------------
 * The checkType Method (js-methods/checkType.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-checkType

/* -----------------------------------------------------------------------------
 * The isValidTypeString Method (js-methods/isValidTypeString.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-isValidTypeString

/* -----------------------------------------------------------------------------
 * The checkArgs Method (js-methods/checkArgs.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-checkArgs

/* -----------------------------------------------------------------------------
 * The getTypeOf Method (js-methods/getTypeOf.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-getTypeOf

/* -----------------------------------------------------------------------------
 * The copyObj Method (js-methods/copyObj.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-copyObj

/* -----------------------------------------------------------------------------
 * The freezeObj Method (js-methods/freezeObj.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-freezeObj

/* -----------------------------------------------------------------------------
 * The hasOwnProp Method (js-methods/hasOwnProp.js)
 * -------------------------------------------------------------------------- */
// insert-js-methods-hasOwnProp

////////////////////////////////////////////////////////////////////////////////
// The DOM Shortcuts
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * The DOM Feature Detection (dom-methods/feature-detect.js)
 * -------------------------------------------------------------------------- */
// insert-dom-feature-detect

/* -----------------------------------------------------------------------------
 * The DOM Helper Methods (dom-methods/helpers.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-helpers

/* -----------------------------------------------------------------------------
 * The getElemById Method (dom-methods/getElemById.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-getElemById

/* -----------------------------------------------------------------------------
 * The getElemsByClass Method (dom-methods/getElemsByClass.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-getElemsByClass

/* -----------------------------------------------------------------------------
 * The getElemByClass Method (dom-methods/getElemByClass.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-getElemByClass

/* -----------------------------------------------------------------------------
 * The getElemsByTag Method (dom-methods/getElemsByTag.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-getElemsByTag

/* -----------------------------------------------------------------------------
 * The getElemByTag Method (dom-methods/getElemByTag.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-getElemByTag

/* -----------------------------------------------------------------------------
 * The setElemText Method (dom-methods/setElemText.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-setElemText

/* -----------------------------------------------------------------------------
 * The makeElem Method (dom-methods/makeElem.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-makeElem

/* -----------------------------------------------------------------------------
 * The addElemText Method (dom-methods/addElemText.js)
 * -------------------------------------------------------------------------- */
// insert-dom-methods-addElemText

////////////////////////////////////////////////////////////////////////////////
// The Master Methods
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * The set Method (master-methods/set.js)
 * -------------------------------------------------------------------------- */
// insert-master-method-set

/* -----------------------------------------------------------------------------
 * The reset Method (master-methods/reset.js)
 * -------------------------------------------------------------------------- */
// insert-master-method-reset

////////////////////////////////////////////////////////////////////////////////
// Vitals Module End
////////////////////////////////////////////////////////////////////////////////

  return Vitals;
});