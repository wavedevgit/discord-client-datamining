// modules/gplay/native/GPlayManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun58058: for (var _fun58058_ip = 0;;) switch (_fun58058_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.connectionState;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 14;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.dispatch;
                var2 = {};
                var6 = 'GPLAY_UPDATE_CONNECTION_STATE';
                var2.type = var6;
                var2.connectionState = var3;
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot11;
                var2 = var2.CONNECTED;
                if (!(var3 === var2)) {
                    _fun58058_ip = 123;
                    continue _fun58058
                }
            case 75:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.loadUserCountry;
                var3 = var1.bind(var2)();
                var2 = var3.finally;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.loadSkus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 123:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.billingResult;
        var4 = var0.isActivePurchase;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var6 = 'GPLAY_UPDATE_PURCHASE_STATE';
        var1.type = var6;
        var1.billingResult = var5;
        var1.isActivePurchase = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58064: for (var _fun58064_ip = 0;;) switch (_fun58064_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58064_ip = 1981;
                            continue _fun58064
                        }
                    case 10:
                        var1 = arg0;
                        var7 = var1.purchase;
                        var2 = undefined;
                        var11 = undefined;
                        var9 = undefined;
                        var15 = undefined;
                        var14 = undefined;
                        var19 = undefined;
                        var3 = undefined;
                        var5 = undefined;
                        var13 = undefined;
                        var12 = undefined;
                        SaveGenerator(address = 43);
                    case 41:
                        return var2;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58064_ip = 1978;
                            continue _fun58064
                        }
                    case 52:
                        var10 = _closure1_slot9;
                        var8 = var10.isPurchasingProduct;
                        var6 = var7;
                        var6 = var6.productId;
                        var6 = var8.bind(var10)(var6);
                        if (var6) {
                            _fun58064_ip = 1975;
                            continue _fun58064
                        }
                    case 85:
                        var8 = _closure1_slot10;
                        var6 = var8.getState;
                        var6 = var6.bind(var8)();
                        var10 = var6.analyticsByProductId;
                        var6 = var7;
                        var8 = var6.productId;
                        var11 = var10[var8];
                        var10 = _closure1_slot20;
                        var8 = var6.productId;
                        var8 = var10[var8];
                        var9 = var8;
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var10 = 16;
                        var10 = var17[var10];
                        var16 = var16.bind(var2)(var10);
                        var10 = var16.v3;
                        var6 = var6.purchaseToken;
                        var15 = var10.bind(var16)(var6);
                        var6 = null;
                        if (!(var6 == var8)) {
                            _fun58064_ip = 198;
                            continue _fun58064
                        }
                    case 178:
                        var16 = _closure1_slot4;
                        var10 = var16.getGiftOptionsForKey;
                        var8 = var15;
                        var9 = var10.bind(var16)(var8);
                        _fun58064_ip = 264;
                        continue _fun58064;
                    case 198:
                        var10 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var8 = 14;
                        var8 = var16[var8];
                        var16 = var10.bind(var2)(var8);
                        var10 = var16.dispatch;
                        var8 = {};
                        var17 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                        var8.type = var17;
                        var17 = var15;
                        var8.key = var17;
                        var17 = {};
                        var25 = var9;
                        var26 = var17;
                        var18 = copyDataProperties(var26, var25);
                        var8.giftOptions = var17;
                        var8 = var10.bind(var16)(var8);
                    case 264: // try_start_1 // try_start_4
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var8 = 14;
                        var10 = var17[var8];
                        var20 = var16.bind(var2)(var10);
                        var18 = var20.dispatch;
                        var10 = {};
                        var16 = 'GPLAY_VERIFICATION_START';
                        var10.type = var16;
                        var16 = var7;
                        var21 = var16.productId;
                        var10.productId = var21;
                        var10 = var18.bind(var20)(var10);
                        var18 = _closure1_slot0;
                        var10 = 17;
                        var17 = var17[var10];
                        var17 = var18.bind(var2)(var17);
                        var18 = var17.SubscriptionProductIds;
                        var17 = var18.includes;
                        var16 = var16.productId;
                        var16 = var17.bind(var18)(var16);
                        if (var16) {
                            _fun58064_ip = 977;
                            continue _fun58064
                        }
                    case 364: // try_start_0
                        var18 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var16 = 18;
                        var16 = var17[var16];
                        var16 = var18.bind(var2)(var16);
                        var23 = var16.bind(var2)();
                        var22 = var23.subtract;
                        var18 = _closure1_slot0;
                        var16 = 19;
                        var20 = var17[var16];
                        var20 = var18.bind(var2)(var20);
                        var21 = var20.DRAFT_ORDER_LOOKBACK_DAYS;
                        var20 = 'days';
                        var21 = var22.bind(var23)(var21, var20);
                        var20 = var21.toISOString;
                        var19 = var20.bind(var21)();
                        var17 = var17[var10];
                        var20 = var18.bind(var2)(var17);
                        var18 = var20.getPlanIdForGift;
                        var17 = var7;
                        var17 = var17.productId;
                        var17 = var18.bind(var20)(var17);
                        var3 = var17;
                        var17 = var6 != var17;
                        var18 = undefined;
                        if (!var17) {
                            _fun58064_ip = 506;
                            continue _fun58064
                        }
                    case 477:
                        var17 = _closure1_slot15;
                        var3 = var17[var3];
                        var14 = var3;
                        var17 = var6 == var3;
                        var3 = undefined;
                        if (var17) {
                            _fun58064_ip = 503;
                            continue _fun58064
                        }
                    case 497:
                        var3 = var14.skuId;
                    case 503:
                        var18 = var3;
                    case 506:
                        var5 = var18;
                        var21 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var3 = var20[var16];
                        var17 = var21.bind(var2)(var3);
                        var14 = var17.getOrders;
                        var3 = {};
                        var20 = var20[var16];
                        var20 = var21.bind(var2)(var20);
                        var20 = var20.OrderStatus;
                        var20 = var20.DRAFT;
                        var3.status = var20;
                        var3.createdAfter = var19;
                        var3.skuId = var18;
                        var3 = var14.bind(var17)(var3);
                        SaveGenerator(address = 578);
                    case 576:
                        return var3;
                    case 578:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 14);
                        if (var14) {
                            _fun58064_ip = 804;
                            continue _fun58064
                        }
                    case 587:
                        var13 = var3;
                        var17 = var3.length;
                        var14 = 0;
                        if (!(!(var17 > var14))) {
                            _fun58064_ip = 648;
                            continue _fun58064
                        }
                    case 601:
                        var20 = _closure1_slot17;
                        var19 = var20.warn;
                        var18 = {};
                        var17 = var7;
                        var17 = var17.productId;
                        var18.productId = var17;
                        var17 = var5;
                        var18.skuId = var17;
                        var17 = '[handlePurchaseUpdated] No draft order found for signing';
                        var17 = var19.bind(var20)(var17, var18);
                        _fun58064_ip = 743;
                        continue _fun58064;
                    case 648:
                        var13 = var13[var14];
                        var14 = var13.id;
                        var18 = _closure1_slot17;
                        var17 = var18.info;
                        var13 = {};
                        var13.orderId = var14;
                        var19 = var7;
                        var19 = var19.productId;
                        var13.productId = var19;
                        var13.skuId = var5;
                        var5 = '[handlePurchaseUpdated] Signing order from backend query';
                        var5 = var17.bind(var18)(var5, var13);
                        var13 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var16];
                        var13 = var13.bind(var2)(var5);
                        var5 = var13.markOrderAsSigningInProgress;
                        var5 = var5.bind(var13)(var14);
                        SaveGenerator(address = 737);
                    case 735:
                        return var5;
                    case 737:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 13);
                        if (var13) {
                            _fun58064_ip = 748;
                            continue _fun58064
                        }
                    case 743: // try_end0
                        _fun58064_ip = 977;
                        continue _fun58064;
                    case 748: // try_end1 // try_end4
                        var14 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var8];
                        var16 = var14.bind(var2)(var13);
                        var14 = var16.dispatch;
                        var13 = {};
                        var17 = 'GPLAY_VERIFICATION_END';
                        var13.type = var17;
                        var17 = var7;
                        var17 = var17.productId;
                        var13.productId = var17;
                        var13 = var14.bind(var16)(var13);
                        return var5;
                    case 804:
                        var13 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var14 = var13.bind(var2)(var5);
                        var13 = var14.dispatch;
                        var5 = {};
                        var16 = 'GPLAY_VERIFICATION_END';
                        var5.type = var16;
                        var16 = var7;
                        var16 = var16.productId;
                        var5.productId = var16;
                        var5 = var13.bind(var14)(var5);
                        return var3;
                    case 860: // try_start_2 // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var5 = 20;
                        var5 = var14[var5];
                        var14 = var13.bind(var2)(var5);
                        var13 = var14.captureBillingException;
                        var5 = {};
                        var16 = {};
                        var17 = 'GPlayManager_handlePurchaseUpdated_sign';
                        var16.source = var17;
                        var5.tags = var16;
                        var16 = {};
                        var17 = var7;
                        var17 = var17.productId;
                        var16.productId = var17;
                        var5.extra = var16;
                        var5 = var13.bind(var14)(var3, var5);
                        var13 = _closure1_slot17;
                        var5 = var13.error;
                        var16 = var3.message;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var14 = var3.concat;
                        var3 = '[handlePurchaseUpdated] Failed to find or sign order: ';
                        var3 = var14.bind(var3)(var16);
                        var3 = var5.bind(var13)(var3);
                    case 977:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var13 = 15;
                        var3 = var3[var13];
                        var16 = var5.bind(var2)(var3);
                        var14 = var16.verifyPurchase;
                        var5 = var7;
                        var3 = var9;
                        var3 = var14.bind(var16)(var5, var3);
                        SaveGenerator(address = 1019);
                    case 1017:
                        return var3;
                    case 1019:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun58064_ip = 1537;
                            continue _fun58064
                        }
                    case 1028:
                        var12 = var3;
                        var14 = var6 != var3;
                        var5 = var14;
                        if (!var14) {
                            _fun58064_ip = 1045;
                            continue _fun58064
                        }
                    case 1041:
                        var5 = var6 != var9;
                    case 1045:
                        if (!var5) {
                            _fun58064_ip = 1108;
                            continue _fun58064
                        }
                    case 1048:
                        var9 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var14 = var9.bind(var2)(var5);
                        var9 = var14.dispatch;
                        var5 = {};
                        var16 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                        var5.type = var16;
                        var5.key = var15;
                        var5 = var9.bind(var14)(var5);
                        var9 = _closure1_slot20;
                        var5 = var7;
                        var5 = var5.productId;
                        var5 = delete var9[var5];
                    case 1108:
                        var5 = var12;
                        if (!(var6 != var5)) {
                            _fun58064_ip = 1293;
                            continue _fun58064
                        }
                    case 1118:
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var10];
                        var5 = var9.bind(var2)(var5);
                        var10 = var5.SubscriptionProductIds;
                        var9 = var10.includes;
                        var5 = var7;
                        var5 = var5.productId;
                        var5 = var9.bind(var10)(var5);
                        if (var5) {
                            _fun58064_ip = 1293;
                            continue _fun58064
                        }
                    case 1166:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = var9[var8];
                        var15 = var10.bind(var2)(var5);
                        var14 = var15.dispatch;
                        var10 = {};
                        var5 = 'GPLAY_PURCHASE_VERIFIED';
                        var10.type = var5;
                        var5 = var7;
                        var16 = var5.productId;
                        var10.productId = var16;
                        var10 = var14.bind(var15)(var10);
                        var10 = _closure1_slot0;
                        var9 = var9[var13];
                        var10 = var10.bind(var2)(var9);
                        var9 = var10.sendPaymentCompleteAnalytics;
                        var9 = var9.bind(var10)(var5);
                        var10 = _closure1_slot17;
                        var9 = var10.info;
                        var14 = var5.productId;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var13 = var5.concat;
                        var5 = '[handlePurchaseUpdated] One Time Purchase verified and consumed: ';
                        var5 = var13.bind(var5)(var14);
                        var5 = var9.bind(var10)(var5);
                        _fun58064_ip = 1476;
                        continue _fun58064;
                    case 1293:
                        var5 = var12;
                        if (!(var6 != var5)) {
                            _fun58064_ip = 1313;
                            continue _fun58064
                        }
                    case 1300:
                        var5 = var12;
                        var5 = var5.pendingDowngrade;
                        if (!(var6 == var5)) {
                            _fun58064_ip = 1390;
                            continue _fun58064
                        }
                    case 1313:
                        var5 = _closure1_slot33;
                        var5 = var5.bind(var2)();
                        SaveGenerator(address = 1325);
                    case 1323:
                        return var5;
                    case 1325:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (!var6) {
                            _fun58064_ip = 1476;
                            continue _fun58064
                        }
                    case 1334: // try_end2 // try_end5
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var9.bind(var2)(var6);
                        var9 = var10.dispatch;
                        var6 = {};
                        var13 = 'GPLAY_VERIFICATION_END';
                        var6.type = var13;
                        var13 = var7;
                        var13 = var13.productId;
                        var6.productId = var13;
                        var6 = var9.bind(var10)(var6);
                        return var5;
                    case 1390: // try_start_3 // try_start_6
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = var9[var8];
                        var10 = var6.bind(var2)(var5);
                        var6 = var10.dispatch;
                        var5 = {};
                        var13 = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
                        var5.type = var13;
                        var12 = var12.pendingDowngrade;
                        var5.pendingDowngrade = var12;
                        var5 = var6.bind(var10)(var5);
                        var6 = _closure1_slot0;
                        var5 = 21;
                        var5 = var9[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.fetchSubscriptions;
                        var5 = var5.bind(var6)();
                        SaveGenerator(address = 1470);
                    case 1468:
                        return var5;
                    case 1470:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun58064_ip = 1481;
                            continue _fun58064
                        }
                    case 1476: // try_end3
                        _fun58064_ip = 1860;
                        continue _fun58064;
                    case 1481: // try_end6
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var10 = var9.bind(var2)(var6);
                        var9 = var10.dispatch;
                        var6 = {};
                        var12 = 'GPLAY_VERIFICATION_END';
                        var6.type = var12;
                        var12 = var7;
                        var12 = var12.productId;
                        var6.productId = var12;
                        var6 = var9.bind(var10)(var6);
                        return var5;
                    case 1537:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var8 = var6.bind(var2)(var5);
                        var6 = var8.dispatch;
                        var5 = {};
                        var9 = 'GPLAY_VERIFICATION_END';
                        var5.type = var9;
                        var9 = var7;
                        var9 = var9.productId;
                        var5.productId = var9;
                        var5 = var6.bind(var8)(var5);
                        return var3;
                    case 1593: // try_start_7 // catch_target1 // catch_target2 // catch_target3
                        CatchBlockStart(arg_register = 9);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 20;
                        var3 = var6[var3];
                        var8 = var5.bind(var2)(var3);
                        var5 = var8.captureBillingException;
                        var3 = {};
                        var12 = {};
                        var10 = var7;
                        var13 = var10.productId;
                        var12.productId = var13;
                        var3.tags = var12;
                        var3 = var5.bind(var8)(var9, var3);
                        var8 = _closure1_slot17;
                        var5 = var8.error;
                        var15 = var10.productId;
                        var14 = var9.message;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var13 = var3.concat;
                        var12 = '[handlePurchaseUpdated] Error verifying purchase ';
                        var3 = ': ';
                        var3 = var13.bind(var12)(var15, var3, var14);
                        var3 = var5.bind(var8)(var3);
                        var5 = _closure1_slot1;
                        var3 = 14;
                        var3 = var6[var3];
                        var12 = var5.bind(var2)(var3);
                        var8 = var12.dispatch;
                        var3 = {};
                        var13 = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                        var3.type = var13;
                        var13 = var10.productId;
                        var3.productId = var13;
                        var3 = var8.bind(var12)(var3);
                        var3 = 22;
                        var3 = var6[var3];
                        var8 = var5.bind(var2)(var3);
                        var6 = var8.track;
                        var3 = _closure1_slot13;
                        var5 = var3.GPLAY_PURCHASE_FAILED;
                        var3 = {};
                        var25 = var11;
                        var26 = var3;
                        var11 = copyDataProperties(var26, var25);
                        var12 = 'handlePurchaseUpdated';
                        var11 = 'location';
                        var3[var11] = var12;
                        var12 = var10.productId;
                        var11 = 'product_id';
                        var3[var11] = var12;
                        var11 = var10.purchaseToken;
                        var10 = 'purchase_token';
                        var3[var10] = var11;
                        var10 = var9.message;
                        var9 = 'error';
                        var3[var9] = var10;
                        var3 = var6.bind(var8)(var5, var3);
                    case 1860: // try_end7
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var8 = 'GPLAY_VERIFICATION_END';
                        var3.type = var8;
                        var8 = var7;
                        var8 = var8.productId;
                        var3.productId = var8;
                        var3 = var5.bind(var6)(var3);
                        _fun58064_ip = 1975;
                        continue _fun58064;
                    case 1918: // catch_target4 // catch_target5 // catch_target6 // catch_target7
                        CatchBlockStart(arg_register = 3);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'GPLAY_VERIFICATION_END';
                        var4.type = var8;
                        var7 = var7.productId;
                        var4.productId = var7;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
                    case 1975:
                        return var2;
                    case 1978:
                        return var1;
                    case 1981:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58068: for (var _fun58068_ip = 0;;) switch (_fun58068_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58068_ip = 156;
                            continue _fun58068
                        }
                    case 10:
                        var1 = arg0;
                        var7 = var1.downgradeCommand;
                        var3 = undefined;
                        SaveGenerator(address = 27);
                    case 25:
                        return var3;
                    case 27:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58068_ip = 153;
                            continue _fun58068
                        }
                    case 33:
                        var4 = _closure1_slot12;
                        var4 = var4.EXECUTE;
                        if (!(var4 !== var7)) {
                            _fun58068_ip = 126;
                            continue _fun58068
                        }
                    case 50:
                        var4 = _closure1_slot12;
                        var4 = var4.CLEAR;
                        if (!(var4 !== var7)) {
                            _fun58068_ip = 116;
                            continue _fun58068
                        }
                    case 64:
                        var4 = global;
                        var6 = var4.Error;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'Invalid downgrade state ';
                        var8 = var5.bind(var4)(var7);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var9 = var5;
                        var4 = new var9[var6](var8, var7);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 116:
                        var2 = _closure1_slot32;
                        var2 = var2.bind(var3)();
                        _fun58068_ip = 147;
                        continue _fun58068;
                    case 126:
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot31;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 141);
                    case 139:
                        return var2;
                    case 141:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58068_ip = 150;
                            continue _fun58068
                        }
                    case 147:
                        return var3;
                    case 150:
                        return var2;
                    case 153:
                        return var1;
                    case 156:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58072: for (var _fun58072_ip = 0;;) switch (_fun58072_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58072_ip = 610;
                            continue _fun58072
                        }
                    case 10:
                        var4 = undefined;
                        var9 = undefined;
                        var3 = _closure1_slot9;
                        var1 = var3.getPendingDowngrade;
                        var1 = var1.bind(var3)();
                        var9 = var1;
                        var10 = null;
                        if (!(var10 != var1)) {
                            _fun58072_ip = 559;
                            continue _fun58072
                        }
                    case 45: // try_start_0 // try_start_1
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var6 = 14;
                        var1 = var5[var6];
                        var8 = var3.bind(var4)(var1);
                        var3 = var8.dispatch;
                        var1 = {
                            'type': 'GPLAY_UPDATE_IS_DOWNGRADING',
                            'isDowngrading': true
                        };
                        var1 = var3.bind(var8)(var1);
                        var3 = _closure1_slot0;
                        var1 = 15;
                        var1 = var5[var1];
                        var5 = var3.bind(var4)(var1);
                        var3 = var5.downgradeSubscription;
                        var1 = var9;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 123);
                    case 121:
                        return var1;
                    case 123:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58072_ip = 204;
                            continue _fun58072
                        }
                    case 129:
                        var3 = _closure1_slot32;
                        var3 = var3.bind(var4)();
                        var3 = _closure1_slot33;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 149);
                    case 147:
                        return var3;
                    case 149:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun58072_ip = 160;
                            continue _fun58072
                        }
                    case 155: // try_end0
                        _fun58072_ip = 515;
                        continue _fun58072;
                    case 160: // try_end1
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var6];
                        var11 = var8.bind(var4)(var5);
                        var8 = var11.dispatch;
                        var5 = {
                            'type': 'GPLAY_UPDATE_IS_DOWNGRADING',
                            'isDowngrading': false
                        };
                        var5 = var8.bind(var11)(var5);
                        return var3;
                    case 204:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.dispatch;
                        var3 = {
                            'type': 'GPLAY_UPDATE_IS_DOWNGRADING',
                            'isDowngrading': false
                        };
                        var3 = var5.bind(var6)(var3);
                        return var1;
                    case 248: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var7 = var6;
                        var14 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 20;
                        var1 = var5[var1];
                        var3 = var14.bind(var4)(var1);
                        var1 = var3.captureBillingException;
                        var1 = var1.bind(var3)(var6);
                        var3 = _closure1_slot1;
                        var1 = 23;
                        var1 = var5[var1];
                        var8 = var3.bind(var4)(var1);
                        var6 = var8.show;
                        var1 = {};
                        var11 = 24;
                        var12 = var5[var11];
                        var12 = var14.bind(var4)(var12);
                        var15 = var12.intl;
                        var13 = var15.string;
                        var12 = var5[var11];
                        var12 = var14.bind(var4)(var12);
                        var12 = var12.t;
                        var12 = var12["U+H+kd"];
                        var12 = var13.bind(var15)(var12);
                        var1.title = var12;
                        var12 = var5[var11];
                        var12 = var14.bind(var4)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var5[var11];
                        var11 = var14.bind(var4)(var11);
                        var11 = var11.t;
                        var11 = var11.LFFx5G;
                        var11 = var12.bind(var13)(var11);
                        var1.body = var11;
                        var1 = var6.bind(var8)(var1);
                        var1 = 22;
                        var1 = var5[var1];
                        var6 = var3.bind(var4)(var1);
                        var5 = var6.track;
                        var1 = _closure1_slot13;
                        var3 = var1.GPLAY_PURCHASE_FAILED;
                        var1 = {};
                        var8 = 'executePendingDowngrade';
                        var1.location = var8;
                        var8 = var9;
                        var11 = var10 == var8;
                        var8 = undefined;
                        if (var11) {
                            _fun58072_ip = 472;
                            continue _fun58072
                        }
                    case 463:
                        var11 = var9;
                        var8 = var11.newSubscriptionSkuId;
                    case 472:
                        var1.product_id = var8;
                        var8 = var9;
                        var10 = var10 == var8;
                        var8 = undefined;
                        if (var10) {
                            _fun58072_ip = 495;
                            continue _fun58072
                        }
                    case 489:
                        var8 = var9.purchaseToken;
                    case 495:
                        var1.purchase_token = var8;
                        var7 = var7.message;
                        var1.error = var7;
                        var1 = var5.bind(var6)(var3, var1);
                    case 515: // try_end2
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 14;
                        var1 = var5[var1];
                        var5 = var3.bind(var4)(var1);
                        var3 = var5.dispatch;
                        var1 = {
                            'type': 'GPLAY_UPDATE_IS_DOWNGRADING',
                            'isDowngrading': false
                        };
                        var1 = var3.bind(var5)(var1);
                    case 559:
                        return var4;
                    case 562: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 14;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {
                            'type': 'GPLAY_UPDATE_IS_DOWNGRADING',
                            'isDowngrading': false
                        };
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 610:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'GPLAY_UPDATE_PENDING_DOWNGRADE',
            'pendingDowngrade': null
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot34;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58077: for (var _fun58077_ip = 0;;) switch (_fun58077_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58077_ip = 201;
                            continue _fun58077
                        }
                    case 12:
                        var7 = undefined;
                        var _closure4_slot0 = var7;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 21;
                        var1 = var5[var1];
                        var4 = var4.bind(var7)(var1);
                        var1 = var4.fetchSubscriptions;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 55);
                    case 53:
                        return var1;
                    case 55:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58077_ip = 198;
                            continue _fun58077
                        }
                    case 64:
                        var5 = _closure1_slot8;
                        var4 = var5.getPremiumTypeSubscription;
                        var5 = var4.bind(var5)();
                        _closure4_slot0 = var5;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun58077_ip = 113;
                            continue _fun58077
                        }
                    case 88:
                        var4 = _closure1_slot5;
                        var4 = var4.bind(var7)();
                        var4 = _closure1_slot6;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openLazy;
                            var1 = {};
                            var4 = function() {
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var1 = 26;
                                var1 = var0[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = 25;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var2 = var2.bind(var3)(var1, var0);
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var1 = var1.default;
                                    var _closure7_slot0 = var1;
                                    var0 = function(arg0) { // Environment: var0
                                        var4 = arg0;
                                        var _closure8_slot0 = var4;
                                        var3 = _closure1_slot16;
                                        var2 = _closure7_slot0;
                                        var1 = {};
                                        var7 = var1;
                                        var6 = var4;
                                        var4 = copyDataProperties(var7, var6);
                                        var5 = _closure4_slot0;
                                        var4 = 'subscription';
                                        var1[var4] = var5;
                                        var4 = function() {
                                            var1 = _closure8_slot0;
                                            var0 = var1.onClose;
                                            var0 = var0.bind(var1)();
                                            var3 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var0 = 27;
                                            var2 = var5[var0];
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.popWithKey;
                                            var4 = _closure1_slot0;
                                            var1 = 28;
                                            var1 = var5[var1];
                                            var1 = var4.bind(var0)(var1);
                                            var1 = var1.PREMIUM_KEY;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var0 = 'onClose';
                                        var1[var0] = var4;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1.importer = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3 = var4.bind(var7)(var3);
                        return var7;
                    case 113:
                        var3 = global;
                        var4 = var3.Error;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 24;
                        var3 = var8[var2];
                        var3 = var6.bind(var7)(var3);
                        var5 = var3.intl;
                        var3 = var5.string;
                        var2 = var8[var2];
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.t;
                        var2 = var2.PjfUXe;
                        var9 = var3.bind(var5)(var2);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var10 = var3;
                        var2 = new var10[var4](var9, var8);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 198:
                        return var1;
                    case 201:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot34 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot36;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58086: for (var _fun58086_ip = 0;;) switch (_fun58086_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58086_ip = 134;
                            continue _fun58086
                        }
                    case 10:
                        var1 = arg0;
                        var5 = var1.state;
                        var2 = undefined;
                        SaveGenerator(address = 24);
                    case 22:
                        return var2;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58086_ip = 131;
                            continue _fun58086
                        }
                    case 30:
                        var6 = _closure1_slot9;
                        var4 = var6.isReady;
                        var4 = var4.bind(var6)();
                        if (!var4) {
                            _fun58086_ip = 128;
                            continue _fun58086
                        }
                    case 50:
                        var6 = _closure1_slot7;
                        var4 = var6.isAuthenticated;
                        var4 = var4.bind(var6)();
                        if (!var4) {
                            _fun58086_ip = 128;
                            continue _fun58086
                        }
                    case 67:
                        var4 = _closure1_slot14;
                        var4 = var4.ACTIVE;
                        if (!(var5 === var4)) {
                            _fun58086_ip = 128;
                            continue _fun58086
                        }
                    case 81: // try_start_0
                        var5 = _closure1_slot18;
                        var4 = var5.loadPurchases;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address = 101);
                    case 99:
                        return var4;
                    case 101:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun58086_ip = 109;
                            continue _fun58086
                        }
                    case 107: // try_end0
                        _fun58086_ip = 128;
                        continue _fun58086;
                    case 109:
                        return var4;
                    case 112: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot18;
                        var3 = var4.open;
                        var3 = var3.bind(var4)();
                    case 128:
                        return var2;
                    case 131:
                        return var1;
                    case 134:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot36 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var6 = var5[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var6);
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.NativeEventEmitter;
    var1 = var1.NativeModules;
    var6 = 3;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var9 = var6.setPaymentSuccess;
    var _closure1_slot5 = var9;
    var6 = var6.showOldPaymentFlowSuccess;
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.useGPlayAnalyticsStore;
    var _closure1_slot10 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var9 = var6.GPlayConnectionState;
    var _closure1_slot11 = var9;
    var6 = var6.GPlayDowngradeCommand;
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot13 = var9;
    var6 = var6.AppStates;
    var _closure1_slot14 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.SubscriptionPlanInfo;
    var _closure1_slot15 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot16 = var6;
    var6 = 13;
    var6 = var5[var6];
    var9 = var8.bind(var0)(var6);
    var6 = var9.prototype;
    var8 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var12 = 'GPlayManager.android';
    var13 = var8;
    var6 = new var13[var9](var12, var11);
    var6 = var6 instanceof Object ? var6 : var8;
    var _closure1_slot17 = var6;
    var1 = var1.BillingManager;
    var _closure1_slot18 = var1;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var13 = var6;
    var12 = var1;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot19 = var1;
    var6 = {};
    var _closure1_slot20 = var6;
    var1 = null;
    var _closure1_slot21 = var1;
    var _closure1_slot22 = var1;
    var _closure1_slot23 = var1;
    var _closure1_slot24 = var1;
    var1 = {};
    var1.giftInfoOptionsCache = var6;
    var6 = function() {
        var2 = _closure1_slot18;
        var0 = var2.open;
        var0 = var0.bind(var2)();
        var4 = _closure1_slot19;
        var3 = var4.addListener;
        var2 = _closure1_slot25;
        var0 = 'billing-manager-connection-state-updated';
        var0 = var3.bind(var4)(var0, var2);
        _closure1_slot21 = var0;
        var3 = var4.addListener;
        var2 = _closure1_slot26;
        var0 = 'billing-manager-purchase-state-updated';
        var0 = var3.bind(var4)(var0, var2);
        _closure1_slot22 = var0;
        var3 = var4.addListener;
        var2 = _closure1_slot27;
        var0 = 'billing-manager-purchase-updated';
        var0 = var3.bind(var4)(var0, var2);
        _closure1_slot23 = var0;
        var3 = var4.addListener;
        var2 = _closure1_slot29;
        var0 = 'billing-manager-downgrade-command';
        var0 = var3.bind(var4)(var0, var2);
        _closure1_slot24 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 14;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.subscribe;
        var2 = _closure1_slot35;
        var1 = 'APP_STATE_UPDATE';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var1.initialize = var6;
    var3 = function() {
        _fun58088: for (var _fun58088_ip = 0;;) switch (_fun58088_ip) {
            case 0:
                var2 = _closure1_slot18;
                var0 = var2.close;
                var0 = var0.bind(var2)();
                var3 = _closure1_slot21;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun58088_ip = 37;
                    continue _fun58088
                }
            case 27:
                var2 = var3.remove;
                var2 = var2.bind(var3)();
            case 37:
                var3 = _closure1_slot22;
                if (!(var0 != var3)) {
                    _fun58088_ip = 55;
                    continue _fun58088
                }
            case 45:
                var2 = var3.remove;
                var2 = var2.bind(var3)();
            case 55:
                var3 = _closure1_slot23;
                if (!(var0 != var3)) {
                    _fun58088_ip = 73;
                    continue _fun58088
                }
            case 63:
                var2 = var3.remove;
                var2 = var2.bind(var3)();
            case 73:
                var2 = _closure1_slot24;
                if (!(var0 != var2)) {
                    _fun58088_ip = 91;
                    continue _fun58088
                }
            case 81:
                var0 = var2.remove;
                var0 = var0.bind(var2)();
            case 91:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 14;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.unsubscribe;
                var2 = _closure1_slot35;
                var1 = 'APP_STATE_UPDATE';
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var1.terminate = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gplay/native/GPlayManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 7012, 7013, 1216, 3078, 4577, 7035, 4578, 660, 1615, 33, 3, 806, 7070, 1215, 4574, 3006, 7071, 3086, 3404, 795, 3897, 1234, 7072, 1307, 4527, 7008, 2]);