// modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.CurrencyCodes;
    var _closure1_slot6 = var6;
    var3 = var3.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GPlayBillingResult;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/billing/native/hooks/useMobilePurchaseSKU.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun86518: for (var _fun86518_ip = 0;;) switch (_fun86518_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.product;
                var _closure2_slot0 = var7;
                var5 = var1.analyticsLocations;
                var _closure2_slot1 = var5;
                var6 = var1.analyticsLoadId;
                var _closure2_slot2 = var6;
                var10 = var1.onPurchaseComplete;
                var _closure2_slot3 = var10;
                var9 = var1.onPurchaseError;
                var _closure2_slot4 = var9;
                var8 = var1.freePurchaseCallback;
                var _closure2_slot5 = var8;
                var17 = var1.onPurchasePending;
                var _closure2_slot6 = var17;
                var4 = var1.giftParams;
                var _closure2_slot7 = var4;
                var16 = undefined;
                var _closure2_slot10 = var16;
                var _closure2_slot11 = var16;
                var _closure2_slot12 = var16;
                var _closure2_slot13 = var16;
                var _closure2_slot14 = var16;
                var _closure2_slot15 = var16;
                var _closure2_slot16 = var16;
                var3 = _closure1_slot5;
                var2 = var3.getCurrentUser;
                var18 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var3 = var3.bind(var16)(var2);
                var2 = var3.useHandlePremiumPurchase;
                var11 = var2.bind(var3)();
                var _closure2_slot8 = var11;
                var12 = _closure1_slot4;
                var3 = var12.useRef;
                var2 = false;
                var2 = var3.bind(var12)(var2);
                var _closure2_slot9 = var2;
                var13 = var16 !== var18;
                if (!var13) {
                    _fun86518_ip = 204;
                    continue _fun86518
                }
            case 194:
                var2 = var18.isStaff;
                var13 = var2.bind(var18)();
            case 204:
                _closure2_slot10 = var13;
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 7;
                var2 = var12[var2];
                var3 = var3.bind(var16)(var2);
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getNewAnalyticsLoadId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var16)(var2);
                var3 = null;
                var12 = var3 == var4;
                var14 = undefined;
                if (var12) {
                    _fun86518_ip = 257;
                    continue _fun86518
                }
            case 251:
                var14 = var4.isGift;
            case 257:
                var12 = var3 != var14;
                if (!var12) {
                    _fun86518_ip = 267;
                    continue _fun86518
                }
            case 264:
                var12 = var14;
            case 267:
                _closure2_slot11 = var12;
                if (!(var3 == var6)) {
                    _fun86518_ip = 282;
                    continue _fun86518
                }
            case 275:
                _closure2_slot2 = var2;
                var6 = var2;
            case 282:
                var14 = var7.skuId;
                _closure2_slot12 = var14;
                var3 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 9;
                var2 = var15[var2];
                var15 = var3.bind(var16)(var2);
                var3 = var15.isPremium;
                var2 = _closure1_slot9;
                var2 = var2.TIER_2;
                var15 = var3.bind(var15)(var18, var2);
                var3 = var7.googleSkuIds;
                var2 = _closure1_slot7;
                if (var15) {
                    _fun86518_ip = 359;
                    continue _fun86518
                }
            case 347:
                var15 = var2.MOBILE;
                var15 = var3[var15];
                _fun86518_ip = 369;
                continue _fun86518;
            case 359:
                var2 = var2.MOBILE_PREMIUM_TIER_2;
                var15 = var3[var2];
            case 369:
                _closure2_slot13 = var15;
                var3 = _closure1_slot4;
                var19 = var3.useCallback;
                var18 = new Array(1);
                var18[0] = var10;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot14;
                    var2 = 'GPLAY_PURCHASE_VERIFIED';
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure2_slot9;
                    var2 = false;
                    var3.current = var2;
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var19 = var19.bind(var3)(var2, var18);
                _closure2_slot14 = var19;
                var20 = var3.useCallback;
                var18 = new Array(2);
                var18[0] = var9;
                var18[1] = var19;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.unsubscribe;
                    var3 = _closure2_slot14;
                    var2 = 'GPLAY_PURCHASE_VERIFIED';
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure2_slot9;
                    var2 = false;
                    var3.current = var2;
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = var20.bind(var3)(var2, var18);
                _closure2_slot15 = var2;
                var20 = var3.useCallback;
                var18 = new Array(3);
                var18[0] = var19;
                var18[1] = var9;
                var18[2] = var17;
                var17 = function(arg0) { // Environment: var0
                    _fun86522: for (var _fun86522_ip = 0;;) switch (_fun86522_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.billingResult;
                            var1 = _closure1_slot8;
                            var1 = var1.OK;
                            if (!(var2 !== var1)) {
                                _fun86522_ip = 93;
                                continue _fun86522
                            }
                        case 26:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var0 = var1[var0];
                            var1 = undefined;
                            var5 = var2.bind(var1)(var0);
                            var4 = var5.unsubscribe;
                            var3 = _closure2_slot14;
                            var2 = 'GPLAY_PURCHASE_VERIFIED';
                            var2 = var4.bind(var5)(var2, var3);
                            var3 = _closure2_slot9;
                            var2 = false;
                            var3.current = var2;
                            var0 = _closure2_slot4;
                            var0 = var0.bind(var1)();
                        case 93:
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var20 = var20.bind(var3)(var17, var18);
                _closure2_slot16 = var20;
                var18 = var3.useEffect;
                var17 = new Array(3);
                var17[0] = var20;
                var17[1] = var19;
                var17[2] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var0 = var4[var1];
                    var2 = undefined;
                    var8 = var3.bind(var2)(var0);
                    var7 = var8.subscribe;
                    var6 = _closure2_slot16;
                    var5 = 'GPLAY_UPDATE_PURCHASE_STATE';
                    var5 = var7.bind(var8)(var5, var6);
                    var5 = var4[var1];
                    var8 = var3.bind(var2)(var5);
                    var7 = var8.subscribe;
                    var6 = _closure2_slot14;
                    var5 = 'GPLAY_PURCHASE_VERIFIED';
                    var5 = var7.bind(var8)(var5, var6);
                    var1 = var4[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.subscribe;
                    var1 = _closure2_slot15;
                    var0 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 10;
                        var1 = var4[var2];
                        var0 = undefined;
                        var8 = var3.bind(var0)(var1);
                        var7 = var8.unsubscribe;
                        var6 = _closure2_slot16;
                        var5 = 'GPLAY_UPDATE_PURCHASE_STATE';
                        var5 = var7.bind(var8)(var5, var6);
                        var5 = var4[var2];
                        var8 = var3.bind(var0)(var5);
                        var7 = var8.unsubscribe;
                        var6 = _closure2_slot14;
                        var5 = 'GPLAY_PURCHASE_VERIFIED';
                        var5 = var7.bind(var8)(var5, var6);
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.unsubscribe;
                        var2 = _closure2_slot15;
                        var1 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var2 = var18.bind(var3)(var2, var17);
                var2 = var3.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun86526: for (var _fun86526_ip = 0;;) switch (_fun86526_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun86526_ip = 481;
                                    continue _fun86526
                                }
                            case 10:
                                var3 = undefined;
                                var1 = undefined;
                                var4 = _closure2_slot9;
                                var4 = var4.current;
                                if (var4) {
                                    _fun86526_ip = 445;
                                    continue _fun86526
                                }
                            case 32: // try_start_3 // try_start_5
                                var4 = _closure2_slot9;
                                var5 = true;
                                var4.current = var5;
                                var4 = _closure2_slot10;
                                if (!var4) {
                                    _fun86526_ip = 286;
                                    continue _fun86526
                                }
                            case 54:
                                var4 = _closure2_slot11;
                                if (var4) {
                                    _fun86526_ip = 286;
                                    continue _fun86526
                                }
                            case 64:
                                var6 = _closure2_slot5;
                                var4 = null;
                                if (!(var4 == var6)) {
                                    _fun86526_ip = 105;
                                    continue _fun86526
                                }
                            case 74:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 11;
                                var4 = var7[var4];
                                var4 = var6.bind(var3)(var4);
                                var4 = var4.purchaseSKU;
                                _fun86526_ip = 109;
                                continue _fun86526;
                            case 105:
                                var4 = _closure2_slot5;
                            case 109:
                                var1 = var4;
                            case 112: // try_start_0 // try_start_1
                                var7 = var1;
                                var1 = _closure2_slot0;
                                var6 = var1.skuId;
                                var4 = {};
                                var1 = 0;
                                var4.expectedAmount = var1;
                                var8 = _closure1_slot6;
                                var8 = var8.USD;
                                var4.expectedCurrency = var8;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var1 = 12;
                                var1 = var9[var1];
                                var8 = var8.bind(var3)(var1);
                                var1 = var8.v4;
                                var1 = var1.bind(var8)();
                                var4.loadId = var1;
                                var1 = 'collectibles';
                                var1 = var7.bind(var3)(var1, var6, var4);
                                SaveGenerator(address = 202);
                            case 200:
                                return var1;
                            case 202:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun86526_ip = 233;
                                    continue _fun86526
                                }
                            case 208:
                                var4 = _closure2_slot3;
                                var4 = var4.bind(var3)();
                            case 216: // try_end0 // try_end1
                                var6 = _closure2_slot9;
                                var4 = false;
                                var6.current = var4;
                                _fun86526_ip = 395;
                                continue _fun86526;
                            case 233:
                                var4 = _closure2_slot9;
                                var6 = false;
                                var4.current = var6;
                            case 245: // try_end3 // try_end5
                                var4 = _closure2_slot9;
                                var4.current = var6;
                                return var1;
                            case 258: // try_start_2 // try_start_4 // try_start_6 // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var4 = _closure2_slot4;
                                var4 = var4.bind(var3)();
                                throw var1;
                            case 270: // try_end2 // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 1);
                                var6 = _closure2_slot9;
                                var4 = false;
                                var6.current = var4;
                                throw var1;
                            case 286:
                                var4 = _closure2_slot8;
                                var1 = {};
                                var6 = _closure2_slot13;
                                var1.productId = var6;
                                var6 = _closure2_slot12;
                                var1.skuId = var6;
                                var1.isOneTimePurchase = var5;
                                var5 = _closure2_slot2;
                                var1.analyticsLoadId = var5;
                                var5 = _closure2_slot1;
                                var1.analyticsLocations = var5;
                                var5 = _closure2_slot11;
                                var1.isGift = var5;
                                var6 = _closure2_slot7;
                                var5 = null;
                                var6 = var5 == var6;
                                var5 = undefined;
                                if (var6) {
                                    _fun86526_ip = 366;
                                    continue _fun86526
                                }
                            case 357:
                                var6 = _closure2_slot7;
                                var5 = var6.options;
                            case 366:
                                var1.giftInfoOptions = var5;
                                var5 = _closure2_slot4;
                                var1.onPurchaseError = var5;
                                var1 = var4.bind(var3)(var1);
                                SaveGenerator(address = 389);
                            case 387:
                                return var1;
                            case 389:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun86526_ip = 410;
                                    continue _fun86526
                                }
                            case 395: // try_end4 // try_end6
                                var5 = _closure2_slot9;
                                var4 = false;
                                var5.current = var4;
                                return var3;
                            case 410:
                                var4 = _closure2_slot9;
                                var3 = false;
                                var4.current = var3;
                                return var1;
                            case 425: // try_start_7 // catch_target3 // catch_target4
                                CatchBlockStart(arg_register = 1);
                                throw var1;
                            case 429: // try_end7 // catch_target5 // catch_target6 // catch_target7
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot9;
                                var2 = false;
                                var3.current = var2;
                                throw var1;
                            case 445:
                                var1 = global;
                                var3 = var1.Error;
                                var1 = var3.prototype;
                                var2 = Object.create(var1, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var12 = 'Purchase already in progress';
                                var13 = var2;
                                var1 = new var13[var3](var12, var11);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 481:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var16)(var0);
                var0 = new Array(12);
                var0[0] = var15;
                var0[1] = var14;
                var0[2] = var13;
                var0[3] = var12;
                var0[4] = var11;
                var0[5] = var10;
                var0[6] = var9;
                var0[7] = var8;
                var7 = var7.skuId;
                var0[8] = var7;
                var0[9] = var6;
                var0[10] = var5;
                var0[11] = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1613, 660, 4576, 1615, 7032, 4891, 795, 1628, 806, 7182, 491, 2]);