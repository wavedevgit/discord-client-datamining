// modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot8 = var6;
    var3 = var3.PremiumTypes;
    var _closure1_slot9 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun79006: for (var _fun79006_ip = 0;;) switch (_fun79006_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79006_ip = 506;
                            continue _fun79006
                        }
                    case 15:
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var3 = _closure1_slot5;
                        var2 = var3.hasFetchedSubscriptions;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun79006_ip = 92;
                            continue _fun79006
                        }
                    case 49:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchSubscriptions;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 83);
                    case 81:
                        return var2;
                    case 83:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (!var3) {
                            _fun79006_ip = 92;
                            continue _fun79006
                        }
                    case 89:
                        return var2;
                    case 92:
                        var3 = _closure1_slot5;
                        var2 = var3.getPremiumTypeSubscription;
                        var4 = var2.bind(var3)();
                        _closure4_slot0 = var4;
                        var3 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var2 = 9;
                        var2 = var13[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getExternalManagementMessage;
                        var9 = var2.bind(var3)(var4);
                        var3 = _closure1_slot4;
                        var2 = var3.getCurrentUser;
                        var12 = var2.bind(var3)();
                        _closure4_slot1 = var12;
                        var11 = _closure1_slot1;
                        var2 = 10;
                        var2 = var13[var2];
                        var8 = var11.bind(var1)(var2);
                        var4 = var8.getCurrentConfig;
                        var3 = {};
                        var2 = '05efe4_1';
                        var3.location = var2;
                        var2 = {};
                        var10 = true;
                        var2.autoTrackExposure = var10;
                        var10 = 11;
                        var10 = var13[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.isPremium;
                        var10 = var10.bind(var11)(var12);
                        var10 = !var10;
                        if (var10) {
                            _fun79006_ip = 236;
                            continue _fun79006
                        }
                    case 230:
                        var11 = null;
                        var10 = var11 != var9;
                    case 236:
                        var2.disable = var10;
                        var2 = var4.bind(var8)(var3, var2);
                        var2 = var2.enabled;
                        _closure4_slot2 = var2;
                        var2 = null;
                        if (!(var2 == var9)) {
                            _fun79006_ip = 356;
                            continue _fun79006
                        }
                    case 262:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.launchPremiumPlanSelect;
                        var2 = {};
                        var8 = false;
                        var2.showCurrentPlan = var8;
                        var5 = function arg0() {
                            _fun79007: for (var _fun79007_ip = 0;;) switch (_fun79007_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = var3.numPremiumGuild;
                                    var6 = var3.premiumTier;
                                    var0 = _closure1_slot9;
                                    var5 = var0.TIER_2;
                                    var0 = 0;
                                    if (!(var6 === var5)) {
                                        _fun79007_ip = 38;
                                        continue _fun79007
                                    }
                                case 34:
                                    var0 = _closure1_slot8;
                                case 38:
                                    var0 = var2 + var0;
                                    var2 = _closure4_slot0;
                                    var8 = null;
                                    var2 = var8 != var2;
                                    var1 = 0;
                                    if (!var2) {
                                        _fun79007_ip = 141;
                                        continue _fun79007
                                    }
                                case 60:
                                    var7 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var2 = 11;
                                    var5 = var10[var2];
                                    var9 = undefined;
                                    var11 = var7.bind(var9)(var5);
                                    var7 = var11.getNumPremiumGuildSubscriptions;
                                    var5 = _closure4_slot0;
                                    var5 = var5.additionalPlans;
                                    var5 = var7.bind(var11)(var5);
                                    var7 = _closure1_slot1;
                                    var2 = var10[var2];
                                    var9 = var7.bind(var9)(var2);
                                    var7 = var9.getNumIncludedPremiumGuildSubscriptionSlots;
                                    var2 = _closure4_slot0;
                                    var2 = var2.planId;
                                    var2 = var7.bind(var9)(var2);
                                    var1 = var5 + var2;
                                case 141:
                                    var9 = var0 > var1;
                                    var1 = _closure4_slot2;
                                    var0 = var9;
                                    if (!var1) {
                                        _fun79007_ip = 332;
                                        continue _fun79007
                                    }
                                case 158:
                                    var5 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var7 = 11;
                                    var1 = var1[var7];
                                    var2 = undefined;
                                    var10 = var5.bind(var2)(var1);
                                    var5 = var10.isPremium;
                                    var1 = _closure4_slot1;
                                    var1 = var5.bind(var10)(var1);
                                    var0 = var9;
                                    if (!var1) {
                                        _fun79007_ip = 332;
                                        continue _fun79007
                                    }
                                case 204:
                                    var1 = var3.premiumTier;
                                    var1 = var8 == var1;
                                    if (var1) {
                                        _fun79007_ip = 265;
                                        continue _fun79007
                                    }
                                case 217:
                                    var10 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var5 = var5[var7];
                                    var12 = var10.bind(var2)(var5);
                                    var11 = var12.isPremiumExactly;
                                    var10 = _closure4_slot1;
                                    var5 = var3.premiumTier;
                                    var5 = var11.bind(var12)(var10, var5);
                                    if (!var5) {
                                        _fun79007_ip = 262;
                                        continue _fun79007
                                    }
                                case 259:
                                    var5 = !var9;
                                case 262:
                                    var1 = var5;
                                case 265:
                                    var1 = !var1;
                                    if (!var1) {
                                        _fun79007_ip = 329;
                                        continue _fun79007
                                    }
                                case 271:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var7];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.isPremiumAtLeast;
                                    var3 = var3.premiumTier;
                                    var7 = _closure4_slot1;
                                    var7 = var8 == var7;
                                    var2 = undefined;
                                    if (var7) {
                                        _fun79007_ip = 323;
                                        continue _fun79007
                                    }
                                case 313:
                                    var6 = _closure4_slot1;
                                    var2 = var6.premiumType;
                                case 323:
                                    var1 = var4.bind(var5)(var3, var2);
                                case 329:
                                    var0 = var1;
                                case 332:
                                    return var0;
                            }
                        };
                        var2.predicate = var5;
                        var2.analyticsLocation = var6;
                        var5 = arg1;
                        var2.analyticsLocations = var5;
                        var5 = arg2;
                        var2.onBack = var5;
                        var5 = arg3;
                        var2.onPaymentSuccess = var5;
                        var5 = arg4;
                        var2.onPaymentDismiss = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun79006_ip = 503;
                        continue _fun79006;
                    case 356:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var8 = var3.bind(var1)(var2);
                        var5 = var8.show;
                        var2 = {};
                        var13 = _closure1_slot0;
                        var10 = 6;
                        var11 = var4[var10];
                        var11 = var13.bind(var1)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var10 = var4[var10];
                        var10 = var13.bind(var1)(var10);
                        var10 = var10.t;
                        var10 = var10["8P7MX0"];
                        var10 = var11.bind(var12)(var10);
                        var2.title = var10;
                        var2.body = var9;
                        var2 = var5.bind(var8)(var2);
                        var2 = 7;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot6;
                        var3 = var2.OPEN_MODAL;
                        var2 = {};
                        var7 = _closure1_slot7;
                        var7 = var7.IOS_CANNOT_MANAGE_SUBSCRIPTION;
                        var2.type = var7;
                        var2.source = var6;
                        var2 = var4.bind(var5)(var3, var2);
                    case 503:
                        return var1;
                    case 506:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.launchGuildBoostFlowOrAlert = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1621, 3119, 660, 1623, 3937, 1234, 795, 3444, 7364, 10031, 3111, 7358, 2]);