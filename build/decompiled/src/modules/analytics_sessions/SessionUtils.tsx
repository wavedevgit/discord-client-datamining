// modules/analytics_sessions/SessionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var4 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.Millis;
    var4 = var3.MINUTE;
    var3 = 30;
    var4 = var3 * var4;
    var _closure1_slot0 = var4;
    var3 = 1;
    var6 = var5[var3];
    var5 = require;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/analytics_sessions/SessionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SESSION_IDLE_TIMEOUT_MILLIS = var4;
    var2.CLIENT_SESSION_STORAGE_VERSION = var3;
    var3 = function arg0() {
        var1 = _closure1_slot0;
        var0 = arg0;
        var0 = var0.lastUsedTimestamp;
        var1 = var1 + var0;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        var1 = var1 - var0;
        var0 = 0;
        var0 = var1 <= var0;
        return var0;
    };
    var2.isSessionExpired = var3;
    var1 = function arg0() {
        _fun39806: for (var _fun39806_ip = 0;;) switch (_fun39806_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 != var3;
                var0 = 0;
                if (!var1) {
                    _fun39806_ip = 29;
                    continue _fun39806
                }
            case 14:
                var1 = global;
                var2 = var1.Number;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 29:
                return var0;
        }
    };
    var2.timestampOrZero = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [667, 2]);