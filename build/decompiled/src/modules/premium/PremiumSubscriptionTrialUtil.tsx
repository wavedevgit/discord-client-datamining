// modules/premium/PremiumSubscriptionTrialUtil.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = var6;
    var6 = var3.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot6 = var6;
    var6 = var3.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID;
    var _closure1_slot7 = var6;
    var6 = var3.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot8 = var6;
    var3 = var3.PREMIUM_TRIAL_IDS_ALL;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/PremiumSubscriptionTrialUtil.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        _fun55199: for (var _fun55199_ip = 0;;) switch (_fun55199_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun55199_ip = 73;
                    continue _fun55199
                }
            case 64:
                var1 = var1.hasActiveTrial;
                var0 = !var1;
            case 73:
                var0 = !var0;
                return var0;
        }
    };
    var2.useHasActiveTrial = var3;
    var3 = function() { // Environment: var1
        _fun55201: for (var _fun55201_ip = 0;;) switch (_fun55201_ip) {
            case 0:
                var1 = _closure1_slot3;
                var0 = var1.getPremiumTypeSubscription;
                var2 = var0.bind(var1)();
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun55201_ip = 34;
                    continue _fun55201
                }
            case 28:
                var0 = var2.trialId;
            case 34:
                var0 = var1 != var0;
                return var0;
        }
    };
    var2.hasActiveTrial = var3;
    var3 = function(arg0) { // Environment: var1
        _fun55202: for (var _fun55202_ip = 0;;) switch (_fun55202_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var2 = var1 == var3;
                var0 = undefined;
                if (var2) {
                    _fun55202_ip = 20;
                    continue _fun55202
                }
            case 14:
                var0 = var3.trialId;
            case 20:
                var0 = var1 != var0;
                if (!var0) {
                    _fun55202_ip = 98;
                    continue _fun55202
                }
            case 27:
                var4 = var3.trialId;
                var1 = _closure1_slot5;
                var1 = var4 === var1;
                if (var1) {
                    _fun55202_ip = 61;
                    continue _fun55202
                }
            case 47:
                var5 = var3.trialId;
                var4 = _closure1_slot6;
                var1 = var5 === var4;
            case 61:
                if (var1) {
                    _fun55202_ip = 78;
                    continue _fun55202
                }
            case 64:
                var5 = var3.trialId;
                var4 = _closure1_slot7;
                var1 = var5 === var4;
            case 78:
                if (var1) {
                    _fun55202_ip = 95;
                    continue _fun55202
                }
            case 81:
                var3 = var3.trialId;
                var2 = _closure1_slot8;
                var1 = var3 === var2;
            case 95:
                var0 = var1;
            case 98:
                return var0;
        }
    };
    var2.isEligibleTrialSub = var3;
    var3 = function() { // Original name: useCurrentPremiumTrialTier, environment: var1
        _fun55203: for (var _fun55203_ip = 0;;) switch (_fun55203_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 4;
                var4 = var6[var3];
                var1 = undefined;
                var9 = var5.bind(var1)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var8.bind(var9)(var7, var4);
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var5)(var2, var0);
                var3 = null;
                var5 = var3 != var4;
                var0 = null;
                if (!var5) {
                    _fun55203_ip = 132;
                    continue _fun55203
                }
            case 103:
                var4 = var4.hasActiveTrial;
                var0 = null;
                if (!var4) {
                    _fun55203_ip = 132;
                    continue _fun55203
                }
            case 114:
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun55203_ip = 129;
                    continue _fun55203
                }
            case 123:
                var1 = var2.premiumType;
            case 129:
                var0 = var1;
            case 132:
                return var0;
        }
    };
    var2.useCurrentPremiumTrialTier = var3;
    var1 = function() { // Original name: getPremiumTrialOffer, environment: var1
        var3 = _closure1_slot9;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getUserTrialOffer;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun55208: for (var _fun55208_ip = 0;;) switch (_fun55208_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun55208_ip = 51;
                        continue _fun55208
                    }
                case 12:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.hasUserTrialOfferExpired;
                    var1 = var1.bind(var2)(var3);
                    var0 = !var1;
                case 51:
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var0);
        var0 = var1.shift;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.getPremiumTrialOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 3076, 6602, 1615, 566, 6606, 2]);