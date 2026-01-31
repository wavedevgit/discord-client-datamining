// modules/analytics_sessions/SessionAdGenerator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun46897: for (var _fun46897_ip = 0;;) switch (_fun46897_ip) {
            case 0:
                var4 = arg0;
                var3 = global;
                var1 = var3.Date;
                var0 = var1.now;
                var7 = var0.bind(var1)();
                var0 = var4.createdAtTimestamp;
                if (!(!(var7 < var0))) {
                    _fun46897_ip = 101;
                    continue _fun46897
                }
            case 30:
                var0 = var4.lastUsedTimestamp;
                var2 = var7 - var0;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var5 = var5[var0];
                var0 = undefined;
                var0 = var6.bind(var0)(var5);
                var0 = var0.SESSION_IDLE_TIMEOUT_MILLIS;
                var0 = var2 > var0;
                var2 = var4.createdAtTimestamp;
                var2 = var7 - var2;
                var1 = _closure1_slot3;
                var1 = var2 > var1;
                if (var0) {
                    _fun46897_ip = 99;
                    continue _fun46897
                }
            case 96:
                var0 = var1;
            case 99:
                return var0;
            case 101:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.addBreadcrumb;
                var0 = {};
                var5 = 'ad';
                var0.category = var5;
                var6 = var4.createdAtTimestamp;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var4 = 'future facing timestamp Date.now(): ';
                var3 = ', initialized timestamp: ';
                var3 = var5.bind(var4)(var7, var3, var6);
                var0.message = var3;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var4 = var4.Millis;
    var7 = var4.HOUR;
    var4 = 12;
    var4 = var4 * var7;
    var _closure1_slot3 = var4;
    var4 = null;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/analytics_sessions/SessionAdGenerator.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun46898: for (var _fun46898_ip = 0;;) switch (_fun46898_ip) {
            case 0:
                var0 = arguments[0];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun46898_ip = 11;
                    continue _fun46898
                }
            case 9:
                var0 = false;
            case 11:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var3 = var1.bind(var2)();
                var4 = _closure1_slot4;
                var1 = null;
                if (!(var1 != var4)) {
                    _fun46898_ip = 76;
                    continue _fun46898
                }
            case 41:
                var4 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun46898_ip = 76;
                    continue _fun46898
                }
            case 57:
                if (!var0) {
                    _fun46898_ip = 70;
                    continue _fun46898
                }
            case 60:
                var0 = _closure1_slot4;
                var0.lastUsedTimestamp = var3;
            case 70:
                var0 = _closure1_slot4;
                _fun46898_ip = 153;
                continue _fun46898;
            case 76:
                var1 = {};
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 1;
                var7 = var6[var7];
                var8 = var4.bind(var5)(var7);
                var7 = var8.v4;
                var7 = var7.bind(var8)();
                var1.uuid = var7;
                var1.createdAtTimestamp = var3;
                var1.lastUsedTimestamp = var3;
                var3 = 2;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.CLIENT_SESSION_STORAGE_VERSION;
                var1.version = var3;
                _closure1_slot4 = var1;
                var0 = var1;
            case 153:
                return var0;
        }
    };
    var2.getOrRefreshAdSession = var4;
    var4 = function() {
        var0 = null;
        _closure1_slot4 = var0;
        var0 = undefined;
        return var0;
    };
    var2.clearAdSession = var4;
    var3 = function() {
        var0 = _closure1_slot4;
        return var0;
    };
    var2.getCurrentAdSession = var3;
    var2.isAdSessionExpired = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [667, 491, 4326, 1207, 2]);