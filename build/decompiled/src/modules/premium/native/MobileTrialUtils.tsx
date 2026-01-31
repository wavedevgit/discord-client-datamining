// modules/premium/native/MobileTrialUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/MobileTrialUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun57641: for (var _fun57641_ip = 0;;) switch (_fun57641_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 1;
                var0 = var6[var0];
                var2 = undefined;
                var1 = var5.bind(var2)(var0);
                var0 = var1.usePremiumTrialOffer;
                var3 = var0.bind(var1)();
                var0 = 2;
                var0 = var6[var0];
                var4 = var5.bind(var2)(var0);
                var1 = var4.UNSAFE_useIsDismissibleContentDismissed;
                var0 = 3;
                var0 = var6[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE;
                var1 = var1.bind(var4)(var0);
                var0 = null;
                var4 = var0 == var3;
                if (var4) {
                    _fun57641_ip = 97;
                    continue _fun57641
                }
            case 91:
                var2 = var3.expires_at;
            case 97:
                var2 = var0 != var2;
                var0 = var0 != var3;
                if (!var0) {
                    _fun57641_ip = 111;
                    continue _fun57641
                }
            case 108:
                var0 = !var2;
            case 111:
                if (!var0) {
                    _fun57641_ip = 117;
                    continue _fun57641
                }
            case 114:
                var0 = !var1;
            case 117:
                return var0;
        }
    };
    var2.useShouldShowPremiumTrialUserSettingsAvatarBadge = var3;
    var1 = function() {
        _fun57642: for (var _fun57642_ip = 0;;) switch (_fun57642_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.usePremiumTrialOffer;
                var2 = var1.bind(var2)();
                var3 = null;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun57642_ip = 67;
                    continue _fun57642
                }
            case 46:
                var2 = var2.subscription_trial;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun57642_ip = 67;
                    continue _fun57642
                }
            case 61:
                var1 = var2.sku_id;
            case 67:
                var0 = _closure1_slot2;
                var0 = var0[var1];
                return var0;
        }
    };
    var2.usePremiumTrialOfferPremiumType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 6615, 3171, 1358, 2]);