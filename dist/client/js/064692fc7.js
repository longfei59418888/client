webpackJsonp([0],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(20);

__webpack_require__(186);

var _decorators = __webpack_require__(61);

var _mobxReact = __webpack_require__(62);

var _article = __webpack_require__(188);

var _article2 = _interopRequireDefault(_article);

var _extend = __webpack_require__(190);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _ref2 = _jsx('div', {});

var _ref3 = _jsx('span', {}, void 0, ' \u5206\u7C7B : ');

var _ref4 = _jsx('hr', {});

var Main = (_dec = (0, _decorators.loading)(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(props, state) {
        var id, date, key;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = props.match.params.id ? props.match.params.id : null;
                        date = props.match.params.date ? props.match.params.date : null;
                        key = props.match.params.key ? props.match.params.key : null;
                        _context.next = 5;
                        return _article2.default.init(id, date, key);

                    case 5:
                        if (!(_article2.default.list == null)) {
                            _context.next = 8;
                            break;
                        }

                        _context.next = 8;
                        return _article2.default.getList();

                    case 8:
                        return _context.abrupt('return', []);

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}()), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var boxList = this.refs['boxList'],
                _this = this,
                scroll = this.refs['scroll'];
            _this.scrollTop = _article2.default.position;
            console.log(_this.scrollTop);
            boxList.scrollTop = _this.scrollTop;
            boxList.addEventListener('scroll', getTop);
            function getTop() {
                _this.scrollTop = boxList.scrollTop;
                if (_article2.default.loading || _article2.default.end) return;
                if (scroll.offsetHeight - (document.body.offsetHeight + boxList.scrollTop) < 500) {
                    _article2.default.getList();
                }
            }

            this.removeEvent = function () {
                boxList.removeEventListener('scroll', getTop);
            };
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log(this.scrollTop);
            _article2.default.position = this.scrollTop;
            this.removeEvent();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'boxList', className: 'home' },
                _react2.default.createElement(
                    'div',
                    { ref: 'scroll', className: 'scroll' },
                    _ref2,
                    _jsx('div', {}, void 0, _article2.default.list.map(function (item, index) {
                        return _jsx('div', {
                            className: 'item'
                        }, void 0, _jsx('p', {
                            className: 'h5'
                        }, void 0, item.title), _jsx('p', {
                            className: 'info'
                        }, void 0, _jsx('span', {}, void 0, '\u53D1\u8868\u4E8E : ', (0, _extend.getUTFDate)(item.publicDate).split(' ')[0]), ' |', _ref3, _jsx(_reactRouterDom.Link, {
                            to: '/cate/' + item.classify.id
                        }, void 0, _jsx('span', {}, void 0, item.classify.title))), _jsx('div', {
                            className: 'descript'
                        }, void 0, _jsx('div', {
                            dangerouslySetInnerHTML: { __html: item.description }
                        })), _jsx('div', {
                            className: 'btn'
                        }, void 0, _jsx(_reactRouterDom.Link, {
                            to: '/article/' + item.id
                        }, void 0, '\u9605\u8BFB\u5168\u6587')), _ref4);
                    })),
                    _jsx('div', {
                        className: 'loading'
                    }, void 0, _article2.default.end ? _article2.default.list.length < 1 ? '--努力更新中--' : '--完毕--' : '加载更多..')
                )
            );
        }
    }]);

    return Main;
}(_react2.default.Component)) || _class) || _class);
exports.default = Main;


;(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/containers/home/index.jsx");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/containers/home/index.jsx");
        }
    }
})();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(184)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--4-2!../../../node_modules/postcss-loader/lib/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--4-2!../../../node_modules/postcss-loader/lib/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(183)(undefined);
// imports


// module
exports.push([module.i, ".home {\n  position: relative;\n  height: 100%;\n  overflow: auto; }\n  .home .scroll {\n    padding: 70px 40px 0; }\n    .home .scroll .item {\n      color: #ddd;\n      margin-bottom: 90px; }\n      .home .scroll .item .h5 {\n        text-align: center;\n        font-size: 26px;\n        letter-spacing: 1px; }\n      .home .scroll .item .info {\n        font-size: 12px;\n        color: #aaa;\n        letter-spacing: 1px;\n        text-align: center;\n        line-height: 40px; }\n        .home .scroll .item .info a {\n          color: #aaa; }\n      .home .scroll .item .descript {\n        line-height: 1.5;\n        margin: 30px 0; }\n      .home .scroll .item .btn {\n        padding: 30px 0 50px;\n        text-align: center; }\n        .home .scroll .item .btn a {\n          color: #666;\n          padding: 7px 14px;\n          background: #fff;\n          border-radius: 2px; }\n          .home .scroll .item .btn a:hover {\n            opacity: .9; }\n      .home .scroll .item hr {\n        width: 50px;\n        opacity: .2;\n        margin: 30px auto; }\n    .home .scroll .loading {\n      line-height: 60px;\n      color: #aaa;\n      font-size: 12px;\n      letter-spacing: 2px;\n      text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

var _mobx = __webpack_require__(28);

var _fetch = __webpack_require__(60);

var _session = __webpack_require__(189);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Models = (_class = function () {
    function Models() {
        _classCallCheck(this, Models);

        _initDefineProp(this, 'list', _descriptor, this);

        _initDefineProp(this, 'page', _descriptor2, this);

        _initDefineProp(this, 'end', _descriptor3, this);

        _initDefineProp(this, 'position', _descriptor4, this);

        _initDefineProp(this, 'loading', _descriptor5, this);

        _initDefineProp(this, 'id', _descriptor6, this);

        _initDefineProp(this, 'date', _descriptor7, this);

        _initDefineProp(this, 'key', _descriptor8, this);

        _initDefineProp(this, 'article', _descriptor9, this);
    }

    _createClass(Models, [{
        key: 'init',
        value: function init(id, date, key) {
            var _this = this;

            if (id == this.id && date == this.date && key == this.key) return 1;
            (0, _mobx.runInAction)(function () {
                _this.id = id;
                _this.end = false;
                _this.list = null;
                _this.page = 0;
                _this.date = date;
                _this.key = key;
                _this.loading = false;
                _this.position = 0;
            });
        }
    }, {
        key: 'getArticle',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
                var rst;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.get)('api/article/' + id, {});

                            case 2:
                                rst = _context.sent;

                                if (!rst) {
                                    _context.next = 6;
                                    break;
                                }

                                this.article = rst;
                                return _context.abrupt('return', 1);

                            case 6:
                                return _context.abrupt('return', 0);

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getArticle(_x) {
                return _ref.apply(this, arguments);
            }

            return getArticle;
        }()
    }, {
        key: 'getList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var data, rst;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.loading = true;
                                data = { page: this.page };

                                if (this.id) data.classifyId = this.id;
                                if (this.date) data.date = this.date;
                                if (this.key) data.key = this.key;
                                _context2.next = 7;
                                return (0, _fetch.get)('api/article/list', {
                                    data: data
                                });

                            case 7:
                                rst = _context2.sent;

                                if (!rst) {
                                    _context2.next = 13;
                                    break;
                                }

                                (0, _mobx.runInAction)(function () {
                                    var list = _this2.list ? _this2.list : [];
                                    _this2.list = list.concat(rst.rows);
                                    _this2.page++;
                                });
                                if (rst.rows.length < 10) {
                                    this.end = true;
                                }
                                this.loading = false;
                                return _context2.abrupt('return', 1);

                            case 13:
                                return _context2.abrupt('return', 0);

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getList() {
                return _ref2.apply(this, arguments);
            }

            return getList;
        }()
    }]);

    return Models;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'page', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'end', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'position', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'loading', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'id', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'date', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'key', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'article', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getArticle', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getArticle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getList'), _class.prototype)), _class);


var Model = new Models();
exports.default = Model;
(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/store/article.js");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/store/article.js");
        }
    }
})();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
var prefixName = 'xxr_store_';
var sessionList = get('sessionList') ? get('sessionList') : [];
var sessionStorage = window.sessionStorage;

var set = exports.set = function set(attr, data, timeOut) {
    data = data ? JSON.stringify(data) : null;
    if (timeOut) sessionStorage.setItem(prefixName + '_' + attr, data, timeOut);else sessionStorage.setItem(prefixName + '_' + attr, data, 10000000);
    if (attr != 'sessionList') {
        if (sessionList.indexOf(attr) == -1) sessionList.push(attr);
        set('sessionList', sessionList);
    }
};

function get(attr) {
    var data = sessionStorage.getItem(prefixName + '_' + attr);
    if (data == null || data == "") return null;else return JSON.parse(data);
}

var clear = exports.clear = function clear(attr) {
    sessionStorage.clear(prefixName + '_' + attr);
};

var clearAll = exports.clearAll = function clearAll() {
    sessionList.forEach(function (item) {
        sessionStorage.clear(prefixName + '_' + item);
    });
};(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/utils/session.js");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/utils/session.js");
        }
    }
})();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatMoney = formatMoney;
exports.addFloat = addFloat;
exports.distanceFormat = distanceFormat;
exports.getUTFDate = getUTFDate;
exports.formatEllipsis = formatEllipsis;
exports.formatBankFour = formatBankFour;
exports.formatBankSensitive = formatBankSensitive;
exports.formatPhoneSensitive = formatPhoneSensitive;
exports.formatNumberPercent = formatNumberPercent;
exports.formatName = formatName;
exports.formatBankShow = formatBankShow;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isEmptyObject = isEmptyObject;
exports.formatMoneyInput = formatMoneyInput;
exports.formatPhoneInput = formatPhoneInput;
exports.formatBankCardInput = formatBankCardInput;
exports.getVendorPrefix = getVendorPrefix;
exports.getTranslateInfo = getTranslateInfo;
exports.getQueryString = getQueryString;
exports.extend = extend;
exports.photoCompress = photoCompress;

/*
* Number处理
* */

//金额格式化(千分符)
function formatMoney(Number, n) {
    var _this = parseFloat(Number);

    var dot = n === 0;
    n = n > 0 && n <= 20 ? n : 2;
    var formatMoney = parseFloat((_this + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = formatMoney.split(".")[0].split("").reverse(),
        r = formatMoney.split(".")[1];
    var t = "";
    for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + (dot ? '' : "." + r);
}
// 浮点数相加
function addFloat(number1, number2) {
    return (parseFloat(number1) * 10000000000 + parseFloat(number2) * 10000000000) / 10000000000;
}
// 距离格式化
function distanceFormat(distance) {
    distance = parseFloat(distance);
    if (!distance) return '';
    return distance > 999 ? (distance / 1000).toFixed(2) + 'km' : distance + 'm';
}

function getUTFDate(time) {
    return time.replace('T', ' ').split('.')[0];
}

/*
* 时间格式化
* */
Date.prototype.formatDate = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};
//得到某天的前天，后天
Date.prototype.getCountDate = function (num) {
    return new Date(this.setDate(this.getDate() + num)).format('yyyy-MM-dd');
};
//某月最后一天
Date.prototype.getMonthEnd = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1).toJSON().substring(0, 10);
};
//某月多少天
Date.prototype.getMonthEnd = function () {
    var curMonth = this.getMonth();
    this.setMonth(curMonth + 1);
    this.setDate(0);
    return this.getDate();
};
//某日是某年的第几周
Date.prototype.getTheWeek = function () {
    var totalDays = 0,
        now = this;
    var years = now.getFullYear();
    if (years < 1000) years += 1900;
    var days = new Array(12);
    days[0] = 31;
    days[2] = 31;
    days[3] = 30;
    days[4] = 31;
    days[5] = 30;
    days[6] = 31;
    days[7] = 31;
    days[8] = 30;
    days[9] = 31;
    days[10] = 30;
    days[11] = 31;

    //判断是否为闰年，针对2月的天数进行计算
    if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
        days[1] = 29;
    } else {
        days[1] = 28;
    }

    if (now.getMonth() == 0) {
        totalDays = totalDays + now.getDate();
    } else {
        var curMonth = now.getMonth();
        for (var count = 1; count <= curMonth; count++) {
            totalDays = totalDays + days[count - 1];
        }
        totalDays = totalDays + now.getDate();
    }
    //得到第几周
    var week = Math.ceil(totalDays / 7);
    return week;
};

/*
* String 处理
* */
//字符串超出点
function formatEllipsis(obj, length) {
    if (!obj) return '';
    return obj.length > length ? obj.slice(length) : obj;
}
// 去敏处理
function formatBankFour(str) {
    //银行卡后四位
    return str.substr(str.length - 4);
}
function formatBankSensitive(str) {
    //银行卡
    return str.substr(0, 4) + '*'.repeat(str.length - 8) + str.substr(str.length - 4);
}
function formatPhoneSensitive(str) {
    return str.substr(0, 3) + '*'.repeat(str.length - 7) + str.substr(str.length - 4);
}
// 添加百分号
function formatNumberPercent(str) {
    return str * 1000000000 / 10000000 + '%';
}
// 名字掩码
function formatName(str) {
    return str.substr(0, 1) + '*'.repeat(str.length - 1);
}
//银行卡格式化
function formatBankShow(card) {
    card = card + '';
    if (card.length < 1) return '';
    if (card.length > 0 && card.length < 5) return card;
    if (card.length > 4) {
        return card.slice(0, 4) + ' ' + formatBankCard(card.slice(4));
    }
}

/*
* 类型判断
* */
var _ARRAY_NAME = "[object Array]";
var _OBJECT_NAME = "[object Object]";
var _FUNCTION_NAME = "[object Function]";
// 得到对象类型
function _isType(obj) {
    return Object.prototype.toString.call(obj);
}
function isFunction(obj) {
    return _isType(obj) == _FUNCTION_NAME;
}
function isObject(obj) {
    return _isType(obj) == _OBJECT_NAME;
}
function isArray(obj) {
    return _isType(obj) == _ARRAY_NAME;
}
function isEmptyObject(obj) {
    //是否是空对象
    for (var t in obj) {
        return false;
    }
    return true;
}

/*
* input 输入限制
* */

//处理金额限制
function formatMoneyInput(value, n) {
    n = n || 2;
    if (value.match(/^0\d/)) value = value.slice(1);
    if (n == 0) value = value.replace(/\./g, '');
    if (value.match(/[^\d\.]/g)) return value.replace(/[^\d\.]/g, '');
    if (value.match(/^\./)) return '0.';
    var values = value.split('.');
    if (values.length == 2 && values[1].length > 2 || values.length == 3) return values[0] + '.' + values[1].substr(0, 2);
    return value;
}

// 手机号限制
function formatPhoneInput(value) {
    value = value.replace(/^\d/g, '');
    // iphone联系人复制出现问题
    var val = value.split("");
    value = val.filter(function (item) {
        if (item && item != '') {
            return item;
        }
    });
    return value;
}

//移除表情
// value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,'');

//银行卡限制
function formatBankCardInput(card) {
    card = card.replace(/[^\d\w]/g, '');
    card = card + '';
    if (card.length < 1) return '';
    if (card.length > 0 && card.length < 5) return card;
    if (card.length > 4) {
        return card.slice(0, 4) + ' ' + formatBankCardInput(card.slice(4));
    }
}

/*
* HTML 属性
* */
//获取当前css浏览器前缀
function getVendorPrefix() {
    var body = document.body || document.documentElement,
        style = body.style,
        vendor = ['webkit', 'khtml', 'moz', 'ms', 'o'],
        i = 0;
    while (i < vendor.length) {
        if (typeof style[vendor[i] + 'Transition'] === 'string') {
            return vendor[i];
        }
        i++;
    }
}

//获取 translate 坐标
function getTranslateInfo(t) {
    var reg = /translate\((.+)px?,(.+)px?\)/;
    var rst = reg.exec(t);
    if (rst) {
        return {
            x: parseFloat(rst[1]),
            y: parseFloat(rst[2])
        };
    } else {
        return {
            x: 0,
            y: 0
        };
    }
}

//获取查询字段
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

//深扩展
function _extend(target, source) {
    if (_isType(source) == _ARRAY_NAME) {
        for (var i = 0; i < source.length; i++) {
            if (_isType(source[i]) == _ARRAY_NAME) {
                target[i] = source[i].concat(target[i] ? target[i] : []);
                _extend(target[i], source[i]);
            } else if (_isType(source[i]) == _OBJECT_NAME) {
                target[i] = target[i] ? target[i] : {};
                _extend(target[i], source[i]);
            } else {
                target[i] = source[i];
            }
        }
    } else {
        for (var v in source) {
            if (_isType(source[v]) == _ARRAY_NAME) {
                target[v] = source[v].concat(target[v] ? target[v] : []);
                _extend(target[v], source[v]);
            } else if (_isType(source[v]) == _OBJECT_NAME) {
                target[v] = target[v] ? target[v] : {};
                _extend(target[v], source[v]);
            } else {
                target[v] = source[v];
            }
        }
    }
    return target;
}
function extend(target) {
    var targets,
        arg = Array.from(arguments).slice(1, arguments.length);
    if (arg.length > 0) {
        targets = _extend(target, arg[0]);
    }
    if (arg.length > 1) {
        return extend(targets, arg[1]);
    }
    return targets;
}

/*
* 图片压缩返回blob对象
* */
function photoCompress(file, objDiv) {
    EXIF.getData(file, function () {
        EXIF.getAllTags(this);
        Orientation = EXIF.getTag(this, 'Orientation');
    });

    var ready = new FileReader();
    /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
    ready.readAsDataURL(file);
    ready.onload = function () {
        var re = this.result;
        _canvasDataURL(re, file, objDiv);
    };
}
function _canvasDataURL(path, file, callback) {
    var img = new Image();
    img.src = path;
    img.onload = function () {
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        // w = obj.width || w;
        // h = obj.height || (w / scale);
        if (w > 1440 || h > 1440) {
            if (w > h) {
                w = 1440;
                h = w / scale;
            } else {
                h = 1440;
                w = h * scale;
            }
        } else {
            callback(file);
            return;
        }
        var quality = 0.8; // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        // quality值越小，所绘制出的图像越模糊
        // var base64 = canvas.toDataURL('image/jpeg', quality);

        var base64 = null;
        if (Orientation != "" && Orientation != 1) {
            switch (Orientation) {
                case 6:
                    _rotateImg(this, 'left', canvas);
                    break;
                case 8:
                    _rotateImg(this, 'right', canvas);
                    break;
                case 3:
                    // TODO 未生效
                    _rotateImg(this, 'right', canvas);
                    _rotateImg(this, 'right', canvas);
                    break;
            }
        }
        base64 = canvas.toDataURL("image/jpeg", quality);

        // 回调函数返回base64的值
        callback(_convertBase64UrlToBlob(base64));
    };
}
function _convertBase64UrlToBlob(urlData) {
    var arr = urlData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
function _rotateImg(img, direction, canvas) {
    //alert(img);
    //最小与最大旋转方向，图片旋转4次后回到原方向
    var min_step = 0;
    var max_step = 3;
    //var img = document.getElementById(pid);
    if (img == null) return;
    //img的高度和宽度不能在img元素隐藏后获取，否则会出错
    var height = img.height;
    var width = img.width;
    //var step = img.getAttribute('step');
    var step = 2;
    if (step == null) {
        step = min_step;
    }
    if (direction == 'right') {
        step++;
        //旋转到原位置，即超过最大值
        step > max_step && (step = min_step);
    } else {
        step--;
        step < min_step && (step = max_step);
    }
    //img.setAttribute('step', step);
    /*var canvas = document.getElementById('pic_' + pid);
    if (canvas == null) {
        img.style.display = 'none';
        canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'pic_' + pid);
        img.parentNode.appendChild(canvas);
    }  */
    //旋转角度以弧度值为参数
    var degree = step * 90 * Math.PI / 180;
    var ctx = canvas.getContext('2d');
    switch (step) {
        case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
        case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
        case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
        case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
    }
}

;(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/utils/extend.js");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/utils/extend.js");
        }
    }
})();

/***/ })

});