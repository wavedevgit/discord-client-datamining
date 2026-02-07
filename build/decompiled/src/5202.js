// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46460: for (var _fun46460_ip = 0;;) switch (_fun46460_ip) {
        case 0:
            var4 = require;
            var1 = exports;
            var5 = dependencyMap;
            var3 = this;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = var3;
            if (!var3) {
                _fun46460_ip = 34;
                continue _fun46460
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun46460_ip = 51;
                continue _fun46460
            }
        case 37:
            var6 = function arg0, arg1() {
                _fun46461: for (var _fun46461_ip = 0;;) switch (_fun46461_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun46461_ip = 47;
                            continue _fun46461
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun46461_ip = 44;
                            continue _fun46461
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun46461_ip = 55;
                            continue _fun46461
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun46463: for (var _fun46463_ip = 0;;) switch (_fun46463_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun46463_ip = 19;
                                                continue _fun46463
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun46463_ip = 19;
                                            continue _fun46463;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot2 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot2 = var6;
            var0 = function(arg0, arg1) { // Environment: var2
                _fun46464: for (var _fun46464_ip = 0;;) switch (_fun46464_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() {
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun46464_ip = 34;
                            continue _fun46464
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun46464_ip = 114;
                            continue _fun46464
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun46464_ip = 88;
                            continue _fun46464
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun46464_ip = 106;
                        continue _fun46464;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 51:
            var _closure1_slot3 = var0;
            var0 = var3;
            if (!var0) {
                _fun46460_ip = 67;
                continue _fun46460
            }
        case 61:
            var0 = var3.__assign;
        case 67:
            if (var0) {
                _fun46460_ip = 75;
                continue _fun46460
            }
        case 70:
            var0 = function() { // Environment: var2
                _fun46466: for (var _fun46466_ip = 0;;) switch (_fun46466_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun46466_ip = 25;
                            continue _fun46466
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun46467: for (var _fun46467_ip = 0;;) switch (_fun46467_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var3 = arguments.length;
                                    var2 = 1;
                                    var6 = var2 < var3;
                                    var1 = global;
                                    var4 = undefined;
                                    if (!var6) {
                                        _fun46467_ip = 112;
                                        continue _fun46467
                                    }
                                case 22:
                                    var8 = arguments[var2];
                                    var11 = var8;
                                    var6 = var4;
                                    var4 = var6;
                                    for (var7 in var11)
                                        case 43: {
                                            var4 = var6;
                                            case 55: var13 = var7;
                                            var14 = var1.Object;
                                            var14 = var14.prototype;
                                            var15 = var14.hasOwnProperty;
                                            var14 = var15.call;
                                            var14 = var14.bind(var15)(var8, var13);
                                            var6 = var13;
                                            if (!var14) {
                                                _fun46467_ip = 43;
                                                continue _fun46467
                                            }
                                            case 92: var14 = var8[var13];
                                            var0[var13] = var14;
                                            var6 = var13;
                                            _fun46467_ip = 43;
                                            continue _fun46467;
                                        }
                                case 105:
                                    var2 = var2 + 1;
                                    if (var2 < var3) {
                                        _fun46467_ip = 22;
                                        continue _fun46467
                                    }
                                case 112:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot4 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
        case 75:
            var _closure1_slot4 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var1, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 2;
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = var6.Platform;
            var3 = !var3;
            if (var3) {
                _fun46460_ip = 188;
                continue _fun46460
            }
        case 168:
            var6 = var6.Platform;
            var7 = var6.OS;
            var6 = 'web';
            var3 = var6 === var7;
        case 188:
            var _closure1_slot7 = var3;
            var3 = 12;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ComponentCompat;
            var2 = function(arg0) { // Environment: var2
                _fun46468: for (var _fun46468_ip = 0;;) switch (_fun46468_ip) {
                    case 0:
                        var5 = arg0;
                        var _closure2_slot0 = var5;
                        var0 = function arg0, arg1() {
                            _fun46469: for (var _fun46469_ip = 0;;) switch (_fun46469_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = this;
                                    var5 = _closure2_slot0;
                                    var4 = var5.call;
                                    var0 = arg1;
                                    var0 = var4.bind(var5)(var1, var2, var0);
                                    if (var0) {
                                        _fun46469_ip = 36;
                                        continue _fun46469
                                    }
                                case 33:
                                    var0 = var1;
                                case 36:
                                    var _closure3_slot0 = var0;
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var1 = 3;
                                    var1 = var7[var1];
                                    var5 = undefined;
                                    var4 = var6.bind(var5)(var1);
                                    var1 = function(arg0) { // Environment: var3
                                        var1 = arg0;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var1 = var4.bind(var5)(var1);
                                    var0.refreshRequestDebouncer = var1;
                                    var1 = false;
                                    var0._onEndReachedCalled = var1;
                                    var0._initComplete = var1;
                                    var1 = true;
                                    var0._isMounted = var1;
                                    var4 = -1;
                                    var0._relayoutReqIndex = var4;
                                    var8 = 0;
                                    var4 = {
                                        'initialOffset': 0,
                                        'initialRenderIndex': 0,
                                        'isHorizontal': false,
                                        'itemCount': 0,
                                        'renderAheadOffset': 250
                                    };
                                    var0._params = var4;
                                    var4 = {
                                        'height': 0,
                                        'width': 0
                                    };
                                    var0._layout = var4;
                                    var4 = null;
                                    var0._pendingScrollToOffset = var4;
                                    var9 = {
                                        'height': 0,
                                        'width': 0
                                    };
                                    var0._tempDim = var9;
                                    var0._initialOffset = var8;
                                    var0._scrollComponent = var4;
                                    var4 = 4;
                                    var4 = var7[var4];
                                    var4 = var6.bind(var5)(var4);
                                    var4 = var4.BaseItemAnimator;
                                    var8 = var4.prototype;
                                    var8 = Object.create(var8, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var14 = var8;
                                    var4 = new var14[var4](var13);
                                    var4 = var4 instanceof Object ? var4 : var8;
                                    var0._defaultItemAnimator = var4;
                                    var4 = function(arg0, arg1, arg2, arg3) { // Environment: var3
                                        _fun46471: for (var _fun46471_ip = 0;;) switch (_fun46471_ip) {
                                            case 0:
                                                var7 = arg0;
                                                var6 = arg1;
                                                var5 = arg2;
                                                var2 = arg3;
                                                var0 = undefined;
                                                if (!(var0 === var5)) {
                                                    _fun46471_ip = 20;
                                                    continue _fun46471
                                                }
                                            case 18:
                                                var5 = false;
                                            case 20:
                                                if (!(var0 === var2)) {
                                                    _fun46471_ip = 26;
                                                    continue _fun46471
                                                }
                                            case 24:
                                                var2 = false;
                                            case 26:
                                                var3 = _closure3_slot0;
                                                var3 = var3._scrollComponent;
                                                if (!var3) {
                                                    _fun46471_ip = 154;
                                                    continue _fun46471
                                                }
                                            case 42:
                                                var3 = _closure3_slot0;
                                                var3 = var3.props;
                                                var3 = var3.isHorizontal;
                                                if (var3) {
                                                    _fun46471_ip = 95;
                                                    continue _fun46471
                                                }
                                            case 60:
                                                var4 = var6;
                                                if (!var2) {
                                                    _fun46471_ip = 91;
                                                    continue _fun46471
                                                }
                                            case 66:
                                                var3 = _closure3_slot0;
                                                var3 = var3._windowCorrectionConfig;
                                                var3 = var3.value;
                                                var3 = var3.windowShift;
                                                var4 = var6 - var3;
                                            case 91:
                                                var3 = 0;
                                                _fun46471_ip = 131;
                                                continue _fun46471;
                                            case 95:
                                                var6 = var7;
                                                if (!var2) {
                                                    _fun46471_ip = 126;
                                                    continue _fun46471
                                                }
                                            case 101:
                                                var2 = _closure3_slot0;
                                                var2 = var2._windowCorrectionConfig;
                                                var2 = var2.value;
                                                var2 = var2.windowShift;
                                                var6 = var7 - var2;
                                            case 126:
                                                var4 = 0;
                                                var3 = var6;
                                            case 131:
                                                var1 = _closure3_slot0;
                                                var2 = var1._scrollComponent;
                                                var1 = var2.scrollTo;
                                                var1 = var1.bind(var2)(var3, var4, var5);
                                            case 154:
                                                return var0;
                                        }
                                    };
                                    var0.scrollToOffset = var4;
                                    var4 = function(arg0) { // Environment: var3
                                        var2 = _closure3_slot0;
                                        var1 = var2.onItemLayout;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0._onItemLayout = var4;
                                    var4 = function(arg0) { // Environment: var3
                                        _fun46473: for (var _fun46473_ip = 0;;) switch (_fun46473_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var0 = var3.height;
                                                var1 = 0;
                                                if (!(var1 !== var0)) {
                                                    _fun46473_ip = 321;
                                                    continue _fun46473
                                                }
                                            case 17:
                                                var0 = var3.width;
                                                if (!(var1 !== var0)) {
                                                    _fun46473_ip = 321;
                                                    continue _fun46473
                                                }
                                            case 29:
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.canChangeSize;
                                                if (var1) {
                                                    _fun46473_ip = 71;
                                                    continue _fun46473
                                                }
                                            case 50:
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.layoutSize;
                                                if (var1) {
                                                    _fun46473_ip = 317;
                                                    continue _fun46473
                                                }
                                            case 71:
                                                var1 = _closure3_slot0;
                                                var1 = var1._layout;
                                                var2 = var1.height;
                                                var1 = var3.height;
                                                var2 = var2 !== var1;
                                                var1 = _closure3_slot0;
                                                var1 = var1._layout;
                                                var4 = var1.width;
                                                var1 = var3.width;
                                                var1 = var4 !== var1;
                                                var4 = _closure3_slot0;
                                                var5 = var4._layout;
                                                var4 = var3.height;
                                                var5.height = var4;
                                                var4 = _closure3_slot0;
                                                var4 = var4._layout;
                                                var3 = var3.width;
                                                var4.width = var3;
                                                var3 = _closure3_slot0;
                                                var3 = var3._initComplete;
                                                if (var3) {
                                                    _fun46473_ip = 226;
                                                    continue _fun46473
                                                }
                                            case 174:
                                                var4 = _closure3_slot0;
                                                var3 = true;
                                                var4._initComplete = var3;
                                                var5 = _closure3_slot0;
                                                var4 = var5._initTrackers;
                                                var3 = _closure3_slot0;
                                                var3 = var3.props;
                                                var3 = var4.bind(var5)(var3);
                                                var4 = _closure3_slot0;
                                                var3 = var4._processOnEndReached;
                                                var3 = var3.bind(var4)();
                                                _fun46473_ip = 317;
                                                continue _fun46473;
                                            case 226:
                                                if (!var2) {
                                                    _fun46473_ip = 232;
                                                    continue _fun46473
                                                }
                                            case 229:
                                                if (var1) {
                                                    _fun46473_ip = 290;
                                                    continue _fun46473
                                                }
                                            case 232:
                                                if (!var2) {
                                                    _fun46473_ip = 253;
                                                    continue _fun46473
                                                }
                                            case 235:
                                                var2 = _closure3_slot0;
                                                var2 = var2.props;
                                                var2 = var2.isHorizontal;
                                                if (var2) {
                                                    _fun46473_ip = 290;
                                                    continue _fun46473
                                                }
                                            case 253:
                                                if (!var1) {
                                                    _fun46473_ip = 274;
                                                    continue _fun46473
                                                }
                                            case 256:
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.isHorizontal;
                                                if (!var1) {
                                                    _fun46473_ip = 290;
                                                    continue _fun46473
                                                }
                                            case 274:
                                                var2 = _closure3_slot0;
                                                var1 = var2._refreshViewability;
                                                var1 = var1.bind(var2)();
                                                _fun46473_ip = 317;
                                                continue _fun46473;
                                            case 290:
                                                var3 = _closure3_slot0;
                                                var2 = var3._checkAndChangeLayouts;
                                                var0 = _closure3_slot0;
                                                var1 = var0.props;
                                                var0 = true;
                                                var0 = var2.bind(var3)(var1, var0);
                                            case 317:
                                                var0 = undefined;
                                                return var0;
                                            case 321:
                                                var0 = _closure3_slot0;
                                                var0 = var0.props;
                                                var0 = var0.suppressBoundedSizeException;
                                                if (var0) {
                                                    _fun46473_ip = 417;
                                                    continue _fun46473
                                                }
                                            case 342:
                                                var3 = _closure1_slot0;
                                                var4 = _closure1_slot1;
                                                var0 = 5;
                                                var0 = var4[var0];
                                                var1 = undefined;
                                                var0 = var3.bind(var1)(var0);
                                                var2 = var0.default;
                                                var0 = 6;
                                                var0 = var4[var0];
                                                var0 = var3.bind(var1)(var0);
                                                var0 = var0.default;
                                                var7 = var0.layoutException;
                                                var1 = var2.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var8 = var1;
                                                var0 = new var8[var2](var7, var6);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                throw var0;
                                            case 417:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0._onSizeChanged = var4;
                                    var4 = function(arg0) { // Environment: var3
                                        _fun46474: for (var _fun46474_ip = 0;;) switch (_fun46474_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var _closure4_slot0 = var1;
                                                var0 = _closure3_slot0;
                                                var4 = var0._pendingScrollToOffset;
                                                var0 = _closure3_slot0;
                                                if (var4) {
                                                    _fun46474_ip = 65;
                                                    continue _fun46474
                                                }
                                            case 29:
                                                var4 = var0._initStateIfRequired;
                                                var4 = var4.bind(var0)(var1);
                                                if (var4) {
                                                    _fun46474_ip = 71;
                                                    continue _fun46474
                                                }
                                            case 43:
                                                var4 = _closure3_slot0;
                                                var3 = var4.setState;
                                                var2 = function() { // Environment: var2
                                                    var0 = {};
                                                    var1 = _closure4_slot0;
                                                    var0.renderStack = var1;
                                                    return var0;
                                                };
                                                var2 = var3.bind(var4)(var2);
                                                _fun46474_ip = 71;
                                                continue _fun46474;
                                            case 65:
                                                var0._pendingRenderStack = var1;
                                            case 71:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0._renderStackWhenReady = var4;
                                    var4 = function(arg0, arg1) { // Environment: var3
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var3 = var0.dataProvider;
                                        var2 = var3.rowHasChanged;
                                        var1 = arg0;
                                        var0 = arg1;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var0._dataHasChanged = var4;
                                    var4 = function(arg0, arg1) { // Environment: var3
                                        _fun46477: for (var _fun46477_ip = 0;;) switch (_fun46477_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var2 = arg1;
                                                var1 = _closure3_slot0;
                                                var3 = var1._virtualRenderer;
                                                var1 = var3.getLayoutManager;
                                                var4 = var1.bind(var3)();
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.debugHandlers;
                                                if (!var1) {
                                                    _fun46477_ip = 141;
                                                    continue _fun46477
                                                }
                                            case 47:
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.debugHandlers;
                                                var1 = var1.resizeDebugHandler;
                                                if (!var1) {
                                                    _fun46477_ip = 141;
                                                    continue _fun46477
                                                }
                                            case 71:
                                                var1 = var4.getLayouts;
                                                var1 = var1.bind(var4)();
                                                var7 = var1[var2];
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.debugHandlers;
                                                var6 = var1.resizeDebugHandler;
                                                var3 = var6.resizeDebug;
                                                var1 = {};
                                                var8 = var7.width;
                                                var1.width = var8;
                                                var7 = var7.height;
                                                var1.height = var7;
                                                var1 = var3.bind(var6)(var1, var5, var2);
                                            case 141:
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.forceNonDeterministicRendering;
                                                if (!var1) {
                                                    _fun46477_ip = 171;
                                                    continue _fun46477
                                                }
                                            case 159:
                                                var3 = var4.overrideLayout;
                                                var1 = var3.bind(var4)(var2, var5);
                                            case 171:
                                                if (!var1) {
                                                    _fun46477_ip = 259;
                                                    continue _fun46477
                                                }
                                            case 174:
                                                var1 = _closure3_slot0;
                                                var3 = var1._relayoutReqIndex;
                                                var1 = -1;
                                                if (!(var1 !== var3)) {
                                                    _fun46477_ip = 235;
                                                    continue _fun46477
                                                }
                                            case 194:
                                                var3 = _closure3_slot0;
                                                var1 = global;
                                                var5 = var1.Math;
                                                var4 = var5.min;
                                                var1 = _closure3_slot0;
                                                var1 = var1._relayoutReqIndex;
                                                var1 = var4.bind(var5)(var1, var2);
                                                var3._relayoutReqIndex = var1;
                                                _fun46477_ip = 245;
                                                continue _fun46477;
                                            case 235:
                                                var1 = _closure3_slot0;
                                                var1._relayoutReqIndex = var2;
                                            case 245:
                                                var1 = _closure3_slot0;
                                                var0 = var1._queueStateRefresh;
                                                var0 = var0.bind(var1)();
                                            case 259:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0._onViewContainerSizeChange = var4;
                                    var4 = function(arg0, arg1, arg2) { // Environment: var3
                                        _fun46478: for (var _fun46478_ip = 0;;) switch (_fun46478_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var4 = arg1;
                                                var1 = _closure3_slot0;
                                                var6 = var1._virtualRenderer;
                                                var3 = var6.updateOffset;
                                                var7 = _closure3_slot0;
                                                var2 = var7._getWindowCorrection;
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var8 = var2.bind(var7)(var5, var4, var1);
                                                var9 = true;
                                                var12 = var6;
                                                var11 = var5;
                                                var10 = var4;
                                                var1 = var12[var3](var11, var10, var9, var8, var7);
                                                var1 = _closure3_slot0;
                                                var1 = var1.props;
                                                var1 = var1.onScroll;
                                                if (!var1) {
                                                    _fun46478_ip = 109;
                                                    continue _fun46478
                                                }
                                            case 84:
                                                var1 = _closure3_slot0;
                                                var3 = var1.props;
                                                var2 = var3.onScroll;
                                                var1 = arg2;
                                                var1 = var2.bind(var3)(var1, var5, var4);
                                            case 109:
                                                var1 = _closure3_slot0;
                                                var0 = var1._processOnEndReached;
                                                var0 = var0.bind(var1)();
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0._onScroll = var4;
                                    var4 = 7;
                                    var4 = var7[var4];
                                    var4 = var6.bind(var5)(var4);
                                    var8 = var4.default;
                                    var13 = var0._renderStackWhenReady;
                                    var4 = var2.disableRecycling;
                                    var10 = !var4;
                                    var4 = var8.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var12 = function(arg0) { // Environment: var3
                                        var1 = _closure3_slot0;
                                        var0 = arg0;
                                        var1._pendingScrollToOffset = var0;
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var11 = function(arg0) { // Environment: var3
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var2 = var0.dataProvider;
                                        var1 = var2.getStableId;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var14 = var4;
                                    var3 = new var14[var8](var13, var12, var11, var10, var9);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    var0._virtualRenderer = var3;
                                    var3 = var0.props;
                                    var3 = var3.windowCorrectionConfig;
                                    if (var3) {
                                        _fun46469_ip = 428;
                                        continue _fun46469
                                    }
                                case 392:
                                    var3 = {
                                        'applyToItemScroll': false,
                                        'applyToInitialOffset': false
                                    };
                                    var4 = {
                                        'startCorrection': 0,
                                        'endCorrection': 0,
                                        'windowShift': 0
                                    };
                                    var3.value = var4;
                                    var0._windowCorrectionConfig = var3;
                                    _fun46469_ip = 547;
                                    continue _fun46469;
                                case 428:
                                    var3 = var0.props;
                                    var3 = var3.windowCorrectionConfig;
                                    var3 = var3.value;
                                    if (var3) {
                                        _fun46469_ip = 463;
                                        continue _fun46469
                                    }
                                case 447:
                                    var4 = {
                                        'startCorrection': 0,
                                        'endCorrection': 0,
                                        'windowShift': 0
                                    };
                                    _fun46469_ip = 479;
                                    continue _fun46469;
                                case 463:
                                    var3 = var0.props;
                                    var3 = var3.windowCorrectionConfig;
                                    var4 = var3.value;
                                case 479:
                                    var3 = {};
                                    var5 = var0.props;
                                    var5 = var5.windowCorrectionConfig;
                                    var5 = var5.applyToItemScroll;
                                    var5 = !var5;
                                    var5 = !var5;
                                    var3.applyToItemScroll = var5;
                                    var5 = var0.props;
                                    var5 = var5.windowCorrectionConfig;
                                    var5 = var5.applyToInitialOffset;
                                    var5 = !var5;
                                    var5 = !var5;
                                    var3.applyToInitialOffset = var5;
                                    var3.value = var4;
                                    var0._windowCorrectionConfig = var3;
                                case 547:
                                    var3 = var0._getContextFromContextProvider;
                                    var3 = var3.bind(var0)(var2);
                                    var3 = var2.layoutSize;
                                    if (var3) {
                                        _fun46469_ip = 591;
                                        continue _fun46469
                                    }
                                case 567:
                                    var3 = {};
                                    var4 = {};
                                    var3.internalSnapshot = var4;
                                    var4 = {};
                                    var3.renderStack = var4;
                                    var0.state = var3;
                                    _fun46469_ip = 654;
                                    continue _fun46469;
                                case 591:
                                    var4 = var0._layout;
                                    var3 = var2.layoutSize;
                                    var3 = var3.height;
                                    var4.height = var3;
                                    var4 = var0._layout;
                                    var3 = var2.layoutSize;
                                    var3 = var3.width;
                                    var4.width = var3;
                                    var0._initComplete = var1;
                                    var1 = var0._initTrackers;
                                    var1 = var1.bind(var0)(var2);
                                case 654:
                                    return var0;
                            }
                        };
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var3 = var4.bind(var3)(var0, var5);
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46481: for (var _fun46481_ip = 0;;) switch (_fun46481_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = this;
                                    var2 = var1._assertDependencyPresence;
                                    var2 = var2.bind(var1)(var0);
                                    var2 = var1._checkAndChangeLayouts;
                                    var2 = var2.bind(var1)(var0);
                                    var2 = var0.onVisibleIndicesChanged;
                                    if (var2) {
                                        _fun46481_ip = 53;
                                        continue _fun46481
                                    }
                                case 37:
                                    var3 = var1._virtualRenderer;
                                    var2 = var3.removeVisibleItemsListener;
                                    var2 = var2.bind(var3)();
                                case 53:
                                    var2 = var0.onVisibleIndexesChanged;
                                    if (var2) {
                                        _fun46481_ip = 98;
                                        continue _fun46481
                                    }
                                case 62:
                                    var2 = var0.onVisibleIndicesChanged;
                                    if (!var2) {
                                        _fun46481_ip = 94;
                                        continue _fun46481
                                    }
                                case 71:
                                    var2 = var1._virtualRenderer;
                                    var1 = var2.attachVisibleItemsListener;
                                    var0 = var0.onVisibleIndicesChanged;
                                    var0 = var1.bind(var2)(var0);
                                case 94:
                                    var0 = undefined;
                                    return var0;
                                case 98:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 5;
                                    var0 = var4[var0];
                                    var1 = undefined;
                                    var0 = var3.bind(var1)(var0);
                                    var2 = var0.default;
                                    var0 = 6;
                                    var0 = var4[var0];
                                    var0 = var3.bind(var1)(var0);
                                    var0 = var0.default;
                                    var5 = var0.usingOldVisibleIndexesChangedParam;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var6 = var1;
                                    var0 = new var6[var2](var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var4.componentWillReceivePropsCompat = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0._processInitialOffset;
                            var1 = var1.bind(var0)();
                            var1 = var0._processOnEndReached;
                            var1 = var1.bind(var0)();
                            var2 = var0._checkAndChangeLayouts;
                            var1 = var0.props;
                            var1 = var2.bind(var0)(var1);
                            var2 = var0._virtualRenderer;
                            var1 = var2.setOptimizeForAnimations;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var4.componentDidUpdate = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46483: for (var _fun46483_ip = 0;;) switch (_fun46483_ip) {
                                case 0:
                                    var1 = this;
                                    var0 = var1._initComplete;
                                    if (!var0) {
                                        _fun46483_ip = 32;
                                        continue _fun46483
                                    }
                                case 12:
                                    var0 = var1._processInitialOffset;
                                    var0 = var0.bind(var1)();
                                    var0 = var1._processOnEndReached;
                                    var0 = var0.bind(var1)();
                                case 32:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.componentDidMount = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46484: for (var _fun46484_ip = 0;;) switch (_fun46484_ip) {
                                case 0:
                                    var2 = this;
                                    var0 = false;
                                    var2._isMounted = var0;
                                    var0 = var2.props;
                                    var0 = var0.contextProvider;
                                    if (!var0) {
                                        _fun46484_ip = 232;
                                        continue _fun46484
                                    }
                                case 28:
                                    var0 = var2.props;
                                    var1 = var0.contextProvider;
                                    var0 = var1.getUniqueKey;
                                    var1 = var0.bind(var1)();
                                    if (!var1) {
                                        _fun46484_ip = 232;
                                        continue _fun46484
                                    }
                                case 55:
                                    var0 = var2.props;
                                    var6 = var0.contextProvider;
                                    var5 = var6.save;
                                    var3 = _closure1_slot6;
                                    var3 = var3.Constants;
                                    var3 = var3.CONTEXT_PROVIDER_OFFSET_KEY_SUFFIX;
                                    var4 = var1 + var3;
                                    var3 = var2.getCurrentScrollOffset;
                                    var3 = var3.bind(var2)();
                                    var3 = var5.bind(var6)(var4, var3);
                                    var3 = var2.props;
                                    var3 = var3.forceNonDeterministicRendering;
                                    if (!var3) {
                                        _fun46484_ip = 232;
                                        continue _fun46484
                                    }
                                case 125:
                                    var3 = var2._virtualRenderer;
                                    if (!var3) {
                                        _fun46484_ip = 232;
                                        continue _fun46484
                                    }
                                case 134:
                                    var4 = var2._virtualRenderer;
                                    var3 = var4.getLayoutManager;
                                    var4 = var3.bind(var4)();
                                    if (!var4) {
                                        _fun46484_ip = 232;
                                        continue _fun46484
                                    }
                                case 153:
                                    var3 = var4.getLayouts;
                                    var6 = var3.bind(var4)();
                                    var2 = var2.props;
                                    var3 = var2.contextProvider;
                                    var2 = var3.save;
                                    var0 = _closure1_slot6;
                                    var0 = var0.Constants;
                                    var0 = var0.CONTEXT_PROVIDER_LAYOUT_KEY_SUFFIX;
                                    var1 = var1 + var0;
                                    var0 = global;
                                    var5 = var0.JSON;
                                    var4 = var5.stringify;
                                    var0 = {};
                                    var0.layoutArray = var6;
                                    var0 = var4.bind(var5)(var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                case 232:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.componentWillUnmount = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0, arg1) { // Environment: var1
                            _fun46485: for (var _fun46485_ip = 0;;) switch (_fun46485_ip) {
                                case 0:
                                    var5 = this;
                                    var1 = var5._virtualRenderer;
                                    var0 = var1.getLayoutManager;
                                    var2 = var0.bind(var1)();
                                    if (var2) {
                                        _fun46485_ip = 79;
                                        continue _fun46485
                                    }
                                case 22:
                                    var0 = global;
                                    var3 = var0.console;
                                    var1 = var3.warn;
                                    var6 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 8;
                                    var4 = var4[var0];
                                    var0 = undefined;
                                    var0 = var6.bind(var0)(var4);
                                    var0 = var0.Messages;
                                    var0 = var0.WARN_SCROLL_TO_INDEX;
                                    var0 = var1.bind(var3)(var0);
                                    _fun46485_ip = 131;
                                    continue _fun46485;
                                case 79:
                                    var1 = var2.getOffsetForIndex;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    var4 = var5.scrollToOffset;
                                    var10 = var0.x;
                                    var9 = var0.y;
                                    var0 = var5._windowCorrectionConfig;
                                    var7 = var0.applyToItemScroll;
                                    var8 = arg1;
                                    var11 = var5;
                                    var0 = var11[var4](var10, var9, var8, var7, var6);
                                case 131:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.scrollToIndex = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0, arg1) { // Environment: var1
                            _fun46486: for (var _fun46486_ip = 0;;) switch (_fun46486_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = this;
                                    var0 = var1.getRenderedSize;
                                    var4 = var0.bind(var1)();
                                    var0 = var1.getLayout;
                                    var7 = var0.bind(var1)(var2);
                                    var0 = var1.getCurrentScrollOffset;
                                    var3 = var0.bind(var1)();
                                    var0 = var1._windowCorrectionConfig;
                                    var0 = var0.value;
                                    var0 = var0.windowShift;
                                    var3 = var3 + var0;
                                    var0 = var1.props;
                                    var6 = var0.isHorizontal;
                                    if (!var7) {
                                        _fun46486_ip = 184;
                                        continue _fun46486
                                    }
                                case 72:
                                    if (var6) {
                                        _fun46486_ip = 82;
                                        continue _fun46486
                                    }
                                case 75:
                                    var5 = var7.height;
                                    _fun46486_ip = 87;
                                    continue _fun46486;
                                case 82:
                                    var5 = var7.width;
                                case 87:
                                    if (var6) {
                                        _fun46486_ip = 97;
                                        continue _fun46486
                                    }
                                case 90:
                                    var0 = var7.y;
                                    _fun46486_ip = 102;
                                    continue _fun46486;
                                case 97:
                                    var0 = var7.x;
                                case 102:
                                    if (var6) {
                                        _fun46486_ip = 112;
                                        continue _fun46486
                                    }
                                case 105:
                                    var6 = var4.height;
                                    _fun46486_ip = 117;
                                    continue _fun46486;
                                case 112:
                                    var6 = var4.width;
                                case 117:
                                    var4 = var6 + var3;
                                    if (!(!(var5 > var6))) {
                                        _fun46486_ip = 173;
                                        continue _fun46486
                                    }
                                case 125:
                                    if (!(!(var0 < var3))) {
                                        _fun46486_ip = 173;
                                        continue _fun46486
                                    }
                                case 129:
                                    if (!(!(var0 > var4))) {
                                        _fun46486_ip = 173;
                                        continue _fun46486
                                    }
                                case 133:
                                    var0 = var0 + var5;
                                    if (!(var0 > var4)) {
                                        _fun46486_ip = 184;
                                        continue _fun46486
                                    }
                                case 141:
                                    var0 = var0 - var4;
                                    var6 = var1.scrollToOffset;
                                    var12 = var0 + var3;
                                    var11 = var0 + var3;
                                    var10 = arg1;
                                    var9 = true;
                                    var13 = var1;
                                    var0 = var13[var6](var12, var11, var10, var9, var8);
                                    _fun46486_ip = 184;
                                    continue _fun46486;
                                case 173:
                                    var0 = var1.scrollToIndex;
                                    var0 = var0.bind(var1)(var2);
                                case 184:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.bringToFocus = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0, arg1) { // Environment: var1
                            _fun46487: for (var _fun46487_ip = 0;;) switch (_fun46487_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = this;
                                    var0 = var3.props;
                                    var1 = var0.dataProvider;
                                    var0 = var1.getSize;
                                    var1 = var0.bind(var1)();
                                    var0 = 0;
                                    var2 = var0 < var1;
                                    if (!var2) {
                                        _fun46487_ip = 89;
                                        continue _fun46487
                                    }
                                case 36:
                                    var2 = var3.props;
                                    var5 = var2.dataProvider;
                                    var2 = var5.getDataForIndex;
                                    var5 = var2.bind(var5)(var0);
                                    var2 = var0;
                                    if (!(var5 !== var4)) {
                                        _fun46487_ip = 74;
                                        continue _fun46487
                                    }
                                case 65:
                                    var0 = var2 + 1;
                                    if (var0 < var1) {
                                        _fun46487_ip = 36;
                                        continue _fun46487
                                    }
                                case 72:
                                    _fun46487_ip = 89;
                                    continue _fun46487;
                                case 74:
                                    var1 = var3.scrollToIndex;
                                    var0 = arg1;
                                    var0 = var1.bind(var3)(var2, var0);
                                case 89:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.scrollToItem = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46488: for (var _fun46488_ip = 0;;) switch (_fun46488_ip) {
                                case 0:
                                    var0 = this;
                                    var1 = var0._virtualRenderer;
                                    var0 = var1.getLayoutManager;
                                    var2 = var0.bind(var1)();
                                    var0 = undefined;
                                    if (!var2) {
                                        _fun46488_ip = 41;
                                        continue _fun46488
                                    }
                                case 24:
                                    var1 = var2.getLayouts;
                                    var2 = var1.bind(var2)();
                                    var1 = arg0;
                                    var0 = var2[var1];
                                case 41:
                                    return var0;
                            }
                        };
                        var4.getLayout = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            var3 = this;
                            var2 = var3.scrollToOffset;
                            var1 = 0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var4.scrollToTop = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            var3 = this;
                            var0 = var3.props;
                            var1 = var0.dataProvider;
                            var0 = var1.getSize;
                            var1 = var0.bind(var1)();
                            var0 = 1;
                            var2 = var1 - var0;
                            var1 = var3.scrollToIndex;
                            var0 = arg0;
                            var0 = var1.bind(var3)(var2, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var4.scrollToEnd = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46491: for (var _fun46491_ip = 0;;) switch (_fun46491_ip) {
                                case 0:
                                    var0 = this;
                                    var1 = var0._virtualRenderer;
                                    var0 = var1.getViewabilityTracker;
                                    var3 = var0.bind(var1)();
                                    var1 = !var3;
                                    var0 = !var1;
                                    if (var1) {
                                        _fun46491_ip = 44;
                                        continue _fun46491
                                    }
                                case 28:
                                    var2 = var3.updateRenderAheadOffset;
                                    var1 = arg0;
                                    var1 = var2.bind(var3)(var1);
                                    var0 = true;
                                case 44:
                                    return var0;
                            }
                        };
                        var4.updateRenderAheadOffset = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46492: for (var _fun46492_ip = 0;;) switch (_fun46492_ip) {
                                case 0:
                                    var0 = this;
                                    var2 = var0._virtualRenderer;
                                    var1 = var2.getViewabilityTracker;
                                    var2 = var1.bind(var2)();
                                    if (var2) {
                                        _fun46492_ip = 35;
                                        continue _fun46492
                                    }
                                case 22:
                                    var0 = var0.props;
                                    var0 = var0.renderAheadOffset;
                                    _fun46492_ip = 45;
                                    continue _fun46492;
                                case 35:
                                    var1 = var2.getCurrentRenderAheadOffset;
                                    var0 = var1.bind(var2)();
                                case 45:
                                    return var0;
                            }
                        };
                        var4.getCurrentRenderAheadOffset = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46493: for (var _fun46493_ip = 0;;) switch (_fun46493_ip) {
                                case 0:
                                    var0 = this;
                                    var1 = var0._virtualRenderer;
                                    var0 = var1.getViewabilityTracker;
                                    var2 = var0.bind(var1)();
                                    var0 = 0;
                                    if (!var2) {
                                        _fun46493_ip = 34;
                                        continue _fun46493
                                    }
                                case 24:
                                    var1 = var2.getLastActualOffset;
                                    var0 = var1.bind(var2)();
                                case 34:
                                    return var0;
                            }
                        };
                        var4.getCurrentScrollOffset = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46494: for (var _fun46494_ip = 0;;) switch (_fun46494_ip) {
                                case 0:
                                    var0 = this;
                                    var1 = var0._virtualRenderer;
                                    var0 = var1.getViewabilityTracker;
                                    var2 = var0.bind(var1)();
                                    var0 = 0;
                                    if (!var2) {
                                        _fun46494_ip = 34;
                                        continue _fun46494
                                    }
                                case 24:
                                    var1 = var2.findFirstLogicallyVisibleIndex;
                                    var0 = var1.bind(var2)();
                                case 34:
                                    return var0;
                            }
                        };
                        var4.findApproxFirstVisibleIndex = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var0 = this;
                            var0 = var0._layout;
                            return var0;
                        };
                        var4.getRenderedSize = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0._virtualRenderer;
                            var0 = var1.getLayoutDimension;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var4.getContentDimension = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var2 = this;
                            var1 = var2.setState;
                            var0 = {};
                            var3 = {};
                            var0.internalSnapshot = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var4.forceRerender = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46498: for (var _fun46498_ip = 0;;) switch (_fun46498_ip) {
                                case 0:
                                    var1 = this;
                                    var2 = var1._scrollComponent;
                                    var0 = null;
                                    if (!var2) {
                                        _fun46498_ip = 47;
                                        continue _fun46498
                                    }
                                case 14:
                                    var2 = var1._scrollComponent;
                                    var2 = var2.getScrollableNode;
                                    var0 = null;
                                    if (!var2) {
                                        _fun46498_ip = 47;
                                        continue _fun46498
                                    }
                                case 31:
                                    var2 = var1._scrollComponent;
                                    var1 = var2.getScrollableNode;
                                    var0 = var1.bind(var2)();
                                case 47:
                                    return var0;
                            }
                        };
                        var4.getScrollableNode = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46499: for (var _fun46499_ip = 0;;) switch (_fun46499_ip) {
                                case 0:
                                    var1 = this;
                                    var2 = var1._scrollComponent;
                                    var0 = null;
                                    if (!var2) {
                                        _fun46499_ip = 47;
                                        continue _fun46499
                                    }
                                case 14:
                                    var2 = var1._scrollComponent;
                                    var2 = var2.getNativeScrollRef;
                                    var0 = null;
                                    if (!var2) {
                                        _fun46499_ip = 47;
                                        continue _fun46499
                                    }
                                case 31:
                                    var2 = var1._scrollComponent;
                                    var1 = var2.getNativeScrollRef;
                                    var0 = var1.bind(var2)();
                                case 47:
                                    return var0;
                            }
                        };
                        var4.getNativeScrollRef = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46500: for (var _fun46500_ip = 0;;) switch (_fun46500_ip) {
                                case 0:
                                    var5 = this;
                                    var _closure3_slot0 = var5;
                                    var4 = _closure1_slot5;
                                    var3 = var4.createElement;
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var2 = 9;
                                    var2 = var7[var2];
                                    var9 = undefined;
                                    var2 = var6.bind(var9)(var2);
                                    var2 = var2.default;
                                    var8 = _closure1_slot4;
                                    var7 = {};
                                    var0 = function arg0() {
                                        var0 = arg0;
                                        var1 = _closure3_slot0;
                                        var1._scrollComponent = var0;
                                        return var0;
                                    };
                                    var7.ref = var0;
                                    var6 = var5.props;
                                    var0 = var5.props;
                                    var1 = var0.scrollViewProps;
                                    var0 = {};
                                    var10 = var5._onScroll;
                                    var0.onScroll = var10;
                                    var10 = var5._onSizeChanged;
                                    var0.onSizeChanged = var10;
                                    var12 = var5._initComplete;
                                    var11 = 0;
                                    if (!var12) {
                                        _fun46500_ip = 136;
                                        continue _fun46500
                                    }
                                case 115:
                                    var13 = var5._virtualRenderer;
                                    var12 = var13.getLayoutDimension;
                                    var12 = var12.bind(var13)();
                                    var11 = var12.height;
                                case 136:
                                    var0.contentHeight = var11;
                                    var11 = var5._initComplete;
                                    var10 = 0;
                                    if (!var11) {
                                        _fun46500_ip = 173;
                                        continue _fun46500
                                    }
                                case 152:
                                    var12 = var5._virtualRenderer;
                                    var11 = var12.getLayoutDimension;
                                    var11 = var11.bind(var12)();
                                    var10 = var11.width;
                                case 173:
                                    var0.contentWidth = var10;
                                    var10 = var5.getCurrentRenderAheadOffset;
                                    var10 = var10.bind(var5)();
                                    var0.renderAheadOffset = var10;
                                    var18 = undefined;
                                    var17 = var7;
                                    var16 = var6;
                                    var15 = var1;
                                    var14 = var0;
                                    var1 = var18[var8](var17, var16, var15, var14, var13);
                                    var0 = var5._generateRenderStack;
                                    var0 = var0.bind(var5)();
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                            }
                        };
                        var4.renderCompat = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var0 = this;
                            var2 = var0._virtualRenderer;
                            var1 = var2.setOptimizeForAnimations;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var4.prepareForLayoutAnimationRender = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var0 = this;
                            var0 = var0._virtualRenderer;
                            return var0;
                        };
                        var4.getVirtualRenderer = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46504: for (var _fun46504_ip = 0;;) switch (_fun46504_ip) {
                                case 0:
                                    var0 = this;
                                    var1 = var0.props;
                                    var1 = var1.onItemLayout;
                                    if (!var1) {
                                        _fun46504_ip = 36;
                                        continue _fun46504
                                    }
                                case 17:
                                    var2 = var0.props;
                                    var1 = var2.onItemLayout;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                case 36:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.onItemLayout = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46505: for (var _fun46505_ip = 0;;) switch (_fun46505_ip) {
                                case 0:
                                    var1 = this;
                                    var _closure3_slot0 = var1;
                                    var1 = var1._pendingScrollToOffset;
                                    if (!var1) {
                                        _fun46505_ip = 41;
                                        continue _fun46505
                                    }
                                case 18:
                                    var1 = global;
                                    var3 = var1.setTimeout;
                                    var2 = undefined;
                                    var1 = function() { // Environment: var0
                                        _fun46506: for (var _fun46506_ip = 0;;) switch (_fun46506_ip) {
                                            case 0:
                                                var1 = _closure3_slot0;
                                                var1 = var1._pendingScrollToOffset;
                                                if (!var1) {
                                                    _fun46506_ip = 146;
                                                    continue _fun46506
                                                }
                                            case 19:
                                                var1 = _closure3_slot0;
                                                var2 = var1._pendingScrollToOffset;
                                                var3 = null;
                                                var1._pendingScrollToOffset = var3;
                                                var1 = var1.props;
                                                var3 = var1.isHorizontal;
                                                var1 = 0;
                                                if (var3) {
                                                    _fun46506_ip = 61;
                                                    continue _fun46506
                                                }
                                            case 53:
                                                var2.x = var1;
                                                _fun46506_ip = 67;
                                                continue _fun46506;
                                            case 61:
                                                var2.y = var1;
                                            case 67:
                                                var1 = _closure3_slot0;
                                                var6 = var1.scrollToOffset;
                                                var10 = var2.x;
                                                var9 = var2.y;
                                                var2 = var1._windowCorrectionConfig;
                                                var7 = var2.applyToInitialOffset;
                                                var8 = false;
                                                var11 = var1;
                                                var2 = var11[var6](var10, var9, var8, var7, var6);
                                                var1 = var1._pendingRenderStack;
                                                if (!var1) {
                                                    _fun46506_ip = 146;
                                                    continue _fun46506
                                                }
                                            case 117:
                                                var1 = _closure3_slot0;
                                                var2 = var1._renderStackWhenReady;
                                                var0 = var1._pendingRenderStack;
                                                var0 = var2.bind(var1)(var0);
                                                var0 = undefined;
                                                var1._pendingRenderStack = var0;
                                            case 146:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0 = 0;
                                    var0 = var3.bind(var2)(var1, var0);
                                case 41:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4._processInitialOffset = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46507: for (var _fun46507_ip = 0;;) switch (_fun46507_ip) {
                                case 0:
                                    var1 = arg0;
                                    var4 = this;
                                    var0 = var1.contextProvider;
                                    if (!var0) {
                                        _fun46507_ip = 316;
                                        continue _fun46507
                                    }
                                case 18:
                                    var2 = var1.contextProvider;
                                    var0 = var2.getUniqueKey;
                                    var3 = var0.bind(var2)();
                                    if (!var3) {
                                        _fun46507_ip = 316;
                                        continue _fun46507
                                    }
                                case 40:
                                    var6 = var1.contextProvider;
                                    var5 = var6.get;
                                    var2 = _closure1_slot6;
                                    var2 = var2.Constants;
                                    var2 = var2.CONTEXT_PROVIDER_OFFSET_KEY_SUFFIX;
                                    var2 = var3 + var2;
                                    var2 = var5.bind(var6)(var2);
                                    var6 = 'number';
                                    var5 = typeof var2;
                                    var5 = var6 === var5;
                                    if (!var5) {
                                        _fun46507_ip = 99;
                                        continue _fun46507
                                    }
                                case 93:
                                    var6 = 0;
                                    var5 = var2 > var6;
                                case 99:
                                    if (!var5) {
                                        _fun46507_ip = 180;
                                        continue _fun46507
                                    }
                                case 102:
                                    var4._initialOffset = var2;
                                    var2 = var1.onRecreate;
                                    if (!var2) {
                                        _fun46507_ip = 143;
                                        continue _fun46507
                                    }
                                case 117:
                                    var5 = var1.onRecreate;
                                    var2 = {};
                                    var6 = var4._initialOffset;
                                    var2.lastOffset = var6;
                                    var2 = var5.bind(var1)(var2);
                                case 143:
                                    var6 = var1.contextProvider;
                                    var5 = var6.remove;
                                    var2 = _closure1_slot6;
                                    var2 = var2.Constants;
                                    var2 = var2.CONTEXT_PROVIDER_OFFSET_KEY_SUFFIX;
                                    var2 = var3 + var2;
                                    var2 = var5.bind(var6)(var2);
                                case 180:
                                    var2 = var1.forceNonDeterministicRendering;
                                    if (!var2) {
                                        _fun46507_ip = 316;
                                        continue _fun46507
                                    }
                                case 192:
                                    var6 = var1.contextProvider;
                                    var5 = var6.get;
                                    var2 = _closure1_slot6;
                                    var2 = var2.Constants;
                                    var2 = var2.CONTEXT_PROVIDER_LAYOUT_KEY_SUFFIX;
                                    var2 = var3 + var2;
                                    var6 = var5.bind(var6)(var2);
                                    var2 = var6;
                                    if (!var2) {
                                        _fun46507_ip = 245;
                                        continue _fun46507
                                    }
                                case 234:
                                    var7 = 'string';
                                    var5 = typeof var6;
                                    var2 = var7 === var5;
                                case 245:
                                    if (!var2) {
                                        _fun46507_ip = 316;
                                        continue _fun46507
                                    }
                                case 248:
                                    var2 = global;
                                    var5 = var2.JSON;
                                    var2 = var5.parse;
                                    var2 = var2.bind(var5)(var6);
                                    var2 = var2.layoutArray;
                                    var4._cachedLayouts = var2;
                                    var2 = var1.contextProvider;
                                    var1 = var2.remove;
                                    var0 = _closure1_slot6;
                                    var0 = var0.Constants;
                                    var0 = var0.CONTEXT_PROVIDER_LAYOUT_KEY_SUFFIX;
                                    var0 = var3 + var0;
                                    var0 = var1.bind(var2)(var0);
                                case 316:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4._getContextFromContextProvider = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0, arg1) { // Environment: var1
                            _fun46508: for (var _fun46508_ip = 0;;) switch (_fun46508_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = this;
                                    var3 = var1._params;
                                    var2 = var0.isHorizontal;
                                    var3.isHorizontal = var2;
                                    var3 = var1._params;
                                    var4 = var0.dataProvider;
                                    var2 = var4.getSize;
                                    var2 = var2.bind(var4)();
                                    var3.itemCount = var2;
                                    var5 = var1._virtualRenderer;
                                    var4 = var5.setParamsAndDimensions;
                                    var3 = var1._params;
                                    var2 = var1._layout;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var4 = var1._virtualRenderer;
                                    var3 = var4.setLayoutProvider;
                                    var2 = var0.layoutProvider;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = var0.dataProvider;
                                    var2 = var3.hasStableIds;
                                    var2 = var2.bind(var3)();
                                    if (!var2) {
                                        _fun46508_ip = 145;
                                        continue _fun46508
                                    }
                                case 124:
                                    var3 = var1.props;
                                    var4 = var3.dataProvider;
                                    var3 = var0.dataProvider;
                                    var2 = var4 !== var3;
                                case 145:
                                    if (!var2) {
                                        _fun46508_ip = 260;
                                        continue _fun46508
                                    }
                                case 148:
                                    var3 = var0.dataProvider;
                                    var2 = var3.requiresDataChangeHandling;
                                    var2 = var2.bind(var3)();
                                    var4 = var1._virtualRenderer;
                                    if (var2) {
                                        _fun46508_ip = 243;
                                        continue _fun46508
                                    }
                                case 173:
                                    var2 = var4.hasPendingAnimationOptimization;
                                    var2 = var2.bind(var4)();
                                    if (!var2) {
                                        _fun46508_ip = 260;
                                        continue _fun46508
                                    }
                                case 186:
                                    var2 = global;
                                    var5 = var2.console;
                                    var3 = var5.warn;
                                    var7 = _closure1_slot0;
                                    var6 = _closure1_slot1;
                                    var2 = 8;
                                    var6 = var6[var2];
                                    var2 = undefined;
                                    var2 = var7.bind(var2)(var6);
                                    var2 = var2.Messages;
                                    var2 = var2.ANIMATION_ON_PAGINATION;
                                    var2 = var3.bind(var5)(var2);
                                    _fun46508_ip = 260;
                                    continue _fun46508;
                                case 243:
                                    var3 = var4.handleDataSetChange;
                                    var2 = var0.dataProvider;
                                    var2 = var3.bind(var4)(var2);
                                case 260:
                                    var2 = var1.props;
                                    var3 = var2.layoutProvider;
                                    var2 = var0.layoutProvider;
                                    if (!(var3 === var2)) {
                                        _fun46508_ip = 710;
                                        continue _fun46508
                                    }
                                case 284:
                                    var2 = var1.props;
                                    var3 = var2.isHorizontal;
                                    var2 = var0.isHorizontal;
                                    if (!(var3 === var2)) {
                                        _fun46508_ip = 710;
                                        continue _fun46508
                                    }
                                case 308:
                                    var2 = var1.props;
                                    var3 = var2.dataProvider;
                                    var2 = var0.dataProvider;
                                    if (!(var3 === var2)) {
                                        _fun46508_ip = 577;
                                        continue _fun46508
                                    }
                                case 332:
                                    var2 = arg1;
                                    if (var2) {
                                        _fun46508_ip = 482;
                                        continue _fun46508
                                    }
                                case 341:
                                    var2 = var1._relayoutReqIndex;
                                    var10 = 0;
                                    if (!(var2 >= var10)) {
                                        _fun46508_ip = 810;
                                        continue _fun46508
                                    }
                                case 356:
                                    var3 = var1._virtualRenderer;
                                    var2 = var3.getLayoutManager;
                                    var5 = var2.bind(var3)();
                                    if (!var5) {
                                        _fun46508_ip = 810;
                                        continue _fun46508
                                    }
                                case 378:
                                    var3 = var0.dataProvider;
                                    var2 = var3.getSize;
                                    var4 = var2.bind(var3)();
                                    var3 = var5.relayoutFromIndex;
                                    var2 = global;
                                    var8 = var2.Math;
                                    var7 = var8.min;
                                    var9 = var2.Math;
                                    var6 = var9.max;
                                    var2 = 1;
                                    var2 = var4 - var2;
                                    var6 = var6.bind(var9)(var2, var10);
                                    var2 = var1._relayoutReqIndex;
                                    var2 = var7.bind(var8)(var6, var2);
                                    var2 = var3.bind(var5)(var2, var4);
                                    var2 = -1;
                                    var1._relayoutReqIndex = var2;
                                    var2 = var1._refreshViewability;
                                    var2 = var2.bind(var1)();
                                    _fun46508_ip = 810;
                                    continue _fun46508;
                                case 482:
                                    var3 = var1._virtualRenderer;
                                    var2 = var3.getLayoutManager;
                                    var3 = var2.bind(var3)();
                                    if (!var3) {
                                        _fun46508_ip = 810;
                                        continue _fun46508
                                    }
                                case 504:
                                    var2 = var3.getLayouts;
                                    var8 = var2.bind(var3)();
                                    var4 = var1._virtualRenderer;
                                    var3 = var4.setLayoutManager;
                                    var7 = var0.layoutProvider;
                                    var6 = var7.createLayoutManager;
                                    var5 = var1._layout;
                                    var2 = var0.isHorizontal;
                                    var2 = var6.bind(var7)(var5, var2, var8);
                                    var2 = var3.bind(var4)(var2);
                                    var2 = var1._refreshViewability;
                                    var2 = var2.bind(var1)();
                                    _fun46508_ip = 810;
                                    continue _fun46508;
                                case 577:
                                    var3 = var0.dataProvider;
                                    var2 = var3.getSize;
                                    var3 = var2.bind(var3)();
                                    var2 = var1.props;
                                    var4 = var2.dataProvider;
                                    var2 = var4.getSize;
                                    var2 = var2.bind(var4)();
                                    if (!(var3 > var2)) {
                                        _fun46508_ip = 626;
                                        continue _fun46508
                                    }
                                case 618:
                                    var2 = false;
                                    var1._onEndReachedCalled = var2;
                                case 626:
                                    var3 = var1._virtualRenderer;
                                    var2 = var3.getLayoutManager;
                                    var5 = var2.bind(var3)();
                                    if (!var5) {
                                        _fun46508_ip = 810;
                                        continue _fun46508
                                    }
                                case 648:
                                    var4 = var5.relayoutFromIndex;
                                    var3 = var0.dataProvider;
                                    var2 = var3.getFirstIndexToProcessInternal;
                                    var3 = var2.bind(var3)();
                                    var6 = var0.dataProvider;
                                    var2 = var6.getSize;
                                    var2 = var2.bind(var6)();
                                    var2 = var4.bind(var5)(var3, var2);
                                    var3 = var1._virtualRenderer;
                                    var2 = var3.refresh;
                                    var2 = var2.bind(var3)();
                                    _fun46508_ip = 810;
                                    continue _fun46508;
                                case 710:
                                    var4 = var1._virtualRenderer;
                                    var3 = var4.setLayoutManager;
                                    var7 = var0.layoutProvider;
                                    var6 = var7.createLayoutManager;
                                    var5 = var1._layout;
                                    var2 = var0.isHorizontal;
                                    var2 = var6.bind(var7)(var5, var2);
                                    var2 = var3.bind(var4)(var2);
                                    var0 = var0.layoutProvider;
                                    var0 = var0.shouldRefreshWithAnchoring;
                                    var2 = var1._virtualRenderer;
                                    if (var0) {
                                        _fun46508_ip = 790;
                                        continue _fun46508
                                    }
                                case 778:
                                    var0 = var2.refresh;
                                    var0 = var0.bind(var2)();
                                    _fun46508_ip = 800;
                                    continue _fun46508;
                                case 790:
                                    var0 = var2.refreshWithAnchor;
                                    var0 = var0.bind(var2)();
                                case 800:
                                    var0 = var1._refreshViewability;
                                    var0 = var0.bind(var1)();
                                case 810:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4._checkAndChangeLayouts = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var1 = this;
                            var2 = var1._virtualRenderer;
                            var0 = var2.refresh;
                            var0 = var0.bind(var2)();
                            var0 = var1._queueStateRefresh;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var4._refreshViewability = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var1 = var2.refreshRequestDebouncer;
                            var0 = function() { // Environment: var0
                                _fun46511: for (var _fun46511_ip = 0;;) switch (_fun46511_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var1 = var1._isMounted;
                                        if (!var1) {
                                            _fun46511_ip = 38;
                                            continue _fun46511
                                        }
                                    case 16:
                                        var2 = _closure3_slot0;
                                        var1 = var2.setState;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 38:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var4._queueStateRefresh = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46513: for (var _fun46513_ip = 0;;) switch (_fun46513_ip) {
                                case 0:
                                    var2 = this;
                                    var0 = var2.state;
                                    var0 = !var0;
                                    if (!var0) {
                                        _fun46513_ip = 27;
                                        continue _fun46513
                                    }
                                case 14:
                                    var1 = var2.getHasRenderedOnce;
                                    var1 = var1.bind(var2)();
                                    var0 = !var1;
                                case 27:
                                    if (!var0) {
                                        _fun46513_ip = 55;
                                        continue _fun46513
                                    }
                                case 30:
                                    var1 = {};
                                    var3 = {};
                                    var1.internalSnapshot = var3;
                                    var3 = arg0;
                                    var1.renderStack = var3;
                                    var2.state = var1;
                                    var0 = true;
                                case 55:
                                    return var0;
                            }
                        };
                        var4._initStateIfRequired = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46514: for (var _fun46514_ip = 0;;) switch (_fun46514_ip) {
                                case 0:
                                    var7 = arg0;
                                    var2 = this;
                                    var0 = var2._assertDependencyPresence;
                                    var0 = var0.bind(var2)(var7);
                                    var0 = var7.onVisibleIndexesChanged;
                                    if (var0) {
                                        _fun46514_ip = 438;
                                        continue _fun46514
                                    }
                                case 29:
                                    var0 = var7.onVisibleIndicesChanged;
                                    if (!var0) {
                                        _fun46514_ip = 61;
                                        continue _fun46514
                                    }
                                case 38:
                                    var3 = var2._virtualRenderer;
                                    var1 = var3.attachVisibleItemsListener;
                                    var0 = var7.onVisibleIndicesChanged;
                                    var0 = var1.bind(var3)(var0);
                                case 61:
                                    var0 = {};
                                    var1 = var2._initialOffset;
                                    if (var1) {
                                        _fun46514_ip = 80;
                                        continue _fun46514
                                    }
                                case 72:
                                    var1 = var7.initialOffset;
                                    _fun46514_ip = 86;
                                    continue _fun46514;
                                case 80:
                                    var1 = var2._initialOffset;
                                case 86:
                                    var0.initialOffset = var1;
                                    var1 = var7.initialRenderIndex;
                                    var0.initialRenderIndex = var1;
                                    var1 = var7.isHorizontal;
                                    var0.isHorizontal = var1;
                                    var3 = var7.dataProvider;
                                    var1 = var3.getSize;
                                    var1 = var1.bind(var3)();
                                    var0.itemCount = var1;
                                    var1 = var7.renderAheadOffset;
                                    var0.renderAheadOffset = var1;
                                    var2._params = var0;
                                    var4 = var2._virtualRenderer;
                                    var3 = var4.setParamsAndDimensions;
                                    var1 = var2._params;
                                    var0 = var2._layout;
                                    var0 = var3.bind(var4)(var1, var0);
                                    var5 = var7.layoutProvider;
                                    var4 = var5.createLayoutManager;
                                    var3 = var2._layout;
                                    var1 = var7.isHorizontal;
                                    var0 = var2._cachedLayouts;
                                    var3 = var4.bind(var5)(var3, var1, var0);
                                    var1 = var2._virtualRenderer;
                                    var0 = var1.setLayoutManager;
                                    var0 = var0.bind(var1)(var3);
                                    var4 = var2._virtualRenderer;
                                    var1 = var4.setLayoutProvider;
                                    var0 = var7.layoutProvider;
                                    var0 = var1.bind(var4)(var0);
                                    var1 = var2._virtualRenderer;
                                    var0 = var1.init;
                                    var0 = var0.bind(var1)();
                                    var1 = var2._virtualRenderer;
                                    var0 = var1.getInitialOffset;
                                    var0 = var0.bind(var1)();
                                    var1 = var3.getContentDimension;
                                    var1 = var1.bind(var3)();
                                    var3 = var0.y;
                                    var4 = 0;
                                    if (!(var3 > var4)) {
                                        _fun46514_ip = 331;
                                        continue _fun46514
                                    }
                                case 311:
                                    var5 = var1.height;
                                    var3 = var2._layout;
                                    var3 = var3.height;
                                    if (!(!(var5 > var3))) {
                                        _fun46514_ip = 402;
                                        continue _fun46514
                                    }
                                case 331:
                                    var3 = var0.x;
                                    if (!(var3 > var4)) {
                                        _fun46514_ip = 360;
                                        continue _fun46514
                                    }
                                case 340:
                                    var3 = var1.width;
                                    var1 = var2._layout;
                                    var1 = var1.width;
                                    if (!(!(var3 > var1))) {
                                        _fun46514_ip = 402;
                                        continue _fun46514
                                    }
                                case 360:
                                    var4 = var2._virtualRenderer;
                                    var3 = var4.startViewabilityTracker;
                                    var6 = var2._getWindowCorrection;
                                    var5 = var0.x;
                                    var1 = var0.y;
                                    var1 = var6.bind(var2)(var5, var1, var7);
                                    var1 = var3.bind(var4)(var1);
                                    _fun46514_ip = 434;
                                    continue _fun46514;
                                case 402:
                                    var2._pendingScrollToOffset = var0;
                                    var0 = var2._initStateIfRequired;
                                    var0 = var0.bind(var2)();
                                    if (var0) {
                                        _fun46514_ip = 434;
                                        continue _fun46514
                                    }
                                case 421:
                                    var1 = var2.setState;
                                    var0 = {};
                                    var0 = var1.bind(var2)(var0);
                                case 434:
                                    var0 = undefined;
                                    return var0;
                                case 438:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 5;
                                    var0 = var4[var0];
                                    var1 = undefined;
                                    var0 = var3.bind(var1)(var0);
                                    var2 = var0.default;
                                    var0 = 6;
                                    var0 = var4[var0];
                                    var0 = var3.bind(var1)(var0);
                                    var0 = var0.default;
                                    var10 = var0.usingOldVisibleIndexesChangedParam;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var11 = var1;
                                    var0 = new var11[var2](var10, var9);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var4._initTrackers = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0, arg1, arg2) { // Environment: var1
                            _fun46515: for (var _fun46515_ip = 0;;) switch (_fun46515_ip) {
                                case 0:
                                    var6 = arg2;
                                    var1 = this;
                                    var0 = var6.applyWindowCorrection;
                                    if (!var0) {
                                        _fun46515_ip = 45;
                                        continue _fun46515
                                    }
                                case 15:
                                    var5 = var6.applyWindowCorrection;
                                    var2 = var1._windowCorrectionConfig;
                                    var4 = var2.value;
                                    var3 = arg0;
                                    var2 = arg1;
                                    var0 = var5.bind(var6)(var3, var2, var4);
                                case 45:
                                    if (var0) {
                                        _fun46515_ip = 59;
                                        continue _fun46515
                                    }
                                case 48:
                                    var1 = var1._windowCorrectionConfig;
                                    var0 = var1.value;
                                case 59:
                                    return var0;
                            }
                        };
                        var4._getWindowCorrection = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46516: for (var _fun46516_ip = 0;;) switch (_fun46516_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.dataProvider;
                                    if (!var1) {
                                        _fun46516_ip = 21;
                                        continue _fun46516
                                    }
                                case 12:
                                    var0 = var0.layoutProvider;
                                    if (var0) {
                                        _fun46516_ip = 96;
                                        continue _fun46516
                                    }
                                case 21:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 5;
                                    var0 = var4[var0];
                                    var1 = undefined;
                                    var0 = var3.bind(var1)(var0);
                                    var2 = var0.default;
                                    var0 = 6;
                                    var0 = var4[var0];
                                    var0 = var3.bind(var1)(var0);
                                    var0 = var0.default;
                                    var5 = var0.unresolvedDependenciesException;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var6 = var1;
                                    var0 = new var6[var2](var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 96:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4._assertDependencyPresence = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46517: for (var _fun46517_ip = 0;;) switch (_fun46517_ip) {
                                case 0:
                                    var1 = arg0;
                                    if (var1) {
                                        _fun46517_ip = 87;
                                        continue _fun46517
                                    }
                                case 6:
                                    var0 = 0;
                                    if (!(var0 !== var1)) {
                                        _fun46517_ip = 87;
                                        continue _fun46517
                                    }
                                case 12:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var0 = 5;
                                    var0 = var4[var0];
                                    var1 = undefined;
                                    var0 = var3.bind(var1)(var0);
                                    var2 = var0.default;
                                    var0 = 6;
                                    var0 = var4[var0];
                                    var0 = var3.bind(var1)(var0);
                                    var0 = var0.default;
                                    var5 = var0.itemTypeNullException;
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var6 = var1;
                                    var0 = new var6[var2](var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 87:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4._assertType = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0) { // Environment: var1
                            _fun46518: for (var _fun46518_ip = 0;;) switch (_fun46518_ip) {
                                case 0:
                                    var4 = this;
                                    var0 = var4.props;
                                    var1 = var0.dataProvider;
                                    var0 = var1.getSize;
                                    var1 = var0.bind(var1)();
                                    var0 = arg0;
                                    var11 = var0.dataIndex;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var8 = 10;
                                    var2 = var2[var8];
                                    var7 = undefined;
                                    var2 = var3.bind(var7)(var2);
                                    var3 = var2.ObjectUtil;
                                    var2 = var3.isNullOrUndefined;
                                    var2 = var2.bind(var3)(var11);
                                    if (var2) {
                                        _fun46518_ip = 540;
                                        continue _fun46518
                                    }
                                case 81:
                                    if (!(var11 < var1)) {
                                        _fun46518_ip = 540;
                                        continue _fun46518
                                    }
                                case 88:
                                    var2 = var4._virtualRenderer;
                                    var1 = var2.getLayoutManager;
                                    var2 = var1.bind(var2)();
                                    var1 = var2.getLayouts;
                                    var1 = var1.bind(var2)();
                                    var9 = var1[var11];
                                    var1 = var4.props;
                                    var2 = var1.dataProvider;
                                    var1 = var2.getDataForIndex;
                                    var13 = var1.bind(var2)(var11);
                                    var1 = var4.props;
                                    var2 = var1.layoutProvider;
                                    var1 = var2.getLayoutTypeForIndex;
                                    var12 = var1.bind(var2)(var11);
                                    var2 = var4._virtualRenderer;
                                    var1 = var2.syncAndGetKey;
                                    var14 = var1.bind(var2)(var11);
                                    var2 = var4._virtualRenderer;
                                    var1 = var2.getLayoutManager;
                                    var2 = var1.bind(var2)();
                                    var1 = var2.getStyleOverridesForIndex;
                                    var10 = var1.bind(var2)(var11);
                                    var1 = var4._assertType;
                                    var1 = var1.bind(var4)(var12);
                                    var1 = var4.props;
                                    var1 = var1.forceNonDeterministicRendering;
                                    if (var1) {
                                        _fun46518_ip = 244;
                                        continue _fun46518
                                    }
                                case 231:
                                    var1 = var4._checkExpectedDimensionDiscrepancy;
                                    var1 = var1.bind(var4)(var9, var12, var11);
                                case 244:
                                    var3 = _closure1_slot5;
                                    var2 = var3.createElement;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var0 = 11;
                                    var0 = var5[var0];
                                    var0 = var6.bind(var7)(var0);
                                    var1 = var0.default;
                                    var0 = {};
                                    var0.key = var14;
                                    var0.data = var13;
                                    var13 = var4._dataHasChanged;
                                    var0.dataHasChanged = var13;
                                    var13 = var9.x;
                                    var0.x = var13;
                                    var13 = var9.y;
                                    var0.y = var13;
                                    var0.layoutType = var12;
                                    var0.index = var11;
                                    var0.styleOverrides = var10;
                                    var10 = var4.props;
                                    var10 = var10.layoutProvider;
                                    var0.layoutProvider = var10;
                                    var10 = var4.props;
                                    var10 = var10.forceNonDeterministicRendering;
                                    var0.forceNonDeterministicRendering = var10;
                                    var10 = var4.props;
                                    var10 = var10.isHorizontal;
                                    var0.isHorizontal = var10;
                                    var10 = var4._onViewContainerSizeChange;
                                    var0.onSizeChanged = var10;
                                    var10 = var4.props;
                                    var10 = var10.rowRenderer;
                                    var0.childRenderer = var10;
                                    var10 = var9.height;
                                    var0.height = var10;
                                    var9 = var9.width;
                                    var0.width = var9;
                                    var5 = var5[var8];
                                    var5 = var6.bind(var7)(var5);
                                    var8 = var5.Default;
                                    var7 = var8.value;
                                    var5 = var4.props;
                                    var6 = var5.itemAnimator;
                                    var5 = var4._defaultItemAnimator;
                                    var5 = var7.bind(var8)(var6, var5);
                                    var0.itemAnimator = var5;
                                    var5 = var4.props;
                                    var5 = var5.extendedState;
                                    var0.extendedState = var5;
                                    var5 = var4.state;
                                    var5 = var5.internalSnapshot;
                                    var0.internalSnapshot = var5;
                                    var5 = var4.props;
                                    var5 = var5.renderItemContainer;
                                    var0.renderItemContainer = var5;
                                    var4 = var4._onItemLayout;
                                    var0.onItemLayout = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                case 540:
                                    var0 = null;
                                    return var0;
                            }
                        };
                        var4._renderRowUsingMeta = var3;
                        var4 = var0.prototype;
                        var3 = function(arg0, arg1, arg2) { // Environment: var1
                            _fun46519: for (var _fun46519_ip = 0;;) switch (_fun46519_ip) {
                                case 0:
                                    var1 = arg2;
                                    var0 = this;
                                    var2 = var0.props;
                                    var5 = var2.layoutProvider;
                                    var4 = var5.checkDimensionDiscrepancy;
                                    var3 = arg0;
                                    var2 = arg1;
                                    var2 = var4.bind(var5)(var3, var2, var1);
                                    if (!var2) {
                                        _fun46519_ip = 94;
                                        continue _fun46519
                                    }
                                case 39:
                                    var3 = var0._relayoutReqIndex;
                                    var2 = -1;
                                    if (!(var2 !== var3)) {
                                        _fun46519_ip = 88;
                                        continue _fun46519
                                    }
                                case 55:
                                    var2 = global;
                                    var4 = var2.Math;
                                    var3 = var4.min;
                                    var2 = var0._relayoutReqIndex;
                                    var2 = var3.bind(var4)(var2, var1);
                                    var0._relayoutReqIndex = var2;
                                    _fun46519_ip = 94;
                                    continue _fun46519;
                                case 88:
                                    var0._relayoutReqIndex = var1;
                                case 94:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4._checkExpectedDimensionDiscrepancy = var3;
                        var4 = var0.prototype;
                        var3 = function() { // Environment: var1
                            _fun46520: for (var _fun46520_ip = 0;;) switch (_fun46520_ip) {
                                case 0:
                                    var6 = this;
                                    var0 = new Array(0);
                                    var1 = var6.state;
                                    if (!var1) {
                                        _fun46520_ip = 109;
                                        continue _fun46520
                                    }
                                case 15:
                                    var1 = var6.state;
                                    var4 = var1.renderStack;
                                    for (var1 in var4)
                                        case 34: {
                                            case 43: var10 = var1;
                                            var7 = var6.state;
                                            var8 = var7.renderStack;
                                            var7 = var8.hasOwnProperty;
                                            var7 = var7.bind(var8)(var10);
                                            if (!var7) {
                                                _fun46520_ip = 34;
                                                continue _fun46520
                                            }
                                            case 71: var8 = var0.push;
                                            var9 = var6._renderRowUsingMeta;
                                            var7 = var6.state;
                                            var7 = var7.renderStack;
                                            var7 = var7[var10];
                                            var7 = var9.bind(var6)(var7);
                                            var7 = var8.bind(var0)(var7);
                                            _fun46520_ip = 34;
                                            continue _fun46520;
                                        }
                                case 109:
                                    return var0;
                            }
                        };
                        var4._generateRenderStack = var3;
                        var3 = var0.prototype;
                        var1 = function() { // Environment: var1
                            _fun46521: for (var _fun46521_ip = 0;;) switch (_fun46521_ip) {
                                case 0:
                                    var0 = this;
                                    var1 = var0.props;
                                    var1 = var1.onEndReached;
                                    if (!var1) {
                                        _fun46521_ip = 340;
                                        continue _fun46521
                                    }
                                case 20:
                                    var1 = var0._virtualRenderer;
                                    if (!var1) {
                                        _fun46521_ip = 340;
                                        continue _fun46521
                                    }
                                case 32:
                                    var2 = var0._virtualRenderer;
                                    var1 = var2.getLayoutDimension;
                                    var1 = var1.bind(var2)();
                                    var3 = var0._virtualRenderer;
                                    var2 = var3.getViewabilityTracker;
                                    var4 = var2.bind(var3)();
                                    if (!var4) {
                                        _fun46521_ip = 340;
                                        continue _fun46521
                                    }
                                case 70:
                                    var2 = var0.props;
                                    var2 = var2.isHorizontal;
                                    if (var2) {
                                        _fun46521_ip = 106;
                                        continue _fun46521
                                    }
                                case 84:
                                    var3 = var1.height;
                                    var2 = var0._layout;
                                    var2 = var2.height;
                                    var2 = var3 - var2;
                                    _fun46521_ip = 126;
                                    continue _fun46521;
                                case 106:
                                    var3 = var1.width;
                                    var1 = var0._layout;
                                    var1 = var1.width;
                                    var2 = var3 - var1;
                                case 126:
                                    var6 = 0;
                                    var1 = 0;
                                    if (!var4) {
                                        _fun46521_ip = 143;
                                        continue _fun46521
                                    }
                                case 133:
                                    var3 = var4.getLastOffset;
                                    var1 = var3.bind(var4)();
                                case 143:
                                    var2 = var2 - var1;
                                    var1 = var0.props;
                                    var3 = var1.isHorizontal;
                                    var1 = var0._layout;
                                    if (var3) {
                                        _fun46521_ip = 174;
                                        continue _fun46521
                                    }
                                case 167:
                                    var8 = var1.height;
                                    _fun46521_ip = 179;
                                    continue _fun46521;
                                case 174:
                                    var8 = var1.width;
                                case 179:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var1 = 10;
                                    var3 = var7[var1];
                                    var4 = undefined;
                                    var3 = var5.bind(var4)(var3);
                                    var10 = var3.Default;
                                    var9 = var10.value;
                                    var3 = var0.props;
                                    var3 = var3.onEndReachedThresholdRelative;
                                    var3 = var9.bind(var10)(var3, var6);
                                    var3 = var8 * var3;
                                    var1 = var7[var1];
                                    var1 = var5.bind(var4)(var1);
                                    var5 = var1.Default;
                                    var4 = var5.value;
                                    var1 = var0.props;
                                    var1 = var1.onEndReachedThreshold;
                                    var1 = var4.bind(var5)(var1, var6);
                                    if (!(!(var2 <= var3))) {
                                        _fun46521_ip = 291;
                                        continue _fun46521
                                    }
                                case 277:
                                    if (!(!(var2 <= var1))) {
                                        _fun46521_ip = 291;
                                        continue _fun46521
                                    }
                                case 281:
                                    var1 = false;
                                    var0._onEndReachedCalled = var1;
                                    _fun46521_ip = 340;
                                    continue _fun46521;
                                case 291:
                                    var1 = var0.props;
                                    var1 = var1.onEndReached;
                                    if (!var1) {
                                        _fun46521_ip = 314;
                                        continue _fun46521
                                    }
                                case 305:
                                    var2 = var0._onEndReachedCalled;
                                    var1 = !var2;
                                case 314:
                                    if (!var1) {
                                        _fun46521_ip = 340;
                                        continue _fun46521
                                    }
                                case 317:
                                    var1 = true;
                                    var0._onEndReachedCalled = var1;
                                    var1 = var0.props;
                                    var0 = var1.onEndReached;
                                    var0 = var0.bind(var1)();
                                case 340:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3._processOnEndReached = var1;
                        var1 = {
                            'canChangeSize': false,
                            'disableRecycling': false,
                            'initialOffset': 0,
                            'initialRenderIndex': 0,
                            'isHorizontal': false,
                            'onEndReachedThreshold': 0,
                            'onEndReachedThresholdRelative': 0
                        };
                        var3 = _closure1_slot7;
                        var2 = 250;
                        if (!var3) {
                            _fun46468_ip = 655;
                            continue _fun46468
                        }
                    case 649:
                        var2 = 1000;
                    case 655:
                        var1.renderAheadOffset = var2;
                        var0.defaultProps = var1;
                        var1 = {};
                        var0.propTypes = var1;
                        return var0;
                }
            };
            var2 = var2.bind(var0)(var3);
            var1.default = var2;
            var1 = {};
            var3 = 13;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.instanceOf;
            var6 = 14;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.BaseLayoutProvider;
            var6 = var7.bind(var8)(var6);
            var6 = var6.isRequired;
            var1.layoutProvider = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.instanceOf;
            var6 = 15;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.BaseDataProvider;
            var6 = var7.bind(var8)(var6);
            var6 = var6.isRequired;
            var1.dataProvider = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.instanceOf;
            var6 = 16;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.default;
            var6 = var7.bind(var8)(var6);
            var1.contextProvider = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var6 = var6.isRequired;
            var1.rowRenderer = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var1.initialOffset = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var1.renderAheadOffset = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.bool;
            var1.isHorizontal = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.onScroll = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.onRecreate = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.oneOfType;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var9 = var6.func;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var5[var3];
            var9 = var4.bind(var0)(var9);
            var9 = var9.object;
            var6[1] = var9;
            var6 = var7.bind(var8)(var6);
            var1.externalScrollView = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.onEndReached = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var1.onEndReachedThreshold = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var1.onEndReachedThresholdRelative = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.onVisibleIndexesChanged = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.onVisibleIndicesChanged = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.renderFooter = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var1.initialRenderIndex = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.object;
            var1.layoutSize = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var1.scrollThrottle = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.bool;
            var1.canChangeSize = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.bool;
            var1.useWindowScroll = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.bool;
            var1.disableRecycling = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.bool;
            var1.forceNonDeterministicRendering = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.object;
            var1.extendedState = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.instanceOf;
            var6 = 4;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.BaseItemAnimator;
            var6 = var7.bind(var8)(var6);
            var1.itemAnimator = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.renderContentContainer = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.renderItemContainer = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.bool;
            var1.optimizeForInsertDeleteAnimations = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.oneOfType;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var9 = var6.object;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var5[var3];
            var9 = var4.bind(var0)(var9);
            var9 = var9.number;
            var6[1] = var9;
            var6 = var7.bind(var8)(var6);
            var1.style = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.object;
            var1.scrollViewProps = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.applyWindowCorrection = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.onItemLayout = var6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.object;
            var1.windowCorrectionConfig = var3;
            var2.propTypes = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5203, 27, 5204, 5205, 5182, 5183, 5206, 5210, 5211, 5195, 5213, 5186, 5189, 5198, 5194, 5193]);