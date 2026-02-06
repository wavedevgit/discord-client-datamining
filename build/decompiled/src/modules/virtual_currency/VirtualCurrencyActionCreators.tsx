// modules/virtual_currency/VirtualCurrencyActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun75661: for (var _fun75661_ip = 0;;) switch (_fun75661_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75661_ip = 323;
                            continue _fun75661
                        }
                    case 10:
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 3;
                        var5 = var1[var4];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.wait;
                        var5 = function() { // Environment: var5
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'VIRTUAL_CURRENCY_BALANCE_FETCH';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = var6.bind(var7)(var5);
                    case 55: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 4;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var7 = var5.HTTP;
                        var6 = var7.get;
                        var5 = {};
                        var8 = _closure1_slot4;
                        var8 = var8.VIRTUAL_CURRENCY_USER_BALANCE;
                        var5.url = var8;
                        var8 = false;
                        var5.rejectWithError = var8;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address = 116);
                    case 114:
                        return var5;
                    case 116:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun75661_ip = 185;
                            continue _fun75661
                        }
                    case 122:
                        var6 = var5.body;
                        var9 = var6.balance;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS';
                        var6.type = var10;
                        var6.balance = var9;
                        var6 = var7.bind(var8)(var6);
                        var6 = var5.body;
                    case 182: // try_end0
                        return var6;
                    case 185:
                        return var5;
                    case 188: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var3 = var6;
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var7 = 5;
                        var5 = var5[var7];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.BillingError;
                        var5 = var6 instanceof var5;
                        if (var5) {
                            _fun75661_ip = 274;
                            continue _fun75661
                        }
                    case 226:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var5 = var6.bind(var1)(var5);
                        var7 = var5.BillingError;
                        var11 = var3;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var12 = var6;
                        var5 = new var12[var7](var11, var10);
                        var5 = var5 instanceof Object ? var5 : var6;
                        _fun75661_ip = 277;
                        continue _fun75661;
                    case 274:
                        var5 = var3;
                    case 277:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL';
                        var2.type = var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 323:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun75665: for (var _fun75665_ip = 0;;) switch (_fun75665_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75665_ip = 664;
                            continue _fun75665
                        }
                    case 15:
                        var2 = var1.skuId;
                        var12 = var2;
                        var _closure4_slot0 = var2;
                        var18 = var1.loadId;
                        var9 = var1.onRedeemStart;
                        var11 = var1.onRedeemSucceed;
                        var4 = var1.onRedeemFail;
                        var10 = var1.shouldRefetchBalance;
                        var2 = undefined;
                        if (!(var10 === var2)) {
                            _fun75665_ip = 68;
                            continue _fun75665
                        }
                    case 66:
                        var10 = true;
                    case 68:
                        var7 = var10;
                        var1 = var1.isRental;
                        if (!(var1 === var2)) {
                            _fun75665_ip = 83;
                            continue _fun75665
                        }
                    case 81:
                        var1 = false;
                    case 83:
                        var17 = var1;
                        var13 = undefined;
                        var3 = undefined;
                        SaveGenerator(address = 94);
                    case 92:
                        return var2;
                    case 94:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun75665_ip = 661;
                            continue _fun75665
                        }
                    case 103:
                        var15 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var10 = 3;
                        var14 = var14[var10];
                        var15 = var15.bind(var2)(var14);
                        var14 = var15.wait;
                        var6 = function() { // Environment: var6
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'VIRTUAL_CURRENCY_REDEEM_START';
                            var1.type = var4;
                            var4 = _closure4_slot0;
                            var1.skuId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var6 = var14.bind(var15)(var6);
                        var6 = null;
                        if (!(var6 != var9)) {
                            _fun75665_ip = 154;
                            continue _fun75665
                        }
                    case 150:
                        var9 = var9.bind(var2)();
                    case 154: // try_start_0
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 4;
                        var9 = var15[var9];
                        var9 = var14.bind(var2)(var9);
                        var15 = var9.HTTP;
                        var14 = var15.post;
                        var9 = {};
                        var20 = _closure1_slot4;
                        var19 = var20.VIRTUAL_CURRENCY_SKU_REDEEM;
                        var16 = var12;
                        var16 = var19.bind(var20)(var16);
                        var9.url = var16;
                        var16 = {};
                        var16.checkout_session_id = var18;
                        var16.is_rental = var17;
                        var9.body = var16;
                        var16 = false;
                        var9.rejectWithError = var16;
                        var9 = var14.bind(var15)(var9);
                        SaveGenerator(address = 244);
                    case 242:
                        return var9;
                    case 244:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 14);
                        if (var14) {
                            _fun75665_ip = 492;
                            continue _fun75665
                        }
                    case 253:
                        var14 = var9.body;
                        var13 = var14;
                        if (!(var6 != var14)) {
                            _fun75665_ip = 380;
                            continue _fun75665
                        }
                    case 265:
                        var14 = global;
                        var16 = var14.Array;
                        var15 = var16.isArray;
                        var14 = var13;
                        var14 = var15.bind(var16)(var14);
                        if (!var14) {
                            _fun75665_ip = 380;
                            continue _fun75665
                        }
                    case 289:
                        var15 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var14 = var14[var10];
                        var16 = var15.bind(var2)(var14);
                        var15 = var16.dispatch;
                        var14 = {};
                        var17 = 'VIRTUAL_CURRENCY_REDEEM_SUCCESS';
                        var14.type = var17;
                        var17 = var12;
                        var14.skuId = var17;
                        var17 = var13;
                        var14.entitlements = var17;
                        var14 = var15.bind(var16)(var14);
                        var14 = var7;
                        if (!var14) {
                            _fun75665_ip = 356;
                            continue _fun75665
                        }
                    case 348:
                        var14 = _closure1_slot6;
                        var14 = var14.bind(var2)();
                    case 356:
                        var14 = var11;
                        if (!(var6 != var14)) {
                            _fun75665_ip = 374;
                            continue _fun75665
                        }
                    case 363:
                        var14 = var11;
                        var11 = var13;
                        var11 = var14.bind(var2)(var11);
                    case 374:
                        var11 = var13;
                    case 377: // try_end0
                        return var11;
                    case 380: // try_start_1
                        var11 = global;
                        var11 = var11.Error;
                        var16 = var13;
                        var13 = var11.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var11
                            }
                        });
                        var15 = 'Could not read entitlements from Virtual Currency redemption response. Response: ';
                        var23 = var13;
                        var22 = var15;
                        var21 = var16;
                        var11 = new var23[var11](var22, var21, var20);
                        var11 = var11 instanceof Object ? var11 : var13;
                        var14 = _closure1_slot5;
                        var13 = var14.error;
                        var13 = var13.bind(var14)(var15, var16);
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var13 = 6;
                        var13 = var15[var13];
                        var15 = var14.bind(var2)(var13);
                        var14 = var15.captureException;
                        var13 = {};
                        var16 = {};
                        var17 = 'virtual_currency';
                        var16.app_context = var17;
                        var13.tags = var16;
                        var13 = var14.bind(var15)(var11, var13);
                        throw var11;
                    case 492: // try_end1
                        return var9;
                    case 495: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 11);
                        var8 = var11;
                        var14 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var13 = 5;
                        var9 = var9[var13];
                        var9 = var14.bind(var2)(var9);
                        var9 = var9.BillingError;
                        var9 = var11 instanceof var9;
                        if (var9) {
                            _fun75665_ip = 581;
                            continue _fun75665
                        }
                    case 533:
                        var11 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var13];
                        var9 = var11.bind(var2)(var9);
                        var13 = var9.BillingError;
                        var22 = var8;
                        var11 = var13.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var13
                            }
                        });
                        var23 = var11;
                        var9 = new var23[var13](var22, var21);
                        var11 = var9 instanceof Object ? var9 : var11;
                        _fun75665_ip = 584;
                        continue _fun75665;
                    case 581:
                        var11 = var8;
                    case 584:
                        var3 = var11;
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var10 = var9.bind(var2)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var13 = 'VIRTUAL_CURRENCY_REDEEM_FAIL';
                        var8.type = var13;
                        var8.skuId = var12;
                        var8.error = var11;
                        var8 = var9.bind(var10)(var8);
                        if (!var7) {
                            _fun75665_ip = 646;
                            continue _fun75665
                        }
                    case 638:
                        var5 = _closure1_slot6;
                        var5 = var5.bind(var2)();
                    case 646:
                        var5 = var4;
                        if (!(var6 != var5)) {
                            _fun75665_ip = 658;
                            continue _fun75665
                        }
                    case 653:
                        var3 = var4.bind(var2)(var3);
                    case 658:
                        return var2;
                    case 661:
                        return var1;
                    case 664:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'VirtualCurrencyActionCreators';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/VirtualCurrencyActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.fetchVirtualCurrencyBalance = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.redeemVirtualCurrencyForSKU = var3;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY';
        var0.type = var3;
        var3 = arg0;
        var0.balancePillOverlay = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.setBalancePillOverlay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 3, 806, 507, 3352, 1207, 2]);