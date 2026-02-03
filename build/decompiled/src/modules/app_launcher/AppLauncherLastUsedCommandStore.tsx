// modules/app_launcher/AppLauncherLastUsedCommandStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun107825: for (var _fun107825_ip = 0;;) switch (_fun107825_ip) {
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
                _fun107825_ip = 76;
                continue _fun107825;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Millis;
    var6 = var1.MINUTE;
    var1 = 10;
    var1 = var1 * var6;
    var _closure1_slot5 = var1;
    var1 = {
        'lastUsedCommandId': null,
        'lastUsedTimeMs': null
    };
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun107829: for (var _fun107829_ip = 0;;) switch (_fun107829_ip) {
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
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun107829_ip = 69;
                        continue _fun107829
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun107829_ip = 105;
                    continue _fun107829;
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
        var0 = function arg0() {
            _fun107830: for (var _fun107830_ip = 0;;) switch (_fun107830_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun107830_ip = 40;
                        continue _fun107830
                    }
                case 9:
                    var1 = _closure1_slot6;
                    var2 = var0.lastUsedCommandId;
                    var1.lastUsedCommandId = var2;
                    var0 = var0.lastUsedTimeMs;
                    var1.lastUsedTimeMs = var0;
                case 40:
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
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastUsedCommandId';
        var4.key = var6;
        var5 = function() {
            _fun107832: for (var _fun107832_ip = 0;;) switch (_fun107832_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var4 = var0.bind(var1)();
                    var0 = _closure1_slot6;
                    var0 = var0.lastUsedTimeMs;
                    var3 = null;
                    var2 = var3 == var0;
                    var0 = null;
                    if (var2) {
                        _fun107832_ip = 108;
                        continue _fun107832
                    }
                case 41:
                    var2 = _closure1_slot6;
                    var2 = var2.lastUsedCommandId;
                    var2 = var3 == var2;
                    var0 = null;
                    if (var2) {
                        _fun107832_ip = 108;
                        continue _fun107832
                    }
                case 60:
                    var2 = _closure1_slot6;
                    var5 = var2.lastUsedTimeMs;
                    var2 = _closure1_slot5;
                    var2 = var5 + var2;
                    if (!(var4 > var2)) {
                        _fun107832_ip = 98;
                        continue _fun107832
                    }
                case 82:
                    var2 = _closure1_slot6;
                    var2.lastUsedCommandId = var3;
                    var2.lastUsedTimeMs = var3;
                case 98:
                    var1 = _closure1_slot6;
                    var0 = var1.lastUsedCommandId;
                case 108:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'AppLauncherLastUsedCommandStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.command;
        var1 = _closure1_slot6;
        var0 = var0.id;
        var1.lastUsedCommandId = var0;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        var1.lastUsedTimeMs = var0;
        var0 = undefined;
        return var0;
    };
    var1.APPLICATION_COMMAND_USED = var3;
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
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/AppLauncherLastUsedCommandStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 667, 566, 806, 2]);