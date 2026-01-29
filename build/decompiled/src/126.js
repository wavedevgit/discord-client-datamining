// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var _closure1_slot0 = var2;
    var2 = require;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: polyfillObjectProperty, environment: var0
        _fun2105: for (var _fun2105_ip = 0;;) switch (_fun2105_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = global;
                var2 = var0.Object;
                var1 = var2.getOwnPropertyDescriptor;
                var2 = var1.bind(var2)(var4, var3);
                var1 = var2;
                if (var1) {
                    _fun2105_ip = 34;
                    continue _fun2105
                }
            case 32:
                var1 = {};
            case 34:
                var7 = var1.enumerable;
                var6 = var1.writable;
                var1 = var1.configurable;
                if (!var2) {
                    _fun2105_ip = 101;
                    continue _fun2105
                }
            case 54:
                var2 = undefined;
                if (!(var2 !== var1)) {
                    _fun2105_ip = 63;
                    continue _fun2105
                }
            case 60:
                if (var1) {
                    _fun2105_ip = 101;
                    continue _fun2105
                }
            case 63:
                var2 = var0.console;
                var1 = var2.error;
                var0 = 'Failed to set polyfill. ';
                var5 = var0 + var3;
                var0 = ' is not configurable.';
                var0 = var5 + var0;
                var0 = var1.bind(var2)(var0);
                _fun2105_ip = 165;
                continue _fun2105;
            case 101:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.default;
                var0 = {};
                var5 = arg2;
                var0.get = var5;
                var5 = false;
                var7 = var5 !== var7;
                var0.enumerable = var7;
                var5 = var5 !== var6;
                var0.writable = var5;
                var0 = var1.bind(var2)(var4, var3, var0);
            case 165:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var1.polyfillObjectProperty = var2;
    var0 = function(arg0, arg1) { // Original name: polyfillGlobal, environment: var0
        var4 = _closure1_slot3;
        var3 = _closure1_slot0;
        var0 = undefined;
        var2 = arg0;
        var1 = arg1;
        var1 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var1.polyfillGlobal = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [50]);