// modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var7 = function arg0() {
        _fun49988: for (var _fun49988_ip = 0;;) switch (_fun49988_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.guild;
                var5 = var1.isOwner;
                var0 = var1.canManageGuildRoleSubscriptions;
                var7 = var1.isGuildEligibleForRoleSubscriptions;
                var4 = var1.isExpeditedMonetizationOnboardingGuild;
                var6 = var1.isUserInCreatorMonetizationEligibleCountry;
                var1 = var1.shouldRestrictUpdatingRoleSubscriptionSettings;
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun49988_ip = 212;
                    continue _fun49988
                }
            case 56:
                if (!var1) {
                    _fun49988_ip = 62;
                    continue _fun49988
                }
            case 59:
                var1 = !var5;
            case 62:
                var1 = !var1;
                if (!var1) {
                    _fun49988_ip = 209;
                    continue _fun49988
                }
            case 71:
                var10 = var8.features;
                var9 = var10.has;
                var2 = _closure1_slot5;
                var2 = var2.CREATOR_MONETIZABLE;
                var2 = var9.bind(var10)(var2);
                var9 = !var2;
                if (!var9) {
                    _fun49988_ip = 135;
                    continue _fun49988
                }
            case 106:
                var11 = var8.features;
                var10 = var11.has;
                var2 = _closure1_slot5;
                var2 = var2.CREATOR_MONETIZABLE_PROVISIONAL;
                var2 = var10.bind(var11)(var2);
                var9 = !var2;
            case 135:
                var2 = !var9;
                if (!var9) {
                    _fun49988_ip = 206;
                    continue _fun49988
                }
            case 141:
                var9 = var8.features;
                var8 = var9.has;
                var3 = _closure1_slot5;
                var3 = var3.COMMUNITY;
                var3 = var8.bind(var9)(var3);
                var8 = !var3;
                var3 = !var8;
                if (var8) {
                    _fun49988_ip = 203;
                    continue _fun49988
                }
            case 176:
                var7 = !var7;
                if (!var7) {
                    _fun49988_ip = 185;
                    continue _fun49988
                }
            case 182:
                var7 = !var4;
            case 185:
                var4 = !var7;
                if (var7) {
                    _fun49988_ip = 200;
                    continue _fun49988
                }
            case 191:
                if (!var5) {
                    _fun49988_ip = 197;
                    continue _fun49988
                }
            case 194:
                var5 = var6;
            case 197:
                var4 = var5;
            case 200:
                var3 = var4;
            case 203:
                var2 = var3;
            case 206:
                var1 = var2;
            case 209:
                var0 = var1;
            case 212:
                return var0;
        }
    };
    var _closure1_slot8 = var7;
    var6 = function arg0() {
        _fun49989: for (var _fun49989_ip = 0;;) switch (_fun49989_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.guild;
                var4 = var0.features;
                var2 = var4.has;
                var1 = _closure1_slot5;
                var1 = var1.CREATOR_MONETIZABLE_DISABLED;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun49989_ip = 196;
                    continue _fun49989
                }
            case 43:
                var2 = _closure1_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                if (var1) {
                    _fun49989_ip = 184;
                    continue _fun49989
                }
            case 60:
                var2 = var3.guild;
                var6 = var3.isOwner;
                var1 = var3.isUserInCreatorMonetizationEligibleCountry;
                var5 = var3.isMonetizationWaitlistEnabledForGuild;
                var4 = var3.isGuildEligibleForRoleSubscriptions;
                var3 = var3.isExpeditedMonetizationOnboardingGuild;
                if (!var6) {
                    _fun49989_ip = 116;
                    continue _fun49989
                }
            case 98:
                if (var1) {
                    _fun49989_ip = 116;
                    continue _fun49989
                }
            case 101:
                if (!var5) {
                    _fun49989_ip = 116;
                    continue _fun49989
                }
            case 104:
                var1 = _closure1_slot7;
                var1 = var1.WAITLIST_ONLY;
                _fun49989_ip = 182;
                continue _fun49989;
            case 116:
                if (!var6) {
                    _fun49989_ip = 169;
                    continue _fun49989
                }
            case 119:
                if (!var5) {
                    _fun49989_ip = 169;
                    continue _fun49989
                }
            case 122:
                if (var4) {
                    _fun49989_ip = 128;
                    continue _fun49989
                }
            case 125:
                if (!var3) {
                    _fun49989_ip = 169;
                    continue _fun49989
                }
            case 128:
                var4 = var2.features;
                var3 = var4.has;
                var2 = _closure1_slot5;
                var2 = var2.COMMUNITY;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun49989_ip = 169;
                    continue _fun49989
                }
            case 157:
                var2 = _closure1_slot7;
                var2 = var2.NEEDS_COMMUNITY;
                _fun49989_ip = 179;
                continue _fun49989;
            case 169:
                var3 = _closure1_slot7;
                var2 = var3.NONE;
            case 179:
                var1 = var2;
            case 182:
                return var1;
            case 184:
                var1 = _closure1_slot7;
                var1 = var1.VISIBLE;
                return var1;
            case 196:
                var0 = _closure1_slot7;
                var0 = var0.NONE;
                return var0;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function arg0() {
        _fun49990: for (var _fun49990_ip = 0;;) switch (_fun49990_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 4;
                var0 = var3[var0];
                var3 = undefined;
                var6 = var2.bind(var3)(var0);
                var4 = var6.useGuildEligibleForRoleSubscriptions;
                var0 = null;
                var7 = var0 == var11;
                var2 = undefined;
                if (var7) {
                    _fun49990_ip = 56;
                    continue _fun49990
                }
            case 51:
                var2 = var11.id;
            case 56:
                var8 = var4.bind(var6)(var2);
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var6 = var4[var2];
                var9 = var7.bind(var3)(var6);
                var6 = var9.useIsExpeditedOnboardingGuild;
                var6 = var6.bind(var9)(var11);
                var4 = var4[var2];
                var9 = var7.bind(var3)(var4);
                var7 = var9.useIsMonetizationWaitlistEnabledForGuild;
                var10 = var0 == var11;
                var4 = undefined;
                if (var10) {
                    _fun49990_ip = 121;
                    continue _fun49990
                }
            case 116:
                var4 = var11.id;
            case 121:
                var7 = var7.bind(var9)(var4);
                var4 = _closure1_slot11;
                var9 = var4.bind(var3)(var11);
                var4 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 6;
                var10 = var12[var10];
                var14 = var4.bind(var3)(var10);
                var13 = var14.useStateFromStores;
                var15 = _closure1_slot4;
                var10 = new Array(1);
                var10[0] = var15;
                var5 = function() { // Environment: var5
                    _fun49991: for (var _fun49991_ip = 0;;) switch (_fun49991_ip) {
                        case 0:
                            var1 = _closure1_slot4;
                            var0 = var1.getCurrentUser;
                            var4 = var0.bind(var1)();
                            var3 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun49991_ip = 48;
                                continue _fun49991
                            }
                        case 32:
                            var3 = _closure1_slot2;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2, var4);
                        case 48:
                            return var0;
                    }
                };
                var10 = var13.bind(var14)(var10, var5);
                var2 = var12[var2];
                var5 = var4.bind(var3)(var2);
                var2 = var5.useIsUserInCreatorMonetizationEligibleCountry;
                var5 = var2.bind(var5)();
                var2 = 7;
                var2 = var12[var2];
                var12 = var4.bind(var3)(var2);
                var4 = var12.useShouldRestrictUpdatingCreatorMonetizationSettings;
                var13 = var0 == var11;
                var2 = undefined;
                if (var13) {
                    _fun49990_ip = 234;
                    continue _fun49990
                }
            case 229:
                var2 = var11.id;
            case 234:
                var2 = var4.bind(var12)(var2);
                var4 = var2.shouldRestrictUpdatingCreatorMonetizationSettings;
                if (!(var0 != var11)) {
                    _fun49990_ip = 301;
                    continue _fun49990
                }
            case 249:
                var2 = _closure1_slot9;
                var0 = {};
                var0.guild = var11;
                var0.isOwner = var10;
                var0.canManageGuildRoleSubscriptions = var9;
                var0.isGuildEligibleForRoleSubscriptions = var8;
                var0.isMonetizationWaitlistEnabledForGuild = var7;
                var0.isExpeditedMonetizationOnboardingGuild = var6;
                var0.isUserInCreatorMonetizationEligibleCountry = var5;
                var0.shouldRestrictUpdatingRoleSubscriptionSettings = var4;
                var0 = var2.bind(var3)(var0);
                _fun49990_ip = 311;
                continue _fun49990;
            case 301:
                var1 = _closure1_slot7;
                var0 = var1.NONE;
            case 311:
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot12;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot11 = var3;
    var1 = function arg0() {
        _fun49994: for (var _fun49994_ip = 0;;) switch (_fun49994_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun49994_ip = 41;
                    continue _fun49994
                }
            case 12:
                var3 = _closure1_slot3;
                var2 = var3.can;
                var1 = _closure1_slot6;
                var1 = var1.ADMINISTRATOR;
                var0 = var2.bind(var3)(var1, var4);
            case 41:
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var15 = 0;
    var8 = var11[var15];
    var0 = undefined;
    var8 = var10.bind(var0)(var8);
    var8 = var8.isGuildOwner;
    var _closure1_slot2 = var8;
    var14 = 1;
    var8 = var11[var14];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var13 = 2;
    var8 = var11[var13];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var12 = 3;
    var8 = var11[var12];
    var8 = var10.bind(var0)(var8);
    var9 = var8.GuildFeatures;
    var _closure1_slot5 = var9;
    var8 = var8.Permissions;
    var _closure1_slot6 = var8;
    var8 = {};
    var8.NONE = var15;
    var9 = 'NONE';
    var8[var15] = var9;
    var8.WAITLIST_ONLY = var14;
    var9 = 'WAITLIST_ONLY';
    var8[var14] = var9;
    var8.NEEDS_COMMUNITY = var13;
    var9 = 'NEEDS_COMMUNITY';
    var8[var13] = var9;
    var8.VISIBLE = var12;
    var9 = 'VISIBLE';
    var8[var12] = var9;
    var _closure1_slot7 = var8;
    var9 = 8;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.GuildRoleSubscriptionSettingsVisibility = var8;
    var2.canSeeGuildRoleSubscriptionSettingsContent = var7;
    var2.computeGuildRoleSubscriptionSettingsVisibility = var6;
    var6 = function arg0() {
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var0 = _closure1_slot7;
        var0 = var0.NONE;
        var0 = var1 !== var0;
        return var0;
    };
    var2.canSeeGuildRoleSubscriptionSettings = var6;
    var2.useGuildRoleSubscriptionSettingsVisibility = var5;
    var5 = function arg0() {
        _fun49996: for (var _fun49996_ip = 0;;) switch (_fun49996_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun49996_ip = 230;
                    continue _fun49996
                }
            case 12:
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var6 = var0.bind(var1)();
                var2 = _closure1_slot9;
                var1 = {};
                var1.guild = var4;
                var5 = _closure1_slot2;
                var0 = undefined;
                var5 = var5.bind(var0)(var4, var6);
                var1.isOwner = var5;
                var5 = _closure1_slot12;
                var5 = var5.bind(var0)(var4);
                var1.canManageGuildRoleSubscriptions = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 4;
                var5 = var7[var5];
                var9 = var6.bind(var0)(var5);
                var8 = var9.isGuildEligibleForRoleSubscriptions;
                var5 = var4.id;
                var5 = var8.bind(var9)(var5);
                var1.isGuildEligibleForRoleSubscriptions = var5;
                var5 = 5;
                var8 = var7[var5];
                var10 = var6.bind(var0)(var8);
                var9 = var10.isMonetizationWaitlistEnabledForGuild;
                var8 = var4.id;
                var8 = var9.bind(var10)(var8);
                var1.isMonetizationWaitlistEnabledForGuild = var8;
                var8 = var7[var5];
                var9 = var6.bind(var0)(var8);
                var8 = var9.isExpeditedMonetizationOnboardingGuild;
                var8 = var8.bind(var9)(var4);
                var1.isExpeditedMonetizationOnboardingGuild = var8;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.isUserInCreatorMonetizationEligibleCountry;
                var5 = var5.bind(var6)();
                var1.isUserInCreatorMonetizationEligibleCountry = var5;
                var5 = var4.features;
                var4 = var5.has;
                var3 = _closure1_slot5;
                var3 = var3.CREATOR_MONETIZABLE_RESTRICTED;
                var3 = var4.bind(var5)(var3);
                var1.shouldRestrictUpdatingRoleSubscriptionSettings = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 230:
                var0 = _closure1_slot7;
                var0 = var0.NONE;
                return var0;
        }
    };
    var2.getGuildRoleSubscriptionSettingsVisibility = var5;
    var4 = function arg0() {
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var0 = _closure1_slot7;
        var0 = var0.NONE;
        var0 = var1 !== var0;
        return var0;
    };
    var2.useCanSeeGuildRoleSubscriptionSettings = var4;
    var2.useCanManageGuildRoleSubscriptions = var3;
    var2.canManageGuildRoleSubscriptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1416, 3091, 1621, 660, 5633, 5636, 566, 5622, 2]);