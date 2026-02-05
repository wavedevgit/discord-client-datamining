// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportAll;
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
    var7 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.NativeModules;
    var7 = var7.Platform;
    var7 = var3.RNIapIos;
    var7 = var3.RNIapIosSk2;
    var7 = var3.RNIapModule;
    var _closure1_slot4 = var7;
    var3 = var3.RNIapAmazonModule;
    var _closure1_slot5 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ProductType;
    var7 = var7.subs;
    var _closure1_slot6 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ProductType;
    var3 = var3.inapp;
    var _closure1_slot7 = var3;
    var3 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var4 = var0.Object;
            var3 = var4.assign;
            var2 = {};
            var0 = _closure2_slot0;
            var2.platform = var0;
            var1 = {};
            var0 = arg0;
            var0 = var3.bind(var4)(var1, var0, var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var2.IapAndroid = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var2.IapAmazon = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var2.IapIos = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var2.IapIosSk2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isIosStorekit2;
    var2.isIosStorekit2 = var3;
    var3 = function() {
        _fun58463: for (var _fun58463_ip = 0;;) switch (_fun58463_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var2 = 0;
                if (!(var1 > var2)) {
                    _fun58463_ip = 21;
                    continue _fun58463
                }
            case 13:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun58463_ip = 25;
                    continue _fun58463
                }
            case 21:
                var1 = {};
                _fun58463_ip = 29;
                continue _fun58463;
            case 25:
                var1 = arguments[var2];
            case 29:
                var3 = var1.storekitMode;
                var1 = 'STOREKIT1_MODE';
                var2 = var1;
                if (!(var0 !== var3)) {
                    _fun58463_ip = 51;
                    continue _fun58463
                }
            case 48:
                var2 = var3;
            case 51:
                if (!(var1 !== var2)) {
                    _fun58463_ip = 145;
                    continue _fun58463
                }
            case 55:
                var1 = 'STOREKIT2_MODE';
                if (!(var1 !== var2)) {
                    _fun58463_ip = 110;
                    continue _fun58463
                }
            case 65:
                var1 = 'STOREKIT_HYBRID_MODE';
                if (!(var1 === var2)) {
                    _fun58463_ip = 178;
                    continue _fun58463
                }
            case 75:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.storekitHybridMode;
                var1 = var1.bind(var2)();
                _fun58463_ip = 178;
                continue _fun58463;
            case 110:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.storekit2Mode;
                var1 = var1.bind(var2)();
                _fun58463_ip = 178;
                continue _fun58463;
            case 145:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.storekit1Mode;
                var1 = var1.bind(var2)();
            case 178:
                return var0;
        }
    };
    var2.setup = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getNativeModule;
        var1 = var0.bind(var1)();
        var0 = var1.initConnection;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.initConnection = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getNativeModule;
        var1 = var0.bind(var1)();
        var0 = var1.endConnection;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.endConnection = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getAndroidModule;
        var1 = var0.bind(var1)();
        var0 = var1.flushFailedPurchasesCachedAsPending;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.flushFailedPurchasesCachedAsPendingAndroid = var3;
    var3 = function arg0() {
        _fun58467: for (var _fun58467_ip = 0;;) switch (_fun58467_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.skus;
                var _closure2_slot1 = var0;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun58467_ip = 29;
                    continue _fun58467
                }
            case 21:
                var0 = var0.length;
                if (var0) {
                    _fun58467_ip = 56;
                    continue _fun58467
                }
            case 29:
                var0 = global;
                var3 = var0.Promise;
                var2 = var3.reject;
                var0 = '"skus" is required';
                var0 = var2.bind(var3)(var0);
                _fun58467_ip = 88;
                continue _fun58467;
            case 56:
                var4 = _closure1_slot3;
                var2 = undefined;
                var3 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun58469: for (var _fun58469_ip = 0;;) switch (_fun58469_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58469_ip = 140;
                                    continue _fun58469
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var6 = 3;
                                var1 = var1[var6];
                                var5 = undefined;
                                var3 = var3.bind(var5)(var1);
                                var1 = var3.getAndroidModule;
                                var7 = var1.bind(var3)();
                                var4 = var7.getItemsByType;
                                var3 = _closure1_slot7;
                                var1 = _closure2_slot1;
                                var1 = var4.bind(var7)(var3, var1);
                                SaveGenerator(address = 72);
                            case 70:
                                return var1;
                            case 72:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun58469_ip = 137;
                                    continue _fun58469
                                }
                            case 78:
                                var7 = var1.map;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var4 = 4;
                                var4 = var2[var4];
                                var4 = var3.bind(var5)(var4);
                                var4 = var4.singleProductAndroidMap;
                                var4 = var7.bind(var1)(var4);
                                var2 = var2[var6];
                                var3 = var3.bind(var5)(var2);
                                var2 = var3.fillProductsWithAdditionalData;
                                var2 = var2.bind(var3)(var4);
                                return var2;
                            case 137:
                                return var1;
                            case 140:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var4.bind(var2)(var3);
                var _closure2_slot0 = var3;
                var1 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var1.bind(var2)();
            case 88:
                return var0;
        }
    };
    var2.getProducts = var3;
    var3 = function arg0() {
        _fun58471: for (var _fun58471_ip = 0;;) switch (_fun58471_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.skus;
                var _closure2_slot1 = var0;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun58471_ip = 29;
                    continue _fun58471
                }
            case 21:
                var0 = var0.length;
                if (var0) {
                    _fun58471_ip = 56;
                    continue _fun58471
                }
            case 29:
                var0 = global;
                var3 = var0.Promise;
                var2 = var3.reject;
                var0 = '"skus" is required';
                var0 = var2.bind(var3)(var0);
                _fun58471_ip = 88;
                continue _fun58471;
            case 56:
                var4 = _closure1_slot3;
                var2 = undefined;
                var3 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun58473: for (var _fun58473_ip = 0;;) switch (_fun58473_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58473_ip = 312;
                                    continue _fun58473
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var6 = 3;
                                var5 = var1[var6];
                                var4 = undefined;
                                var7 = var3.bind(var4)(var5);
                                var5 = var7.getAndroidModuleType;
                                var9 = var5.bind(var7)();
                                var1 = var1[var6];
                                var3 = var3.bind(var4)(var1);
                                var1 = var3.getAndroidModule;
                                var7 = var1.bind(var3)();
                                var5 = var7.getItemsByType;
                                var3 = _closure1_slot6;
                                var1 = _closure2_slot1;
                                var1 = var5.bind(var7)(var3, var1);
                                SaveGenerator(address = 91);
                            case 89:
                                return var1;
                            case 91:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun58473_ip = 309;
                                    continue _fun58473
                                }
                            case 100:
                                var3 = 'android';
                                if (!(var3 !== var9)) {
                                    _fun58473_ip = 264;
                                    continue _fun58473
                                }
                            case 111:
                                var3 = 'amazon';
                                if (!(var3 !== var9)) {
                                    _fun58473_ip = 178;
                                    continue _fun58473
                                }
                            case 119:
                                var3 = global;
                                var7 = var3.Error;
                                var3 = var3.HermesInternal;
                                var8 = var3.concat;
                                var5 = 'getSubscriptions received unknown platform ';
                                var3 = '. Verify the logic in getAndroidModuleType';
                                var11 = var8.bind(var5)(var9, var3);
                                var5 = var7.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var12 = var5;
                                var3 = new var12[var7](var11, var10);
                                var3 = var3 instanceof Object ? var3 : var5;
                                throw var3;
                            case 178:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var5 = var5.bind(var4)(var3);
                                var3 = var5.fillProductsWithAdditionalData;
                                var3 = var3.bind(var5)(var1);
                                SaveGenerator(address = 210);
                            case 208:
                                return var3;
                            case 210:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun58473_ip = 261;
                                    continue _fun58473
                                }
                            case 216:
                                var6 = _closure1_slot8;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 2;
                                var5 = var8[var5];
                                var5 = var7.bind(var4)(var5);
                                var5 = var5.SubscriptionPlatform;
                                var5 = var5.amazon;
                                var5 = var6.bind(var4)(var3, var5);
                                return var5;
                            case 261:
                                return var3;
                            case 264:
                                var3 = _closure1_slot8;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 2;
                                var2 = var6[var2];
                                var2 = var5.bind(var4)(var2);
                                var2 = var2.SubscriptionPlatform;
                                var2 = var2.android;
                                var2 = var3.bind(var4)(var1, var2);
                                return var2;
                            case 309:
                                return var1;
                            case 312:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var4.bind(var2)(var3);
                var _closure2_slot0 = var3;
                var1 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var1.bind(var2)();
            case 88:
                return var0;
        }
    };
    var2.getSubscriptions = var3;
    var3 = function() {
        _fun58475: for (var _fun58475_ip = 0;;) switch (_fun58475_ip) {
            case 0:
                var1 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var3 = 0;
                if (!(var2 > var3)) {
                    _fun58475_ip = 23;
                    continue _fun58475
                }
            case 15:
                var2 = arguments[var3];
                if (!(var1 === var2)) {
                    _fun58475_ip = 27;
                    continue _fun58475
                }
            case 23:
                var2 = {};
                _fun58475_ip = 31;
                continue _fun58475;
            case 27:
                var2 = arguments[var3];
            case 31:
                var3 = var2.alsoPublishToEventListener;
                var3 = var2.automaticallyFinishRestoredTransactions;
                var2 = var2.onlyIncludeActiveItems;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun58477: for (var _fun58477_ip = 0;;) switch (_fun58477_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58477_ip = 124;
                                    continue _fun58477
                                }
                            case 7:
                                var2 = _closure1_slot5;
                                if (var2) {
                                    _fun58477_ip = 94;
                                    continue _fun58477
                                }
                            case 17:
                                var4 = _closure1_slot4;
                                var3 = var4.getPurchaseHistoryByType;
                                var2 = _closure1_slot7;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address = 40);
                            case 38:
                                return var2;
                            case 40:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun58477_ip = 91;
                                    continue _fun58477
                                }
                            case 46:
                                var5 = _closure1_slot4;
                                var4 = var5.getPurchaseHistoryByType;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address = 69);
                            case 67:
                                return var3;
                            case 69:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun58477_ip = 88;
                                    continue _fun58477
                                }
                            case 75:
                                var4 = var2.concat;
                                var4 = var4.bind(var2)(var3);
                                return var4;
                            case 88:
                                return var3;
                            case 91:
                                return var2;
                            case 94:
                                var2 = _closure1_slot5;
                                var1 = var2.getAvailableItems;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 112);
                            case 110:
                                return var1;
                            case 112:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun58477_ip = 121;
                                    continue _fun58477
                                }
                            case 118:
                                return var1;
                            case 121:
                                return var1;
                            case 124:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var3.bind(var1)(var2);
                var _closure2_slot0 = var2;
                var0 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.getPurchaseHistory = var3;
    var3 = function() {
        _fun58479: for (var _fun58479_ip = 0;;) switch (_fun58479_ip) {
            case 0:
                var1 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var3 = 0;
                if (!(var2 > var3)) {
                    _fun58479_ip = 23;
                    continue _fun58479
                }
            case 15:
                var2 = arguments[var3];
                if (!(var1 === var2)) {
                    _fun58479_ip = 27;
                    continue _fun58479
                }
            case 23:
                var2 = {};
                _fun58479_ip = 31;
                continue _fun58479;
            case 27:
                var2 = arguments[var3];
            case 31:
                var3 = var2.alsoPublishToEventListener;
                var3 = var2.automaticallyFinishRestoredTransactions;
                var2 = var2.onlyIncludeActiveItems;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun58481: for (var _fun58481_ip = 0;;) switch (_fun58481_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58481_ip = 124;
                                    continue _fun58481
                                }
                            case 7:
                                var2 = _closure1_slot5;
                                if (var2) {
                                    _fun58481_ip = 94;
                                    continue _fun58481
                                }
                            case 17:
                                var4 = _closure1_slot4;
                                var3 = var4.getAvailableItemsByType;
                                var2 = _closure1_slot7;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address = 40);
                            case 38:
                                return var2;
                            case 40:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun58481_ip = 91;
                                    continue _fun58481
                                }
                            case 46:
                                var5 = _closure1_slot4;
                                var4 = var5.getAvailableItemsByType;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address = 69);
                            case 67:
                                return var3;
                            case 69:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun58481_ip = 88;
                                    continue _fun58481
                                }
                            case 75:
                                var4 = var2.concat;
                                var4 = var4.bind(var2)(var3);
                                return var4;
                            case 88:
                                return var3;
                            case 91:
                                return var2;
                            case 94:
                                var2 = _closure1_slot5;
                                var1 = var2.getAvailableItems;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 112);
                            case 110:
                                return var1;
                            case 112:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun58481_ip = 121;
                                    continue _fun58481
                                }
                            case 118:
                                return var1;
                            case 121:
                                return var1;
                            case 124:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var3.bind(var1)(var2);
                var _closure2_slot0 = var2;
                var0 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.getAvailablePurchases = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot3;
        var1 = undefined;
        var2 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58485: for (var _fun58485_ip = 0;;) switch (_fun58485_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58485_ip = 290;
                            continue _fun58485
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var13 = undefined;
                        var2 = var3.bind(var13)(var2);
                        var3 = var2.isAmazon;
                        var4 = _closure2_slot0;
                        if (var3) {
                            _fun58485_ip = 210;
                            continue _fun58485
                        }
                    case 54:
                        var3 = 'skus';
                        var3 = var3 in var4;
                        if (!var3) {
                            _fun58485_ip = 83;
                            continue _fun58485
                        }
                    case 65:
                        var3 = _closure2_slot0;
                        var3 = var3.skus;
                        var3 = var3.length;
                        if (var3) {
                            _fun58485_ip = 119;
                            continue _fun58485
                        }
                    case 83:
                        var3 = global;
                        var6 = var3.Error;
                        var3 = var6.prototype;
                        var5 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var21 = 'skus is required for Android purchase';
                        var22 = var5;
                        var3 = new var22[var6](var21, var20);
                        var3 = var3 instanceof Object ? var3 : var5;
                        throw var3;
                    case 119:
                        var3 = _closure2_slot0;
                        var12 = var3.skus;
                        var11 = var3.obfuscatedAccountIdAndroid;
                        var10 = var3.obfuscatedProfileIdAndroid;
                        var3 = var3.isOfferPersonalized;
                        var9 = _closure1_slot4;
                        var8 = var9.buyItemByType;
                        var7 = _closure1_slot7;
                        var5 = null;
                        var6 = var5 != var3;
                        if (!var6) {
                            _fun58485_ip = 173;
                            continue _fun58485
                        }
                    case 170:
                        var6 = var3;
                    case 173:
                        var18 = -1;
                        var15 = new Array(0);
                        var22 = var9;
                        var21 = var7;
                        var20 = var12;
                        var19 = undefined;
                        var17 = var11;
                        var16 = var10;
                        var14 = var6;
                        var3 = var22[var8](var21, var20, var19, var18, var17, var16, var15, var14, var13);
                        return var3;
                    case 210:
                        var3 = 'sku';
                        var3 = var3 in var4;
                        if (var3) {
                            _fun58485_ip = 257;
                            continue _fun58485
                        }
                    case 221:
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var21 = 'sku is required for Amazon purchase';
                        var22 = var4;
                        var3 = new var22[var5](var21, var20);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 257:
                        var2 = _closure2_slot0;
                        var4 = var2.sku;
                        var3 = _closure1_slot5;
                        var2 = var3.buyItemByType;
                        var1 = '';
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    case 290:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var3.bind(var1)(var2);
        var _closure2_slot1 = var2;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.requestPurchase = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot3;
        var1 = undefined;
        var2 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58489: for (var _fun58489_ip = 0;;) switch (_fun58489_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58489_ip = 416;
                            continue _fun58489
                        }
                    case 12:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var5 = undefined;
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.isAmazon;
                        var4 = _closure2_slot0;
                        if (var3) {
                            _fun58489_ip = 299;
                            continue _fun58489
                        }
                    case 56:
                        var3 = 'subscriptionOffers';
                        var3 = var3 in var4;
                        if (!var3) {
                            _fun58489_ip = 263;
                            continue _fun58489
                        }
                    case 70:
                        var3 = _closure2_slot0;
                        var3 = var3.subscriptionOffers;
                        var6 = var3.length;
                        var3 = 0;
                        if (!(var3 !== var6)) {
                            _fun58489_ip = 263;
                            continue _fun58489
                        }
                    case 94:
                        var3 = _closure2_slot0;
                        var17 = var3.subscriptionOffers;
                        var13 = var3.purchaseTokenAndroid;
                        var3 = var3.replacementModeAndroid;
                        var12 = -1;
                        if (!(var5 !== var3)) {
                            _fun58489_ip = 133;
                            continue _fun58489
                        }
                    case 130:
                        var12 = var3;
                    case 133:
                        var3 = _closure2_slot0;
                        var11 = var3.obfuscatedAccountIdAndroid;
                        var10 = var3.obfuscatedProfileIdAndroid;
                        var14 = var3.isOfferPersonalized;
                        var9 = _closure1_slot4;
                        var8 = var9.buyItemByType;
                        var7 = _closure1_slot6;
                        var3 = null;
                        var16 = var3 == var17;
                        var6 = undefined;
                        if (var16) {
                            _fun58489_ip = 195;
                            continue _fun58489
                        }
                    case 180:
                        var18 = var17.map;
                        var16 = function(arg0) { // Environment: var15
                            var0 = arg0;
                            var0 = var0.sku;
                            return var0;
                        };
                        var6 = var18.bind(var17)(var16);
                    case 195:
                        var16 = var3 == var17;
                        var5 = undefined;
                        if (var16) {
                            _fun58489_ip = 219;
                            continue _fun58489
                        }
                    case 204:
                        var16 = var17.map;
                        var15 = function(arg0) { // Environment: var15
                            var0 = arg0;
                            var0 = var0.offerToken;
                            return var0;
                        };
                        var5 = var16.bind(var17)(var15);
                    case 219:
                        var3 = var3 != var14;
                        if (!var3) {
                            _fun58489_ip = 229;
                            continue _fun58489
                        }
                    case 226:
                        var3 = var14;
                    case 229:
                        var27 = var9;
                        var26 = var7;
                        var25 = var6;
                        var24 = var13;
                        var23 = var12;
                        var22 = var11;
                        var21 = var10;
                        var20 = var5;
                        var19 = var3;
                        var3 = var27[var8](var26, var25, var24, var23, var22, var21, var20, var19, var18);
                        return var3;
                    case 263:
                        var3 = global;
                        var6 = var3.Error;
                        var3 = var6.prototype;
                        var5 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var26 = 'subscriptionOffers are required for Google Play subscriptions';
                        var27 = var5;
                        var3 = new var27[var6](var26, var25);
                        var3 = var3 instanceof Object ? var3 : var5;
                        throw var3;
                    case 299:
                        var3 = 'sku';
                        var3 = var3 in var4;
                        if (var3) {
                            _fun58489_ip = 346;
                            continue _fun58489
                        }
                    case 310:
                        var3 = global;
                        var5 = var3.Error;
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var26 = 'sku is required for Amazon subscriptions';
                        var27 = var4;
                        var3 = new var27[var5](var26, var25);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 346:
                        var5 = _closure2_slot0;
                        var4 = var5.sku;
                        var3 = 'prorationModeAmazon';
                        var6 = var3 in var5;
                        var5 = '';
                        var3 = var5;
                        if (!var6) {
                            _fun58489_ip = 397;
                            continue _fun58489
                        }
                    case 376:
                        var2 = _closure2_slot0;
                        var2 = var2.prorationModeAmazon;
                        if (var2) {
                            _fun58489_ip = 394;
                            continue _fun58489
                        }
                    case 391:
                        var2 = var5;
                    case 394:
                        var3 = var2;
                    case 397:
                        var2 = _closure1_slot5;
                        var1 = var2.buyItemByType;
                        var1 = var1.bind(var2)(var4, var3);
                        return var1;
                    case 416:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var3.bind(var1)(var2);
        var _closure2_slot1 = var2;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.requestSubscription = var3;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.purchase;
        var _closure2_slot1 = var2;
        var2 = var1.isConsumable;
        var _closure2_slot2 = var2;
        var1 = var1.developerPayloadAndroid;
        var _closure2_slot3 = var1;
        var3 = _closure1_slot3;
        var1 = undefined;
        var2 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58495: for (var _fun58495_ip = 0;;) switch (_fun58495_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58495_ip = 370;
                            continue _fun58495
                        }
                    case 10:
                        var2 = _closure2_slot1;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun58495_ip = 36;
                            continue _fun58495
                        }
                    case 23:
                        var1 = _closure2_slot1;
                        var1 = var1.purchaseToken;
                        if (var1) {
                            _fun58495_ip = 92;
                            continue _fun58495
                        }
                    case 36:
                        var1 = global;
                        var4 = var1.Promise;
                        var2 = var4.reject;
                        var6 = var1.Error;
                        var1 = var6.prototype;
                        var5 = Object.create(var1, {
                            constructor: {
                                value: var6
                            }
                        });
                        var9 = 'purchase is not suitable to be purchased';
                        var10 = var5;
                        var1 = new var10[var6](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var5;
                        var1 = var2.bind(var4)(var1);
                        _fun58495_ip = 367;
                        continue _fun58495;
                    case 92:
                        var2 = _closure2_slot2;
                        if (var2) {
                            _fun58495_ip = 301;
                            continue _fun58495
                        }
                    case 102:
                        var2 = _closure2_slot1;
                        var2 = var2.userIdAmazon;
                        if (var2) {
                            _fun58495_ip = 238;
                            continue _fun58495
                        }
                    case 117:
                        var2 = _closure2_slot1;
                        var2 = var2.isAcknowledgedAndroid;
                        if (var2) {
                            _fun58495_ip = 185;
                            continue _fun58495
                        }
                    case 132:
                        var2 = _closure2_slot1;
                        var4 = var2.purchaseStateAndroid;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var5 = var5[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var2 = var2.PurchaseStateAndroid;
                        var2 = var2.PURCHASED;
                        if (!(var4 !== var2)) {
                            _fun58495_ip = 238;
                            continue _fun58495
                        }
                    case 185:
                        var2 = global;
                        var5 = var2.Promise;
                        var4 = var5.reject;
                        var7 = var2.Error;
                        var2 = var7.prototype;
                        var6 = Object.create(var2, {
                            constructor: {
                                value: var7
                            }
                        });
                        var9 = 'purchase is not suitable to be purchased';
                        var10 = var6;
                        var2 = new var10[var7](var9, var8);
                        var2 = var2 instanceof Object ? var2 : var6;
                        var2 = var4.bind(var5)(var2);
                        _fun58495_ip = 299;
                        continue _fun58495;
                    case 238:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 3;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.getAndroidModule;
                        var7 = var4.bind(var5)();
                        var6 = var7.acknowledgePurchase;
                        var4 = _closure2_slot1;
                        var5 = var4.purchaseToken;
                        var4 = _closure2_slot3;
                        var2 = var6.bind(var7)(var5, var4);
                    case 299:
                        _fun58495_ip = 364;
                        continue _fun58495;
                    case 301:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 3;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.getAndroidModule;
                        var6 = var4.bind(var5)();
                        var5 = var6.consumeProduct;
                        var4 = _closure2_slot1;
                        var4 = var4.purchaseToken;
                        var3 = _closure2_slot3;
                        var2 = var5.bind(var6)(var4, var3);
                    case 364:
                        var1 = var2;
                    case 367:
                        return var1;
                    case 370:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var3.bind(var1)(var2);
        var _closure2_slot0 = var2;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.finishTransaction = var3;
    var3 = function arg0() {
        _fun58497: for (var _fun58497_ip = 0;;) switch (_fun58497_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.sku;
                var _closure2_slot1 = var2;
                var3 = var1.isAmazonDevice;
                var1 = undefined;
                var2 = var1 === var3;
                if (var2) {
                    _fun58497_ip = 33;
                    continue _fun58497
                }
            case 30:
                var2 = var3;
            case 33:
                var _closure2_slot2 = var2;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun58499: for (var _fun58499_ip = 0;;) switch (_fun58499_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58499_ip = 199;
                                    continue _fun58499
                                }
                            case 10:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 3;
                                var3 = var3[var1];
                                var1 = undefined;
                                var3 = var4.bind(var1)(var3);
                                var3 = var3.isAmazon;
                                if (var3) {
                                    _fun58499_ip = 151;
                                    continue _fun58499
                                }
                            case 44:
                                var3 = _closure2_slot1;
                                if (var3) {
                                    _fun58499_ip = 107;
                                    continue _fun58499
                                }
                            case 54:
                                var3 = global;
                                var5 = var3.Promise;
                                var4 = var5.reject;
                                var8 = var3.Error;
                                var3 = var8.prototype;
                                var7 = Object.create(var3, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var9 = 'Sku is required to locate subscription in Android Store';
                                var10 = var7;
                                var3 = new var10[var8](var9, var8);
                                var3 = var3 instanceof Object ? var3 : var7;
                                var3 = var4.bind(var5)(var3);
                                _fun58499_ip = 196;
                                continue _fun58499;
                            case 107:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 6;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.deepLinkToSubscriptionsAndroid;
                                var3 = {};
                                var6 = _closure2_slot1;
                                var3.sku = var6;
                                var3 = var4.bind(var5)(var3);
                                _fun58499_ip = 196;
                                continue _fun58499;
                            case 151:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 5;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.deepLinkToSubscriptionsAmazon;
                                var2 = {};
                                var5 = _closure2_slot2;
                                var2.isAmazonDevice = var5;
                                var2 = var3.bind(var4)(var2);
                            case 196:
                                return var1;
                            case 199:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var3.bind(var1)(var2);
                var _closure2_slot0 = var2;
                var0 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.deepLinkToSubscriptions = var3;
    var1 = function() {
        var3 = _closure1_slot3;
        var1 = undefined;
        var2 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58503: for (var _fun58503_ip = 0;;) switch (_fun58503_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58503_ip = 40;
                            continue _fun58503
                        }
                    case 7:
                        var2 = _closure1_slot4;
                        var1 = var2.getStorefront;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 28);
                    case 26:
                        return var1;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58503_ip = 37;
                            continue _fun58503
                        }
                    case 34:
                        return var1;
                    case 37:
                        return var1;
                    case 40:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var3.bind(var1)(var2);
        var _closure2_slot0 = var2;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.getStorefront = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 7165, 7166, 7171, 7172, 7173, 7174, 7175]);