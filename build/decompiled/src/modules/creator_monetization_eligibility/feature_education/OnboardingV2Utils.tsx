// modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx
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
    var3 = var3.isGuildOwner;
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
    var6 = var3.GuildFeatures;
    var7 = var6.CREATOR_MONETIZABLE_PROVISIONAL;
    var3 = new Array(5);
    var3[0] = var7;
    var7 = var6.CREATOR_MONETIZABLE;
    var3[1] = var7;
    var7 = var6.CREATOR_MONETIZABLE_WHITEGLOVE;
    var3[2] = var7;
    var7 = var6.CREATOR_MONETIZABLE_DISABLED;
    var3[3] = var7;
    var6 = var6.CREATOR_MONETIZABLE_RESTRICTED;
    var3[4] = var6;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useCanSeeCreatorMonetizationOnboardingV2Upsell, environment: var1
        _fun102764: for (var _fun102764_ip = 0;;) switch (_fun102764_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 4;
                var2 = var8[var0];
                var6 = undefined;
                var9 = var7.bind(var6)(var2);
                var5 = var9.useStateFromStores;
                var2 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var9)(var4, var2);
                var _closure2_slot1 = var5;
                var0 = var8[var0];
                var9 = var7.bind(var6)(var0);
                var4 = var9.useStateFromStores;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var9)(var2, var0);
                var0 = 5;
                var2 = var8[var0];
                var9 = var7.bind(var6)(var2);
                var2 = var9.useGuildRoleSubscriptionSettingsVisibility;
                var2 = var2.bind(var9)(var5);
                var0 = var8[var0];
                var0 = var7.bind(var6)(var0);
                var0 = var0.GuildRoleSubscriptionSettingsVisibility;
                var0 = var0.VISIBLE;
                var0 = var2 === var0;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun102764_ip = 207;
                    continue _fun102764
                }
            case 161:
                var2 = _closure1_slot2;
                var2 = var2.bind(var6)(var5, var4);
                var4 = _closure1_slot5;
                var3 = var4.every;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot1;
                    var2 = var0.features;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                if (!var0) {
                    _fun102764_ip = 199;
                    continue _fun102764
                }
            case 196:
                var0 = var2;
            case 199:
                if (!var0) {
                    _fun102764_ip = 205;
                    continue _fun102764
                }
            case 202:
                var0 = var1;
            case 205:
                return var0;
            case 207:
                var0 = false;
                return var0;
        }
    };
    var2.useCanSeeCreatorMonetizationOnboardingV2Upsell = var3;
    var1 = function(arg0) { // Original name: canSeeCreatorMonetizationOnboardingV2Upsell, environment: var1
        _fun102768: for (var _fun102768_ip = 0;;) switch (_fun102768_ip) {
            case 0:
                var4 = _closure1_slot3;
                var2 = var4.getGuild;
                var0 = arg0;
                var6 = var2.bind(var4)(var0);
                var _closure2_slot0 = var6;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun102768_ip = 160;
                    continue _fun102768
                }
            case 35:
                var4 = _closure1_slot4;
                var2 = var4.getCurrentUser;
                var5 = var2.bind(var4)();
                if (!(var0 != var5)) {
                    _fun102768_ip = 156;
                    continue _fun102768
                }
            case 52:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 5;
                var2 = var8[var0];
                var4 = undefined;
                var9 = var7.bind(var4)(var2);
                var2 = var9.getGuildRoleSubscriptionSettingsVisibility;
                var2 = var2.bind(var9)(var6);
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.GuildRoleSubscriptionSettingsVisibility;
                var0 = var0.VISIBLE;
                var0 = var2 === var0;
                var2 = _closure1_slot2;
                var2 = var2.bind(var4)(var6, var5);
                var4 = _closure1_slot5;
                var3 = var4.every;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var2 = var0.features;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                if (!var0) {
                    _fun102768_ip = 148;
                    continue _fun102768
                }
            case 145:
                var0 = var2;
            case 148:
                if (!var0) {
                    _fun102768_ip = 154;
                    continue _fun102768
                }
            case 151:
                var0 = var1;
            case 154:
                return var0;
            case 156:
                var0 = false;
                return var0;
            case 160:
                var0 = false;
                return var0;
        }
    };
    var2.canSeeCreatorMonetizationOnboardingV2Upsell = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1416, 1410, 1613, 660, 566, 5594, 2]);