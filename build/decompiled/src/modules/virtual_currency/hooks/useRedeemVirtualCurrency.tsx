// modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.useState;
    var _closure1_slot5 = var7;
    var7 = var3.useEffect;
    var _closure1_slot6 = var7;
    var7 = var3.useRef;
    var _closure1_slot7 = var7;
    var3 = var3.useCallback;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot10 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useRedeemVirtualCurrency, environment: var1
        _fun78490: for (var _fun78490_ip = 0;;) switch (_fun78490_ip) {
            case 0:
                var12 = _closure1_slot5;
                var10 = undefined;
                var2 = '';
                var2 = var12.bind(var10)(var2);
                var11 = _closure1_slot4;
                var9 = 2;
                var4 = var11.bind(var10)(var2, var9);
                var3 = 0;
                var2 = var4[var3];
                var8 = 1;
                var4 = var4[var8];
                var _closure2_slot0 = var4;
                var4 = new Array(0);
                var4 = var12.bind(var10)(var4);
                var4 = var11.bind(var10)(var4, var9);
                var7 = var4[var3];
                var _closure2_slot1 = var7;
                var4 = var4[var8];
                var _closure2_slot2 = var4;
                var5 = null;
                var4 = var12.bind(var10)(var5);
                var4 = var11.bind(var10)(var4, var9);
                var6 = var4[var3];
                var _closure2_slot3 = var6;
                var4 = var4[var8];
                var _closure2_slot4 = var4;
                var4 = false;
                var4 = var12.bind(var10)(var4);
                var4 = var11.bind(var10)(var4, var9);
                var3 = var4[var3];
                var4 = var4[var8];
                var _closure2_slot5 = var4;
                var4 = _closure1_slot7;
                var4 = var4.bind(var10)(var5);
                var _closure2_slot6 = var4;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 5;
                var4 = var12[var4];
                var8 = var5.bind(var10)(var4);
                var5 = var8.useConfig;
                var4 = {};
                var9 = 'orb_checkout_modal';
                var4.location = var9;
                var4 = var5.bind(var8)(var4);
                var4 = var4.enabled;
                var _closure2_slot7 = var4;
                var11 = _closure1_slot0;
                var9 = 6;
                var5 = var12[var9];
                var15 = var11.bind(var10)(var5);
                var14 = var15.useStateFromStores;
                var8 = _closure1_slot9;
                var13 = new Array(1);
                var13[0] = var8;
                var5 = function() { // Environment: var0
                    var0 = _closure1_slot9;
                    var0 = var0.isCreatingOrder;
                    return var0;
                };
                var5 = var14.bind(var15)(var13, var5);
                var9 = var12[var9];
                var12 = var11.bind(var10)(var9);
                var11 = var12.useStateFromStores;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    var0 = _closure1_slot9;
                    var0 = var0.currentOrder;
                    return var0;
                };
                var8 = var11.bind(var12)(var9, var8);
                var _closure2_slot8 = var8;
                var9 = _closure1_slot6;
                var11 = new Array(2);
                var11[0] = var8;
                var11[1] = var4;
                var8 = function() { // Environment: var0
                    _fun78493: for (var _fun78493_ip = 0;;) switch (_fun78493_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            if (!var1) {
                                _fun78493_ip = 20;
                                continue _fun78493
                            }
                        case 10:
                            var3 = _closure2_slot8;
                            var2 = null;
                            var1 = var2 != var3;
                        case 20:
                            if (!var1) {
                                _fun78493_ip = 61;
                                continue _fun78493
                            }
                        case 23:
                            var2 = _closure2_slot6;
                            var2 = var2.current;
                            var3 = null;
                            var4 = var3 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun78493_ip = 48;
                                continue _fun78493
                            }
                        case 43:
                            var3 = var2.id;
                        case 48:
                            var2 = _closure2_slot8;
                            var2 = var2.id;
                            var1 = var3 !== var2;
                        case 61:
                            if (!var1) {
                                _fun78493_ip = 78;
                                continue _fun78493
                            }
                        case 64:
                            var1 = _closure2_slot6;
                            var0 = _closure2_slot8;
                            var1.current = var0;
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8, var11);
                var11 = _closure1_slot8;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun78496: for (var _fun78496_ip = 0;;) switch (_fun78496_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arg1;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun78496_ip = 198;
                                        continue _fun78496
                                    }
                                case 13:
                                    var7 = arg0;
                                    var5 = undefined;
                                    var6 = undefined;
                                    var3 = undefined;
                                    var4 = null;
                                    if (!(var4 == var1)) {
                                        _fun78496_ip = 65;
                                        continue _fun78496
                                    }
                                case 28:
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var2 = 7;
                                    var2 = var9[var2];
                                    var9 = var8.bind(var5)(var2);
                                    var8 = var9.getApplicationIdForOrbSKU;
                                    var2 = var7;
                                    var1 = var8.bind(var9)(var2);
                                case 65:
                                    var6 = var1;
                                case 68: // try_start_0
                                    var2 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var9[var1];
                                    var1 = var2.bind(var5)(var1);
                                    var5 = var1.HTTP;
                                    var2 = var5.get;
                                    var1 = {};
                                    var9 = _closure1_slot10;
                                    var8 = var9.ENTITLEMENTS_FOR_APPLICATION;
                                    var6 = var8.bind(var9)(var6);
                                    var1.url = var6;
                                    var6 = {};
                                    var6.sku_ids = var7;
                                    var7 = true;
                                    var6.exclude_consumed = var7;
                                    var1.query = var6;
                                    var6 = false;
                                    var1.rejectWithError = var6;
                                    var1 = var2.bind(var5)(var1);
                                    SaveGenerator(address = 156);
                                case 154:
                                    return var1;
                                case 156:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun78496_ip = 186;
                                        continue _fun78496
                                    }
                                case 162:
                                    var2 = var1.body;
                                    var3 = var2;
                                    if (!(var4 == var2)) {
                                        _fun78496_ip = 180;
                                        continue _fun78496
                                    }
                                case 174:
                                    var2 = new Array(0);
                                    _fun78496_ip = 183;
                                    continue _fun78496;
                                case 180:
                                    var2 = var3;
                                case 183: // try_end0
                                    return var2;
                                case 186:
                                    return var1;
                                case 189: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var1 = new Array(0);
                                    return var1;
                                case 198:
                                    return var0;
                            }
                        };
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
                var8 = var1.bind(var10)();
                var1 = new Array(0);
                var12 = var11.bind(var10)(var8, var1);
                var _closure2_slot9 = var12;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0, arg1, arg2) { // Environment: var0
                        var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                            _fun78500: for (var _fun78500_ip = 0;;) switch (_fun78500_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun78500_ip = 1020;
                                        continue _fun78500
                                    }
                                case 10:
                                    var16 = arg0;
                                    var13 = arg1;
                                    var15 = arg2;
                                    var3 = undefined;
                                    var18 = undefined;
                                    var9 = undefined;
                                    var6 = undefined;
                                    var5 = undefined;
                                    var11 = undefined;
                                    var10 = undefined;
                                    var14 = undefined;
                                    var4 = _closure2_slot6;
                                    var4 = var4.current;
                                    var18 = var4;
                                    var17 = null;
                                    if (!(var17 != var4)) {
                                        _fun78500_ip = 946;
                                        continue _fun78500
                                    }
                                case 59:
                                    var7 = _closure2_slot5;
                                    var4 = true;
                                    var4 = var7.bind(var3)(var4);
                                    var4 = _closure2_slot4;
                                    var4 = var4.bind(var3)(var17);
                                case 79: // try_start_0
                                    var8 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var4 = 10;
                                    var4 = var12[var4];
                                    var12 = var8.bind(var3)(var4);
                                    var8 = var12.signOrder;
                                    var4 = {};
                                    var19 = var18.id;
                                    var4.orderId = var19;
                                    var18 = var18.revision;
                                    var4.expectedRevision = var18;
                                    var4.loadId = var13;
                                    var4 = var8.bind(var12)(var4);
                                    SaveGenerator(address = 145);
                                case 143:
                                    return var4;
                                case 145:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                                    if (var8) {
                                        _fun78500_ip = 840;
                                        continue _fun78500
                                    }
                                case 154:
                                    var9 = var4;
                                    var8 = _closure2_slot6;
                                    var8.current = var4;
                                    var13 = var4.status;
                                    var18 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var12 = 11;
                                    var8 = var8[var12];
                                    var8 = var18.bind(var3)(var8);
                                    var8 = var8.OrderStatus;
                                    var8 = var8.SIGNED;
                                    if (!(var13 === var8)) {
                                        _fun78500_ip = 490;
                                        continue _fun78500
                                    }
                                case 211:
                                    var13 = _closure1_slot0;
                                    var18 = _closure1_slot2;
                                    var8 = 7;
                                    var8 = var18[var8];
                                    var13 = var13.bind(var3)(var8);
                                    var8 = var13.getApplicationIdForOrbSKU;
                                    var18 = var16;
                                    var13 = var8.bind(var13)(var18);
                                    var11 = var13;
                                    var8 = _closure2_slot9;
                                    var8 = var8.bind(var3)(var18, var13);
                                    SaveGenerator(address = 262);
                                case 260:
                                    return var8;
                                case 262:
                                    ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 13);
                                    if (var13) {
                                        _fun78500_ip = 487;
                                        continue _fun78500
                                    }
                                case 271:
                                    var10 = var8;
                                    var13 = var8.length;
                                    var18 = 0;
                                    if (!(var18 !== var13)) {
                                        _fun78500_ip = 328;
                                        continue _fun78500
                                    }
                                case 285:
                                    var19 = _closure2_slot2;
                                    var13 = var10;
                                    var13 = var19.bind(var3)(var13);
                                    var19 = _closure2_slot5;
                                    var13 = false;
                                    var13 = var19.bind(var3)(var13);
                                    var13 = var15;
                                    if (!(var17 != var13)) {
                                        _fun78500_ip = 442;
                                        continue _fun78500
                                    }
                                case 318:
                                    var13 = var15;
                                    var10 = var13.bind(var3)(var10);
                                    _fun78500_ip = 442;
                                    continue _fun78500;
                                case 328:
                                    var13 = global;
                                    var20 = var13.Promise;
                                    var10 = var20.prototype;
                                    var19 = Object.create(var10, {
                                        constructor: {
                                            value: var20
                                        }
                                    });
                                    var22 = function(arg0) { // Environment: var10
                                        var0 = global;
                                        var3 = var0.setTimeout;
                                        var2 = undefined;
                                        var1 = arg0;
                                        var0 = 500;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                    };
                                    var23 = var19;
                                    var10 = new var23[var20](var22, var21);
                                    var10 = var10 instanceof Object ? var10 : var19;
                                    SaveGenerator(address = 369);
                                case 367:
                                    return var10;
                                case 369:
                                    ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 19);
                                    if (var19) {
                                        _fun78500_ip = 484;
                                        continue _fun78500
                                    }
                                case 375:
                                    var19 = _closure2_slot9;
                                    var11 = var19.bind(var3)(var16, var11);
                                    SaveGenerator(address = 389);
                                case 387:
                                    return var11;
                                case 389:
                                    ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 16);
                                    if (var16) {
                                        _fun78500_ip = 481;
                                        continue _fun78500
                                    }
                                case 395:
                                    var14 = var11;
                                    var16 = var11.length;
                                    if (!(var18 !== var16)) {
                                        _fun78500_ip = 447;
                                        continue _fun78500
                                    }
                                case 407:
                                    var18 = _closure2_slot2;
                                    var16 = var14;
                                    var16 = var18.bind(var3)(var16);
                                    var18 = _closure2_slot5;
                                    var16 = false;
                                    var16 = var18.bind(var3)(var16);
                                    var16 = var15;
                                    if (!(var17 != var16)) {
                                        _fun78500_ip = 442;
                                        continue _fun78500
                                    }
                                case 437:
                                    var14 = var15.bind(var3)(var14);
                                case 442: // try_end0
                                    _fun78500_ip = 943;
                                    continue _fun78500;
                                case 447: // try_start_1
                                    var15 = var13.Error;
                                    var13 = var15.prototype;
                                    var14 = Object.create(var13, {
                                        constructor: {
                                            value: var15
                                        }
                                    });
                                    var22 = 'No entitlements found after order signing';
                                    var23 = var14;
                                    var13 = new var23[var15](var22, var21);
                                    var13 = var13 instanceof Object ? var13 : var14;
                                    throw var13;
                                case 481: // try_end1
                                    return var11;
                                case 484:
                                    return var10;
                                case 487:
                                    return var8;
                                case 490: // try_start_2
                                    var8 = var9;
                                    var6 = var8;
                                    var8 = var8.errors;
                                    if (!var8) {
                                        _fun78500_ip = 528;
                                        continue _fun78500
                                    }
                                case 505:
                                    var8 = var6;
                                    var8 = var8.errors;
                                    var10 = var8.length;
                                    var8 = 0;
                                    if (!(!(var10 > var8))) {
                                        _fun78500_ip = 662;
                                        continue _fun78500
                                    }
                                case 528:
                                    var8 = var9;
                                    var10 = var8.status;
                                    var11 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var12];
                                    var8 = var11.bind(var3)(var8);
                                    var8 = var8.OrderStatus;
                                    var8 = var8.DRAFT;
                                    if (!(var10 !== var8)) {
                                        _fun78500_ip = 626;
                                        continue _fun78500
                                    }
                                case 569:
                                    var8 = global;
                                    var10 = var8.Error;
                                    var11 = var9.status;
                                    var8 = var8.HermesInternal;
                                    var9 = var8.concat;
                                    var8 = 'Unexpected order status: ';
                                    var22 = var9.bind(var8)(var11);
                                    var9 = var10.prototype;
                                    var9 = Object.create(var9, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var23 = var9;
                                    var8 = new var23[var10](var22, var21);
                                    var8 = var8 instanceof Object ? var8 : var9;
                                    throw var8;
                                case 626:
                                    var8 = global;
                                    var10 = var8.Error;
                                    var8 = var10.prototype;
                                    var9 = Object.create(var8, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var22 = 'Order could not be signed.';
                                    var23 = var9;
                                    var8 = new var23[var10](var22, var21);
                                    var8 = var8 instanceof Object ? var8 : var9;
                                    throw var8;
                                case 662:
                                    var9 = var6.errors;
                                    var5 = var9;
                                    var8 = var9.includes;
                                    var6 = 2000;
                                    var6 = var8.bind(var9)(var6);
                                    if (var6) {
                                        _fun78500_ip = 761;
                                        continue _fun78500
                                    }
                                case 690:
                                    var8 = var5;
                                    var6 = var8.join;
                                    var5 = ', ';
                                    var9 = var6.bind(var8)(var5);
                                    var5 = global;
                                    var6 = var5.HermesInternal;
                                    var8 = var6.concat;
                                    var6 = 'Order signing failed with errors: ';
                                    var22 = var8.bind(var6)(var9);
                                    var5 = var5.Error;
                                    var6 = var5.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var23 = var6;
                                    var5 = new var23[var5](var22, var21);
                                    var5 = var5 instanceof Object ? var5 : var6;
                                    throw var5;
                                case 761:
                                    var9 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var6 = 9;
                                    var5 = var8[var6];
                                    var10 = var9.bind(var3)(var5);
                                    var5 = var10.prototype;
                                    var9 = Object.create(var5, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var22 = 'Insufficient balance';
                                    var23 = var9;
                                    var5 = new var23[var10](var22, var21);
                                    var5 = var5 instanceof Object ? var5 : var9;
                                    var7 = _closure1_slot0;
                                    var6 = var8[var6];
                                    var6 = var7.bind(var3)(var6);
                                    var6 = var6.ErrorCodes;
                                    var6 = var6.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE;
                                    var5.code = var6;
                                    throw var5;
                                case 840: // try_end2
                                    return var4;
                                case 843: // catch_target0 // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 7);
                                    var2 = var7;
                                    var8 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var6 = 9;
                                    var5 = var5[var6];
                                    var5 = var8.bind(var3)(var5);
                                    var5 = var7 instanceof var5;
                                    if (var5) {
                                        _fun78500_ip = 920;
                                        continue _fun78500
                                    }
                                case 878:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var6];
                                    var6 = var5.bind(var3)(var4);
                                    var22 = var2;
                                    var5 = var6.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var23 = var5;
                                    var4 = new var23[var6](var22, var21);
                                    var4 = var4 instanceof Object ? var4 : var5;
                                    _fun78500_ip = 923;
                                    continue _fun78500;
                                case 920:
                                    var4 = var2;
                                case 923:
                                    var2 = _closure2_slot4;
                                    var2 = var2.bind(var3)(var4);
                                    var4 = _closure2_slot5;
                                    var2 = false;
                                    var2 = var4.bind(var3)(var2);
                                case 943:
                                    return var3;
                                case 946:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 9;
                                    var2 = var5[var2];
                                    var5 = var4.bind(var3)(var2);
                                    var2 = var5.prototype;
                                    var4 = Object.create(var2, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var22 = 'Order not created yet';
                                    var23 = var4;
                                    var2 = new var23[var5](var22, var21);
                                    var4 = var2 instanceof Object ? var2 : var4;
                                    var2 = _closure2_slot4;
                                    var2 = var2.bind(var3)(var4);
                                    var2 = _closure2_slot5;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = undefined;
                                    return var1;
                                case 1020:
                                    return var0;
                            }
                        };
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
                var8 = var1.bind(var10)();
                var1 = new Array(1);
                var1[0] = var12;
                var12 = var11.bind(var10)(var8, var1);
                var _closure2_slot10 = var12;
                var8 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun78503: for (var _fun78503_ip = 0;;) switch (_fun78503_ip) {
                        case 0:
                            var3 = arguments[3];
                            var0 = arg2;
                            var _closure3_slot0 = var0;
                            var2 = undefined;
                            if (!(var3 === var2)) {
                                _fun78503_ip = 20;
                                continue _fun78503
                            }
                        case 18:
                            var3 = false;
                        case 20:
                            var1 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 12;
                            var0 = var5[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.redeemVirtualCurrencyForSKU;
                            var0 = {};
                            var5 = arg0;
                            var0.skuId = var5;
                            var5 = arg1;
                            var0.loadId = var5;
                            var5 = function() { // Original name: onRedeemStart, environment: var4
                                var3 = _closure2_slot5;
                                var0 = undefined;
                                var2 = true;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure2_slot4;
                                var1 = null;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onRedeemStart = var5;
                            var5 = function(arg0) { // Original name: onRedeemSucceed, environment: var4
                                _fun78505: for (var _fun78505_ip = 0;;) switch (_fun78505_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = _closure2_slot2;
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var3 = _closure2_slot5;
                                        var1 = false;
                                        var1 = var3.bind(var0)(var1);
                                        var4 = _closure3_slot0;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun78505_ip = 50;
                                            continue _fun78505
                                        }
                                    case 41:
                                        var1 = _closure3_slot0;
                                        var1 = var1.bind(var0)(var2);
                                    case 50:
                                        return var0;
                                }
                            };
                            var0.onRedeemSucceed = var5;
                            var4 = function(arg0) { // Original name: onRedeemFail, environment: var4
                                var3 = _closure2_slot4;
                                var0 = undefined;
                                var2 = arg0;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure2_slot5;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onRedeemFail = var4;
                            var0.isRental = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var11.bind(var10)(var8, var1);
                var _closure2_slot11 = var1;
                var8 = new Array(3);
                var8[0] = var4;
                var8[1] = var12;
                var8[2] = var1;
                var1 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun78507: for (var _fun78507_ip = 0;;) switch (_fun78507_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var1 = arguments[3];
                            var2 = undefined;
                            if (!(var1 === var2)) {
                                _fun78507_ip = 20;
                                continue _fun78507
                            }
                        case 18:
                            var1 = false;
                        case 20:
                            var6 = _closure2_slot7;
                            if (var6) {
                                _fun78507_ip = 54;
                                continue _fun78507
                            }
                        case 30:
                            var6 = _closure2_slot11;
                            var11 = undefined;
                            var10 = var5;
                            var9 = var4;
                            var8 = var3;
                            var7 = var1;
                            var6 = var11[var6](var10, var9, var8, var7, var6);
                            _fun78507_ip = 68;
                            continue _fun78507;
                        case 54:
                            if (var1) {
                                _fun78507_ip = 70;
                                continue _fun78507
                            }
                        case 57:
                            var1 = _closure2_slot10;
                            var1 = var1.bind(var2)(var5, var4, var3);
                        case 68:
                            return var2;
                        case 70:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var1 = var4[var1];
                            var4 = var3.bind(var2)(var1);
                            var1 = var4.prototype;
                            var3 = Object.create(var1, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var10 = 'Rental orders are not supported via Orders API yet';
                            var11 = var3;
                            var1 = new var11[var4](var10, var9);
                            var3 = var1 instanceof Object ? var1 : var3;
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var2)(var3);
                            var1 = _closure2_slot5;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var11.bind(var10)(var1, var8);
                var8 = new Array(2);
                var8[0] = var7;
                var8[1] = var6;
                var0 = function() { // Environment: var0
                    _fun78508: for (var _fun78508_ip = 0;;) switch (_fun78508_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun78508_ip = 119;
                                continue _fun78508
                            }
                        case 15:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 13;
                            var5 = var8[var1];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var5);
                            var7 = var5.intl;
                            var5 = var7.format;
                            var1 = var8[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.t;
                            var3 = var1["7gHWrd"];
                            var1 = {};
                            var8 = '1 orb';
                            var1.amount = var8;
                            var8 = _closure2_slot3;
                            var8 = var8.message;
                            var1.errorMessage = var8;
                            var3 = var5.bind(var7)(var3, var1);
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var4)(var3);
                            _fun78508_ip = 417;
                            continue _fun78508;
                        case 119:
                            var1 = _closure2_slot1;
                            if (!(var2 != var1)) {
                                _fun78508_ip = 142;
                                continue _fun78508
                            }
                        case 127:
                            var1 = _closure2_slot1;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(!(var2 > var1))) {
                                _fun78508_ip = 162;
                                continue _fun78508
                            }
                        case 142:
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var1 = '';
                            var1 = var3.bind(var2)(var1);
                            _fun78508_ip = 417;
                            continue _fun78508;
                        case 162:
                            var3 = _closure2_slot1;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var6
                                _fun78509: for (var _fun78509_ip = 0;;) switch (_fun78509_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.sku;
                                        var0 = null;
                                        var2 = var0 == var1;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun78509_ip = 25;
                                            continue _fun78509
                                        }
                                    case 20:
                                        var0 = var1.name;
                                    case 25:
                                        return var0;
                                }
                            };
                            var10 = var2.bind(var3)(var1);
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 13;
                            var4 = var7[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var4);
                            var5 = var4.intl;
                            var4 = var5.format;
                            var1 = var7[var1];
                            var1 = var3.bind(var2)(var1);
                            var1 = var1.t;
                            var3 = var1.JxNFav;
                            var1 = {};
                            var7 = '1 orb';
                            var1.amountDescription = var7;
                            var7 = var10.length;
                            var13 = 'SKUs';
                            var9 = 1;
                            if (!(var9 === var7)) {
                                _fun78508_ip = 277;
                                continue _fun78508
                            }
                        case 273:
                            var13 = 'SKU';
                        case 277:
                            var7 = var10.join;
                            var8 = ', ';
                            var12 = var7.bind(var10)(var8);
                            var7 = _closure2_slot1;
                            var7 = var7.length;
                            var11 = 'IDs';
                            if (!(var9 === var7)) {
                                _fun78508_ip = 316;
                                continue _fun78508
                            }
                        case 312:
                            var11 = 'ID';
                        case 316:
                            var9 = _closure2_slot1;
                            var7 = var9.map;
                            var6 = function(arg0) { // Environment: var6
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var7 = var7.bind(var9)(var6);
                            var6 = var7.join;
                            var14 = var6.bind(var7)(var8);
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var9 = var6.concat;
                            var21 = '';
                            var7 = ': ';
                            var17 = '. Entitlement ';
                            var20 = var13;
                            var19 = var7;
                            var18 = var12;
                            var16 = var11;
                            var15 = var7;
                            var6 = var21[var9](var20, var19, var18, var17, var16, var15, var14, var13);
                            var1.redeemedItemDescription = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            var0 = _closure2_slot0;
                            var0 = var0.bind(var2)(var1);
                        case 417:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var9.bind(var10)(var0, var8);
                var0 = {};
                var0.entitlements = var7;
                var0.error = var6;
                if (var3) {
                    _fun78490_ip = 470;
                    continue _fun78490
                }
            case 461:
                if (!var4) {
                    _fun78490_ip = 467;
                    continue _fun78490
                }
            case 464:
                var4 = var5;
            case 467:
                var3 = var4;
            case 470:
                var0.isSubmitting = var3;
                var0.responseMessage = var2;
                var0.redeemVirtualCurrency = var1;
                return var0;
        }
    };
    var2.useRedeemVirtualCurrency = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 9961, 660, 9962, 566, 5240, 507, 3312, 9963, 7070, 9494, 1234, 2]);