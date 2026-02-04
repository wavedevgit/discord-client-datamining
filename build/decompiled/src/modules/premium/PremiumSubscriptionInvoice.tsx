// modules/premium/PremiumSubscriptionInvoice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59454: for (var _fun59454_ip = 0;;) switch (_fun59454_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59454_ip = 346;
                            continue _fun59454
                        }
                    case 13:
                        var13 = var1.items;
                        var12 = var1.paymentSourceId;
                        var11 = var1.trialId;
                        var10 = var1.code;
                        var3 = var1.applyEntitlements;
                        var5 = undefined;
                        if (!(var3 === var5)) {
                            _fun59454_ip = 49;
                            continue _fun59454
                        }
                    case 47:
                        var3 = false;
                    case 49:
                        var9 = var3;
                        var8 = var1.currency;
                        var6 = var1.renewal;
                        var4 = var1.metadata;
                        var7 = undefined;
                        SaveGenerator(address = 76);
                    case 74:
                        return var5;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59454_ip = 343;
                            continue _fun59454
                        }
                    case 85:
                        var3 = {};
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var14 = 6;
                        var14 = var16[var14];
                        var16 = var15.bind(var5)(var14);
                        var15 = var16.coerceExistingItemsToNewItemInterval;
                        var14 = var13;
                        var15 = var15.bind(var16)(var14);
                        var13 = var15;
                        var14 = var15.map;
                        var13 = function(arg0) { // Environment: var13
                            var3 = arg0;
                            var2 = var3.planId;
                            var0 = null;
                            var1 = Object.create(var0);
                            var0 = 0;
                            var1.planId = var0;
                            var6 = {};
                            var5 = var3;
                            var4 = var1;
                            var5 = copyDataProperties(var6, var5, var4);
                            var0 = {};
                            var6 = var0;
                            var1 = copyDataProperties(var6, var5);
                            var1 = 'plan_id';
                            var0[var1] = var2;
                            return var0;
                        };
                        var13 = var14.bind(var15)(var13);
                        var3.items = var13;
                        var3.payment_source_id = var12;
                        var3.trial_id = var11;
                        var3.code = var10;
                        var3.apply_entitlements = var9;
                        var3.currency = var8;
                        var3.renewal = var6;
                        var3.metadata = var4;
                        var7 = var3;
                    case 185: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 7;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var6 = var3.HTTP;
                        var4 = var6.post;
                        var3 = {};
                        var8 = _closure1_slot12;
                        var8 = var8.BILLING_SUBSCRIPTIONS_PREVIEW;
                        var3.url = var8;
                        var3.body = var7;
                        var7 = true;
                        var3.oldFormErrors = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var3 = var4.bind(var6)(var3);
                        SaveGenerator(address = 258);
                    case 256:
                        return var3;
                    case 258:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59454_ip = 287;
                            continue _fun59454
                        }
                    case 264:
                        var7 = _closure1_slot11;
                        var6 = var7.createInvoiceFromServer;
                        var4 = var3.body;
                        var4 = var6.bind(var7)(var4);
                    case 284: // try_end0
                        return var4;
                    case 287:
                        return var3;
                    case 290: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.BillingError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var18 = var3;
                        var17 = var4;
                        var2 = new var18[var2](var17, var16);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 343:
                        return var1;
                    case 346:
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
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59459: for (var _fun59459_ip = 0;;) switch (_fun59459_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59459_ip = 385;
                            continue _fun59459
                        }
                    case 13:
                        var8 = var1.subscriptionId;
                        var15 = var1.items;
                        var12 = var1.paymentSourceId;
                        var11 = var1.renewal;
                        var4 = var1.currency;
                        var13 = var1.applyEntitlements;
                        var5 = undefined;
                        if (!(var13 === var5)) {
                            _fun59459_ip = 56;
                            continue _fun59459
                        }
                    case 54:
                        var13 = false;
                    case 56:
                        var6 = var13;
                        var9 = var1.analyticsLocations;
                        var10 = var1.analyticsLocation;
                        var3 = var1.userDiscountOfferId;
                        var7 = undefined;
                        SaveGenerator(address = 85);
                    case 83:
                        return var5;
                    case 85:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59459_ip = 382;
                            continue _fun59459
                        }
                    case 94:
                        var13 = null;
                        var16 = var15;
                        if (!(var13 != var16)) {
                            _fun59459_ip = 137;
                            continue _fun59459
                        }
                    case 103:
                        var14 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var2 = 6;
                        var2 = var17[var2];
                        var14 = var14.bind(var5)(var2);
                        var2 = var14.coerceExistingItemsToNewItemInterval;
                        var16 = var2.bind(var14)(var15);
                    case 137:
                        var2 = {};
                        var14 = var13 == var16;
                        var13 = undefined;
                        if (var14) {
                            _fun59459_ip = 165;
                            continue _fun59459
                        }
                    case 148:
                        var15 = var16.map;
                        var14 = function(arg0) { // Environment: var14
                            var3 = arg0;
                            var2 = var3.planId;
                            var0 = null;
                            var1 = Object.create(var0);
                            var0 = 0;
                            var1.planId = var0;
                            var6 = {};
                            var5 = var3;
                            var4 = var1;
                            var5 = copyDataProperties(var6, var5, var4);
                            var0 = {};
                            var6 = var0;
                            var1 = copyDataProperties(var6, var5);
                            var1 = 'plan_id';
                            var0[var1] = var2;
                            return var0;
                        };
                        var13 = var15.bind(var16)(var14);
                    case 165:
                        var2.items = var13;
                        var2.payment_source_id = var12;
                        var2.renewal = var11;
                        var2.apply_entitlements = var6;
                        var2.currency = var4;
                        var2.user_discount_offer_id = var3;
                        var7 = var2;
                    case 197: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 7;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var4 = var6.patch;
                        var2 = {};
                        var12 = _closure1_slot12;
                        var11 = var12.BILLING_SUBSCRIPTION_PREVIEW;
                        var8 = var11.bind(var12)(var8);
                        var2.url = var8;
                        var8 = {};
                        var8.location = var10;
                        var8.location_stack = var9;
                        var2.query = var8;
                        var2.body = var7;
                        var7 = true;
                        var2.oldFormErrors = var7;
                        var7 = false;
                        var2.rejectWithError = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 294);
                    case 292:
                        return var2;
                    case 294:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59459_ip = 323;
                            continue _fun59459
                        }
                    case 300:
                        var6 = _closure1_slot11;
                        var4 = var6.createInvoiceFromServer;
                        var3 = var2.body;
                        var3 = var4.bind(var6)(var3);
                    case 320: // try_end0
                        return var3;
                    case 323:
                        return var2;
                    case 326: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.BillingError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var19 = var3;
                        var18 = var4;
                        var2 = new var19[var2](var18, var17);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 382:
                        return var1;
                    case 385:
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
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59464: for (var _fun59464_ip = 0;;) switch (_fun59464_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59464_ip = 285;
                            continue _fun59464
                        }
                    case 13:
                        var12 = var1.paymentSourceId;
                        var7 = var1.skuId;
                        var11 = var1.subscriptionPlanId;
                        var10 = var1.currency;
                        var9 = var1.loadId;
                        var5 = undefined;
                        SaveGenerator(address = 49);
                    case 47:
                        return var5;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59464_ip = 282;
                            continue _fun59464
                        }
                    case 58:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 9;
                        var3 = var6[var3];
                        var6 = var4.bind(var5)(var3);
                        var4 = var7;
                        var3 = 'SKU ID is missing for one time purchase gift invoice preview';
                        var3 = var6.bind(var5)(var4, var3);
                    case 96: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 10;
                        var3 = var6[var3];
                        var6 = var4.bind(var5)(var3);
                        var4 = var6.httpGetWithCountryCodeQuery;
                        var3 = {};
                        var13 = _closure1_slot12;
                        var8 = var13.STORE_SKU_PURCHASE;
                        var7 = var8.bind(var13)(var7);
                        var3.url = var7;
                        var8 = {};
                        var7 = true;
                        var8.gift = var7;
                        var8.payment_source_id = var12;
                        var8.sku_subscription_plan_id = var11;
                        var8.currency = var10;
                        var8.load_id = var9;
                        var3.query = var8;
                        var3.oldFormErrors = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var3 = var4.bind(var6)(var3);
                        SaveGenerator(address = 197);
                    case 195:
                        return var3;
                    case 197:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59464_ip = 226;
                            continue _fun59464
                        }
                    case 203:
                        var7 = _closure1_slot11;
                        var6 = var7.createInvoiceFromServer;
                        var4 = var3.body;
                        var4 = var6.bind(var7)(var4);
                    case 223: // try_end0
                        return var4;
                    case 226:
                        return var3;
                    case 229: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.BillingError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var16 = var3;
                        var15 = var4;
                        var2 = new var16[var2](var15, var14);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 282:
                        return var1;
                    case 285:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59468: for (var _fun59468_ip = 0;;) switch (_fun59468_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59468_ip = 153;
                            continue _fun59468
                        }
                    case 13:
                        var8 = var1.subscriptionId;
                        var2 = var1.preventFetch;
                        var5 = undefined;
                        SaveGenerator(address = 31);
                    case 29:
                        return var5;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59468_ip = 150;
                            continue _fun59468
                        }
                    case 37:
                        if (var2) {
                            _fun59468_ip = 145;
                            continue _fun59468
                        }
                    case 40:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 7;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var7 = _closure1_slot12;
                        var6 = var7.BILLING_SUBSCRIPTION_INVOICE;
                        var6 = var6.bind(var7)(var8);
                        var2.url = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 113);
                    case 111:
                        return var2;
                    case 113:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59468_ip = 142;
                            continue _fun59468
                        }
                    case 119:
                        var5 = _closure1_slot11;
                        var4 = var5.createInvoiceFromServer;
                        var3 = var2.body;
                        var3 = var4.bind(var5)(var3);
                        return var3;
                    case 142:
                        return var2;
                    case 145:
                        var2 = null;
                        return var2;
                    case 150:
                        return var1;
                    case 153:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun59469: for (var _fun59469_ip = 0;;) switch (_fun59469_ip) {
            case 0:
                var6 = arg1;
                var1 = arg0;
                var7 = var1.preventFetch;
                var5 = undefined;
                if (!(var7 === var5)) {
                    _fun59469_ip = 22;
                    continue _fun59469
                }
            case 20:
                var7 = false;
            case 22:
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var1 = _closure1_slot9;
                var9 = null;
                var2 = var1.bind(var5)(var9);
                var1 = _closure1_slot5;
                var10 = 2;
                var4 = var1.bind(var5)(var2, var10);
                var1 = 0;
                var2 = var4[var1];
                var8 = 1;
                var4 = var4[var8];
                _closure2_slot2 = var4;
                var4 = _closure1_slot9;
                var9 = var4.bind(var5)(var9);
                var4 = _closure1_slot5;
                var4 = var4.bind(var5)(var9, var10);
                var1 = var4[var1];
                var4 = var4[var8];
                _closure2_slot3 = var4;
                var4 = _closure1_slot8;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var0 = function() { // Environment: var0
                    _fun59470: for (var _fun59470_ip = 0;;) switch (_fun59470_ip) {
                        case 0:
                            var1 = function() {
                                var3 = undefined;
                                var0 = undefined;
                                var2 = _closure1_slot6;
                                var1 = function*() { // Environment: var1
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun59473: for (var _fun59473_ip = 0;;) switch (_fun59473_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun59473_ip = 106;
                                                    continue _fun59473
                                                }
                                            case 7:
                                                var1 = undefined;
                                                var4 = undefined;
                                            case 11: // try_start_0
                                                var3 = _closure2_slot3;
                                                var6 = null;
                                                var3 = var3.bind(var1)(var6);
                                                var3 = _closure2_slot2;
                                                var3 = var3.bind(var1)(var6);
                                                var3 = _closure2_slot1;
                                                var3 = var3.bind(var1)();
                                                SaveGenerator(address = 46);
                                            case 44:
                                                return var3;
                                            case 46:
                                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                                if (var6) {
                                                    _fun59473_ip = 76;
                                                    continue _fun59473
                                                }
                                            case 52:
                                                var4 = var3;
                                                var6 = _closure3_slot0;
                                                if (var6) {
                                                    _fun59473_ip = 74;
                                                    continue _fun59473
                                                }
                                            case 65:
                                                var5 = _closure2_slot2;
                                                var4 = var5.bind(var1)(var4);
                                            case 74: // try_end0
                                                _fun59473_ip = 103;
                                                continue _fun59473;
                                            case 76:
                                                return var3;
                                            case 79: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var3 = _closure3_slot0;
                                                if (var3) {
                                                    _fun59473_ip = 103;
                                                    continue _fun59473
                                                }
                                            case 91:
                                                var3 = _closure2_slot3;
                                                var2 = var3.bind(var1)(var2);
                                            case 103:
                                                return var1;
                                            case 106:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var3 = var2.bind(var3)(var1);
                                _closure3_slot1 = var3;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var _closure3_slot1 = var1;
                            var1 = false;
                            var _closure3_slot0 = var1;
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun59470_ip = 38;
                                continue _fun59470
                            }
                        case 27:
                            var2 = function() {
                                var0 = undefined;
                                var3 = _closure3_slot1;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 38:
                            var0 = function() { // Environment: var0
                                var0 = true;
                                _closure3_slot0 = var0;
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = ['subscriptionId'];
    var _closure1_slot3 = var0;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var11 = var7.useCallback;
    var _closure1_slot7 = var11;
    var11 = var7.useEffect;
    var _closure1_slot8 = var11;
    var11 = var7.useState;
    var _closure1_slot9 = var11;
    var7 = var7.useRef;
    var _closure1_slot10 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot12 = var7;
    var7 = 11;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/PremiumSubscriptionInvoice.tsx';
    var7 = var8.bind(var9)(var7);
    var2.createSubscriptionInvoicePreview = var6;
    var2.updateSubscriptionInvoicePreview = var5;
    var2.createOneTimePurchaseInvoicePreview = var4;
    var2.getSubscriptionInvoice = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot10;
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var _closure2_slot1 = var4;
        var5 = _closure1_slot8;
        var4 = function() { // Environment: var1
            var1 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var4 = var5.bind(var2)(var4);
        var4 = global;
        var5 = var4.JSON;
        var4 = var5.stringify;
        var6 = var4.bind(var5)(var3);
        var5 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var6;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot17;
            var0 = _closure2_slot1;
            var1 = var0.current;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var5.bind(var2)(var1, var4);
        var0 = _closure1_slot21;
        var0 = var0.bind(var2)(var3, var1);
        return var0;
    };
    var2.useOneTimePurchaseInvoicePreview = var3;
    var3 = function arg0() {
        _fun59479: for (var _fun59479_ip = 0;;) switch (_fun59479_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var0 = 'subscriptionId';
                var0 = var0 in var5;
                var3 = var5;
                if (!var0) {
                    _fun59479_ip = 70;
                    continue _fun59479
                }
            case 23:
                var2 = var5.subscriptionId;
                var0 = null;
                var3 = var5;
                if (!(var0 == var2)) {
                    _fun59479_ip = 70;
                    continue _fun59479
                }
            case 38:
                var0 = var5.subscriptionId;
                var4 = _closure1_slot4;
                var2 = _closure1_slot3;
                var0 = undefined;
                var0 = var4.bind(var0)(var5, var2);
                _closure2_slot0 = var0;
                var3 = var0;
            case 70:
                var4 = _closure1_slot10;
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var _closure2_slot1 = var4;
                var5 = _closure1_slot8;
                var4 = function() { // Environment: var1
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var4 = var5.bind(var2)(var4);
                var4 = global;
                var5 = var4.JSON;
                var4 = var5.stringify;
                var6 = var4.bind(var5)(var3);
                var5 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var6;
                var1 = function() { // Environment: var1
                    _fun59481: for (var _fun59481_ip = 0;;) switch (_fun59481_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = var0.current;
                            var0 = 'subscriptionId';
                            var0 = var0 in var3;
                            if (var0) {
                                _fun59481_ip = 52;
                                continue _fun59481
                            }
                        case 23:
                            var0 = 'items';
                            var1 = var0 in var3;
                            var0 = null;
                            if (!var1) {
                                _fun59481_ip = 50;
                                continue _fun59481
                            }
                        case 36:
                            var2 = _closure1_slot13;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 50:
                            _fun59481_ip = 66;
                            continue _fun59481;
                        case 52:
                            var2 = _closure1_slot15;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 66:
                            return var0;
                    }
                };
                var1 = var5.bind(var2)(var1, var4);
                var0 = _closure1_slot21;
                var0 = var0.bind(var2)(var3, var1);
                return var0;
        }
    };
    var2.useSubscriptionInvoicePreview = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot10;
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var _closure2_slot1 = var4;
        var5 = _closure1_slot8;
        var4 = function() { // Environment: var1
            var1 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var4 = var5.bind(var2)(var4);
        var4 = global;
        var5 = var4.JSON;
        var4 = var5.stringify;
        var6 = var4.bind(var5)(var3);
        var5 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var6;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot19;
            var0 = _closure2_slot1;
            var1 = var0.current;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var5.bind(var2)(var1, var4);
        var0 = _closure1_slot21;
        var0 = var0.bind(var2)(var3, var1);
        return var0;
    };
    var2.useGetSubscriptionInvoice = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = var1.subscriptionPlanPrice;
        var _closure2_slot1 = var2;
        var3 = var1.discounts;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.amount;
            var0 = _closure2_slot0;
            var0 = var0.quantity;
            var2 = var2 / var0;
            var0 = _closure2_slot1;
            var0 = var0 - var2;
            _closure2_slot1 = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot1;
        return var0;
    };
    var2.getItemUnitPriceWithDiscount = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 5, 31, 3120, 660, 3109, 507, 3350, 44, 3361, 2]);