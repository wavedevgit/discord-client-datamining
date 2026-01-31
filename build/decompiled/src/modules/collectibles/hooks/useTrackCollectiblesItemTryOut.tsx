// modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticsPremiumFeatureNames;
    var3 = var3.AnalyticsPremiumFeatureTiers;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 4;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CollectiblesItemType;
    var9 = var8.AVATAR_DECORATION;
    var8 = var7.AVATAR_DECORATION;
    var3[var9] = var8;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CollectiblesItemType;
    var8 = var8.PROFILE_EFFECT;
    var7 = var7.PROFILE_EFFECT;
    var3[var8] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CollectiblesItemType;
    var7 = var7.NAMEPLATE;
    var3[var7] = var0;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CollectiblesItemType;
    var7 = var7.NONE;
    var3[var7] = var0;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CollectiblesItemType;
    var7 = var7.BUNDLE;
    var3[var7] = var0;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CollectiblesItemType;
    var7 = var7.VARIANTS_GROUP;
    var3[var7] = var0;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.CollectiblesItemType;
    var6 = var6.EXTERNAL_SKU;
    var3[var6] = var0;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var2 = var3[var2];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.products;
            return var0;
        };
        var5 = var6.bind(var7)(var5, var2);
        var _closure2_slot1 = var5;
        var2 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun49079: for (var _fun49079_ip = 0;;) switch (_fun49079_ip) {
                case 0:
                    var0 = arg0;
                    var9 = var0.type;
                    var2 = var0.skuId;
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var7 = var0.bind(var1)(var2);
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 6;
                    var1 = var10[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot5;
                    var2 = var1.PREMIUM_FEATURE_TRY_OUT;
                    var1 = {};
                    var6 = _closure1_slot7;
                    var6 = var6[var9];
                    var1.feature_name = var6;
                    var9 = _closure1_slot0;
                    var6 = 7;
                    var6 = var10[var6];
                    var9 = var9.bind(var0)(var6);
                    var6 = var9.isPremiumCollectiblesProduct;
                    var6 = var6.bind(var9)(var7);
                    var8 = _closure1_slot6;
                    if (var6) {
                        _fun49079_ip = 128;
                        continue _fun49079
                    }
                case 120:
                    var6 = var8.PREMIUM_STANDARD;
                    _fun49079_ip = 134;
                    continue _fun49079;
                case 128:
                    var6 = var8.FREE;
                case 134:
                    var1.feature_tier = var6;
                    var6 = null;
                    var8 = var6 == var7;
                    var6 = undefined;
                    if (var8) {
                        _fun49079_ip = 155;
                        continue _fun49079
                    }
                case 150:
                    var6 = var7.name;
                case 155:
                    var1.feature_selection = var6;
                    var5 = _closure2_slot0;
                    var1.location_stack = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4562, 660, 1615, 3452, 632, 795, 4563, 2]);