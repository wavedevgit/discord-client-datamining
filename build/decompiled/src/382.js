// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        var2 = arg0;
        var0 = global;
        var4 = var0.Object;
        var3 = var4.assign;
        var1 = var2.__getValueWithStaticProps;
        var0 = arg1;
        var2 = var1.bind(var2)(var0);
        var1 = {};
        var0 = false;
        var1.collapsable = var0;
        var0 = {};
        var0 = var3.bind(var4)(var0, var2, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun5668: for (var _fun5668_ip = 0;;) switch (_fun5668_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var2 = var5 instanceof var2;
                if (var2) {
                    _fun5668_ip = 156;
                    continue _fun5668
                }
            case 38:
                var2 = global;
                var6 = var2.Array;
                var3 = var6.isArray;
                var3 = var3.bind(var6)(var5);
                if (var3) {
                    _fun5668_ip = 117;
                    continue _fun5668
                }
            case 59:
                var2 = var2.Object;
                var2 = var5 instanceof var2;
                if (!var2) {
                    _fun5668_ip = 199;
                    continue _fun5668
                }
            case 75:
                var9 = var1;
                var7 = var5;
                for (var2 in var7)
                    case 89: {
                        case 98: var10 = var2;
                        var11 = _closure1_slot11;
                        var10 = var5[var10];
                        var10 = var11.bind(var0)(var10, var9);
                        _fun5668_ip = 89;
                        continue _fun5668;
                        case 117: var2 = var5;
                        var3 = var2[Symbol.iterator];
                        var2 = var3().next;
                        case 123: var8 = var2().value;
                        var6 = var3;
                        if (!(var6 !== var0)) {
                            _fun5668_ip = 199;
                            continue _fun5668
                        }
                        case 134: // try_start_0
                            var7 = _closure1_slot11;
                        var6 = var1;
                        var6 = var7.bind(var0)(var8, var6);
                        case 147: // try_end0
                            _fun5668_ip = 123;
                        continue _fun5668;
                        case 149: // catch_target0
                            CatchBlockStart(arg_register = 2);
                        var3.return();
                        throw var2;
                        case 156: var3 = var5.addListener;
                        var2 = function() { // Environment: var2
                            var0 = undefined;
                            return var0;
                        };
                        var4 = var3.bind(var5)(var2);
                        var3 = var1;
                        var2 = var3.push;
                        var1 = {};
                        var1.propValue = var5;
                        var1.listenerId = var4;
                        var1 = var2.bind(var3)(var1);
                    }
            case 199:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var0 = undefined;
        var3 = null;
        var3 = var5.bind(var0)(var3);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot9;
        var3 = false;
        var3 = var5.bind(var0)(var3);
        var _closure2_slot2 = var3;
        var6 = _closure1_slot7;
        var5 = function() { // Environment: var1
            var1 = _closure2_slot2;
            var0 = false;
            var1.current = var0;
            var0 = function() { // Environment: var0
                var1 = _closure2_slot2;
                var0 = true;
                var1.current = var0;
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var3 = new Array(0);
        var3 = var6.bind(var0)(var5, var3);
        var3 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var4;
        var1 = function() { // Environment: var1
            _fun5673: for (var _fun5673_ip = 0;;) switch (_fun5673_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.__attach;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun5673_ip = 67;
                        continue _fun5673
                    }
                case 32:
                    var0 = _closure2_slot1;
                    var3 = var0.current;
                    var2 = var3.__restoreDefaultValues;
                    var2 = var2.bind(var3)();
                    var2 = var3.__detach;
                    var2 = var2.bind(var3)();
                    var0.current = var1;
                case 67:
                    var0 = function() { // Environment: var0
                        _fun5674: for (var _fun5674_ip = 0;;) switch (_fun5674_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                var1 = var1.current;
                                if (var1) {
                                    _fun5674_ip = 31;
                                    continue _fun5674
                                }
                            case 15:
                                var2 = _closure2_slot1;
                                var1 = _closure2_slot0;
                                var2.current = var1;
                                _fun5674_ip = 45;
                                continue _fun5674;
                            case 31:
                                var1 = _closure2_slot0;
                                var0 = var1.__detach;
                                var0 = var0.bind(var1)();
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var0 = undefined;
        var3 = false;
        var3 = var5.bind(var0)(var3);
        var _closure2_slot1 = var3;
        var3 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var4;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = true;
            var2.current = var1;
            var1 = _closure2_slot0;
            var0 = var1.__attach;
            var0 = var0.bind(var1)();
            var0 = function() { // Environment: var0
                var1 = _closure2_slot1;
                var0 = false;
                var1.current = var0;
                var0 = global;
                var2 = var0.queueMicrotask;
                var0 = undefined;
                var1 = function() { // Environment: var1
                    _fun5678: for (var _fun5678_ip = 0;;) switch (_fun5678_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (!var1) {
                                _fun5678_ip = 29;
                                continue _fun5678
                            }
                        case 15:
                            var2 = _closure2_slot0;
                            var1 = var2.__restoreDefaultValues;
                            var1 = var1.bind(var2)();
                        case 29:
                            var1 = _closure2_slot0;
                            var0 = var1.__detach;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.useCallback;
    var _closure1_slot5 = var4;
    var4 = var3.useEffect;
    var _closure1_slot6 = var4;
    var4 = var3.useInsertionEffect;
    var _closure1_slot7 = var4;
    var4 = var3.useReducer;
    var _closure1_slot8 = var4;
    var3 = var3.useRef;
    var _closure1_slot9 = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var2 = 2;
        var2 = var4[var2];
        var3 = undefined;
        var5 = var5.bind(var3)(var2);
        var2 = var5.createAnimatedPropsMemoHook;
        var2 = var2.bind(var5)(var6);
        var _closure2_slot1 = var2;
        var2 = _closure1_slot2;
        var1 = 3;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.shouldUseSetNativePropsInFabric;
        var1 = var1.bind(var2)();
        var _closure2_slot2 = var1;
        var0 = function arg0() {
            _fun5680: for (var _fun5680_ip = 0;;) switch (_fun5680_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var6 = _closure1_slot8;
                    var3 = undefined;
                    var5 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 1;
                        var0 = var1 + var0;
                        return var0;
                    };
                    var2 = 0;
                    var6 = var6.bind(var3)(var5, var2);
                    var5 = _closure1_slot4;
                    var2 = 2;
                    var5 = var5.bind(var3)(var6, var2);
                    var2 = 1;
                    var2 = var5[var2];
                    var _closure3_slot1 = var2;
                    var2 = _closure1_slot9;
                    var5 = null;
                    var2 = var2.bind(var3)(var5);
                    var _closure3_slot2 = var2;
                    var2 = _closure1_slot9;
                    var2 = var2.bind(var3)(var5);
                    var _closure3_slot3 = var2;
                    var5 = _closure2_slot1;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var7 = _closure3_slot0;
                        var5 = _closure2_slot0;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = function() { // Environment: var0
                            _fun5683: for (var _fun5683_ip = 0;;) switch (_fun5683_ip) {
                                case 0:
                                    var0 = _closure3_slot2;
                                    var2 = var0.current;
                                    var0 = null;
                                    var2 = var0 == var2;
                                    var0 = undefined;
                                    if (var2) {
                                        _fun5683_ip = 36;
                                        continue _fun5683
                                    }
                                case 23:
                                    var2 = _closure3_slot2;
                                    var1 = var2.current;
                                    var0 = var1.bind(var2)();
                                case 36:
                                    return var0;
                            }
                        };
                        var8 = var1;
                        var0 = new var8[var4](var7, var6, var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var5.bind(var3)(var2, var4);
                    var _closure3_slot4 = var2;
                    var6 = _closure1_slot6;
                    var5 = function() { // Environment: var1
                        _fun5684: for (var _fun5684_ip = 0;;) switch (_fun5684_ip) {
                            case 0:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var4 = 5;
                                var2 = var2[var4];
                                var3 = undefined;
                                var2 = var5.bind(var3)(var2);
                                var2 = var2.shouldSignalBatch;
                                if (var2) {
                                    _fun5684_ip = 69;
                                    continue _fun5684
                                }
                            case 36:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var2 = var2[var4];
                                var2 = var5.bind(var3)(var2);
                                var5 = var2.API;
                                var2 = var5.flushQueue;
                                var2 = var2.bind(var5)();
                            case 69:
                                var2 = null;
                                var _closure4_slot0 = var2;
                                var2 = _closure3_slot4;
                                var2 = var2.__isNative;
                                if (!var2) {
                                    _fun5684_ip = 141;
                                    continue _fun5684
                                }
                            case 91:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var1 = var1[var4];
                                var1 = var2.bind(var3)(var1);
                                var4 = var1.nativeEventEmitter;
                                var3 = var4.addListener;
                                var2 = 'onUserDrivenAnimationEnded';
                                var1 = function(arg0) { // Environment: var0
                                    var1 = _closure3_slot4;
                                    var0 = var1.update;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                _closure4_slot0 = var1;
                            case 141:
                                var0 = function() { // Environment: var0
                                    _fun5686: for (var _fun5686_ip = 0;;) switch (_fun5686_ip) {
                                        case 0:
                                            var1 = _closure4_slot0;
                                            var0 = null;
                                            if (!(var0 != var1)) {
                                                _fun5686_ip = 23;
                                                continue _fun5686
                                            }
                                        case 13:
                                            var0 = var1.remove;
                                            var0 = var0.bind(var1)();
                                        case 23:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                return var0;
                        }
                    };
                    var5 = var6.bind(var3)(var5);
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.scheduleAnimatedCleanupInMicrotask;
                    var5 = var5.bind(var6)();
                    if (var5) {
                        _fun5680_ip = 158;
                        continue _fun5680
                    }
                case 152:
                    var5 = _closure1_slot12;
                    _fun5680_ip = 162;
                    continue _fun5680;
                case 158:
                    var5 = _closure1_slot13;
                case 162:
                    var5 = var5.bind(var3)(var2);
                    var6 = _closure1_slot5;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun5687: for (var _fun5687_ip = 0;;) switch (_fun5687_ip) {
                            case 0:
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var7 = undefined;
                                var8 = undefined;
                                var9 = undefined;
                                var2 = _closure3_slot4;
                                var3 = var2.setNativeView;
                                var3 = var3.bind(var2)(var4);
                                var3 = _closure3_slot2;
                                var1 = function() { // Environment: var0
                                    _fun5688: for (var _fun5688_ip = 0;;) switch (_fun5688_ip) {
                                        case 0:
                                            var8 = _closure4_slot0;
                                            var2 = _closure1_slot0;
                                            var0 = _closure1_slot3;
                                            var6 = 8;
                                            var1 = var0[var6];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.isPublicInstance;
                                            var2 = var1.bind(var2)(var8);
                                            if (var2) {
                                                _fun5688_ip = 110;
                                                continue _fun5688
                                            }
                                        case 46:
                                            var5 = _closure1_slot0;
                                            var1 = _closure1_slot3;
                                            var1 = var1[var6];
                                            var7 = var5.bind(var0)(var1);
                                            var5 = var7.isPublicInstance;
                                            var10 = null;
                                            var9 = var10 == var8;
                                            var1 = undefined;
                                            if (var9) {
                                                _fun5688_ip = 105;
                                                continue _fun5688
                                            }
                                        case 80:
                                            var9 = var8.getNativeScrollRef;
                                            var9 = var10 == var9;
                                            var1 = undefined;
                                            if (var9) {
                                                _fun5688_ip = 105;
                                                continue _fun5688
                                            }
                                        case 95:
                                            var9 = var8.getNativeScrollRef;
                                            var1 = var9.bind(var8)();
                                        case 105:
                                            var2 = var5.bind(var7)(var1);
                                        case 110:
                                            if (var2) {
                                                _fun5688_ip = 211;
                                                continue _fun5688
                                            }
                                        case 113:
                                            var5 = _closure1_slot0;
                                            var1 = _closure1_slot3;
                                            var1 = var1[var6];
                                            var6 = var5.bind(var0)(var1);
                                            var5 = var6.isPublicInstance;
                                            var9 = null;
                                            var7 = var9 == var8;
                                            var1 = undefined;
                                            if (var7) {
                                                _fun5688_ip = 206;
                                                continue _fun5688
                                            }
                                        case 147:
                                            var7 = var8.getScrollResponder;
                                            var7 = var9 == var7;
                                            var1 = undefined;
                                            if (var7) {
                                                _fun5688_ip = 206;
                                                continue _fun5688
                                            }
                                        case 162:
                                            var7 = var8.getScrollResponder;
                                            var8 = var7.bind(var8)();
                                            var7 = var9 == var8;
                                            var1 = undefined;
                                            if (var7) {
                                                _fun5688_ip = 206;
                                                continue _fun5688
                                            }
                                        case 181:
                                            var7 = var8.getNativeScrollRef;
                                            var7 = var9 == var7;
                                            var1 = undefined;
                                            if (var7) {
                                                _fun5688_ip = 206;
                                                continue _fun5688
                                            }
                                        case 196:
                                            var7 = var8.getNativeScrollRef;
                                            var1 = var7.bind(var8)();
                                        case 206:
                                            var2 = var5.bind(var6)(var1);
                                        case 211:
                                            var5 = _closure3_slot4;
                                            var5 = var5.__isNative;
                                            if (var5) {
                                                _fun5688_ip = 451;
                                                continue _fun5688
                                            }
                                        case 230:
                                            var5 = _closure4_slot0;
                                            var6 = 'object';
                                            var5 = typeof var5;
                                            if (!(var6 === var5)) {
                                                _fun5688_ip = 441;
                                                continue _fun5688
                                            }
                                        case 248:
                                            var6 = _closure4_slot0;
                                            var5 = null;
                                            var7 = var5 == var6;
                                            var6 = undefined;
                                            if (var7) {
                                                _fun5688_ip = 273;
                                                continue _fun5688
                                            }
                                        case 263:
                                            var7 = _closure4_slot0;
                                            var6 = var7.setNativeProps;
                                        case 273:
                                            var7 = 'function';
                                            var6 = typeof var6;
                                            if (!(var7 === var6)) {
                                                _fun5688_ip = 441;
                                                continue _fun5688
                                            }
                                        case 287:
                                            if (var2) {
                                                _fun5688_ip = 321;
                                                continue _fun5688
                                            }
                                        case 290:
                                            var8 = _closure4_slot0;
                                            var7 = var8.setNativeProps;
                                            var9 = _closure3_slot4;
                                            var6 = var9.__getAnimatedValue;
                                            var6 = var6.bind(var9)();
                                            var6 = var7.bind(var8)(var6);
                                            return var6;
                                        case 321:
                                            var6 = _closure2_slot2;
                                            if (var6) {
                                                _fun5688_ip = 341;
                                                continue _fun5688
                                            }
                                        case 331:
                                            var6 = _closure3_slot1;
                                            var6 = var6.bind(var0)();
                                            return var6;
                                        case 341:
                                            var7 = _closure4_slot0;
                                            var6 = var7.setNativeProps;
                                            var8 = _closure3_slot4;
                                            var3 = var8.__getAnimatedValue;
                                            var3 = var3.bind(var8)();
                                            var3 = var6.bind(var7)(var3);
                                            var3 = _closure3_slot3;
                                            var3 = var3.current;
                                            if (!(var5 != var3)) {
                                                _fun5688_ip = 405;
                                                continue _fun5688
                                            }
                                        case 383:
                                            var3 = global;
                                            var5 = var3.clearTimeout;
                                            var3 = _closure3_slot3;
                                            var3 = var3.current;
                                            var3 = var5.bind(var0)(var3);
                                        case 405:
                                            var5 = _closure3_slot3;
                                            var3 = global;
                                            var7 = var3.setTimeout;
                                            var6 = function() { // Environment: var3
                                                var2 = _closure3_slot3;
                                                var1 = null;
                                                var2.current = var1;
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var1 = var1.bind(var0)();
                                                return var0;
                                            };
                                            var3 = 48;
                                            var3 = var7.bind(var0)(var6, var3);
                                            var5.current = var3;
                                            _fun5688_ip = 531;
                                            continue _fun5688;
                                        case 441:
                                            var3 = _closure3_slot1;
                                            var3 = var3.bind(var0)();
                                            return var3;
                                        case 451:
                                            var2 = !var2;
                                            if (var2) {
                                                _fun5688_ip = 520;
                                                continue _fun5688
                                            }
                                        case 457:
                                            var5 = _closure1_slot2;
                                            var3 = _closure1_slot3;
                                            var6 = 3;
                                            var3 = var3[var6];
                                            var5 = var5.bind(var0)(var3);
                                            var3 = var5.cxxNativeAnimatedEnabled;
                                            var3 = var3.bind(var5)();
                                            if (!var3) {
                                                _fun5688_ip = 517;
                                                continue _fun5688
                                            }
                                        case 490:
                                            var5 = _closure1_slot2;
                                            var4 = _closure1_slot3;
                                            var4 = var4[var6];
                                            var5 = var5.bind(var0)(var4);
                                            var4 = var5.cxxNativeAnimatedRemoveJsSync;
                                            var3 = var4.bind(var5)();
                                        case 517:
                                            var2 = var3;
                                        case 520:
                                            if (var2) {
                                                _fun5688_ip = 531;
                                                continue _fun5688
                                            }
                                        case 523:
                                            var1 = _closure3_slot1;
                                            var1 = var1.bind(var0)();
                                        case 531:
                                            return var0;
                                    }
                                };
                                var3.current = var1;
                                var5 = 'object';
                                var3 = typeof var4;
                                var1 = var4;
                                if (!(var5 === var3)) {
                                    _fun5687_ip = 103;
                                    continue _fun5687
                                }
                            case 62:
                                var3 = null;
                                var5 = var3 == var4;
                                var3 = undefined;
                                if (var5) {
                                    _fun5687_ip = 79;
                                    continue _fun5687
                                }
                            case 73:
                                var3 = var4.getScrollableNode;
                            case 79:
                                var5 = 'function';
                                var3 = typeof var3;
                                var1 = var4;
                                if (!(var5 === var3)) {
                                    _fun5687_ip = 103;
                                    continue _fun5687
                                }
                            case 93:
                                var3 = var4.getScrollableNode;
                                var1 = var3.bind(var4)();
                            case 103:
                                var8 = var1;
                                var _closure4_slot1 = var1;
                                var1 = new Array(0);
                                var9 = var1;
                                var _closure4_slot2 = var1;
                                var1 = var2.__getNativeAnimatedEventTuples;
                                var1 = var1.bind(var2)();
                                var _closure4_slot3 = var1;
                                var6 = var1;
                                var2 = var6[Symbol.iterator];
                                var6 = var2().next;
                                var4 = 2;
                                var3 = 0;
                                var1 = 1;
                            case 152:
                                var11 = var6().value;
                                var10 = var2;
                                if (!(var10 !== var7)) {
                                    _fun5687_ip = 218;
                                    continue _fun5687
                                }
                            case 163: // try_start_0
                                var10 = _closure1_slot4;
                                var10 = var10.bind(var7)(var11, var4);
                                var13 = var10[var3];
                                var12 = var10[var1];
                                var11 = var12.__attach;
                                var10 = var8;
                                var10 = var11.bind(var12)(var10, var13);
                                var11 = _closure1_slot11;
                                var10 = var9;
                                var10 = var11.bind(var7)(var12, var10);
                            case 209: // try_end0
                                _fun5687_ip = 152;
                                continue _fun5687;
                            case 211: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2.return();
                                throw var1;
                            case 218:
                                var0 = function() { // Environment: var0
                                    _fun5690: for (var _fun5690_ip = 0;;) switch (_fun5690_ip) {
                                        case 0:
                                            var1 = _closure3_slot2;
                                            var0 = null;
                                            var1.current = var0;
                                            var0 = _closure4_slot3;
                                            var7 = var0;
                                            var3 = var7[Symbol.iterator];
                                            var7 = var3().next;
                                            var0 = undefined;
                                            var5 = 2;
                                            var4 = 0;
                                            var2 = 1;
                                        case 41:
                                            var9 = var7().value;
                                            var8 = var3;
                                            if (!(var8 !== var0)) {
                                                _fun5690_ip = 95;
                                                continue _fun5690
                                            }
                                        case 52: // try_start_0
                                            var8 = _closure1_slot4;
                                            var8 = var8.bind(var0)(var9, var5);
                                            var11 = var8[var4];
                                            var10 = var8[var2];
                                            var9 = var10.__detach;
                                            var8 = _closure4_slot1;
                                            var8 = var9.bind(var10)(var8, var11);
                                        case 86: // try_end0
                                            _fun5690_ip = 41;
                                            continue _fun5690;
                                        case 88: // catch_target0
                                            CatchBlockStart(arg_register = 2);
                                            var3.return();
                                            throw var2;
                                        case 95:
                                            var3 = _closure4_slot2;
                                            var1 = var3;
                                            var2 = var1[Symbol.iterator];
                                            var1 = var2().next;
                                        case 105:
                                            var3 = var1().value;
                                            var4 = var2;
                                            if (!(var4 !== var0)) {
                                                _fun5690_ip = 148;
                                                continue _fun5690
                                            }
                                        case 116: // try_start_1
                                            var5 = var3.propValue;
                                            var4 = var3.listenerId;
                                            var3 = var5.removeListener;
                                            var3 = var3.bind(var5)(var4);
                                        case 139: // try_end1
                                            _fun5690_ip = 105;
                                            continue _fun5690;
                                        case 141: // catch_target1
                                            CatchBlockStart(arg_register = 1);
                                            var2.return();
                                            throw var1;
                                        case 148:
                                            return var0;
                                    }
                                };
                                return var0;
                        }
                    };
                    var5 = var6.bind(var3)(var1, var5);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var1 = 6;
                    var1 = var7[var1];
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.bind(var3)(var5);
                    var0 = _closure1_slot10;
                    var2 = var0.bind(var3)(var2, var4);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 383, 79, 374, 349, 326, 348, 384]);