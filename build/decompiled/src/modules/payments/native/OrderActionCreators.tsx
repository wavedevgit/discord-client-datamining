// modules/payments/native/OrderActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var11;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58120: for (var _fun58120_ip = 0;;) switch (_fun58120_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58120_ip = 222;
                            continue _fun58120
                        }
                    case 10:
                        var2 = arg0;
                    case 13: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 3;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var8 = _closure1_slot4;
                        var7 = var8.ORDER_GET;
                        var6 = var2;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = true;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var1;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58120_ip = 109;
                            continue _fun58120
                        }
                    case 93:
                        var4 = var1.body;
                        var3 = var4;
                        if (var4) {
                            _fun58120_ip = 106;
                            continue _fun58120
                        }
                    case 104:
                        var3 = null;
                    case 106: // try_end0
                        return var3;
                    case 109:
                        return var1;
                    case 112: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var7 = _closure1_slot5;
                        var5 = var7.error;
                        var3 = {};
                        var3.error = var4;
                        var6 = var2;
                        var3.orderId = var6;
                        var2 = 'failed to fetch order';
                        var2 = var5.bind(var7)(var2, var3);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureBillingException;
                        var1 = {};
                        var5 = {};
                        var7 = 'OrderActionCreators_getOrder';
                        var5.source = var7;
                        var1.tags = var5;
                        var5 = {};
                        var5.orderId = var6;
                        var1.extra = var5;
                        var1 = var2.bind(var3)(var4, var1);
                        var1 = null;
                        return var1;
                    case 222:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58124: for (var _fun58124_ip = 0;;) switch (_fun58124_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58124_ip = 357;
                            continue _fun58124
                        }
                    case 10:
                        var3 = arg0;
                        var4 = undefined;
                        var7 = undefined;
                    case 17: // try_start_0
                        var7 = {};
                        var1 = var3;
                        var2 = null;
                        var5 = var2 == var1;
                        var1 = undefined;
                        if (var5) {
                            _fun58124_ip = 41;
                            continue _fun58124
                        }
                    case 33:
                        var5 = var3;
                        var1 = var5.status;
                    case 41:
                        if (!(var2 != var1)) {
                            _fun58124_ip = 70;
                            continue _fun58124
                        }
                    case 45:
                        var5 = var7;
                        var1 = var3;
                        var6 = var1.status;
                        var1 = new Array(1);
                        var1[0] = var6;
                        var5.statuses = var1;
                    case 70:
                        var1 = var3;
                        var5 = var2 == var1;
                        var1 = undefined;
                        if (var5) {
                            _fun58124_ip = 91;
                            continue _fun58124
                        }
                    case 82:
                        var5 = var3;
                        var1 = var5.skuId;
                    case 91:
                        if (!(var2 != var1)) {
                            _fun58124_ip = 113;
                            continue _fun58124
                        }
                    case 95:
                        var5 = var7;
                        var1 = var3;
                        var1 = var1.skuId;
                        var5.sku_id = var1;
                    case 113:
                        var1 = var3;
                        var5 = var2 == var1;
                        var1 = undefined;
                        if (var5) {
                            _fun58124_ip = 134;
                            continue _fun58124
                        }
                    case 125:
                        var5 = var3;
                        var1 = var5.createdAfter;
                    case 134:
                        if (!(var2 != var1)) {
                            _fun58124_ip = 158;
                            continue _fun58124
                        }
                    case 138:
                        var2 = var7;
                        var1 = var3;
                        var1 = var1.createdAfter;
                        var2.created_after = var1;
                    case 158:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 3;
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var5 = var6.get;
                        var1 = {};
                        var8 = _closure1_slot4;
                        var8 = var8.ORDER_LIST;
                        var1.url = var8;
                        var1.query = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 227);
                    case 225:
                        return var1;
                    case 227:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun58124_ip = 251;
                            continue _fun58124
                        }
                    case 233:
                        var5 = var1.body;
                        var2 = var5;
                        if (var5) {
                            _fun58124_ip = 248;
                            continue _fun58124
                        }
                    case 244:
                        var2 = new Array(0);
                    case 248: // try_end0
                        return var2;
                    case 251:
                        return var1;
                    case 254: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var8 = _closure1_slot5;
                        var7 = var8.error;
                        var5 = {};
                        var5.error = var1;
                        var6 = var3;
                        var5.options = var6;
                        var3 = 'failed to fetch orders';
                        var3 = var7.bind(var8)(var3, var5);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.captureBillingException;
                        var2 = {};
                        var5 = {};
                        var7 = 'OrderActionCreators_getOrders';
                        var5.source = var7;
                        var2.tags = var5;
                        var5 = {};
                        var5.options = var6;
                        var2.extra = var5;
                        var2 = var3.bind(var4)(var1, var2);
                        throw var1;
                    case 357:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58128: for (var _fun58128_ip = 0;;) switch (_fun58128_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58128_ip = 845;
                            continue _fun58128
                        }
                    case 13:
                        var15 = var1.skuId;
                        var13 = var1.paymentGateway;
                        var17 = var1.recipientUserId;
                        var14 = var1.purchaseType;
                        var11 = var1.isGift;
                        var12 = var1.giftInfo;
                        var3 = var1.subscriptionPlanId;
                        var5 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        SaveGenerator(address = 69);
                    case 67:
                        return var5;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58128_ip = 842;
                            continue _fun58128
                        }
                    case 78:
                        var18 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var6 = 5;
                        var16 = var16[var6];
                        var19 = var18.bind(var5)(var16);
                        var18 = var19.dispatch;
                        var16 = {};
                        var20 = 'ORDER_CREATE_START';
                        var16.type = var20;
                        var16 = var18.bind(var19)(var16);
                    case 123: // try_start_0
                        var16 = var11;
                        if (!var16) {
                            _fun58128_ip = 399;
                            continue _fun58128
                        }
                    case 132:
                        var16 = {};
                        var16.recipient_id = var17;
                        var10 = var16;
                        var16 = var12;
                        var17 = null;
                        var18 = var17 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun58128_ip = 165;
                            continue _fun58128
                        }
                    case 156:
                        var18 = var12;
                        var16 = var18.gift_style;
                    case 165:
                        if (!(var17 != var16)) {
                            _fun58128_ip = 187;
                            continue _fun58128
                        }
                    case 169:
                        var18 = var10;
                        var16 = var12;
                        var16 = var16.gift_style;
                        var18.gift_style = var16;
                    case 187:
                        var16 = var12;
                        var18 = var17 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun58128_ip = 208;
                            continue _fun58128
                        }
                    case 199:
                        var18 = var12;
                        var16 = var18.emoji_id;
                    case 208:
                        if (!(var17 != var16)) {
                            _fun58128_ip = 230;
                            continue _fun58128
                        }
                    case 212:
                        var18 = var10;
                        var16 = var12;
                        var16 = var16.emoji_id;
                        var18.emoji_id = var16;
                    case 230:
                        var16 = var12;
                        var18 = var17 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun58128_ip = 251;
                            continue _fun58128
                        }
                    case 242:
                        var18 = var12;
                        var16 = var18.emoji_name;
                    case 251:
                        if (!(var17 != var16)) {
                            _fun58128_ip = 273;
                            continue _fun58128
                        }
                    case 255:
                        var18 = var10;
                        var16 = var12;
                        var16 = var16.emoji_name;
                        var18.emoji_name = var16;
                    case 273:
                        var16 = var12;
                        var18 = var17 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun58128_ip = 294;
                            continue _fun58128
                        }
                    case 285:
                        var18 = var12;
                        var16 = var18.sound_id;
                    case 294:
                        if (!(var17 != var16)) {
                            _fun58128_ip = 316;
                            continue _fun58128
                        }
                    case 298:
                        var18 = var10;
                        var16 = var12;
                        var16 = var16.sound_id;
                        var18.sound_id = var16;
                    case 316:
                        var16 = var12;
                        var18 = var17 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun58128_ip = 337;
                            continue _fun58128
                        }
                    case 328:
                        var18 = var12;
                        var16 = var18.reward_sku_ids;
                    case 337:
                        if (!(var17 != var16)) {
                            _fun58128_ip = 359;
                            continue _fun58128
                        }
                    case 341:
                        var18 = var10;
                        var16 = var12;
                        var16 = var16.reward_sku_ids;
                        var18.reward_sku_ids = var16;
                    case 359:
                        var16 = var12;
                        var18 = var17 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun58128_ip = 380;
                            continue _fun58128
                        }
                    case 371:
                        var18 = var12;
                        var16 = var18.custom_message_contents;
                    case 380:
                        if (!(var17 != var16)) {
                            _fun58128_ip = 399;
                            continue _fun58128
                        }
                    case 384:
                        var16 = var10;
                        var12 = var12.custom_message_contents;
                        var16.custom_message_contents = var12;
                    case 399:
                        var12 = {};
                        var12.sku_id = var15;
                        var15 = 1;
                        var12.quantity = var15;
                        var12.purchase_type = var14;
                        var9 = var12;
                        var14 = var3;
                        var12 = null;
                        if (!(var12 != var14)) {
                            _fun58128_ip = 440;
                            continue _fun58128
                        }
                    case 431:
                        var12 = var9;
                        var12.subscription_plan_id = var3;
                    case 440:
                        var3 = {};
                        var12 = var9;
                        var9 = new Array(1);
                        var9[0] = var12;
                        var3.order_line_items = var9;
                        var9 = {};
                        var12 = var13;
                        var9.payment_gateway = var12;
                        var3.billing_facet = var9;
                        var7 = var3;
                        var3 = var11;
                        if (!var3) {
                            _fun58128_ip = 503;
                            continue _fun58128
                        }
                    case 482:
                        var9 = var7;
                        var3 = {};
                        var3.is_gift = var11;
                        var3.gift_customization = var10;
                        var9.gifting_facet = var3;
                    case 503:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 3;
                        var3 = var10[var3];
                        var3 = var9.bind(var5)(var3);
                        var10 = var3.HTTP;
                        var9 = var10.post;
                        var3 = {};
                        var11 = _closure1_slot4;
                        var11 = var11.ORDER_CREATE;
                        var3.url = var11;
                        var11 = var7;
                        var3.body = var11;
                        var11 = true;
                        var3.rejectWithError = var11;
                        var3 = var9.bind(var10)(var3);
                        SaveGenerator(address = 572);
                    case 570:
                        return var3;
                    case 572:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                        if (var9) {
                            _fun58128_ip = 699;
                            continue _fun58128
                        }
                    case 578:
                        var11 = var3.body;
                        var8 = var11;
                        var12 = _closure1_slot5;
                        var10 = var12.info;
                        var9 = {};
                        var14 = var11.id;
                        var9.orderId = var14;
                        var9.paymentGateway = var13;
                        var9.body = var7;
                        var7 = 'created order';
                        var7 = var10.bind(var12)(var7, var9);
                        var9 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var10 = var9.bind(var5)(var7);
                        var9 = var10.dispatch;
                        var7 = {};
                        var12 = 'ORDER_CREATE_SUCCESS';
                        var7.type = var12;
                        var12 = var11.id;
                        var7.orderId = var12;
                        var7.order = var11;
                        var7 = var9.bind(var10)(var7);
                        SaveGenerator(address = 687);
                    case 685:
                        return var7;
                    case 687:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 9);
                        if (var9) {
                            _fun58128_ip = 696;
                            continue _fun58128
                        }
                    case 693: // try_end0
                        return var8;
                    case 696:
                        return var7;
                    case 699:
                        return var3;
                    case 702: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = var3;
                        var9 = _closure1_slot5;
                        var8 = var9.error;
                        var7 = {};
                        var7.response = var3;
                        var3 = 'failed to create order';
                        var3 = var8.bind(var9)(var3, var7);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var6 = 'ORDER_CREATE_FAIL';
                        var2.type = var6;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 778);
                    case 776:
                        return var2;
                    case 778:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58128_ip = 839;
                            continue _fun58128
                        }
                    case 784:
                        var3 = global;
                        var5 = var3.Error;
                        var6 = var4;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'Failed to create order: ';
                        var22 = var4.bind(var3)(var6);
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var23 = var4;
                        var3 = new var23[var5](var22, var21);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 839:
                        return var2;
                    case 842:
                        return var1;
                    case 845:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58131: for (var _fun58131_ip = 0;;) switch (_fun58131_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58131_ip = 257;
                            continue _fun58131
                        }
                    case 13:
                        var8 = var1.skuId;
                        var14 = var1.paymentGateway;
                        var13 = var1.recipientUserId;
                        var12 = var1.purchaseType;
                        var4 = var1.isGift;
                        var11 = var1.giftInfo;
                        var6 = var1.createdAfter;
                        var10 = var1.subscriptionPlanId;
                        var9 = undefined;
                        SaveGenerator(address = 67);
                    case 65:
                        return var9;
                    case 67:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58131_ip = 254;
                            continue _fun58131
                        }
                    case 76:
                        var3 = _closure1_slot10;
                        var2 = {};
                        var7 = _closure1_slot6;
                        var7 = var7.DRAFT;
                        var2.status = var7;
                        var2.skuId = var8;
                        var2.createdAfter = var6;
                        var2 = var3.bind(var9)(var2);
                        SaveGenerator(address = 118);
                    case 116:
                        return var2;
                    case 118:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58131_ip = 251;
                            continue _fun58131
                        }
                    case 127:
                        var6 = var2.length;
                        var3 = 0;
                        if (!(!(var6 > var3))) {
                            _fun58131_ip = 200;
                            continue _fun58131
                        }
                    case 138:
                        var7 = _closure1_slot12;
                        var6 = {};
                        var6.skuId = var8;
                        var6.paymentGateway = var14;
                        var6.recipientUserId = var13;
                        var6.purchaseType = var12;
                        var6.isGift = var4;
                        var6.giftInfo = var11;
                        var6.subscriptionPlanId = var10;
                        var6 = var7.bind(var9)(var6);
                        SaveGenerator(address = 188);
                    case 186:
                        return var6;
                    case 188:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun58131_ip = 197;
                            continue _fun58131
                        }
                    case 194:
                        return var6;
                    case 197:
                        return var6;
                    case 200:
                        var3 = var2[var3];
                        var7 = _closure1_slot5;
                        var6 = var7.info;
                        var5 = {};
                        var9 = var3.id;
                        var5.orderId = var9;
                        var5.skuId = var8;
                        var5.isGift = var4;
                        var4 = 'reusing existing draft order';
                        var4 = var6.bind(var7)(var4, var5);
                        return var3;
                    case 251:
                        return var2;
                    case 254:
                        return var1;
                    case 257:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58134: for (var _fun58134_ip = 0;;) switch (_fun58134_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58134_ip = 478;
                            continue _fun58134
                        }
                    case 13:
                        var11 = var1.orderId;
                        var7 = var1.orderLineItemId;
                        var14 = var1.subscriptionPlanId;
                        var5 = undefined;
                        var8 = undefined;
                        SaveGenerator(address = 39);
                    case 37:
                        return var5;
                    case 39:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58134_ip = 475;
                            continue _fun58134
                        }
                    case 48:
                        var9 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var6 = 5;
                        var2 = var2[var6];
                        var10 = var9.bind(var5)(var2);
                        var9 = var10.dispatch;
                        var2 = {};
                        var12 = 'ORDER_UPDATE_START';
                        var2.type = var12;
                        var2 = var9.bind(var10)(var2);
                    case 93: // try_start_0
                        var8 = {};
                        var9 = var14;
                        var2 = null;
                        if (!(var2 != var9)) {
                            _fun58134_ip = 116;
                            continue _fun58134
                        }
                    case 104:
                        var9 = var8;
                        var2 = var14;
                        var9.subscription_plan_id = var2;
                    case 116:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 3;
                        var2 = var10[var2];
                        var2 = var9.bind(var5)(var2);
                        var10 = var2.HTTP;
                        var9 = var10.patch;
                        var2 = {};
                        var16 = _closure1_slot4;
                        var15 = var16.ORDER_PATCH_LINE_ITEM;
                        var13 = var11;
                        var12 = var7;
                        var12 = var15.bind(var16)(var13, var12);
                        var2.url = var12;
                        var12 = var8;
                        var2.body = var12;
                        var12 = true;
                        var2.rejectWithError = var12;
                        var2 = var9.bind(var10)(var2);
                        SaveGenerator(address = 197);
                    case 195:
                        return var2;
                    case 197:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 9);
                        if (var9) {
                            _fun58134_ip = 307;
                            continue _fun58134
                        }
                    case 203:
                        var13 = _closure1_slot5;
                        var10 = var13.info;
                        var9 = {};
                        var12 = var11;
                        var9.orderId = var12;
                        var15 = var7;
                        var9.orderLineItemId = var15;
                        var9.body = var8;
                        var8 = 'updated order line item';
                        var8 = var10.bind(var13)(var8, var9);
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var6];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var13 = 'ORDER_UPDATE_SUCCESS';
                        var8.type = var13;
                        var8.orderId = var12;
                        var8 = var9.bind(var10)(var8);
                        SaveGenerator(address = 295);
                    case 293:
                        return var8;
                    case 295:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 9);
                        if (var9) {
                            _fun58134_ip = 304;
                            continue _fun58134
                        }
                    case 301: // try_end0
                        return var5;
                    case 304:
                        return var8;
                    case 307:
                        return var2;
                    case 310: // catch_target0
                        CatchBlockStart(arg_register = 12);
                        var3 = var12;
                        var9 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var8 = 4;
                        var8 = var2[var8];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.captureBillingException;
                        var8 = {};
                        var13 = {};
                        var15 = 'OrderActionCreators_patchOrderLineItem';
                        var13.source = var15;
                        var8.tags = var13;
                        var13 = {};
                        var13.orderId = var11;
                        var13.orderLineItemId = var7;
                        var13.subscriptionPlanId = var14;
                        var8.extra = var13;
                        var8 = var9.bind(var10)(var12, var8);
                        var10 = _closure1_slot5;
                        var9 = var10.error;
                        var8 = {};
                        var8.error = var12;
                        var8.orderId = var11;
                        var8.orderLineItemId = var7;
                        var7 = 'failed to update order line item id';
                        var7 = var9.bind(var10)(var7, var8);
                        var4 = _closure1_slot1;
                        var2 = var2[var6];
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.dispatch;
                        var2 = {};
                        var6 = 'ORDER_UPDATE_FAIL';
                        var2.type = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 464);
                    case 462:
                        return var2;
                    case 464:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58134_ip = 472;
                            continue _fun58134
                        }
                    case 470:
                        throw var3;
                    case 472:
                        return var2;
                    case 475:
                        return var1;
                    case 478:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58137: for (var _fun58137_ip = 0;;) switch (_fun58137_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58137_ip = 685;
                            continue _fun58137
                        }
                    case 13:
                        var7 = var1.orderId;
                        var13 = var1.giftInfo;
                        var5 = undefined;
                        var8 = undefined;
                        var10 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var5;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58137_ip = 682;
                            continue _fun58137
                        }
                    case 44:
                        var9 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var6 = 5;
                        var2 = var2[var6];
                        var11 = var9.bind(var5)(var2);
                        var9 = var11.dispatch;
                        var2 = {};
                        var12 = 'ORDER_UPDATE_START';
                        var2.type = var12;
                        var2 = var9.bind(var11)(var2);
                    case 89: // try_start_0
                        var8 = {};
                        var2 = var13;
                        var9 = null;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 345;
                            continue _fun58137
                        }
                    case 103:
                        var10 = {};
                        var2 = var13;
                        var2 = var2.recipient_id;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 136;
                            continue _fun58137
                        }
                    case 118:
                        var11 = var10;
                        var2 = var13;
                        var2 = var2.recipient_id;
                        var11.recipient_id = var2;
                    case 136:
                        var2 = var13;
                        var2 = var2.gift_style;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 167;
                            continue _fun58137
                        }
                    case 149:
                        var11 = var10;
                        var2 = var13;
                        var2 = var2.gift_style;
                        var11.gift_style = var2;
                    case 167:
                        var2 = var13;
                        var2 = var2.emoji_id;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 198;
                            continue _fun58137
                        }
                    case 180:
                        var11 = var10;
                        var2 = var13;
                        var2 = var2.emoji_id;
                        var11.emoji_id = var2;
                    case 198:
                        var2 = var13;
                        var2 = var2.emoji_name;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 229;
                            continue _fun58137
                        }
                    case 211:
                        var11 = var10;
                        var2 = var13;
                        var2 = var2.emoji_name;
                        var11.emoji_name = var2;
                    case 229:
                        var2 = var13;
                        var2 = var2.sound_id;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 260;
                            continue _fun58137
                        }
                    case 242:
                        var11 = var10;
                        var2 = var13;
                        var2 = var2.sound_id;
                        var11.sound_id = var2;
                    case 260:
                        var2 = var13;
                        var2 = var2.reward_sku_ids;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 291;
                            continue _fun58137
                        }
                    case 273:
                        var11 = var10;
                        var2 = var13;
                        var2 = var2.reward_sku_ids;
                        var11.reward_sku_ids = var2;
                    case 291:
                        var2 = var13;
                        var2 = var2.custom_message_contents;
                        if (!(var9 != var2)) {
                            _fun58137_ip = 322;
                            continue _fun58137
                        }
                    case 304:
                        var9 = var10;
                        var2 = var13;
                        var2 = var2.custom_message_contents;
                        var9.custom_message_contents = var2;
                    case 322:
                        var9 = var8;
                        var2 = {};
                        var11 = true;
                        var2.is_gift = var11;
                        var2.gift_customization = var10;
                        var9.gifting_facet = var2;
                    case 345:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 3;
                        var2 = var10[var2];
                        var2 = var9.bind(var5)(var2);
                        var10 = var2.HTTP;
                        var9 = var10.patch;
                        var2 = {};
                        var14 = _closure1_slot4;
                        var12 = var14.ORDER_UPDATE;
                        var11 = var7;
                        var11 = var12.bind(var14)(var11);
                        var2.url = var11;
                        var11 = var8;
                        var2.body = var11;
                        var11 = true;
                        var2.rejectWithError = var11;
                        var2 = var9.bind(var10)(var2);
                        SaveGenerator(address = 422);
                    case 420:
                        return var2;
                    case 422:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 9);
                        if (var9) {
                            _fun58137_ip = 524;
                            continue _fun58137
                        }
                    case 428:
                        var12 = _closure1_slot5;
                        var10 = var12.info;
                        var9 = {};
                        var11 = var7;
                        var9.orderId = var11;
                        var9.body = var8;
                        var8 = 'updated order with gift customization';
                        var8 = var10.bind(var12)(var8, var9);
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var6];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var12 = 'ORDER_UPDATE_SUCCESS';
                        var8.type = var12;
                        var8.orderId = var11;
                        var8 = var9.bind(var10)(var8);
                        SaveGenerator(address = 512);
                    case 510:
                        return var8;
                    case 512:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 9);
                        if (var9) {
                            _fun58137_ip = 521;
                            continue _fun58137
                        }
                    case 518: // try_end0
                        return var5;
                    case 521:
                        return var8;
                    case 524:
                        return var2;
                    case 527: // catch_target0
                        CatchBlockStart(arg_register = 11);
                        var3 = var11;
                        var9 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var8 = 4;
                        var8 = var2[var8];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.captureBillingException;
                        var8 = {};
                        var12 = {};
                        var14 = 'OrderActionCreators_updateOrder';
                        var12.source = var14;
                        var8.tags = var12;
                        var12 = {};
                        var12.orderId = var7;
                        var12.giftInfo = var13;
                        var8.extra = var12;
                        var8 = var9.bind(var10)(var11, var8);
                        var10 = _closure1_slot5;
                        var9 = var10.error;
                        var8 = {};
                        var8.error = var11;
                        var8.orderId = var7;
                        var7 = 'failed to update order';
                        var7 = var9.bind(var10)(var7, var8);
                        var4 = _closure1_slot1;
                        var2 = var2[var6];
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.dispatch;
                        var2 = {};
                        var6 = 'ORDER_UPDATE_FAIL';
                        var2.type = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 671);
                    case 669:
                        return var2;
                    case 671:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58137_ip = 679;
                            continue _fun58137
                        }
                    case 677:
                        throw var3;
                    case 679:
                        return var2;
                    case 682:
                        return var1;
                    case 685:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58140: for (var _fun58140_ip = 0;;) switch (_fun58140_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58140_ip = 120;
                            continue _fun58140
                        }
                    case 12:
                        var _closure4_slot0 = var2;
                        var5 = _closure1_slot7;
                        var4 = null;
                        if (!(var4 == var5)) {
                            _fun58140_ip = 69;
                            continue _fun58140
                        }
                    case 29:
                        var5 = _closure1_slot3;
                        var4 = undefined;
                        var3 = function*() { // Environment: var3
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun58142: for (var _fun58142_ip = 0;;) switch (_fun58142_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun58142_ip = 609;
                                            continue _fun58142
                                        }
                                    case 10:
                                        var5 = undefined;
                                        var9 = undefined;
                                        var4 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var7 = 5;
                                        var1 = var1[var7];
                                        var8 = var4.bind(var5)(var1);
                                        var4 = var8.dispatch;
                                        var1 = {};
                                        var6 = 'ORDER_MARK_SIGNING_START';
                                        var1.type = var6;
                                        var10 = _closure4_slot0;
                                        var1.orderId = var10;
                                        var1 = var4.bind(var8)(var1);
                                    case 71: // try_start_0 // try_start_2
                                        var4 = _closure1_slot8;
                                        var1 = _closure4_slot0;
                                        var1 = var4.bind(var5)(var1);
                                        SaveGenerator(address = 88);
                                    case 86:
                                        return var1;
                                    case 88:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun58142_ip = 388;
                                            continue _fun58142
                                        }
                                    case 97:
                                        var9 = var1;
                                        var8 = null;
                                        if (!(var8 != var1)) {
                                            _fun58142_ip = 325;
                                            continue _fun58142
                                        }
                                    case 109:
                                        var10 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var4 = 3;
                                        var4 = var11[var4];
                                        var4 = var10.bind(var5)(var4);
                                        var11 = var4.HTTP;
                                        var10 = var11.post;
                                        var4 = {};
                                        var14 = _closure1_slot4;
                                        var13 = var14.ORDER_SIGN;
                                        var12 = _closure4_slot0;
                                        var12 = var13.bind(var14)(var12);
                                        var4.url = var12;
                                        var12 = {};
                                        var13 = var9;
                                        var13 = var13.revision;
                                        var12.expected_revision = var13;
                                        var4.body = var12;
                                        var12 = true;
                                        var4.rejectWithError = var12;
                                        var4 = var10.bind(var11)(var4);
                                        SaveGenerator(address = 200);
                                    case 198:
                                        return var4;
                                    case 200:
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 10);
                                        if (var10) {
                                            _fun58142_ip = 318;
                                            continue _fun58142
                                        }
                                    case 206:
                                        var13 = _closure1_slot5;
                                        var11 = var13.info;
                                        var10 = {};
                                        var12 = _closure4_slot0;
                                        var10.orderId = var12;
                                        var9 = var9.revision;
                                        var10.revision = var9;
                                        var9 = 'marked order as signing in progress';
                                        var9 = var11.bind(var13)(var9, var10);
                                        var10 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var9 = var9[var7];
                                        var11 = var10.bind(var5)(var9);
                                        var10 = var11.dispatch;
                                        var9 = {};
                                        var13 = 'ORDER_MARK_SIGNING_SUCCESS';
                                        var9.type = var13;
                                        var9.orderId = var12;
                                        var9 = var10.bind(var11)(var9);
                                        SaveGenerator(address = 298);
                                    case 296:
                                        return var9;
                                    case 298:
                                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                                        if (var10) {
                                            _fun58142_ip = 311;
                                            continue _fun58142
                                        }
                                    case 304: // try_end0 // try_end2
                                        _closure1_slot7 = var8;
                                        return var5;
                                    case 311:
                                        _closure1_slot7 = var8;
                                        return var9;
                                    case 318:
                                        _closure1_slot7 = var8;
                                        return var4;
                                    case 325: // try_start_1 // try_start_3
                                        var4 = global;
                                        var9 = var4.Error;
                                        var11 = _closure4_slot0;
                                        var4 = var4.HermesInternal;
                                        var10 = var4.concat;
                                        var8 = 'Order ';
                                        var4 = ' not found';
                                        var16 = var10.bind(var8)(var11, var4);
                                        var8 = var9.prototype;
                                        var8 = Object.create(var8, {
                                            constructor: {
                                                value: var9
                                            }
                                        });
                                        var17 = var8;
                                        var4 = new var17[var9](var16, var15);
                                        var4 = var4 instanceof Object ? var4 : var8;
                                        throw var4;
                                    case 388: // try_end1 // try_end3
                                        var4 = null;
                                        _closure1_slot7 = var4;
                                        return var1;
                                    case 397: // try_start_4 // catch_target0 // catch_target1
                                        CatchBlockStart(arg_register = 11);
                                        var2 = var11;
                                        var8 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var4 = 4;
                                        var4 = var1[var4];
                                        var12 = var8.bind(var5)(var4);
                                        var9 = var12.captureBillingException;
                                        var4 = global;
                                        var4 = var4.Error;
                                        var8 = var4.prototype;
                                        var8 = Object.create(var8, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var10 = 'failed to mark order as signing in progress';
                                        var17 = var8;
                                        var16 = var10;
                                        var4 = new var17[var4](var16, var15);
                                        var8 = var4 instanceof Object ? var4 : var8;
                                        var4 = {};
                                        var13 = {};
                                        var14 = 'OrderActionCreators_markOrderAsSigningInProgress';
                                        var13.source = var14;
                                        var4.tags = var13;
                                        var13 = {};
                                        var6 = _closure4_slot0;
                                        var13.orderId = var6;
                                        var13.response = var11;
                                        var4.extra = var13;
                                        var4 = var9.bind(var12)(var8, var4);
                                        var9 = _closure1_slot5;
                                        var8 = var9.error;
                                        var4 = {};
                                        var4.response = var11;
                                        var4.orderId = var6;
                                        var4 = var8.bind(var9)(var10, var4);
                                        var4 = _closure1_slot1;
                                        var1 = var1[var7];
                                        var5 = var4.bind(var5)(var1);
                                        var4 = var5.dispatch;
                                        var1 = {};
                                        var7 = 'ORDER_MARK_SIGNING_FAIL';
                                        var1.type = var7;
                                        var1.orderId = var6;
                                        var1 = var4.bind(var5)(var1);
                                        SaveGenerator(address = 582);
                                    case 580:
                                        return var1;
                                    case 582:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun58142_ip = 590;
                                            continue _fun58142
                                        }
                                    case 588:
                                        throw var2;
                                    case 590: // try_end4
                                        var2 = null;
                                        _closure1_slot7 = var2;
                                        return var1;
                                    case 599: // catch_target2 // catch_target3 // catch_target4
                                        CatchBlockStart(arg_register = 1);
                                        var2 = null;
                                        _closure1_slot7 = var2;
                                        throw var1;
                                    case 609:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.bind(var4)();
                        _closure1_slot7 = var3;
                        SaveGenerator(address = 57);
                    case 55:
                        return var3;
                    case 57:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun58140_ip = 66;
                            continue _fun58140
                        }
                    case 63:
                        return var4;
                    case 66:
                        return var3;
                    case 69:
                        var5 = _closure1_slot5;
                        var4 = var5.info;
                        var3 = {};
                        var3.orderId = var2;
                        var2 = 'signing already in progress, awaiting existing promise';
                        var2 = var4.bind(var5)(var2, var3);
                        var1 = _closure1_slot7;
                        SaveGenerator(address = 106);
                    case 104:
                        return var1;
                    case 106:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58140_ip = 117;
                            continue _fun58140
                        }
                    case 112:
                        var2 = undefined;
                        return var2;
                    case 117:
                        return var1;
                    case 120:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var14 = 0;
    var6 = var11[var14];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var6 = var11[var13];
    var6 = var10.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot4 = var6;
    var12 = 2;
    var6 = var11[var12];
    var8 = var7.bind(var0)(var6);
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var18 = 'OrderActionCreators';
    var19 = var7;
    var6 = new var19[var8](var18, var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot5 = var6;
    var7 = {};
    var7.UNSPECIFIED = var14;
    var9 = 'UNSPECIFIED';
    var7[var14] = var9;
    var7.DRAFT = var13;
    var6 = 'DRAFT';
    var7[var13] = var6;
    var7.SIGNED = var12;
    var6 = 'SIGNED';
    var7[var12] = var6;
    var8 = 3;
    var7.DISCARDED = var8;
    var6 = 'DISCARDED';
    var7[var8] = var6;
    var15 = 4;
    var7.SIGNING_IN_PROGRESS = var15;
    var6 = 'SIGNING_IN_PROGRESS';
    var7[var15] = var6;
    var _closure1_slot6 = var7;
    var6 = {};
    var6.UNSPECIFIED = var14;
    var6[var14] = var9;
    var6.ONE_TIME = var13;
    var9 = 'ONE_TIME';
    var6[var13] = var9;
    var6.SUBSCRIPTION = var12;
    var9 = 'SUBSCRIPTION';
    var6[var12] = var9;
    var9 = null;
    var _closure1_slot7 = var9;
    var9 = 6;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/payments/native/OrderActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var2.DRAFT_ORDER_LOOKBACK_DAYS = var8;
    var2.OrderStatus = var7;
    var2.ItemPurchaseType = var6;
    var2.getOrder = var5;
    var2.getOrders = var4;
    var2.createOrder = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getOrCreateOrder = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.patchOrderLineItem = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateOrder = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.markOrderAsSigningInProgress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 3, 507, 3084, 806, 2]);