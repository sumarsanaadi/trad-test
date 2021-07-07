/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__.default)()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/arrayslicer/lib/compare/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/arrayslicer/lib/compare/index.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * Utility compare functions
 */

module.exports = {

    /**
     * Compare two numbers.
     *
     * @param {Number} a
     * @param {Number} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    numcmp: function (a, b) {
        return a - b;
    },

    /**
     * Compare two strings.
     *
     * @param {Number|String} a
     * @param {Number|String} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    strcmp: function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

};


/***/ }),

/***/ "./node_modules/arrayslicer/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/arrayslicer/lib/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Indexed Array Binary Search module
 */

/**
 * Dependencies
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/arrayslicer/lib/util.js"),
    cmp = __webpack_require__(/*! ./compare */ "./node_modules/arrayslicer/lib/compare/index.js"),
    bin = __webpack_require__(/*! ./search/binary */ "./node_modules/arrayslicer/lib/search/binary.js");

/**
 * Module interface definition
 */
module.exports = IndexedArray;

/**
 * Indexed Array constructor
 *
 * It loads the array data, defines the index field and the comparison function
 * to be used.
 *
 * @param {Array} data is an array of objects
 * @param {String} index is the object's property used to search the array
 */
function IndexedArray(data, index) {

    // is data sortable array or array-like object?
    if (!util.isSortableArrayLike(data))
        throw new Error("Invalid data");

    // is index a valid property?
    if (!index || data.length > 0 && !(index in data[0]))
        throw new Error("Invalid index");

    // data array
    this.data = data;

    // name of the index property
    this.index = index;

    // set index boundary values
    this.setBoundaries();

    // default comparison function
    this.compare = typeof this.minv === "number" ? cmp.numcmp : cmp.strcmp;

    // default search function
    this.search = bin.search;

    // cache of index values to array positions
    // each value stores an object as { found: true|false, index: array-index }
    this.valpos = {};

    // cursor and adjacent positions
    this.cursor = null;
    this.nextlow = null;
    this.nexthigh = null;
}

/**
 * Set the comparison function
 *
 * @param {Function} fn to compare index values that returnes 1, 0, -1
 */
IndexedArray.prototype.setCompare = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.compare = fn;
    return this;
};

/**
 * Set the search function
 *
 * @param {Function} fn to search index values in the array of objects
 */
IndexedArray.prototype.setSearch = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.search = fn;
    return this;
};

/**
 * Sort the data array by its index property
 */
IndexedArray.prototype.sort = function () {
    var self = this,
        index = this.index;

    // sort the array
    this.data.sort(function (a, b) {
        return self.compare(a[index], b[index]);
    });

    // recalculate boundary values
    this.setBoundaries();

    return this;
};

/**
 * Inspect and set the boundaries of the internal data array
 */
IndexedArray.prototype.setBoundaries = function () {
    var data = this.data,
        index = this.index;

    this.minv = data.length && data[0][index];
    this.maxv = data.length && data[data.length - 1][index];

    return this;
};

/**
 * Get the position of the object corresponding to the given index
 *
 * @param {Number|String} index is the id of the requested object
 * @returns {Number} the position of the object in the array
 */
IndexedArray.prototype.fetch = function (value) {
    // check data has objects
    if (this.data.length === 0) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = null;
        return this;
    }

    // check the request is within range
    if (this.compare(value, this.minv) === -1) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = 0;
        return this;
    }
    if (this.compare(value, this.maxv) === 1) {
        this.cursor = null;
        this.nextlow = this.data.length - 1;
        this.nexthigh = null;
        return this;
    }

    var valpos = this.valpos,
        pos = valpos[value];

    // if the request is memorized, just give it back
    if (pos) {
        if (pos.found) {
            this.cursor = pos.index;
            this.nextlow = null;
            this.nexthigh = null;
        } else {
            this.cursor = null;
            this.nextlow = pos.prev;
            this.nexthigh = pos.next;
        }
        return this;
    }

    // if not, do the search
    var result = this.search.call(this, value);
    this.cursor = result.index;
    this.nextlow = result.prev;
    this.nexthigh = result.next;
    return this;
};

/**
 * Get the object corresponding to the given index
 *
 * When no value is given, the function will default to the last fetched item.
 *
 * @param {Number|String} [optional] index is the id of the requested object
 * @returns {Object} the found object or null
 */
IndexedArray.prototype.get = function (value) {
    if (value)
        this.fetch(value);

    var pos = this.cursor;
    return pos !== null ? this.data[pos] : null;
};

/**
 * Get an slice of the data array
 *
 * Boundaries have to be in order.
 *
 * @param {Number|String} begin index is the id of the requested object
 * @param {Number|String} end index is the id of the requested object
 * @returns {Object} the slice of data array or []
 */
IndexedArray.prototype.getRange = function (begin, end) {
    // check if boundaries are in order
    if (this.compare(begin, end) === 1) {
        return [];
    }

    // fetch start and default to the next index above
    this.fetch(begin);
    var start = this.cursor || this.nexthigh;

    // fetch finish and default to the next index below
    this.fetch(end);
    var finish = this.cursor || this.nextlow;

    // if any boundary is not set, return no range
    if (start === null || finish === null) {
        return [];
    }

    // return range
    return this.data.slice(start, finish + 1);
};


/***/ }),

/***/ "./node_modules/arrayslicer/lib/search/binary.js":
/*!*******************************************************!*\
  !*** ./node_modules/arrayslicer/lib/search/binary.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * Binary search implementation
 */

/**
 * Main search recursive function
 */
function loop(data, min, max, index, valpos) {

    // set current position as the middle point between min and max
    var curr = (max + min) >>> 1;

    // compare current index value with the one we are looking for
    var diff = this.compare(data[curr][this.index], index);

    // found?
    if (!diff) {
        return valpos[index] = {
            "found": true,
            "index": curr,
            "prev": null,
            "next": null
        };
    }

    // no more positions available?
    if (min >= max) {
        return valpos[index] = {
            "found": false,
            "index": null,
            "prev": (diff < 0) ? max : max - 1,
            "next": (diff < 0) ? max + 1 : max
        };
    }

    // continue looking for index in one of the remaining array halves
    // current position can be skept as index is not there...
    if (diff > 0)
        return loop.call(this, data, min, curr - 1, index, valpos);
    else
        return loop.call(this, data, curr + 1, max, index, valpos);
}

/**
 * Search bootstrap
 * The function has to be executed in the context of the IndexedArray object
 */
function search(index) {
    var data = this.data;
    return loop.call(this, data, 0, data.length - 1, index, this.valpos);
}

/**
 * Export search function
 */
module.exports.search = search;


/***/ }),

/***/ "./node_modules/arrayslicer/lib/util.js":
/*!**********************************************!*\
  !*** ./node_modules/arrayslicer/lib/util.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Utils module
 */

/**
 * Check if an object is an array-like object
 *
 * @credit Javascript: The Definitive Guide, O'Reilly, 2011
 */
function isArrayLike(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        isFinite(o.length) &&                // o.length is a finite number
        o.length >= 0 &&                     // o.length is non-negative
        o.length === Math.floor(o.length) && // o.length is an integer
        o.length < 4294967296)               // o.length < 2^32
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for the existence of the sort function in the object
 */
function isSortable(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        typeof o.sort === "function")        // o.sort is a function
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for sortable-array-like objects
 */
module.exports.isSortableArrayLike = function (o) {
    return isArrayLike(o) && isSortable(o);
};


/***/ }),

/***/ "./src/helpers/dataset.js":
/*!********************************!*\
  !*** ./src/helpers/dataset.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dataset),
/* harmony export */   "DatasetWW": () => (/* binding */ DatasetWW)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _script_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script_utils.js */ "./src/helpers/script_utils.js");





function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


// Dataset proxy between vuejs & WebWorker


var Dataset = /*#__PURE__*/function () {
  function Dataset(dc, desc) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Dataset);

    // TODO: dataset url arrow fn tells WW
    // to load the ds directly from web
    this.type = desc.type;
    this.id = desc.id;
    this.dc = dc; // Send the data to WW

    if (desc.data) {
      this.dc.ww.just('upload-data', (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, this.id, desc)); // Remove the data from the descriptor

      delete desc.data;
    }

    var proto = Object.getPrototypeOf(this);
    Object.setPrototypeOf(desc, proto);
    Object.defineProperty(desc, 'dc', {
      get: function get() {
        return dc;
      }
    });
  } // Watch for the changes of descriptors


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Dataset, [{
    key: "set",
    value: // Set data (overwrite the whole dataset)
    function set(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'set',
        data: data,
        exec: exec
      });
    } // Update with new data (array of data points)

  }, {
    key: "update",
    value: function update(arr) {
      this.dc.ww.just('update-data', (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, this.id, arr));
    } // Send WW a chunk to merge. The merge algo
    // here is simpler than in DC. It just adds
    // data at the beginning or/and the end of ds

  }, {
    key: "merge",
    value: function merge(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'mrg',
        data: data,
        exec: exec
      });
    } // Remove the ds from WW

  }, {
    key: "remove",
    value: function remove(exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.del("datasets.".concat(this.id));
      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'del',
        exec: exec
      });
      delete this.dc.dss[this.id];
    } // Fetch data from WW

  }, {
    key: "data",
    value: function () {
      var _data = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var ds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.dc.ww.exec('get-dataset', this.id);

              case 2:
                ds = _context.sent;

                if (ds) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                return _context.abrupt("return", ds.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function data() {
        return _data.apply(this, arguments);
      }

      return data;
    }()
  }], [{
    key: "watcher",
    value: function watcher(n, p) {
      var nids = n.map(function (x) {
        return x.id;
      });
      var pids = p.map(function (x) {
        return x.id;
      });

      var _iterator = _createForOfIteratorHelper(nids),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;

          if (!pids.includes(id)) {
            var ds = n.filter(function (x) {
              return x.id === id;
            })[0];
            this.dss[id] = new Dataset(this, ds);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(pids),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;

          if (!nids.includes(id) && this.dss[id]) {
            this.dss[id].remove();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // Make an object for data transfer

  }, {
    key: "make_tx",
    value: function make_tx(dc, types) {
      var main = dc.data.chart.data;
      var base = {};

      if (types.find(function (x) {
        return x.type === 'OHLCV';
      })) {
        base = {
          ohlcv: main
        };
      } // TODO: add more sophisticated search
      // (using 'script.datasets' paramerter)

      /*for (var req of types) {
          let ds = Object.values(dc.dss || {})
              .find(x => x.type === req.type)
          if (ds && ds.data) {
              base[ds.id] = {
                  id: ds.id,
                  type: ds.type,
                  data: ds.data
              }
          }
      }*/
      // TODO: Data request callback ?


      return base;
    }
  }]);

  return Dataset;
}(); // Dataset reciever (created on WW)



var DatasetWW = /*#__PURE__*/function () {
  function DatasetWW(id, data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, DatasetWW);

    this.last_upd = (0,_script_utils_js__WEBPACK_IMPORTED_MODULE_5__.now)();
    this.id = id;

    if (Array.isArray(data)) {
      // Regular array
      this.data = data;
      if (id === 'ohlcv') this.type = 'OHLCV';
    } else {
      // Dataset descriptor
      this.data = data.data;
      this.type = data.type;
    }
  } // Update from 'update-data' event
  // TODO: ds size limit (in MB / data points)


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(DatasetWW, [{
    key: "merge",
    value: function merge(data) {
      var len = this.data.length;

      if (!len) {
        this.data = data;
        return;
      }

      var t0 = this.data[0][0];
      var tN = this.data[len - 1][0];
      var l = data.filter(function (x) {
        return x[0] < t0;
      });
      var r = data.filter(function (x) {
        return x[0] > tN;
      });
      this.data = l.concat(this.data, r);
    } // On dataset operation

  }, {
    key: "op",
    value: function op(se, _op) {
      this.last_upd = (0,_script_utils_js__WEBPACK_IMPORTED_MODULE_5__.now)();

      switch (_op.type) {
        case 'set':
          this.data = _op.data;
          se.recalc_size();
          break;

        case 'del':
          delete se.data[this.id];
          se.recalc_size();
          break;

        case 'mrg':
          this.merge(_op.data);
          se.recalc_size();
          break;
      }
    }
  }], [{
    key: "update_all",
    value: function update_all(se, data) {
      for (var k in data) {
        if (k === 'ohlcv') continue;
        var id = k.split('.')[1] || k;
        if (!se.data[id]) continue;
        var arr = se.data[id].data;
        var iN = arr.length - 1;
        var last = arr[iN];

        var _iterator3 = _createForOfIteratorHelper(data[k]),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var dp = _step3.value;

            if (!last || dp[0] > last[0]) {
              arr.push(dp);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        se.data[id].last_upd = (0,_script_utils_js__WEBPACK_IMPORTED_MODULE_5__.now)();
      }
    }
  }]);

  return DatasetWW;
}();

/***/ }),

/***/ "./src/helpers/sampler.js":
/*!********************************!*\
  !*** ./src/helpers/sampler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script_engine.js */ "./src/helpers/script_engine.js");
// Resamples candles

var DEF_LIMIT = 5; // default buff length

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(T, auto) {
  if (auto === void 0) {
    auto = false;
  }

  // Define a TS type (part of the candle)
  var Ti = ['high', 'low', 'close', 'vol'].indexOf(T);
  return function (x, t) {
    var tf = this.__tf__;
    var id = this.__id__;
    t = t || _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.t;
    var val = auto ? _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default[T][0] : x; // TODO: closing at a specific time
    // (timezone, end of the month...)

    if (!this.__t0__ || t >= this.__t0__ + tf) {
      this.unshift(Ti !== 3 ? val : 0);
      this.__t0__ = t - t % tf; // TODO: new candle signal
    } // Update prices


    switch (Ti) {
      case 0:
        if (val > this[0]) this[0] = val;
        break;

      case 1:
        if (val < this[0]) this[0] = val;
        break;

      case 2:
        this[0] = val;
        break;

      case 3:
        this[0] += val;
    } // Limit size of vector


    this.length = this.__len__ || DEF_LIMIT;
  };
}

/***/ }),

/***/ "./src/helpers/script_engine.js":
/*!**************************************!*\
  !*** ./src/helpers/script_engine.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _script_env_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./script_env.js */ "./src/helpers/script_env.js");
/* harmony import */ var _stuff_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stuff/utils.js */ "./src/stuff/utils.js");
/* harmony import */ var _script_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./script_utils.js */ "./src/helpers/script_utils.js");
/* harmony import */ var _symstd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symstd.js */ "./src/helpers/symstd.js");
/* harmony import */ var _script_ts_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./script_ts.js */ "./src/helpers/script_ts.js");






function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


// Script engine, Fuck yeah





var DEF_LIMIT = 5; // default buff length

var WAIT_EXEC = 10; // merge script execs, ms

var ScriptEngine = /*#__PURE__*/function () {
  function ScriptEngine() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, ScriptEngine);

    this.map = {};
    this.data = {};
    this.exec_id = null;
    this.queue = []; // Script exec queue

    this.delta_queue = []; // Settings queue

    this.update_queue = []; // Live update queue

    this.sett = {};
    this.state = {};
    this.mods = {}; // Modules (extensions)

    this.std_plus = {}; // Functions to inject

    this.tf = undefined; // Main chart TF
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(ScriptEngine, [{
    key: "exec_all",
    value: function exec_all() {
      var _this = this;

      clearTimeout(this.exec_id); // Wait for the data

      if (!this.data.ohlcv) return; // Execute queue after all scripts & data are loaded

      this.exec_id = setTimeout( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.init_state(Object.keys(_this.map))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _this.re_init_map();

                while (_this.queue.length) {
                  _this.exec(_this.queue.shift());
                }

                if (!Object.keys(_this.map).length) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return _this.run();

              case 7:
                _this.drain_queues();

              case 8:
                _this.send_state();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), WAIT_EXEC);
    } // Exec selected

  }, {
    key: "exec_sel",
    value: function () {
      var _exec_sel = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(delta) {
        var _this2 = this;

        var sel, id, props, k;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.data.ohlcv) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                sel = Object.keys(delta).filter(function (x) {
                  return x in _this2.map;
                });

                if (this.init_state(sel)) {
                  _context2.next = 6;
                  break;
                }

                this.delta_queue.push(delta);
                return _context2.abrupt("return");

              case 6:
                _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().keys(delta);

              case 7:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 16;
                  break;
                }

                id = _context2.t1.value;

                if (this.map[id]) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("continue", 7);

              case 11:
                props = this.map[id].src.props || {};

                for (k in props) {
                  if (k in delta[id]) {
                    props[k].val = delta[id][k];
                  }
                }

                this.exec(this.map[id]);
                _context2.next = 7;
                break;

              case 16:
                _context2.next = 18;
                return this.run(sel);

              case 18:
                this.drain_queues();
                this.send_state();

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function exec_sel(_x) {
        return _exec_sel.apply(this, arguments);
      }

      return exec_sel;
    }() // Exec script (create a new ScriptEnv, add to the map)

  }, {
    key: "exec",
    value: function exec(s) {
      var _this3 = this;

      if (!s.src.conf) s.src.conf = {};

      if (s.src.init) {
        s.src.init_src = _script_utils_js__WEBPACK_IMPORTED_MODULE_8__.get_raw_src(s.src.init);
      }

      if (s.src.update) {
        s.src.upd_src = _script_utils_js__WEBPACK_IMPORTED_MODULE_8__.get_raw_src(s.src.update);
      }

      if (s.src.post) {
        s.src.post_src = _script_utils_js__WEBPACK_IMPORTED_MODULE_8__.get_raw_src(s.src.post);
      } // Parse non-default symbols


      _symstd_js__WEBPACK_IMPORTED_MODULE_9__.default.parse(s);

      for (var id in this.mods) {
        if (this.mods[id].pre_env) {
          this.mods[id].pre_env(s.uuid, s);
        }
      }

      s.env = new _script_env_js__WEBPACK_IMPORTED_MODULE_6__.default(s, Object.assign(this.shared, {
        open: this.open,
        high: this.high,
        low: this.low,
        close: this.close,
        vol: this.vol,
        dss: this.data,
        t: function t() {
          return _this3.t;
        },
        iter: function iter() {
          return _this3.iter;
        },
        tf: this.tf,
        range: this.range,
        onclose: true
      }, this.tss));
      this.map[s.uuid] = s;

      for (var id in this.mods) {
        if (this.mods[id].new_env) {
          this.mods[id].new_env(s.uuid, s);
        }
      } // Build te box after mod's interfaces injected


      s.env.build();
    } // Live update

  }, {
    key: "update",
    value: function update(candles) {
      var _this4 = this;

      if (!this.data.ohlcv || !this.data.ohlcv.data.length) {
        return;
      }

      if (this.running) {
        this.update_queue.push(candles);
        return;
      }

      var mfs1 = this.make_mods_hooks('pre_step');
      var mfs2 = this.make_mods_hooks('post_step');

      var step = function step(sel, unshift) {
        for (var m = 0; m < mfs1.length; m++) {
          mfs1[m](sel); // pre_step
        }

        var _iterator = _createForOfIteratorHelper(sel),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;

            _this4.map[id].env.step(unshift);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        for (var m = 0; m < mfs2.length; m++) {
          mfs2[m](sel); // post_step
        }
      };

      try {
        var ohlcv = this.data.ohlcv.data;
        var i = ohlcv.length - 1;
        var last = ohlcv[i];
        var sel = Object.keys(this.map);
        var unshift = false;
        this.shared.event = 'update';

        var _iterator2 = _createForOfIteratorHelper(candles),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var candle = _step2.value;

            if (candle[0] > last[0]) {
              this.shared.onclose = true;
              step(sel, false); // On candle close

              ohlcv.push(candle);
              unshift = true;
              i++;
            } else if (candle[0] < last[0]) {
              continue;
            } else {
              ohlcv[i] = candle;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.iter = i;
        this.t = ohlcv[i][0];
        this.step(ohlcv[i], unshift);
        this.shared.onclose = false;
        step(sel, unshift);
        this.limit();
        this.send_update();
        this.send_state();
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "init_state",
    value: function init_state(sel) {
      var task = sel.join(','); // Stop previous run only if the task is the same

      if (this.running) {
        this._restart = task === this.task;
        return false;
      } // Inverted arrays


      this.open = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_10__.default)('open', []);
      this.high = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_10__.default)('high', []);
      this.low = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_10__.default)('low', []);
      this.close = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_10__.default)('close', []);
      this.vol = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_10__.default)('vol', []); // Shared TSs & user vars

      this.tss = {};
      this.std_plus = {};
      this.shared = {}; // Engine state

      this.iter = 0;
      this.t = 0;
      this.skip = false; // skip the step

      this.running = true;
      this.task = task;
      return true;
    } // Inject/override functions in the std lib object

  }, {
    key: "std_inject",
    value: function std_inject(std) {
      var proto = Object.getPrototypeOf(std);
      Object.assign(proto, this.std_plus);
      return std;
    }
  }, {
    key: "send_state",
    value: function send_state() {
      this.send('engine-state', {
        scripts: Object.keys(this.map).length,
        last_perf: this.perf,
        iter: this.iter,
        last_t: this.t,
        data_size: this.data_size,
        running: false
      });
    }
  }, {
    key: "send_update",
    value: function send_update() {
      this.send('overlay-update', this.format_update());
    }
  }, {
    key: "re_init_map",
    value: function re_init_map() {
      for (var id in this.map) {
        this.exec(this.map[id]);
      }
    }
  }, {
    key: "run",
    value: function () {
      var _run = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3(sel) {
        var t1, mfs1, mfs2, _iterator3, _step3, id, ohlcv, start, i, m, _iterator4, _step4, _iterator5, _step5;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.send('engine-state', {
                  running: true
                });
                t1 = _stuff_utils_js__WEBPACK_IMPORTED_MODULE_7__.default.now();
                sel = sel || Object.keys(this.map);
                this.pre_run_mods(sel);
                mfs1 = this.make_mods_hooks('pre_step');
                mfs2 = this.make_mods_hooks('post_step');
                _context3.prev = 6;
                _iterator3 = _createForOfIteratorHelper(sel);

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    id = _step3.value;
                    this.map[id].env.init();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                ohlcv = this.data.ohlcv.data;
                start = this.start(ohlcv);
                this.shared.event = 'step';
                i = start;

              case 13:
                if (!(i < ohlcv.length)) {
                  _context3.next = 32;
                  break;
                }

                if (!(i % 5000 === 0)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 17;
                return _stuff_utils_js__WEBPACK_IMPORTED_MODULE_7__.default.pause(0);

              case 17:
                if (!this.restarted()) {
                  _context3.next = 19;
                  break;
                }

                return _context3.abrupt("return");

              case 19:
                this.iter = i - start;
                this.t = ohlcv[i][0];
                this.step(ohlcv[i]);
                this.shared.onclose = i !== ohlcv.length - 1; // SLOW DOWN TEST:
                //for (var k = 1; k < 1000000; k++) {}

                for (m = 0; m < mfs1.length; m++) {
                  mfs1[m](sel); // pre_step
                }

                _iterator4 = _createForOfIteratorHelper(sel);

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    id = _step4.value;
                    this.map[id].env.step();
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                for (m = 0; m < mfs2.length; m++) {
                  mfs2[m](sel); // post_step
                }

                if (this.custom_main) this.make_ohlcv();
                this.limit();

              case 29:
                i++;
                _context3.next = 13;
                break;

              case 32:
                _iterator5 = _createForOfIteratorHelper(sel);

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    id = _step5.value;
                    this.map[id].env.output.post();
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                _context3.next = 39;
                break;

              case 36:
                _context3.prev = 36;
                _context3.t0 = _context3["catch"](6);
                console.log(_context3.t0);

              case 39:
                this.post_run_mods(sel);
                this.perf = _stuff_utils_js__WEBPACK_IMPORTED_MODULE_7__.default.now() - t1;
                this.running = false;
                this.send('overlay-data', this.format_map(sel));

              case 43:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 36]]);
      }));

      function run(_x2) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "step",
    value: function step(data, unshift) {
      if (unshift === void 0) {
        unshift = true;
      }

      if (unshift) {
        this.open.unshift(data[1]);
        this.high.unshift(data[2]);
        this.low.unshift(data[3]);
        this.close.unshift(data[4]);
        this.vol.unshift(data[5]);

        for (var id in this.tss) {
          if (this.tss[id].__tf__) this.tss[id].__fn__();else this.tss[id].unshift(this.tss[id].__fn__());
        }
      } else {
        this.open[0] = data[1];
        this.high[0] = data[2];
        this.low[0] = data[3];
        this.close[0] = data[4];
        this.vol[0] = data[5];

        for (var id in this.tss) {
          if (this.tss[id].__tf__) this.tss[id].__fn__();else this.tss[id][0] = this.tss[id].__fn__();
        }
      }
    }
  }, {
    key: "limit",
    value: function limit() {
      this.open.length = this.open.__len__ || DEF_LIMIT;
      this.high.length = this.high.__len__ || DEF_LIMIT;
      this.low.length = this.low.__len__ || DEF_LIMIT;
      this.close.length = this.close.__len__ || DEF_LIMIT;
      this.vol.length = this.vol.__len__ || DEF_LIMIT;
    }
  }, {
    key: "start",
    value: function start(ohlcv) {
      var depth = this.sett.script_depth;
      return depth ? Math.max(ohlcv.length - depth, 0) : 0;
    }
  }, {
    key: "drain_queues",
    value: function drain_queues() {
      // Check if there are any new scripts (recieved during
      // the current run)
      if (this.queue.length) {
        this.exec_all();
      } // Check if there are any new settings deltas (...)
      else if (this.delta_queue.length) {
          this.exec_sel(this.delta_queue.pop());
          this.delta_queue = [];
        } else {
          while (this.update_queue.length) {
            var c = this.update_queue.shift();
            this.update(c);
          }
        }
    }
  }, {
    key: "format_map",
    value: function format_map(sel, range, output) {
      sel = sel || Object.keys(this.map);
      var res = [];

      var _iterator6 = _createForOfIteratorHelper(sel),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var id = _step6.value;
          var x = this.map[id];

          var f = function f(x) {
            return x;
          };

          if ((x.output === false || x.output === 'none') && !output) {
            res.push({
              id: id,
              data: null
            });
            continue;
          }

          if (x.output === 'range' || range) {
            var _ref2 = range || this.range,
                _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, 2),
                t1 = _ref3[0],
                t2 = _ref3[1];

            f = function f(x) {
              return x.filter(function (y) {
                return y[0] >= t1 && y[0] <= t2;
              });
            };
          }

          res.push({
            id: id,
            data: f(x.env.data),
            new_ovs: {
              onchart: _script_utils_js__WEBPACK_IMPORTED_MODULE_8__.ovf(x.env.onchart, f),
              offchart: _script_utils_js__WEBPACK_IMPORTED_MODULE_8__.ovf(x.env.offchart, f)
            }
          });
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      if (this.custom_main) {
        res.push({
          id: 'chart',
          data: this.data.ohlcv.data
        });
      }

      return res;
    }
  }, {
    key: "format_update",
    value: function format_update() {
      var res = [];

      for (var id in this.map) {
        var x = this.map[id];

        if (x.output === false) {
          res.push({
            id: id,
            data: null
          });
          continue;
        }

        res.push({
          id: id,
          data: x.env.data[x.env.data.length - 1]
        });

        for (var _i = 0, _arr = ['onchart', 'offchart']; _i < _arr.length; _i++) {
          var side = _arr[_i];

          for (var id in x.env[side]) {
            var y = x.env[side][id];
            res.push({
              id: "".concat(side, ".").concat(id),
              data: y.data[y.data.length - 1]
            });
          }
        }
      }

      return res;
    }
  }, {
    key: "restarted",
    value: function restarted() {
      if (this._restart) {
        this._restart = false;
        this.running = false;
        this.perf = 0; //console.log('Restarted')

        return true;
      }

      return false;
    }
  }, {
    key: "remove_scripts",
    value: function remove_scripts(ids) {
      var _iterator7 = _createForOfIteratorHelper(ids),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var id = _step7.value;
          delete this.map[id];
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      this.send_state();
    }
  }, {
    key: "pre_run_mods",
    value: function pre_run_mods(sel) {
      for (var id in this.mods) {
        if (this.mods[id].pre_run) {
          this.mods[id].pre_run(sel);
        }
      }
    }
  }, {
    key: "post_run_mods",
    value: function post_run_mods(sel) {
      for (var id in this.mods) {
        if (this.mods[id].post_run) {
          this.mods[id].post_run(sel);
        }
      }
    }
  }, {
    key: "make_mods_hooks",
    value: function make_mods_hooks(name) {
      var arr = [];

      for (var id in this.mods) {
        if (this.mods[id][name]) {
          arr.push(this.mods[id][name].bind(this.mods[id]));
        }
      }

      return arr;
    }
  }, {
    key: "data_required",
    value: function data_required(s) {
      var _this5 = this;

      var all = Object.values(this.map);
      if (s) all.push(s);
      var types = [{
        type: 'OHLCV'
      }];

      for (var _i2 = 0, _all = all; _i2 < _all.length; _i2++) {
        var s = _all[_i2];

        if (s.src.data) {
          var reqs = Object.values(s.src.data);
          types.push.apply(types, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(reqs.map(function (x) {
            return {
              id: s.uuid,
              type: x.type
            };
          })));
        }
      }

      var unf = types.filter(function (x) {
        return !Object.values(_this5.data).find(function (y) {
          return y.type === x.type;
        });
      });
      return unf.length ? unf : null;
    } // Match dataset id using script id & required type

  }, {
    key: "match_ds",
    value: function match_ds(id, type) {
      // TODO: develop further
      for (var id in this.data) {
        if (this.data[id].type === type) {
          return id;
        }
      }
    } // Make a ohlcv data point if there is a symbol
    // with { main: true } props (overwrites ohlcv).

  }, {
    key: "make_ohlcv",
    value: function make_ohlcv() {
      var sym = this.custom_main;
      var tNext = this.t + this.tf;

      if (sym.update(null, tNext)) {
        this.data.ohlcv.data.push([tNext, sym.open[0], sym.high[0], sym.low[0], sym.close[0], sym.vol[0]]);
      }
    } // Calculate data size

  }, {
    key: "recalc_size",
    value: function recalc_size() {
      while (true) {
        var sz = _script_utils_js__WEBPACK_IMPORTED_MODULE_8__.size_of_dss(this.data) / (1024 * 1024);
        var lim = this.sett.ww_ram_limit;

        if (lim && sz > lim) {
          this.limit_size();
        } else break;
      }

      this.data_size = +sz.toFixed(2);
      this.send_state();
    } // Limit data size by throwing out the least
    // active datasets (measured by 'last_upd')

  }, {
    key: "limit_size",
    value: function limit_size() {
      var dss = Object.values(this.data).map(function (x) {
        return {
          id: x.id,
          t: x.last_upd
        };
      });
      dss.sort(function (a, b) {
        return a.t - b.t;
      });

      if (dss.length) {
        delete this.data[dss[0].id];
      }
    }
  }]);

  return ScriptEngine;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ScriptEngine());

/***/ }),

/***/ "./src/helpers/script_env.js":
/*!***********************************!*\
  !*** ./src/helpers/script_env.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScriptEnv)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _script_std_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script_std.js */ "./src/helpers/script_std.js");
/* harmony import */ var _script_engine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script_engine.js */ "./src/helpers/script_engine.js");
/* harmony import */ var _script_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script_utils.js */ "./src/helpers/script_utils.js");
/* harmony import */ var _script_ts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./script_ts.js */ "./src/helpers/script_ts.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Script environment. Packs everything that
// needed for a script execution together:
// script src, standart functions, input data,
// other overlays & dependencies




var FDEFS1 = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*?\s*)\)/mi;
var FDEFS2 = /(function |)([\$A-Z_][\$\.0-9A-Z_]*)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?\(([\s\S]*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)/gmi;
var DEF_LIMIT = 5;

var ScriptEnv = /*#__PURE__*/function () {
  function ScriptEnv(s, data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ScriptEnv);

    this.std = _script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default.std_inject(new _script_std_js__WEBPACK_IMPORTED_MODULE_3__.default(this));
    this.id = s.uuid;
    this.src = s;
    this.output = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_6__.default)('output', []);
    this.data = [];
    this.tss = {};
    this.syms = {};
    this.shared = data;
    this.output.box_maker = this.make_box(s.src);
    this.onchart = {};
    this.offchart = {};
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ScriptEnv, [{
    key: "build",
    value: function build() {
      this.output.box_maker(this, this.shared, _script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default);
      delete this.output.box_maker;
    }
  }, {
    key: "init",
    value: function init() {
      this.output.init();
    }
  }, {
    key: "step",
    value: function step(unshift) {
      if (unshift === void 0) {
        unshift = true;
      }

      if (unshift) this.unshift();
      var v = this.output.update();
      this.copy(v, unshift);
      this.limit();
    }
  }, {
    key: "unshift",
    value: function unshift() {
      this.output.unshift(undefined); // Update all temp symbols

      for (var id in this.tss) {
        if (this.tss[id].__tf__) continue;
        this.tss[id].unshift(undefined);
      }
    } // Limit env.output length

  }, {
    key: "limit",
    value: function limit() {
      var out = this.output;
      out.length = out.__len__ || DEF_LIMIT;

      for (var id in this.tss) {
        var ts = this.tss[id]; //console.log(ts.__id__, ts.__len__)

        ts.length = ts.__len__ || DEF_LIMIT;
      }
    } // Copy the recent value to the direct buff

  }, {
    key: "copy",
    value: function copy(v, unshift) {
      if (unshift === void 0) {
        unshift = true;
      }

      var off = this.output.__offset__;

      if (v != undefined) {
        this.output[0] = v.__id__ ? v[0] : v;
        off = off || v.__offset__;
      }

      var val = this.output[0];
      var t = _script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default.t;
      if (off) t += off * _script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default.tf;

      if (val == null || !val.length) {
        // Number / object
        var point = [t, val];
      } else {
        // Array
        point = [t].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(val));
      }

      if (unshift) {
        this.data.push(point);
      } else {
        this.data[this.data.length - 1] = point;
      }
    } // A small sandbox for a particular script
    // TODO: add support of 'Source' prop type (open, high, hl2 ...)

  }, {
    key: "make_box",
    value: function make_box(src) {
      var proto = Object.getPrototypeOf(this.std);
      var std = "";

      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(proto)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var k = _step.value;
          if (k === 'constructor') continue;
          std += "const std_".concat(k, " = self.std.").concat(k, ".bind(self.std)\n");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var props = "";

      for (var k in src.props || {}) {
        if (src.props[k].val !== undefined) {
          var val = src.props[k].val;
        } else if (this.src.sett[k] !== undefined) {
          val = this.src.sett[k];
        } else {
          val = src.props[k].def;
        }

        props += "var ".concat(k, " = ").concat(JSON.stringify(val), "\n");
      } // TODO: add argument values to _id


      var tss = "";

      for (var k in this.shared) {
        if (this.shared[k] && this.shared[k].__id__) {
          tss += "const ".concat(k, " = shared.").concat(k, "\n");
        }
      } // Datasets


      var dss = "";

      for (var k in src.data || {}) {
        var id = _script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default.match_ds(this.id, src.data[k].type);

        if (!this.shared.dss[id]) {
          var T = src.data[k].type;
          console.warn("Dataset '".concat(T, "' is undefined"));
          continue;
        }

        dss += "const ".concat(k, " = shared.dss['").concat(id, "'].data\n");
      }

      try {
        return Function('self,shared,se', "\n                'use strict';\n\n                // Built-in functions (aliases)\n                ".concat(std, "\n\n                // Modules (API / interfaces)\n                ").concat(this.make_modules(), "\n\n                // Timeseries\n                ").concat(tss, "\n\n                // Direct data ts\n                const data = self.data\n                const ohlcv = shared.dss.ohlcv.data\n                ").concat(dss, "\n\n                // Script's properties (init)\n                ").concat(props, "\n\n                // Globals\n                const settings = self.src.sett\n                const tf = shared.tf\n                const range = shared.range\n\n                this.init = (_id = 'root') => {\n                    ").concat(this.prep(src.init_src), "\n                }\n\n                this.update = (_id = 'root') => {\n                    const t = shared.t()\n                    const iter = shared.iter()\n                    ").concat(this.prep(src.upd_src), "\n                }\n\n                this.post = (_id = 'root') => {\n                    ").concat(this.prep(src.post_src), "\n                }\n            "));
      } catch (e) {
        return Function('self,shared', "\n                'use strict';\n                this.init = () => {}\n                this.update = () => {}\n                this.post = () => {}\n            ");
      }
    } // Make definitions for modules

  }, {
    key: "make_modules",
    value: function make_modules() {
      var s = "";

      for (var id in _script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default.mods) {
        if (!_script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default.mods[id].api) continue;
        s += "const ".concat(id, " = se.mods['").concat(id, "'].api[self.id]");
        s += '\n';
      }

      return s;
    } // Preprocess the update function.
    // Replace functions with the full arguments list +
    // generate & add tsid
    // TODO: implement recursive prepping (with js syntax parser)

  }, {
    key: "prep",
    value: function prep(src) {
      // console.log('Before -----> \n', src)
      var h = this.src.use_for[0]; // TODO: add props here

      src = '\t\t  let _pref = `${_id}<-' + h + '<-`\n' + src;
      FDEFS2.lastIndex = 0;
      var call_id = 0; // Function call id (to make each call unique)

      do {
        var m = FDEFS2.exec(src);

        if (m) {
          var fkeyword = m[1].trim();
          var fname = m[2];
          var fargs = m[3];

          if (fkeyword === 'function') {// TODO: add _ids to inline functions
          } else {
            var off = m.index + m[0].indexOf('(');

            if (this.std[fname]) {
              src = this.postfix(src, m, ++call_id); //console.log(src)

              off += 4; // 'std_'
            } // Quick fix


            FDEFS2.lastIndex = off;
          }
        }
      } while (m); // console.log('After ----->\n', u.wrap_idxs(src))


      return _script_utils_js__WEBPACK_IMPORTED_MODULE_5__.wrap_idxs(src, 'std_');
    } // Postfix function calls with ts _ids

  }, {
    key: "postfix",
    value: function postfix(src, m, call_id) {
      var target = this.get_args(this.fdef(m[2])).length;
      var m0 = this.parentheses(m[0]); // First closed pair

      var args = this.get_args_2(m0);

      for (var i = args.length; i < target; i++) {
        args.push('void 0');
      } // Add an unique time-series id


      args.push("_pref+\"f".concat(call_id, "\""));
      return src.replace(m0, "std_".concat(m[2], "(").concat(args.join(', '), ")"));
    }
  }, {
    key: "parentheses",
    value: function parentheses(str) {
      var count = 0,
          first = false;

      for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
          count++;
          first = true;
        } else if (str[i] === ')') {
          count--;
        }

        if (first && count === 0) {
          return str.substr(0, i + 1);
        }
      }

      return str;
    } // Get the function definition
    // TODO: add support of modules

  }, {
    key: "fdef",
    value: function fdef(fname) {
      return this.std[fname].toString();
    } // Get args in the function's definition

  }, {
    key: "get_args",
    value: function get_args(src) {
      var reg = this.regex_clone(FDEFS1);
      reg.lastIndex = 0;
      var m = reg.exec(src);
      if (!m[3].trim().length) return [];
      var arr = m[3].split(',').map(function (x) {
        return x.trim();
      }).filter(function (x) {
        return x !== '_id' && x !== '_tf';
      });
      return arr;
    }
  }, {
    key: "get_args_2",
    value: function get_args_2(str) {
      var parts = [];
      var c = 0;
      var s = 0;
      var q1 = false,
          q2 = false,
          q3 = false;
      var part;

      for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
          c++;
          if (!part) part = [i + 1];
        }

        if (str[i] === ')') c--;
        if (str[i] === '[') s++;
        if (str[i] === ']') s--;
        if (str[i] === "'") q1 = !q1;
        if (str[i] === '"') q2 = !q2;
        if (str[i] === '`') q3 = !q3;

        if (str[i] === ',' && c === 1 && !s && !q1 && !q2 && !q3) {
          if (part) {
            part[1] = i;
            parts.push(part);
            part = [i + 1];
          }
        }

        if (c === 0 && part) {
          part[1] = i;
          parts.push(part);
          part = null;
        }
      }

      return parts.map(function (x) {
        return str.slice.apply(str, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(x));
      }).filter(function (x) {
        return /[^\s]+/.exec(x);
      });
    }
  }, {
    key: "regex_clone",
    value: function regex_clone(rex) {
      return new RegExp(rex.source, rex.flags);
    }
  }, {
    key: "send_modify",
    value: function send_modify(upd) {
      _script_engine_js__WEBPACK_IMPORTED_MODULE_4__.default.send('modify-overlay', {
        uuid: this.id,
        fields: upd
      });
    }
  }]);

  return ScriptEnv;
}();



/***/ }),

/***/ "./src/helpers/script_std.js":
/*!***********************************!*\
  !*** ./src/helpers/script_std.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScriptStd)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _script_engine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script_engine.js */ "./src/helpers/script_engine.js");
/* harmony import */ var _stuff_linreg_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stuff/linreg.js */ "./src/stuff/linreg.js");
/* harmony import */ var _script_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./script_utils.js */ "./src/helpers/script_utils.js");
/* harmony import */ var _sampler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sampler.js */ "./src/helpers/sampler.js");
/* harmony import */ var _symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol.js */ "./src/helpers/symbol.js");






function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Script std-lib (built-in functions)





var BUF_INC = 5;

var ScriptStd = /*#__PURE__*/function () {
  function ScriptStd(env) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, ScriptStd);

    this.env = env;
    this.se = _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default;
    this.SWMA = [1 / 6, 2 / 6, 2 / 6, 1 / 6];
    this.STDEV_EPS = 1e-10;
    this.STDEV_Z = 1e-4;

    this._index_tracking();
  } // Wrap every index with index-tracking function
  // That way we will know exact index ranges


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(ScriptStd, [{
    key: "_index_tracking",
    value: function _index_tracking() {
      var proto = Object.getPrototypeOf(this);
      var std = "";

      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(proto)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var k = _step.value;

          switch (k) {
            case 'constructor':
            case 'ts':
            case 'tstf':
            case 'sample':
            case '_index_tracking':
            case '_tsid':
            case '_i':
            case '_v':
            case '_add_i':
            case 'chart':
            case 'onchart':
            case 'offchart':
            case 'sym':
              continue;
          }

          var f = this._add_i(k, this[k].toString());

          if (f) this[k] = f;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Add index tracking to the function

  }, {
    key: "_add_i",
    value: function _add_i(name, src) {
      var args = _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.f_args(src);
      src = _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.f_body(src);
      var src2 = _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.wrap_idxs(src, 'this.');

      if (src2 !== src) {
        return (0,_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__.default)(Function, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(args).concat([src2]));
      }

      return null;
    } // Generate the next timeseries id

  }, {
    key: "_tsid",
    value: function _tsid(prev, next) {
      // TODO: prev presence check
      return "".concat(prev, "<-").concat(next);
    } // Index-tracker

  }, {
    key: "_i",
    value: function _i(i, x) {
      // If an object is actually a timeseries
      if (x != undefined && x === x && x.__id__) {
        // Increase TS buff length
        if (!x.__len__ || i >= x.__len__) {
          x.__len__ = i + BUF_INC;
        }
      }

      return i;
    } // Index-tracker (object-based)

  }, {
    key: "_v",
    value: function _v(x, i) {
      // If an object is actually a timeseries
      if (x != undefined && x === x && x.__id__) {
        // Increase TS buff length
        if (!x.__len__ || i >= x.__len__) {
          x.__len__ = i + BUF_INC;
        }
      }

      return x;
    }
    /**
     * Creates a new time-series & records each x.
     * Returns  an array. Id is auto-genrated
     * @param {*} x - A variable to sample from
     * @return {TS} - New time-series
     */

  }, {
    key: "ts",
    value: function ts(x, _id, _tf) {
      if (_tf) return this.tstf(x, _tf, _id);
      var ts = this.env.tss[_id];

      if (!ts) {
        ts = this.env.tss[_id] = [x];
        ts.__id__ = _id;
      } else {
        ts[0] = x;
      }

      return ts;
    }
    /**
     * Creates a new time-series & records each x.
     * Uses Sampler to aggregate the values
     * Return the an array. Id is auto-genrated
     * @param {*} x - A variable to sample from
     * @param {(number|string)} tf - Timeframe in ms or as a string
     * @return {TS} - New time-series
     */

  }, {
    key: "tstf",
    value: function tstf(x, tf, _id) {
      var ts = this.env.tss[_id];

      if (!ts) {
        ts = this.env.tss[_id] = [x];
        ts.__id__ = _id;
        ts.__tf__ = _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.tf_from_str(tf);
        ts.__fn__ = (0,_sampler_js__WEBPACK_IMPORTED_MODULE_8__.default)('close').bind(ts);
      } else {
        ts.__fn__(x);
      }

      return ts;
    }
    /**
     * Creates a new custom sampler.
     * Return the an array. Id is auto-genrated
     * @param {*} x - A variable to sample from
     * @param {string} type - Sampler type
     * @param {(number|string)} tf - Timeframe in ms or as a string
     * @return {TS} - New time-series
     */

  }, {
    key: "sample",
    value: function sample(x, type, tf, _id) {
      var ts = this.env.tss[_id];

      if (!ts) {
        ts = this.env.tss[_id] = [x];
        ts.__id__ = _id;
        ts.__tf__ = _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.tf_from_str(tf);
        ts.__fn__ = (0,_sampler_js__WEBPACK_IMPORTED_MODULE_8__.default)(type).bind(ts);
      } else {
        ts.__fn__(x);
      }

      return ts;
    }
    /**
     * Replaces the variable if it's NaN
     * @param {*} x - The variable
     * @param {*} [v] - A value to replace with
     * @return {*} - New value
     */

  }, {
    key: "nz",
    value: function nz(x, v) {
      if (x == undefined || x !== x) {
        return v || 0;
      }

      return x;
    }
    /**
     * Is the variable NaN ?
     * @param {*} x - The variable
     * @return {boolean} - New value
     */

  }, {
    key: "na",
    value: function na(x) {
      return x == undefined || x !== x;
    }
    /** Replaces the var with NaN if Infinite
     * @param {*} x - The variable
     * @param {*} [v] - A value to replace with
     * @return {*} - New value
     */

  }, {
    key: "nf",
    value: function nf(x, v) {
      if (!isFinite(x)) {
        return v !== undefined ? v : NaN;
      }

      return x;
    } // Math operators on t-series and numbers

    /** Adds values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */

  }, {
    key: "add",
    value: function add(x, y, _id) {
      // __id__ means this is a time-series
      var id = this._tsid(_id, "add");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 + y0, id, x.__tf__);
    }
    /** Subtracts values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */

  }, {
    key: "sub",
    value: function sub(x, y, _id) {
      var id = this._tsid(_id, "sub");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 - y0, id, x.__tf__);
    }
    /** Multiplies values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */

  }, {
    key: "mult",
    value: function mult(x, y, _id) {
      var id = this._tsid(_id, "mult");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 * y0, id, x.__tf__);
    }
    /** Divides values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */

  }, {
    key: "div",
    value: function div(x, y, _id) {
      var id = this._tsid(_id, "div");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 / y0, id, x.__tf__);
    }
    /** Returns a negative value / time-series
     * @param {(TS|*)} x - Input
     * @return {TS} - New time-series
     */

  }, {
    key: "neg",
    value: function neg(x, _id) {
      var id = this._tsid(_id, "neg");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      return this.ts(-x0, id, x.__tf__);
    }
    /** Absolute value
     * @param {number} x - Input
     * @return {number} - Absolute value
     */

  }, {
    key: "abs",
    value: function abs(x) {
      return Math.abs(x);
    }
    /** Arccosine function
     * @param {number} x - Input
     * @return {number} - Arccosine of x
     */

  }, {
    key: "acos",
    value: function acos(x) {
      return Math.acos(x);
    }
    /** Emits an event to DataCube
     * @param {string} type - Signal type
     * @param {*} data - Signal data
     */

  }, {
    key: "signal",
    value: function signal(type, data) {
      if (data === void 0) {
        data = {};
      }

      if (this.se.shared.event !== 'update') return;
      this.se.send('script-signal', {
        type: type,
        data: data
      });
    }
    /** Emits an event if cond === true
     * @param {(boolean|TS)} cond - The condition
     * @param {string} type - Signal type
     * @param {*} data - Signal data
     */

  }, {
    key: "signalif",
    value: function signalif(cond, type, data) {
      if (data === void 0) {
        data = {};
      }

      if (this.se.shared.event !== 'update') return;
      if (cond && cond.__id__) cond = cond[0];

      if (cond) {
        this.se.send('script-signal', {
          type: type,
          data: data
        });
      }
    }
    /** Arnaud Legoux Moving Average
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} offset - Offset
     * @param {number} sigma - Sigma
     * @return {TS} - New time-series
     */

  }, {
    key: "alma",
    value: function alma(src, len, offset, sigma, _id) {
      var id = this._tsid(_id, "alma(".concat(len, ",").concat(offset, ",").concat(sigma, ")"));

      var m = Math.floor(offset * (len - 1));
      var s = len / sigma;
      var norm = 0;
      var sum = 0;

      for (var i = 0; i < len; i++) {
        var w = Math.exp(-1 * Math.pow(i - m, 2) / (2 * Math.pow(s, 2)));
        norm = norm + w;
        sum = sum + src[len - i - 1] * w;
      }

      return this.ts(sum / norm, id, src.__tf__);
    }
    /** Arcsine function
     * @param {number} x - Input
     * @return {number} - Arcsine of x
     */

  }, {
    key: "asin",
    value: function asin(x) {
      return Math.asin(x);
    }
    /** Arctangent function
     * @param {number} x - Input
     * @return {number} - Arctangent of x
     */

  }, {
    key: "atan",
    value: function atan(x) {
      return Math.atan(x);
    }
    /** Average True Range
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "atr",
    value: function atr(len, _id, _tf) {
      var tfs = _tf || '';

      var id = this._tsid(_id, "atr(".concat(len, ")"));

      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var tr = this.ts(0, id, _tf);
      tr[0] = this.na(high[1]) ? high[0] - low[0] : Math.max(Math.max(high[0] - low[0], Math.abs(high[0] - close[1])), Math.abs(low[0] - close[1]));
      return this.rma(tr, len, id);
    }
    /** Average of arguments
     * @param {...number} args - Numeric values
     * @return {number}
     */

  }, {
    key: "avg",
    value: function avg() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.pop(); // Remove _id

      var sum = 0;

      for (var i = 0; i < args.length; i++) {
        sum += args[i];
      }

      return sum / args.length;
    }
    /** Candles since the event occured (cond === true)
     * @param {(boolean|TS)} cond - the condition
     */

  }, {
    key: "since",
    value: function since(cond, _id) {
      var id = this._tsid(_id, "since()");

      if (cond && cond.__id__) cond = cond[0];
      var s = this.ts(undefined, id);
      s[0] = cond ? 0 : s[1] + 1;
      return s;
    }
    /** Bollinger Bands
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @return {TS[]} - Array of new time-series (3 bands)
     */

  }, {
    key: "bb",
    value: function bb(src, len, mult, _id) {
      var id = this._tsid(_id, "bb(".concat(len, ",").concat(mult, ")"));

      var basis = this.sma(src, len, id);
      var dev = this.stdev(src, len, id)[0] * mult;
      return [basis, this.ts(basis[0] + dev, id + '1', src.__tf__), this.ts(basis[0] - dev, id + '2', src.__tf__)];
    }
    /** Bollinger Bands Width
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @return {TS} - New time-series
     */

  }, {
    key: "bbw",
    value: function bbw(src, len, mult, _id) {
      var id = this._tsid(_id, "bbw(".concat(len, ",").concat(mult, ")"));

      var basis = this.sma(src, len, id)[0];
      var dev = this.stdev(src, len, id)[0] * mult;
      return this.ts(2 * dev / basis, id, src.__tf__);
    }
    /** Converts the variable to Boolean
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "bool",
    value: function bool(x) {
      return !!x;
    }
    /** Commodity Channel Index
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "cci",
    value: function cci(src, len, _id) {
      // TODO: Not exactly precise, but pretty damn close
      var id = this._tsid(_id, "cci(".concat(len, ")"));

      var ma = this.sma(src, len, id);
      var dev = this.dev(src, len, id);
      var cci = (src[0] - ma[0]) / (0.015 * dev[0]);
      return this.ts(cci, id, src.__tf__);
    }
    /** Shortcut for Math.ceil()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "ceil",
    value: function ceil(x) {
      return Math.ceil(x);
    }
    /** Change: x[0] - x[len]
     * @param {TS} src - Input
     * @param {number} [len] - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "change",
    value: function change(src, len, _id) {
      if (len === void 0) {
        len = 1;
      }

      var id = this._tsid(_id, "change(".concat(len, ")"));

      return this.ts(src[0] - src[len], id, src.__tf__);
    }
    /** Chande Momentum Oscillator
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "cmo",
    value: function cmo(src, len, _id) {
      var id = this._tsid(_id, "cmo(".concat(len, ")"));

      var mom = this.change(src, 1, id);
      var g = this.ts(mom[0] >= 0 ? mom[0] : 0.0, id + "g", src.__tf__);
      var l = this.ts(mom[0] >= 0 ? 0.0 : -mom[0], id + "l", src.__tf__);
      var sm1 = this.sum(g, len, id + '1')[0];
      var sm2 = this.sum(l, len, id + '2')[0];
      return this.ts(100 * (sm1 - sm2) / (sm1 + sm2), id, src.__tf__);
    }
    /** Center of Gravity
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "cog",
    value: function cog(src, len, _id) {
      var id = this._tsid(_id, "cmo(".concat(len, ")"));

      var sum = this.sum(src, len, id)[0];
      var num = 0;

      for (var i = 0; i < len; i++) {
        num += src[i] * (i + 1);
      }

      return this.ts(-num / sum, id, src.__tf__);
    } // Correlation

  }, {
    key: "corr",
    value: function corr() {// TODO: this
    }
    /** Cosine function
     * @param {number} x - Input
     * @return {number} - Cosine of x
     */

  }, {
    key: "cos",
    value: function cos(x) {
      return Math.cos(x);
    }
    /** When one time-series crosses another
     * @param {TS} src1 - TS1
     * @param {TS} src2 - TS2
     * @return {TS} - New time-series
     */

  }, {
    key: "cross",
    value: function cross(src1, src2, _id) {
      var id = this._tsid(_id, "cross");

      var x = src1[0] > src2[0] !== src1[1] > src2[1];
      return this.ts(x, id, src1.__tf__);
    }
    /** When one time-series goes over another one
     * @param {TS} src1 - TS1
     * @param {TS} src2 - TS2
     * @return {TS} - New time-series
     */

  }, {
    key: "crossover",
    value: function crossover(src1, src2, _id) {
      var id = this._tsid(_id, "crossover");

      var x = src1[0] > src2[0] && src1[1] <= src2[1];
      return this.ts(x, id, src1.__tf__);
    }
    /** When one time-series goes under another one
     * @param {TS} src1 - TS1
     * @param {TS} src2 - TS2
     * @return {TS} - New time-series
     */

  }, {
    key: "crossunder",
    value: function crossunder(src1, src2, _id) {
      var id = this._tsid(_id, "crossunder");

      var x = src1[0] < src2[0] && src1[1] >= src2[1];
      return this.ts(x, id, src1.__tf__);
    }
    /** Sum of all elements of src
     * @param {TS} src1 - Input
     * @return {TS} - New time-series
     */

  }, {
    key: "cum",
    value: function cum(src, _id) {
      var id = this._tsid(_id, "cum");

      var res = this.ts(0, id, src.__tf__);
      res[0] = this.nz(src[0]) + this.nz(res[1]);
      return res;
    }
    /** Day of month, literally
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Day
     */

  }, {
    key: "dayofmonth",
    value: function dayofmonth(time) {
      return new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t).getUTCDate();
    }
    /** Day of week, literally
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Day
     */

  }, {
    key: "dayofweek",
    value: function dayofweek(time) {
      return new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t).getUTCDay() + 1;
    }
    /** Deviation from SMA
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "dev",
    value: function dev(src, len, _id) {
      var id = this._tsid(_id, "dev(".concat(len, ")"));

      var mean = this.sma(src, len, id)[0];
      var sum = 0;

      for (var i = 0; i < len; i++) {
        sum += Math.abs(src[i] - mean);
      }

      return this.ts(sum / len, id, src.__tf__);
    }
    /** Directional Movement Index ADX, +DI, -DI
     * @param {number} len - Length
     * @param {number} smooth - Smoothness
     * @return {TS} - New time-series
     */

  }, {
    key: "dmi",
    value: function dmi(len, smooth, _id, _tf) {
      var id = this._tsid(_id, "dmi(".concat(len, ",").concat(smooth, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var up = this.change(high, 1, id + '1')[0];
      var down = this.neg(this.change(low, 1, id + '2'), id)[0];
      var plusDM = this.ts(100 * (this.na(up) ? NaN : up > down && up > 0 ? up : 0), id + '3', _tf);
      var minusDM = this.ts(100 * (this.na(down) ? NaN : down > up && down > 0 ? down : 0), id + '4', _tf);
      var trur = this.rma(this.tr(false, id, _tf), len, id + '5');
      var plus = this.div(this.rma(plusDM, len, id + '6'), trur, id + '8');
      var minus = this.div(this.rma(minusDM, len, id + '7'), trur, id + '9');
      var sum = this.add(plus, minus, id + '10')[0];
      var adx = this.rma(this.ts(100 * Math.abs(plus[0] - minus[0]) / (sum === 0 ? 1 : sum), id + '11', _tf), smooth, id + '12');
      return [adx, plus, minus];
    }
    /** Exponential Moving Average with alpha = 2 / (y + 1)
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "ema",
    value: function ema(src, len, _id) {
      var id = this._tsid(_id, "ema(".concat(len, ")"));

      var a = 2 / (len + 1);
      var ema = this.ts(0, id, src.__tf__);
      ema[0] = this.na(ema[1]) ? this.sma(src, len, id)[0] : a * src[0] + (1 - a) * this.nz(ema[1]);
      return ema;
    }
    /** Shortcut for Math.exp()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "exp",
    value: function exp(x) {
      return Math.exp(x);
    }
    /** Test if "src" TS is falling for "len" candles
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "falling",
    value: function falling(src, len, _id) {
      var id = this._tsid(_id, "falling(".concat(len, ")"));

      var bot = src[0];

      for (var i = 1; i < len + 1; i++) {
        if (bot >= src[i]) {
          return this.ts(false, id, src.__tf__);
        }
      }

      return this.ts(true, id, src.__tf__);
    }
    /** For a given series replaces NaN values with
     * previous nearest non-NaN value
     * @param {TS} src - Input time-series
     * @return {TS}
     */

  }, {
    key: "fixnan",
    value: function fixnan(src) {
      if (this.na(src[0])) {
        for (var i = 1; i < src.length; i++) {
          if (!this.na(src[i])) {
            src[0] = src[i];
            break;
          }
        }
      }

      return src;
    }
    /* TODO: think
    skipnan(x, _id) {
        let id = this._tsid(_id, `skipnan()`)
        return this.ts(true, id, src.__tf__)
    }*/

    /** Shortcut for Math.floor()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "floor",
    value: function floor(x) {
      Math.floor(x);
    }
    /** Highest value for a given number of candles back
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "highest",
    value: function highest(src, len, _id) {
      var id = this._tsid(_id, "highest(".concat(len, ")"));

      var high = -Infinity;

      for (var i = 0; i < len; i++) {
        if (src[i] > high) high = src[i];
      }

      return this.ts(high, id, src.__tf__);
    }
    /** Highest value offset for a given number of bars back
     * @param {TS} src - Input
     * @param {number} len - Length
     */

  }, {
    key: "highestbars",
    value: function highestbars(src, len, _id) {
      var id = this._tsid(_id, "highestbars(".concat(len, ")"));

      var high = -Infinity;
      var hi = 0;

      for (var i = 0; i < len; i++) {
        if (src[i] > high) {
          high = src[i], hi = i;
        }
      }

      return this.ts(-hi, id, src.__tf__);
    }
    /** Hull Moving Average
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "hma",
    value: function hma(src, len, _id) {
      var id = this._tsid(_id, "hma(".concat(len, ")"));

      var len2 = Math.floor(len / 2);
      var len3 = Math.round(Math.sqrt(len));
      var a = this.mult(this.wma(src, len2, id + '1'), 2, id);
      var b = this.wma(src, len, id + '2');
      var delt = this.sub(a, b, id + '3');
      return this.wma(delt, len3, id + '4');
    }
    /** Returns hours of a given timestamp
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Hour
     */

  }, {
    key: "hour",
    value: function hour(time) {
      return new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t).getUTCHours();
    }
    /** Returns x or y depending on the condition
     * @param {(boolean|TS)} cond - Condition
     * @param {*} x - Frist value
     * @param {*} y - Second value
     * @return {*}
     */

  }, {
    key: "iff",
    value: function iff(cond, x, y) {
      if (cond && cond.__id__) cond = cond[0];
      return cond ? x : y;
    }
    /** Keltner Channels
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @param {boolean} [use_tr] - Use true range
     * @return {TS[]} - Array of new time-series (3 bands)
     */

  }, {
    key: "kc",
    value: function kc(src, len, mult, use_tr, _id, _tf) {
      if (use_tr === void 0) {
        use_tr = true;
      }

      var id = this._tsid(_id, "kc(".concat(len, ",").concat(mult, ",").concat(use_tr, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var basis = this.ema(src, len, id + '1');
      var range = use_tr ? this.tr(false, id + '2', _tf) : this.ts(high[0] - low[0], id + '3', src.__tf__);
      var ema = this.ema(range, len, id + '4');
      return [basis, this.ts(basis[0] + ema[0] * mult, id + '5', src.__tf__), this.ts(basis[0] - ema[0] * mult, id + '6', src.__tf__)];
    }
    /** Keltner Channels Width
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @param {boolean} [use_tr] - Use true range
     * @return {TS} - New time-series
     */

  }, {
    key: "kcw",
    value: function kcw(src, len, mult, use_tr, _id, _tf) {
      if (use_tr === void 0) {
        use_tr = true;
      }

      var id = this._tsid(_id, "kcw(".concat(len, ",").concat(mult, ",").concat(use_tr, ")"));

      var kc = this.kc(src, len, mult, use_tr, "kcw", _tf);
      return this.ts((kc[1][0] - kc[2][0]) / kc[0][0], id, src.__tf__);
    }
    /** Linear Regression
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} offset - Offset
     * @return {TS} - New time-series
     */

  }, {
    key: "linreg",
    value: function linreg(src, len, offset, _id) {
      if (offset === void 0) {
        offset = 0;
      }

      var id = this._tsid(_id, "linreg(".concat(len, ")"));

      src.__len__ = Math.max(src.__len__ || 0, len);

      var lr = (0,_stuff_linreg_js__WEBPACK_IMPORTED_MODULE_6__.default)(src, len, offset);

      return this.ts(lr, id, src.__tf__);
    }
    /** Shortcut for Math.log()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "log",
    value: function log(x) {
      return Math.log(x);
    }
    /** Shortcut for Math.log10()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "log10",
    value: function log10(x) {
      return Math.log10(x);
    }
    /** Lowest value for a given number of candles back
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "lowest",
    value: function lowest(src, len, _id) {
      var id = this._tsid(_id, "lowest(".concat(len, ")"));

      var low = Infinity;

      for (var i = 0; i < len; i++) {
        if (src[i] < low) low = src[i];
      }

      return this.ts(low, id, src.__tf__);
    }
    /** Lowest value offset for a given number of bars back
     * @param {TS} src - Input
     * @param {number} len - Length
     */

  }, {
    key: "lowestbars",
    value: function lowestbars(src, len, _id) {
      var id = this._tsid(_id, "lowestbars(".concat(len, ")"));

      var low = Infinity;
      var li = 0;

      for (var i = 0; i < len; i++) {
        if (src[i] < low) {
          low = src[i], li = i;
        }
      }

      return this.ts(-li, id, src.__tf__);
    }
    /** Moving Average Convergence/Divergence
     * @param {TS} src - Input
     * @param {number} fast - Fast EMA
     * @param {number} slow - Slow EMA
     * @param {number} sig - Signal
     * @return {TS[]} - [macd, signal, hist]
     */

  }, {
    key: "macd",
    value: function macd(src, fast, slow, sig, _id) {
      var id = this._tsid(_id, "macd(".concat(fast).concat(slow).concat(sig, ")"));

      var fast_ma = this.ema(src, fast, id + '1');
      var slow_ma = this.ema(src, slow, id + '2');
      var macd = this.sub(fast_ma, slow_ma, id + '3');
      var signal = this.ema(macd, sig, id + '4');
      var hist = this.sub(macd, signal, id + '5');
      return [macd, signal, hist];
    }
    /** Max of arguments
     * @param {...number} args - Numeric values
     * @return {number}
     */

  }, {
    key: "max",
    value: function max() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.pop(); // Remove _id

      return Math.max.apply(Math, args);
    }
    /** Sends update to some overlay / main chart
     * @param {string} id - Overlay id
     * @param {Object} fields - Fields to be overwritten
     */

  }, {
    key: "modify",
    value: function modify(id, fields) {
      _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.send('modify-overlay', {
        uuid: id,
        fields: fields
      });
    }
    /** Sets the reverse buffer size for a given
     * time-series (default = 5, grows on demand)
     * @param {TS} src - Input
     * @param {number} len - New length
     */

  }, {
    key: "buffsize",
    value: function buffsize(src, len) {
      src.__len__ = len;
    }
    /** Money Flow Index
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "mfi",
    value: function mfi(src, len, _id) {
      var id = this._tsid(_id, "mfi(".concat(len, ")"));

      var vol = this.env.shared.vol;
      var ch = this.change(src, 1, id + '1')[0];
      var ts1 = this.mult(vol, ch <= 0.0 ? 0.0 : src[0], id + '2');
      var ts2 = this.mult(vol, ch >= 0.0 ? 0.0 : src[0], id + '3');
      var upper = this.sum(ts1, len, id + '4');
      var lower = this.sum(ts2, len, id + '5');
      var res = undefined;

      if (!this.na(lower)) {
        res = this.rsi(upper, lower, id + '6')[0];
      }

      return this.ts(res, id, src.__tf__);
    }
    /** Min of arguments
     * @param {...number} args - Numeric values
     * @return {number}
     */

  }, {
    key: "min",
    value: function min() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      args.pop(); // Remove _id

      return Math.min.apply(Math, args);
    }
    /** Returns minutes of a given timestamp
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Hour
     */

  }, {
    key: "minute",
    value: function minute(time) {
      return new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t).getUTCMinutes();
    }
    /** Momentum
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "mom",
    value: function mom(src, len, _id) {
      var id = this._tsid(_id, "mom(".concat(len, ")"));

      return this.ts(src[0] - src[len], id, src.__tf__);
    }
    /** Month
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Day
     */

  }, {
    key: "month",
    value: function month(time) {
      return new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t).getUTCMonth();
    } // Display data point as the main chart

  }, {
    key: "chart",
    value: function chart() {// TODO: this
    } // TODO: optionally enable scripts for $synth ovs
    // TODO: add indexBased option

    /** Display data point onchart
     * (create a new overlay in DataCube)
     * @param {(TS|TS[]|*)} x - Data point / TS / array of TS
     * @param {string} [name] - Overlay name
     * @param {Object} [sett] - Object with settings & OV type
     */

  }, {
    key: "onchart",
    value: function onchart(x, name, sett, _id) {
      if (sett === void 0) {
        sett = {};
      }

      var off = 0;
      name = name || _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.get_fn_id('Onchart', _id);

      if (x && x.__id__) {
        off = x.__offset__ || 0;
        x = x[0];
      }

      if (Array.isArray(x) && x[0] && x[0].__id__) {
        off = x[0].__offset__ || 0;
        x = x.map(function (x) {
          return x[0];
        });
      }

      if (!this.env.onchart[name]) {
        var type = sett.type;
        delete sett.type;
        sett.$synth = true;
        sett.skipNaN = true;
        var post = Array.isArray(x) ? 's' : '';
        this.env.onchart[name] = {
          name: name,
          type: type || 'Spline' + post,
          data: [],
          settings: sett,
          scripts: false,
          grid: sett.grid || {}
        };
      }

      off *= _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.tf;
      var v = Array.isArray(x) ? [_script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t + off].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(x)) : [_script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t + off, x];
      _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.update(this.env.onchart[name].data, v);
    }
    /** Display data point offchart
     * (create a new overlay in DataCube)
     * @param {(TS|TS[]|*)} x - Data point / TS / array of TS
     * @param {string} [name] - Overlay name
     * @param {Object} [sett] - Object with settings & OV type
     */

  }, {
    key: "offchart",
    value: function offchart(x, name, sett, _id) {
      if (sett === void 0) {
        sett = {};
      }

      name = name || _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.get_fn_id('Offchart', _id);
      var off = 0;

      if (x && x.__id__) {
        off = x.__offset__ || 0;
        x = x[0];
      }

      if (Array.isArray(x) && x[0] && x[0].__id__) {
        off = x[0].__offset__ || 0;
        x = x.map(function (x) {
          return x[0];
        });
      }

      if (!this.env.offchart[name]) {
        var type = sett.type;
        delete sett.type;
        sett.$synth = true;
        sett.skipNaN = true;
        var post = Array.isArray(x) ? 's' : '';
        this.env.offchart[name] = {
          name: name,
          type: type || 'Spline' + post,
          data: [],
          settings: sett,
          scripts: false,
          grid: sett.grid || {}
        };
      }

      off *= _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.tf;
      var v = Array.isArray(x) ? [_script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t + off].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(x)) : [_script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t + off, x];
      _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.update(this.env.offchart[name].data, v);
    }
    /** Returns true when the candle(<tf>) is being closed
     * (create a new overlay in DataCube)
     * @param {(number|string)} tf - Timeframe in ms or as a string
     * @return {boolean}
     */

  }, {
    key: "onclose",
    value: function onclose(tf) {
      if (!this.env.shared.onclose) return false;
      if (!tf) tf = _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.tf;
      return (_script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t + _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.tf) % _script_utils_js__WEBPACK_IMPORTED_MODULE_7__.tf_from_str(tf) === 0;
    }
    /** Sends settings update
     * (can be called from init(), update() or post())
     * @param {Object} upd - Settings update (object to merge)
     */

  }, {
    key: "settings",
    value: function settings(upd) {
      this.env.send_modify({
        settings: upd
      });
      Object.assign(this.env.src.sett, upd);
    }
    /** Shifts TS left or right by "num" candles
     * @param {number} num - Offset measured in candles
     * @return {TS} - New / existing time-series
     */

  }, {
    key: "offset",
    value: function offset(src, num, _id) {
      if (src.__id__) {
        src.__offset__ = num;
        return src;
      }

      var id = this._tsid(_id, "offset(".concat(num, ")"));

      var out = ts(src, id);
      out.__offset__ = num;
      return out;
    } // percentile_linear_interpolation

  }, {
    key: "linearint",
    value: function linearint() {// TODO: this
    } // percentile_nearest_rank

  }, {
    key: "nearestrank",
    value: function nearestrank() {// TODO: this
    }
    /** The current time
     * @return {number} - timestamp
     */

  }, {
    key: "now",
    value: function now() {
      return new Date().getTime();
    }
  }, {
    key: "percentrank",
    value: function percentrank() {// TODO: this
    }
    /** Returns price of the pivot high point
     * Tip: works best with `offset` function
     * @param {TS} src - Input
     * @param {number} left - left threshold, candles
     * @param {number} right - right threshold, candles
     * @return {TS} - New time-series
     */

  }, {
    key: "pivothigh",
    value: function pivothigh(src, left, right, _id) {
      var id = this._tsid(_id, "pivothigh(".concat(left, ",").concat(right, ")"));

      var len = left + right + 1;
      var top = src[right];

      for (var i = 0; i < len; i++) {
        if (top <= src[i] && i !== right) {
          return this.ts(NaN, id, src.__tf__);
        }
      }

      return this.ts(top, id, src.__tf__);
    }
    /** Returns price of the pivot low point
     * Tip: works best with `offset` function
     * @param {TS} src - Input
     * @param {number} left - left threshold, candles
     * @param {number} right - right threshold, candles
     * @return {TS} - New time-series
     */

  }, {
    key: "pivotlow",
    value: function pivotlow(src, left, right, _id) {
      var id = this._tsid(_id, "pivotlow(".concat(left, ",").concat(right, ")"));

      var len = left + right + 1;
      var bot = src[right];

      for (var i = 0; i < len; i++) {
        if (bot >= src[i] && i !== right) {
          return this.ts(NaN, id, src.__tf__);
        }
      }

      return this.ts(bot, id, src.__tf__);
    }
    /** Shortcut for Math.pow()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "pow",
    value: function pow(x) {
      return Math.pow(x);
    }
    /** Test if "src" TS is rising for "len" candles
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "rising",
    value: function rising(src, len, _id) {
      var id = this._tsid(_id, "rising(".concat(len, ")"));

      var top = src[0];

      for (var i = 1; i < len + 1; i++) {
        if (top <= src[i]) {
          return this.ts(false, id, src.__tf__);
        }
      }

      return this.ts(true, id, src.__tf__);
    }
    /** Exponentially MA with alpha = 1 / length
     * Used in RSI
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "rma",
    value: function rma(src, len, _id) {
      var id = this._tsid(_id, "rma(".concat(len, ")"));

      var a = len;
      var sum = this.ts(0, id, src.__tf__);
      sum[0] = this.na(sum[1]) ? this.sma(src, len, id)[0] : (src[0] + (a - 1) * this.nz(sum[1])) / a;
      return sum;
    }
    /** Rate of Change
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "roc",
    value: function roc(src, len, _id) {
      var id = this._tsid(_id, "roc(".concat(len, ")"));

      return this.ts(100 * (src[0] - src[len]) / src[len], id, src.__tf__);
    }
    /** Shortcut for Math.round()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "round",
    value: function round(x) {
      return Math.round(x);
    }
    /** Relative Strength Index
     * @param {TS} x - First Input
     * @param {number|TS} y - Second Input
     * @return {TS} - New time-series
     */

  }, {
    key: "rsi",
    value: function rsi(x, y, _id) {
      // Check if y is a timeseries
      if (!this.na(y) && y.__id__) {
        var id = this._tsid(_id, "rsi(x,y)");

        var rsi = 100 - 100 / (1 + this.div(x, y, id)[0]);
      } else {
        var id = this._tsid(_id, "rsi(".concat(y, ")"));

        var ch = this.change(x, 1, _id)[0];
        var pc = this.ts(Math.max(ch, 0), id + '1', x.__tf__);
        var nc = this.ts(-Math.min(ch, 0), id + '2', x.__tf__);
        var up = this.rma(pc, y, id + '3')[0];
        var down = this.rma(nc, y, id + '4')[0];
        var rsi = down === 0 ? 100 : up === 0 ? 0 : 100 - 100 / (1 + up / down);
      }

      return this.ts(rsi, id + '5', x.__tf__);
    }
    /** Parabolic SAR
     * @param {number} start - Start
     * @param {number} inc - Increment
     * @param {number} max - Maximum
     * @return {TS} - New time-series
     */

  }, {
    key: "sar",
    value: function sar(start, inc, max, _id, _tf) {
      // Source: Parabolic SAR by imuradyan
      // TODO: simplify the code
      // TODO: fix the custom TF mode
      var id = this._tsid(_id, "sar(".concat(start, ",").concat(inc, ",").concat(max, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var minTick = 0; //1e-7

      var out = this.ts(undefined, id + '1', _tf);
      var pos = this.ts(undefined, id + '2', _tf);
      var maxMin = this.ts(undefined, id + '3', _tf);
      var acc = this.ts(undefined, id + '4', _tf);
      var n = _tf ? out.__len__ - 1 : _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.iter;
      var prev;
      var outSet = false;

      if (n >= 1) {
        prev = out[1];

        if (n === 1) {
          if (close[0] > close[1]) {
            pos[0] = 1;
            maxMin[0] = Math.max(high[0], high[1]);
            prev = Math.min(low[0], low[1]);
          } else {
            pos[0] = -1;
            maxMin[0] = Math.min(low[0], low[1]);
            prev = Math.max(high[0], high[1]);
          }

          acc[0] = start;
        } else {
          pos[0] = pos[1];
          acc[0] = acc[1];
          maxMin[0] = maxMin[1];
        }

        if (pos[0] === 1) {
          if (high[0] > maxMin[0]) {
            maxMin[0] = high[0];
            acc[0] = Math.min(acc[0] + inc, max);
          }

          if (low[0] <= prev) {
            pos[0] = -1;
            out[0] = maxMin[0];
            maxMin[0] = low[0];
            acc[0] = start;
            outSet = true;
          }
        } else {
          if (low[0] < maxMin[0]) {
            maxMin[0] = low[0];
            acc[0] = Math.min(acc[0] + inc, max);
          }

          if (high[0] >= prev) {
            pos[0] = 1;
            out[0] = maxMin[0];
            maxMin[0] = high[0];
            acc[0] = start;
            outSet = true;
          }
        }

        if (!outSet) {
          out[0] = prev + acc[0] * (maxMin[0] - prev);
          if (pos[0] === 1) if (out[0] >= low[0]) out[0] = low[0] - minTick;
          if (pos[0] === -1) if (out[0] <= high[0]) out[0] = high[0] + minTick;
        }
      }

      return out;
    }
    /** Returns seconds of a given timestamp
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Hour
     */

  }, {
    key: "second",
    value: function second(time) {
      return new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t).getUTCSeconds();
    }
    /** Shortcut for Math.sing()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "sign",
    value: function sign(x) {
      return Math.sign(x);
    }
    /** Sine function
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "sin",
    value: function sin(x) {
      return Math.sin(x);
    }
    /** Simple Moving Average
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "sma",
    value: function sma(src, len, _id) {
      var id = this._tsid(_id, "sma(".concat(len, ")"));

      var sum = 0;

      for (var i = 0; i < len; i++) {
        sum = sum + src[i];
      }

      return this.ts(sum / len, id, src.__tf__);
    }
    /** Shortcut for Math.sqrt()
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "sqrt",
    value: function sqrt(x) {
      return Math.sqrt(x);
    }
    /** Standard deviation
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "stdev",
    value: function stdev(src, len, _id) {
      var sumf = function sumf(x, y) {
        var res = x + y;
        return res;
      };

      var id = this._tsid(_id, "stdev(".concat(len, ")"));

      var avg = this.sma(src, len, id);
      var sqd = 0;

      for (var i = 0; i < len; i++) {
        var sum = sumf(src[i], -avg[0]);
        sqd += sum * sum;
      }

      return this.ts(Math.sqrt(sqd / len), id, src.__tf__);
    }
    /** Stochastic
     * @param {TS} src - Input
     * @param {TS} high - TS of high
     * @param {TS} low - TS of low
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "stoch",
    value: function stoch(src, high, low, len, _id) {
      var id = this._tsid(_id, "sum(".concat(len, ")"));

      var x = 100 * (src[0] - this.lowest(low, len)[0]);
      var y = this.highest(high, len)[0] - this.lowest(low, len)[0];
      return this.ts(x / y, id, src.__tf__);
    }
    /** Returns the sliding sum of last "len" values of the source
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */

  }, {
    key: "sum",
    value: function sum(src, len, _id) {
      var id = this._tsid(_id, "sum(".concat(len, ")"));

      var sum = 0;

      for (var i = 0; i < len; i++) {
        sum = sum + src[i];
      }

      return this.ts(sum, id, src.__tf__);
    }
    /** Supertrend Indicator
     * @param {number} factor - ATR multiplier
     * @param {number} atrlen - Length of ATR
     * @return {TS[]} - Supertrend line and direction of trend
     */

  }, {
    key: "supertrend",
    value: function supertrend(factor, atrlen, _id, _tf) {
      var id = this._tsid(_id, "supertrend(".concat(factor, ",").concat(atrlen, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var hl2 = (high[0] + low[0]) * 0.5;
      var atr = factor * this.atr(atrlen, id + '1', _tf)[0];
      var ls = this.ts(hl2 - atr, id + '2', _tf);
      var ls1 = this.nz(ls[1], ls[0]);
      ls[0] = close[1] > ls1 ? Math.max(ls[0], ls1) : ls[0];
      var ss = this.ts(hl2 + atr, id + '3', _tf);
      var ss1 = this.nz(ss[1], ss);
      ss[0] = close[1] < ss1 ? Math.min(ss[0], ss1) : ss[0];
      var dir = this.ts(1, id + '4', _tf);
      dir[0] = this.nz(dir[1], dir[0]);
      dir[0] = dir[0] === -1 && close[0] > ss1 ? 1 : dir[0] === 1 && close[0] < ls1 ? -1 : dir[0];
      var plot = this.ts(dir[0] === 1 ? ls[0] : ss[0], id + '5', _tf);
      return [plot, this.neg(dir, id + '6')];
    }
    /** Symmetrically Weighted Moving Average
     * @param {TS} src - Input
     * @return {TS} - New time-series
     */

  }, {
    key: "swma",
    value: function swma(src, _id) {
      var id = this._tsid(_id, "swma");

      var sum = src[3] * this.SWMA[0] + src[2] * this.SWMA[1] + src[1] * this.SWMA[2] + src[0] * this.SWMA[3];
      return this.ts(sum, id, src.__tf__);
    }
    /** Creates a new Symbol.
     * @param {*} x - Something, depends on arg variation
     * @param {*} y - Something, depends on arg variation
     * @return {Sym}
     * Argument variations:
     * <data>(Array), [<params>(Object)]
     * <ts>(TS), [<params>(Object)]
     * <point>(Number), [<params>(Object)]
     * <tf>(String) 1m, 5m, 1H, etc. (uses main OHLCV)
     * Params object: {
     *  id: <String>,
     *  tf: <String|Number>,
     *  aggtype: <String> (TODO: Type of aggregation)
     *  format: <String> (Data format, e.g. "time:price:vol")
     *  window: <String|Number> (Aggregation window)
     *  main <true|false> (Use as the main chart)
     * }
     */

  }, {
    key: "sym",
    value: function sym(x, y, _id) {
      if (y === void 0) {
        y = {};
      }

      var id = y.id || this._tsid(_id, "sym");

      y.id = id;

      if (this.env.syms[id]) {
        this.env.syms[id].update(x);
        return this.env.syms[id];
      }

      switch ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(x)) {
        case 'object':
          var sym = new _symbol_js__WEBPACK_IMPORTED_MODULE_9__.Sym(x, y);
          this.env.syms[id] = sym;

          if (x.__id__) {
            sym.data_type = _symbol_js__WEBPACK_IMPORTED_MODULE_9__.TSS;
          } else {
            sym.data_type = _symbol_js__WEBPACK_IMPORTED_MODULE_9__.ARR;
          }

          break;

        case 'number':
          sym = new _symbol_js__WEBPACK_IMPORTED_MODULE_9__.Sym(null, y);
          sym.data_type = _symbol_js__WEBPACK_IMPORTED_MODULE_9__.NUM;
          break;

        case 'string':
          y.tf = x;
          sym = new _symbol_js__WEBPACK_IMPORTED_MODULE_9__.Sym(_script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.data.ohlcv.data, y);
          sym.data_type = _symbol_js__WEBPACK_IMPORTED_MODULE_9__.ARR;
          break;
      }

      this.env.syms[id] = sym;
      return sym;
    }
    /** Tangent function
     * @param {number} x The variable
     * @return {number}
     */

  }, {
    key: "tan",
    value: function tan(x) {
      return Math.tan(x);
    }
  }, {
    key: "time",
    value: function time(res, sesh) {// TODO: this
    }
  }, {
    key: "timestamp",
    value: function timestamp() {// TODO: this
    }
    /** True Range
     * @param {TS} fixnan - Fix NaN values
     * @return {TS} - New time-series
     */

  }, {
    key: "tr",
    value: function tr(fixnan, _id, _tf) {
      if (fixnan === void 0) {
        fixnan = false;
      }

      var id = this._tsid(_id, "tr(".concat(fixnan, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var res = 0;

      if (this.na(close[1]) && fixnan) {
        res = high[0] - low[0];
      } else {
        res = Math.max(high[0] - low[0], Math.abs(high[0] - close[1]), Math.abs(low[0] - close[1]));
      }

      return this.ts(res, id, _tf);
    }
    /** True strength index
     * @param {TS} src - Input
     * @param {number} short - Short length
     * @param {number} long - Long length
     * @return {TS} - New time-series
     */

  }, {
    key: "tsi",
    value: function tsi(src, _short, _long, _id) {
      var id = this._tsid(_id, "tsi(".concat(_short, ",").concat(_long, ")"));

      var m = this.change(src, 1, id + '0');
      var m_abs = this.ts(Math.abs(m[0]), id + '1', src.__tf__);
      var tsi = this.ema(this.ema(m, _long, id + '1'), _short, id + '2')[0] / this.ema(this.ema(m_abs, _long, id + '3'), _short, id + '4')[0];
      return this.ts(tsi, id, src.__tf__);
    }
  }, {
    key: "variance",
    value: function variance(src, len) {// TODO: this
    }
  }, {
    key: "vwap",
    value: function vwap(src) {// TODO: this
    }
    /** Volume Weighted Moving Average
     * @param {TS} src - Input
     * @param {number} len - length
     * @return {TS} - New time-series
     */

  }, {
    key: "vwma",
    value: function vwma(src, len, _id) {
      var id = this._tsid(_id, "vwma(".concat(len, ")"));

      var vol = this.env.shared.vol;
      var sxv = this.ts(src[0] * vol[0], id + '1', src.__tf__);
      var res = this.sma(sxv, len, id + '2')[0] / this.sma(vol, len, id + '3')[0];
      return this.ts(res, id + '4', src.__tf__);
    }
    /** Week of year, literally
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Week
     */

  }, {
    key: "weekofyear",
    value: function weekofyear(time) {
      var date = new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t);
      date.setUTCHours(0, 0, 0, 0);
      date.setDate(date.getUTCDate() + 3 - (date.getUTCDay() + 6) % 7);
      var week1 = new Date(date.getUTCFullYear(), 0, 4);
      return 1 + Math.round(((date - week1) / 86400000 - 3 + (week1.getUTCDay() + 6) % 7) / 7);
    }
    /** Weighted moving average
     * @param {TS} src - Input
     * @param {number} len - length
     * @return {TS} - New time-series
     */

  }, {
    key: "wma",
    value: function wma(src, len, _id) {
      var id = this._tsid(_id, "wma(".concat(len, ")"));

      var norm = 0;
      var sum = 0;

      for (var i = 0; i < len; i++) {
        var w = (len - i) * len;
        norm += w;
        sum += src[i] * w;
      }

      return this.ts(sum / norm, id, src.__tf__);
    }
    /** Williams %R
     * @param {number} len - length
     * @return {TS} - New time-series
     */

  }, {
    key: "wpr",
    value: function wpr(len, _id, _tf) {
      var id = this._tsid(_id, "wpr(".concat(len, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var hh = this.highest(high, len, id);
      var ll = this.lowest(low, len, id);
      var res = (hh[0] - close[0]) / (hh[0] - ll[0]);
      return this.ts(-res * 100, id, _tf);
    }
    /** Year
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Year
     */

  }, {
    key: "year",
    value: function year(time) {
      return new Date(time || _script_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.t).getUTCFullYear();
    }
  }]);

  return ScriptStd;
}();



/***/ }),

/***/ "./src/helpers/script_ts.js":
/*!**********************************!*\
  !*** ./src/helpers/script_ts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TS)
/* harmony export */ });
// Timeseries for scripts
function TS(id, arr, len) {
  arr.__id__ = id;
  arr.__len__ = len;
  return arr;
}

/***/ }),

/***/ "./src/helpers/script_utils.js":
/*!*************************************!*\
  !*** ./src/helpers/script_utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f_args": () => (/* binding */ f_args),
/* harmony export */   "f_body": () => (/* binding */ f_body),
/* harmony export */   "wrap_idxs": () => (/* binding */ wrap_idxs),
/* harmony export */   "make_module_lib": () => (/* binding */ make_module_lib),
/* harmony export */   "get_raw_src": () => (/* binding */ get_raw_src),
/* harmony export */   "tf_from_pair": () => (/* binding */ tf_from_pair),
/* harmony export */   "tf_from_str": () => (/* binding */ tf_from_str),
/* harmony export */   "get_fn_id": () => (/* binding */ get_fn_id),
/* harmony export */   "ovf": () => (/* binding */ ovf),
/* harmony export */   "nextt": () => (/* binding */ nextt),
/* harmony export */   "size_of_dss": () => (/* binding */ size_of_dss),
/* harmony export */   "size_of": () => (/* binding */ size_of),
/* harmony export */   "update": () => (/* binding */ update),
/* harmony export */   "now": () => (/* binding */ now)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stuff/constants.js */ "./src/stuff/constants.js");


var FDEFS = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*?)\)/gmi;
var SBRACKETS = /([$A-Z_][0-9A-Z_$\.]*)[\s]*?\[([^"^\[^\]]+?)\]/gmi;
var TFSTR = /(\d+)(\w*)/gm;
var BUF_INC = 5;
var tf_cache = {};
function f_args(src) {
  FDEFS.lastIndex = 0;
  var m = FDEFS.exec(src);

  if (m) {
    var fkeyword = m[1].trim();
    var fname = m[2].trim();
    var fargs = m[3].trim();
    return fargs.split(',').map(function (x) {
      return x.trim();
    });
  }

  return [];
}
function f_body(src) {
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
}
function wrap_idxs(src, pre) {
  if (pre === void 0) {
    pre = '';
  }

  SBRACKETS.lastIndex = 0;
  var changed = false;

  do {
    var m = SBRACKETS.exec(src);

    if (m) {
      var vname = m[1].trim();
      var vindex = m[2].trim();

      if (vindex === '0' || parseInt(vindex) < BUF_INC) {
        continue;
      }

      switch (vname) {
        case 'let':
        case 'var':
        case 'return':
          continue;
      } //let wrap = `${pre}_v(${vname}, ${vindex})[${vindex}]`


      var wrap = "".concat(vname, "[").concat(pre, "_i(").concat(vindex, ", ").concat(vname, ")]");
      src = src.replace(m[0], wrap);
      changed = true;
    }
  } while (m);

  return changed ? src : src;
} // Get all module helper classes

function make_module_lib(mod) {
  var lib = {};

  for (var k in mod) {
    if (k === 'main' || k === 'id') continue;
    var a = f_args(mod[k]);
    lib[k] = new Function(a, f_body(mod[k]));
  }

  return lib;
}
function get_raw_src(f) {
  if (typeof f === 'string') return f;
  var src = f.toString();
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
} // Get tf in ms from pairs such (`15`, `m`)

function tf_from_pair(num, pf) {
  var mult = 1;

  switch (pf) {
    case 's':
      mult = _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__.default.SECOND;
      break;

    case 'm':
      mult = _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__.default.MINUTE;
      break;

    case 'H':
      mult = _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__.default.HOUR;
      break;

    case 'D':
      mult = _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__.default.DAY;
      break;

    case 'W':
      mult = _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__.default.WEEK;
      break;

    case 'M':
      mult = _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__.default.MONTH;
      break;

    case 'Y':
      mult = _stuff_constants_js__WEBPACK_IMPORTED_MODULE_1__.default.YEAR;
      break;
  }

  return parseInt(num) * mult;
}
function tf_from_str(str) {
  if (typeof str === 'number') return str;
  if (tf_cache[str]) return tf_cache[str];
  TFSTR.lastIndex = 0;
  var m = TFSTR.exec(str);

  if (m) {
    tf_cache[str] = tf_from_pair(m[1], m[2]);
    return tf_cache[str];
  }

  return undefined;
}
function get_fn_id(pre, id) {
  return pre + '-' + id.split('<-').pop();
} // Apply filter for all new overlays

function ovf(obj, f) {
  var nw = {};

  for (var id in obj) {
    nw[id] = {};

    for (var k in obj[id]) {
      if (k === 'data') continue;
      nw[id][k] = obj[id][k];
    }

    nw[id].data = f(obj[id].data);
  }

  return nw;
} // Return index of the next element in
// dataset (since t). Impl: simple binary search
// TODO: optimize (remember the penultimate
// iteration and start from there)

function nextt(data, t, ti) {
  if (ti === void 0) {
    ti = 0;
  }

  var i0 = 0;
  var iN = data.length - 1;

  while (i0 <= iN) {
    var mid = Math.floor((i0 + iN) / 2);

    if (data[mid][ti] === t) {
      return mid;
    } else if (data[mid][ti] < t) {
      i0 = mid + 1;
    } else {
      iN = mid - 1;
    }
  }

  return t < data[mid][ti] ? mid : mid + 1;
} // Estimated size of datasets

function size_of_dss(data) {
  var bytes = 0;

  for (var id in data) {
    if (data[id].data && data[id].data[0]) {
      var s0 = size_of(data[id].data[0]);
      bytes += s0 * data[id].data.length;
    }
  }

  return bytes;
} // Used to measure the size of dataset

function size_of(object) {
  var list = [],
      stack = [object],
      bytes = 0;

  while (stack.length) {
    var value = stack.pop();

    var type = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(value);

    if (type === 'boolean') {
      bytes += 4;
    } else if (type === 'string') {
      bytes += value.length * 2;
    } else if (type === 'number') {
      bytes += 8;
    } else if (type === 'object' && list.indexOf(value) === -1) {
      list.push(value);

      for (var i in value) {
        stack.push(value[i]);
      }
    }
  }

  return bytes;
} // Update onchart/offchart

function update(data, val) {
  var i = data.length - 1;
  var last = data[i];

  if (!last || val[0] > last[0]) {
    data.push(val);
  } else {
    data[i] = val;
  }
}
function now() {
  return new Date().getTime();
}

/***/ }),

/***/ "./src/helpers/symbol.js":
/*!*******************************!*\
  !*** ./src/helpers/symbol.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sym),
/* harmony export */   "Sym": () => (/* binding */ Sym),
/* harmony export */   "ARR": () => (/* binding */ ARR),
/* harmony export */   "TSS": () => (/* binding */ TSS),
/* harmony export */   "NUM": () => (/* binding */ NUM)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _script_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script_utils.js */ "./src/helpers/script_utils.js");
/* harmony import */ var _script_engine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script_engine.js */ "./src/helpers/script_engine.js");
/* harmony import */ var _script_ts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script_ts.js */ "./src/helpers/script_ts.js");
/* harmony import */ var _sampler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sampler.js */ "./src/helpers/sampler.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Symbol (contains several samplers, e.g. high, low, close...)




var OHLCV = ['open', 'high', 'low', 'close', 'vol'];
var ARR = 0;
var TSS = 1;
var NUM = 2;

var Sym = /*#__PURE__*/function () {
  function Sym(data, params) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Sym);

    this.id = params.id;
    this.tf = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.tf_from_str(params.tf);
    this.format = params.format;
    this.aggtype = params.aggtype || 'ohlcv';
    this.window = params.window;
    this.fillgaps = params.fillgaps;
    this.data = data;
    this.data_type = ARR;
    this.main = !!params.main;
    this.idx = this.data_idx();
    this.tmap = {};
    this.tf = this.tf || _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.tf;
    if (this.main) this.tf = _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.tf; // Create a bunch of OHLCV samplers for
    // sparse data

    if (this.aggtype === 'ohlcv') {
      var _iterator = _createForOfIteratorHelper(OHLCV),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;
          this[id] = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_4__.default)("".concat(this.id, "_").concat(id), []);
          this[id].__fn__ = (0,_sampler_js__WEBPACK_IMPORTED_MODULE_5__.default)(id).bind(this[id]);
          this[id].__tf__ = this.tf;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Create regular TSs & just feed them with a
    // data points from the dataset
    // TODO: different TS configurations depending
    // on this.format


    if (this.aggtype === 'copy') {
      var _iterator2 = _createForOfIteratorHelper(OHLCV),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;
          this[id] = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_4__.default)("".concat(this.id, "_").concat(id), []);
          this[id].__tf__ = this.tf;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      for (var i = 0; i < this.data.length; i++) {
        this.tmap[this.data[i][0]] = i;
      }
    } // Custom agg function (value calculated for the
    // current window)


    if (typeof this.aggtype === 'function') {
      this.close = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_4__.default)("".concat(this.id, "_close"), []);
      this.close.__fn__ = this.aggtype;
      this.close.__tf__ = this.tf;
    }

    if (this.main) {
      if (!this.tf) throw 'Main tf should be defined';
      _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.custom_main = this;
      var t0 = this.data[0][0];
      _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.t = t0 - t0 % this.tf;
      this.update(null, _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.t); // First candle should be formed before any updates()

      _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.data.ohlcv.data.length = 0;
      _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.data.ohlcv.data.push([_script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.t, this.open[0], this.high[0], this.low[0], this.close[0], this.vol[0]]);
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Sym, [{
    key: "update",
    value: function update(x, t) {
      if (this.aggtype === 'ohlcv') {
        return this.update_ohlcv(x, t);
      } else if (this.aggtype === 'copy') {
        return this.update_copy(x, t);
      } else if (typeof this.aggtype === 'function') {
        return this.update_custom(x, t);
      }
    }
  }, {
    key: "update_ohlcv",
    value: function update_ohlcv(x, t) {
      // Timestamp of the target candle, can be
      // current or the next (if we are sampling
      // the main chart)
      t = t || _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.t;
      var idx = this.idx;

      switch (this.data_type) {
        case ARR:
          if (t > this.data[this.data.length - 1][0]) return false;
          var t0 = this.window ? t - this.window + this.tf : t;
          var dt = t0 % this.tf;
          t0 -= dt;
          var i0 = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextt(this.data, t0);
          if (i0 >= this.data.length) return false;
          var t1 = t + _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.tf; // Flush volume before the next window,
          // but not before a new candle

          if (t < this.vol.__t0__ + this.tf) this.vol[0] = 0;
          var noevent = true;

          for (var i = i0; i < this.data.length; i++) {
            noevent = false;
            var dp = this.data[i];
            if (dp[idx.time] >= t1) break;

            this.open.__fn__(dp[idx.open], t);

            this.high.__fn__(dp[idx.high], t);

            this.low.__fn__(dp[idx.low], t);

            this.close.__fn__(dp[idx.close], t);

            this.vol.__fn__(dp[idx.vol], t);
          }

          if (noevent) {
            if (this.fillgaps === false && !this.main) return false;
            var last = this.close[0];

            this.open.__fn__(last, t);

            this.high.__fn__(last, t);

            this.low.__fn__(last, t);

            this.close.__fn__(last, t);

            this.vol.__fn__(0, t);
          }

          break;

        case TSS:
          // TODO: this
          break;

        case NUM:
          // TODO: this
          break;
      }

      return true;
    }
  }, {
    key: "update_copy",
    value: function update_copy(x, t) {
      t = t || _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.t; // Assuming that we got an ohlcv dataset

      var i = this.tmap[t];
      var s = this.data[i];
      var ts0 = this.__t0__;

      if (!ts0 || t >= ts0 + this.tf) {
        for (var k = 0; k < 5; k++) {
          var tsn = OHLCV[k];
          this[tsn].unshift(undefined);
        }

        this.__t0__ = t - t % this.tf;
        var last = this.data.length - 1;

        if (this.__t0__ === this.data[last][0]) {
          this.tmap[this.__t0__] = last;
          s = this.data[last];
        }
      }

      if (s) {
        for (var k = 0; k < 5; k++) {
          var _tsn = OHLCV[k];
          this[_tsn][0] = s[k + 1];
        }
      } else if (this.fillgaps) {
        for (var k = 0; k < 5; k++) {
          var _tsn2 = OHLCV[k];
          this[_tsn2][0] = this.close[1];
        }
      }
    }
  }, {
    key: "update_custom",
    value: function update_custom(x, t) {
      t = t || _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.t;
      var idx = this.idx;

      switch (this.data_type) {
        case ARR:
          if (!this.data.length) return false;
          if (t > this.data[this.data.length - 1][0]) return false;
          var t0 = this.window ? t - this.window + this.tf : t;
          var dt = t0 % this.tf;
          t0 -= dt;
          var i0 = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextt(this.data, t0);
          if (i0 >= this.data.length) return false;
          var t1 = t + _script_engine_js__WEBPACK_IMPORTED_MODULE_3__.default.tf;
          var sub = [];

          for (var i = i0; i < this.data.length; i++) {
            var dp = this.data[i];
            if (dp[idx.time] >= t1) break;
            sub.push(dp);
          }

          if (sub.length || this.fillgaps === false) {
            var val = this.close.__fn__(sub); // TODO: prob a bug

          } else if (this.fillgaps !== false) {
            val = this.close[0];
          }

          var ts0 = this.close.__t0__;

          if (!ts0 || t >= ts0 + this.tf) {
            this.close.unshift(val);
            this.close.__t0__ = t - t % this.tf;
          } else {
            this.close[0] = val;
          }

          break;

        case TSS:
          // TODO: this
          break;

        case NUM:
          // TODO: this
          break;
      }

      return true;
    } // Calculates data indices from the format

  }, {
    key: "data_idx",
    value: function data_idx() {
      var idx = {};

      switch (this.aggtype) {
        case 'ohlcv':
          // Trying to detect the format from the
          // first data point
          if (!this.format) {
            var x0 = this.data[0];

            if (!x0 || x0.length === 6) {
              this.format = 'time:open:high:low:close:vol';
            } else if (x0.length === 3) {
              this.format = 'time:open,high,low,close:vol';
            }
          }

          break;

        default:
          this.format = 'time:close';
          break;
      }

      this.format.split(':').forEach(function (x, i) {
        if (!x.length) return;
        var list = x.split(',');
        list.forEach(function (y) {
          return idx[y] = i;
        });
      });
      return idx;
    }
  }]);

  return Sym;
}();




/***/ }),

/***/ "./src/helpers/symstd.js":
/*!*******************************!*\
  !*** ./src/helpers/symstd.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_ts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script_ts.js */ "./src/helpers/script_ts.js");
/* harmony import */ var _sampler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sampler.js */ "./src/helpers/sampler.js");
/* harmony import */ var _script_engine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script_engine.js */ "./src/helpers/script_engine.js");
/* harmony import */ var _script_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script_utils.js */ "./src/helpers/script_utils.js");
/* harmony import */ var _script_std_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script_std.js */ "./src/helpers/script_std.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Parse non-default symbols, e.g. close1D, hlc3
// & inject the corresponding TSs or samplers





var SYMTF = /(open|high|low|close|vol)(\d+)(\w*)/gm;
var FNSTD = /(a?tr|kcw?|dmi|sar|supertrend|wpr)(\d+?\w*)\s*\(/gm;
var SYMSTD = /(?:hl2|hlc3|ohlc4)/gm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parse: function parse(s) {
    var _this = this;

    var ss = s.src;
    var all = "".concat(ss.init_src, "\n").concat(ss.upd_src, "\n").concat(ss.post_src);
    SYMTF.lastIndex = 0;
    FNSTD.lastIndex = 0;
    SYMSTD.lastIndex = 0;

    do {
      var m = SYMTF.exec(all);

      if (m) {
        if (m[0] in _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss) continue;
        var ts = _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss[m[0]] = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_0__.default)(m[0], []);
        ts.__tf__ = _script_utils_js__WEBPACK_IMPORTED_MODULE_3__.tf_from_pair(m[2], m[3]);
        ts.__fn__ = (0,_sampler_js__WEBPACK_IMPORTED_MODULE_1__.default)(m[1], true).bind(ts);
      }
    } while (m);

    do {
      var m = SYMSTD.exec(all);

      if (m) {
        if (m[0] in _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss) continue;
        this.parse_ts_sym(m[0]);
      }
    } while (m);

    do {
      var m = FNSTD.exec(all);

      if (m) {
        var _ret = function () {
          var fn = m[1] + m[2];
          var tf = m[2];
          if (fn in _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus) return "continue";

          switch (m[1]) {
            case 'tr':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (fixnan, _id) {
                if (fixnan === void 0) {
                  fixnan = false;
                }

                return this.tr(fixnan, _id, tf);
              };

              break;

            case 'atr':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (len, _id) {
                return this.atr(len, _id, tf);
              };

              break;

            case 'kc':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (src, len, mult, use_tr, _id) {
                if (use_tr === void 0) {
                  use_tr = true;
                }

                return this.kc(src, len, mult, use_tr, _id, tf);
              };

              break;

            case 'kcw':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (src, len, mult, use_tr, _id) {
                if (use_tr === void 0) {
                  use_tr = true;
                }

                return this.kcw(src, len, mult, use_tr, _id, tf);
              };

              break;

            case 'dmi':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (len, smooth, _id) {
                return this.dmi(len, smooth, _id, tf);
              };

              break;

            case 'sar':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (start, inc, max, _id) {
                return this.sar(start, inc, max, _id, tf);
              };

              break;

            case 'supertrend':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (factor, atrlen, _id) {
                return this.supertrend(factor, atrlen, _id, tf);
              };

              break;

            case 'wpr':
              _this.deps(['high', 'low', 'close'], m[2]);

              _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.std_plus[fn] = function (len, _id) {
                return this.wpr(len, _id, tf);
              };

              break;
          }
        }();

        if (_ret === "continue") continue;
      }
    } while (m);
  },
  parse_ts_sym: function parse_ts_sym(sym, tf) {
    switch (sym) {
      // Timeseries
      case 'hl2':
        _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss.hl2 = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_0__.default)('hl2', []);

        _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss.hl2.__fn__ = function () {
          return (_script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.high[0] + _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.low[0]) * 0.5;
        };

        break;

      case 'hlc3':
        _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss.hlc3 = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_0__.default)('hlc3', []);

        _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss.hlc3.__fn__ = function () {
          return (_script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.high[0] + _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.low[0] + _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.close[0]) / 3;
        };

        break;

      case 'ohlc4':
        _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss.ohlc4 = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_0__.default)('ohlc4', []);

        _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss.ohlc4.__fn__ = function () {
          return (_script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.open[0] + _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.high[0] + _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.low[0] + _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.close[0]) * 0.25;
        };

        break;
    }
  },
  deps: function deps(types, tf) {
    var _iterator = _createForOfIteratorHelper(types),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var sym = type + tf;
        if (sym in _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss) continue;
        var ts = _script_engine_js__WEBPACK_IMPORTED_MODULE_2__.default.tss[sym] = (0,_script_ts_js__WEBPACK_IMPORTED_MODULE_0__.default)(sym, []);
        ts.__tf__ = _script_utils_js__WEBPACK_IMPORTED_MODULE_3__.tf_from_str(tf);
        ts.__fn__ = (0,_sampler_js__WEBPACK_IMPORTED_MODULE_1__.default)(type, true).bind(ts);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
});

/***/ }),

/***/ "./src/stuff/constants.js":
/*!********************************!*\
  !*** ./src/stuff/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SECOND = 1000;
var MINUTE = SECOND * 60;
var MINUTE3 = MINUTE * 3;
var MINUTE5 = MINUTE * 5;
var MINUTE15 = MINUTE * 15;
var MINUTE30 = MINUTE * 30;
var HOUR = MINUTE * 60;
var HOUR4 = HOUR * 4;
var HOUR12 = HOUR * 12;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = WEEK * 4;
var YEAR = DAY * 365;
var MONTHMAP = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // Grid time steps

var TIMESCALES = [YEAR * 10, YEAR * 5, YEAR * 3, YEAR * 2, YEAR, MONTH * 6, MONTH * 4, MONTH * 3, MONTH * 2, MONTH, DAY * 15, DAY * 10, DAY * 7, DAY * 5, DAY * 3, DAY * 2, DAY, HOUR * 12, HOUR * 6, HOUR * 3, HOUR * 1.5, HOUR, MINUTE30, MINUTE15, MINUTE * 10, MINUTE5, MINUTE * 2, MINUTE]; // Grid $ steps

var $SCALES = [0.05, 0.1, 0.2, 0.25, 0.5, 0.8, 1, 2, 5];
var ChartConfig = {
  SBMIN: 60,
  // Minimal sidebar px
  SBMAX: Infinity,
  // Max sidebar, px
  TOOLBAR: 57,
  // Toolbar width px
  TB_ICON: 25,
  // Toolbar icon size px
  TB_ITEM_M: 6,
  // Toolbar item margin px
  TB_ICON_BRI: 1,
  // Toolbar icon brightness
  TB_ICON_HOLD: 420,
  // ms, wait to expand
  TB_BORDER: 1,
  // Toolbar border px
  TB_B_STYLE: 'dotted',
  // Toolbar border style
  TOOL_COLL: 7,
  // Tool collision threshold
  EXPAND: 0.15,
  // %/100 of range
  CANDLEW: 0.6,
  // %/100 of step
  GRIDX: 100,
  // px
  GRIDY: 47,
  // px
  BOTBAR: 28,
  // px
  PANHEIGHT: 22,
  // px
  DEFAULT_LEN: 50,
  // candles
  MINIMUM_LEN: 5,
  // candles,
  MIN_ZOOM: 25,
  // candles
  MAX_ZOOM: 1000,
  // candles,
  VOLSCALE: 0.15,
  // %/100 of height
  UX_OPACITY: 0.9,
  // Ux background opacity
  ZOOM_MODE: 'tv',
  // 'tv' or 'tl'
  L_BTN_SIZE: 21,
  // Legend Button size, px
  L_BTN_MARGIN: '-6px 0 -6px 0',
  // css margin
  SCROLL_WHEEL: 'prevent' // 'pass', 'click'

};
ChartConfig.FONT = "11px -apple-system,BlinkMacSystemFont,\n    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,\n    Fira Sans,Droid Sans,Helvetica Neue,\n    sans-serif";
var IB_TF_WARN = "When using IB mode you should specify " + "timeframe ('tf' filed in 'chart' object)," + "otherwise you can get an unexpected behaviour";
var MAP_UNIT = {
  "1s": SECOND,
  "5s": SECOND * 5,
  "10s": SECOND * 10,
  "20s": SECOND * 20,
  "30s": SECOND * 30,
  "1m": MINUTE,
  "3m": MINUTE3,
  "5m": MINUTE5,
  "15m": MINUTE15,
  "30m": MINUTE30,
  "1H": HOUR,
  "2H": HOUR * 2,
  "3H": HOUR * 3,
  "4H": HOUR4,
  "12H": HOUR12,
  "1D": DAY,
  "1W": WEEK,
  "1M": MONTH,
  "1Y": YEAR
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  SECOND: SECOND,
  MINUTE: MINUTE,
  MINUTE5: MINUTE5,
  MINUTE15: MINUTE15,
  MINUTE30: MINUTE30,
  HOUR: HOUR,
  HOUR4: HOUR4,
  DAY: DAY,
  WEEK: WEEK,
  MONTH: MONTH,
  YEAR: YEAR,
  MONTHMAP: MONTHMAP,
  TIMESCALES: TIMESCALES,
  $SCALES: $SCALES,
  ChartConfig: ChartConfig,
  map_unit: MAP_UNIT,
  IB_TF_WARN: IB_TF_WARN
});

/***/ }),

/***/ "./src/stuff/linreg.js":
/*!*****************************!*\
  !*** ./src/stuff/linreg.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ regression)
/* harmony export */ });
/**
 * Simple linear regression
 *
 * @param {Array.<number>} data
 * @return {Function}
 */
function regression(data, len, offset) {
  data = data.slice(0, len).reverse().map(function (x, i) {
    return [i, x];
  });
  var sum_x = 0,
      sum_y = 0,
      sum_xy = 0,
      sum_xx = 0,
      count = 0,
      m,
      b; // calculate sums

  for (var i = 0, len = data.length; i < len; i++) {
    if (!data[i]) return NaN;
    var point = data[i];
    sum_x += point[0];
    sum_y += point[1];
    sum_xx += point[0] * point[0];
    sum_xy += point[0] * point[1];
    count++;
  } // calculate slope (m) and y-intercept (b) for f(x) = m * x + b


  m = (count * sum_xy - sum_x * sum_y) / (count * sum_xx - sum_x * sum_x);
  b = sum_y / count - m * sum_x / count;
  return m * (data.length - 1 - offset) + b;
}

/***/ }),

/***/ "./src/stuff/utils.js":
/*!****************************!*\
  !*** ./src/stuff/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var arrayslicer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! arrayslicer */ "./node_modules/arrayslicer/lib/index.js");
/* harmony import */ var arrayslicer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(arrayslicer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/stuff/constants.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  clamp: function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  },
  add_zero: function add_zero(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
  },
  // Start of the day (zero millisecond)
  day_start: function day_start(t) {
    var start = new Date(t);
    return start.setUTCHours(0, 0, 0, 0);
  },
  // Start of the month
  month_start: function month_start(t) {
    var date = new Date(t);
    return Date.UTC(date.getFullYear(), date.getMonth(), 1);
  },
  // Start of the year
  year_start: function year_start(t) {
    return Date.UTC(new Date(t).getFullYear());
  },
  get_year: function get_year(t) {
    if (!t) return undefined;
    return new Date(t).getUTCFullYear();
  },
  get_month: function get_month(t) {
    if (!t) return undefined;
    return new Date(t).getUTCMonth();
  },
  // Nearest in array
  nearest_a: function nearest_a(x, array) {
    var dist = Infinity;
    var val = null;
    var index = -1;

    for (var i = 0; i < array.length; i++) {
      var xi = array[i];

      if (Math.abs(xi - x) < dist) {
        dist = Math.abs(xi - x);
        val = xi;
        index = i;
      }
    }

    return [index, val];
  },
  round: function round(num, decimals) {
    if (decimals === void 0) {
      decimals = 8;
    }

    return parseFloat(num.toFixed(decimals));
  },
  // Strip? No, it's ugly floats in js
  strip: function strip(number) {
    return parseFloat(parseFloat(number).toPrecision(12));
  },
  get_day: function get_day(t) {
    return t ? new Date(t).getDate() : null;
  },
  // Update array keeping the same reference
  overwrite: function overwrite(arr, new_arr) {
    arr.splice.apply(arr, [0, arr.length].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(new_arr)));
  },
  // Copy layout in reactive way
  copy_layout: function copy_layout(obj, new_obj) {
    for (var k in obj) {
      if (Array.isArray(obj[k])) {
        // (some offchart indicators are added/removed)
        // we need to update layout in a reactive way
        if (obj[k].length !== new_obj[k].length) {
          this.overwrite(obj[k], new_obj[k]);
          continue;
        }

        for (var m in obj[k]) {
          Object.assign(obj[k][m], new_obj[k][m]);
        }
      } else {
        Object.assign(obj[k], new_obj[k]);
      }
    }
  },
  // Detects candles interval
  detect_interval: function detect_interval(ohlcv) {
    var len = Math.min(ohlcv.length - 1, 99);
    var min = Infinity;
    ohlcv.slice(0, len).forEach(function (x, i) {
      var d = ohlcv[i + 1][0] - x[0];
      if (d === d && d < min) min = d;
    }); // This saves monthly chart from being awkward

    if (min >= _constants_js__WEBPACK_IMPORTED_MODULE_2__.default.MONTH && min <= _constants_js__WEBPACK_IMPORTED_MODULE_2__.default.DAY * 30) {
      return _constants_js__WEBPACK_IMPORTED_MODULE_2__.default.DAY * 31;
    }

    return min;
  },
  // Gets numberic part of overlay id (e.g 'EMA_1' = > 1)
  get_num_id: function get_num_id(id) {
    return parseInt(id.split('_').pop());
  },
  // Fast filter. Really fast, like 10X
  fast_filter: function fast_filter(arr, t1, t2) {
    if (!arr.length) return [arr, undefined];

    try {
      var ia = new (arrayslicer__WEBPACK_IMPORTED_MODULE_1___default())(arr, "0");
      var res = ia.getRange(t1, t2);
      var i0 = ia.valpos[t1].next;
      return [res, i0];
    } catch (e) {
      // Something wrong with fancy slice lib
      // Fast fix: fallback to filter
      return [arr.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      }), 0];
    }
  },
  // Fast filter (index-based)
  fast_filter_i: function fast_filter_i(arr, t1, t2) {
    if (!arr.length) return [arr, undefined];
    var i1 = Math.floor(t1);
    if (i1 < 0) i1 = 0;
    var i2 = Math.floor(t2 + 1);
    var res = arr.slice(i1, i2);
    return [res, i1];
  },
  // Nearest indexes (left and right)
  fast_nearest: function fast_nearest(arr, t1) {
    var ia = new (arrayslicer__WEBPACK_IMPORTED_MODULE_1___default())(arr, "0");
    ia.fetch(t1);
    return [ia.nextlow, ia.nexthigh];
  },
  now: function now() {
    return new Date().getTime();
  },
  pause: function pause(delay) {
    return new Promise(function (rs, rj) {
      return setTimeout(rs, delay);
    });
  },
  // Limit crazy wheel delta values
  smart_wheel: function smart_wheel(delta) {
    var abs = Math.abs(delta);

    if (abs > 500) {
      return (200 + Math.log(abs)) * Math.sign(delta);
    }

    return delta;
  },
  // Parse the original mouse event to find deltaX
  get_deltaX: function get_deltaX(event) {
    return event.originalEvent.deltaX / 12;
  },
  // Parse the original mouse event to find deltaY
  get_deltaY: function get_deltaY(event) {
    return event.originalEvent.deltaY / 12;
  },
  // Apply opacity to a hex color
  apply_opacity: function apply_opacity(c, op) {
    if (c.length === 7) {
      var n = Math.floor(op * 255);
      n = this.clamp(n, 0, 255);
      c += n.toString(16);
    }

    return c;
  },
  // Parse timeframe or return value in ms
  parse_tf: function parse_tf(smth) {
    if (typeof smth === 'string') {
      return _constants_js__WEBPACK_IMPORTED_MODULE_2__.default.map_unit[smth];
    } else {
      return smth;
    }
  },
  // Detect index shift between the main data sub
  // and the overlay's sub (for IB-mode)
  index_shift: function index_shift(sub, data) {
    // Find the second timestamp (by value)
    if (!data.length) return 0;
    var first = data[0][0];
    var second;

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] !== first) {
        second = data[i][0];
        break;
      }
    }

    for (var j = 0; j < sub.length; j++) {
      if (sub[j][0] === second) {
        return j - i;
      }
    }

    return 0;
  },
  // Fallback fix for Brave browser
  // https://github.com/brave/brave-browser/issues/1738
  measureText: function measureText(ctx, text, tv_id) {
    var m = ctx.measureTextOrg(text);

    if (m.width === 0) {
      var doc = document;
      var id = 'tvjs-measure-text';
      var el = doc.getElementById(id);

      if (!el) {
        var base = doc.getElementById(tv_id);
        el = doc.createElement("div");
        el.id = id;
        el.style.position = 'absolute';
        el.style.top = '-1000px';
        base.appendChild(el);
      }

      if (ctx.font) el.style.font = ctx.font;
      el.innerText = text.replace(/ /g, '.');
      return {
        width: el.offsetWidth
      };
    } else {
      return m;
    }
  },
  uuid: function uuid(temp) {
    if (temp === void 0) {
      temp = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    }

    return temp.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  },
  uuid2: function uuid2() {
    return this.uuid('xxxxxxxxxxxx');
  },
  // Delayed warning, f = condition lambda fn
  warn: function warn(f, text, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    setTimeout(function () {
      if (f()) console.warn(text);
    }, delay);
  },
  // Checks if script props updated
  // (and not style settings or something else)
  is_scr_props_upd: function is_scr_props_upd(n, prev) {
    var p = prev.find(function (x) {
      return x.v.$uuid === n.v.$uuid;
    });
    if (!p) return false;
    var props = n.p.settings.$props;
    if (!props) return false;
    return props.some(function (x) {
      return n.v[x] !== p.v[x];
    });
  },
  // Checks if it's time to make a script update
  // (based on execInterval in ms)
  delayed_exec: function delayed_exec(v) {
    if (!v.script || !v.script.execInterval) return true;
    var t = this.now();
    var dt = v.script.execInterval;

    if (!v.settings.$last_exec || t > v.settings.$last_exec + dt) {
      v.settings.$last_exec = t;
      return true;
    }

    return false;
  },
  // Format names such 'RSI, $length', where
  // length - is one of the settings
  format_name: function format_name(ov) {
    if (!ov.name) return undefined;
    var name = ov.name;

    for (var k in ov.settings || {}) {
      var val = ov.settings[k];
      var reg = new RegExp("\\$".concat(k), 'g');
      name = name.replace(reg, val);
    }

    return name;
  },
  // Default cursor mode
  xmode: function xmode() {
    return this.is_mobile ? 'explore' : 'default';
  },
  default_prevented: function default_prevented(event) {
    if (event.original) {
      return event.original.defaultPrevented;
    }

    return event.defaultPrevented;
  },
  // WTF with modern web development
  is_mobile: function (w) {
    return 'onorientationchange' in w && (!!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || 'ontouchstart' in w || w.DocumentTouch && document instanceof w.DocumentTouch);
  }(typeof window !== 'undefined' ? window : {})
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/helpers/script_ww.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script_engine.js */ "./src/helpers/script_engine.js");
/* harmony import */ var _stuff_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stuff/utils.js */ "./src/stuff/utils.js");
/* harmony import */ var _script_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script_utils.js */ "./src/helpers/script_utils.js");
/* harmony import */ var _dataset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataset.js */ "./src/helpers/dataset.js");

// Web-worker






var data_requested = false

// DC => WW

self.onmessage = async e => {
    //console.log('Worker got:', e.data.type)
    switch(e.data.type) {

        case 'update-dc-settings':

            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.sett = e.data.data

            break

        case 'exec-script':

            var req = _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.data_required(e.data.data.s)
            if (req && !data_requested) {
                data_requested = true
                self.postMessage({
                    type: 'request-data', data: req
                })
            }
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.tf = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.tf_from_str(e.data.data.tf)
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.range = e.data.data.range
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.queue.push(e.data.data.s)
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.exec_all()

            break

        case 'exec-all-scripts':

            var req = _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.data_required(e.data.data.s)
            if (req && !data_requested) {
                data_requested = true
                self.postMessage({
                    type: 'request-data', data: req
                })
            }

            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.tf = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.tf_from_str(e.data.data.tf)
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.range = e.data.data.range
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.exec_all()

            break

        case 'upload-data':
            self.postMessage({ type: 'data-uploaded' })

            await _stuff_utils_js__WEBPACK_IMPORTED_MODULE_1__.default.pause(1)

            for (var id in e.data.data) {
                let data = e.data.data[id]
                _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.data[id] = new _dataset_js__WEBPACK_IMPORTED_MODULE_3__.DatasetWW(id, data)
            }

            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.recalc_size()
            data_requested = false
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.exec_all()

            break

        case 'upload-module':

            let lib = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.make_module_lib(e.data.data)
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.mods[e.data.data.id] = new (
                new Function(
                    'mod', 'se', 'lib',
                    _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.f_body(e.data.data.main)
                )
            )(e.data.data.id, _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default, lib)

            break

        case 'module-event':
            // TODO: this
            break

        case 'update-data':

            _dataset_js__WEBPACK_IMPORTED_MODULE_3__.DatasetWW.update_all(_script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default, e.data.data)

            if (e.data.data.ohlcv) {
                _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.update(e.data.data.ohlcv)
            }

            break

        case 'get-dataset':

            self.postMessage({
                id: e.data.id,
                data: _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.data[e.data.data]
            })

            break

        case 'dataset-op':

            await _stuff_utils_js__WEBPACK_IMPORTED_MODULE_1__.default.pause(1)

            if (e.data.data.id in _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.data) {
                _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.data[e.data.data.id].op(_script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default, e.data.data)
            }

            if (e.data.data.exec) _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.exec_all()

            break

        case 'update-ov-settings':

            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.tf = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.tf_from_str(e.data.data.tf)
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.range = e.data.data.range
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.exec_sel(e.data.data.delta)

            break

        case 'send-meta-info':

            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.tf = _script_utils_js__WEBPACK_IMPORTED_MODULE_2__.tf_from_str(e.data.data.tf)
            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.range = e.data.data.range

            break

        case 'remove-scripts':

            _script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.remove_scripts(e.data.data)

            break
    }

}

// WW => DC

_script_engine_js__WEBPACK_IMPORTED_MODULE_0__.default.send = (type, data) => {

    switch(type) {

        case 'overlay-data':
        case 'overlay-update':
        case 'engine-state':
        case 'modify-overlay':
        case 'module-data':
        case 'script-signal':

            self.postMessage({type, data})

            break

    }

}

})();

/******/ })()
;
//# sourceMappingURL=script_ww.worker.js.map