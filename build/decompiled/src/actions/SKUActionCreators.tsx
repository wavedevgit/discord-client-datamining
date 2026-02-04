// actions/SKUActionCreators.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59088: for (var _fun59088_ip = 0;;) switch (_fun59088_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59088_ip = 326;
                            continue _fun59088
                        }
                    case 13:
                        var4 = var3;
                        var2 = _closure1_slot5;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var3);
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun59088_ip = 214;
                            continue _fun59088
                        }
                    case 42:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var3 = undefined;
                        var7 = var6.bind(var3)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'SKU_FETCH_START';
                        var2.type = var8;
                        var8 = var4;
                        var2.skuId = var8;
                        var2 = var6.bind(var7)(var2);
                    case 94: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var2 = var7[var2];
                        var7 = var6.bind(var3)(var2);
                        var6 = var7.httpGetWithCountryCodeQuery;
                        var2 = {};
                        var10 = _closure1_slot8;
                        var9 = var10.STORE_SKU;
                        var8 = var4;
                        var8 = var9.bind(var10)(var8);
                        var2.url = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 159);
                    case 157:
                        return var2;
                    case 159:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun59088_ip = 219;
                            continue _fun59088
                        }
                    case 165:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var1];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'SKU_FETCH_SUCCESS';
                        var6.type = var9;
                        var9 = var2.body;
                        var6.sku = var9;
                        var6 = var7.bind(var8)(var6);
                    case 214: // try_end0
                        var6 = undefined;
                        return var6;
                    case 219:
                        return var2;
                    case 222: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = var5[var1];
                        var7 = var2.bind(var3)(var1);
                        var6 = var7.dispatch;
                        var1 = {};
                        var8 = 'SKU_FETCH_FAIL';
                        var1.type = var8;
                        var1.skuId = var4;
                        var1 = var6.bind(var7)(var1);
                        var1 = 7;
                        var1 = var5[var1];
                        var3 = var2.bind(var3)(var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Failed to fetch SKU ';
                        var11 = var2.bind(var1)(var4);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = var2;
                        var1 = new var12[var3](var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 326:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun59091: for (var _fun59091_ip = 0;;) switch (_fun59091_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59091_ip = 534;
                            continue _fun59091
                        }
                    case 13:
                        var8 = arg0;
                        var4 = var11;
                        var10 = arg2;
                        var3 = undefined;
                        var6 = undefined;
                        var2 = undefined;
                        var9 = undefined;
                        var7 = _closure1_slot5;
                        var1 = var7.get;
                        var7 = var1.bind(var7)(var11);
                        var1 = null;
                        if (!(var1 == var7)) {
                            _fun59091_ip = 424;
                            continue _fun59091
                        }
                    case 56:
                        var11 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 5;
                        var7 = var7[var1];
                        var12 = var11.bind(var3)(var7);
                        var11 = var12.dispatch;
                        var7 = {};
                        var13 = 'SKU_FETCH_START';
                        var7.type = var13;
                        var13 = var4;
                        var7.skuId = var13;
                        var7 = var11.bind(var12)(var7);
                    case 106: // try_start_0
                        var13 = _closure1_slot6;
                        var12 = var13.inTestModeForApplication;
                        var11 = var8;
                        var11 = var12.bind(var13)(var11);
                        var7 = var11;
                        if (var11) {
                            _fun59091_ip = 145;
                            continue _fun59091
                        }
                    case 130:
                        var12 = _closure1_slot4;
                        var11 = var12.inDevModeForApplication;
                        var7 = var11.bind(var12)(var8);
                    case 145:
                        var8 = var7;
                        var6 = var8;
                        var7 = {};
                        var13 = _closure1_slot8;
                        if (var8) {
                            _fun59091_ip = 176;
                            continue _fun59091
                        }
                    case 160:
                        var11 = var13.STORE_PUBLISHED_LISTINGS_SKU;
                        var8 = var4;
                        var8 = var11.bind(var13)(var8);
                        _fun59091_ip = 190;
                        continue _fun59091;
                    case 176:
                        var12 = var13.STORE_SKU;
                        var11 = var4;
                        var8 = var12.bind(var13)(var11);
                    case 190:
                        var7.url = var8;
                        var8 = false;
                        var7.rejectWithError = var8;
                        var2 = var7;
                        var8 = var10;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var7 = 8;
                        var7 = var12[var7];
                        var7 = var11.bind(var3)(var7);
                        var7 = var7.ShopVariantsReturnStyle;
                        var7 = var7.VARIANTS_GROUP;
                        if (!(var8 === var7)) {
                            _fun59091_ip = 258;
                            continue _fun59091
                        }
                    case 242:
                        var8 = var2;
                        var7 = {};
                        var7.variants_return_style = var10;
                        var8.query = var7;
                    case 258:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 6;
                        var7 = var10[var7];
                        var8 = var8.bind(var3)(var7);
                        var7 = var8.httpGetWithCountryCodeQuery;
                        var2 = var7.bind(var8)(var2);
                        SaveGenerator(address = 293);
                    case 291:
                        return var2;
                    case 293:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                        if (var7) {
                            _fun59091_ip = 427;
                            continue _fun59091
                        }
                    case 302:
                        var9 = var2;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var1];
                        var10 = var8.bind(var3)(var7);
                        var8 = var10.dispatch;
                        var7 = {};
                        var11 = 'SKU_FETCH_SUCCESS';
                        var7.type = var11;
                        var11 = var6;
                        var12 = var9;
                        var12 = var12.body;
                        if (var11) {
                            _fun59091_ip = 361;
                            continue _fun59091
                        }
                    case 353:
                        var11 = var12.sku;
                        _fun59091_ip = 364;
                        continue _fun59091;
                    case 361:
                        var11 = var12;
                    case 364:
                        var7.sku = var11;
                        var7 = var8.bind(var10)(var7);
                        if (var6) {
                            _fun59091_ip = 424;
                            continue _fun59091
                        }
                    case 377:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var1];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'STORE_LISTING_FETCH_SUCCESS';
                        var6.type = var10;
                        var9 = var9.body;
                        var6.storeListing = var9;
                        var6 = var7.bind(var8)(var6);
                    case 424: // try_end0
                        return var3;
                    case 427:
                        return var2;
                    case 430: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = var5[var1];
                        var7 = var2.bind(var3)(var1);
                        var6 = var7.dispatch;
                        var1 = {};
                        var8 = 'SKU_FETCH_FAIL';
                        var1.type = var8;
                        var1.skuId = var4;
                        var1 = var6.bind(var7)(var1);
                        var1 = 7;
                        var1 = var5[var1];
                        var3 = var2.bind(var3)(var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Failed to fetch SKU ';
                        var14 = var2.bind(var1)(var4);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var15 = var2;
                        var1 = new var15[var3](var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 534:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59094: for (var _fun59094_ip = 0;;) switch (_fun59094_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var2 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59094_ip = 244;
                            continue _fun59094
                        }
                    case 16:
                        var6 = undefined;
                        if (!(var2 === var6)) {
                            _fun59094_ip = 24;
                            continue _fun59094
                        }
                    case 22:
                        var2 = true;
                    case 24:
                        SaveGenerator(address = 28);
                    case 26:
                        return var6;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59094_ip = 241;
                            continue _fun59094
                        }
                    case 37:
                        var5 = _closure1_slot6;
                        var3 = var5.inTestModeForApplication;
                        var3 = var3.bind(var5)(var9);
                        if (var3) {
                            _fun59094_ip = 115;
                            continue _fun59094
                        }
                    case 58:
                        var5 = _closure1_slot4;
                        var3 = var5.inDevModeForApplication;
                        var3 = var3.bind(var5)(var9);
                        if (var3) {
                            _fun59094_ip = 115;
                            continue _fun59094
                        }
                    case 76:
                        if (!var2) {
                            _fun59094_ip = 115;
                            continue _fun59094
                        }
                    case 79:
                        var2 = global;
                        var5 = var2.Error;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = 'this should only be used in test mode';
                        var11 = var3;
                        var2 = new var11[var5](var10, var9);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 115:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 6;
                        var2 = var5[var2];
                        var5 = var3.bind(var6)(var2);
                        var3 = var5.httpGetWithCountryCodeQuery;
                        var2 = {};
                        var8 = _closure1_slot8;
                        var7 = var8.APPLICATION_SKUS;
                        var7 = var7.bind(var8)(var9);
                        var2.url = var7;
                        var7 = false;
                        var2.rejectWithError = var7;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 177);
                    case 175:
                        return var2;
                    case 177:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59094_ip = 238;
                            continue _fun59094
                        }
                    case 183:
                        var3 = var2.body;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 5;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'SKUS_FETCH_SUCCESS';
                        var4.type = var7;
                        var4.skus = var3;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 238:
                        return var2;
                    case 241:
                        return var1;
                    case 244:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
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
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun59097: for (var _fun59097_ip = 0;;) switch (_fun59097_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var7 = arg2;
                        var4 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59097_ip = 612;
                            continue _fun59097
                        }
                    case 19:
                        var11 = arg1;
                        var12 = var7;
                        var13 = var4;
                        var6 = undefined;
                        var2 = undefined;
                        var10 = undefined;
                        var1 = undefined;
                        var3 = {};
                        var3.payment_source_id = var7;
                        var14 = null;
                        var7 = var14 == var4;
                        var4 = undefined;
                        if (var7) {
                            _fun59097_ip = 63;
                            continue _fun59097
                        }
                    case 54:
                        var7 = var13;
                        var4 = var7.isGift;
                    case 63:
                        var3.gift = var4;
                        var10 = var3;
                        var7 = _closure1_slot6;
                        var4 = var7.inTestModeForApplication;
                        var4 = var4.bind(var7)(var9);
                        if (var4) {
                            _fun59097_ip = 107;
                            continue _fun59097
                        }
                    case 92:
                        var8 = _closure1_slot4;
                        var7 = var8.inDevModeForApplication;
                        var4 = var7.bind(var8)(var9);
                    case 107:
                        if (!var4) {
                            _fun59097_ip = 121;
                            continue _fun59097
                        }
                    case 110:
                        var7 = var10;
                        var4 = true;
                        var7.test_mode = var4;
                    case 121:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var8 = 5;
                        var4 = var4[var8];
                        var9 = var7.bind(var6)(var4);
                        var7 = var9.dispatch;
                        var4 = {};
                        var15 = 'SKU_PURCHASE_PREVIEW_FETCH';
                        var4.type = var15;
                        var15 = var11;
                        var4.skuId = var15;
                        var4 = var7.bind(var9)(var4);
                    case 171: // try_start_0
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 6;
                        var4 = var9[var4];
                        var9 = var7.bind(var6)(var4);
                        var7 = var9.httpGetWithCountryCodeQuery;
                        var4 = {};
                        var17 = _closure1_slot8;
                        var16 = var17.STORE_SKU_PURCHASE;
                        var15 = var11;
                        var15 = var16.bind(var17)(var15);
                        var4.url = var15;
                        var4.query = var10;
                        var10 = true;
                        var4.oldFormErrors = var10;
                        var10 = false;
                        var4.rejectWithError = var10;
                        var4 = var7.bind(var9)(var4);
                        SaveGenerator(address = 248);
                    case 246:
                        return var4;
                    case 248:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun59097_ip = 349;
                            continue _fun59097
                        }
                    case 254:
                        var2 = var4;
                        var9 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var8];
                        var10 = var9.bind(var6)(var7);
                        var9 = var10.dispatch;
                        var7 = {};
                        var15 = 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS';
                        var7.type = var15;
                        var15 = var11;
                        var7.skuId = var15;
                        var7.paymentSourceId = var12;
                        var12 = var4.body;
                        var7.price = var12;
                        var12 = var13;
                        var14 = var14 == var12;
                        var12 = undefined;
                        if (var14) {
                            _fun59097_ip = 332;
                            continue _fun59097
                        }
                    case 326:
                        var12 = var13.loadId;
                    case 332:
                        var7.checkoutSessionId = var12;
                        var7 = var9.bind(var10)(var7);
                    case 344: // try_end0
                        _fun59097_ip = 607;
                        continue _fun59097;
                    case 349:
                        return var4;
                    case 352: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var5 = var7;
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var8 = var4[var8];
                        var10 = var9.bind(var6)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var12 = 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE';
                        var8.type = var12;
                        var8.skuId = var11;
                        var8 = var9.bind(var10)(var8);
                        var9 = _closure1_slot0;
                        var8 = 9;
                        var4 = var4[var8];
                        var4 = var9.bind(var6)(var4);
                        var4 = var4.BillingError;
                        var4 = var7 instanceof var4;
                        if (var4) {
                            _fun59097_ip = 478;
                            continue _fun59097
                        }
                    case 430:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var6)(var4);
                        var8 = var4.BillingError;
                        var18 = var5;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var8
                            }
                        });
                        var19 = var7;
                        var4 = new var19[var8](var18, var17);
                        var4 = var4 instanceof Object ? var4 : var7;
                        _fun59097_ip = 481;
                        continue _fun59097;
                    case 478:
                        var4 = var5;
                    case 481:
                        var1 = var4;
                        var5 = var4.code;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 10;
                        var4 = var4[var7];
                        var4 = var8.bind(var6)(var4);
                        var4 = var4.ErrorCodes;
                        var4 = var4.BILLING_BUNDLE_ALREADY_PURCHASED;
                        if (!(var5 !== var4)) {
                            _fun59097_ip = 610;
                            continue _fun59097
                        }
                    case 525:
                        var4 = var1;
                        var5 = var4.code;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var8.bind(var6)(var4);
                        var4 = var4.ErrorCodes;
                        var4 = var4.BILLING_BUNDLE_PARTIALLY_OWNED;
                        if (!(var5 !== var4)) {
                            _fun59097_ip = 610;
                            continue _fun59097
                        }
                    case 566:
                        var4 = var1;
                        var4 = var4.code;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.ErrorCodes;
                        var3 = var3.INVALID_BILLING_ADDRESS;
                        if (!(var4 !== var3)) {
                            _fun59097_ip = 610;
                            continue _fun59097
                        }
                    case 607:
                        return var2;
                    case 610:
                        throw var1;
                    case 612:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun59100: for (var _fun59100_ip = 0;;) switch (_fun59100_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg0;
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59100_ip = 332;
                            continue _fun59100
                        }
                    case 16:
                        var6 = var11;
                        var9 = arg1;
                        var5 = var10;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var7 = 5;
                        var1 = var1[var7];
                        var4 = undefined;
                        var8 = var2.bind(var4)(var1);
                        var2 = var8.dispatch;
                        var1 = {};
                        var12 = 'SKU_PURCHASE_START';
                        var1.type = var12;
                        var1.applicationId = var11;
                        var1.skuId = var10;
                        var1 = var2.bind(var8)(var1);
                    case 81: // try_start_0
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 11;
                        var1 = var8[var1];
                        var1 = var2.bind(var4)(var1);
                        var8 = var1.HTTP;
                        var2 = var8.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var11 = _closure1_slot8;
                        var10 = var11.CHANNEL_ENTITLEMENT_GRANT;
                        var9 = var10.bind(var11)(var9);
                        var1.url = var9;
                        var1 = var2.bind(var8)(var1);
                        SaveGenerator(address = 152);
                    case 150:
                        return var1;
                    case 152:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59100_ip = 230;
                            continue _fun59100
                        }
                    case 158:
                        var8 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var9 = var8.bind(var4)(var2);
                        var8 = var9.dispatch;
                        var2 = {};
                        var10 = 'SKU_PURCHASE_SUCCESS';
                        var2.type = var10;
                        var10 = var5;
                        var2.skuId = var10;
                        var10 = var1.body;
                        var2.entitlements = var10;
                        var10 = new Array(0);
                        var2.libraryApplications = var10;
                        var2 = var8.bind(var9)(var2);
                        var2 = var1.body;
                    case 227: // try_end0
                        return var2;
                    case 230:
                        return var1;
                    case 233: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var1 = var2[var1];
                        var1 = var8.bind(var4)(var1);
                        var1 = var1.BillingError;
                        var8 = var1.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var1
                            }
                        });
                        var14 = var8;
                        var13 = var9;
                        var1 = new var14[var1](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var8;
                        var3 = _closure1_slot1;
                        var2 = var2[var7];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'SKU_PURCHASE_FAIL';
                        var2.type = var7;
                        var2.applicationId = var6;
                        var2.skuId = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 332:
                        return var0;
                }
            };
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
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun59103: for (var _fun59103_ip = 0;;) switch (_fun59103_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59103_ip = 491;
                            continue _fun59103
                        }
                    case 10:
                        var6 = arg0;
                        var10 = arg1;
                        var9 = arg2;
                        var4 = arg3;
                        var8 = arg4;
                        var3 = undefined;
                        var7 = undefined;
                        var11 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var5 = var5[var2];
                        var12 = var11.bind(var3)(var5);
                        var11 = var12.dispatch;
                        var5 = {};
                        var13 = 'ORDER_CREATE_START';
                        var5.type = var13;
                        var5 = var11.bind(var12)(var5);
                    case 74: // try_start_0
                        var5 = {};
                        var11 = {
                            'sku_id': null,
                            'quantity': 1,
                            'purchase_type': 1
                        };
                        var11.sku_id = var6;
                        var6 = new Array(1);
                        var6[0] = var11;
                        var5.order_line_items = var6;
                        var6 = {};
                        var6.payment_source_id = var10;
                        var5.billing_facet = var6;
                        var6 = {};
                        var6.request_gateway_country_code = var9;
                        var5.location_facet = var6;
                        var7 = var5;
                        if (!var4) {
                            _fun59103_ip = 245;
                            continue _fun59103
                        }
                    case 143:
                        var5 = var7;
                        var4 = {};
                        var6 = true;
                        var4.is_gift = var6;
                        var6 = {};
                        var9 = var8.recipient_id;
                        var6.recipient_id = var9;
                        var9 = var8.gift_style;
                        var6.gift_style = var9;
                        var9 = var8.emoji_id;
                        var6.emoji_id = var9;
                        var9 = var8.emoji_name;
                        var6.emoji_name = var9;
                        var9 = var8.sound_id;
                        var6.sound_id = var9;
                        var9 = var8.reward_sku_ids;
                        var6.reward_sku_ids = var9;
                        var8 = var8.custom_message;
                        var6.custom_message_contents = var8;
                        var4.gift_customization = var6;
                        var5.gifting_facet = var4;
                    case 245:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var4 = var5.bind(var3)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.post;
                        var4 = {};
                        var8 = _closure1_slot8;
                        var8 = var8.ORDER_CREATE;
                        var4.url = var8;
                        var4.body = var7;
                        var7 = false;
                        var4.rejectWithError = var7;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address = 311);
                    case 309:
                        return var4;
                    case 311:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun59103_ip = 379;
                            continue _fun59103
                        }
                    case 317:
                        var9 = var4.body;
                        var5 = var9.id;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var2];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'ORDER_CREATE_SUCCESS';
                        var6.type = var10;
                        var6.orderId = var5;
                        var6.order = var9;
                        var6 = var7.bind(var8)(var6);
                    case 376: // try_end0
                        return var5;
                    case 379:
                        return var4;
                    case 382: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = var5[var2];
                        var7 = var6.bind(var3)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'ORDER_CREATE_FAIL';
                        var2.type = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = _closure1_slot0;
                        var1 = 9;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.BillingError;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Failed to create order: ';
                        var14 = var2.bind(var1)(var4);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var15 = var2;
                        var1 = new var15[var3](var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 491:
                        return var0;
                }
            };
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
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun59106: for (var _fun59106_ip = 0;;) switch (_fun59106_ip) {
                    case 0:
                        StartGenerator();
                        var25 = arg0;
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 7);
                        if (var7) {
                            _fun59106_ip = 1409;
                            continue _fun59106
                        }
                    case 18:
                        var12 = var25;
                        var _closure4_slot0 = var25;
                        var6 = var5;
                        var _closure4_slot1 = var5;
                        var7 = undefined;
                        var2 = undefined;
                        var15 = undefined;
                        var10 = undefined;
                        var16 = undefined;
                        var13 = undefined;
                        var21 = undefined;
                        var4 = undefined;
                        var22 = undefined;
                        var19 = undefined;
                        var9 = undefined;
                        var17 = undefined;
                        var14 = undefined;
                        var20 = undefined;
                        var11 = undefined;
                        var1 = undefined;
                        var8 = {};
                        var30 = _closure1_slot9;
                        var31 = var8;
                        var23 = copyDataProperties(var31, var30);
                        var30 = arg2;
                        var31 = var8;
                        var23 = copyDataProperties(var31, var30);
                        var2 = var8.paymentSource;
                        var15 = var8.expectedAmount;
                        var10 = var8.expectedCurrency;
                        var16 = var8.analyticsLoadId;
                        var13 = var8.isGift;
                        var21 = var8.giftInfoOptions;
                        var4 = var8.subscriptionPlanId;
                        var22 = var8.loadId;
                        var19 = var8.countryCode;
                        var9 = var8.orderId;
                        var24 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var8 = 5;
                        var23 = var23[var8];
                        var24 = var24.bind(var7)(var23);
                        var23 = var24.wait;
                        var18 = function() { // Environment: var18
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'SKU_PURCHASE_START';
                            var1.type = var4;
                            var5 = _closure4_slot0;
                            var1.applicationId = var5;
                            var4 = _closure4_slot1;
                            var1.skuId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var18 = var23.bind(var24)(var18);
                        var24 = _closure1_slot6;
                        var23 = var24.inTestModeForApplication;
                        var23 = var23.bind(var24)(var25);
                        var18 = var23;
                        if (var23) {
                            _fun59106_ip = 225;
                            continue _fun59106
                        }
                    case 207:
                        var25 = _closure1_slot4;
                        var24 = var25.inDevModeForApplication;
                        var23 = var12;
                        var18 = var24.bind(var25)(var23);
                    case 225:
                        var17 = var18;
                    case 228: // try_start_0
                        var18 = {};
                        var23 = var13;
                        var18.gift = var23;
                        var18.sku_subscription_plan_id = var4;
                        var23 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var4 = 12;
                        var4 = var24[var4];
                        var24 = var23.bind(var7)(var4);
                        var23 = var24.createGatewayCheckoutContext;
                        var4 = var2;
                        var4 = var23.bind(var24)(var4);
                        SaveGenerator(address = 281);
                    case 279:
                        return var4;
                    case 281:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 23);
                        if (var23) {
                            _fun59106_ip = 1006;
                            continue _fun59106
                        }
                    case 290:
                        var18.gateway_checkout_context = var4;
                        var18.load_id = var22;
                        var18.gift_info_options = var21;
                        var14 = var18;
                        if (var17) {
                            _fun59106_ip = 580;
                            continue _fun59106
                        }
                    case 314:
                        var17 = var2;
                        var21 = null;
                        if (!(var21 != var17)) {
                            _fun59106_ip = 556;
                            continue _fun59106
                        }
                    case 326:
                        var18 = var14;
                        var24 = var2;
                        var17 = var24.id;
                        var18.payment_source_id = var17;
                        var22 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var23 = 13;
                        var17 = var17[var23];
                        var22 = var22.bind(var7)(var17);
                        var17 = var22.createPaymentSourceToken;
                        var17 = var17.bind(var22)(var24);
                        SaveGenerator(address = 378);
                    case 376:
                        return var17;
                    case 378:
                        ResumeGenerator(result_out_reg = 17, return_bool_out_reg = 22);
                        if (var22) {
                            _fun59106_ip = 577;
                            continue _fun59106
                        }
                    case 387:
                        var18.payment_source_token = var17;
                        var24 = _closure1_slot7;
                        var22 = var24.has;
                        var18 = var2;
                        var18 = var18.type;
                        var18 = var22.bind(var24)(var18);
                        if (!var18) {
                            _fun59106_ip = 556;
                            continue _fun59106
                        }
                    case 421:
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var18 = var18[var23];
                        var23 = var22.bind(var7)(var18);
                        var22 = var23.popupBridgeState;
                        var18 = var2;
                        var18 = var18.type;
                        var18 = var22.bind(var23)(var18);
                        SaveGenerator(address = 461);
                    case 459:
                        return var18;
                    case 461:
                        ResumeGenerator(result_out_reg = 18, return_bool_out_reg = 22);
                        if (var22) {
                            _fun59106_ip = 574;
                            continue _fun59106
                        }
                    case 467:
                        var20 = var18;
                        var22 = var14;
                        var24 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var23 = 11;
                        var23 = var25[var23];
                        var24 = var24.bind(var7)(var23);
                        var23 = var24.getAPIBaseURL;
                        var23 = var23.bind(var24)();
                        var27 = _closure1_slot8;
                        var26 = var27.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var24 = var2;
                        var25 = var24.type;
                        var28 = var21 != var18;
                        var24 = '';
                        if (!var28) {
                            _fun59106_ip = 535;
                            continue _fun59106
                        }
                    case 532:
                        var24 = var20;
                    case 535:
                        var20 = 'success';
                        var20 = var26.bind(var27)(var25, var24, var20);
                        var20 = var23 + var20;
                        var22.return_url = var20;
                    case 556:
                        var20 = var19;
                        if (!(var21 != var20)) {
                            _fun59106_ip = 591;
                            continue _fun59106
                        }
                    case 563:
                        var20 = var14;
                        var20.country_code = var19;
                        _fun59106_ip = 591;
                        continue _fun59106;
                    case 574: // try_end0
                        return var18;
                    case 577:
                        return var17;
                    case 580: // try_start_1
                        var18 = var14;
                        var17 = true;
                        var18.test_mode = var17;
                    case 591:
                        var17 = var15;
                        var18 = null;
                        if (!(var18 != var17)) {
                            _fun59106_ip = 611;
                            continue _fun59106
                        }
                    case 600:
                        var17 = var14;
                        var17.expected_amount = var15;
                    case 611:
                        var15 = var10;
                        if (!(var18 != var15)) {
                            _fun59106_ip = 629;
                            continue _fun59106
                        }
                    case 618:
                        var15 = var14;
                        var15.expected_currency = var10;
                    case 629:
                        var15 = var14;
                        var17 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var10 = 14;
                        var10 = var19[var10];
                        var17 = var17.bind(var7)(var10);
                        var10 = var17.getPurchaseToken;
                        var10 = var10.bind(var17)();
                        var15.purchase_token = var10;
                        var10 = var9;
                        if (!(var18 != var10)) {
                            _fun59106_ip = 684;
                            continue _fun59106
                        }
                    case 675:
                        var10 = var14;
                        var10.order_id = var9;
                    case 684:
                        var10 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 11;
                        var9 = var15[var9];
                        var9 = var10.bind(var7)(var9);
                        var15 = var9.HTTP;
                        var10 = var15.post;
                        var9 = {};
                        var20 = _closure1_slot8;
                        var19 = var20.STORE_SKU_PURCHASE;
                        var17 = var6;
                        var17 = var19.bind(var20)(var17);
                        var9.url = var17;
                        var9.body = var14;
                        var14 = {};
                        var14.load_id = var16;
                        var9.context = var14;
                        var14 = true;
                        var9.oldFormErrors = var14;
                        var14 = false;
                        var9.rejectWithError = var14;
                        var9 = var10.bind(var15)(var9);
                        SaveGenerator(address = 776);
                    case 774:
                        return var9;
                    case 776:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun59106_ip = 1003;
                            continue _fun59106
                        }
                    case 785:
                        var11 = var9;
                        var15 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var8];
                        var16 = var15.bind(var7)(var10);
                        var15 = var16.dispatch;
                        var10 = {};
                        var17 = 'SKU_PURCHASE_SUCCESS';
                        var10.type = var17;
                        var17 = var6;
                        var10.skuId = var17;
                        var17 = var9.body;
                        var17 = var17.library_applications;
                        if (!(var18 == var17)) {
                            _fun59106_ip = 849;
                            continue _fun59106
                        }
                    case 843:
                        var17 = new Array(0);
                        _fun59106_ip = 899;
                        continue _fun59106;
                    case 849:
                        var18 = var11;
                        var18 = var18.body;
                        var20 = var18.library_applications;
                        var19 = var20.filter;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var18 = 15;
                        var18 = var22[var18];
                        var18 = var21.bind(var7)(var18);
                        var18 = var18.isNotNullish;
                        var17 = var19.bind(var20)(var18);
                    case 899:
                        var10.libraryApplications = var17;
                        var17 = var11.body;
                        var17 = var17.entitlements;
                        var10.entitlements = var17;
                        var17 = var11.body;
                        var17 = var17.applied_user_discounts;
                        var10.appliedUserDiscounts = var17;
                        var17 = var11.body;
                        var17 = var17.gift_code;
                        var10.giftCode = var17;
                        var10 = var15.bind(var16)(var10);
                        var10 = {};
                        var30 = var11.body;
                        var31 = var10;
                        var15 = copyDataProperties(var31, var30);
                        var11 = var11.body;
                        var15 = var11.applied_user_discounts;
                        var11 = 'appliedUserDiscounts';
                        var10[var11] = var15;
                        var11 = 'redirectConfirmation';
                        var10[var11] = var14;
                    case 1000: // try_end1
                        return var10;
                    case 1003:
                        return var9;
                    case 1006:
                        return var4;
                    case 1009: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 9);
                        var3 = var9;
                        var11 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var10 = 9;
                        var4 = var4[var10];
                        var4 = var11.bind(var7)(var4);
                        var4 = var4.BillingError;
                        var4 = var9 instanceof var4;
                        if (var4) {
                            _fun59106_ip = 1095;
                            continue _fun59106
                        }
                    case 1047:
                        var9 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var10];
                        var4 = var9.bind(var7)(var4);
                        var10 = var4.BillingError;
                        var31 = var3;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var10
                            }
                        });
                        var32 = var9;
                        var4 = new var32[var10](var31, var30);
                        var9 = var4 instanceof Object ? var4 : var9;
                        _fun59106_ip = 1098;
                        continue _fun59106;
                    case 1095:
                        var9 = var3;
                    case 1098:
                        var1 = var9;
                        var11 = var9.code;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var9 = 10;
                        var10 = var10[var9];
                        var10 = var14.bind(var7)(var10);
                        var10 = var10.ErrorCodes;
                        var10 = var10.CONFIRMATION_REQUIRED;
                        var10 = var11 !== var10;
                        var4 = var10;
                        if (!var10) {
                            _fun59106_ip = 1189;
                            continue _fun59106
                        }
                    case 1148:
                        var10 = var1;
                        var11 = var10.code;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var9];
                        var10 = var14.bind(var7)(var10);
                        var10 = var10.ErrorCodes;
                        var10 = var10.AUTHENTICATION_REQUIRED;
                        var4 = var11 !== var10;
                    case 1189:
                        if (var4) {
                            _fun59106_ip = 1244;
                            continue _fun59106
                        }
                    case 1192:
                        var10 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var11 = var10.bind(var7)(var4);
                        var10 = var11.dispatch;
                        var4 = {};
                        var14 = 'SKU_PURCHASE_AWAIT_CONFIRMATION';
                        var4.type = var14;
                        var14 = var6;
                        var4.skuId = var14;
                        var4.isGift = var13;
                        var4 = var10.bind(var11)(var4);
                    case 1244:
                        var10 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var8 = var4[var8];
                        var11 = var10.bind(var7)(var8);
                        var10 = var11.dispatch;
                        var8 = {};
                        var13 = 'SKU_PURCHASE_FAIL';
                        var8.type = var13;
                        var8.applicationId = var12;
                        var8.skuId = var6;
                        var6 = var1;
                        var8.error = var6;
                        var8 = var10.bind(var11)(var8);
                        var6 = var6.code;
                        var8 = _closure1_slot0;
                        var4 = var4[var9];
                        var4 = var8.bind(var7)(var4);
                        var4 = var4.ErrorCodes;
                        var4 = var4.CONFIRMATION_REQUIRED;
                        if (!(var6 === var4)) {
                            _fun59106_ip = 1407;
                            continue _fun59106
                        }
                    case 1331:
                        var4 = var3;
                        var4 = var4.body;
                        var4 = var4.payment_id;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 13;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        if (var4) {
                            _fun59106_ip = 1387;
                            continue _fun59106
                        }
                    case 1368:
                        var6 = var5.dispatchConfirmationError;
                        var4 = 'payment id cannot be null on redirected confirmations.';
                        var4 = var6.bind(var5)(var4);
                        throw var4;
                    case 1387:
                        var4 = var5.handleConfirmation;
                        var3 = var3.body;
                        var2 = var4.bind(var5)(var3, var2);
                        return var2;
                    case 1407:
                        throw var1;
                    case 1409:
                        return var0;
                }
            };
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
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59110: for (var _fun59110_ip = 0;;) switch (_fun59110_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59110_ip = 239;
                            continue _fun59110
                        }
                    case 10: // try_start_0
                        var6 = {};
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 14;
                        var1 = var8[var1];
                        var4 = undefined;
                        var3 = var5.bind(var4)(var1);
                        var1 = var3.getPurchaseToken;
                        var1 = var1.bind(var3)();
                        var6.purchase_token = var1;
                        var3 = {};
                        var1 = 11;
                        var1 = var8[var1];
                        var1 = var5.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.post;
                        var1 = {};
                        var7 = _closure1_slot8;
                        var7 = var7.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION;
                        var1.url = var7;
                        var1.body = var6;
                        var6 = true;
                        var1.oldFormErrors = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 119);
                    case 117:
                        return var1;
                    case 119:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun59110_ip = 140;
                            continue _fun59110
                        }
                    case 125:
                        var9 = var1.body;
                        var10 = var3;
                        var4 = copyDataProperties(var10, var9);
                    case 137: // try_end0
                        return var3;
                    case 140:
                        return var1;
                    case 143: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var2 = var6;
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var5 = 9;
                        var3 = var3[var5];
                        var4 = undefined;
                        var3 = var7.bind(var4)(var3);
                        var3 = var3.BillingError;
                        var3 = var6 instanceof var3;
                        if (var3) {
                            _fun59110_ip = 234;
                            continue _fun59110
                        }
                    case 186:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var4)(var1);
                        var4 = var1.BillingError;
                        var10 = var2;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var11 = var3;
                        var1 = new var11[var4](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var3;
                        _fun59110_ip = 237;
                        continue _fun59110;
                    case 234:
                        var1 = var2;
                    case 237:
                        throw var1;
                    case 239:
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var6 = var3.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot7 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = false;
    var3.isGift = var6;
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/SKUActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSKU = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchPublishedSKU = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchTestSKUsForApplication = var3;
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
    var2.fetchPurchasePreview = var3;
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
    var2.grantChannelBranchEntitlement = var3;
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
    var2.orderSKU = var3;
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
    var2.purchaseSKU = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resendPaymentVerificationEmail = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SKU_PURCHASE_CLEAR_ERROR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearPurchaseError = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP';
            var0.type = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.showPurchaseConfirmationStep = var3;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SKU_PURCHASE_UPDATE_IS_GIFT';
        var1.type = var4;
        var4 = arg0;
        var1.isGift = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateSKUPaymentIsGift = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7224, 3499, 7225, 660, 806, 3361, 3351, 4649, 3350, 3353, 507, 3125, 3443, 3452, 1304, 2]);