// modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useMaybeFetchTieredTenureBadgeData, environment: var1
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 2;
        var3 = var4[var0];
        var0 = undefined;
        var8 = var5.bind(var0)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot3;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() { // Environment: var1
            var1 = _closure1_slot3;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var3 = var7.bind(var8)(var6, var3);
        var _closure2_slot0 = var3;
        var3 = 3;
        var3 = var4[var3];
        var6 = var5.bind(var0)(var3);
        var5 = var6.useIsPremiumSubscriber;
        var3 = _closure1_slot4;
        var3 = var3.TIER_2;
        var3 = var5.bind(var6)(var3);
        var _closure2_slot1 = var3;
        var3 = _closure1_slot1;
        var2 = 4;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var1 = function() { // Environment: var1
            _fun92589: for (var _fun92589_ip = 0;;) switch (_fun92589_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var0;
                    var0 = undefined;
                    var2 = undefined;
                    if (var4) {
                        _fun92589_ip = 29;
                        continue _fun92589
                    }
                case 20:
                    var4 = _closure2_slot0;
                    var2 = var4.id;
                case 29:
                    var2 = var3 != var2;
                    if (!var2) {
                        _fun92589_ip = 40;
                        continue _fun92589
                    }
                case 36:
                    var2 = _closure2_slot1;
                case 40:
                    if (!var2) {
                        _fun92589_ip = 80;
                        continue _fun92589
                    }
                case 43:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var0)(var1);
                case 80:
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useMaybeFetchTieredTenureBadgeData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 1615, 566, 7331, 4056, 6912, 2]);