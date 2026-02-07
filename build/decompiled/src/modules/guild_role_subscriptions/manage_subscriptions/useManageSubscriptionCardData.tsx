// modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionStatusTypes;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun85020: for (var _fun85020_ip = 0;;) switch (_fun85020_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var16 = undefined;
                var2 = var1.bind(var16)(var0);
                var0 = var2.getRoleSubscriptionPlanId;
                var0 = var0.bind(var2)(var7);
                var _closure2_slot0 = var0;
                var0 = 9;
                var2 = var8[var0];
                var9 = var1.bind(var16)(var2);
                var6 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var3 = function() { // Environment: var4
                    var2 = _closure1_slot6;
                    var1 = var2.getSubscriptionListingForPlan;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var6.bind(var9)(var5, var3);
                var _closure2_slot1 = var3;
                var5 = var8[var0];
                var9 = var1.bind(var16)(var5);
                var6 = var9.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var4
                    _fun85022: for (var _fun85022_ip = 0;;) switch (_fun85022_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun85022_ip = 43;
                                continue _fun85022
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.getSubscriptionGroupListingForSubscriptionListing;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var2 = var6.bind(var9)(var5, var2);
                var _closure2_slot2 = var2;
                var0 = var8[var0];
                var9 = var1.bind(var16)(var0);
                var6 = var9.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var4
                    _fun85023: for (var _fun85023_ip = 0;;) switch (_fun85023_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot2;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun85023_ip = 39;
                                continue _fun85023
                            }
                        case 30:
                            var3 = _closure2_slot2;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var6.bind(var9)(var5, var0);
                var _closure2_slot3 = var6;
                var9 = _closure1_slot4;
                var5 = var9.useState;
                var0 = false;
                var10 = var5.bind(var9)(var0);
                var5 = _closure1_slot3;
                var0 = 2;
                var10 = var5.bind(var16)(var10, var0);
                var0 = 0;
                var5 = var10[var0];
                var _closure2_slot4 = var5;
                var0 = 1;
                var0 = var10[var0];
                var _closure2_slot5 = var0;
                var0 = 10;
                var0 = var8[var0];
                var1 = var1.bind(var16)(var0);
                var0 = var1.useFetchSubscriptionsSettings;
                var0 = var0.bind(var1)();
                var0 = var0.fetchSubscriptionsSettings;
                var _closure2_slot6 = var0;
                var8 = var9.useEffect;
                var1 = new Array(3);
                var1[0] = var5;
                var1[1] = var6;
                var1[2] = var0;
                var0 = function() { // Environment: var4
                    _fun85024: for (var _fun85024_ip = 0;;) switch (_fun85024_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun85024_ip = 20;
                                continue _fun85024
                            }
                        case 10:
                            var3 = _closure2_slot3;
                            var2 = null;
                            var1 = var2 != var3;
                        case 20:
                            if (!var1) {
                                _fun85024_ip = 56;
                                continue _fun85024
                            }
                        case 23:
                            var4 = _closure1_slot6;
                            var3 = var4.getSubscriptionSettings;
                            var2 = _closure2_slot3;
                            var2 = var2.id;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            var1 = var2 == var3;
                        case 56:
                            if (!var1) {
                                _fun85024_ip = 79;
                                continue _fun85024
                            }
                        case 59:
                            var2 = _closure2_slot6;
                            var0 = _closure2_slot3;
                            var1 = var0.id;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var8.bind(var9)(var0, var1);
                var8 = null;
                var0 = var8 == var3;
                var1 = undefined;
                if (var0) {
                    _fun85020_ip = 617;
                    continue _fun85020
                }
            case 303:
                var0 = {};
                var0.subscription = var7;
                var0 = var0.subscription;
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var10 = 5;
                var7 = var7[var10];
                var9 = var9.bind(var16)(var7);
                var7 = var0.currentPeriodEnd;
                var11 = var9.bind(var16)(var7);
                var7 = var11.format;
                var9 = 'M/D/YY';
                var13 = var7.bind(var11)(var9);
                var7 = var0.price;
                var7 = var8 != var7;
                var11 = '';
                if (!var7) {
                    _fun85020_ip = 424;
                    continue _fun85020
                }
            case 380:
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 6;
                var7 = var14[var7];
                var15 = var8.bind(var16)(var7);
                var14 = var15.formatPrice;
                var8 = var0.price;
                var7 = var0.currency;
                var11 = var14.bind(var15)(var8, var7);
            case 424:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var8 = var8.bind(var16)(var7);
                var7 = var0.createdAt;
                var8 = var8.bind(var16)(var7);
                var7 = var8.format;
                var14 = var7.bind(var8)(var9);
                var9 = var0.status;
                var7 = _closure1_slot7;
                var8 = var7.CANCELED;
                var10 = var9 === var8;
                var9 = var0.status;
                var8 = var7.PAST_DUE;
                var7 = var0.hasActiveTrial;
                var0 = {};
                var0.memberSince = var14;
                var0.nextRenewalDate = var13;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 7;
                var14 = var17[var12];
                var14 = var13.bind(var16)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var17[var12];
                var12 = var13.bind(var16)(var12);
                var13 = var12.t;
                if (var10) {
                    _fun85020_ip = 572;
                    continue _fun85020
                }
            case 557:
                var12 = var13.CVjLcM;
                var12 = var14.bind(var15)(var12);
                _fun85020_ip = 585;
                continue _fun85020;
            case 572:
                var13 = var13.UAfot2;
                var12 = var14.bind(var15)(var13);
            case 585:
                var0.nextRenewalLabel = var12;
                var0.subscriptionPrice = var11;
                var0.isCancelled = var10;
                var8 = var9 === var8;
                var0.isPastDue = var8;
                var0.isTrial = var7;
                var1 = var0;
            case 617:
                var0 = {};
                var0.guild = var6;
                var0.expanded = var5;
                var4 = function() {
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0.handleToggleExpanded = var4;
                var0.listing = var3;
                var0.groupListing = var2;
                var0.subscriptionInfo = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 3087, 660, 3047, 4606, 1234, 10868, 566, 10866, 2]);