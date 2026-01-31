// modules/premium/gifting/GiftPromotionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun57541: for (var _fun57541_ip = 0;;) switch (_fun57541_ip) {
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
                _fun57541_ip = 74;
                continue _fun57541;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = {};
    var1.giftOptionsReceiptMap = var6;
    var _closure1_slot5 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GiftPromotionStore, environment: var5
            _fun57545: for (var _fun57545_ip = 0;;) switch (_fun57545_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun57545_ip = 69;
                        continue _fun57545
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun57545_ip = 105;
                    continue _fun57545;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun57546: for (var _fun57546_ip = 0;;) switch (_fun57546_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun57546_ip = 37;
                        continue _fun57546
                    }
                case 9:
                    var1 = _closure1_slot5;
                    var0 = {};
                    var3 = var2.giftOptionsReceiptMap;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var1.giftOptionsReceiptMap = var0;
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGiftOptionsForKey';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            var1 = var0.giftOptionsReceiptMap;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GiftPromotionStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = new Array(1);
    var7 = function(arg0) { // Environment: var3
        _fun57549: for (var _fun57549_ip = 0;;) switch (_fun57549_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                var0 = var3;
                if (!(var2 != var0)) {
                    _fun57549_ip = 40;
                    continue _fun57549
                }
            case 12:
                var1 = {};
                var3 = var3.giftOptionsReceiptMap;
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun57549_ip = 32;
                    continue _fun57549
                }
            case 29:
                var2 = var3;
            case 32:
                var1.giftOptionsReceiptMap = var2;
                var0 = var1;
            case 40:
                return var0;
        }
    };
    var1[0] = var7;
    var6.migrations = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() { // Original name: handleLogout, environment: var3
        var1 = {};
        var0 = {};
        var1.giftOptionsReceiptMap = var0;
        _closure1_slot5 = var1;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var7;
    var7 = function(arg0) { // Original name: handleCacheGiftOptions, environment: var3
        var0 = arg0;
        var2 = var0.key;
        var1 = var0.giftOptions;
        var0 = _closure1_slot5;
        var0 = var0.giftOptionsReceiptMap;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION = var7;
    var3 = function(arg0) { // Original name: handleClearCachedGiftOptions, environment: var3
        var0 = arg0;
        var1 = var0.key;
        var0 = _closure1_slot5;
        var0 = var0.giftOptionsReceiptMap;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var1.GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/gifting/GiftPromotionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);