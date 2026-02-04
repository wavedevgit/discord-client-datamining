// modules/collectibles/native/useHandleBuyNow.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'useHandleBuyNow';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.product;
        var _closure2_slot0 = var6;
        var8 = var0.analyticsLocations;
        var7 = var0.onBuy;
        var _closure2_slot1 = var7;
        var9 = undefined;
        var _closure2_slot3 = var9;
        var _closure2_slot4 = var9;
        var0 = function() {
            var3 = undefined;
            var0 = undefined;
            var2 = _closure1_slot3;
            var1 = function*() { // Environment: var1
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun87865: for (var _fun87865_ip = 0;;) switch (_fun87865_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun87865_ip = 201;
                                continue _fun87865
                            }
                        case 10:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.fetchCollectiblesPurchases;
                            var1 = {};
                            var7 = _closure2_slot4;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 7;
                            var8 = var10[var8];
                            var8 = var9.bind(var2)(var8);
                            var8 = var8.ShopVariantsReturnStyle;
                            if (var7) {
                                _fun87865_ip = 87;
                                continue _fun87865
                            }
                        case 79:
                            var7 = var8.INDIVIDUAL_PRODUCTS;
                            _fun87865_ip = 93;
                            continue _fun87865;
                        case 87:
                            var7 = var8.VARIANTS_GROUP;
                        case 93:
                            var1.variantsReturnStyle = var7;
                            var1 = var4.bind(var5)(var1);
                            SaveGenerator(address = 107);
                        case 105:
                            return var1;
                        case 107:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun87865_ip = 198;
                                continue _fun87865
                            }
                        case 113:
                            var5 = _closure2_slot3;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var3 = var5[var3];
                            var7 = var4.bind(var2)(var3);
                            var3 = var7.hideActionSheet;
                            var3 = var3.bind(var7)();
                            var3 = 9;
                            var3 = var5[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.open;
                            var3 = {};
                            var6 = _closure2_slot0;
                            var3.product = var6;
                            var6 = true;
                            var3.useCategoryImage = var6;
                            var3 = var4.bind(var5)(var3);
                            return var2;
                        case 198:
                            return var1;
                        case 201:
                            return var0;
                    }
                };
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            _closure2_slot6 = var3;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var _closure2_slot6 = var0;
        var5 = _closure1_slot5;
        var1 = var5.useState;
        var0 = false;
        var4 = var1.bind(var5)(var0);
        var1 = _closure1_slot4;
        var0 = 2;
        var4 = var1.bind(var9)(var4, var0);
        var0 = 0;
        var1 = var4[var0];
        var _closure2_slot2 = var1;
        var0 = 1;
        var0 = var4[var0];
        _closure2_slot3 = var0;
        var4 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 4;
        var0 = var10[var0];
        var11 = var4.bind(var9)(var0);
        var4 = var11.useEnableMobileVariants;
        var0 = 'useHandleBuyNow';
        var0 = var4.bind(var11)(var0);
        _closure2_slot4 = var0;
        var4 = _closure1_slot1;
        var0 = 5;
        var0 = var10[var0];
        var4 = var4.bind(var9)(var0);
        var0 = {};
        var0.product = var6;
        var0.analyticsLocations = var8;
        var8 = function() {
            var0 = undefined;
            var3 = _closure2_slot6;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.onPurchaseComplete = var8;
        var8 = function() {
            var2 = _closure2_slot3;
            var0 = undefined;
            var1 = false;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.onPurchaseError = var8;
        var8 = function() {
            var0 = undefined;
            return var0;
        };
        var0.onPurchasePending = var8;
        var8 = var4.bind(var9)(var0);
        var _closure2_slot5 = var8;
        var0 = {};
        var4 = var5.useCallback;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87870: for (var _fun87870_ip = 0;;) switch (_fun87870_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87870_ip = 226;
                            continue _fun87870
                        }
                    case 10: // try_start_0
                        var1 = _closure2_slot2;
                        if (var1) {
                            _fun87870_ip = 74;
                            continue _fun87870
                        }
                    case 20:
                        var4 = _closure2_slot3;
                        var3 = undefined;
                        var1 = true;
                        var1 = var4.bind(var3)(var1);
                        var1 = _closure2_slot5;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 45);
                    case 43:
                        return var1;
                    case 45:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun87870_ip = 71;
                            continue _fun87870
                        }
                    case 51:
                        var5 = _closure2_slot1;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun87870_ip = 74;
                            continue _fun87870
                        }
                    case 61:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var3)();
                        _fun87870_ip = 74;
                        continue _fun87870;
                    case 71: // try_end0
                        return var1;
                    case 74:
                        _fun87870_ip = 221;
                        continue _fun87870;
                    case 79: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var2 = _closure2_slot3;
                        var3 = undefined;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var7 = _closure1_slot6;
                        var5 = var7.error;
                        var2 = global;
                        var9 = var2.JSON;
                        var8 = var9.stringify;
                        var9 = var8.bind(var9)(var4);
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var2 = 'Error running purchase: ';
                        var2 = var8.bind(var2)(var9);
                        var2 = var5.bind(var7)(var2);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 10;
                        var1 = var5[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.captureBillingException;
                        var1 = {};
                        var5 = {};
                        var7 = 'useHandleBuyNow';
                        var5.source = var7;
                        var6 = _closure2_slot0;
                        var6 = var6.skuId;
                        var5.skuId = var6;
                        var1.tags = var5;
                        var1 = var2.bind(var3)(var4, var1);
                    case 221:
                        var1 = undefined;
                        return var1;
                    case 226:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var9)(var2);
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var1;
        var2[2] = var7;
        var6 = var6.skuId;
        var2[3] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var0.handleBuyNow = var2;
        var0.isBuying = var1;
        return var0;
    };
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/useHandleBuyNow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.useHandleBuyNow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3, 5729, 11250, 4597, 4649, 3278, 9544, 3125, 2]);