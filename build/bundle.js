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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

var _appController = __webpack_require__(1);

var _appController2 = _interopRequireDefault(_appController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// start app
console.log("App start");
var app = new _appController2.default(_data2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idGenerator = __webpack_require__(4);

var _idGenerator2 = _interopRequireDefault(_idGenerator);

var _catTree = __webpack_require__(3);

var _catTree2 = _interopRequireDefault(_catTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appController = function () {
    function appController(tree) {
        _classCallCheck(this, appController);

        this.modeElement = document.getElementById("mode");
        this.appElement = document.getElementById("app");

        // 0 - recursive mode, 1 - iterative mode
        this.mode = 0;

        this.appElement.addEventListener('click', this.addCategoryListener.bind(this));
        this.modeElement.addEventListener('click', this.changeModeListener.bind(this));

        this.idGenerator = new _idGenerator2.default(tree);
        this.tree = this.idGenerator.getTree();

        this.printSer = new _catTree2.default();
        this.printHtml();
    }

    _createClass(appController, [{
        key: 'addCategoryListener',
        value: function addCategoryListener(el) {
            var parentId = el.target.getAttribute('data-id');
            var newCat = prompt("Please enter category name:", "");

            if (newCat == null || newCat == "") {
                console.log("User cancelled the prompt.");
            } else {
                this.addNewCategory(newCat, parentId);
                this.printHtml();
            }
        }
    }, {
        key: 'changeModeListener',
        value: function changeModeListener() {
            if (document.getElementById('recursive').checked) {
                this.mode = 0;
                console.log("Print on recursive mode");
            }

            if (document.getElementById('iterative').checked) {
                this.mode = 1;
                console.log("Print on iterative mode");
            }

            this.printHtml();
        }
    }, {
        key: 'addNewCategory',
        value: function addNewCategory(name, parentId) {

            var node = this.getNode(parentId, this.tree);

            if (!node.data) node.data = [];

            node.data.push({ id: this.idGenerator.generateId, name: name });
        }
    }, {
        key: 'getNode',
        value: function getNode(id, node) {

            if (node.id == id) return node;

            if (node.data) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = node.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var childNode = _step.value;

                        var _node = this.getNode(id, childNode);
                        if (_node) return _node;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getHtml',
        value: function getHtml() {
            switch (this.mode) {
                case 0:
                    return this.printSer.printTreeRecursiveWay(this.tree);
                case 1:
                    return this.printSer.printTreeIterativeWay(this.tree);
            }
        }
    }, {
        key: 'printHtml',
        value: function printHtml() {
            this.appElement.innerHTML = this.getHtml();
        }
    }]);

    return appController;
}();

exports.default = appController;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var branch1 = {
    name: 'Dolor',
    data: [{ name: 'Orci',
        data: [{
            name: 'Quiz',
            data: [{ name: 'Odio' }]
        }]
    }] };

var branch2 = {
    name: 'Sit',
    data: [{ name: 'Amet' }, { name: 'Consectetaur' }]
};

var branch3 = {
    name: 'Adipiscing',
    data: [{
        name: 'Elit',
        data: [{ name: 'Vestibulm' }, { name: 'Vitae' }]
    }]
};

var tree = {
    name: 'Lorem',
    data: [{ name: 'Ipsum' }, branch1, branch2, branch3]
};

exports.default = tree;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CatTree = function () {
    function CatTree() {
        _classCallCheck(this, CatTree);
    }

    _createClass(CatTree, [{
        key: "printTreeRecursiveWay",
        value: function printTreeRecursiveWay(node) {
            var res = '<ul>' + this.getLi(node);

            if (node.data) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = node.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var childNode = _step.value;

                        res += "" + this.printTreeRecursiveWay(childNode);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            return res += "</ul>";
        }
    }, {
        key: "printTreeIterativeWay",
        value: function printTreeIterativeWay(tree) {
            if (!tree.data) return "<ul>" + this.getLi(tree) + "</ul>";
            return this.list2html(this.tree2List(tree));
        }
    }, {
        key: "getLi",
        value: function getLi(node) {
            return "<li" + this.getId(node) + ">" + node.name + "</li>";
        }
    }, {
        key: "getId",
        value: function getId(node) {
            return node.id ? " data-id=" + node.id : '';
        }
    }, {
        key: "tree2List",
        value: function tree2List(tree) {

            var stack = [];
            var list = [];
            var node = void 0;

            stack.push(tree);

            tree.level = 0;

            while (stack.length !== 0) {

                node = stack.pop();
                list.push(node);

                if (node.data) {
                    for (var i = node.data.length - 1; i >= 0; i--) {
                        node.data[i].level = node.level + 1;
                        stack.push(node.data[i]);
                    }
                }
            }

            return list;
        }
    }, {
        key: "list2html",
        value: function list2html(list) {

            if (!list) {
                return '<ul></ul>';
            }

            var nowLevel = void 0;
            var res = "<ul><li" + this.getId(list[0]) + ">";
            var nextLevel = void 0;

            for (var i = 0; i < list.length; i++) {

                nowLevel = list[i].level;

                if (list[i + 1]) {
                    nextLevel = list[i + 1].level;
                } else {
                    nextLevel = null;
                }

                res += list[i].name;

                if (nextLevel != null && nextLevel > nowLevel) {

                    res += "<ul><li" + this.getId(list[i + 1]) + ">";
                } else if (nextLevel != null && nextLevel < nowLevel) {

                    res += '</li>' + '</ul></li>'.repeat(nowLevel - nextLevel) + ("<li" + this.getId(list[i + 1]) + ">");
                } else if (nextLevel == nowLevel) {

                    res += "</li><li" + this.getId(list[i + 1]) + ">";
                }
            }

            return res += '</li></ul>'.repeat(nowLevel + 1);
        }
    }]);

    return CatTree;
}();

exports.default = CatTree;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// statefull class
var idGenerator = function () {
    function idGenerator(tree) {
        _classCallCheck(this, idGenerator);

        this.tree = tree;
        this.id = 1;
        this.generateIds(this.tree);
    }

    _createClass(idGenerator, [{
        key: "generateIds",
        value: function generateIds(node) {
            node.id = this.generateId();
            if (node.data) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = node.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var childNode = _step.value;

                        this.generateIds(childNode);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: "generateId",
        value: function generateId() {
            return this.id++;
        }
    }, {
        key: "getTree",
        value: function getTree() {
            return this.tree;
        }
    }]);

    return idGenerator;
}();

exports.default = idGenerator;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);