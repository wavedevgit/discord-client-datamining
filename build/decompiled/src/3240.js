// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var1);
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 2;
    var5 = var5[var1];
    var1 = require;
    var1 = var1.bind(var0)(var5);
    var1 = var1.NativeModules;
    var _closure1_slot1 = var1;
    var1 = {
        'enableVibrateFallback': false,
        'ignoreAndroidSystemSettings': false
    };
    var _closure1_slot2 = var1;
    var1 = function() { // Original name: RNReactNativeHapticFeedback, environment: var4
        var3 = _closure1_slot0;
        var2 = _closure1_slot4;
        var0 = undefined;
        var1 = this;
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var _closure1_slot4 = var1;
    var1 = var3.bind(var0)(var1);
    var3 = function() { // Environment: var4
        _fun28102: for (var _fun28102_ip = 0;;) switch (_fun28102_ip) {
            case 0:
                var0 = undefined;
                var7 = undefined;
                var2 = undefined;
                var1 = undefined;
                var3 = arguments.length;
                var4 = 0;
                var5 = var3 > var4;
                var6 = 'selection';
                var3 = var6;
                if (!var5) {
                    _fun28102_ip = 42;
                    continue _fun28102
                }
            case 27:
                var5 = arguments[var4];
                var3 = var6;
                if (!(var0 !== var5)) {
                    _fun28102_ip = 42;
                    continue _fun28102
                }
            case 38:
                var3 = arguments[var4];
            case 42:
                var2 = var3;
                var5 = _closure1_slot3;
                var4 = arguments.length;
                var6 = 1;
                if (!(var4 > var6)) {
                    _fun28102_ip = 70;
                    continue _fun28102
                }
            case 62:
                var4 = arguments[var6];
                if (!(var0 === var4)) {
                    _fun28102_ip = 74;
                    continue _fun28102
                }
            case 70:
                var4 = {};
                _fun28102_ip = 78;
                continue _fun28102;
            case 74:
                var4 = arguments[var6];
            case 78:
                var1 = var5.bind(var0)(var4);
            case 83: // try_start_0
                var3 = _closure1_slot1;
                var4 = var3.RNReactNativeHapticFeedback;
                var3 = var4.trigger;
                var1 = var3.bind(var4)(var2, var1);
            case 107: // try_end0
                _fun28102_ip = 135;
                continue _fun28102;
            case 109: // catch_target0
                CatchBlockStart(arg_register = 1);
                var1 = global;
                var3 = var1.console;
                var2 = var3.warn;
                var1 = 'RNReactNativeHapticFeedback is not available';
                var1 = var2.bind(var3)(var1);
            case 135:
                return var0;
        }
    };
    var1.trigger = var3;
    var3 = function(arg0) { // Original name: createTriggerOptions, environment: var4
        _fun28103: for (var _fun28103_ip = 0;;) switch (_fun28103_ip) {
            case 0:
                var1 = arg0;
                var2 = 'boolean';
                var0 = typeof var1;
                if (!(var2 !== var0)) {
                    _fun28103_ip = 45;
                    continue _fun28103
                }
            case 14:
                var0 = global;
                var4 = var0.Object;
                var3 = var4.assign;
                var2 = _closure1_slot2;
                var0 = {};
                var0 = var3.bind(var4)(var0, var2, var1);
                _fun28103_ip = 81;
                continue _fun28103;
            case 45:
                var2 = global;
                var5 = var2.Object;
                var4 = var5.assign;
                var3 = _closure1_slot2;
                var2 = {};
                var2.enableVibrateFallback = var1;
                var1 = {};
                var0 = var4.bind(var5)(var1, var3, var2);
            case 81:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 27]);