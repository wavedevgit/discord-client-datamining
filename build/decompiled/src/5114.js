// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45792: for (var _fun45792_ip = 0;;) switch (_fun45792_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = var3;
            if (!var0) {
                _fun45792_ip = 34;
                continue _fun45792
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun45792_ip = 51;
                continue _fun45792
            }
        case 37:
            var3 = function arg0, arg1() {
                _fun45793: for (var _fun45793_ip = 0;;) switch (_fun45793_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45793_ip = 47;
                            continue _fun45793
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45793_ip = 44;
                            continue _fun45793
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
                            _fun45793_ip = 55;
                            continue _fun45793
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45795: for (var _fun45795_ip = 0;;) switch (_fun45795_ip) {
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
                                                _fun45795_ip = 19;
                                                continue _fun45795
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45795_ip = 19;
                                            continue _fun45795;
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
            var _closure1_slot2 = var3;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun45796: for (var _fun45796_ip = 0;;) switch (_fun45796_ip) {
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
                            _fun45796_ip = 34;
                            continue _fun45796
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45796_ip = 114;
                            continue _fun45796
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45796_ip = 88;
                            continue _fun45796
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
                        _fun45796_ip = 106;
                        continue _fun45796;
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
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.BaseLayoutProvider = var0;
            var2.LayoutProvider = var0;
            var3 = function() { // Environment: var1
                var0 = function() {
                    var1 = true;
                    var0 = this;
                    var0.shouldRefreshWithAnchoring = var1;
                    var0 = undefined;
                    return var0;
                };
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    var0 = this;
                    var4 = var0.newLayoutManager;
                    var3 = arg0;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    var0._lastLayoutManager = var1;
                    var0 = var0._lastLayoutManager;
                    return var0;
                };
                var3.createLayoutManager = var2;
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._lastLayoutManager;
                    return var0;
                };
                var2.getLayoutManager = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var2.BaseLayoutProvider = var3;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1() {
                    _fun45803: for (var _fun45803_ip = 0;;) switch (_fun45803_ip) {
                        case 0:
                            var1 = this;
                            var2 = _closure2_slot0;
                            var0 = var2.call;
                            var0 = var0.bind(var2)(var1);
                            if (var0) {
                                _fun45803_ip = 26;
                                continue _fun45803
                            }
                        case 23:
                            var0 = var1;
                        case 26:
                            var1 = arg0;
                            var0._getLayoutTypeForIndex = var1;
                            var1 = arg1;
                            var0._setLayoutForType = var1;
                            var1 = {
                                'height': 0,
                                'width': 0
                            };
                            var0._tempDim = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var5 = var0.WrapGridLayoutManager;
                    var0 = var5.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var5
                        }
                    });
                    var9 = this;
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var1;
                    var0 = new var10[var5](var9, var8, var7, var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var3.newLayoutManager = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var2 = this;
                    var1 = var2._getLayoutTypeForIndex;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3.getLayoutTypeForIndex = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    var4 = this;
                    var3 = var4._setLayoutForType;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = arg2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var3.setComputedLayout = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun45807: for (var _fun45807_ip = 0;;) switch (_fun45807_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = this;
                            var5 = var3.setComputedLayout;
                            var4 = var3._tempDim;
                            var1 = arg1;
                            var0 = arg2;
                            var0 = var5.bind(var3)(var1, var4, var0);
                            var1 = var3._tempDim;
                            var0 = var3.getLayoutManager;
                            var3 = var0.bind(var3)();
                            if (!var3) {
                                _fun45807_ip = 61;
                                continue _fun45807
                            }
                        case 50:
                            var0 = var3.setMaxBounds;
                            var0 = var0.bind(var3)(var1);
                        case 61:
                            var3 = var2.height;
                            var0 = var1.height;
                            var0 = var3 !== var0;
                            if (var0) {
                                _fun45807_ip = 92;
                                continue _fun45807
                            }
                        case 78:
                            var2 = var2.width;
                            var1 = var1.width;
                            var0 = var2 !== var1;
                        case 92:
                            return var0;
                    }
                };
                var2.checkDimensionDiscrepancy = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.LayoutProvider = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5115]);