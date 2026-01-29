// modules/collectibles/native/useAndroidUnsyncedFilter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.useCallback;
    var _closure1_slot2 = var7;
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/useAndroidUnsyncedFilter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        var5 = _closure1_slot3;
        var3 = undefined;
        var4 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.isIOS;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = new Array(0);
        var5 = var5.bind(var3)(var4, var2);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 4;
        var6 = var7[var2];
        var10 = var4.bind(var3)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.isFetchingGoogleSkus;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var9.bind(var10)(var8, var6);
        var _closure2_slot1 = var6;
        var2 = var7[var2];
        var8 = var4.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.get;
            var0 = 'bypass_google_sku_sync';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var7.bind(var8)(var4, var2);
        var _closure2_slot2 = var4;
        var2 = _closure1_slot2;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun88522: for (var _fun88522_ip = 0;;) switch (_fun88522_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        if (var0) {
                            _fun88522_ip = 14;
                            continue _fun88522
                        }
                    case 10:
                        var0 = _closure2_slot2;
                    case 14:
                        if (var0) {
                            _fun88522_ip = 21;
                            continue _fun88522
                        }
                    case 17:
                        var0 = _closure2_slot1;
                    case 21:
                        if (var0) {
                            _fun88522_ip = 63;
                            continue _fun88522
                        }
                    case 24:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isGPlaySynced;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var1);
                    case 63:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useAndroidUnsyncedFilter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3958, 4568, 478, 566, 11227, 2]);