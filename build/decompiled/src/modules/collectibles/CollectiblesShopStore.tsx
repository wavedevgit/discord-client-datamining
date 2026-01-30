// modules/collectibles/CollectiblesShopStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var7
        _fun42442: for (var _fun42442_ip = 0;;) switch (_fun42442_ip) {
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
                _fun42442_ip = 74;
                continue _fun42442;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
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
    var1 = new Array(0);
    var _closure1_slot6 = var1;
    var _closure1_slot7 = var1;
    var1 = null;
    var _closure1_slot8 = var1;
    var3 = function() { // Original name: handleClose, environment: var7
        var0 = _closure1_slot6;
        _closure1_slot7 = var0;
        var0 = null;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var7
        var3 = function() { // Original name: CollectiblesShopStore, environment: var5
            _fun42447: for (var _fun42447_ip = 0;;) switch (_fun42447_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42447_ip = 69;
                        continue _fun42447
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42447_ip = 105;
                    continue _fun42447;
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
        var0 = 'analyticsLocations';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'analyticsSource';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'initialProductSkuId';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot5;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAnalytics';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot7;
            var0.analyticsLocations = var2;
            var1 = _closure1_slot8;
            var0.analyticsSource = var1;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'CollectiblesShopStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: COLLECTIBLES_SHOP_OPEN, environment: var7
        _fun42452: for (var _fun42452_ip = 0;;) switch (_fun42452_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.analyticsLocations;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun42452_ip = 22;
                    continue _fun42452
                }
            case 15:
                var3 = _closure1_slot6;
            case 22:
                _closure1_slot7 = var3;
                var3 = var0.analyticsSource;
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun42452_ip = 47;
                    continue _fun42452
                }
            case 44:
                var2 = var3;
            case 47:
                _closure1_slot8 = var2;
                var0 = var0.initialProductSkuId;
                var _closure1_slot5 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.COLLECTIBLES_SHOP_OPEN = var8;
    var1.COLLECTIBLES_SHOP_CLOSE = var3;
    var7 = function(arg0) { // Original name: COLLECTIBLES_PRODUCT_DETAILS_OPEN, environment: var7
        _fun42453: for (var _fun42453_ip = 0;;) switch (_fun42453_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.skuId;
                var0 = _closure1_slot5;
                if (!(var2 === var0)) {
                    _fun42453_ip = 26;
                    continue _fun42453
                }
            case 20:
                var0 = undefined;
                _closure1_slot5 = var0;
            case 26:
                var0 = undefined;
                return var0;
        }
    };
    var1.COLLECTIBLES_PRODUCT_DETAILS_OPEN = var7;
    var1.LOGOUT = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/CollectiblesShopStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);