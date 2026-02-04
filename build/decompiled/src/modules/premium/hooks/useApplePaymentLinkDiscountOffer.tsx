// modules/premium/hooks/useApplePaymentLinkDiscountOffer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.APPLE_PAYMENT_LINK_1_MONTH_10_PERCENT_DISCOUNT;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = function arg0, arg1() {
        _fun58386: for (var _fun58386_ip = 0;;) switch (_fun58386_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun58386_ip = 81;
                    continue _fun58386
                }
            case 12:
                var4 = var1.discount_id;
                var2 = var1.discount;
                var3 = var0 != var2;
                var1 = null;
                if (!var3) {
                    _fun58386_ip = 79;
                    continue _fun58386
                }
            case 33:
                var3 = var0 != var6;
                var1 = null;
                if (!var3) {
                    _fun58386_ip = 79;
                    continue _fun58386
                }
            case 42:
                var5 = var2.plan_ids;
                var3 = var5.includes;
                var3 = var3.bind(var5)(var6);
                var1 = null;
                if (!var3) {
                    _fun58386_ip = 79;
                    continue _fun58386
                }
            case 63:
                var3 = _closure1_slot7;
                var1 = null;
                if (!(var4 === var3)) {
                    _fun58386_ip = 79;
                    continue _fun58386
                }
            case 76:
                var1 = var2;
            case 79:
                return var1;
            case 81:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/useApplePaymentLinkDiscountOffer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.maybeGetApplePaymentLinkDiscountFromOffer = var3;
    var1 = function(arg0) { // Environment: var1
        _fun58387: for (var _fun58387_ip = 0;;) switch (_fun58387_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.location;
                var _closure2_slot0 = var14;
                var9 = var2.analyticsLoadId;
                var _closure2_slot1 = var9;
                var13 = var2.shouldUseApplePaymentLinkDiscount;
                var _closure2_slot2 = var13;
                var1 = var2.subscriptionPlanId;
                var _closure2_slot3 = var1;
                var7 = var2.analyticsLocations;
                var _closure2_slot4 = var7;
                var15 = undefined;
                var _closure2_slot10 = var15;
                var _closure2_slot11 = var15;
                var _closure2_slot12 = var15;
                var11 = _closure1_slot5;
                var2 = var11.useRef;
                var5 = false;
                var2 = var2.bind(var11)(var5);
                var _closure2_slot5 = var2;
                var2 = var11.useState;
                var2 = var2.bind(var11)(var5);
                var16 = _closure1_slot4;
                var12 = 2;
                var6 = var16.bind(var15)(var2, var12);
                var2 = 0;
                var3 = var6[var2];
                var10 = 1;
                var6 = var6[var10];
                var _closure2_slot6 = var6;
                var6 = var11.useState;
                var8 = null;
                var6 = var6.bind(var11)(var8);
                var6 = var16.bind(var15)(var6, var12);
                var2 = var6[var2];
                var _closure2_slot7 = var2;
                var6 = var6[var10];
                var _closure2_slot8 = var6;
                var12 = var11.useCallback;
                var10 = _closure1_slot3;
                var6 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun58389: for (var _fun58389_ip = 0;;) switch (_fun58389_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58389_ip = 408;
                                    continue _fun58389
                                }
                            case 10:
                                var1 = undefined;
                                var5 = undefined;
                                var3 = _closure2_slot6;
                                var4 = true;
                                var3 = var3.bind(var1)(var4);
                            case 28: // try_start_0
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 6;
                                var3 = var8[var3];
                                var8 = var6.bind(var1)(var3);
                                var6 = var8.fetchApplePaymentLinkOffer;
                                var3 = {};
                                var9 = _closure2_slot0;
                                var3.location = var9;
                                var3 = var6.bind(var8)(var3);
                                SaveGenerator(address = 76);
                            case 74:
                                return var3;
                            case 76:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun58389_ip = 308;
                                    continue _fun58389
                                }
                            case 85:
                                var5 = var3;
                                var6 = _closure2_slot5;
                                var6.current = var4;
                                var9 = null;
                                if (!(var9 != var3)) {
                                    _fun58389_ip = 122;
                                    continue _fun58389
                                }
                            case 104:
                                var8 = _closure2_slot8;
                                var6 = var5;
                                var6 = var6.userDiscountOffer;
                                var6 = var8.bind(var1)(var6);
                            case 122:
                                var8 = var5;
                                var8 = var9 != var8;
                                var6 = var8;
                                if (!var8) {
                                    _fun58389_ip = 148;
                                    continue _fun58389
                                }
                            case 135:
                                var8 = var5;
                                var8 = var8.userDiscountOffer;
                                var6 = var9 != var8;
                            case 148:
                                if (var6) {
                                    _fun58389_ip = 294;
                                    continue _fun58389
                                }
                            case 154:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var6 = 7;
                                var6 = var9[var6];
                                var10 = var8.bind(var1)(var6);
                                var9 = var10.captureApplePaymentLinkSentryError;
                                var6 = global;
                                var8 = var6.Error;
                                var11 = _closure1_slot6;
                                var7 = var11.getId;
                                var11 = var7.bind(var11)();
                                var6 = var6.HermesInternal;
                                var7 = var6.concat;
                                var6 = 'No Apple Payment Link user discount offer found for user: ';
                                var15 = var7.bind(var6)(var11);
                                var7 = var8.prototype;
                                var7 = Object.create(var7, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var16 = var7;
                                var6 = new var16[var8](var15, var14);
                                var8 = var6 instanceof Object ? var6 : var7;
                                var7 = _closure2_slot0;
                                var6 = {};
                                var11 = {};
                                var12 = _closure2_slot1;
                                var11.load_id = var12;
                                var12 = 'fetch_apple_payment_link_offer';
                                var11.error_type = var12;
                                var12 = var5;
                                var11.offer_response = var12;
                                var6.extra = var11;
                                var6 = var9.bind(var10)(var8, var7, var6);
                            case 294:
                                var7 = _closure2_slot6;
                                var6 = false;
                                var6 = var7.bind(var1)(var6);
                            case 305: // try_end0
                                return var5;
                            case 308:
                                return var3;
                            case 311: // catch_target0
                                CatchBlockStart(arg_register = 8);
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 7;
                                var3 = var6[var3];
                                var7 = var5.bind(var1)(var3);
                                var6 = var7.captureApplePaymentLinkSentryError;
                                var5 = _closure2_slot0;
                                var3 = {};
                                var9 = {
                                    'load_id': null,
                                    'error_type': 'fetch_apple_payment_link_offer',
                                    'message': 'Unhandled error when fetching Apple Payment Link offer'
                                };
                                var10 = _closure2_slot1;
                                var9.load_id = var10;
                                var3.extra = var9;
                                var3 = var6.bind(var7)(var8, var5, var3);
                                var3 = _closure2_slot5;
                                var3.current = var4;
                                var3 = _closure2_slot6;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            case 408:
                                return var0;
                        }
                    };
                    return var0;
                };
                var10 = var10.bind(var15)(var6);
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var14;
                var6 = var12.bind(var11)(var10, var6);
                var _closure2_slot9 = var6;
                var12 = var11.useEffect;
                var10 = new Array(2);
                var10[0] = var13;
                var10[1] = var6;
                var6 = function() { // Environment: var0
                    _fun58390: for (var _fun58390_ip = 0;;) switch (_fun58390_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            if (var1) {
                                _fun58390_ip = 32;
                                continue _fun58390
                            }
                        case 15:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun58390_ip = 32;
                                continue _fun58390
                            }
                        case 22:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var12.bind(var11)(var6, var10);
                var10 = var11.useMemo;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var10.bind(var11)(var1, var6);
                var6 = var8 != var1;
                var10 = null;
                if (!var6) {
                    _fun58387_ip = 276;
                    continue _fun58387
                }
            case 271:
                var10 = var1.id;
            case 276:
                _closure2_slot10 = var10;
                var6 = var8 != var2;
                var8 = null;
                if (!var6) {
                    _fun58387_ip = 294;
                    continue _fun58387
                }
            case 289:
                var8 = var2.id;
            case 294:
                _closure2_slot11 = var8;
                var6 = _closure1_slot5;
                var4 = var6.useRef;
                var4 = var4.bind(var6)(var5);
                _closure2_slot12 = var4;
                var5 = var6.useEffect;
                var4 = new Array(4);
                var4[0] = var10;
                var4[1] = var9;
                var4[2] = var8;
                var4[3] = var7;
                var0 = function() { // Environment: var0
                    _fun58392: for (var _fun58392_ip = 0;;) switch (_fun58392_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var1 = var1.current;
                            if (var1) {
                                _fun58392_ip = 25;
                                continue _fun58392
                            }
                        case 15:
                            var3 = _closure2_slot10;
                            var2 = null;
                            var1 = var2 == var3;
                        case 25:
                            if (var1) {
                                _fun58392_ip = 124;
                                continue _fun58392
                            }
                        case 28:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.track;
                            var1 = _closure1_slot8;
                            var2 = var1.APPLE_PAYMENT_LINK_DISCOUNT_OFFER_PROMPT_VIEWED;
                            var1 = {};
                            var5 = _closure2_slot10;
                            var1.discount_id = var5;
                            var5 = _closure2_slot11;
                            var1.user_discount_offer_id = var5;
                            var5 = _closure2_slot1;
                            var1.load_id = var5;
                            var5 = _closure2_slot4;
                            var1.location_stack = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = _closure2_slot12;
                            var0 = true;
                            var1.current = var0;
                        case 124:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.isLoadingUserOffer = var3;
                var0.userDiscountOffer = var2;
                var0.visibleApplePaymentLinkDiscount = var1;
                return var0;
        }
    };
    var2.useApplePaymentLinkDiscountOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1216, 1623, 660, 7137, 3464, 795, 2]);