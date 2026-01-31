// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() {
        _fun12892: for (var _fun12892_ip = 0;;) switch (_fun12892_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.RN_GLOBAL_OBJ;
                var1 = var1.SENTRY_RELEASE;
                if (!var1) {
                    _fun12892_ip = 56;
                    continue _fun12892
                }
            case 39:
                var4 = var1.name;
                var3 = var1.version;
                if (!var4) {
                    _fun12892_ip = 56;
                    continue _fun12892
                }
            case 53:
                if (var3) {
                    _fun12892_ip = 58;
                    continue _fun12892
                }
            case 56:
                return var0;
            case 58:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '@';
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var1.createReleaseFromGlobalReleaseConstants = var2;
    var0 = function() {
        _fun12893: for (var _fun12893_ip = 0;;) switch (_fun12893_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.notWeb;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun12893_ip = 48;
                    continue _fun12893
                }
            case 38:
                var1 = _closure1_slot2;
                var1 = var1.bind(var0)();
                return var1;
            case 48:
                return var0;
        }
    };
    var1.getDefaultRelease = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [816, 999]);