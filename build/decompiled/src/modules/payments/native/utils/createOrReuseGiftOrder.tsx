// modules/payments/native/utils/createOrReuseGiftOrder.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionPlanInfo;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PaymentGateways;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'createOrReuseGiftOrder';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/payments/native/utils/createOrReuseGiftOrder.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun74780: for (var _fun74780_ip = 0;;) switch (_fun74780_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                            if (var4) {
                                _fun74780_ip = 498;
                                continue _fun74780
                            }
                        case 13:
                            var3 = var1.planId;
                            var9 = var1.recipientUserId;
                            var6 = undefined;
                            var2 = undefined;
                            var5 = undefined;
                            SaveGenerator(address = 35);
                        case 33:
                            return var6;
                        case 35:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun74780_ip = 495;
                                continue _fun74780
                            }
                        case 44:
                            var8 = _closure1_slot5;
                            var7 = var3;
                            var8 = var8[var7];
                            var2 = var8;
                            var7 = null;
                            if (!(var7 != var8)) {
                                _fun74780_ip = 440;
                                continue _fun74780
                            }
                        case 70:
                            var5 = var2.skuId;
                        case 76: // try_start_0
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var13 = 5;
                            var2 = var12[var13];
                            var8 = var11.bind(var6)(var2);
                            var7 = var8.getOrCreateOrder;
                            var2 = {};
                            var10 = var5;
                            var2.skuId = var10;
                            var10 = 6;
                            var10 = var12[var10];
                            var11 = var11.bind(var6)(var10);
                            var10 = var11.isAndroid;
                            var10 = var10.bind(var11)();
                            var11 = _closure1_slot6;
                            if (var10) {
                                _fun74780_ip = 149;
                                continue _fun74780
                            }
                        case 141:
                            var10 = var11.APPLE;
                            _fun74780_ip = 155;
                            continue _fun74780;
                        case 149:
                            var10 = var11.GOOGLE;
                        case 155:
                            var2.paymentGateway = var10;
                            var2.recipientUserId = var9;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var11 = var9[var13];
                            var11 = var10.bind(var6)(var11);
                            var11 = var11.ItemPurchaseType;
                            var11 = var11.ONE_TIME;
                            var2.purchaseType = var11;
                            var11 = true;
                            var2.isGift = var11;
                            var12 = _closure1_slot1;
                            var11 = 7;
                            var11 = var9[var11];
                            var11 = var12.bind(var6)(var11);
                            var12 = var11.bind(var6)();
                            var11 = var12.utc;
                            var12 = var11.bind(var12)();
                            var11 = var12.subtract;
                            var9 = var9[var13];
                            var9 = var10.bind(var6)(var9);
                            var10 = var9.DRAFT_ORDER_LOOKBACK_DAYS;
                            var9 = 'days';
                            var10 = var11.bind(var12)(var10, var9);
                            var9 = var10.toISOString;
                            var9 = var9.bind(var10)();
                            var2.createdAfter = var9;
                            var9 = var3;
                            var2.subscriptionPlanId = var9;
                            var2 = var7.bind(var8)(var2);
                            SaveGenerator(address = 299);
                        case 297:
                            return var2;
                        case 299:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                            if (var7) {
                                _fun74780_ip = 308;
                                continue _fun74780
                            }
                        case 305: // try_end0
                            return var2;
                        case 308:
                            return var2;
                        case 311: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var10 = _closure1_slot7;
                            var9 = var10.error;
                            var7 = {};
                            var7.error = var2;
                            var8 = var5;
                            var7.skuId = var8;
                            var11 = _closure2_slot0;
                            var7.location = var11;
                            var5 = 'Failed to create order for gift purchase';
                            var5 = var9.bind(var10)(var5, var7);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 8;
                            var4 = var7[var4];
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.captureBillingException;
                            var4 = {};
                            var7 = {};
                            var7.skuId = var8;
                            var8 = global;
                            var8 = var8.HermesInternal;
                            var10 = var8.concat;
                            var9 = '';
                            var8 = '_createOrder';
                            var8 = var10.bind(var9)(var11, var8);
                            var7.source = var8;
                            var4.tags = var7;
                            var4 = var5.bind(var6)(var2, var4);
                            throw var2;
                        case 440:
                            var2 = global;
                            var4 = var2.Error;
                            var5 = var3;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = 'Invalid plan id: ';
                            var15 = var3.bind(var2)(var5);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var16 = var3;
                            var2 = new var16[var4](var15, var14);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 495:
                            return var1;
                        case 498:
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
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCreateOrReuseGiftOrder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1615, 483, 3, 7069, 478, 3004, 3084, 2]);