// modules/collectibles/CollectiblesMarketingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun42455: for (var _fun42455_ip = 0;;) switch (_fun42455_ip) {
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
                _fun42455_ip = 74;
                continue _fun42455;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var3 = 'NOT_FETCHED';
    var1.NOT_FETCHED = var3;
    var3 = 'FETCHING';
    var1.FETCHING = var3;
    var3 = 'FETCHED';
    var1.FETCHED = var3;
    var _closure1_slot5 = var1;
    var3 = {};
    var _closure1_slot6 = var3;
    var3 = var1.NOT_FETCHED;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: CollectiblesMarketingsStore, environment: var5
            _fun42459: for (var _fun42459_ip = 0;;) switch (_fun42459_ip) {
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
                        _fun42459_ip = 69;
                        continue _fun42459
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun42459_ip = 105;
                    continue _fun42459;
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
        var0 = 'getMarketingBySurface';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot6;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'fetchState';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'CollectiblesMarketingsStore';
    var7.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function() { // Original name: COLLECTIBLES_MARKETING_FETCH, environment: var4
        var0 = _closure1_slot5;
        var0 = var0.FETCHING;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var3.COLLECTIBLES_MARKETING_FETCH = var8;
    var8 = function(arg0) { // Original name: COLLECTIBLES_MARKETING_FETCH_SUCCESS, environment: var4
        var0 = arg0;
        var0 = var0.marketings;
        var0 = var0.marketingsBySurfaces;
        _closure1_slot6 = var0;
        var0 = _closure1_slot5;
        var0 = var0.FETCHED;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var3.COLLECTIBLES_MARKETING_FETCH_SUCCESS = var8;
    var4 = function() { // Original name: LOGOUT, environment: var4
        var0 = {};
        _closure1_slot6 = var0;
        var0 = _closure1_slot5;
        var0 = var0.NOT_FETCHED;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var12 = var4;
    var10 = var3;
    var3 = new var12[var7](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/CollectiblesMarketingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);