// modules/premium/hooks/usePremiumDiscountOffer.native.android.tsx
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
    var3 = var3.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/usePremiumDiscountOffer.native.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: usePremiumDiscountOffer, environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var2);
        var5 = var6.useStateFromStoresObject;
        var2 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var0 = {};
            var2 = _closure1_slot3;
            var1 = var2.isFetchingProducts;
            var1 = var1.bind(var2)();
            var0.isFetchingProducts = var1;
            var1 = var2.getOfferIds;
            var1 = var1.bind(var2)();
            var0.offerIds = var1;
            return var0;
        };
        var2 = var5.bind(var6)(var4, var2);
        var2 = var2.offerIds;
        var1 = _closure1_slot4;
        var0 = function(arg0, arg1) { // Original name: useGetDiscountOffer, environment: var0
            _fun55275: for (var _fun55275_ip = 0;;) switch (_fun55275_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 2;
                    var1 = var8[var1];
                    var7 = undefined;
                    var1 = var2.bind(var7)(var1);
                    var2 = var1.bind(var7)(var5);
                    var1 = global;
                    var4 = var1.Object;
                    var1 = var4.values;
                    var6 = _closure1_slot0;
                    var0 = 3;
                    var0 = var8[var0];
                    var0 = var6.bind(var7)(var0);
                    var0 = var0.DiscountIdToProductOfferId;
                    var0 = var0[var5];
                    var5 = var1.bind(var4)(var0);
                    var6 = var5.length;
                    var4 = 0;
                    var0 = null;
                    if (!(var4 !== var6)) {
                        _fun55275_ip = 126;
                        continue _fun55275
                    }
                case 99:
                    var4 = var5.every;
                    var3 = function(arg0) { // Environment: var3
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var1 = null;
                    if (!var3) {
                        _fun55275_ip = 123;
                        continue _fun55275
                    }
                case 120:
                    var1 = var2;
                case 123:
                    var0 = var1;
                case 126:
                    return var0;
            }
        };
        var0 = var0.bind(var3)(var1, var2);
        return var0;
    };
    var2.usePremiumDiscountOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4575, 1615, 6619, 4572, 632, 2]);