// modules/virtual_currency/VirtualCurrencyUtils.tsx
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
    var3 = var3.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DismissibleContentGroupName;
    var _closure1_slot4 = var6;
    var3 = var3.ContentDismissActionType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/VirtualCurrencyUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun47197: for (var _fun47197_ip = 0;;) switch (_fun47197_ip) {
            case 0:
                var0 = _closure1_slot3;
                var2 = var0.FRACTIONAL_PREMIUM;
                var0 = arg0;
                if (!(var0 !== var2)) {
                    _fun47197_ip = 26;
                    continue _fun47197
                }
            case 20:
                var0 = _closure1_slot2;
                _fun47197_ip = 30;
                continue _fun47197;
            case 26:
                var0 = _closure1_slot6;
            case 30:
                return var0;
        }
    };
    var2.getApplicationIdForOrbSKU = var3;
    var1 = function() { // Environment: var1
        _fun47198: for (var _fun47198_ip = 0;;) switch (_fun47198_ip) {
            case 0:
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 4;
                var2 = var1[var3];
                var0 = undefined;
                var4 = var6.bind(var0)(var2);
                var2 = var4.UNSAFE_isDismissibleContentDismissed;
                var7 = 5;
                var1 = var1[var7];
                var1 = var6.bind(var0)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun47198_ip = 280;
                    continue _fun47198
                }
            case 66:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var3];
                var10 = var2.bind(var0)(var4);
                var9 = var10.UNSAFE_markDismissibleContentAsDismissed;
                var4 = var1[var7];
                var4 = var2.bind(var0)(var4);
                var4 = var4.DismissibleContent;
                var8 = var4.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL;
                var4 = {};
                var6 = _closure1_slot5;
                var11 = var6.INDIRECT_ACTION;
                var4.dismissAction = var11;
                var5 = _closure1_slot4;
                var11 = var5.VIRTUAL_CURRENCY_ONBOARDING;
                var4.groupName = var11;
                var4 = var9.bind(var10)(var8, var4);
                var4 = var1[var3];
                var10 = var2.bind(var0)(var4);
                var9 = var10.UNSAFE_markDismissibleContentAsDismissed;
                var4 = var1[var7];
                var4 = var2.bind(var0)(var4);
                var4 = var4.DismissibleContent;
                var8 = var4.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK;
                var4 = {};
                var11 = var6.INDIRECT_ACTION;
                var4.dismissAction = var11;
                var11 = var5.VIRTUAL_CURRENCY_ONBOARDING;
                var4.groupName = var11;
                var4 = var9.bind(var10)(var8, var4);
                var3 = var1[var3];
                var4 = var2.bind(var0)(var3);
                var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                var1 = var1[var7];
                var1 = var2.bind(var0)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK;
                var1 = {};
                var6 = var6.INDIRECT_ACTION;
                var1.dismissAction = var6;
                var5 = var5.VIRTUAL_CURRENCY_ONBOARDING;
                var1.groupName = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 280:
                return var0;
        }
    };
    var2.dismissOrbsOnboardingExperience = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3283, 1369, 1623, 3212, 1358, 2]);