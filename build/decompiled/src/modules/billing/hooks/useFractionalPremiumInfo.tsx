// modules/billing/hooks/useFractionalPremiumInfo.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun42677: for (var _fun42677_ip = 0;;) switch (_fun42677_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var0 = arg1;
                var0 = var1 != var0;
                if (!var0) {
                    _fun42677_ip = 31;
                    continue _fun42677
                }
            case 15:
                var1 = _closure1_slot7;
                var1 = var1.fetchingAllEntitlements;
                var0 = !var1;
            case 31:
                if (!var0) {
                    _fun42677_ip = 59;
                    continue _fun42677
                }
            case 34:
                var1 = _closure1_slot7;
                var1 = var1.fetchedAllEntitlements;
                var1 = !var1;
                if (var1) {
                    _fun42677_ip = 56;
                    continue _fun42677
                }
            case 53:
                var1 = var2;
            case 56:
                var0 = var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EntitlementSourceTypes;
    var _closure1_slot8 = var6;
    var6 = var3.EntitlementTypes;
    var _closure1_slot9 = var6;
    var3 = var3.SubscriptionStatusTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FractionalPremiumStates;
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun42678: for (var _fun42678_ip = 0;;) switch (_fun42678_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.isFetching;
                var5 = undefined;
                if (!(var11 === var5)) {
                    _fun42678_ip = 19;
                    continue _fun42678
                }
            case 17:
                var11 = false;
            case 19:
                var9 = var1.entitlements;
                var7 = var1.unactivatedFractionalPremiumUnits;
                var10 = var1.currentUser;
                var0 = var1.premiumSubscription;
                var6 = var1.fetchedAllEntitlements;
                var17 = var1.excludeReverseTrialFromCountdown;
                var1 = {};
                var2 = false;
                var1.isFractionalPremiumActive = var2;
                var8 = _closure1_slot11;
                var8 = var8.NONE;
                var1.fractionalState = var8;
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var13 = 7;
                var14 = var8[var13];
                var15 = var12.bind(var5)(var14);
                var14 = 0;
                var15 = var15.bind(var5)(var14);
                var1.startsAt = var15;
                var8 = var8[var13];
                var8 = var12.bind(var5)(var8);
                var8 = var8.bind(var5)(var14);
                var1.endsAt = var8;
                var8 = '';
                var1.currentEntitlementId = var8;
                var12 = new Array(0);
                var1.unactivatedUnits = var12;
                var1.fetched = var6;
                if (var11) {
                    _fun42678_ip = 736;
                    continue _fun42678
                }
            case 162:
                var11 = null;
                if (!(var11 != var10)) {
                    _fun42678_ip = 734;
                    continue _fun42678
                }
            case 171:
                var10 = var9.length;
                if (!(var14 === var10)) {
                    _fun42678_ip = 192;
                    continue _fun42678
                }
            case 180:
                var10 = var7.length;
                if (!(var14 !== var10)) {
                    _fun42678_ip = 734;
                    continue _fun42678
                }
            case 192:
                var12 = var9.filter;
                var10 = function(arg0) { // Environment: var4
                    _fun42679: for (var _fun42679_ip = 0;;) switch (_fun42679_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.endsAt;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun42679_ip = 28;
                                continue _fun42679
                            }
                        case 18:
                            var1 = var1.startsAt;
                            var0 = var2 != var1;
                        case 28:
                            return var0;
                    }
                };
                var15 = var12.bind(var9)(var10);
                var12 = var15.sort;
                var10 = function(arg0, arg1) { // Environment: var4
                    _fun42680: for (var _fun42680_ip = 0;;) switch (_fun42680_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arg1;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 8;
                            var0 = var4[var0];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var0);
                            var0 = var2.endsAt;
                            var6 = null;
                            var3 = var6 != var0;
                            if (!var3) {
                                _fun42680_ip = 56;
                                continue _fun42680
                            }
                        case 46:
                            var0 = var1.endsAt;
                            var3 = var6 != var0;
                        case 56:
                            var0 = 'endsAt should not be null';
                            var0 = var4.bind(var5)(var3, var0);
                            var3 = var2.endsAt;
                            var0 = var1.endsAt;
                            var3 = var3 < var0;
                            var0 = -1;
                            if (var3) {
                                _fun42680_ip = 120;
                                continue _fun42680
                            }
                        case 93:
                            var2 = var2.endsAt;
                            var1 = var1.endsAt;
                            var2 = var2 > var1;
                            var1 = 0;
                            if (!var2) {
                                _fun42680_ip = 117;
                                continue _fun42680
                            }
                        case 114:
                            var1 = 1;
                        case 117:
                            var0 = var1;
                        case 120:
                            return var0;
                    }
                };
                var10 = var12.bind(var15)(var10);
                var12 = var10.reverse;
                var12 = var12.bind(var10)();
                var12 = var10.length;
                if (!(var12 > var14)) {
                    _fun42678_ip = 293;
                    continue _fun42678
                }
            case 242:
                var15 = var10.length;
                var12 = var9.length;
                if (!(var15 === var12)) {
                    _fun42678_ip = 607;
                    continue _fun42678
                }
            case 259:
                var12 = var10[var14];
                var12 = var12.startsAt;
                if (!(var11 != var12)) {
                    _fun42678_ip = 607;
                    continue _fun42678
                }
            case 276:
                var12 = var10[var14];
                var12 = var12.endsAt;
                if (!(var11 != var12)) {
                    _fun42678_ip = 607;
                    continue _fun42678
                }
            case 293:
                var12 = var10[var14];
                var15 = var11 != var12;
                var10 = null;
                if (!var15) {
                    _fun42678_ip = 309;
                    continue _fun42678
                }
            case 306:
                var10 = var12;
            case 309:
                var12 = _closure1_slot11;
                var12 = var12.NONE;
                if (!(var11 != var10)) {
                    _fun42678_ip = 371;
                    continue _fun42678
                }
            case 323:
                if (!(var11 != var0)) {
                    _fun42678_ip = 346;
                    continue _fun42678
                }
            case 327:
                var15 = var0.status;
                var0 = _closure1_slot10;
                var0 = var0.PAUSED;
                if (!(var15 !== var0)) {
                    _fun42678_ip = 358;
                    continue _fun42678
                }
            case 346:
                var0 = _closure1_slot11;
                var0 = var0.FP_ONLY;
                _fun42678_ip = 368;
                continue _fun42678;
            case 358:
                var15 = _closure1_slot11;
                var0 = var15.FP_SUB_PAUSED;
            case 368:
                var12 = var0;
            case 371:
                if (!var17) {
                    _fun42678_ip = 403;
                    continue _fun42678
                }
            case 374:
                var0 = var11 == var10;
                var15 = undefined;
                if (var0) {
                    _fun42678_ip = 389;
                    continue _fun42678
                }
            case 383:
                var15 = var10.sourceType;
            case 389:
                var0 = _closure1_slot8;
                var0 = var0.REVERSE_TRIAL;
                var17 = var15 === var0;
            case 403:
                var0 = {};
                var15 = var11 != var10;
                var0.isFractionalPremiumActive = var15;
                var0.fractionalState = var12;
                if (!(var11 == var10)) {
                    _fun42678_ip = 447;
                    continue _fun42678
                }
            case 423:
                var15 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var13];
                var12 = var15.bind(var5)(var12);
                var12 = var12.bind(var5)(var14);
                _fun42678_ip = 475;
                continue _fun42678;
            case 447:
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var13];
                var16 = var16.bind(var5)(var15);
                var15 = var10.startsAt;
                var12 = var16.bind(var5)(var15);
            case 475:
                var0.startsAt = var12;
                if (!(var11 == var10)) {
                    _fun42678_ip = 508;
                    continue _fun42678
                }
            case 484:
                var15 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var13];
                var12 = var15.bind(var5)(var12);
                var12 = var12.bind(var5)(var14);
                _fun42678_ip = 573;
                continue _fun42678;
            case 508:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = var16[var13];
                var14 = var14.bind(var5)(var13);
                var15 = _closure1_slot0;
                var13 = 10;
                var13 = var16[var13];
                var16 = var15.bind(var5)(var13);
                var15 = var16.extendDateWithUnconsumedFractionalPremium;
                var21 = var10.endsAt;
                var22 = var16;
                var20 = var7;
                var19 = undefined;
                var18 = var17;
                var13 = var22[var15](var21, var20, var19, var18, var17);
                var12 = var14.bind(var5)(var13);
            case 573:
                var0.endsAt = var12;
                var11 = var11 != var10;
                if (!var11) {
                    _fun42678_ip = 590;
                    continue _fun42678
                }
            case 585:
                var8 = var10.id;
            case 590:
                var0.currentEntitlementId = var8;
                var0.unactivatedUnits = var7;
                var0.fetched = var6;
                return var0;
            case 607:
                var0 = global;
                var8 = var0.Array;
                var7 = var8.from;
                var6 = var9.values;
                var6 = var6.bind(var9)();
                var7 = var7.bind(var8)(var6);
                var6 = var7.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var7 = var6.bind(var7)(var4);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var5 = var6.captureBillingMessage;
                var3 = {};
                var4 = {};
                var4.entitlementIds = var7;
                var3.extra = var4;
                var4 = 'fractional redemption entitlements should have startsAt/endsAt';
                var3 = var5.bind(var6)(var4, var3);
                var0 = var0.Error;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var22 = var3;
                var21 = var4;
                var0 = new var22[var0](var21, var20);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 734:
                return var1;
            case 736:
                var0 = {};
                var21 = var0;
                var20 = var1;
                var1 = copyDataProperties(var21, var20);
                var1 = 'fetched';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/billing/hooks/useFractionalPremiumInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun42682: for (var _fun42682_ip = 0;;) switch (_fun42682_ip) {
            case 0:
                var0 = arguments[0];
                var11 = undefined;
                if (!(var0 === var11)) {
                    _fun42682_ip = 25;
                    continue _fun42682
                }
            case 11:
                var0 = {
                    'forceFetch': false,
                    'excludeReverseTrial': false,
                    'excludeReverseTrialFromCountdown': false
                };
            case 25:
                var14 = var0.forceFetch;
                var _closure2_slot0 = var14;
                var2 = var0.excludeReverseTrial;
                var _closure2_slot1 = var2;
                var5 = var0.excludeReverseTrialFromCountdown;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var11;
                var _closure2_slot4 = var11;
                var _closure2_slot5 = var11;
                var _closure2_slot6 = var11;
                var _closure2_slot7 = var11;
                var _closure2_slot8 = var11;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var6 = var4[var0];
                var9 = var3.bind(var11)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var8.bind(var9)(var7, var6);
                _closure2_slot3 = var10;
                var6 = var4[var0];
                var9 = var3.bind(var11)(var6);
                var8 = var9.useStateFromStoresArray;
                var6 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getFractionalPremium;
                    var0 = {};
                    var3 = _closure2_slot1;
                    var0.excludeReverseTrial = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var8.bind(var9)(var7, var6);
                _closure2_slot4 = var9;
                var6 = var4[var0];
                var12 = var3.bind(var11)(var6);
                var8 = var12.useStateFromStores;
                var6 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var1
                    var0 = _closure1_slot7;
                    var0 = var0.fetchedAllEntitlements;
                    return var0;
                };
                var6 = var8.bind(var12)(var7, var6);
                _closure2_slot5 = var6;
                var7 = var4[var0];
                var13 = var3.bind(var11)(var7);
                var12 = var13.useStateFromStoresArray;
                var7 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var1
                    var1 = _closure1_slot7;
                    var0 = var1.getUnactivatedFractionalPremiumUnits;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var12.bind(var13)(var8, var7);
                _closure2_slot6 = var7;
                var0 = var4[var0];
                var8 = var3.bind(var11)(var0);
                var4 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot6;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var4.bind(var8)(var3, var0);
                _closure2_slot7 = var8;
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var12 = _closure1_slot12;
                var0 = {};
                var13 = _closure1_slot13;
                var13 = var13.bind(var11)(var14, var10);
                if (var13) {
                    _fun42682_ip = 338;
                    continue _fun42682
                }
            case 328:
                var14 = _closure1_slot7;
                var13 = var14.fetchingAllEntitlements;
            case 338:
                var0.isFetching = var13;
                var0.entitlements = var9;
                var0.unactivatedFractionalPremiumUnits = var7;
                var0.currentUser = var10;
                var0.premiumSubscription = var8;
                var0.fetchedAllEntitlements = var6;
                var0.excludeReverseTrialFromCountdown = var5;
                var0 = var12.bind(var11)(var0);
                var4 = var3.bind(var4)(var0);
                var3 = _closure1_slot3;
                var0 = 2;
                var4 = var3.bind(var11)(var4, var0);
                var0 = 0;
                var0 = var4[var0];
                var3 = 1;
                var3 = var4[var3];
                _closure2_slot8 = var3;
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 12;
                var3 = var12[var3];
                var4 = var4.bind(var11)(var3);
                var3 = function() { // Environment: var1
                    _fun42688: for (var _fun42688_ip = 0;;) switch (_fun42688_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var2, var1);
                            if (!var1) {
                                _fun42688_ip = 77;
                                continue _fun42688
                            }
                        case 29:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.fetchUserEntitlements;
                            var1 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.FRACTIONAL_REDEMPTION;
                            var1.entitlementType = var4;
                            var1 = var2.bind(var3)(var1);
                        case 77:
                            return var0;
                    }
                };
                var3 = var4.bind(var11)(var3);
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(6);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var7;
                var2[4] = var6;
                var2[5] = var5;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot12;
                    var3 = {};
                    var0 = _closure2_slot4;
                    var3.entitlements = var0;
                    var0 = _closure2_slot6;
                    var3.unactivatedFractionalPremiumUnits = var0;
                    var0 = _closure2_slot3;
                    var3.currentUser = var0;
                    var0 = _closure2_slot7;
                    var3.premiumSubscription = var0;
                    var0 = _closure2_slot5;
                    var3.fetchedAllEntitlements = var0;
                    var0 = _closure2_slot2;
                    var3.excludeReverseTrialFromCountdown = var0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var _closure3_slot0 = var3;
                    var2 = _closure2_slot8;
                    var1 = function(arg0) { // Environment: var1
                        _fun42690: for (var _fun42690_ip = 0;;) switch (_fun42690_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.isEqual;
                                var2 = _closure3_slot0;
                                var2 = var3.bind(var4)(var0, var2);
                                if (var2) {
                                    _fun42690_ip = 54;
                                    continue _fun42690
                                }
                            case 50:
                                var0 = _closure3_slot0;
                            case 54:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1621, 3119, 4652, 660, 1623, 3047, 44, 3127, 3111, 566, 4103, 4653, 22, 2]);