// stores/channel_notices/GuildMFAWarningStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun96214: for (var _fun96214_ip = 0;;) switch (_fun96214_ip) {
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
                _fun96214_ip = 76;
                continue _fun96214;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var8 = function() {
        _fun96217: for (var _fun96217_ip = 0;;) switch (_fun96217_ip) {
            case 0:
                var2 = _closure1_slot6;
                var0 = var2.getCurrentUser;
                var0 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var0)) {
                    _fun96217_ip = 50;
                    continue _fun96217
                }
            case 22:
                var3 = var0.mfaEnabled;
                var2 = _closure1_slot8;
                if (!(var3 !== var2)) {
                    _fun96217_ip = 50;
                    continue _fun96217
                }
            case 36:
                var0 = var0.mfaEnabled;
                _closure1_slot8 = var0;
                var0 = undefined;
                return var0;
            case 50:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot10 = var8;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
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
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MFALevels;
    var _closure1_slot7 = var1;
    var1 = null;
    var _closure1_slot8 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun96219: for (var _fun96219_ip = 0;;) switch (_fun96219_ip) {
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
                        _fun96219_ip = 69;
                        continue _fun96219
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96219_ip = 105;
                    continue _fun96219;
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
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot6;
            var4 = _closure1_slot5;
            var1 = var2.bind(var3)(var1, var4);
            var2 = var3.syncWith;
            var5 = _closure1_slot6;
            var1 = new Array(2);
            var1[0] = var5;
            var1[1] = var4;
            var0 = _closure1_slot10;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'isVisible';
        var4.key = var6;
        var5 = function arg0() {
            _fun96221: for (var _fun96221_ip = 0;;) switch (_fun96221_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun96221_ip = 35;
                        continue _fun96221
                    }
                case 12:
                    var3 = var1.mfaLevel;
                    var2 = _closure1_slot7;
                    var2 = var2.ELEVATED;
                    var0 = var3 === var2;
                case 35:
                    if (!var0) {
                        _fun96221_ip = 51;
                        continue _fun96221
                    }
                case 38:
                    var3 = _closure1_slot8;
                    var2 = false;
                    var0 = var2 === var3;
                case 51:
                    if (!var0) {
                        _fun96221_ip = 77;
                        continue _fun96221
                    }
                case 54:
                    var3 = _closure1_slot5;
                    var2 = var3.hasElevatedPermissions;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 77:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildMFAWarningStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var3 = function() {
        var0 = true;
        return var0;
    };
    var1.GUILD_UPDATE = var3;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/channel_notices/GuildMFAWarningStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1671, 1621, 660, 566, 806, 2]);