// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var4 = var0.Map;
    var0 = new Array(7);
    var3 = ['change', 'touchExplorationDidChange'];
    var0[0] = var3;
    var3 = ['reduceMotionChanged', 'reduceMotionDidChange'];
    var0[1] = var3;
    var3 = ['highTextContrastChanged', 'highTextContrastDidChange'];
    var0[2] = var3;
    var3 = ['screenReaderChanged', 'touchExplorationDidChange'];
    var0[3] = var3;
    var3 = ['accessibilityServiceChanged', 'accessibilityServiceDidChange'];
    var0[4] = var3;
    var3 = ['invertColorsChanged', 'invertColorDidChange'];
    var0[5] = var3;
    var3 = ['grayscaleChanged', 'grayscaleModeDidChange'];
    var0[6] = var3;
    var3 = var4.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var4
        }
    });
    var10 = var3;
    var9 = var0;
    var0 = new var10[var4](var9, var8);
    var0 = var0 instanceof Object ? var0 : var3;
    var _closure1_slot3 = var0;
    var0 = {};
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = false;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.isBoldTextEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun5953: for (var _fun5953_ip = 0;;) switch (_fun5953_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var3 = 0;
                    var2 = var0[var3];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var4 = null;
                    var5 = var4 == var2;
                    var2 = undefined;
                    if (var5) {
                        _fun5953_ip = 58;
                        continue _fun5953
                    }
                case 35:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var3];
                    var5 = var6.bind(var0)(var5);
                    var2 = var5.isGrayscaleEnabled;
                case 58:
                    if (!(var4 == var2)) {
                        _fun5953_ip = 72;
                        continue _fun5953
                    }
                case 62:
                    var2 = arg1;
                    var2 = var2.bind(var0)(var4);
                    _fun5953_ip = 103;
                    continue _fun5953;
                case 72:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isGrayscaleEnabled;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                case 103:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.isGrayscaleEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun5955: for (var _fun5955_ip = 0;;) switch (_fun5955_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var3 = 0;
                    var2 = var0[var3];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var4 = null;
                    var5 = var4 == var2;
                    var2 = undefined;
                    if (var5) {
                        _fun5955_ip = 58;
                        continue _fun5955
                    }
                case 35:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var3];
                    var5 = var6.bind(var0)(var5);
                    var2 = var5.isInvertColorsEnabled;
                case 58:
                    if (!(var4 == var2)) {
                        _fun5955_ip = 72;
                        continue _fun5955
                    }
                case 62:
                    var2 = arg1;
                    var2 = var2.bind(var0)(var4);
                    _fun5955_ip = 103;
                    continue _fun5955;
                case 72:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isInvertColorsEnabled;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                case 103:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.isInvertColorsEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun5957: for (var _fun5957_ip = 0;;) switch (_fun5957_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var3 = 0;
                    var2 = var0[var3];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun5957_ip = 40;
                        continue _fun5957
                    }
                case 30:
                    var2 = arg1;
                    var2 = var2.bind(var0)(var4);
                    _fun5957_ip = 71;
                    continue _fun5957;
                case 40:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isReduceMotionEnabled;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                case 71:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.isReduceMotionEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun5959: for (var _fun5959_ip = 0;;) switch (_fun5959_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var3 = 0;
                    var2 = var0[var3];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var4 = null;
                    var5 = var4 == var2;
                    var2 = undefined;
                    if (var5) {
                        _fun5959_ip = 58;
                        continue _fun5959
                    }
                case 35:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var3];
                    var5 = var6.bind(var0)(var5);
                    var2 = var5.isHighTextContrastEnabled;
                case 58:
                    if (!(var4 == var2)) {
                        _fun5959_ip = 72;
                        continue _fun5959
                    }
                case 62:
                    var2 = arg1;
                    var2 = var2.bind(var0)(var4);
                    _fun5959_ip = 103;
                    continue _fun5959;
                case 72:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isHighTextContrastEnabled;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                case 103:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.isHighTextContrastEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = false;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.isDarkerSystemColorsEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = false;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.prefersCrossFadeTransitions = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = false;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.isReduceTransparencyEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun5966: for (var _fun5966_ip = 0;;) switch (_fun5966_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var3 = 0;
                    var2 = var0[var3];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun5966_ip = 40;
                        continue _fun5966
                    }
                case 30:
                    var2 = arg1;
                    var2 = var2.bind(var0)(var4);
                    _fun5966_ip = 71;
                    continue _fun5966;
                case 40:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isTouchExplorationEnabled;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                case 71:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.isScreenReaderEnabled = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun5968: for (var _fun5968_ip = 0;;) switch (_fun5968_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var3 = 0;
                    var2 = var0[var3];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var4 = null;
                    if (!(var4 != var2)) {
                        _fun5968_ip = 57;
                        continue _fun5968
                    }
                case 30:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var3];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.isAccessibilityServiceEnabled;
                    if (!(var4 == var2)) {
                        _fun5968_ip = 67;
                        continue _fun5968
                    }
                case 57:
                    var2 = arg1;
                    var2 = var2.bind(var0)(var4);
                    _fun5968_ip = 98;
                    continue _fun5968;
                case 67:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isAccessibilityServiceEnabled;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                case 98:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.isAccessibilityServiceEnabled = var3;
    var3 = function arg0, arg1() {
        _fun5969: for (var _fun5969_ip = 0;;) switch (_fun5969_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.get;
                var1 = arg0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun5969_ip = 65;
                    continue _fun5969
                }
            case 26:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.addListener;
                var0 = arg1;
                var0 = var1.bind(var2)(var3, var0);
                _fun5969_ip = 82;
                continue _fun5969;
            case 65:
                var1 = {};
                var2 = function() {
                    var0 = undefined;
                    return var0;
                };
                var1.remove = var2;
                var0 = var1;
            case 82:
                return var0;
        }
    };
    var0.addEventListener = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = arg0;
        var1 = 'focus';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var0.setAccessibilityFocus = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.sendAccessibilityEvent;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var0.sendAccessibilityEvent = var3;
    var3 = function arg0() {
        _fun5973: for (var _fun5973_ip = 0;;) switch (_fun5973_ip) {
            case 0:
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = 0;
                var2 = var0[var3];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun5973_ip = 61;
                    continue _fun5973
                }
            case 30:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.announceForAccessibility;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
            case 61:
                return var0;
        }
    };
    var0.announceForAccessibility = var3;
    var3 = function arg0, arg1() {
        _fun5974: for (var _fun5974_ip = 0;;) switch (_fun5974_ip) {
            case 0:
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = 0;
                var2 = var0[var3];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun5974_ip = 61;
                    continue _fun5974
                }
            case 30:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.announceForAccessibility;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
            case 61:
                return var0;
        }
    };
    var0.announceForAccessibilityWithOptions = var3;
    var2 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun5976: for (var _fun5976_ip = 0;;) switch (_fun5976_ip) {
                case 0:
                    var4 = arg0;
                    var5 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var3 = 0;
                    var2 = var0[var3];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var2);
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun5976_ip = 59;
                        continue _fun5976
                    }
                case 33:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var3];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.getRecommendedTimeoutMillis;
                    if (var2) {
                        _fun5976_ip = 73;
                        continue _fun5976
                    }
                case 59:
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var0)(var2);
                    _fun5976_ip = 109;
                    continue _fun5976;
                case 73:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getRecommendedTimeoutMillis;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1, var4);
                case 109:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0.getRecommendedTimeoutMillis = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [430, 101, 268, 117]);