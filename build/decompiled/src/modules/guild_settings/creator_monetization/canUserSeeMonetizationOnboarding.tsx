// modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun49949: for (var _fun49949_ip = 0;;) switch (_fun49949_ip) {
            case 0:
                var3 = arg0;
                var9 = var3.ownerId;
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                var2 = null;
                var2 = var2 == var1;
                var6 = undefined;
                var8 = undefined;
                if (var2) {
                    _fun49949_ip = 43;
                    continue _fun49949
                }
            case 38:
                var8 = var1.id;
            case 43:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var0 = var7[var4];
                var2 = var5.bind(var6)(var0);
                var1 = var2.canSeeGuildRoleSubscriptionSettings;
                var0 = {};
                var0.guild = var3;
                var8 = var9 === var8;
                var0.isOwner = var8;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var4 = var8.canManageGuildRoleSubscriptions;
                var4 = var4.bind(var8)(var3);
                var0.canManageGuildRoleSubscriptions = var4;
                var4 = 2;
                var8 = var7[var4];
                var10 = var5.bind(var6)(var8);
                var9 = var10.isMonetizationWaitlistEnabledForGuild;
                var8 = var3.id;
                var8 = var9.bind(var10)(var8);
                var0.isMonetizationWaitlistEnabledForGuild = var8;
                var8 = 3;
                var8 = var7[var8];
                var10 = var5.bind(var6)(var8);
                var9 = var10.isGuildEligibleForRoleSubscriptions;
                var8 = var3.id;
                var8 = var9.bind(var10)(var8);
                var0.isGuildEligibleForRoleSubscriptions = var8;
                var8 = var7[var4];
                var9 = var5.bind(var6)(var8);
                var8 = var9.isExpeditedMonetizationOnboardingGuild;
                var8 = var8.bind(var9)(var3);
                var0.isExpeditedMonetizationOnboardingGuild = var8;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var4 = var8.isUserInCreatorMonetizationEligibleCountry;
                var4 = var4.bind(var8)();
                var0.isUserInCreatorMonetizationEligibleCountry = var4;
                var4 = 4;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.shouldRestrictUpdatingCreatorMonetizationSettings;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var0.shouldRestrictUpdatingRoleSubscriptionSettings = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.canUserSeeMonetizationOnboarding = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 5636, 5640, 5637, 3086, 2]);