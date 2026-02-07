// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var4[var3];
    var5 = metroImportAll;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot3 = var5;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var3 = var3.useState;
    var _closure1_slot4 = var3;
    var1 = function() {
        _fun17329: for (var _fun17329_ip = 0;;) switch (_fun17329_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 2;
                var0 = var0[var6];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var5 = var0.bind(var4)();
                var _closure2_slot0 = var5;
                var3 = _closure1_slot4;
                var0 = var5.isFocused;
                var3 = var3.bind(var4)(var0);
                var0 = _closure1_slot2;
                var3 = var0.bind(var4)(var3, var6);
                var0 = 0;
                var6 = var3[var0];
                var0 = 1;
                var3 = var3[var0];
                var _closure2_slot1 = var3;
                var0 = var5.isFocused;
                var0 = var0.bind(var5)();
                if (!(var6 !== var0)) {
                    _fun17329_ip = 96;
                    continue _fun17329
                }
            case 91:
                var3 = var3.bind(var4)(var0);
            case 96:
                var2 = _closure1_slot3;
                var4 = var2.useEffect;
                var3 = new Array(1);
                var3[0] = var5;
                var1 = function() { // Environment: var1
                    var4 = _closure2_slot0;
                    var3 = var4.addListener;
                    var2 = 'focus';
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var0 = true;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var3 = var4.addListener;
                    var2 = 'blur';
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot1 = var1;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var1 = var4.bind(var2)(var1, var3);
                var1 = var2.useDebugValue;
                var1 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1521]);