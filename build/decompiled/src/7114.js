// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeEventEmitter;
    var _closure1_slot2 = var3;
    var3 = function(arg0, arg1) { // Original name: purchaseUpdatedListener, environment: var1
        _fun58336: for (var _fun58336_ip = 0;;) switch (_fun58336_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var9 = _closure1_slot2;
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 1;
                var0 = var8[var5];
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var0 = var6.getNativeModule;
                var11 = var0.bind(var6)();
                var6 = var9.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var9
                    }
                });
                var12 = var6;
                var0 = new var12[var9](var11, var10);
                var6 = var0 instanceof Object ? var0 : var6;
                var0 = 2;
                var0 = var8[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.isIosStorekit2;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun58336_ip = 105;
                    continue _fun58336
                }
            case 100:
                var7 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.transactionSk2ToPurchaseMap;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
            case 105:
                var3 = var6.addListener;
                var0 = 'purchase-updated';
                var0 = var3.bind(var6)(var0, var7);
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.isAndroid;
                if (!var3) {
                    _fun58336_ip = 202;
                    continue _fun58336
                }
            case 149:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getAndroidModule;
                var3 = var2.bind(var3)();
                var2 = var3.startListening;
                var3 = var2.bind(var3)();
                var2 = var3.catch;
                var1 = function(arg0) { // Environment: var1
                    _fun58338: for (var _fun58338_ip = 0;;) switch (_fun58338_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun58338_ip = 15;
                                continue _fun58338
                            }
                        case 13:
                            throw var2;
                        case 15:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 202:
                return var0;
        }
    };
    var2.purchaseUpdatedListener = var3;
    var3 = function(arg0) { // Original name: purchaseErrorListener, environment: var1
        var2 = _closure1_slot2;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var0 = var1.getNativeModule;
        var5 = var0.bind(var1)();
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var3 = var0 instanceof Object ? var0 : var1;
        var2 = var3.addListener;
        var1 = 'purchase-error';
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.purchaseErrorListener = var3;
    var3 = function(arg0) { // Original name: promotedProductListener, environment: var1
        _fun58340: for (var _fun58340_ip = 0;;) switch (_fun58340_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 1;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.isIos;
                var0 = null;
                if (!var2) {
                    _fun58340_ip = 143;
                    continue _fun58340
                }
            case 36:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.isIosStorekit2;
                var2 = var2.bind(var6)();
                var0 = null;
                if (var2) {
                    _fun58340_ip = 143;
                    continue _fun58340
                }
            case 71:
                var3 = _closure1_slot2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getIosModule;
                var9 = var1.bind(var2)();
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var4 = var1 instanceof Object ? var1 : var2;
                var3 = var4.addListener;
                var2 = 'iap-promoted-product';
                var1 = arg0;
                var0 = var3.bind(var4)(var2, var1);
            case 143:
                return var0;
        }
    };
    var2.promotedProductListener = var3;
    var1 = function(arg0) { // Original name: transactionListener, environment: var1
        _fun58341: for (var _fun58341_ip = 0;;) switch (_fun58341_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 1;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.isIos;
                var0 = null;
                if (!var2) {
                    _fun58341_ip = 143;
                    continue _fun58341
                }
            case 36:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.isIosStorekit2;
                var2 = var2.bind(var6)();
                var0 = null;
                if (!var2) {
                    _fun58341_ip = 143;
                    continue _fun58341
                }
            case 71:
                var3 = _closure1_slot2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getIosModule;
                var9 = var1.bind(var2)();
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var4 = var1 instanceof Object ? var1 : var2;
                var3 = var4.addListener;
                var2 = 'iap-transaction-updated';
                var1 = arg0;
                var0 = var3.bind(var4)(var2, var1);
            case 143:
                return var0;
        }
    };
    var2.transactionListener = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 7104, 7102, 7115]);