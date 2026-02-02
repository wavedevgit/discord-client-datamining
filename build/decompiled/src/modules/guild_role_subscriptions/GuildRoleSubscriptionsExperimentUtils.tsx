// modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx
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
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = var6;
    var6 = var3.GuildFeatures;
    var7 = var6.ROLE_SUBSCRIPTIONS_ENABLED;
    var3 = new Array(3);
    var3[0] = var7;
    var7 = var6.CREATOR_MONETIZABLE;
    var3[1] = var7;
    var6 = var6.CREATOR_MONETIZABLE_PROVISIONAL;
    var3[2] = var6;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = true;
        return var0;
    };
    var2.useGuildEligibleForRoleSubscriptions = var3;
    var3 = function() {
        var0 = true;
        return var0;
    };
    var2.isGuildEligibleForRoleSubscriptions = var3;
    var3 = function arg0() {
        _fun49834: for (var _fun49834_ip = 0;;) switch (_fun49834_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.GuildRoleSubscriptionMaxTiersExperiment;
                var1 = var2.useExperiment;
                var0 = {};
                var5 = null;
                if (!(var5 == var3)) {
                    _fun49834_ip = 52;
                    continue _fun49834
                }
            case 48:
                var3 = _closure1_slot2;
            case 52:
                var0.guildId = var3;
                var3 = '504714_7';
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.useRoleSubscriptionMaxTiersExperiment = var3;
    var3 = function(arg0) { // Environment: var1
        _fun49835: for (var _fun49835_ip = 0;;) switch (_fun49835_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun49835_ip = 41;
                    continue _fun49835
                }
            case 18:
                var3 = _closure1_slot3;
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var2 = var0.features;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 41:
                return var0;
        }
    };
    var2.hasEnabledMonetization = var3;
    var3 = function arg0() {
        _fun49837: for (var _fun49837_ip = 0;;) switch (_fun49837_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var6 = var0.GuildRoleSubscriptionsMobileTeamSetupExperiment;
                var5 = var6.useExperiment;
                var2 = {};
                var7 = null;
                var8 = var7 == var3;
                var0 = undefined;
                if (var8) {
                    _fun49837_ip = 58;
                    continue _fun49837
                }
            case 53:
                var0 = var3.id;
            case 58:
                if (!(var7 == var0)) {
                    _fun49837_ip = 66;
                    continue _fun49837
                }
            case 62:
                var0 = _closure1_slot2;
            case 66:
                var2.guildId = var0;
                var0 = '504714_8';
                var2.location = var0;
                var0 = {};
                var7 = true;
                var0.autoTrackExposure = var7;
                var0 = var5.bind(var6)(var2, var0);
                var0 = var0.enabled;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useIsExpeditedOnboardingGuild;
                var1 = var1.bind(var2)(var3);
                if (!var0) {
                    _fun49837_ip = 137;
                    continue _fun49837
                }
            case 134:
                var0 = var1;
            case 137:
                return var0;
        }
    };
    var2.useGuildEligibleForRoleSubscriptionsMobileTeamSetup = var3;
    var3 = function arg0() {
        _fun49838: for (var _fun49838_ip = 0;;) switch (_fun49838_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.GuildRoleSubscriptionsTierTemplatesExperiment;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var5 = null;
                if (!(var5 == var0)) {
                    _fun49838_ip = 52;
                    continue _fun49838
                }
            case 48:
                var0 = _closure1_slot2;
            case 52:
                var1.guildId = var0;
                var0 = '504714_9';
                var1.location = var0;
                var0 = {};
                var4 = false;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.isGuildEligibleForTierTemplates = var3;
    var3 = function arg0() {
        _fun49839: for (var _fun49839_ip = 0;;) switch (_fun49839_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.GuildRoleSubscriptionsTierTemplatesExperiment;
                var2 = var3.useExperiment;
                var1 = {};
                var5 = null;
                if (!(var5 == var0)) {
                    _fun49839_ip = 52;
                    continue _fun49839
                }
            case 48:
                var0 = _closure1_slot2;
            case 52:
                var1.guildId = var0;
                var0 = '504714_10';
                var1.location = var0;
                var0 = {};
                var4 = false;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useGuildEligibleForTierTemplates = var3;
    var3 = function arg0() {
        _fun49840: for (var _fun49840_ip = 0;;) switch (_fun49840_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.GuildRoleSubscriptionsTierTemplatesExperiment;
                var2 = var3.useExperiment;
                var1 = {};
                var5 = null;
                if (!(var5 == var0)) {
                    _fun49840_ip = 52;
                    continue _fun49840
                }
            case 48:
                var0 = _closure1_slot2;
            case 52:
                var1.guildId = var0;
                var0 = '504714_11';
                var1.location = var0;
                var0 = {};
                var4 = false;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.showCreatorPortalLink;
                return var0;
        }
    };
    var2.useShowCreatorPortalLinkForTierTemplates = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.GuildRoleSubscriptionsTierTemplatesUserExperiment;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = '504714_12';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.isUserEligibleForTierTemplates = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.GuildRoleSubscriptionsTierTemplatesUserExperiment;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = '504714_13';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useUserEligibleForTierTemplates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5598, 5600, 2]);