// modules/game_update/GameUpdateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun118000: for (var _fun118000_ip = 0;;) switch (_fun118000_ip) {
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
                _fun118000_ip = 76;
                continue _fun118000;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var _closure1_slot5 = var1;
    var1 = 5;
    var6 = var4[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var6);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GameUpdateStore, environment: var5
            _fun118004: for (var _fun118004_ip = 0;;) switch (_fun118004_ip) {
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
                        _fun118004_ip = 69;
                        continue _fun118004
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun118004_ip = 105;
                    continue _fun118004;
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
        var0 = 'get';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot5;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'isLoading';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun118006: for (var _fun118006_ip = 0;;) switch (_fun118006_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun118006_ip = 31;
                        continue _fun118006
                    }
                case 25:
                    var1 = var2.loading;
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun118006_ip = 41;
                        continue _fun118006
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun118007: for (var _fun118007_ip = 0;;) switch (_fun118007_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun118007_ip = 30;
                        continue _fun118007
                    }
                case 25:
                    var1 = var2.error;
                case 30:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun118007_ip = 42;
                        continue _fun118007
                    }
                case 39:
                    var0 = var1;
                case 42:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GameUpdateStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleGameUpdateFetchStart, environment: var3
        var0 = arg0;
        var2 = var0.id;
        var1 = _closure1_slot5;
        var0 = {
            'loading': true,
            'update': null,
            'error': null
        };
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GAME_UPDATE_FETCH_START = var7;
    var7 = function(arg0) { // Original name: handleGameUpdateFetchSuccess, environment: var3
        var0 = arg0;
        var2 = var0.id;
        var3 = var0.update;
        var1 = _closure1_slot5;
        var0 = {
            'loading': false,
            'update': null,
            'error': null
        };
        var0.update = var3;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GAME_UPDATE_FETCH_SUCCESS = var7;
    var3 = function(arg0) { // Original name: handleGameUpdateFetchFailure, environment: var3
        _fun118010: for (var _fun118010_ip = 0;;) switch (_fun118010_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.id;
                var4 = var0.error;
                var2 = _closure1_slot5;
                var1 = {};
                var0 = false;
                var1.loading = var0;
                var6 = var2[var3];
                var0 = null;
                var7 = var0 == var6;
                var0 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun118010_ip = 52;
                    continue _fun118010
                }
            case 46:
                var5 = var6.update;
            case 52:
                var1.update = var5;
                var1.error = var4;
                var2[var3] = var1;
                return var0;
        }
    };
    var1.GAME_UPDATE_FETCH_FAILURE = var3;
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
    var3 = 'modules/game_update/GameUpdateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);