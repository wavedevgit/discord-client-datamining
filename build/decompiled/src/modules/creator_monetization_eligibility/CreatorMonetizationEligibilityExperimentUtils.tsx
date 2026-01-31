// modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function(arg0) { // Original name: useIsRavenOnboardingGuild, environment: var1
        var1 = null;
        var0 = arg0;
        var0 = var1 != var0;
        return var0;
    };
    var _closure1_slot4 = var6;
    var5 = function(arg0) { // Original name: isRavenOnboardingGuild, environment: var1
        var1 = null;
        var0 = arg0;
        var0 = var1 != var0;
        return var0;
    };
    var _closure1_slot5 = var5;
    var4 = function(arg0) { // Original name: useIsWhitegloveOnboardingGuild, environment: var1
        _fun49845: for (var _fun49845_ip = 0;;) switch (_fun49845_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun49845_ip = 41;
                    continue _fun49845
                }
            case 12:
                var3 = var1.features;
                var2 = var3.has;
                var1 = _closure1_slot3;
                var1 = var1.CREATOR_MONETIZABLE_WHITEGLOVE;
                var0 = var2.bind(var3)(var1);
            case 41:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var3 = function(arg0) { // Original name: isWhitegloveOnboardingGuild, environment: var1
        _fun49846: for (var _fun49846_ip = 0;;) switch (_fun49846_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun49846_ip = 41;
                    continue _fun49846
                }
            case 12:
                var3 = var1.features;
                var2 = var3.has;
                var1 = _closure1_slot3;
                var1 = var1.CREATOR_MONETIZABLE_WHITEGLOVE;
                var0 = var2.bind(var3)(var1);
            case 41:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var10 = var7.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = var10;
    var7 = var7.GuildFeatures;
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function() { // Original name: useIsUserInCreatorMonetizationEligibleCountry, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.CreatorMonetizationCountryAllowlistExperiment;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = 'e3bb71_1';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.isUserEligibleForCreatorMonetization;
        return var0;
    };
    var2.useIsUserInCreatorMonetizationEligibleCountry = var7;
    var7 = function() { // Original name: isUserInCreatorMonetizationEligibleCountry, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.CreatorMonetizationCountryAllowlistExperiment;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'e3bb71_2';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.isUserEligibleForCreatorMonetization;
        return var0;
    };
    var2.isUserInCreatorMonetizationEligibleCountry = var7;
    var2.useIsRavenOnboardingGuild = var6;
    var2.isRavenOnboardingGuild = var5;
    var2.useIsWhitegloveOnboardingGuild = var4;
    var2.isWhitegloveOnboardingGuild = var3;
    var3 = function(arg0) { // Original name: useIsExpeditedOnboardingGuild, environment: var1
        _fun49849: for (var _fun49849_ip = 0;;) switch (_fun49849_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot4;
                var0 = null;
                var5 = var0 == var3;
                var2 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun49849_ip = 28;
                    continue _fun49849
                }
            case 23:
                var0 = var3.id;
            case 28:
                var0 = var4.bind(var2)(var0);
                var1 = _closure1_slot6;
                var1 = var1.bind(var2)(var3);
                if (var0) {
                    _fun49849_ip = 48;
                    continue _fun49849
                }
            case 45:
                var0 = var1;
            case 48:
                return var0;
        }
    };
    var2.useIsExpeditedOnboardingGuild = var3;
    var3 = function(arg0) { // Original name: isExpeditedMonetizationOnboardingGuild, environment: var1
        _fun49850: for (var _fun49850_ip = 0;;) switch (_fun49850_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot5;
                var0 = null;
                var5 = var0 == var3;
                var2 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun49850_ip = 28;
                    continue _fun49850
                }
            case 23:
                var0 = var3.id;
            case 28:
                var0 = var4.bind(var2)(var0);
                if (var0) {
                    _fun49850_ip = 45;
                    continue _fun49850
                }
            case 36:
                var1 = _closure1_slot7;
                var0 = var1.bind(var2)(var3);
            case 45:
                return var0;
        }
    };
    var2.isExpeditedMonetizationOnboardingGuild = var3;
    var3 = function(arg0) { // Original name: useIsMonetizationWaitlistEnabledForGuild, environment: var1
        _fun49851: for (var _fun49851_ip = 0;;) switch (_fun49851_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.CreatorMonetizationOnboardingWaitlistExperiment;
                var2 = var3.useExperiment;
                var1 = {};
                var5 = null;
                if (!(var5 == var0)) {
                    _fun49851_ip = 52;
                    continue _fun49851
                }
            case 48:
                var0 = _closure1_slot2;
            case 52:
                var1.guildId = var0;
                var0 = 'e3bb71_9';
                var1.location = var0;
                var0 = {};
                var4 = false;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enableWaitlist;
                return var0;
        }
    };
    var2.useIsMonetizationWaitlistEnabledForGuild = var3;
    var3 = function(arg0) { // Original name: isMonetizationWaitlistEnabledForGuild, environment: var1
        _fun49852: for (var _fun49852_ip = 0;;) switch (_fun49852_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.CreatorMonetizationOnboardingWaitlistExperiment;
                var1 = var2.getCurrentConfig;
                var0 = {};
                var5 = null;
                if (!(var5 == var3)) {
                    _fun49852_ip = 52;
                    continue _fun49852
                }
            case 48:
                var3 = _closure1_slot2;
            case 52:
                var0.guildId = var3;
                var3 = 'e3bb71_10';
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var0 = var0.enableWaitlist;
                return var0;
        }
    };
    var2.isMonetizationWaitlistEnabledForGuild = var3;
    var1 = function() { // Original name: isCreatorMonetizationNagActivateEnabled, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.CreatorMonetizationNagActivateExperiment;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'e3bb71_11';
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enableCreatorMonetizationNagActivateForUser;
        return var0;
    };
    var2.isCreatorMonetizationNagActivateEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5599, 2]);