// modules/activities/useFetchDeveloperActivityShelfItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var6 = metroImportDefault;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DevShelfFetchState;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useFetchDeveloperActivityShelfItems.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 2;
        var2 = var7[var2];
        var3 = undefined;
        var4 = var5.bind(var3)(var2);
        var2 = var4.useIsActivitiesEnabledForCurrentPlatform;
        var6 = var2.bind(var4)();
        var _closure2_slot0 = var6;
        var2 = 3;
        var2 = var7[var2];
        var2 = var5.bind(var3)(var2);
        var4 = var2.DeveloperMode;
        var2 = var4.getSetting;
        var4 = var2.bind(var4)();
        var _closure2_slot1 = var4;
        var2 = 4;
        var2 = var7[var2];
        var8 = var5.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot3;
        var5 = new Array(1);
        var5[0] = var2;
        var3 = function() { // Environment: var0
            var1 = _closure1_slot3;
            var0 = var1.getFetchState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = new Array(0);
        var5 = var7.bind(var8)(var5, var3, var2);
        var _closure2_slot2 = var5;
        var3 = _closure1_slot2;
        var2 = var3.useEffect;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun107906: for (var _fun107906_ip = 0;;) switch (_fun107906_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (!var0) {
                        _fun107906_ip = 14;
                        continue _fun107906
                    }
                case 10:
                    var0 = _closure2_slot1;
                case 14:
                    if (!var0) {
                        _fun107906_ip = 38;
                        continue _fun107906
                    }
                case 17:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot4;
                    var1 = var1.INITIALIZED;
                    var0 = var2 === var1;
                case 38:
                    if (!var0) {
                        _fun107906_ip = 76;
                        continue _fun107906
                    }
                case 41:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetchDeveloperApplications;
                    var0 = var0.bind(var1)();
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = null;
        return var0;
    };
    var2.useFetchDeveloperActivityShelfItems = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7248, 7937, 1348, 566, 7939, 2]);