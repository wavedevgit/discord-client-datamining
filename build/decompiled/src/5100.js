// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45666: for (var _fun45666_ip = 0;;) switch (_fun45666_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var3 = dependencyMap;
            var5 = this;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var3;
            var0 = var5;
            if (!var0) {
                _fun45666_ip = 34;
                continue _fun45666
            }
        case 28:
            var0 = var5.__extends;
        case 34:
            if (var0) {
                _fun45666_ip = 51;
                continue _fun45666
            }
        case 37:
            var5 = function arg0, arg1() {
                _fun45667: for (var _fun45667_ip = 0;;) switch (_fun45667_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45667_ip = 47;
                            continue _fun45667
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45667_ip = 44;
                            continue _fun45667
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
                            _fun45667_ip = 55;
                            continue _fun45667
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45669: for (var _fun45669_ip = 0;;) switch (_fun45669_ip) {
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
                                                _fun45669_ip = 19;
                                                continue _fun45669
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45669_ip = 19;
                                            continue _fun45669;
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
            var _closure1_slot2 = var5;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun45670: for (var _fun45670_ip = 0;;) switch (_fun45670_ip) {
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
                            _fun45670_ip = 34;
                            continue _fun45670
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45670_ip = 114;
                            continue _fun45670
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45670_ip = 88;
                            continue _fun45670
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
                        _fun45670_ip = 106;
                        continue _fun45670;
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
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var5);
            var0 = 0;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.default;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1() {
                    _fun45673: for (var _fun45673_ip = 0;;) switch (_fun45673_ip) {
                        case 0:
                            var1 = this;
                            var4 = _closure2_slot0;
                            var3 = var4.call;
                            var2 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var4)(var1, var2, var0);
                            if (var0) {
                                _fun45673_ip = 34;
                                continue _fun45673
                            }
                        case 31:
                            var0 = var1;
                        case 34:
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun45674: for (var _fun45674_ip = 0;;) switch (_fun45674_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = this;
                            var2 = var3.getWindowCorrection;
                            var0 = var3.props;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.startCorrection;
                            var2 = var1;
                            if (!var0) {
                                _fun45674_ip = 50;
                                continue _fun45674
                            }
                        case 34:
                            var4 = {};
                            var4.top = var0;
                            var3.containerPosition = var4;
                            var2 = var1 + var0;
                        case 50:
                            var0 = _closure2_slot0;
                            var0 = var0.prototype;
                            var1 = var0.onScroll;
                            var0 = var1.call;
                            var0 = var0.bind(var1)(var3, var2);
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.onScroll = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var2 = this;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.StickyType;
                    var1 = var1.HEADER;
                    var2.stickyType = var1;
                    var1 = 1;
                    var2.stickyTypeMultiplier = var1;
                    var1 = {};
                    var4 = var2.getWindowCorrection;
                    var3 = var2.props;
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.startCorrection;
                    var1.top = var3;
                    var2.containerPosition = var1;
                    var1 = true;
                    var2.bounceScrolling = var1;
                    return var0;
                };
                var3.initStickyParams = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
                    _fun45676: for (var _fun45676_ip = 0;;) switch (_fun45676_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var1 = this;
                            if (!var4) {
                                _fun45676_ip = 176;
                                continue _fun45676
                            }
                        case 15:
                            var5 = undefined;
                            if (!(var5 !== var3)) {
                                _fun45676_ip = 176;
                                continue _fun45676
                            }
                        case 24:
                            var6 = var1.hasReachedBoundary;
                            var2 = arg3;
                            var0 = arg4;
                            var0 = var6.bind(var1)(var2, var0);
                            var1.bounceScrolling = var0;
                            var0 = 0;
                            var0 = var4[var0];
                            if (!(!(var3 < var0))) {
                                _fun45676_ip = 168;
                                continue _fun45676
                            }
                        case 58:
                            var0 = var1.bounceScrolling;
                            if (var0) {
                                _fun45676_ip = 168;
                                continue _fun45676
                            }
                        case 67:
                            var0 = true;
                            var1.stickyVisiblity = var0;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var0 = 1;
                            var0 = var6[var0];
                            var0 = var2.bind(var5)(var0);
                            var2 = var0.default;
                            var0 = var2.findValueSmallerThanTarget;
                            var0 = var0.bind(var2)(var4, var3);
                            if (var0) {
                                _fun45676_ip = 144;
                                continue _fun45676
                            }
                        case 118:
                            var2 = global;
                            var4 = var2.console;
                            var3 = var4.log;
                            var2 = 'Header sticky index calculation gone wrong.';
                            var2 = var3.bind(var4)(var2);
                            _fun45676_ip = 176;
                            continue _fun45676;
                        case 144:
                            var2 = var0.index;
                            var1.currentIndex = var2;
                            var0 = var0.value;
                            var1.currentStickyIndex = var0;
                            _fun45676_ip = 176;
                            continue _fun45676;
                        case 168:
                            var0 = false;
                            var1.stickyVisiblity = var0;
                        case 176:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.calculateVisibleStickyIndex = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    return var0;
                };
                var3.getNextYd = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    return var0;
                };
                var3.getCurrentYd = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    return var0;
                };
                var3.getScrollY = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1) { // Environment: var1
                    var0 = false;
                    return var0;
                };
                var2.hasReachedBoundary = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5101, 5103]);