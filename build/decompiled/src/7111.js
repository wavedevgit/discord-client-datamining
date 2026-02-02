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
    var8 = true;
    var5.value = var8;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var5 = var3.NativeModules;
    var3 = var3.Platform;
    var3 = var5.RNIapIos;
    var _closure1_slot2 = var3;
    var4 = var5.RNIapIosSk2;
    var _closure1_slot3 = var4;
    var4 = var5.RNIapModule;
    var _closure1_slot4 = var4;
    var5 = var5.RNIapAmazonModule;
    var _closure1_slot5 = var5;
    var7 = !var5;
    var6 = !var4;
    var _closure1_slot6 = var4;
    var5 = function() {
        _fun58315: for (var _fun58315_ip = 0;;) switch (_fun58315_ip) {
            case 0:
                var1 = _closure1_slot4;
                if (var1) {
                    _fun58315_ip = 81;
                    continue _fun58315
                }
            case 10:
                var1 = _closure1_slot5;
                if (var1) {
                    _fun58315_ip = 81;
                    continue _fun58315
                }
            case 17:
                var1 = global;
                var2 = var1.Error;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var0 = var0.ErrorCode;
                var4 = var0.E_IAP_NOT_AVAILABLE;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 81:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function() {
        _fun58316: for (var _fun58316_ip = 0;;) switch (_fun58316_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var0 = _closure1_slot6;
                if (var0) {
                    _fun58316_ip = 34;
                    continue _fun58316
                }
            case 20:
                var1 = _closure1_slot4;
                if (var1) {
                    _fun58316_ip = 31;
                    continue _fun58316
                }
            case 27:
                var1 = _closure1_slot5;
            case 31:
                var0 = var1;
            case 34:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var _closure1_slot9 = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var _closure1_slot10 = var3;
    var9 = false;
    var2.isIos = var9;
    var2.isAndroid = var8;
    var7 = !var7;
    var2.isAmazon = var7;
    var6 = !var6;
    var2.isPlay = var6;
    var6 = function arg0() {
        var0 = arg0;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setAndroidNativeModule = var6;
    var2.checkNativeAndroidAvailable = var5;
    var2.getAndroidModule = var4;
    var4 = function() {
        _fun58319: for (var _fun58319_ip = 0;;) switch (_fun58319_ip) {
            case 0:
                var2 = _closure1_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = _closure1_slot4;
                if (!(var2 !== var1)) {
                    _fun58319_ip = 39;
                    continue _fun58319
                }
            case 21:
                var0 = _closure1_slot5;
                if (!(var0 !== var1)) {
                    _fun58319_ip = 33;
                    continue _fun58319
                }
            case 29:
                var0 = null;
                return var0;
            case 33:
                var0 = 'amazon';
                return var0;
            case 39:
                var0 = 'android';
                return var0;
        }
    };
    var2.getAndroidModuleType = var4;
    var4 = function() {
        var1 = _closure1_slot8;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var2.getNativeModule = var4;
    var2.isStorekit2Available = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.isIosStorekit2 = var3;
    var3 = function arg0() {
        var0 = arg0;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setIosNativeModule = var3;
    var3 = function() {
        var1 = _closure1_slot3;
        _closure1_slot9 = var1;
        var1 = _closure1_slot10;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = true;
        return var0;
    };
    var2.storekit2Mode = var3;
    var3 = function() {
        var1 = _closure1_slot2;
        _closure1_slot9 = var1;
        var1 = _closure1_slot10;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = false;
        return var0;
    };
    var2.storekit1Mode = var3;
    var3 = function() {
        var2 = _closure1_slot10;
        var0 = undefined;
        var0 = var2.bind(var0)();
        var0 = _closure1_slot2;
        _closure1_slot9 = var0;
        var0 = global;
        var2 = var0.console;
        var1 = var2.info;
        var0 = 'Using Storekit 1';
        var0 = var1.bind(var2)(var0);
        var0 = true;
        return var0;
    };
    var2.storekitHybridMode = var3;
    var1 = function() {
        _fun58326: for (var _fun58326_ip = 0;;) switch (_fun58326_ip) {
            case 0:
                var0 = _closure1_slot2;
                if (var0) {
                    _fun58326_ip = 82;
                    continue _fun58326
                }
            case 10:
                var0 = _closure1_slot10;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var0 = global;
                var3 = var0.Error;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.ErrorCode;
                var6 = var0.E_IAP_NOT_AVAILABLE;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var1;
                var0 = new var7[var3](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 82:
                var0 = _closure1_slot9;
                if (var0) {
                    _fun58326_ip = 103;
                    continue _fun58326
                }
            case 89:
                var1 = _closure1_slot3;
                if (var1) {
                    _fun58326_ip = 100;
                    continue _fun58326
                }
            case 96:
                var1 = _closure1_slot2;
            case 100:
                var0 = var1;
            case 103:
                return var0;
        }
    };
    var2.getIosModule = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 7112]);