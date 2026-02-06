// modules/premium/hooks/usePremiumTrialOffer.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun55476: for (var _fun55476_ip = 0;;) switch (_fun55476_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 2;
                var1 = var8[var1];
                var6 = undefined;
                var2 = var7.bind(var6)(var1);
                var1 = var2.useTrialOffer;
                var1 = var1.bind(var2)(var5);
                var2 = global;
                var4 = var2.Object;
                var3 = var4.values;
                var2 = 3;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.TrialIdToProductOfferId;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.every;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!var2) {
                    _fun55476_ip = 112;
                    continue _fun55476
                }
            case 109:
                var0 = var1;
            case 112:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot3 = var6;
    var6 = var3.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot4 = var6;
    var6 = var3.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = var6;
    var6 = var3.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot6 = var6;
    var3 = var3.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/usePremiumTrialOffer.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 4;
        var1 = var4[var1];
        var8 = undefined;
        var5 = var3.bind(var8)(var1);
        var4 = var5.useStateFromStoresObject;
        var1 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            var0 = {};
            var2 = _closure1_slot2;
            var1 = var2.isFetchingProducts;
            var1 = var1.bind(var2)();
            var0.isFetchingProducts = var1;
            var1 = var2.getOfferIds;
            var1 = var1.bind(var2)();
            var0.offerIds = var1;
            return var0;
        };
        var1 = var4.bind(var5)(var3, var1);
        var7 = var1.offerIds;
        var6 = _closure1_slot8;
        var1 = _closure1_slot6;
        var5 = var6.bind(var8)(var1, var7);
        var1 = _closure1_slot3;
        var4 = var6.bind(var8)(var1, var7);
        var1 = _closure1_slot4;
        var3 = var6.bind(var8)(var1, var7);
        var1 = _closure1_slot5;
        var1 = var6.bind(var8)(var1, var7);
        var2 = _closure1_slot7;
        var6 = var6.bind(var8)(var2, var7);
        var2 = new Array(5);
        var2[0] = var6;
        var2[1] = var5;
        var2[2] = var4;
        var2[3] = var3;
        var2[4] = var1;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var1 = null;
            var0 = arg0;
            var0 = var1 != var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.usePremiumTrialOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4612, 1623, 6672, 4609, 632, 2]);