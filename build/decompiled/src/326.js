// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.useCallback;
    var _closure1_slot0 = var4;
    var3 = var3.useRef;
    var _closure1_slot1 = var3;
    var1 = function(arg0) { // Original name: useRefEffect, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var2 = _closure1_slot1;
        var3 = undefined;
        var2 = var2.bind(var3)(var3);
        var _closure2_slot1 = var2;
        var2 = _closure1_slot0;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun4898: for (var _fun4898_ip = 0;;) switch (_fun4898_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    if (!var1) {
                        _fun4898_ip = 39;
                        continue _fun4898
                    }
                case 18:
                    var2 = _closure2_slot1;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    var2.current = var1;
                case 39:
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun4898_ip = 66;
                        continue _fun4898
                    }
                case 45:
                    var1 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var3);
                    var1.current = var0;
                case 66:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);