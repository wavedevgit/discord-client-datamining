// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12922: for (var _fun12922_ip = 0;;) switch (_fun12922_ip) {
        case 0:
            var5 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = function() {
                _fun12923: for (var _fun12923_ip = 0;;) switch (_fun12923_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun12923_ip = 74;
                        continue _fun12923;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot12 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var0 = 0;
            var3 = var6[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 1;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 5;
            var4 = var6[var3];
            var3 = arg3;
            var4 = var3.bind(var0)(var4);
            var _closure1_slot7 = var4;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var7 = var3.UIManager;
            var3 = var3.View;
            var _closure1_slot8 = var3;
            var3 = var7.hasViewManagerConfig;
            var5 = !var3;
            var3 = !var5;
            if (var5) {
                _fun12922_ip = 222;
                continue _fun12922
            }
        case 205:
            var6 = var7.hasViewManagerConfig;
            var5 = 'RNSentryOnDrawReporter';
            var3 = var6.bind(var7)(var5);
        case 222:
            var _closure1_slot10 = var3;
            var5 = var4.Component;
            var4 = function(arg0) { // Environment: var1
                var3 = function() {
                    _fun12927: for (var _fun12927_ip = 0;;) switch (_fun12927_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot2;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot5;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot4;
                            var0 = _closure1_slot12;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun12927_ip = 69;
                                continue _fun12927
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun12927_ip = 105;
                            continue _fun12927;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot5;
                            var5 = var5.bind(var2)(var3);
                            var5 = var5.constructor;
                            var4 = arguments;
                            var0 = var6.bind(var7)(var8, var4, var5);
                        case 105:
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var5 = _closure1_slot6;
                var2 = undefined;
                var4 = arg0;
                var4 = var5.bind(var2)(var3, var4);
                var1 = _closure1_slot3;
                var4 = {};
                var5 = 'render';
                var4.key = var5;
                var0 = function() {
                    var3 = _closure1_slot7;
                    var2 = var3.createElement;
                    var1 = _closure1_slot8;
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var0 = this;
                    var4 = var0.props;
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var4 = var4.bind(var0)(var5);
            var _closure1_slot11 = var4;
            var2.nativeComponentExists = var3;
            var1 = function() {
                _fun12929: for (var _fun12929_ip = 0;;) switch (_fun12929_ip) {
                    case 0:
                        var1 = _closure1_slot9;
                        if (var1) {
                            _fun12929_ip = 166;
                            continue _fun12929
                        }
                    case 13:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isExpoGo;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun12929_ip = 158;
                            continue _fun12929
                        }
                    case 48:
                        var1 = _closure1_slot10;
                        if (!var1) {
                            _fun12929_ip = 158;
                            continue _fun12929
                        }
                    case 55:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var4 = 8;
                        var1 = var1[var4];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.ReactNativeLibraries;
                        var2 = var1.ReactNative;
                        var5 = null;
                        var1 = undefined;
                        if (!(var5 !== var2)) {
                            _fun12929_ip = 107;
                            continue _fun12929
                        }
                    case 95:
                        var1 = undefined;
                        if (!(var1 !== var2)) {
                            _fun12929_ip = 107;
                            continue _fun12929
                        }
                    case 101:
                        var1 = var2.requireNativeComponent;
                    case 107:
                        if (!var1) {
                            _fun12929_ip = 158;
                            continue _fun12929
                        }
                    case 110:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var4];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.ReactNativeLibraries;
                        var3 = var1.ReactNative;
                        var2 = var3.requireNativeComponent;
                        var1 = 'RNSentryOnDrawReporter';
                        var1 = var2.bind(var3)(var1);
                        _fun12929_ip = 162;
                        continue _fun12929;
                    case 158:
                        var1 = _closure1_slot11;
                    case 162:
                        var _closure1_slot9 = var1;
                    case 166:
                        var0 = _closure1_slot9;
                        return var0;
                }
            };
            var2.getRNSentryOnDrawReporter = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 999, 994]);