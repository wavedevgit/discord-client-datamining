// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun34047: for (var _fun34047_ip = 0;;) switch (_fun34047_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var1 = global;
                var2 = var1.HTMLElement;
                var2 = var0 instanceof var2;
                if (!var2) {
                    _fun34047_ip = 126;
                    continue _fun34047
                }
            case 21:
                var2 = var0.isDummy;
                if (!var2) {
                    _fun34047_ip = 42;
                    continue _fun34047
                }
            case 30:
                var4 = var0.removedAfterAnimation;
                var3 = undefined;
                var2 = var3 === var4;
            case 42:
                if (!var2) {
                    _fun34047_ip = 60;
                    continue _fun34047
                }
            case 45:
                var3 = function arg0, arg1() {
                    _fun34048: for (var _fun34048_ip = 0;;) switch (_fun34048_ip) {
                        case 0:
                            var2 = arg0;
                            var7 = arg1;
                            var _closure3_slot0 = var2;
                            var _closure3_slot1 = var7;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var6 = 4;
                            var4 = var0[var6];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var5 = var4.snapshots;
                            var4 = var5.get;
                            var5 = var4.bind(var5)(var2);
                            if (var5) {
                                _fun34048_ip = 104;
                                continue _fun34048
                            }
                        case 60:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var4 = 1;
                            var4 = var9[var4];
                            var4 = var8.bind(var0)(var4);
                            var9 = var4.logger;
                            var8 = var9.error;
                            var4 = 'Failed to obtain snapshot.';
                            var4 = var8.bind(var9)(var4);
                            _fun34048_ip = 173;
                            continue _fun34048;
                        case 104:
                            var4 = true;
                            var2.removedAfterAnimation = var4;
                            var4 = var7.appendChild;
                            var4 = var4.bind(var7)(var2);
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.setElementPosition;
                            var3 = var3.bind(var4)(var2, var5);
                            var3 = var2.onanimationend;
                            var _closure3_slot2 = var3;
                            var1 = function(arg0) { // Environment: var1
                                _fun34049: for (var _fun34049_ip = 0;;) switch (_fun34049_ip) {
                                    case 0:
                                        var3 = _closure3_slot1;
                                        var2 = var3.removeChild;
                                        var1 = _closure3_slot0;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure3_slot2;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun34049_ip = 53;
                                            continue _fun34049
                                        }
                                    case 32:
                                        var3 = _closure3_slot2;
                                        var2 = var3.call;
                                        var1 = this;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 53:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.onanimationend = var1;
                        case 173:
                            return var0;
                    }
                };
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var5);
            case 60:
                var2 = var1.Array;
                var1 = var2.from;
                var0 = var0.children;
                var4 = var1.bind(var2)(var0);
                var0 = var4.length;
                var3 = 0;
                var0 = var3 < var0;
                var1 = undefined;
                if (!var0) {
                    _fun34047_ip = 126;
                    continue _fun34047
                }
            case 100:
                var6 = _closure1_slot5;
                var0 = var4[var3];
                var0 = var6.bind(var1)(var0, var5);
                var3 = var3 + 1;
                var0 = var4.length;
                if (var3 < var0) {
                    _fun34047_ip = 100;
                    continue _fun34047
                }
            case 126:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.Map;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var10 = var3;
    var2 = new var10[var2](var9);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot2 = var2;
    var2 = new Array(0);
    var _closure1_slot3 = var2;
    var2 = false;
    var _closure1_slot4 = var2;
    var2 = function() {
        _fun34050: for (var _fun34050_ip = 0;;) switch (_fun34050_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.isWindowAvailable;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun34050_ip = 190;
                    continue _fun34050
                }
            case 42:
                var1 = global;
                var5 = var1.document;
                var4 = var5.getElementById;
                var3 = 'ReanimatedPredefinedWebAnimationsStyle';
                var5 = var4.bind(var5)(var3);
                var4 = null;
                if (!(var4 === var5)) {
                    _fun34050_ip = 190;
                    continue _fun34050
                }
            case 73:
                var6 = var1.document;
                var5 = var6.createElement;
                var4 = 'style';
                var5 = var5.bind(var6)(var4);
                var _closure2_slot0 = var5;
                var5.id = var3;
                var2 = function() { // Environment: var2
                    _fun34051: for (var _fun34051_ip = 0;;) switch (_fun34051_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.sheet;
                            var9 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            if (var1) {
                                _fun34051_ip = 65;
                                continue _fun34051
                            }
                        case 27:
                            var1 = 1;
                            var2 = var0[var1];
                            var1 = undefined;
                            var1 = var9.bind(var1)(var2);
                            var3 = var1.logger;
                            var2 = var3.error;
                            var1 = 'Failed to create layout animations stylesheet.';
                            var1 = var2.bind(var3)(var1);
                            _fun34051_ip = 160;
                            continue _fun34051;
                        case 65:
                            var2 = 2;
                            var0 = var0[var2];
                            var1 = undefined;
                            var0 = var9.bind(var1)(var0);
                            var5 = var0.Animations;
                            for (var0 in var5)
                                case 93: {
                                    case 102: var12 = var0;
                                    var9 = _closure2_slot0;
                                    var11 = var9.sheet;
                                    var10 = var11.insertRule;
                                    var13 = _closure1_slot0;
                                    var9 = _closure1_slot1;
                                    var9 = var9[var2];
                                    var9 = var13.bind(var1)(var9);
                                    var9 = var9.Animations;
                                    var9 = var9[var12];
                                    var9 = var9.style;
                                    var9 = var10.bind(var11)(var9);
                                    _fun34051_ip = 93;
                                    continue _fun34051;
                                }
                        case 160:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onload = var2;
                var3 = var1.document;
                var2 = var3.createElement;
                var3 = var2.bind(var3)(var4);
                var2 = 'ReanimatedCustomWebAnimationsStyle';
                var3.id = var2;
                var2 = var1.document;
                var4 = var2.head;
                var2 = var4.appendChild;
                var2 = var2.bind(var4)(var5);
                var1 = var1.document;
                var2 = var1.head;
                var1 = var2.appendChild;
                var1 = var1.bind(var2)(var3);
            case 190:
                return var0;
        }
    };
    var1.configureWebLayoutAnimations = var2;
    var2 = function arg0, arg1() {
        _fun34052: for (var _fun34052_ip = 0;;) switch (_fun34052_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 0;
                var1 = var1[var5];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isWindowAvailable;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun34052_ip = 258;
                    continue _fun34052
                }
            case 43:
                var1 = global;
                var4 = var1.document;
                var3 = var4.getElementById;
                var1 = 'ReanimatedCustomWebAnimationsStyle';
                var1 = var3.bind(var4)(var1);
                var3 = var1.sheet;
                if (var3) {
                    _fun34052_ip = 124;
                    continue _fun34052
                }
            case 77:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 1;
                var3 = var7[var3];
                var3 = var4.bind(var2)(var3);
                var7 = var3.logger;
                var4 = var7.error;
                var3 = 'Failed to create layout animations stylesheet.';
                var3 = var4.bind(var7)(var3);
                _fun34052_ip = 258;
                continue _fun34052;
            case 124:
                var4 = var1.sheet;
                var3 = var4.insertRule;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var5);
                var1 = _closure1_slot3;
                var3 = var1.unshift;
                var3 = var3.bind(var1)(var6);
                var4 = _closure1_slot2;
                var3 = var4.set;
                var3 = var3.bind(var4)(var6, var5);
                var1 = var1.length;
                var4 = 1;
                var1 = var4 < var1;
                var3 = var4;
                if (!var1) {
                    _fun34052_ip = 258;
                    continue _fun34052
                }
            case 193:
                var1 = _closure1_slot3;
                var6 = var1[var3];
                var5 = _closure1_slot2;
                var1 = var5.get;
                var5 = var1.bind(var5)(var6);
                if (!(var2 !== var5)) {
                    _fun34052_ip = 260;
                    continue _fun34052
                }
            case 219:
                var8 = _closure1_slot2;
                var7 = var8.set;
                var1 = _closure1_slot3;
                var6 = var1[var3];
                var5 = var5 + var4;
                var5 = var7.bind(var8)(var6, var5);
                var3 = var3 + 1;
                var1 = var1.length;
                if (var3 < var1) {
                    _fun34052_ip = 193;
                    continue _fun34052
                }
            case 258:
                return var2;
            case 260:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.ReanimatedError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'Failed to obtain animation index.';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.insertWebAnimation = var2;
    var2 = function arg0, arg1, arg2() {
        var3 = arg1;
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg2;
        var _closure2_slot1 = var0;
        var0 = global;
        var5 = var0.Math;
        var4 = var5.max;
        var2 = 5;
        var6 = var2 * var3;
        var2 = 160;
        var3 = var3 + var2;
        var2 = 1000;
        var2 = var6 * var2;
        var3 = var4.bind(var5)(var2, var3);
        var2 = var0.setTimeout;
        var0 = undefined;
        var1 = function() { // Environment: var1
            _fun34054: for (var _fun34054_ip = 0;;) switch (_fun34054_ip) {
                case 0:
                    var7 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = undefined;
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.isWindowAvailable;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun34054_ip = 231;
                        continue _fun34054
                    }
                case 51:
                    var1 = global;
                    var5 = var1.document;
                    var3 = var5.getElementById;
                    var1 = 'ReanimatedCustomWebAnimationsStyle';
                    var1 = var3.bind(var5)(var1);
                    var5 = _closure1_slot2;
                    var3 = var5.get;
                    var3 = var3.bind(var5)(var7);
                    if (!(var2 !== var3)) {
                        _fun34054_ip = 287;
                        continue _fun34054
                    }
                case 97:
                    var4 = var4.bind(var2)();
                    var4 = var1.sheet;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun34054_ip = 124;
                        continue _fun34054
                    }
                case 113:
                    var1 = var4.deleteRule;
                    var1 = var1.bind(var4)(var3);
                case 124:
                    var1 = _closure1_slot3;
                    var5 = var1.splice;
                    var4 = 1;
                    var5 = var5.bind(var1)(var3, var4);
                    var6 = _closure1_slot2;
                    var5 = var6.delete;
                    var5 = var5.bind(var6)(var7);
                    var1 = var1.length;
                    if (!(var3 < var1)) {
                        _fun34054_ip = 231;
                        continue _fun34054
                    }
                case 166:
                    var1 = _closure1_slot3;
                    var6 = var1[var3];
                    var5 = _closure1_slot2;
                    var1 = var5.get;
                    var5 = var1.bind(var5)(var6);
                    if (!(var2 !== var5)) {
                        _fun34054_ip = 233;
                        continue _fun34054
                    }
                case 192:
                    var8 = _closure1_slot2;
                    var7 = var8.set;
                    var1 = _closure1_slot3;
                    var6 = var1[var3];
                    var5 = var5 - var4;
                    var5 = var7.bind(var8)(var6, var5);
                    var3 = var3 + 1;
                    var1 = var1.length;
                    if (var3 < var1) {
                        _fun34054_ip = 166;
                        continue _fun34054
                    }
                case 231:
                    return var2;
                case 233:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var4 = var1.ReanimatedError;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var10 = 'Failed to obtain animation index.';
                    var11 = var3;
                    var1 = new var11[var4](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 287:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = 'Failed to obtain animation index.';
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var1 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var1.scheduleAnimationCleanup = var2;
    var2 = function() {
        _fun34055: for (var _fun34055_ip = 0;;) switch (_fun34055_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = !var2;
                if (var2) {
                    _fun34055_ip = 44;
                    continue _fun34055
                }
            case 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isWindowAvailable;
                var0 = var2.bind(var3)();
            case 44:
                if (!var0) {
                    _fun34055_ip = 125;
                    continue _fun34055
                }
            case 47:
                var0 = true;
                _closure1_slot4 = var0;
                var0 = global;
                var3 = var0.MutationObserver;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = function(arg0) { // Environment: var1
                    _fun34056: for (var _fun34056_ip = 0;;) switch (_fun34056_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.length;
                            var0 = 1;
                            var0 = var2 - var0;
                            var4 = var1[var0];
                            var2 = var4.target;
                            var0 = undefined;
                            var3 = undefined;
                            var7 = '__reactFiber';
                            var1 = var7;
                            var5 = global;
                            var6 = var5.Object;
                            var5 = var6.keys;
                            var8 = var5.bind(var6)(var2);
                            var6 = var8;
                            var5 = var6[Symbol.iterator];
                            var6 = var5().next;
                        case 62:
                            var9 = var6().value;
                            var8 = var5;
                            if (!(var8 !== var0)) {
                                _fun34056_ip = 107;
                                continue _fun34056
                            }
                        case 73: // try_start_0
                            var3 = var9;
                            var8 = var9.startsWith;
                            var8 = var8.bind(var9)(var7);
                            if (var8) {
                                _fun34056_ip = 92;
                                continue _fun34056
                            }
                        case 90: // try_end0
                            _fun34056_ip = 62;
                            continue _fun34056;
                        case 92: // try_start_1
                            var1 = var3;
                        case 95: // try_end1
                            var5.return();
                            _fun34056_ip = 107;
                            continue _fun34056;
                        case 100: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 3);
                            var5.return();
                            throw var3;
                        case 107:
                            var2 = var2[var1];
                            var3 = null;
                            var5 = var3 == var2;
                            var1 = undefined;
                            if (var5) {
                                _fun34056_ip = 158;
                                continue _fun34056
                            }
                        case 122:
                            var2 = var2.child;
                            var5 = var3 == var2;
                            var1 = undefined;
                            if (var5) {
                                _fun34056_ip = 158;
                                continue _fun34056
                            }
                        case 137:
                            var2 = var2.memoizedProps;
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun34056_ip = 158;
                                continue _fun34056
                            }
                        case 152:
                            var1 = var2.navigation;
                        case 158:
                            if (!(var0 === var1)) {
                                _fun34056_ip = 229;
                                continue _fun34056
                            }
                        case 162:
                            var1 = var4.removedNodes;
                            var1 = var1.length;
                            var3 = 0;
                            var1 = var3 < var1;
                            if (!var1) {
                                _fun34056_ip = 229;
                                continue _fun34056
                            }
                        case 185:
                            var6 = _closure1_slot5;
                            var1 = var4.removedNodes;
                            var5 = var1[var3];
                            var1 = var4.target;
                            var1 = var6.bind(var0)(var5, var1);
                            var3 = var3 + 1;
                            var1 = var4.removedNodes;
                            var1 = var1.length;
                            if (var3 < var1) {
                                _fun34056_ip = 185;
                                continue _fun34056
                            }
                        case 229:
                            return var0;
                    }
                };
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.observe;
                var0 = var0.document;
                var1 = var0.body;
                var0 = {
                    'childList': true,
                    'subtree': true
                };
                var0 = var2.bind(var3)(var1, var0);
            case 125:
                var0 = undefined;
                return var0;
        }
    };
    var1.addHTMLMutationObserver = var2;
    var0 = function arg0, arg1() {
        _fun34057: for (var _fun34057_ip = 0;;) switch (_fun34057_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.x;
                var0 = var1.x;
                var0 = var3 === var0;
                if (!var0) {
                    _fun34057_ip = 37;
                    continue _fun34057
                }
            case 23:
                var4 = var2.y;
                var3 = var1.y;
                var0 = var4 === var3;
            case 37:
                if (!var0) {
                    _fun34057_ip = 54;
                    continue _fun34057
                }
            case 40:
                var4 = var2.width;
                var3 = var1.width;
                var0 = var4 === var3;
            case 54:
                if (!var0) {
                    _fun34057_ip = 71;
                    continue _fun34057
                }
            case 57:
                var2 = var2.height;
                var1 = var1.height;
                var0 = var2 === var1;
            case 71:
                return var0;
        }
    };
    var1.areDOMRectsEqual = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3726, 3727, 3779, 3734, 3809]);