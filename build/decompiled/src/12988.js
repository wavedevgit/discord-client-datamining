// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function() {
        _fun99632: for (var _fun99632_ip = 0;;) switch (_fun99632_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = var0.GLOBAL_OBJ;
                var1 = var0.chrome;
                var0 = var1;
                if (!var0) {
                    _fun99632_ip = 48;
                    continue _fun99632
                }
            case 42:
                var0 = var1.app;
            case 48:
                if (!var0) {
                    _fun99632_ip = 63;
                    continue _fun99632
                }
            case 51:
                var1 = var1.app;
                var0 = var1.runtime;
            case 63:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var3 = var1.GLOBAL_OBJ;
                var1 = 'history';
                var1 = var1 in var3;
                if (!var1) {
                    _fun99632_ip = 138;
                    continue _fun99632
                }
            case 97:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.GLOBAL_OBJ;
                var3 = var3.history;
                var3 = var3.pushState;
                var3 = !var3;
                var1 = !var3;
            case 138:
                if (!var1) {
                    _fun99632_ip = 182;
                    continue _fun99632
                }
            case 141:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.GLOBAL_OBJ;
                var2 = var2.history;
                var2 = var2.replaceState;
                var2 = !var2;
                var1 = !var2;
            case 182:
                var0 = !var0;
                if (!var0) {
                    _fun99632_ip = 191;
                    continue _fun99632
                }
            case 188:
                var0 = var1;
            case 191:
                return var0;
        }
    };
    var1.supportsHistory = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12941]);