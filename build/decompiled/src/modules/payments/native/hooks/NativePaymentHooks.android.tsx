// modules/payments/native/hooks/NativePaymentHooks.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var0 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'Native hook not supported for android';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'Native hook not supported for android';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var _closure1_slot10 = var0;
    var6 = function() {
        var0 = _closure1_slot8;
        return var0;
    };
    var _closure1_slot11 = var6;
    var5 = function arg0, arg1() {
        var6 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 5;
        var1 = var4[var1];
        var8 = undefined;
        var5 = var2.bind(var8)(var1);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.isFetchingGoogleSkus;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var4.bind(var5)(var2, var1);
        var _closure2_slot2 = var2;
        var5 = _closure1_slot5;
        var4 = var5.useRef;
        var1 = new Array(0);
        var1 = var4.bind(var5)(var1);
        var _closure2_slot3 = var1;
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var1 = null;
        var5 = var4.bind(var5)(var1);
        var4 = _closure1_slot4;
        var1 = 2;
        var5 = var4.bind(var8)(var5, var1);
        var1 = 0;
        var1 = var5[var1];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot4 = var4;
        var5 = _closure1_slot5;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var2;
        var3[2] = var6;
        var0 = function() { // Environment: var0
            var1 = function() {
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun85009: for (var _fun85009_ip = 0;;) switch (_fun85009_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun85009_ip = 315;
                                    continue _fun85009
                                }
                            case 10:
                                var1 = undefined;
                                var5 = undefined;
                                var2 = _closure2_slot1;
                                if (!var2) {
                                    _fun85009_ip = 38;
                                    continue _fun85009
                                }
                            case 24:
                                var4 = _closure2_slot3;
                                var2 = new Array(0);
                                var4.current = var2;
                            case 38:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var9 = 6;
                                var4 = var4[var9];
                                var8 = var6.bind(var1)(var4);
                                var7 = var8.difference;
                                var6 = _closure2_slot0;
                                var4 = _closure2_slot3;
                                var4 = var4.current;
                                var5 = var7.bind(var8)(var6, var4);
                                var4 = _closure2_slot2;
                                if (var4) {
                                    _fun85009_ip = 312;
                                    continue _fun85009
                                }
                            case 96:
                                var4 = _closure2_slot1;
                                if (var4) {
                                    _fun85009_ip = 312;
                                    continue _fun85009
                                }
                            case 106:
                                var4 = _closure2_slot0;
                                var4 = var4.length;
                                var6 = 0;
                                if (!(var6 !== var4)) {
                                    _fun85009_ip = 312;
                                    continue _fun85009
                                }
                            case 124:
                                var4 = var5;
                                var4 = var4.length;
                                if (!(var6 !== var4)) {
                                    _fun85009_ip = 312;
                                    continue _fun85009
                                }
                            case 139: // try_start_0
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 7;
                                var4 = var7[var4];
                                var7 = var6.bind(var1)(var4);
                                var6 = var7.loadInAppSkus;
                                var4 = var5;
                                var4 = var6.bind(var7)(var4);
                                SaveGenerator(address = 177);
                            case 175:
                                return var4;
                            case 177:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun85009_ip = 240;
                                    continue _fun85009
                                }
                            case 183:
                                var6 = _closure2_slot3;
                                var8 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var7 = var7[var9];
                                var9 = var8.bind(var1)(var7);
                                var8 = var9.union;
                                var7 = var6.current;
                                var5 = var8.bind(var9)(var7, var5);
                                var6.current = var5;
                                var6 = _closure2_slot4;
                                var5 = null;
                                var5 = var6.bind(var1)(var5);
                            case 238: // try_end0
                                _fun85009_ip = 312;
                                continue _fun85009;
                            case 240:
                                return var4;
                            case 243: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var7 = _closure1_slot7;
                                var6 = var7.error;
                                var5 = 'Unable to fetch product IDs from google play store: ';
                                var5 = var6.bind(var7)(var5, var4);
                                var5 = _closure2_slot4;
                                var3 = 'Unable to fetch';
                                var3 = var5.bind(var1)(var3);
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 8;
                                var2 = var5[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.captureBillingException;
                                var2 = var2.bind(var3)(var4);
                            case 312:
                                return var1;
                            case 315:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot0 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot0 = var1;
            var1 = function() {
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = !var1;
            return var0;
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = {};
        var0.isFetchingGoogleSkus = var2;
        var0.fetchError = var1;
        return var0;
    };
    var4 = function arg0() {
        var0 = {};
        var2 = _closure1_slot9;
        var0.resubscribeSubscription = var2;
        var2 = _closure1_slot11;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.nativePaymentsConnected;
        var0.nativePaymentsConnected = var1;
        return var0;
    };
    var3 = function arg0, arg1() {
        var0 = {};
        var2 = _closure1_slot9;
        var0.cancelSubscription = var2;
        var2 = _closure1_slot11;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.nativePaymentsConnected;
        var0.nativePaymentsConnected = var1;
        return var0;
    };
    var1 = function arg0() {
        _fun85013: for (var _fun85013_ip = 0;;) switch (_fun85013_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun85013_ip = 46;
                    continue _fun85013
                }
            case 9:
                var0 = {};
                var3 = _closure1_slot10;
                var0.createSubscription = var3;
                var3 = _closure1_slot11;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var2 = var2.nativePaymentsConnected;
                var0.nativePaymentsConnected = var2;
                return var0;
            case 46:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var7);
    var0 = 0;
    var7 = var10[var0];
    var0 = undefined;
    var7 = var11.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var11.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var12 = var10[var7];
    var7 = arg3;
    var7 = var7.bind(var0)(var12);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var11.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var10[var7];
    var12 = var11.bind(var0)(var7);
    var7 = var12.prototype;
    var11 = Object.create(var7, {
        constructor: {
            value: var12
        }
    });
    var16 = 'NativePaymentHooks.android.tsx';
    var17 = var11;
    var7 = new var17[var12](var16, var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot7 = var7;
    var7 = {
        'nativePaymentsConnected': true,
        'storeFront': null
    };
    var _closure1_slot8 = var7;
    var7 = {};
    var7.useNativeIAPPayments = var6;
    var7.useGoogleSkuIds = var5;
    var7.useCreateSubscription = var1;
    var7.useCancelSubscription = var3;
    var7.useResubscribeSubscription = var4;
    var8 = 9;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/payments/native/hooks/NativePaymentHooks.android.tsx';
    var8 = var9.bind(var10)(var8);
    var2.default = var7;
    var2.useNativeIAPPayments = var6;
    var2.useGoogleSkuIds = var5;
    var2.useResubscribeSubscription = var4;
    var2.useCancelSubscription = var3;
    var2.useCreateSubscription = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 4611, 3, 566, 22, 7177, 3127, 2]);