// modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var _closure1_slot4 = var6;
    var3 = var3.SubscriptionPlanInfo;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var3.AnalyticsObjectTypes;
    var8 = var3.AnalyticsPages;
    var7 = var3.AnalyticsSections;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = {};
    var8 = var8.USER_SETTINGS;
    var3.page = var8;
    var7 = var7.SETTINGS_PREMIUM;
    var3.section = var7;
    var6 = var6.BUY;
    var3.objectType = var6;
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun110473: for (var _fun110473_ip = 0;;) switch (_fun110473_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.markAsDismissed;
                var _closure2_slot0 = var11;
                var5 = var0.userDiscountOffer;
                var _closure2_slot1 = var5;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var4 = undefined;
                var3 = var6.bind(var4)(var0);
                var0 = 6;
                var0 = var8[var0];
                var0 = var6.bind(var4)(var0);
                var0 = var0.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET;
                var0 = var3.bind(var4)(var0);
                var12 = var0.analyticsLocations;
                var _closure2_slot2 = var12;
                var9 = _closure1_slot3;
                var7 = var9.useMemo;
                var3 = new Array(1);
                var3[0] = var5;
                var0 = function() { // Environment: var2
                    _fun110474: for (var _fun110474_ip = 0;;) switch (_fun110474_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = var0.discount;
                            var1 = var0.plan_ids;
                            var0 = 0;
                            var3 = var1[var0];
                            var1 = null;
                            var0 = var1 != var3;
                            var2 = null;
                            if (!var0) {
                                _fun110474_ip = 47;
                                continue _fun110474
                            }
                        case 36:
                            var0 = _closure1_slot5;
                            var2 = var0[var3];
                        case 47:
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun110474_ip = 62;
                                continue _fun110474
                            }
                        case 56:
                            var0 = var2.premiumType;
                        case 62:
                            if (!(var1 == var0)) {
                                _fun110474_ip = 79;
                                continue _fun110474
                            }
                        case 66:
                            var1 = _closure1_slot4;
                            var0 = var1.TIER_2;
                        case 79:
                            return var0;
                    }
                };
                var10 = var7.bind(var9)(var0, var3);
                var _closure2_slot3 = var10;
                var7 = var9.useEffect;
                var3 = function() { // Environment: var2
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var2 = var4[var0];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot6;
                    var5 = var2.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED;
                    var2 = {};
                    var8 = _closure2_slot2;
                    var2.location = var8;
                    var3 = _closure2_slot1;
                    var8 = var3.id;
                    var2.discount_offer_id = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = _closure1_slot0;
                    var1 = 8;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.acknowledgeUserOffer;
                    var1 = var1.bind(var2)(var0, var3);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var7.bind(var9)(var3, var0);
                var7 = var9.useCallback;
                var3 = new Array(3);
                var3[0] = var12;
                var3[1] = var11;
                var3[2] = var5;
                var0 = function() { // Environment: var2
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.track;
                    var2 = _closure1_slot6;
                    var4 = var2.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED;
                    var3 = {};
                    var7 = _closure2_slot2;
                    var3.location = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var3.discount_offer_id = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot7;
                    var1 = var1.USER_DISMISS;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var7.bind(var9)(var0, var3);
                var7 = var9.useCallback;
                var3 = new Array(4);
                var3[0] = var12;
                var3[1] = var11;
                var3[2] = var5;
                var3[3] = var10;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 7;
                    var1 = var6[var0];
                    var0 = undefined;
                    var9 = var2.bind(var0)(var1);
                    var8 = var9.track;
                    var1 = _closure1_slot6;
                    var7 = var1.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_CTA_CLICKED;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1.location = var4;
                    var10 = _closure2_slot1;
                    var10 = var10.id;
                    var1.discount_offer_id = var10;
                    var1 = var8.bind(var9)(var7, var1);
                    var7 = _closure2_slot0;
                    var1 = _closure1_slot7;
                    var1 = var1.TAKE_ACTION;
                    var1 = var7.bind(var0)(var1);
                    var1 = 9;
                    var1 = var6[var1];
                    var9 = var2.bind(var0)(var1);
                    var8 = var9.pushLazy;
                    var7 = _closure1_slot0;
                    var1 = 11;
                    var1 = var6[var1];
                    var10 = var7.bind(var0)(var1);
                    var1 = 10;
                    var7 = var6[var1];
                    var1 = var6.paths;
                    var7 = var10.bind(var0)(var7, var1);
                    var1 = {};
                    var1.analyticsLocations = var4;
                    var1 = var8.bind(var9)(var7, var1);
                    var1 = 12;
                    var1 = var6[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var5 = _closure1_slot9;
                    var1.analyticsLocation = var5;
                    var1.analyticsLocations = var4;
                    var3 = _closure2_slot3;
                    var1.premiumType = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var7.bind(var9)(var2, var3);
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = 13;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var9 = true;
                var1.startExpanded = var9;
                var1.onDismiss = var0;
                var0 = 14;
                var0 = var8[var0];
                var6 = var6.bind(var4)(var0);
                var0 = {};
                var0.discountOffer = var5;
                var0.onConfirm = var7;
                var0 = var3.bind(var4)(var6, var0);
                var1.children = var0;
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                if (var6) {
                    _fun110473_ip = 301;
                    continue _fun110473
                }
            case 296:
                var0 = var5.id;
            case 301:
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1615, 660, 1369, 33, 5687, 5540, 795, 6620, 4524, 7007, 1307, 7013, 4893, 14161, 2]);