// modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useTrackRoleSubscriptionUpsellAnalytics, environment: var1
        _fun105344: for (var _fun105344_ip = 0;;) switch (_fun105344_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var _closure2_slot0 = var11;
                var10 = var0.groupListingId;
                var _closure2_slot1 = var10;
                var8 = var0.location;
                var _closure2_slot2 = var8;
                var3 = var0.relevantSubscriptionListingIds;
                var _closure2_slot3 = var3;
                var0 = undefined;
                var _closure2_slot7 = var0;
                var _closure2_slot8 = var0;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 3;
                var4 = var13[var4];
                var6 = var12.bind(var0)(var4);
                var5 = var6.useGroupListingsFetchContext;
                var4 = 'useTrackRoleSubscriptionUpsellAnalytics';
                var9 = var5.bind(var6)(var4);
                var _closure2_slot4 = var9;
                var4 = _closure1_slot1;
                var5 = 4;
                var5 = var13[var5];
                var5 = var4.bind(var0)(var5);
                var5 = var5.bind(var0)(var10);
                var6 = var5.activeSubscription;
                var5 = null;
                var6 = var5 != var6;
                var _closure2_slot5 = var6;
                var7 = 5;
                var7 = var13[var7];
                var16 = var12.bind(var0)(var7);
                var15 = var16.useStateFromStoresArray;
                var7 = _closure1_slot4;
                var14 = new Array(1);
                var14[0] = var7;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var1
                    _fun105345: for (var _fun105345_ip = 0;;) switch (_fun105345_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105345_ip = 19;
                                continue _fun105345
                            }
                        case 13:
                            var2 = new Array(0);
                            _fun105345_ip = 23;
                            continue _fun105345;
                        case 19:
                            var2 = _closure2_slot3;
                        case 23:
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                _fun105346: for (var _fun105346_ip = 0;;) switch (_fun105346_ip) {
                                    case 0:
                                        var2 = _closure1_slot4;
                                        var1 = var2.getSubscriptionListing;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        var1 = null;
                                        var2 = var1 == var0;
                                        var1 = undefined;
                                        if (var2) {
                                            _fun105346_ip = 38;
                                            continue _fun105346
                                        }
                                    case 32:
                                        var1 = var0.published;
                                    case 38:
                                        var0 = true;
                                        var0 = var0 === var1;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var7 = var15.bind(var16)(var14, var3, var7);
                var _closure2_slot6 = var7;
                var3 = 6;
                var3 = var13[var3];
                var4 = var4.bind(var0)(var3);
                var3 = 7;
                var3 = var13[var3];
                var12 = var12.bind(var0)(var3);
                var3 = var12.getLastRouteChangeSourceLocationStack;
                var3 = var3.bind(var12)();
                if (!(var5 == var3)) {
                    _fun105344_ip = 232;
                    continue _fun105344
                }
            case 228:
                var3 = new Array(0);
            case 232:
                var3 = var4.bind(var0)(var3);
                var5 = var3.analyticsLocations;
                _closure2_slot7 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useRef;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                _closure2_slot8 = var2;
                var3 = var4.useEffect;
                var2 = new Array(7);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var9;
                var2[3] = var8;
                var2[4] = var7;
                var2[5] = var6;
                var2[6] = var5;
                var1 = function() { // Environment: var1
                    _fun105347: for (var _fun105347_ip = 0;;) switch (_fun105347_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun105347_ip = 20;
                                continue _fun105347
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var0 = var1 != var2;
                        case 20:
                            if (!var0) {
                                _fun105347_ip = 33;
                                continue _fun105347
                            }
                        case 23:
                            var2 = _closure2_slot6;
                            var1 = null;
                            var0 = var1 != var2;
                        case 33:
                            if (!var0) {
                                _fun105347_ip = 48;
                                continue _fun105347
                            }
                        case 36:
                            var1 = _closure2_slot8;
                            var1 = var1.current;
                            var0 = !var1;
                        case 48:
                            if (!var0) {
                                _fun105347_ip = 200;
                                continue _fun105347
                            }
                        case 54:
                            var1 = _closure2_slot8;
                            var0 = true;
                            var1.current = var0;
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 8;
                            var0 = var8[var0];
                            var7 = undefined;
                            var3 = var1.bind(var7)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot5;
                            var1 = var0.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED;
                            var0 = {};
                            var6 = _closure2_slot1;
                            var0.role_subscription_group_listing_id = var6;
                            var6 = _closure2_slot6;
                            var0.role_subscription_listing_ids = var6;
                            var6 = _closure2_slot5;
                            var0.is_premium_member = var6;
                            var6 = _closure2_slot7;
                            var0.location_stack = var6;
                            var6 = _closure2_slot2;
                            var0.location = var6;
                            var6 = _closure1_slot0;
                            var5 = 9;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.collectGuildAnalyticsMetadata;
                            var4 = _closure2_slot0;
                            var9 = var5.bind(var6)(var4);
                            var10 = var0;
                            var4 = copyDataProperties(var10, var9);
                            var0 = var2.bind(var3)(var1, var0);
                        case 200:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3044, 660, 10707, 13678, 566, 5687, 1220, 795, 4265, 2]);