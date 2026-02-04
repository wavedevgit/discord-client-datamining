// modules/billing/native/GenericIAPStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun42235: for (var _fun42235_ip = 0;;) switch (_fun42235_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun42235_ip = 74;
                continue _fun42235;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = null;
    var _closure1_slot7 = var1;
    var7 = false;
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun42239: for (var _fun42239_ip = 0;;) switch (_fun42239_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42239_ip = 69;
                        continue _fun42239
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42239_ip = 105;
                    continue _fun42239;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'isGenericIapConnected';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasGenericSubscription';
        var4.key = var6;
        var6 = function() {
            _fun42241: for (var _fun42241_ip = 0;;) switch (_fun42241_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun42241_ip = 38;
                        continue _fun42241
                    }
                case 16:
                    var3 = _closure1_slot7;
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.identifier;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 5;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.ProductIds;
                        var0 = var0.GENERIC_SUBSCRIPTION;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getProducts';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getStoreFront';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GenericIAPStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.products;
        var1 = var0.storeFront;
        _closure1_slot7 = var2;
        _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.IAP_LOAD_GENERIC_PRODUCTS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.connected;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GENERIC_IAP_INIT_CONNECTION = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GENERIC_IAP_INIT_CONNECTION_FAILED = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GENERIC_IAP_END_CONNECTION = var8;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.storeFront;
        _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GENERIC_IAP_SET_STORE_FRONT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/billing/native/GenericIAPStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4608, 566, 806, 2]);