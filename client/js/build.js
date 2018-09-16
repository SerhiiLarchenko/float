var float =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../node_modules/@babel/runtime/helpers/typeof.js":
/*!*********************************************************************!*\
  !*** C:/Users/skynet/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./lib/bicycle.js":
/*!************************!*\
  !*** ./lib/bicycle.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var bicycle = {};
/* harmony default export */ __webpack_exports__["default"] = (bicycle); //      DOM
//Following function gets breakpoint and two arrays with callbacks.
//First array callbacks are calling before breakpoint,
//second array callbacks - after.

function createBreakpoint(_ref) {
  var width = _ref.width,
      before = _ref.before,
      after = _ref.after;
  var toggle;

  if (innerWidth > width) {
    toggle = true;
    after.forEach(function (cb) {
      return cb();
    });
  }

  window.addEventListener("resize", function () {
    if (innerWidth <= width && toggle) {
      before.forEach(function (cb) {
        return cb();
      });
      toggle = false;
    } else if (innerWidth >= width && !toggle) {
      after.forEach(function (cb) {
        return cb();
      });
      toggle = true;
    }
  });
} //Classic anitmation function
//see more at http://javascript.info/js-animation


function animate(_ref2) {
  var timing = _ref2.timing,
      depict = _ref2.depict,
      duration = _ref2.duration;
  var start = performance.now();
  requestAnimationFrame(function step(time) {
    var dt = (time - start) / duration;
    if (dt >= 1) dt = 1;
    var progress = timing(dt);
    depict(progress);
    if (dt < 1) requestAnimationFrame(step);
  });
} //This function accepts block element and optional animation duration
//to gradually show it.


function fadeIn(block, duration) {
  if (!duration) duration = 200;
  block.style.height = "auto";
  var height = block.offsetHeight;
  block.style.height = 0;
  animate({
    duration: duration,
    timing: function timing(dt) {
      return dt;
    },
    depict: function depict(progress) {
      return block.style.height = progress * height + "px";
    }
  });
} //The function recieves block element and optional animation duration
//to fade out its' height.


function fadeOut(block, duration) {
  if (!duration) duration = 200;
  var height = block.offsetHeight;
  animate({
    duration: duration,
    timing: function timing(dt) {
      return 1 - dt;
    },
    depict: function depict(progress) {
      return block.style.height = progress * height + "px";
    }
  });
} //This function takes selector (for example, "div li")
//and displays collection elements step-by-step.
//If it gets toggle-argument then elements disappear step-by-step.


function displayByStep(selector, step, toggle) {
  var list = document.querySelectorAll(selector),
      display = "block";
  if (toggle === true) display = "none";
  [].forEach.call(list, function (li, i) {
    return setTimeout(function () {
      return li.style.display = display;
    }, ++i * step);
  });
} //This inner function accepts selectors or nodes collection
//and returns nodes array.


function getNodes(selectors) {
  var nodes = [].map.call(selectors, function (selector) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(selector) === "object" && selector.ELEMENT_NODE === 1) return selector;else if (typeof selector === "string") return document.querySelector(selector);
  });
  return nodes;
}

function findNotStaticAnsestor(node) {
  var ansestor = function find(node) {
    if (getComputedStyle(node.parentNode).position != "static") return node.parentNode;else return find(node.parentNode);
  }(node);

  if (ansestor) return ansestor;else return document.body;
} //Following function gets three selectors (or nodes) and sticks sticker-element
//from the bottom of the start-element to the bottom of the end-element.
//Also it returns interface with methods, which can add or remove sticker. 


function createSticker(sticker, start, end) {
  var nodes = getNodes(arguments);
  sticker = nodes[0];
  start = nodes[1];
  end = nodes[2];
  var ansestor = nodes[3] = findNotStaticAnsestor(sticker);

  function positioning() {
    var nodeRects = nodes.map(function (node) {
      return node.getBoundingClientRect();
    }),
        stickerRect = nodeRects[0],
        startRect = nodeRects[1],
        endRect = nodeRects[2],
        ansestorRect = nodeRects[3],
        parentStyle = getComputedStyle(sticker.parentNode),
        paddingLeft = parseInt(parentStyle.paddingLeft),
        paddingRight = parseInt(parentStyle.paddingRight);
    sticker.style.width = sticker.parentNode.clientWidth - paddingLeft - paddingRight + "px";

    if (stickerRect.top <= 0 && stickerRect.bottom >= endRect.bottom || //preventing blinking (rapid positioning change)
    //during page resizing and fast scrolling
    stickerRect.top < 0 && endRect.bottom < innerHeight) {
      sticker.style.position = "absolute";
      sticker.style.top = endRect.bottom - ansestorRect.top + parseInt(getComputedStyle(ansestor).paddingTop) - stickerRect.bottom + stickerRect.top + "px";
    } else if (startRect.bottom <= 0) {
      sticker.style.position = "fixed";
      sticker.style.top = 0;
    } else {
      sticker.style.position = "";
    }
  }

  var events = ["DOMContentLoaded", "scroll", "resize"],
      handler = function handler() {
    positioning();
  };

  return {
    add: function add() {
      events.forEach(function (event) {
        return addEventListener(event, handler);
      });
    },
    remove: function remove() {
      events.forEach(function (event) {
        return removeEventListener(event, handler);
      });
      sticker.style.position = "";
      sticker.style.width = "";
      sticker.style.top = "";
    }
  };
} //      DOM INTERFACE


bicycle.createBreakpoint = createBreakpoint;
bicycle.animate = animate;
bicycle.fadeIn = fadeIn;
bicycle.fadeOut = fadeOut;
bicycle.displayByStep = displayByStep;
bicycle.createSticker = createSticker; //      AJAX

function request(_ref3) {
  var method = _ref3.method,
      url = _ref3.url,
      body = _ref3.body,
      callback = _ref3.callback;
  var xhr = new XMLHttpRequest();
  xhr.open(method || "GET", url, true);
  xhr.addEventListener("load", function () {
    if (xhr.status < 400) callback(null, xhr.responseText);else callback(new Error(xhr.responseStatus));
  });
  xhr.addEventListener("error", function () {
    callback(new Error("Network error"));
  });
  xhr.send(body || null);
} //      AJAX INTERFACE


bicycle.request = request;

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bicycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bicycle */ "./lib/bicycle.js");
//      MENU

var icon = document.querySelector("#menu-icon"),
    menu = document.querySelector("#menu"),
    menuIsOpened = false;
icon.addEventListener("click", function () {
  if (!menuIsOpened) {
    _lib_bicycle__WEBPACK_IMPORTED_MODULE_0__["default"].fadeIn(menu);
    icon.classList.add("open");
    menuIsOpened = true;
  } else {
    _lib_bicycle__WEBPACK_IMPORTED_MODULE_0__["default"].fadeOut(menu);
    icon.classList.remove("open");
    menuIsOpened = false;
  }
}); //      STICKER

var sticker = _lib_bicycle__WEBPACK_IMPORTED_MODULE_0__["default"].createSticker(".sticker", "aside>section", ".main"); //      ADAPTIVE DESIGN

_lib_bicycle__WEBPACK_IMPORTED_MODULE_0__["default"].createBreakpoint({
  width: 769,
  before: [function () {
    return sticker.remove();
  }, function () {
    return menu.style.height = 0;
  }],
  after: [function () {
    return sticker.add();
  }, function () {
    return menu.style.height = "auto";
  }, function () {
    return icon.classList.remove("open");
  }]
}); //      FORMS

["#search", "#email"].forEach(function (selector) {
  var form = document.querySelector(selector);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    _lib_bicycle__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: "POST",
      url: "/test",
      body: form.text.value,
      callback: function callback(error, response) {
        if (error) console.log(error);else console.log(response);
        form.text.value = "";
      }
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9hdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbG9hdC9DOi9Vc2Vycy9za3luZXQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2Zsb2F0Ly4vbGliL2JpY3ljbGUuanMiLCJ3ZWJwYWNrOi8vZmxvYXQvLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFpbi5qc1wiKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImNvbnN0IGJpY3ljbGUgPSB7fTtcclxuZXhwb3J0IGRlZmF1bHQgYmljeWNsZTtcclxuLy8gICAgICBET01cclxuXHJcbi8vRm9sbG93aW5nIGZ1bmN0aW9uIGdldHMgYnJlYWtwb2ludCBhbmQgdHdvIGFycmF5cyB3aXRoIGNhbGxiYWNrcy5cclxuLy9GaXJzdCBhcnJheSBjYWxsYmFja3MgYXJlIGNhbGxpbmcgYmVmb3JlIGJyZWFrcG9pbnQsXHJcbi8vc2Vjb25kIGFycmF5IGNhbGxiYWNrcyAtIGFmdGVyLlxyXG5mdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50KHt3aWR0aCxiZWZvcmUsYWZ0ZXJ9KSB7XHJcbiAgICBsZXQgdG9nZ2xlO1xyXG4gICAgaWYgKGlubmVyV2lkdGggPiB3aWR0aCkge1xyXG4gICAgICAgIHRvZ2dsZSA9IHRydWU7XHJcbiAgICAgICAgYWZ0ZXIuZm9yRWFjaChjYiA9PiBjYigpKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpPT4ge1xyXG4gICAgICAgIGlmIChpbm5lcldpZHRoIDw9IHdpZHRoICYmIHRvZ2dsZSkge1xyXG4gICAgICAgICAgICBiZWZvcmUuZm9yRWFjaChjYiA9PiBjYigpKTtcclxuICAgICAgICAgICAgdG9nZ2xlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbm5lcldpZHRoID49IHdpZHRoICYmICF0b2dnbGUpIHtcclxuICAgICAgICAgICAgYWZ0ZXIuZm9yRWFjaChjYiA9PiBjYigpKTtcclxuICAgICAgICAgICAgdG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy9DbGFzc2ljIGFuaXRtYXRpb24gZnVuY3Rpb25cclxuLy9zZWUgbW9yZSBhdCBodHRwOi8vamF2YXNjcmlwdC5pbmZvL2pzLWFuaW1hdGlvblxyXG5mdW5jdGlvbiBhbmltYXRlKHt0aW1pbmcsIGRlcGljdCwgZHVyYXRpb259KXtcclxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHN0ZXAodGltZSkgeyBcclxuICAgICAgICBsZXQgZHQgPSAodGltZSAtIHN0YXJ0KS9kdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHQgPj0gMSkgZHQgPSAxO1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWluZyhkdCk7XHJcbiAgICAgICAgZGVwaWN0KHByb2dyZXNzKTsgXHJcbiAgICAgICAgaWYgKGR0IDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGJsb2NrIGVsZW1lbnQgYW5kIG9wdGlvbmFsIGFuaW1hdGlvbiBkdXJhdGlvblxyXG4vL3RvIGdyYWR1YWxseSBzaG93IGl0LlxyXG5mdW5jdGlvbiBmYWRlSW4oYmxvY2ssIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoIWR1cmF0aW9uKSBkdXJhdGlvbiA9IDIwMDtcclxuICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgbGV0IGhlaWdodCA9IGJsb2NrLm9mZnNldEhlaWdodDtcclxuICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgdGltaW5nOiBkdCA9PiBkdCxcclxuICAgICAgICBkZXBpY3Q6IHByb2dyZXNzID0+IFxyXG4gICAgICAgICAgICBibG9jay5zdHlsZS5oZWlnaHQgPSBwcm9ncmVzcypoZWlnaHQrXCJweFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy9UaGUgZnVuY3Rpb24gcmVjaWV2ZXMgYmxvY2sgZWxlbWVudCBhbmQgb3B0aW9uYWwgYW5pbWF0aW9uIGR1cmF0aW9uXHJcbi8vdG8gZmFkZSBvdXQgaXRzJyBoZWlnaHQuXHJcbmZ1bmN0aW9uIGZhZGVPdXQoYmxvY2ssIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoIWR1cmF0aW9uKSBkdXJhdGlvbiA9IDIwMDtcclxuICAgIGxldCBoZWlnaHQgPSBibG9jay5vZmZzZXRIZWlnaHQ7XHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgdGltaW5nOiBkdCA9PiAxLWR0LFxyXG4gICAgICAgIGRlcGljdDogcHJvZ3Jlc3MgPT4gXHJcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IHByb2dyZXNzKmhlaWdodCtcInB4XCJcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL1RoaXMgZnVuY3Rpb24gdGFrZXMgc2VsZWN0b3IgKGZvciBleGFtcGxlLCBcImRpdiBsaVwiKVxyXG4vL2FuZCBkaXNwbGF5cyBjb2xsZWN0aW9uIGVsZW1lbnRzIHN0ZXAtYnktc3RlcC5cclxuLy9JZiBpdCBnZXRzIHRvZ2dsZS1hcmd1bWVudCB0aGVuIGVsZW1lbnRzIGRpc2FwcGVhciBzdGVwLWJ5LXN0ZXAuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCeVN0ZXAoc2VsZWN0b3IsIHN0ZXAsIHRvZ2dsZSkge1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaWYgKHRvZ2dsZSA9PT0gdHJ1ZSkgZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGxpc3QsIChsaSwgaSk9PlxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PlxyXG4gICAgICAgICAgICBsaS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSwgKytpKnN0ZXApKTtcclxufVxyXG5cclxuLy9UaGlzIGlubmVyIGZ1bmN0aW9uIGFjY2VwdHMgc2VsZWN0b3JzIG9yIG5vZGVzIGNvbGxlY3Rpb25cclxuLy9hbmQgcmV0dXJucyBub2RlcyBhcnJheS5cclxuZnVuY3Rpb24gZ2V0Tm9kZXMoc2VsZWN0b3JzKSB7XHJcbiAgICBsZXQgbm9kZXMgPSBbXS5tYXAuY2FsbChzZWxlY3RvcnMsIHNlbGVjdG9yID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcIm9iamVjdFwiICYmIFxyXG4gICAgICAgICAgICBzZWxlY3Rvci5FTEVNRU5UX05PREUgPT09IDEpIFxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9KTsgIFxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kTm90U3RhdGljQW5zZXN0b3Iobm9kZSkge1xyXG4gICAgbGV0IGFuc2VzdG9yID0gKGZ1bmN0aW9uIGZpbmQobm9kZSkge1xyXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUucGFyZW50Tm9kZSkucG9zaXRpb24gIT0gXCJzdGF0aWNcIikgXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgcmV0dXJuIGZpbmQobm9kZS5wYXJlbnROb2RlKTtcclxuICAgIH0pKG5vZGUpO1xyXG5cclxuICAgIGlmIChhbnNlc3RvcikgcmV0dXJuIGFuc2VzdG9yO1xyXG4gICAgZWxzZSByZXR1cm4gZG9jdW1lbnQuYm9keTtcclxufVxyXG5cclxuLy9Gb2xsb3dpbmcgZnVuY3Rpb24gZ2V0cyB0aHJlZSBzZWxlY3RvcnMgKG9yIG5vZGVzKSBhbmQgc3RpY2tzIHN0aWNrZXItZWxlbWVudFxyXG4vL2Zyb20gdGhlIGJvdHRvbSBvZiB0aGUgc3RhcnQtZWxlbWVudCB0byB0aGUgYm90dG9tIG9mIHRoZSBlbmQtZWxlbWVudC5cclxuLy9BbHNvIGl0IHJldHVybnMgaW50ZXJmYWNlIHdpdGggbWV0aG9kcywgd2hpY2ggY2FuIGFkZCBvciByZW1vdmUgc3RpY2tlci4gXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0aWNrZXIoc3RpY2tlciwgc3RhcnQsIGVuZCkge1xyXG5cclxuICAgIGxldCBub2RlcyA9IGdldE5vZGVzKGFyZ3VtZW50cyk7XHJcbiAgICBzdGlja2VyID0gbm9kZXNbMF07IHN0YXJ0ID0gbm9kZXNbMV07IGVuZCA9IG5vZGVzWzJdO1xyXG4gICAgbGV0IGFuc2VzdG9yID0gbm9kZXNbM10gPSBmaW5kTm90U3RhdGljQW5zZXN0b3Ioc3RpY2tlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb25pbmcoKSB7XHJcbiAgICAgICAgbGV0IG5vZGVSZWN0cyA9IG5vZGVzLm1hcChub2RlID0+IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxyXG4gICAgICAgICAgICBzdGlja2VyUmVjdCA9IG5vZGVSZWN0c1swXSxcclxuICAgICAgICAgICAgc3RhcnRSZWN0ID0gbm9kZVJlY3RzWzFdLFxyXG4gICAgICAgICAgICBlbmRSZWN0ID0gbm9kZVJlY3RzWzJdLFxyXG4gICAgICAgICAgICBhbnNlc3RvclJlY3QgPSBub2RlUmVjdHNbM10sXHJcbiAgICAgICAgICAgIHBhcmVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGlja2VyLnBhcmVudE5vZGUpLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdCA9IHBhcnNlSW50KHBhcmVudFN0eWxlLnBhZGRpbmdMZWZ0KSxcclxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0ID0gcGFyc2VJbnQocGFyZW50U3R5bGUucGFkZGluZ1JpZ2h0KTtcclxuXHJcbiAgICAgICAgc3RpY2tlci5zdHlsZS53aWR0aCA9IHN0aWNrZXIucGFyZW50Tm9kZS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBwYWRkaW5nTGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBwYWRkaW5nUmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKHN0aWNrZXJSZWN0LnRvcCA8PSAwICYmIHN0aWNrZXJSZWN0LmJvdHRvbSA+PSBlbmRSZWN0LmJvdHRvbSB8fFxyXG5cdFx0XHQvL3ByZXZlbnRpbmcgYmxpbmtpbmcgKHJhcGlkIHBvc2l0aW9uaW5nIGNoYW5nZSlcclxuXHRcdFx0Ly9kdXJpbmcgcGFnZSByZXNpemluZyBhbmQgZmFzdCBzY3JvbGxpbmdcclxuICAgICAgICAgICAgc3RpY2tlclJlY3QudG9wIDwgMCAmJiBlbmRSZWN0LmJvdHRvbSA8IGlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHN0aWNrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIHN0aWNrZXIuc3R5bGUudG9wID0gZW5kUmVjdC5ib3R0b20gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGFuc2VzdG9yUmVjdC50b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGFuc2VzdG9yKS5wYWRkaW5nVG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHN0aWNrZXJSZWN0LmJvdHRvbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBzdGlja2VyUmVjdC50b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcInB4XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydFJlY3QuYm90dG9tIDw9IDApe1xyXG4gICAgICAgICAgICBzdGlja2VyLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICBzdGlja2VyLnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RpY2tlci5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgbGV0IGV2ZW50cyA9IFtcIkRPTUNvbnRlbnRMb2FkZWRcIiwgXCJzY3JvbGxcIiwgXCJyZXNpemVcIl0sXHJcbiAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKCkge3Bvc2l0aW9uaW5nKCl9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gIHtcclxuICAgICAgICBhZGQ6ICgpPT4ge1xyXG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBhZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6ICgpPT4ge1xyXG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKSk7XHJcbiAgICAgICAgICAgIHN0aWNrZXIuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICBzdGlja2VyLnN0eWxlLndpZHRoID0gXCJcIjtcclxuICAgICAgICAgICAgc3RpY2tlci5zdHlsZS50b3AgPSBcIlwiO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICAgICAgRE9NIElOVEVSRkFDRVxyXG5iaWN5Y2xlLmNyZWF0ZUJyZWFrcG9pbnQgPSBjcmVhdGVCcmVha3BvaW50O1xyXG5iaWN5Y2xlLmFuaW1hdGUgPSBhbmltYXRlO1xyXG5iaWN5Y2xlLmZhZGVJbiA9IGZhZGVJbjtcclxuYmljeWNsZS5mYWRlT3V0ID0gZmFkZU91dDtcclxuYmljeWNsZS5kaXNwbGF5QnlTdGVwID0gZGlzcGxheUJ5U3RlcDtcclxuYmljeWNsZS5jcmVhdGVTdGlja2VyID0gY3JlYXRlU3RpY2tlcjtcclxuXHJcbi8vICAgICAgQUpBWFxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdCh7bWV0aG9kLCB1cmwsIGJvZHksIGNhbGxiYWNrfSkge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4obWV0aG9kIHx8IFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBlbHNlIGNhbGxiYWNrKG5ldyBFcnJvcih4aHIucmVzcG9uc2VTdGF0dXMpKTtcclxuICAgIH0pO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoKSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKFwiTmV0d29yayBlcnJvclwiKSk7XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGJvZHkgfHwgbnVsbCk7XHJcbn1cclxuXHJcbi8vICAgICAgQUpBWCBJTlRFUkZBQ0VcclxuYmljeWNsZS5yZXF1ZXN0ID0gcmVxdWVzdDsiLCJcclxuLy8gICAgICBNRU5VXHJcblxyXG5pbXBvcnQgYmljeWNsZSBmcm9tIFwiLi9saWIvYmljeWNsZVwiO1xyXG5cclxubGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtaWNvblwiKSxcclxuICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIiksXHJcbiAgICBtZW51SXNPcGVuZWQgPSBmYWxzZTtcclxuXHJcbmljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xyXG4gICAgaWYgKCFtZW51SXNPcGVuZWQpIHtcclxuICAgICAgICBiaWN5Y2xlLmZhZGVJbihtZW51KTtcclxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIG1lbnVJc09wZW5lZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpY3ljbGUuZmFkZU91dChtZW51KTtcclxuICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG1lbnVJc09wZW5lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vICAgICAgU1RJQ0tFUlxyXG5cclxubGV0IHN0aWNrZXIgPSBiaWN5Y2xlLmNyZWF0ZVN0aWNrZXIoXCIuc3RpY2tlclwiLCBcImFzaWRlPnNlY3Rpb25cIiwgXCIubWFpblwiKTtcclxuXHJcbi8vICAgICAgQURBUFRJVkUgREVTSUdOXHJcblxyXG5iaWN5Y2xlLmNyZWF0ZUJyZWFrcG9pbnQoe1xyXG4gICAgd2lkdGg6IDc2OSxcclxuICAgYmVmb3JlOiBbKCkgPT4gc3RpY2tlci5yZW1vdmUoKSxcclxuICAgICAgICAgICAgKCkgPT4gbWVudS5zdHlsZS5oZWlnaHQgPSAwXSxcclxuICAgIGFmdGVyOiBbKCkgPT4gc3RpY2tlci5hZGQoKSxcclxuICAgICAgICAgICAgKCkgPT4gbWVudS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIixcclxuICAgICAgICAgICAgKCkgPT4gaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKV1cclxufSk7XHJcblxyXG4vLyAgICAgIEZPUk1TXHJcblxyXG5bXCIjc2VhcmNoXCIsIFwiI2VtYWlsXCJdLmZvckVhY2goc2VsZWN0b3IgPT4ge1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJpY3ljbGUucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIHVybDogXCIvdGVzdFwiLCBib2R5OiBmb3JtLnRleHQudmFsdWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS50ZXh0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekxBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFOQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTkE7QUFRQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=