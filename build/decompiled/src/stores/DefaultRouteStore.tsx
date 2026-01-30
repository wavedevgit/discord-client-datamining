// stores/DefaultRouteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun27714: for (var _fun27714_ip = 0;;) switch (_fun27714_ip) {
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
                _fun27714_ip = 74;
                continue _fun27714;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Routes;
    var _closure1_slot7 = var1;
    var1 = {
        'lastViewedPath': null,
        'lastViewedNonVoicePath': null
    };
    var _closure1_slot8 = var1;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: DefaultRouteStore, environment: var5
            _fun27718: for (var _fun27718_ip = 0;;) switch (_fun27718_ip) {
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
                        _fun27718_ip = 69;
                        continue _fun27718
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun27718_ip = 105;
                    continue _fun27718;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun27719: for (var _fun27719_ip = 0;;) switch (_fun27719_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun27719_ip = 16;
                        continue _fun27719
                    }
                case 9:
                    var2 = _closure1_slot8;
                case 16:
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun27719_ip = 29;
                        continue _fun27719
                    }
                case 22:
                    var2 = _closure1_slot8;
                case 29:
                    _closure1_slot9 = var2;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'defaultRoute';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27720: for (var _fun27720_ip = 0;;) switch (_fun27720_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var0 = var0.lastViewedPath;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27720_ip = 29;
                        continue _fun27720
                    }
                case 19:
                    var1 = _closure1_slot7;
                    var0 = var1.ME;
                case 29:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'lastNonVoiceRoute';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27721: for (var _fun27721_ip = 0;;) switch (_fun27721_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var0 = var0.lastViewedNonVoicePath;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun27721_ip = 29;
                        continue _fun27721
                    }
                case 19:
                    var1 = _closure1_slot7;
                    var0 = var1.ME;
                case 29:
                    return var0;
            }
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'fallbackRoute';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot7;
            var0 = var0.ME;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'DefaultRouteStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(1);
    var8 = function() { // Environment: var3
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 7;
        var1 = var5[var0];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var7 = var1.Storage;
        var6 = var7.get;
        var3 = 'LAST_VIEWED_PATH';
        var1 = null;
        var1 = var6.bind(var7)(var3, var1);
        var0 = var5[var0];
        var0 = var4.bind(var2)(var0);
        var2 = var0.Storage;
        var0 = var2.remove;
        var0 = var0.bind(var2)(var3);
        var0 = {};
        var0.lastViewedPath = var1;
        return var0;
    };
    var1[0] = var8;
    var7.migrations = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleSaveRoute, environment: var3
        var0 = arg0;
        var1 = var0.path;
        var0 = _closure1_slot9;
        var0.lastViewedPath = var1;
        var0 = true;
        return var0;
    };
    var1.SAVE_LAST_ROUTE = var8;
    var3 = function(arg0) { // Original name: handleSaveLastNonVoiceRoute, environment: var3
        var0 = arg0;
        var1 = var0.path;
        var0 = _closure1_slot9;
        var0.lastViewedNonVoicePath = var1;
        var0 = true;
        return var0;
    };
    var1.SAVE_LAST_NON_VOICE_ROUTE = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/DefaultRouteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 566, 587, 806, 2]);