// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() {
        var5 = new Array(0);
        var4 = var5.concat;
        var6 = _closure1_slot3;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.keys;
        var9 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var9.bind(var3)(var2);
        var2 = var2.CommonActions;
        var2 = var7.bind(var8)(var2);
        var3 = var6.bind(var3)(var2);
        var2 = ['addListener', 'removeListener', 'resetRoot', 'dispatch', 'isFocused', 'canGoBack', 'getRootState', 'getState', 'getParent', 'getCurrentRoute', 'getCurrentOptions'];
        var6 = var4.bind(var5)(var3, var2);
        var2 = {};
        var _closure2_slot0 = var2;
        var2 = function arg0, arg1() {
            _fun17102: for (var _fun17102_ip = 0;;) switch (_fun17102_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot0;
                    var3 = var3[var2];
                    if (!var3) {
                        _fun17102_ip = 53;
                        continue _fun17102
                    }
                case 26:
                    var1 = _closure2_slot0;
                    var4 = var1[var2];
                    var3 = var4.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var1[var2] = var0;
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot1 = var2;
        var2 = null;
        var _closure2_slot2 = var2;
        var3 = var1.Object;
        var2 = var3.assign;
        var1 = {};
        var7 = function() {
            var0 = _closure2_slot2;
            return var0;
        };
        var5 = function arg0() {
            _fun17105: for (var _fun17105_ip = 0;;) switch (_fun17105_ip) {
                case 0:
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    _closure2_slot2 = var3;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun17105_ip = 60;
                        continue _fun17105
                    }
                case 22:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.entries;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var3 = arg0;
                        var2 = 2;
                        var3 = var4.bind(var0)(var3, var2);
                        var2 = 0;
                        var2 = var3[var2];
                        var _closure4_slot0 = var2;
                        var2 = 1;
                        var3 = var3[var2];
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var3 = _closure3_slot0;
                            var2 = var3.addListener;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 60:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = 'current';
        Object.defineProperty(var1, var4, {
            get: var7,
            set: var5,
            enumerable: true
        });
        var4 = function() {
            _fun17108: for (var _fun17108_ip = 0;;) switch (_fun17108_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun17108_ip = 30;
                        continue _fun17108
                    }
                case 16:
                    var2 = _closure2_slot2;
                    var1 = var2.isReady;
                    var0 = var1.bind(var2)();
                case 30:
                    return var0;
            }
        };
        var1.isReady = var4;
        var5 = var6.reduce;
        var4 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var1 = function() { // Environment: var1
                _fun17110: for (var _fun17110_ip = 0;;) switch (_fun17110_ip) {
                    case 0:
                        var4 = undefined;
                        var7 = undefined;
                        var6 = arguments.length;
                        var5 = global;
                        var0 = var5.Array;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var11 = var2;
                        var10 = var6;
                        var0 = new var11[var0](var10, var9);
                        var3 = var0 instanceof Object ? var0 : var2;
                        var2 = 0;
                        var8 = var2 < var6;
                        var0 = 0;
                        if (!var8) {
                            _fun17110_ip = 66;
                            continue _fun17110
                        }
                    case 51:
                        var8 = arguments[var0];
                        var3[var0] = var8;
                        var0 = var0 + 1;
                        if (var0 < var6) {
                            _fun17110_ip = 51;
                            continue _fun17110
                        }
                    case 66:
                        var7 = _closure2_slot2;
                        var6 = null;
                        if (!(var6 == var7)) {
                            _fun17110_ip = 215;
                            continue _fun17110
                        }
                    case 82:
                        var7 = _closure3_slot0;
                        var6 = 'addListener';
                        if (!(var6 !== var7)) {
                            _fun17110_ip = 152;
                            continue _fun17110
                        }
                    case 97:
                        var6 = 'removeListener';
                        if (!(var6 !== var7)) {
                            _fun17110_ip = 129;
                            continue _fun17110
                        }
                    case 105:
                        var7 = var5.console;
                        var6 = var7.error;
                        var5 = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
                        var5 = var6.bind(var7)(var5);
                        _fun17110_ip = 150;
                        continue _fun17110;
                    case 129:
                        var7 = var3[var2];
                        var5 = 1;
                        var6 = var3[var5];
                        var5 = _closure2_slot1;
                        var5 = var5.bind(var4)(var7, var6);
                    case 150:
                        return var4;
                    case 152:
                        var4 = var3[var2];
                        var _closure4_slot0 = var4;
                        var2 = 1;
                        var5 = var3[var2];
                        var _closure4_slot1 = var5;
                        var6 = _closure2_slot0;
                        var2 = var6[var4];
                        if (var2) {
                            _fun17110_ip = 186;
                            continue _fun17110
                        }
                    case 182:
                        var2 = new Array(0);
                    case 186:
                        var6[var4] = var2;
                        var2 = _closure2_slot0;
                        var4 = var2[var4];
                        var2 = var4.push;
                        var2 = var2.bind(var4)(var5);
                        var1 = function() { // Environment: var1
                            var3 = _closure2_slot1;
                            var2 = _closure4_slot0;
                            var1 = _closure4_slot1;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        return var1;
                    case 215:
                        var2 = _closure2_slot2;
                        var0 = _closure3_slot0;
                        var1 = var2[var0];
                        var0 = var1.apply;
                        var0 = var0.bind(var1)(var2, var3);
                        return var0;
                }
            };
            var0[var2] = var1;
            return var0;
        };
        var0 = {};
        var0 = var5.bind(var6)(var4, var0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    var1 = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
    var2.NOT_INITIALIZED_ERROR = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 1474]);