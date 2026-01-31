// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.globalThis;
    var _closure1_slot2 = var2;
    var1.GLOBAL_OBJ = var2;
    var0 = function arg0, arg1, arg2() {
        _fun58558: for (var _fun58558_ip = 0;;) switch (_fun58558_ip) {
            case 0:
                var3 = arg0;
                var0 = arg2;
                if (var0) {
                    _fun58558_ip = 16;
                    continue _fun58558
                }
            case 9:
                var0 = _closure1_slot2;
            case 16:
                var1 = var0.__SENTRY__;
                if (var1) {
                    _fun58558_ip = 27;
                    continue _fun58558
                }
            case 25:
                var1 = {};
            case 27:
                var0.__SENTRY__ = var1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 0;
                var0 = var6[var2];
                var4 = undefined;
                var0 = var5.bind(var4)(var0);
                var0 = var0.SDK_VERSION;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.SDK_VERSION;
                var2 = var1[var2];
                if (var2) {
                    _fun58558_ip = 87;
                    continue _fun58558
                }
            case 85:
                var2 = {};
            case 87:
                var1[var0] = var2;
                var0 = var2[var3];
                if (var0) {
                    _fun58558_ip = 112;
                    continue _fun58558
                }
            case 98:
                var1 = arg1;
                var1 = var1.bind(var4)();
                var2[var3] = var1;
                var0 = var1;
            case 112:
                return var0;
        }
    };
    var1.getGlobalSingleton = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7133]);