// modules/collectibles/CollectiblesPurchaseStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun42368: for (var _fun42368_ip = 0;;) switch (_fun42368_ip) {
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
                _fun42368_ip = 74;
                continue _fun42368;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot7 = var1;
    var _closure1_slot8 = var1;
    var1 = false;
    var _closure1_slot9 = var1;
    var _closure1_slot10 = var0;
    var _closure1_slot11 = var0;
    var _closure1_slot12 = var0;
    var _closure1_slot13 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun42372: for (var _fun42372_ip = 0;;) switch (_fun42372_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42372_ip = 69;
                        continue _fun42372
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42372_ip = 105;
                    continue _fun42372;
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
        var0 = 'isFetching';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'isClaiming';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'purchases';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'fetchError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'claimError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasPreviouslyFetched';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getPurchase';
        var4.key = var6;
        var6 = function arg0() {
            _fun42379: for (var _fun42379_ip = 0;;) switch (_fun42379_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var1 = var0 != var3;
                    var0 = undefined;
                    if (!var1) {
                        _fun42379_ip = 31;
                        continue _fun42379
                    }
                case 14:
                    var2 = _closure1_slot8;
                    var1 = var2.get;
                    var0 = var1.bind(var2)(var3);
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getPurchases';
        var4.key = var6;
        var5 = function arg0() {
            var3 = arg0;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot8;
                var1 = var2.get;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'CollectiblesPurchaseStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = true;
        _closure1_slot9 = var0;
        var0 = undefined;
        _closure1_slot11 = var0;
        return var0;
    };
    var1.COLLECTIBLES_PURCHASES_FETCH = var8;
    var8 = function arg0() {
        _fun42384: for (var _fun42384_ip = 0;;) switch (_fun42384_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.purchases;
                var1 = var1.length;
                var6 = 0;
                if (!(var6 !== var1)) {
                    _fun42384_ip = 152;
                    continue _fun42384
                }
            case 23:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.isEqual;
                var3 = _closure1_slot8;
                var2 = var3.values;
                var8 = var2.bind(var3)();
                var3 = new Array(0);
                var9 = var3;
                var7 = 0;
                var2 = arraySpread(var9, var8, var7);
                var2 = var0.purchases;
                var2 = var4.bind(var5)(var3, var2);
                if (var2) {
                    _fun42384_ip = 163;
                    continue _fun42384
                }
            case 95:
                var2 = global;
                var3 = var2.Map;
                var4 = var0.purchases;
                var2 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = var1.skuId;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var9 = var2.bind(var4)(var0);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var0 = new var10[var3](var9, var8);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot8 = var0;
                _fun42384_ip = 163;
                continue _fun42384;
            case 152:
                var0 = _closure1_slot7;
                _closure1_slot8 = var0;
            case 163:
                var0 = true;
                _closure1_slot13 = var0;
                var0 = false;
                _closure1_slot9 = var0;
                var0 = undefined;
                _closure1_slot11 = var0;
                return var0;
        }
    };
    var1.COLLECTIBLES_PURCHASES_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.error;
        var2 = _closure1_slot7;
        _closure1_slot8 = var2;
        var2 = false;
        _closure1_slot9 = var2;
        _closure1_slot11 = var0;
        var0 = true;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.COLLECTIBLES_PURCHASES_FETCH_FAILURE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.skuId;
        _closure1_slot10 = var0;
        var0 = undefined;
        _closure1_slot12 = var0;
        return var0;
    };
    var1.COLLECTIBLES_CLAIM = var8;
    var8 = function arg0() {
        _fun42388: for (var _fun42388_ip = 0;;) switch (_fun42388_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.purchases;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun42388_ip = 167;
                    continue _fun42388
                }
            case 18:
                var1 = var0.purchases;
                var1 = var1.length;
                var6 = 0;
                if (!(var6 !== var1)) {
                    _fun42388_ip = 167;
                    continue _fun42388
                }
            case 38:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.isEqual;
                var3 = _closure1_slot8;
                var2 = var3.values;
                var8 = var2.bind(var3)();
                var3 = new Array(0);
                var9 = var3;
                var7 = 0;
                var2 = arraySpread(var9, var8, var7);
                var2 = var0.purchases;
                var2 = var4.bind(var5)(var3, var2);
                if (var2) {
                    _fun42388_ip = 178;
                    continue _fun42388
                }
            case 110:
                var2 = global;
                var3 = var2.Map;
                var4 = var0.purchases;
                var2 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = var1.skuId;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var9 = var2.bind(var4)(var0);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var0 = new var10[var3](var9, var8);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot8 = var0;
                _fun42388_ip = 178;
                continue _fun42388;
            case 167:
                var0 = _closure1_slot7;
                _closure1_slot8 = var0;
            case 178:
                var0 = undefined;
                _closure1_slot10 = var0;
                _closure1_slot12 = var0;
                return var0;
        }
    };
    var1.COLLECTIBLES_CLAIM_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.error;
        var2 = var0.skuId;
        _closure1_slot10 = var2;
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var1.COLLECTIBLES_CLAIM_FAILURE = var8;
    var3 = function() {
        var0 = _closure1_slot7;
        _closure1_slot8 = var0;
        var1 = false;
        _closure1_slot9 = var1;
        var0 = undefined;
        _closure1_slot10 = var0;
        _closure1_slot11 = var0;
        _closure1_slot12 = var0;
        _closure1_slot13 = var1;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/CollectiblesPurchaseStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 22, 566, 806, 2]);