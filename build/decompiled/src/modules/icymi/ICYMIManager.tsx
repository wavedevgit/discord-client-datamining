// modules/icymi/ICYMIManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun98947: for (var _fun98947_ip = 0;;) switch (_fun98947_ip) {
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
                _fun98947_ip = 76;
                continue _fun98947;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function() { // Original name: fetchDehydratedData, environment: var1
        _fun98950: for (var _fun98950_ip = 0;;) switch (_fun98950_ip) {
            case 0:
                var5 = arguments[0];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun98950_ip = 11;
                    continue _fun98950
                }
            case 9:
                var5 = false;
            case 11:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var4 = var3.bind(var0)(var1);
                var3 = var4.fetchDehydrated;
                var1 = {};
                var1.isInitialLoad = var5;
                var1 = var3.bind(var4)(var1);
                var3 = _closure1_slot8;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun98950_ip = 79;
                    continue _fun98950
                }
            case 62:
                var1 = global;
                var3 = var1.clearTimeout;
                var1 = _closure1_slot8;
                var1 = var3.bind(var0)(var1);
            case 79:
                var1 = global;
                var4 = var1.setTimeout;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.Millis;
                var3 = var1.MINUTE;
                var1 = 15;
                var3 = var1 * var3;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot10;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var4.bind(var0)(var1, var3);
                _closure1_slot8 = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = null;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: ICYMIManager, environment: var5
            _fun98953: for (var _fun98953_ip = 0;;) switch (_fun98953_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun98953_ip = 69;
                        continue _fun98953
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun98953_ip = 105;
                    continue _fun98953;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.subscribe;
            var1 = this;
            var2 = var1.handlePostConnectionOpen;
            var1 = 'POST_CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.unsubscribe;
            var1 = this;
            var2 = var1.handlePostConnectionOpen;
            var1 = 'POST_CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handlePostConnectionOpen';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun98956: for (var _fun98956_ip = 0;;) switch (_fun98956_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.getICYMIEnabled;
                    var3 = 'ICYMIManager';
                    var2 = false;
                    var2 = var4.bind(var5)(var3, var2);
                    if (!var2) {
                        _fun98956_ip = 108;
                        continue _fun98956
                    }
                case 48:
                    var3 = _closure1_slot10;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var4 = var3[var1];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.getGuildChannelScores;
                    var4 = var4.bind(var5)();
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRecommendedGuilds;
                    var1 = var1.bind(var2)();
                case 108:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/ICYMIManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8828, 667, 806, 8822, 3971, 2]);