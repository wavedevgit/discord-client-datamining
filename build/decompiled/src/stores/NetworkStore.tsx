// stores/NetworkStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun31960: for (var _fun31960_ip = 0;;) switch (_fun31960_ip) {
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
                _fun31960_ip = 74;
                continue _fun31960;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun31963: for (var _fun31963_ip = 0;;) switch (_fun31963_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.type;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun31963_ip = 29;
                    continue _fun31963
                }
            case 14:
                var0 = _closure1_slot7;
                var2 = var0.UNKNOWN;
                _fun31963_ip = 34;
                continue _fun31963;
            case 29:
                var2 = var1.type;
            case 34:
                _closure1_slot9 = var2;
                var2 = var1.effectiveSpeed;
                if (!(var3 == var2)) {
                    _fun31963_ip = 61;
                    continue _fun31963
                }
            case 51:
                var3 = _closure1_slot8;
                var2 = var3.UNKNOWN;
            case 61:
                _closure1_slot10 = var2;
                var1 = var1.serviceProvider;
                _closure1_slot11 = var1;
                var1 = _closure1_slot12;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var7 = var1.NetworkConnectionTypes;
    var _closure1_slot7 = var7;
    var1 = var1.NetworkConnectionSpeeds;
    var _closure1_slot8 = var1;
    var7 = var7.UNKNOWN;
    var _closure1_slot9 = var7;
    var1 = var1.UNKNOWN;
    var _closure1_slot10 = var1;
    var1 = null;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun31965: for (var _fun31965_ip = 0;;) switch (_fun31965_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31965_ip = 69;
                        continue _fun31965
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31965_ip = 105;
                    continue _fun31965;
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
        var0 = function() {
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var5 = var4[var1];
            var0 = undefined;
            var6 = var2.bind(var0)(var5);
            var5 = var6.getNetworkInformation;
            var6 = var5.bind(var6)();
            var5 = var6.then;
            var3 = _closure1_slot14;
            var5 = var5.bind(var6)(var3);
            var1 = var4[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.addChangeCallback;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getType';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getEffectiveConnectionSpeed';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getServiceProvider';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'NetworkStore';
    var8.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = var8.prototype;
    var6 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var10 = {};
    var12 = var6;
    var1 = new var12[var8](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot12 = var1;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/NetworkStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 1444, 566, 806, 2]);