webpackJsonp([1],{

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(21);

var _fetch = __webpack_require__(32);

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

        _initDefineProp(this, 'timeList', _descriptor2, this);
    }

    _createClass(Models, [{
        key: 'getList',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var rst;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.get)('api/classify/list', {});

                            case 2:
                                rst = _context.sent;

                                if (!rst) {
                                    _context.next = 6;
                                    break;
                                }

                                this.list = rst.rows;
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

            function getList() {
                return _ref.apply(this, arguments);
            }

            return getList;
        }()
    }, {
        key: 'getTimeList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var rst, list, arr, target;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.get)('api/classify/year', {});

                            case 2:
                                rst = _context2.sent;

                                if (!rst) {
                                    _context2.next = 13;
                                    break;
                                }

                                list = {}, arr = [], target = [];

                                rst.forEach(function (item) {
                                    if (list.length < 1) list.push(item);
                                    list[item.count] = item;
                                    arr.push(item.count);
                                });
                                arr = arr.sort().reverse();
                                target.push(list[arr[1]]);
                                target.push(list[arr[3]]);
                                target.push(list[arr[2]]);
                                target.push(list[arr[0]]);
                                this.timeList = target;
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

            function getTimeList() {
                return _ref2.apply(this, arguments);
            }

            return getTimeList;
        }()
    }]);

    return Models;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'timeList', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'getList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getTimeList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'getTimeList'), _class.prototype)), _class);


var Model = new Models();
exports.default = Model;
(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/store/cate.js");return;
        } /* eslint-disable no-restricted-syntax */for (var key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            }var namedExport = void 0;try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, "/Users/wangxiaolong/Desktop/work/my-items/client-cms/src/store/cate.js");
        }
    }
})();

/***/ })

});