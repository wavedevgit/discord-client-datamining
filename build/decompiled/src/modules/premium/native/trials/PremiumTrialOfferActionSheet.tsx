// modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx
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
    var6 = var3.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot7 = var6;
    var3 = var3.PremiumTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/trials/PremiumTrialOfferActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun86461: for (var _fun86461_ip = 0;;) switch (_fun86461_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.fallbackPremiumType;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun86461_ip = 30;
                    continue _fun86461
                }
            case 17:
                var2 = _closure1_slot8;
                var8 = var2.TIER_2;
            case 30:
                var14 = var0.trialOfferId;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var2 = var3.bind(var4)(var0);
                var0 = 9;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.PREMIUM_TRIAL_OFFER_ACTION_SHEET;
                var0 = var2.bind(var4)(var0);
                var11 = var0.analyticsLocations;
                _closure2_slot0 = var11;
                var3 = _closure1_slot0;
                var0 = 10;
                var2 = var7[var0];
                var10 = var3.bind(var4)(var2);
                var9 = var10.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure1_slot6;
                    var1 = var2.isFetchingProducts;
                    var1 = var1.bind(var2)();
                    var0.isFetchingProducts = var1;
                    var1 = var2.getOfferIds;
                    var1 = var1.bind(var2)();
                    var0.offerIds = var1;
                    return var0;
                };
                var5 = var9.bind(var10)(var5, var2);
                var2 = var5.isFetchingProducts;
                _closure2_slot1 = var2;
                var12 = var5.offerIds;
                _closure2_slot2 = var12;
                var0 = var7[var0];
                var10 = var3.bind(var4)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.hasFetchedOffer;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var9.bind(var10)(var5, var0);
                _closure2_slot3 = var13;
                var0 = 11;
                var0 = var7[var0];
                var5 = var3.bind(var4)(var0);
                var0 = var5.usePremiumTrialOffer;
                var5 = var0.bind(var5)();
                _closure2_slot4 = var5;
                var0 = 12;
                var0 = var7[var0];
                var10 = var3.bind(var4)(var0);
                var9 = var10.useSelectedSnowflakeBoundDismissibleContent;
                var0 = 13;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var7 = var0.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
                var0 = null;
                var15 = var0 == var5;
                var3 = undefined;
                if (var15) {
                    _fun86461_ip = 310;
                    continue _fun86461
                }
            case 305:
                var3 = var5.id;
            case 310:
                if (!(var0 != var3)) {
                    _fun86461_ip = 317;
                    continue _fun86461
                }
            case 314:
                var14 = var3;
            case 317:
                var15 = var0 != var14;
                var3 = '';
                if (!var15) {
                    _fun86461_ip = 331;
                    continue _fun86461
                }
            case 328:
                var3 = var14;
            case 331:
                var9 = var9.bind(var10)(var7, var3);
                var7 = _closure1_slot3;
                var3 = 2;
                var7 = var7.bind(var4)(var9, var3);
                var3 = 0;
                var3 = var7[var3];
                var3 = 1;
                var9 = var7[var3];
                _closure2_slot5 = var9;
                var7 = _closure1_slot4;
                var10 = var7.useEffect;
                var3 = new Array(4);
                var3[0] = var5;
                var3[1] = var13;
                var3[2] = var12;
                var3[3] = var2;
                var2 = function() { // Environment: var1
                    _fun86464: for (var _fun86464_ip = 0;;) switch (_fun86464_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var0 = var0 == var2;
                            if (!var0) {
                                _fun86464_ip = 20;
                                continue _fun86464
                            }
                        case 16:
                            var0 = _closure2_slot3;
                        case 20:
                            if (!var0) {
                                _fun86464_ip = 33;
                                continue _fun86464
                            }
                        case 23:
                            var3 = _closure2_slot1;
                            var2 = false;
                            var0 = var2 === var3;
                        case 33:
                            if (!var0) {
                                _fun86464_ip = 51;
                                continue _fun86464
                            }
                        case 36:
                            var1 = _closure2_slot2;
                            var2 = var1.size;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 51:
                            if (!var0) {
                                _fun86464_ip = 118;
                                continue _fun86464
                            }
                        case 54:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 14;
                            var0 = var3[var0];
                            var1 = undefined;
                            var5 = var2.bind(var1)(var0);
                            var4 = var5.captureMessage;
                            var0 = 'PremiumTrialOfferActionSheet: Trial offer is null, hiding action sheet';
                            var0 = var4.bind(var5)(var0);
                            var0 = 15;
                            var0 = var3[var0];
                            var1 = var2.bind(var1)(var0);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var10.bind(var7)(var2, var3);
                var10 = var7.useEffect;
                var3 = new Array(2);
                var3[0] = var5;
                var3[1] = var11;
                var2 = function() { // Environment: var1
                    _fun86465: for (var _fun86465_ip = 0;;) switch (_fun86465_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var8 = null;
                            var1 = var8 != var1;
                            if (!var1) {
                                _fun86465_ip = 30;
                                continue _fun86465
                            }
                        case 16:
                            var2 = _closure2_slot4;
                            var2 = var2.expires_at;
                            var1 = var8 == var2;
                        case 30:
                            if (!var1) {
                                _fun86465_ip = 152;
                                continue _fun86465
                            }
                        case 33:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 16;
                            var2 = var3[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var2);
                            var5 = var6.track;
                            var2 = _closure1_slot9;
                            var4 = var2.PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var2.location = var7;
                            var7 = _closure2_slot4;
                            var8 = var8 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun86465_ip = 106;
                                continue _fun86465
                            }
                        case 96:
                            var8 = _closure2_slot4;
                            var7 = var8.trial_id;
                        case 106:
                            var2.trial_id = var7;
                            var2 = var5.bind(var6)(var4, var2);
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 17;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.acknowledgeUserTrialOffer;
                            var0 = _closure2_slot4;
                            var0 = var1.bind(var2)(var0);
                        case 152:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var10.bind(var7)(var2, var3);
                var10 = var7.useCallback;
                var3 = new Array(3);
                var3[0] = var11;
                var3[1] = var5;
                var3[2] = var9;
                var2 = function() { // Environment: var1
                    _fun86466: for (var _fun86466_ip = 0;;) switch (_fun86466_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var1);
                            var6 = var7.track;
                            var1 = _closure1_slot9;
                            var4 = var1.PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED;
                            var1 = {};
                            var3 = _closure2_slot0;
                            var1.location = var3;
                            var8 = _closure2_slot4;
                            var3 = null;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun86466_ip = 78;
                                continue _fun86466
                            }
                        case 68:
                            var9 = _closure2_slot4;
                            var8 = var9.trial_id;
                        case 78:
                            var1.trial_id = var8;
                            var1 = var6.bind(var7)(var4, var1);
                            var1 = _closure2_slot4;
                            var1 = var3 == var1;
                            var3 = undefined;
                            if (var1) {
                                _fun86466_ip = 112;
                                continue _fun86466
                            }
                        case 102:
                            var1 = _closure2_slot4;
                            var3 = var1.trial_id;
                        case 112:
                            var1 = _closure1_slot7;
                            if (!(var3 === var1)) {
                                _fun86466_ip = 175;
                                continue _fun86466
                            }
                        case 120:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 18;
                            var1 = var7[var1];
                            var4 = var6.bind(var0)(var1);
                            var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                            var1 = 13;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.TRIAL_FOR_ALL_INITIAL_UPSELL;
                            var1 = var3.bind(var4)(var1);
                        case 175:
                            var3 = _closure2_slot5;
                            var1 = _closure1_slot10;
                            var1 = var1.TAKE_ACTION;
                            var1 = var3.bind(var0)(var1);
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 15;
                            var3 = var1[var3];
                            var6 = var4.bind(var0)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)();
                            var3 = 19;
                            var3 = var1[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.pushLazy;
                            var6 = _closure1_slot0;
                            var2 = 21;
                            var2 = var1[var2];
                            var6 = var6.bind(var0)(var2);
                            var2 = 20;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var0)(var2, var1);
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.analyticsLocations = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var10 = var10.bind(var7)(var2, var3);
                var3 = var7.useCallback;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var5;
                var2[2] = var9;
                var1 = function() { // Environment: var1
                    _fun86467: for (var _fun86467_ip = 0;;) switch (_fun86467_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var2);
                            var6 = var7.track;
                            var2 = _closure1_slot9;
                            var5 = var2.PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED;
                            var3 = {};
                            var4 = _closure2_slot0;
                            var3.location = var4;
                            var8 = _closure2_slot4;
                            var4 = null;
                            var9 = var4 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun86467_ip = 78;
                                continue _fun86467
                            }
                        case 68:
                            var9 = _closure2_slot4;
                            var8 = var9.trial_id;
                        case 78:
                            var3.trial_id = var8;
                            var3 = var6.bind(var7)(var5, var3);
                            var3 = _closure2_slot4;
                            var3 = var4 == var3;
                            var4 = undefined;
                            if (var3) {
                                _fun86467_ip = 112;
                                continue _fun86467
                            }
                        case 102:
                            var3 = _closure2_slot4;
                            var4 = var3.trial_id;
                        case 112:
                            var3 = _closure1_slot7;
                            if (!(var4 === var3)) {
                                _fun86467_ip = 175;
                                continue _fun86467
                            }
                        case 120:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 18;
                            var3 = var7[var3];
                            var5 = var6.bind(var0)(var3);
                            var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                            var3 = 13;
                            var3 = var7[var3];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.TRIAL_FOR_ALL_INITIAL_UPSELL;
                            var3 = var4.bind(var5)(var3);
                        case 175:
                            var3 = _closure2_slot5;
                            var2 = _closure1_slot10;
                            var2 = var2.AUTO_DISMISS;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var9 = var3.bind(var7)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.formatIntervalDuration;
                var1 = {};
                var11 = var0 == var5;
                var7 = undefined;
                if (var11) {
                    _fun86461_ip = 565;
                    continue _fun86461
                }
            case 544:
                var11 = var5.subscription_trial;
                var12 = var0 == var11;
                var7 = undefined;
                if (var12) {
                    _fun86461_ip = 565;
                    continue _fun86461
                }
            case 559:
                var7 = var11.interval;
            case 565:
                var1.intervalType = var7;
                var11 = var0 == var5;
                var7 = undefined;
                if (var11) {
                    _fun86461_ip = 600;
                    continue _fun86461
                }
            case 579:
                var11 = var5.subscription_trial;
                var12 = var0 == var11;
                var7 = undefined;
                if (var12) {
                    _fun86461_ip = 600;
                    continue _fun86461
                }
            case 594:
                var7 = var11.interval_count;
            case 600:
                var1.intervalCount = var7;
                var11 = var2.bind(var3)(var1);
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 23;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var7 = true;
                var1.startExpanded = var7;
                var1.onDismiss = var9;
                var7 = _closure1_slot1;
                var6 = 24;
                var6 = var12[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.intervalDuration = var11;
                var6.trialOffer = var5;
                var6.onConfirm = var10;
                var6.onDismiss = var9;
                var6.fallbackPremiumType = var8;
                var6 = var3.bind(var4)(var7, var6);
                var1.children = var6;
                var6 = var0 == var5;
                var0 = undefined;
                if (var6) {
                    _fun86461_ip = 722;
                    continue _fun86461
                }
            case 716:
                var0 = var5.trial_id;
            case 722:
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 6606, 4575, 1615, 660, 1369, 33, 5688, 5541, 566, 6615, 5919, 1358, 1207, 3237, 795, 7185, 3171, 4525, 7006, 1307, 3068, 4894, 11142, 2]);