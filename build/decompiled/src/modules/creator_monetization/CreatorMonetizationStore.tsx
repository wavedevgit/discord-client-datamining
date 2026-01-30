// modules/creator_monetization/CreatorMonetizationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun95921: for (var _fun95921_ip = 0;;) switch (_fun95921_ip) {
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
            case 72: // try_end0
                _fun95921_ip = 76;
                continue _fun95921;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var8 = 1;
    var3 = var5[var8];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = var1.Map;
    var10 = var3.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var3
        }
    });
    var14 = var10;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var10;
    var _closure1_slot5 = var3;
    var1 = var1.Map;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var14 = var3;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot6 = var1;
    var1 = {};
    var1.NOT_FETCHED = var9;
    var3 = 'NOT_FETCHED';
    var1[var9] = var3;
    var1.FETCHING = var8;
    var3 = 'FETCHING';
    var1[var8] = var3;
    var1.FETCHED = var7;
    var3 = 'FETCHED';
    var1[var7] = var3;
    var _closure1_slot7 = var1;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: CreatorMonetizationStore, environment: var5
            _fun95925: for (var _fun95925_ip = 0;;) switch (_fun95925_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95925_ip = 69;
                        continue _fun95925
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95925_ip = 105;
                    continue _fun95925;
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
        var0 = 'getPriceTiersFetchStateForGuildAndType';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun95926: for (var _fun95926_ip = 0;;) switch (_fun95926_ip) {
                case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.get;
                    var0 = arg0;
                    var5 = var2.bind(var3)(var0);
                    var2 = null;
                    var3 = var2 == var5;
                    var0 = undefined;
                    if (var3) {
                        _fun95926_ip = 44;
                        continue _fun95926
                    }
                case 31:
                    var4 = var5.get;
                    var3 = arg1;
                    var0 = var4.bind(var5)(var3);
                case 44:
                    if (!(var2 == var0)) {
                        _fun95926_ip = 58;
                        continue _fun95926
                    }
                case 48:
                    var1 = _closure1_slot7;
                    var0 = var1.NOT_FETCHED;
                case 58:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getPriceTiersForGuildAndType';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun95927: for (var _fun95927_ip = 0;;) switch (_fun95927_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun95927_ip = 44;
                        continue _fun95927
                    }
                case 31:
                    var2 = var3.get;
                    var1 = arg1;
                    var0 = var2.bind(var3)(var1);
                case 44:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'CreatorMonetizationStore';
    var7.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function() { // Original name: handleConnectionOpen, environment: var4
        var2 = _closure1_slot5;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot6;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleFetchPriceTiers, environment: var4
        _fun95929: for (var _fun95929_ip = 0;;) switch (_fun95929_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.priceTierType;
                var2 = _closure1_slot6;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun95929_ip = 77;
                    continue _fun95929
                }
            case 34:
                var5 = _closure1_slot6;
                var2 = var5.set;
                var1 = global;
                var1 = var1.Map;
                var6 = var1.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var6;
                var1 = new var9[var1](var8);
                var1 = var1 instanceof Object ? var1 : var6;
                var1 = var2.bind(var5)(var4, var1);
            case 77:
                var2 = _closure1_slot6;
                var1 = var2.get;
                var2 = var1.bind(var2)(var4);
                var1 = var2.set;
                var0 = _closure1_slot7;
                var0 = var0.FETCHING;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
        }
    };
    var3.CREATOR_MONETIZATION_PRICE_TIERS_FETCH = var8;
    var8 = function(arg0) { // Original name: handleFetchPriceTiersSuccess, environment: var4
        _fun95930: for (var _fun95930_ip = 0;;) switch (_fun95930_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.priceTierType;
                var2 = var0.priceTiers;
                var5 = _closure1_slot6;
                var1 = var5.has;
                var1 = var1.bind(var5)(var4);
                if (var1) {
                    _fun95930_ip = 83;
                    continue _fun95930
                }
            case 40:
                var6 = _closure1_slot6;
                var5 = var6.set;
                var1 = global;
                var1 = var1.Map;
                var7 = var1.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var7;
                var1 = new var10[var1](var9);
                var1 = var1 instanceof Object ? var1 : var7;
                var1 = var5.bind(var6)(var4, var1);
            case 83:
                var5 = _closure1_slot6;
                var1 = var5.get;
                var6 = var1.bind(var5)(var4);
                var5 = var6.set;
                var1 = _closure1_slot7;
                var1 = var1.FETCHED;
                var1 = var5.bind(var6)(var3, var1);
                var5 = _closure1_slot5;
                var1 = var5.has;
                var1 = var1.bind(var5)(var4);
                if (var1) {
                    _fun95930_ip = 178;
                    continue _fun95930
                }
            case 135:
                var6 = _closure1_slot5;
                var5 = var6.set;
                var1 = global;
                var1 = var1.Map;
                var7 = var1.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var7;
                var1 = new var10[var1](var9);
                var1 = var1 instanceof Object ? var1 : var7;
                var1 = var5.bind(var6)(var4, var1);
            case 178:
                var1 = _closure1_slot5;
                var0 = var1.get;
                var1 = var0.bind(var1)(var4);
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
                var0 = undefined;
                return var0;
        }
    };
    var3.CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS = var8;
    var4 = function(arg0) { // Original name: handleFetchPriceTiersFailure, environment: var4
        _fun95931: for (var _fun95931_ip = 0;;) switch (_fun95931_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.priceTierType;
                var2 = _closure1_slot6;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun95931_ip = 77;
                    continue _fun95931
                }
            case 34:
                var5 = _closure1_slot6;
                var2 = var5.set;
                var1 = global;
                var1 = var1.Map;
                var6 = var1.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var6;
                var1 = new var9[var1](var8);
                var1 = var1 instanceof Object ? var1 : var6;
                var1 = var2.bind(var5)(var4, var1);
            case 77:
                var2 = _closure1_slot6;
                var1 = var2.get;
                var2 = var1.bind(var2)(var4);
                var1 = var2.set;
                var0 = _closure1_slot7;
                var0 = var0.FETCHED;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
        }
    };
    var3.CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var7](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization/CreatorMonetizationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);