// modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.isGuildOwner;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["KzCF/6"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var6;
    var6 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.xMW8FH;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.description = var6;
    var6 = false;
    var1.canCreateGuild = var6;
    var3 = function() {
        var2 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 3;
        var4 = var6[var0];
        var1 = undefined;
        var5 = var2.bind(var1)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var7;
        var0 = var6[var0];
        var0 = var2.bind(var1)(var0);
        var8 = var0.statesWillNeverBeEqual;
        var10 = function() { // Environment: var0
            var0 = function(arg0, arg1) { // Environment: var0
                _fun96322: for (var _fun96322_ip = 0;;) switch (_fun96322_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot3;
                        var7 = undefined;
                        var0 = arg1;
                        var0 = var2.bind(var7)(var4, var0);
                        if (!var0) {
                            _fun96322_ip = 226;
                            continue _fun96322
                        }
                    case 27:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var1 = 4;
                        var1 = var8[var1];
                        var3 = var6.bind(var7)(var1);
                        var2 = var3.canSeeGuildRoleSubscriptionSettings;
                        var1 = {
                            'guild': null,
                            'isOwner': true,
                            'canManageGuildRoleSubscriptions': true
                        };
                        var1.guild = var4;
                        var5 = 5;
                        var9 = var8[var5];
                        var11 = var6.bind(var7)(var9);
                        var10 = var11.isMonetizationWaitlistEnabledForGuild;
                        var9 = var4.id;
                        var9 = var10.bind(var11)(var9);
                        var1.isMonetizationWaitlistEnabledForGuild = var9;
                        var9 = 6;
                        var9 = var8[var9];
                        var11 = var6.bind(var7)(var9);
                        var10 = var11.isGuildEligibleForRoleSubscriptions;
                        var9 = var4.id;
                        var9 = var10.bind(var11)(var9);
                        var1.isGuildEligibleForRoleSubscriptions = var9;
                        var9 = var8[var5];
                        var10 = var6.bind(var7)(var9);
                        var9 = var10.isExpeditedMonetizationOnboardingGuild;
                        var9 = var9.bind(var10)(var4);
                        var1.isExpeditedMonetizationOnboardingGuild = var9;
                        var5 = var8[var5];
                        var9 = var6.bind(var7)(var5);
                        var5 = var9.isUserInCreatorMonetizationEligibleCountry;
                        var5 = var5.bind(var9)();
                        var1.isUserInCreatorMonetizationEligibleCountry = var5;
                        var5 = 7;
                        var5 = var8[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.shouldRestrictUpdatingCreatorMonetizationSettings;
                        var4 = var4.id;
                        var4 = var5.bind(var6)(var4);
                        var1.shouldRestrictUpdatingRoleSubscriptionSettings = var4;
                        var0 = var2.bind(var3)(var1);
                    case 226:
                        return var0;
                }
            };
            return var0;
        };
        var9 = new Array(0);
        var12 = var5;
        var11 = var3;
        var0 = var12[var4](var11, var10, var9, var8, var7);
        return var0;
    };
    var1.useIsGuildSupported = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1590, 1416, 1234, 566, 5594, 5598, 5595, 3043, 2]);