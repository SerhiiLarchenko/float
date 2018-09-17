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

/***/ "../../../../../../node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************!*\
  !*** /home/seneca/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************/
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../../../node_modules/@babel/runtime/helpers/typeof.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9hdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbG9hdC8vaG9tZS9zZW5lY2Evbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2Zsb2F0Ly4vbGliL2JpY3ljbGUuanMiLCJ3ZWJwYWNrOi8vZmxvYXQvLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFpbi5qc1wiKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImNvbnN0IGJpY3ljbGUgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGJpY3ljbGU7XG5cbi8vICAgICAgRE9NXG5cbi8vRm9sbG93aW5nIGZ1bmN0aW9uIGdldHMgYnJlYWtwb2ludCBhbmQgdHdvIGFycmF5cyB3aXRoIGNhbGxiYWNrcy5cbi8vRmlyc3QgYXJyYXkgY2FsbGJhY2tzIGFyZSBjYWxsaW5nIGJlZm9yZSBicmVha3BvaW50LFxuLy9zZWNvbmQgYXJyYXkgY2FsbGJhY2tzIC0gYWZ0ZXIuXG5mdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50KHt3aWR0aCxiZWZvcmUsYWZ0ZXJ9KSB7XG4gICAgbGV0IHRvZ2dsZTtcbiAgICBpZiAoaW5uZXJXaWR0aCA+IHdpZHRoKSB7XG4gICAgICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgICAgIGFmdGVyLmZvckVhY2goY2IgPT4gY2IoKSk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpPT4ge1xuICAgICAgICBpZiAoaW5uZXJXaWR0aCA8PSB3aWR0aCAmJiB0b2dnbGUpIHtcbiAgICAgICAgICAgIGJlZm9yZS5mb3JFYWNoKGNiID0+IGNiKCkpO1xuICAgICAgICAgICAgdG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA+PSB3aWR0aCAmJiAhdG9nZ2xlKSB7XG4gICAgICAgICAgICBhZnRlci5mb3JFYWNoKGNiID0+IGNiKCkpO1xuICAgICAgICAgICAgdG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vL0NsYXNzaWMgYW5pdG1hdGlvbiBmdW5jdGlvblxuLy9zZWUgbW9yZSBhdCBodHRwOi8vamF2YXNjcmlwdC5pbmZvL2pzLWFuaW1hdGlvblxuZnVuY3Rpb24gYW5pbWF0ZSh7dGltaW5nLCBkZXBpY3QsIGR1cmF0aW9ufSl7XG4gICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHN0ZXAodGltZSkgeyBcbiAgICAgICAgbGV0IGR0ID0gKHRpbWUgLSBzdGFydCkvZHVyYXRpb247XG4gICAgICAgIGlmIChkdCA+PSAxKSBkdCA9IDE7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWluZyhkdCk7XG4gICAgICAgIGRlcGljdChwcm9ncmVzcyk7IFxuICAgICAgICBpZiAoZHQgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfSk7XG59XG5cbi8vVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGJsb2NrIGVsZW1lbnQgYW5kIG9wdGlvbmFsIGFuaW1hdGlvbiBkdXJhdGlvblxuLy90byBncmFkdWFsbHkgc2hvdyBpdC5cbmZ1bmN0aW9uIGZhZGVJbihibG9jaywgZHVyYXRpb24pIHtcbiAgICBpZiAoIWR1cmF0aW9uKSBkdXJhdGlvbiA9IDIwMDtcbiAgICBibG9jay5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICBsZXQgaGVpZ2h0ID0gYmxvY2sub2Zmc2V0SGVpZ2h0O1xuICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgYW5pbWF0ZSh7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgdGltaW5nOiBkdCA9PiBkdCxcbiAgICAgICAgZGVwaWN0OiBwcm9ncmVzcyA9PiBcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IHByb2dyZXNzKmhlaWdodCtcInB4XCJcbiAgICB9KTtcbn1cblxuLy9UaGUgZnVuY3Rpb24gcmVjaWV2ZXMgYmxvY2sgZWxlbWVudCBhbmQgb3B0aW9uYWwgYW5pbWF0aW9uIGR1cmF0aW9uXG4vL3RvIGZhZGUgb3V0IGl0cycgaGVpZ2h0LlxuZnVuY3Rpb24gZmFkZU91dChibG9jaywgZHVyYXRpb24pIHtcbiAgICBpZiAoIWR1cmF0aW9uKSBkdXJhdGlvbiA9IDIwMDtcbiAgICBsZXQgaGVpZ2h0ID0gYmxvY2sub2Zmc2V0SGVpZ2h0O1xuICAgIGFuaW1hdGUoe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHRpbWluZzogZHQgPT4gMS1kdCxcbiAgICAgICAgZGVwaWN0OiBwcm9ncmVzcyA9PiBcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IHByb2dyZXNzKmhlaWdodCtcInB4XCJcbiAgICB9KTtcbn1cblxuLy9UaGlzIGZ1bmN0aW9uIHRha2VzIHNlbGVjdG9yIChmb3IgZXhhbXBsZSwgXCJkaXYgbGlcIilcbi8vYW5kIGRpc3BsYXlzIGNvbGxlY3Rpb24gZWxlbWVudHMgc3RlcC1ieS1zdGVwLlxuLy9JZiBpdCBnZXRzIHRvZ2dsZS1hcmd1bWVudCB0aGVuIGVsZW1lbnRzIGRpc2FwcGVhciBzdGVwLWJ5LXN0ZXAuXG5mdW5jdGlvbiBkaXNwbGF5QnlTdGVwKHNlbGVjdG9yLCBzdGVwLCB0b2dnbGUpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGlmICh0b2dnbGUgPT09IHRydWUpIGRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBbXS5mb3JFYWNoLmNhbGwobGlzdCwgKGxpLCBpKT0+XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PlxuICAgICAgICAgICAgbGkuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXksICsraSpzdGVwKSk7XG59XG5cbi8vVGhpcyBpbm5lciBmdW5jdGlvbiBhY2NlcHRzIHNlbGVjdG9ycyBvciBub2RlcyBjb2xsZWN0aW9uXG4vL2FuZCByZXR1cm5zIG5vZGVzIGFycmF5LlxuZnVuY3Rpb24gZ2V0Tm9kZXMoc2VsZWN0b3JzKSB7XG4gICAgbGV0IG5vZGVzID0gW10ubWFwLmNhbGwoc2VsZWN0b3JzLCBzZWxlY3RvciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwib2JqZWN0XCIgJiYgXG4gICAgICAgICAgICBzZWxlY3Rvci5FTEVNRU5UX05PREUgPT09IDEpIFxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSk7ICBcbiAgICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbmROb3RTdGF0aWNBbnNlc3Rvcihub2RlKSB7XG4gICAgbGV0IGFuc2VzdG9yID0gKGZ1bmN0aW9uIGZpbmQobm9kZSkge1xuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlLnBhcmVudE5vZGUpLnBvc2l0aW9uICE9IFwic3RhdGljXCIpIFxuICAgICAgICAgICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHJldHVybiBmaW5kKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfSkobm9kZSk7XG5cbiAgICBpZiAoYW5zZXN0b3IpIHJldHVybiBhbnNlc3RvcjtcbiAgICBlbHNlIHJldHVybiBkb2N1bWVudC5ib2R5O1xufVxuXG4vL0ZvbGxvd2luZyBmdW5jdGlvbiBnZXRzIHRocmVlIHNlbGVjdG9ycyAob3Igbm9kZXMpIGFuZCBzdGlja3Mgc3RpY2tlci1lbGVtZW50XG4vL2Zyb20gdGhlIGJvdHRvbSBvZiB0aGUgc3RhcnQtZWxlbWVudCB0byB0aGUgYm90dG9tIG9mIHRoZSBlbmQtZWxlbWVudC5cbi8vQWxzbyBpdCByZXR1cm5zIGludGVyZmFjZSB3aXRoIG1ldGhvZHMsIHdoaWNoIGNhbiBhZGQgb3IgcmVtb3ZlIHN0aWNrZXIuIFxuZnVuY3Rpb24gY3JlYXRlU3RpY2tlcihzdGlja2VyLCBzdGFydCwgZW5kKSB7XG5cbiAgICBsZXQgbm9kZXMgPSBnZXROb2Rlcyhhcmd1bWVudHMpO1xuICAgIHN0aWNrZXIgPSBub2Rlc1swXTsgc3RhcnQgPSBub2Rlc1sxXTsgZW5kID0gbm9kZXNbMl07XG4gICAgbGV0IGFuc2VzdG9yID0gbm9kZXNbM10gPSBmaW5kTm90U3RhdGljQW5zZXN0b3Ioc3RpY2tlcik7XG5cbiAgICBmdW5jdGlvbiBwb3NpdGlvbmluZygpIHtcbiAgICAgICAgbGV0IG5vZGVSZWN0cyA9IG5vZGVzLm1hcChub2RlID0+IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxuICAgICAgICAgICAgc3RpY2tlclJlY3QgPSBub2RlUmVjdHNbMF0sXG4gICAgICAgICAgICBzdGFydFJlY3QgPSBub2RlUmVjdHNbMV0sXG4gICAgICAgICAgICBlbmRSZWN0ID0gbm9kZVJlY3RzWzJdLFxuICAgICAgICAgICAgYW5zZXN0b3JSZWN0ID0gbm9kZVJlY3RzWzNdLFxuICAgICAgICAgICAgcGFyZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHN0aWNrZXIucGFyZW50Tm9kZSksXG4gICAgICAgICAgICBwYWRkaW5nTGVmdCA9IHBhcnNlSW50KHBhcmVudFN0eWxlLnBhZGRpbmdMZWZ0KSxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodCA9IHBhcnNlSW50KHBhcmVudFN0eWxlLnBhZGRpbmdSaWdodCk7XG5cbiAgICAgICAgc3RpY2tlci5zdHlsZS53aWR0aCA9IHN0aWNrZXIucGFyZW50Tm9kZS5jbGllbnRXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcGFkZGluZ0xlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHBhZGRpbmdSaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoc3RpY2tlclJlY3QudG9wIDw9IDAgJiYgc3RpY2tlclJlY3QuYm90dG9tID49IGVuZFJlY3QuYm90dG9tIHx8XG5cdFx0XHQvL3ByZXZlbnRpbmcgYmxpbmtpbmcgKHJhcGlkIHBvc2l0aW9uaW5nIGNoYW5nZSlcblx0XHRcdC8vZHVyaW5nIHBhZ2UgcmVzaXppbmcgYW5kIGZhc3Qgc2Nyb2xsaW5nXG4gICAgICAgICAgICBzdGlja2VyUmVjdC50b3AgPCAwICYmIGVuZFJlY3QuYm90dG9tIDwgaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHN0aWNrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICBzdGlja2VyLnN0eWxlLnRvcCA9IGVuZFJlY3QuYm90dG9tICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYW5zZXN0b3JSZWN0LnRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGFuc2VzdG9yKS5wYWRkaW5nVG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBzdGlja2VyUmVjdC5ib3R0b20gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHN0aWNrZXJSZWN0LnRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcInB4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhcnRSZWN0LmJvdHRvbSA8PSAwKXtcbiAgICAgICAgICAgIHN0aWNrZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICBzdGlja2VyLnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGlja2VyLnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgXG4gICAgbGV0IGV2ZW50cyA9IFtcIkRPTUNvbnRlbnRMb2FkZWRcIiwgXCJzY3JvbGxcIiwgXCJyZXNpemVcIl0sXG4gICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtwb3NpdGlvbmluZygpfTtcbiAgICBcbiAgICByZXR1cm4gIHtcbiAgICAgICAgYWRkOiAoKT0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiAoKT0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpKTtcbiAgICAgICAgICAgIHN0aWNrZXIuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgc3RpY2tlci5zdHlsZS53aWR0aCA9IFwiXCI7XG4gICAgICAgICAgICBzdGlja2VyLnN0eWxlLnRvcCA9IFwiXCI7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gICAgICBET00gSU5URVJGQUNFXG5iaWN5Y2xlLmNyZWF0ZUJyZWFrcG9pbnQgPSBjcmVhdGVCcmVha3BvaW50O1xuYmljeWNsZS5hbmltYXRlID0gYW5pbWF0ZTtcbmJpY3ljbGUuZmFkZUluID0gZmFkZUluO1xuYmljeWNsZS5mYWRlT3V0ID0gZmFkZU91dDtcbmJpY3ljbGUuZGlzcGxheUJ5U3RlcCA9IGRpc3BsYXlCeVN0ZXA7XG5iaWN5Y2xlLmNyZWF0ZVN0aWNrZXIgPSBjcmVhdGVTdGlja2VyO1xuXG4vLyAgICAgIEFKQVhcblxuZnVuY3Rpb24gcmVxdWVzdCh7bWV0aG9kLCB1cmwsIGJvZHksIGNhbGxiYWNrfSkge1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbihtZXRob2QgfHwgXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDQwMCkgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGVsc2UgY2FsbGJhY2sobmV3IEVycm9yKHhoci5yZXNwb25zZVN0YXR1cykpO1xuICAgIH0pO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJOZXR3b3JrIGVycm9yXCIpKTtcbiAgICB9KTtcbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpO1xufVxuXG4vLyAgICAgIEFKQVggSU5URVJGQUNFXG5iaWN5Y2xlLnJlcXVlc3QgPSByZXF1ZXN0OyIsIlxuLy8gICAgICBNRU5VXG5cbmltcG9ydCBiaWN5Y2xlIGZyb20gXCIuL2xpYi9iaWN5Y2xlXCI7XG5cbmxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWljb25cIiksXG4gICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKSxcbiAgICBtZW51SXNPcGVuZWQgPSBmYWxzZTtcblxuaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKCFtZW51SXNPcGVuZWQpIHtcbiAgICAgICAgYmljeWNsZS5mYWRlSW4obWVudSk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgIG1lbnVJc09wZW5lZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmljeWNsZS5mYWRlT3V0KG1lbnUpO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICBtZW51SXNPcGVuZWQgPSBmYWxzZTtcbiAgICB9XG59KTtcblxuLy8gICAgICBTVElDS0VSXG5cbmxldCBzdGlja2VyID0gYmljeWNsZS5jcmVhdGVTdGlja2VyKFwiLnN0aWNrZXJcIiwgXCJhc2lkZT5zZWN0aW9uXCIsIFwiLm1haW5cIik7XG5cbi8vICAgICAgQURBUFRJVkUgREVTSUdOXG5cbmJpY3ljbGUuY3JlYXRlQnJlYWtwb2ludCh7XG4gICAgd2lkdGg6IDc2OSxcbiAgIGJlZm9yZTogWygpID0+IHN0aWNrZXIucmVtb3ZlKCksXG4gICAgICAgICAgICAoKSA9PiBtZW51LnN0eWxlLmhlaWdodCA9IDBdLFxuICAgIGFmdGVyOiBbKCkgPT4gc3RpY2tlci5hZGQoKSxcbiAgICAgICAgICAgICgpID0+IG1lbnUuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCIsXG4gICAgICAgICAgICAoKSA9PiBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpXVxufSk7XG5cbi8vICAgICAgRk9STVNcblxuW1wiI3NlYXJjaFwiLCBcIiNlbWFpbFwiXS5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYmljeWNsZS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIHVybDogXCIvdGVzdFwiLCBib2R5OiBmb3JtLnRleHQudmFsdWUsXG4gICAgICAgICAgICBjYWxsYmFjazogKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGVsc2UgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGZvcm0udGV4dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxTEE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==