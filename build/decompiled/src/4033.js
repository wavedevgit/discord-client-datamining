// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var5 = var4.Platform;
    var4 = var4.UIManager;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var4 = false;
    var _closure1_slot2 = var4;
    var2.isNativePlatformSupported = var3;
    var3 = function() {
        _fun37380: for (var _fun37380_ip = 0;;) switch (_fun37380_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var2 = 0;
                var4 = var1 > var2;
                if (!var4) {
                    _fun37380_ip = 24;
                    continue _fun37380
                }
            case 16:
                var1 = arguments[var2];
                var4 = var0 !== var1;
            case 24:
                var1 = !var4;
                if (!var4) {
                    _fun37380_ip = 34;
                    continue _fun37380
                }
            case 30:
                var1 = arguments[var2];
            case 34:
                _closure1_slot1 = var1;
                if (!var1) {
                    _fun37380_ip = 68;
                    continue _fun37380
                }
            case 44:
                var4 = _closure1_slot0;
                var3 = var4.getViewManagerConfig;
                var2 = 'RNSScreen';
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
            case 68:
                if (!var1) {
                    _fun37380_ip = 95;
                    continue _fun37380
                }
            case 71:
                var1 = global;
                var3 = var1.console;
                var2 = var3.error;
                var1 = "Screen native module hasn't been linked. Please check the react-native-screens README for more details";
                var1 = var2.bind(var3)(var1);
            case 95:
                return var0;
        }
    };
    var2.enableScreens = var3;
    var3 = function() {
        _fun37381: for (var _fun37381_ip = 0;;) switch (_fun37381_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = 0;
                var4 = var2 > var1;
                if (!var4) {
                    _fun37381_ip = 24;
                    continue _fun37381
                }
            case 16:
                var2 = arguments[var1];
                var4 = var0 !== var2;
            case 24:
                var2 = !var4;
                if (!var4) {
                    _fun37381_ip = 34;
                    continue _fun37381
                }
            case 30:
                var2 = arguments[var1];
            case 34:
                _closure1_slot2 = var2;
                return var0;
        }
    };
    var2.enableFreeze = var3;
    var3 = function() {
        var0 = _closure1_slot1;
        return var0;
    };
    var2.screensEnabled = var3;
    var1 = function() {
        var0 = _closure1_slot2;
        return var0;
    };
    var2.freezeEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);