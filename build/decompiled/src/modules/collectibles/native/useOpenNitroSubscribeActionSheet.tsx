// modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsPages;
    var _closure1_slot3 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun87165: for (var _fun87165_ip = 0;;) switch (_fun87165_ip) {
            case 0:
                var4 = arguments[0];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun87165_ip = 24;
                    continue _fun87165
                }
            case 11:
                var1 = _closure1_slot4;
                var4 = var1.COLLECTIBLES_SHOP;
            case 24:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var5 = var2.analyticsLocations;
                _closure2_slot1 = var5;
                var3 = _closure1_slot2;
                var2 = var3.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var5 = {};
                    var4 = _closure1_slot3;
                    var4 = var4.COLLECTIBLES_SHOP;
                    var5.page = var4;
                    var6 = _closure2_slot0;
                    var5.section = var6;
                    var1.analyticsLocation = var5;
                    var4 = _closure2_slot1;
                    var1.analyticsLocations = var4;
                    var3 = _closure1_slot5;
                    var3 = var3.TIER_2;
                    var1.premiumType = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1615, 5690, 7014, 2]);