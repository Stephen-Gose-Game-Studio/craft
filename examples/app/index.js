(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Phaser"));
	else if(typeof define === 'function' && define.amd)
		define(["Phaser"], factory);
	else if(typeof exports === 'object')
		exports["$craft"] = factory(require("Phaser"));
	else
		root["$craft"] = factory(root["Phaser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var protoOptions = __webpack_require__(1);

	if (!Phaser) var Phaser = __webpack_require__(2);

	module.exports = function $craft(game) {
		var self = {};

		self.$sprite = __webpack_require__(3)(game, Phaser);
		self.$circle = self.$c = __webpack_require__(42)(game, Phaser);
		self.$graphic = __webpack_require__(43)(game, Phaser);
		self.$dot = self.$d = __webpack_require__(44)(game, Phaser);
		self.$rect = self.$box = __webpack_require__(45)(game, Phaser);
		self.$group = self.$g = __webpack_require__(46)(game, Phaser);

		return self;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		sprite: {
			$set: true,
			$tint: true,
			$into: true,
			$mid: true,
			$atlasImg: true,
			$atlasAnims: true,
			$fixPos: true,
			$copyPos: true,
			$align: true
		},
		graphic: {
			$set: true,
			$tint: true,
			$into: true,
			$mid: true,
			$fixPos: true,
			$copyPos: true,
			$align: true
		},
		group: {
			$set: true,
			$into: true,
			$fixPos: true,
			$add: true,
			$copyPos: true,
			$align: true
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(33);

	module.exports = function (game, Phaser) {
		return function $sprite(key, options) {
			var defaults = {
				x: 0,
				y: 0,
				frame: undefined,
				group: undefined
			};
			options = utils.extend({}, defaults, options);
			var tmpObj = game.add.sprite(options.x, options.y, key, options.frame, options.group);
			// prototypes
			bindProto(tmpObj, 'sprite');

			return tmpObj;
		};
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var self = {};

	if (!Phaser) var Phaser = __webpack_require__(2);
	if (true) {
		var _ = __webpack_require__(5);
	} else {
		var _ = require('lodash');
	}

	self.colorCase = function (color) {
		return color.indexOf('#') != -1 ? '0x' + color.replace(/#/g, '') : color;
	};

	self.extend = Phaser.Utils.extend.bind(null, true); // always deep;

	self.each = _.each;
	self.isArray = _.isArray;

	module.exports = self;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var self = {};
	self.each = __webpack_require__(6);
	// self.defaultsDeep = require('lodash/defaultsDeep');
	self.isArray = __webpack_require__(26);
	module.exports = self;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(7),
	    baseEach = __webpack_require__(8),
	    isArray = __webpack_require__(26),
	    toFunction = __webpack_require__(31);

	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior use `_.forIn` or `_.forOwn`
	 * for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => logs `1` then `2`
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => logs 'a' then 'b' (iteration order is not guaranteed)
	 */
	function forEach(collection, iteratee) {
	  return (typeof iteratee == 'function' && isArray(collection))
	    ? arrayEach(collection, iteratee)
	    : baseEach(collection, toFunction(iteratee));
	}

	module.exports = forEach;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(9),
	    createBaseEach = __webpack_require__(30);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(10),
	    keys = __webpack_require__(12);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(11);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(13),
	    baseKeys = __webpack_require__(14),
	    indexKeys = __webpack_require__(15),
	    isArrayLike = __webpack_require__(19),
	    isIndex = __webpack_require__(28),
	    isPrototype = __webpack_require__(29);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Used for built-in method references. */
	var objectProto = global.Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}

	module.exports = baseHas;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @type Function
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(16),
	    isArguments = __webpack_require__(17),
	    isArray = __webpack_require__(26),
	    isLength = __webpack_require__(24),
	    isString = __webpack_require__(27);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  return (isLength(length) && (isArray(object) || isString(object) || isArguments(object)))
	    ? baseTimes(length, String)
	    : null;
	}

	module.exports = indexKeys;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var isArrayLikeObject = __webpack_require__(18);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(19),
	    isObjectLike = __webpack_require__(25);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(20),
	    isFunction = __webpack_require__(22),
	    isLength = __webpack_require__(24);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(21);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var isObject = __webpack_require__(23);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var isArray = __webpack_require__(26),
	    isObjectLike = __webpack_require__(25);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Used for built-in method references. */
	var objectProto = global.Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(19);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(32);

	/**
	 * Converts `value` to a function if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Function} Returns the function.
	 */
	function toFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = toFunction;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var protoOptions = __webpack_require__(1);
	var protos = {
		$set: __webpack_require__(34),
		$tint: __webpack_require__(35),
		$into: __webpack_require__(36),
		$mid: __webpack_require__(37),
		$copyPos: __webpack_require__(38),
		$fixPos: __webpack_require__(39),
		$add: __webpack_require__(40),
		$align: __webpack_require__(41)
	};

	module.exports = function bindProto(obj) {
		var type = arguments.length <= 1 || arguments[1] === undefined ? 'sprite' : arguments[1];

		utils.each(protoOptions[type], function (val, funcName) {
			if (!val || !protos[funcName]) return;
			obj[funcName] = protos[funcName];
		});
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function $set(prop, val) {
		if (typeof prop === 'string' && !!val) {
			this[prop] = val;
		} else {
			for (var i in prop) {
				if (i.indexOf('.') == -1) {
					this[i] = prop[i];
				} else {
					var pathObj = i.split(".");
					var c = this;
					for (var k = 0; k < pathObj.length - 1; k++) c = c[pathObj[k]];
					c[pathObj[pathObj.length - 1]] = prop[i];
				}
			}
		}
		return this;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = function $tint() {
		var color = arguments.length <= 0 || arguments[0] === undefined ? 'ffffff' : arguments[0];

		this.tint = utils.colorCase(color);
		return this;
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $into(group) {
		group.add(this);
		return this;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $mid() {
		this.anchor.setTo(0.5);
		return this;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (target) {
		this.x = target.x;
		this.y = target.y;
		return this;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function $fixPos() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = function $add(objs) {
		var self = this;
		if (!utils.isArray(objs)) objs = [objs];
		utils.each(objs, function (obj) {
			self.add(obj);
		});
		return this;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = function () {
		var a = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
		var b = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		if (a) {
			if (a == 'left') {
				this.x = 0;
			} else if (a == 'center') {
				this.x = ~ ~(this.game.width * 0.5) - (!this.anchor || this.anchor.x == 0 ? this.width * 0.5 : 0);
			} else if (a == 'right') {
				this.x = this.game.width - this.width;
			}
		}
		if (b) {
			if (a == 'top') {
				this.y = 0;
			} else if (a == 'center') {
				this.y = ~ ~(this.game.height * 0.5) - (!this.anchor || this.anchor.y == 0 ? this.height * 0.5 : 0);
			} else if (a == 'bot') {
				this.y = this.game.width - this.height;
			}
		}
		return this;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(33);

	module.exports = function (game, Phaser) {
		return function $circle(options) {
			var defaults = {
				x: 0,
				y: 0,
				group: undefined,
				fill: '#ff0000',
				size: 10,
				stroke: {
					size: 0,
					color: '#000',
					alpha: 1
				}
			};
			options = utils.extend({}, defaults, options);
			var tmpG = game.add.graphics(options.x, options.y, options.group);

			bindProto(tmpG, 'graphic');

			if (options.fill) tmpG.beginFill(utils.colorCase(options.fill));
			if (options.stroke.size > 0) tmpG.lineStyle(options.stroke.size, options.stroke.color, options.stroke.alpha);
			return tmpG.drawCircle(0, 0, options.size);
		};
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(33);

	module.exports = function (game, Phaser) {
		return function $graphic(options) {
			var defaults = {
				x: 0,
				y: 0,
				group: undefined
			};
			options = utils.extend({}, defaults, options);
			var tmpG = game.add.graphics(options.x, options.y, options.group);

			bindProto(tmpG, 'graphic');
			return tmpG;
		};
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(33);

	module.exports = function (game, Phaser) {
		var $circle = __webpack_require__(42)(game, Phaser);

		return function $dot(size, fill, options) {
			if (size === undefined) size = 5;
			if (fill === undefined) fill = '#ff0000';

			var defaults = {
				fill: fill,
				size: size
			};

			options = utils.extend({}, defaults, options);
			return $circle(options);
		};
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(33);

	module.exports = function (game, Phaser) {
		return function $rect(options) {
			var defaults = {
				x: 0,
				y: 0,
				group: undefined,
				fill: '#ff0000',
				width: 100,
				height: 100,
				size: 0,
				alpha: 1,
				round: 0,
				stroke: {
					size: 0,
					color: '#000000',
					alpha: 1
				}
			};
			options = utils.extend({}, defaults, options);
			var tmpG = game.add.graphics(options.x, options.y, options.group);

			if (options.size) options.height = options.width = options.size;

			bindProto(tmpG, 'graphic');

			if (options.fill) tmpG.beginFill(utils.colorCase(options.fill, options.alpha));
			if (options.stroke.size > 0) tmpG.lineStyle(options.stroke.size, options.stroke.color, options.stroke.alpha);

			if (options.round === 0) {
				return tmpG.drawRect(0, 0, options.width, options.height);
			} else {
				return tmpG.drawRoundRect(0, 0, options.width, options.height, options.round);
			}
		};
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bindProto = __webpack_require__(33);

	module.exports = function (game, Phaser) {
		return function $group(options) {
			var defaults = {
				parent: undefined,
				name: undefined,
				addToStage: undefined,
				enableBody: undefined,
				physicsBodyType: undefined
			};
			options = utils.extend({}, options, defaults);
			var tmpG = game.add.group(options.parent, options.name, options.addToStage, options.enableBody, options.physicsBodyType);

			bindProto(tmpG, 'group');

			return tmpG;
		};
	};

/***/ }
/******/ ])
});
;