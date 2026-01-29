// modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot9 = var3;
    var3 = function(arg0) { // Original name: useCreatorMonetizationRestrictions, environment: var1
        _fun49583: for (var _fun49583_ip = 0;;) switch (_fun49583_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 4;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var _closure2_slot1 = var0;
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var0;
                var0 = function() { // Environment: var1
                    _fun49584: for (var _fun49584_ip = 0;;) switch (_fun49584_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun49584_ip = 49;
                                continue _fun49584
                            }
                        case 16:
                            var1 = _closure2_slot0;
                            var3 = var1.features;
                            var2 = var3.has;
                            var1 = _closure1_slot9;
                            var1 = var1.CREATOR_MONETIZABLE_RESTRICTED;
                            var0 = var2.bind(var3)(var1);
                        case 49:
                            if (!var0) {
                                _fun49584_ip = 93;
                                continue _fun49584
                            }
                        case 52:
                            var5 = _closure1_slot5;
                            var3 = var5.getMonetizationRestrictionsFetchState;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var5)(var2);
                            var1 = _closure1_slot6;
                            var1 = var1.NOT_FETCHED;
                            var0 = var2 === var1;
                        case 93:
                            if (!var0) {
                                _fun49584_ip = 153;
                                continue _fun49584
                            }
                        case 96:
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.fetchMonetizationRestrictions;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = {};
                            var4 = _closure2_slot1;
                            var0.signal = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 153:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0, var3);
                var0 = null;
                var3 = var0 == var2;
                var0 = undefined;
                if (var3) {
                    _fun49583_ip = 90;
                    continue _fun49583
                }
            case 85:
                var0 = var2.id;
            case 90:
                var _closure2_slot2 = var0;
                var0 = {};
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 6;
                var7 = var6[var2];
                var10 = var3.bind(var4)(var7);
                var9 = var10.useStateFromStoresArray;
                var5 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = function() { // Environment: var1
                    _fun49585: for (var _fun49585_ip = 0;;) switch (_fun49585_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getMonetizationRestrictions;
                            var5 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var5)) {
                                _fun49585_ip = 32;
                                continue _fun49585
                            }
                        case 26:
                            var0 = _closure1_slot8;
                            _fun49585_ip = 36;
                            continue _fun49585;
                        case 32:
                            var0 = _closure2_slot2;
                        case 36:
                            var0 = var2.bind(var3)(var0);
                            if (!(var1 == var0)) {
                                _fun49585_ip = 49;
                                continue _fun49585
                            }
                        case 45:
                            var0 = new Array(0);
                        case 49:
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var8, var7);
                var0.restrictions = var7;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    _fun49586: for (var _fun49586_ip = 0;;) switch (_fun49586_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getMonetizationRestrictionsFetchState;
                            var5 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var5)) {
                                _fun49586_ip = 32;
                                continue _fun49586
                            }
                        case 26:
                            var1 = _closure1_slot8;
                            _fun49586_ip = 36;
                            continue _fun49586;
                        case 32:
                            var1 = _closure2_slot2;
                        case 36:
                            var1 = var2.bind(var3)(var1);
                            var0 = _closure1_slot6;
                            var0 = var0.FETCHING;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var0.restrictionsLoading = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun49587: for (var _fun49587_ip = 0;;) switch (_fun49587_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 6;
                var1 = var3[var1];
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var3 = var4.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var3.bind(var4)(var2, var0, var1);
                var0 = _closure1_slot10;
                var0 = var0.bind(var5)(var7);
                var9 = var0.restrictions;
                var1 = var0.restrictionsLoading;
                var0 = {};
                var4 = null;
                var3 = var4 == var7;
                var2 = undefined;
                if (var3) {
                    _fun49587_ip = 131;
                    continue _fun49587
                }
            case 105:
                var10 = var7.features;
                var8 = var10.has;
                var3 = _closure1_slot9;
                var3 = var3.CREATOR_MONETIZABLE;
                var2 = var8.bind(var10)(var3);
            case 131:
                if (var2) {
                    _fun49587_ip = 172;
                    continue _fun49587
                }
            case 134:
                var8 = var4 == var7;
                var3 = undefined;
                if (var8) {
                    _fun49587_ip = 169;
                    continue _fun49587
                }
            case 143:
                var11 = var7.features;
                var10 = var11.has;
                var8 = _closure1_slot9;
                var8 = var8.CREATOR_MONETIZABLE_PROVISIONAL;
                var3 = var10.bind(var11)(var8);
            case 169:
                var2 = var3;
            case 172:
                if (var2) {
                    _fun49587_ip = 213;
                    continue _fun49587
                }
            case 175:
                var8 = var4 == var7;
                var3 = undefined;
                if (var8) {
                    _fun49587_ip = 210;
                    continue _fun49587
                }
            case 184:
                var11 = var7.features;
                var10 = var11.has;
                var8 = _closure1_slot9;
                var8 = var8.SOCIAL_LAYER_STOREFRONT;
                var3 = var10.bind(var11)(var8);
            case 210:
                var2 = var3;
            case 213:
                var2 = !var2;
                if (var2) {
                    _fun49587_ip = 306;
                    continue _fun49587
                }
            case 219:
                if (var1) {
                    _fun49587_ip = 255;
                    continue _fun49587
                }
            case 222:
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var3 = 7;
                var3 = var10[var3];
                var8 = var8.bind(var5)(var3);
                var3 = var8.isRestrictedFromShowingGuildPurchaseEntryPoints;
                var3 = var3.bind(var8)(var9);
                _fun49587_ip = 303;
                continue _fun49587;
            case 255:
                var8 = var4 == var7;
                var5 = undefined;
                if (var8) {
                    _fun49587_ip = 290;
                    continue _fun49587
                }
            case 264:
                var8 = var7.features;
                var7 = var8.has;
                var6 = _closure1_slot9;
                var6 = var6.CREATOR_MONETIZABLE_RESTRICTED;
                var5 = var7.bind(var8)(var6);
            case 290:
                var4 = var4 == var5;
                if (var4) {
                    _fun49587_ip = 300;
                    continue _fun49587
                }
            case 297:
                var4 = var5;
            case 300:
                var3 = var4;
            case 303:
                var2 = var3;
            case 306:
                var0.shouldHideGuildPurchaseEntryPoints = var2;
                var0.restrictionsLoading = var1;
                return var0;
        }
    };
    var2.useShouldHideGuildPurchaseEntryPoints = var3;
    var3 = function(arg0) { // Environment: var1
        _fun49589: for (var _fun49589_ip = 0;;) switch (_fun49589_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 6;
                var1 = var4[var1];
                var5 = undefined;
                var6 = var2.bind(var5)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var6)(var2, var0, var1);
                var0 = _closure1_slot10;
                var0 = var0.bind(var5)(var4);
                var6 = var0.restrictions;
                var1 = var0.restrictionsLoading;
                if (var1) {
                    _fun49589_ip = 128;
                    continue _fun49589
                }
            case 95:
                var2 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 7;
                var0 = var7[var0];
                var2 = var2.bind(var5)(var0);
                var0 = var2.isRestrictedFromUpdatingCreatorMonetizationSettings;
                var2 = var0.bind(var2)(var6);
                _fun49589_ip = 178;
                continue _fun49589;
            case 128:
                var0 = null;
                var6 = var0 == var4;
                var5 = undefined;
                if (var6) {
                    _fun49589_ip = 165;
                    continue _fun49589
                }
            case 139:
                var8 = var4.features;
                var7 = var8.has;
                var6 = _closure1_slot9;
                var6 = var6.CREATOR_MONETIZABLE_RESTRICTED;
                var5 = var7.bind(var8)(var6);
            case 165:
                var0 = var0 == var5;
                if (var0) {
                    _fun49589_ip = 175;
                    continue _fun49589
                }
            case 172:
                var0 = var5;
            case 175:
                var2 = var0;
            case 178:
                var0 = null;
                var0 = var0 == var4;
                if (var0) {
                    _fun49589_ip = 216;
                    continue _fun49589
                }
            case 187:
                var5 = var4.features;
                var4 = var5.has;
                var3 = _closure1_slot9;
                var3 = var3.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING;
                var3 = var4.bind(var5)(var3);
                var0 = !var3;
            case 216:
                var4 = !var0;
                var0 = {};
                var3 = var2;
                if (var3) {
                    _fun49589_ip = 230;
                    continue _fun49589
                }
            case 227:
                var3 = var4;
            case 230:
                var0.shouldRestrictUpdatingCreatorMonetizationSettings = var3;
                var2 = !var2;
                var0.allowSelfRemoveMonetization = var2;
                var0.restrictionsLoading = var1;
                return var0;
        }
    };
    var2.useShouldRestrictUpdatingCreatorMonetizationSettings = var3;
    var1 = function(arg0) { // Environment: var1
        var9 = arg0;
        var _closure2_slot0 = var9;
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var2 = 6;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var5.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = new Array(1);
        var2[0] = var9;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var7.bind(var8)(var4, var1, var2);
        var0 = _closure1_slot10;
        var0 = var0.bind(var3)(var1);
        var4 = var0.restrictions;
        var1 = var0.restrictionsLoading;
        var0 = {};
        var2 = 7;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.isRestrictedFromMonetizationReapplication;
        var2 = var2.bind(var3)(var4);
        var0.isMonetizationReapplicationDisabled = var2;
        var0.restrictionsLoading = var1;
        return var0;
    };
    var2.useIsMonetizationReapplicationDisabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3044, 1410, 660, 5581, 5582, 566, 3043, 2]);