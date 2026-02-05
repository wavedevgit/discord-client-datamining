// modules/premium/native/handlePremiumPurchase.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun57861: for (var _fun57861_ip = 0;;) switch (_fun57861_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57861_ip = 206;
                            continue _fun57861
                        }
                    case 10:
                        var10 = arg0;
                        var9 = arg1;
                        var8 = arg2;
                        var7 = arg3;
                        var6 = arg4;
                    case 25: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var5 = _closure1_slot10;
                        var5 = var5.GOOGLE_PLAY_VALIDATE_PURCHASE;
                        var1.url = var5;
                        var5 = {};
                        var5.product_id = var10;
                        var5.offer_id = var8;
                        var10 = var9;
                        var8 = null;
                        var10 = var8 == var10;
                        var8 = undefined;
                        if (var10) {
                            _fun57861_ip = 108;
                            continue _fun57861
                        }
                    case 103:
                        var8 = var9.id;
                    case 108:
                        var5.subscription_id = var8;
                        var5.currency = var7;
                        var5.is_gift = var6;
                        var1.body = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 142);
                    case 140:
                        return var1;
                    case 142:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57861_ip = 151;
                            continue _fun57861
                        }
                    case 148: // try_end0
                        return var2;
                    case 151:
                        return var1;
                    case 154: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var12 = var2;
                        var11 = var3;
                        var1 = new var12[var1](var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 206:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.setGPlayAnalytics;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PaymentGateways;
    var _closure1_slot11 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/handlePremiumPurchase.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun57862: for (var _fun57862_ip = 0;;) switch (_fun57862_ip) {
            case 0:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var3 = var8[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var3);
                var _closure2_slot0 = var5;
                var3 = 14;
                var3 = var8[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.usePremiumTrialOffer;
                var7 = var3.bind(var6)();
                var _closure2_slot1 = var7;
                var3 = 15;
                var3 = var8[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.usePremiumDiscountOffer;
                var6 = var3.bind(var6)();
                var _closure2_slot2 = var6;
                var3 = 16;
                var3 = var8[var3];
                var8 = var4.bind(var1)(var3);
                var4 = var8.useIsEligibleForBogoPromotion;
                var3 = false;
                var4 = var4.bind(var8)(var3);
                var _closure2_slot3 = var4;
                var3 = null;
                var11 = var3 != var5;
                var _closure2_slot4 = var11;
                var9 = var3 == var5;
                var8 = undefined;
                if (var9) {
                    _fun57862_ip = 164;
                    continue _fun57862
                }
            case 159:
                var8 = var5.id;
            case 164:
                var _closure2_slot5 = var8;
                var9 = var3 == var5;
                var10 = undefined;
                if (var9) {
                    _fun57862_ip = 183;
                    continue _fun57862
                }
            case 177:
                var10 = var5.paymentGatewayPlanId;
            case 183:
                var _closure2_slot6 = var10;
                var3 = var3 == var5;
                var9 = undefined;
                if (var3) {
                    _fun57862_ip = 202;
                    continue _fun57862
                }
            case 196:
                var9 = var5.paymentGatewaySubscriptionId;
            case 202:
                var _closure2_slot7 = var9;
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun57866: for (var _fun57866_ip = 0;;) switch (_fun57866_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun57866_ip = 1543;
                                        continue _fun57866
                                    }
                                case 13:
                                    var17 = var1.productId;
                                    var14 = var1.skuId;
                                    var26 = var1.analyticsLoadId;
                                    var18 = var1.analyticsLocation;
                                    var16 = var1.analyticsLocations;
                                    var7 = var1.isGift;
                                    var3 = undefined;
                                    if (!(var7 === var3)) {
                                        _fun57866_ip = 57;
                                        continue _fun57866
                                    }
                                case 55:
                                    var7 = false;
                                case 57:
                                    var6 = var7;
                                    var7 = var1.isOneTimePurchase;
                                    if (!(var7 === var3)) {
                                        _fun57866_ip = 72;
                                        continue _fun57866
                                    }
                                case 70:
                                    var7 = false;
                                case 72:
                                    var11 = var7;
                                    var7 = var1.allowPlanChange;
                                    if (!(var7 === var3)) {
                                        _fun57866_ip = 87;
                                        continue _fun57866
                                    }
                                case 85:
                                    var7 = true;
                                case 87:
                                    var21 = var7;
                                    var12 = var1.applicationId;
                                    var24 = var1.giftInfoOptions;
                                    var9 = var1.onPurchaseComplete;
                                    var5 = var1.onPurchaseError;
                                    var8 = undefined;
                                    var23 = undefined;
                                    var19 = undefined;
                                    var20 = undefined;
                                    var22 = undefined;
                                    SaveGenerator(address = 127);
                                case 125:
                                    return var3;
                                case 127:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun57866_ip = 1540;
                                        continue _fun57866
                                    }
                                case 136:
                                    var10 = _closure1_slot6;
                                    var7 = var10.getId;
                                    var8 = var7.bind(var10)();
                                    var10 = _closure1_slot8;
                                    var7 = var10.getProduct;
                                    var25 = var17;
                                    var13 = var7.bind(var10)(var25);
                                    var23 = var13;
                                    var10 = _closure1_slot0;
                                    var15 = _closure1_slot2;
                                    var7 = 17;
                                    var7 = var15[var7];
                                    var15 = var10.bind(var3)(var7);
                                    var10 = var15.getBasePurchaseFlowAnalyticsFields;
                                    var7 = {};
                                    var27 = var6;
                                    var7.isGift = var27;
                                    var7.analyticsLoadId = var26;
                                    var7.analyticsLocation = var18;
                                    var7.analyticsLocations = var16;
                                    var7 = var10.bind(var15)(var7);
                                    var19 = var7;
                                    var15 = _closure1_slot5;
                                    var10 = {};
                                    var36 = var10;
                                    var35 = var7;
                                    var7 = copyDataProperties(var36, var35);
                                    var18 = 'subscription_plan_gateway_plan_id';
                                    var10[var18] = var25;
                                    var7 = var14;
                                    var16 = 'sku_id';
                                    var10[var16] = var7;
                                    var7 = null;
                                    var13 = var7 == var13;
                                    var26 = undefined;
                                    if (var13) {
                                        _fun57866_ip = 290;
                                        continue _fun57866
                                    }
                                case 281:
                                    var13 = var23;
                                    var26 = var13.price;
                                case 290:
                                    var13 = 'price';
                                    var10[var13] = var26;
                                    var13 = var23;
                                    var13 = var7 == var13;
                                    var26 = undefined;
                                    if (var13) {
                                        _fun57866_ip = 320;
                                        continue _fun57866
                                    }
                                case 311:
                                    var13 = var23;
                                    var26 = var13.price;
                                case 320:
                                    var13 = 'regular_price';
                                    var10[var13] = var26;
                                    var13 = var23;
                                    var13 = var7 == var13;
                                    var26 = undefined;
                                    if (var13) {
                                        _fun57866_ip = 360;
                                        continue _fun57866
                                    }
                                case 341:
                                    var13 = var23;
                                    var27 = var13.currencyCode;
                                    var13 = var27.toLowerCase;
                                    var26 = var13.bind(var27)();
                                case 360:
                                    var13 = 'currency';
                                    var10[var13] = var26;
                                    var28 = var12;
                                    var13 = 'application_id';
                                    var10[var13] = var28;
                                    var10 = var15.bind(var3)(var25, var10);
                                    var15 = var17;
                                    var29 = _closure2_slot3;
                                    var26 = _closure2_slot1;
                                    var27 = _closure2_slot2;
                                    var30 = var23;
                                    var31 = var7 == var30;
                                    var25 = undefined;
                                    if (var31) {
                                        _fun57866_ip = 423;
                                        continue _fun57866
                                    }
                                case 417:
                                    var25 = var30.offerIds;
                                case 423:
                                    if (!(var7 != var25)) {
                                        _fun57866_ip = 438;
                                        continue _fun57866
                                    }
                                case 427:
                                    if (!(var7 == var26)) {
                                        _fun57866_ip = 560;
                                        continue _fun57866
                                    }
                                case 434:
                                    if (!(var7 == var27)) {
                                        _fun57866_ip = 506;
                                        continue _fun57866
                                    }
                                case 438:
                                    var25 = null;
                                    if (!var29) {
                                        _fun57866_ip = 504;
                                        continue _fun57866
                                    }
                                case 443:
                                    var30 = _closure1_slot0;
                                    var29 = _closure1_slot2;
                                    var31 = 12;
                                    var29 = var29[var31];
                                    var29 = var30.bind(var3)(var29);
                                    var29 = var29.ProductIds;
                                    var29 = var29.PREMIUM_TIER_2_MONTHLY;
                                    var25 = null;
                                    if (!(var15 === var29)) {
                                        _fun57866_ip = 504;
                                        continue _fun57866
                                    }
                                case 481:
                                    var30 = _closure1_slot0;
                                    var29 = _closure1_slot2;
                                    var29 = var29[var31];
                                    var29 = var30.bind(var3)(var29);
                                    var25 = var29.BOGO_OFFER_ID;
                                case 504:
                                    _fun57866_ip = 612;
                                    continue _fun57866;
                                case 506:
                                    var30 = _closure1_slot0;
                                    var31 = _closure1_slot2;
                                    var29 = 12;
                                    var29 = var31[var29];
                                    var29 = var30.bind(var3)(var29);
                                    var29 = var29.DiscountIdToProductOfferId;
                                    var27 = var27.discount_id;
                                    var29 = var29[var27];
                                    var30 = var7 == var29;
                                    var27 = undefined;
                                    if (var30) {
                                        _fun57866_ip = 555;
                                        continue _fun57866
                                    }
                                case 551:
                                    var27 = var29[var15];
                                case 555:
                                    var25 = var27;
                                    _fun57866_ip = 612;
                                    continue _fun57866;
                                case 560:
                                    var29 = _closure1_slot0;
                                    var30 = _closure1_slot2;
                                    var27 = 12;
                                    var27 = var30[var27];
                                    var27 = var29.bind(var3)(var27);
                                    var27 = var27.TrialIdToProductOfferId;
                                    var26 = var26.trial_id;
                                    var27 = var27[var26];
                                    var29 = var7 == var27;
                                    var26 = undefined;
                                    if (var29) {
                                        _fun57866_ip = 609;
                                        continue _fun57866
                                    }
                                case 605:
                                    var26 = var27[var15];
                                case 609:
                                    var25 = var26;
                                case 612:
                                    var20 = var25;
                                    var26 = _closure1_slot0;
                                    var27 = _closure1_slot2;
                                    var25 = 18;
                                    var25 = var27[var25];
                                    var27 = var26.bind(var3)(var25);
                                    var26 = var27.trackPaymentFlowStartedAnalyticsAndCTP;
                                    var25 = {};
                                    var35 = var19;
                                    var36 = var25;
                                    var29 = copyDataProperties(var36, var35);
                                    var25[var18] = var15;
                                    var15 = var14;
                                    var25[var16] = var15;
                                    var15 = _closure1_slot11;
                                    var29 = var15.GOOGLE;
                                    var15 = 'payment_gateway';
                                    var25[var15] = var29;
                                    var25[var13] = var28;
                                    var25 = var26.bind(var27)(var25);
                                case 695: // try_start_0
                                    var25 = var6;
                                    if (var25) {
                                        _fun57866_ip = 916;
                                        continue _fun57866
                                    }
                                case 704:
                                    if (var11) {
                                        _fun57866_ip = 916;
                                        continue _fun57866
                                    }
                                case 710:
                                    var25 = _closure2_slot4;
                                    var11 = var25;
                                    if (!var25) {
                                        _fun57866_ip = 723;
                                        continue _fun57866
                                    }
                                case 720:
                                    var11 = !var21;
                                case 723:
                                    if (var11) {
                                        _fun57866_ip = 1212;
                                        continue _fun57866
                                    }
                                case 729:
                                    var25 = _closure2_slot6;
                                    var25 = var7 != var25;
                                    var21 = var25;
                                    if (!var25) {
                                        _fun57866_ip = 751;
                                        continue _fun57866
                                    }
                                case 743:
                                    var25 = _closure2_slot7;
                                    var21 = var7 != var25;
                                case 751:
                                    var11 = var21;
                                    if (!var21) {
                                        _fun57866_ip = 765;
                                        continue _fun57866
                                    }
                                case 757:
                                    var21 = _closure2_slot5;
                                    var11 = var7 != var21;
                                case 765:
                                    if (!var11) {
                                        _fun57866_ip = 816;
                                        continue _fun57866
                                    }
                                case 768:
                                    var21 = _closure1_slot0;
                                    var25 = _closure1_slot2;
                                    var11 = 20;
                                    var11 = var25[var11];
                                    var28 = var21.bind(var3)(var11);
                                    var27 = var28.updatePendingDowngrade;
                                    var36 = var17;
                                    var35 = _closure2_slot6;
                                    var34 = _closure2_slot7;
                                    var33 = _closure2_slot5;
                                    var37 = var28;
                                    var11 = var37[var27](var36, var35, var34, var33, var32);
                                case 816:
                                    var26 = _closure1_slot12;
                                    var25 = var17;
                                    var21 = _closure2_slot0;
                                    var11 = var20;
                                    var11 = var26.bind(var3)(var25, var21, var11);
                                    SaveGenerator(address = 841);
                                case 839:
                                    return var11;
                                case 841:
                                    ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 21);
                                    if (var21) {
                                        _fun57866_ip = 913;
                                        continue _fun57866
                                    }
                                case 847:
                                    var25 = _closure1_slot0;
                                    var26 = _closure1_slot2;
                                    var21 = 20;
                                    var21 = var26[var21];
                                    var29 = var25.bind(var3)(var21);
                                    var28 = var29.subscribe;
                                    var36 = var17;
                                    var35 = var8;
                                    var34 = _closure2_slot6;
                                    var33 = _closure2_slot7;
                                    var32 = var20;
                                    var37 = var29;
                                    var20 = var37[var28](var36, var35, var34, var33, var32, var31);
                                    SaveGenerator(address = 901);
                                case 899:
                                    return var20;
                                case 901:
                                    ResumeGenerator(result_out_reg = 20, return_bool_out_reg = 21);
                                    if (!var21) {
                                        _fun57866_ip = 1212;
                                        continue _fun57866
                                    }
                                case 910: // try_end0
                                    return var20;
                                case 913:
                                    return var11;
                                case 916: // try_start_1
                                    var20 = var6;
                                    var11 = var20;
                                    if (!var20) {
                                        _fun57866_ip = 932;
                                        continue _fun57866
                                    }
                                case 925:
                                    var20 = var24;
                                    var11 = var7 != var20;
                                case 932:
                                    if (!var11) {
                                        _fun57866_ip = 1083;
                                        continue _fun57866
                                    }
                                case 938:
                                    var25 = _closure1_slot1;
                                    var20 = _closure1_slot2;
                                    var21 = 19;
                                    var20 = var20[var21];
                                    var20 = var25.bind(var3)(var20);
                                    var20 = var20.giftInfoOptionsCache;
                                    var20 = var7 != var20;
                                    var11 = var20;
                                    if (!var20) {
                                        _fun57866_ip = 1008;
                                        continue _fun57866
                                    }
                                case 974:
                                    var25 = _closure1_slot1;
                                    var20 = _closure1_slot2;
                                    var20 = var20[var21];
                                    var20 = var25.bind(var3)(var20);
                                    var25 = var20.giftInfoOptionsCache;
                                    var20 = var17;
                                    var20 = var25[var20];
                                    var11 = var7 != var20;
                                case 1008:
                                    if (!var11) {
                                        _fun57866_ip = 1041;
                                        continue _fun57866
                                    }
                                case 1011:
                                    var20 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var11 = var11[var21];
                                    var11 = var20.bind(var3)(var11);
                                    var20 = var11.giftInfoOptionsCache;
                                    var11 = var17;
                                    var11 = delete var20[var11];
                                case 1041:
                                    var20 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var11 = var11[var21];
                                    var11 = var20.bind(var3)(var11);
                                    var21 = var11.giftInfoOptionsCache;
                                    var20 = var17;
                                    var11 = {};
                                    var35 = var24;
                                    var36 = var11;
                                    var24 = copyDataProperties(var36, var35);
                                    var21[var20] = var11;
                                case 1083:
                                    var21 = _closure1_slot12;
                                    var20 = var17;
                                    var11 = _closure2_slot0;
                                    var10 = var23;
                                    var24 = var7 == var10;
                                    var10 = undefined;
                                    if (var24) {
                                        _fun57866_ip = 1137;
                                        continue _fun57866
                                    }
                                case 1106:
                                    var23 = var23.currencyCode;
                                    var22 = var23;
                                    var23 = var7 == var23;
                                    var10 = undefined;
                                    if (var23) {
                                        _fun57866_ip = 1137;
                                        continue _fun57866
                                    }
                                case 1124:
                                    var23 = var22;
                                    var22 = var23.toLowerCase;
                                    var10 = var22.bind(var23)();
                                case 1137:
                                    var32 = var6;
                                    var37 = undefined;
                                    var36 = var20;
                                    var35 = var11;
                                    var34 = null;
                                    var33 = var10;
                                    var6 = var37[var21](var36, var35, var34, var33, var32, var31);
                                    SaveGenerator(address = 1161);
                                case 1159:
                                    return var6;
                                case 1161:
                                    ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 10);
                                    if (var10) {
                                        _fun57866_ip = 1231;
                                        continue _fun57866
                                    }
                                case 1167:
                                    var11 = _closure1_slot0;
                                    var20 = _closure1_slot2;
                                    var10 = 20;
                                    var10 = var20[var10];
                                    var20 = var11.bind(var3)(var10);
                                    var11 = var20.purchase;
                                    var10 = var17;
                                    var8 = var11.bind(var20)(var10, var8);
                                    SaveGenerator(address = 1206);
                                case 1204:
                                    return var8;
                                case 1206:
                                    ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 10);
                                    if (var10) {
                                        _fun57866_ip = 1228;
                                        continue _fun57866
                                    }
                                case 1212:
                                    var10 = var9;
                                    if (!(var7 != var10)) {
                                        _fun57866_ip = 1223;
                                        continue _fun57866
                                    }
                                case 1219:
                                    var9 = var9.bind(var3)();
                                case 1223: // try_end1
                                    _fun57866_ip = 1535;
                                    continue _fun57866;
                                case 1228:
                                    return var8;
                                case 1231:
                                    return var6;
                                case 1234: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 11);
                                    var2 = var11;
                                    var8 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var6 = 21;
                                    var6 = var9[var6];
                                    var10 = var8.bind(var3)(var6);
                                    var9 = var10.track;
                                    var6 = _closure1_slot9;
                                    var8 = var6.PAYMENT_FLOW_FAILED;
                                    var6 = {};
                                    var35 = var19;
                                    var36 = var6;
                                    var19 = copyDataProperties(var36, var35);
                                    var6[var18] = var17;
                                    var6[var16] = var14;
                                    var14 = _closure1_slot11;
                                    var14 = var14.GOOGLE;
                                    var6[var15] = var14;
                                    var6[var13] = var12;
                                    var12 = var11.message;
                                    var11 = 'error_message';
                                    var6[var11] = var12;
                                    var6 = var9.bind(var10)(var8, var6);
                                    var6 = var5;
                                    if (!(var7 != var6)) {
                                        _fun57866_ip = 1347;
                                        continue _fun57866
                                    }
                                case 1343:
                                    var5 = var5.bind(var3)();
                                case 1347:
                                    var13 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var5 = 22;
                                    var5 = var7[var5];
                                    var8 = var13.bind(var3)(var5);
                                    var6 = var8.captureBillingException;
                                    var5 = var2;
                                    var6 = var6.bind(var8)(var5);
                                    var6 = _closure1_slot1;
                                    var4 = 10;
                                    var4 = var7[var4];
                                    var9 = var6.bind(var3)(var4);
                                    var8 = var9.show;
                                    var4 = {};
                                    var10 = 11;
                                    var11 = var7[var10];
                                    var11 = var13.bind(var3)(var11);
                                    var14 = var11.intl;
                                    var12 = var14.string;
                                    var11 = var7[var10];
                                    var11 = var13.bind(var3)(var11);
                                    var11 = var11.t;
                                    var11 = var11["U+H+kd"];
                                    var11 = var12.bind(var14)(var11);
                                    var4.title = var11;
                                    var11 = var7[var10];
                                    var11 = var13.bind(var3)(var11);
                                    var12 = var11.intl;
                                    var11 = var12.string;
                                    var10 = var7[var10];
                                    var10 = var13.bind(var3)(var10);
                                    var10 = var10.t;
                                    var10 = var10.LFFx5G;
                                    var10 = var11.bind(var12)(var10);
                                    var4.body = var10;
                                    var10 = true;
                                    var4.isDismissable = var10;
                                    var4 = var8.bind(var9)(var4);
                                    var4 = 9;
                                    var4 = var7[var4];
                                    var4 = var6.bind(var3)(var4);
                                    var4 = var5 instanceof var4;
                                    if (var4) {
                                        _fun57866_ip = 1538;
                                        continue _fun57866
                                    }
                                case 1535:
                                    return var3;
                                case 1538:
                                    throw var2;
                                case 1540:
                                    return var1;
                                case 1543:
                                    return var0;
                            }
                        };
                        var1 = var0.next;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var0.bind(var1)();
                var0 = new Array(8);
                var0[0] = var11;
                var0[1] = var10;
                var0[2] = var9;
                var0[3] = var8;
                var0[4] = var7;
                var0[5] = var6;
                var0[6] = var5;
                var0[7] = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useHandlePremiumPurchase = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 7094, 1216, 3117, 4611, 660, 483, 507, 7095, 4002, 1234, 4608, 566, 6673, 6676, 7096, 7124, 7125, 7127, 7128, 795, 3125, 2]);