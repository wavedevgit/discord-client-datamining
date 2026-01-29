// modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var4 = function(arg0) { // Original name: isRestrictedFromShowingGuildPurchaseEntryPoints, environment: var1
        _fun24496: for (var _fun24496_ip = 0;;) switch (_fun24496_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun24496_ip = 35;
                    continue _fun24496
                }
            case 12:
                var2 = var3.includes;
                var1 = _closure1_slot3;
                var1 = var1.NEW_PURCHASES_DISABLED;
                var0 = var2.bind(var3)(var1);
            case 35:
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var3 = function(arg0) { // Original name: isRestrictedFromUpdatingCreatorMonetizationSettings, environment: var1
        _fun24497: for (var _fun24497_ip = 0;;) switch (_fun24497_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun24497_ip = 35;
                    continue _fun24497
                }
            case 12:
                var2 = var3.includes;
                var1 = _closure1_slot3;
                var1 = var1.SETTINGS_READ_ONLY;
                var0 = var2.bind(var3)(var1);
            case 35:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var5 = 0;
    var9 = var7[var5];
    var0 = undefined;
    var9 = var8.bind(var0)(var9);
    var _closure1_slot0 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.FetchState;
    var _closure1_slot1 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.CreatorMonetizationRestrictions;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isRestrictedFromShowingGuildPurchaseEntryPoints = var4;
    var4 = function(arg0) { // Original name: shouldHideGuildPurchaseEntryPoints, environment: var1
        _fun24498: for (var _fun24498_ip = 0;;) switch (_fun24498_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun24498_ip = 126;
                    continue _fun24498
                }
            case 9:
                var3 = _closure1_slot0;
                var2 = var3.getMonetizationRestrictionsFetchState;
                var5 = var2.bind(var3)(var6);
                var2 = var3.getMonetizationRestrictions;
                var3 = var2.bind(var3)(var6);
                var4 = _closure1_slot2;
                var2 = var4.getGuild;
                var4 = var2.bind(var4)(var6);
                var2 = _closure1_slot1;
                var2 = var2.FETCHED;
                if (!(var5 !== var2)) {
                    _fun24498_ip = 113;
                    continue _fun24498
                }
            case 66:
                var5 = var0 == var4;
                var2 = undefined;
                if (var5) {
                    _fun24498_ip = 101;
                    continue _fun24498
                }
            case 75:
                var6 = var4.features;
                var5 = var6.has;
                var4 = _closure1_slot4;
                var4 = var4.CREATOR_MONETIZABLE_RESTRICTED;
                var2 = var5.bind(var6)(var4);
            case 101:
                var0 = var0 == var2;
                if (var0) {
                    _fun24498_ip = 111;
                    continue _fun24498
                }
            case 108:
                var0 = var2;
            case 111:
                _fun24498_ip = 124;
                continue _fun24498;
            case 113:
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 124:
                return var0;
            case 126:
                var0 = false;
                return var0;
        }
    };
    var2.shouldHideGuildPurchaseEntryPoints = var4;
    var2.isRestrictedFromUpdatingCreatorMonetizationSettings = var3;
    var3 = function(arg0) { // Original name: shouldRestrictUpdatingCreatorMonetizationSettings, environment: var1
        _fun24499: for (var _fun24499_ip = 0;;) switch (_fun24499_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun24499_ip = 126;
                    continue _fun24499
                }
            case 9:
                var3 = _closure1_slot0;
                var2 = var3.getMonetizationRestrictionsFetchState;
                var5 = var2.bind(var3)(var6);
                var2 = var3.getMonetizationRestrictions;
                var3 = var2.bind(var3)(var6);
                var4 = _closure1_slot2;
                var2 = var4.getGuild;
                var4 = var2.bind(var4)(var6);
                var2 = _closure1_slot1;
                var2 = var2.FETCHED;
                if (!(var5 !== var2)) {
                    _fun24499_ip = 113;
                    continue _fun24499
                }
            case 66:
                var5 = var0 == var4;
                var2 = undefined;
                if (var5) {
                    _fun24499_ip = 101;
                    continue _fun24499
                }
            case 75:
                var6 = var4.features;
                var5 = var6.has;
                var4 = _closure1_slot4;
                var4 = var4.CREATOR_MONETIZABLE_RESTRICTED;
                var2 = var5.bind(var6)(var4);
            case 101:
                var0 = var0 == var2;
                if (var0) {
                    _fun24499_ip = 111;
                    continue _fun24499
                }
            case 108:
                var0 = var2;
            case 111:
                _fun24499_ip = 124;
                continue _fun24499;
            case 113:
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 124:
                return var0;
            case 126:
                var0 = false;
                return var0;
        }
    };
    var2.shouldRestrictUpdatingCreatorMonetizationSettings = var3;
    var1 = function(arg0) { // Original name: isRestrictedFromMonetizationReapplication, environment: var1
        _fun24500: for (var _fun24500_ip = 0;;) switch (_fun24500_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun24500_ip = 35;
                    continue _fun24500
                }
            case 12:
                var2 = var3.includes;
                var1 = _closure1_slot3;
                var1 = var1.REAPPLICATION_DISABLED;
                var0 = var2.bind(var3)(var1);
            case 35:
                return var0;
        }
    };
    var2.isRestrictedFromMonetizationReapplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3044, 1410, 3045, 660, 2]);