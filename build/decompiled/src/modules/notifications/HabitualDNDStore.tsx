// modules/notifications/HabitualDNDStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun96009: for (var _fun96009_ip = 0;;) switch (_fun96009_ip) {
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
                _fun96009_ip = 76;
                continue _fun96009;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: hasBeenUsingDND, environment: var3
        _fun96012: for (var _fun96012_ip = 0;;) switch (_fun96012_ip) {
            case 0:
                var0 = _closure1_slot10;
                var2 = var0.length;
                var0 = 4;
                var0 = var2 >= var0;
                if (!var0) {
                    _fun96012_ip = 46;
                    continue _fun96012
                }
            case 22:
                var3 = _closure1_slot10;
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.Millis;
                    var2 = var0.DAY;
                    var0 = 3;
                    var0 = var0 * var2;
                    var1 = var1 - var0;
                    var0 = arg0;
                    var0 = var0 < var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 46:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.StatusTypes;
    var _closure1_slot9 = var1;
    var1 = new Array(0);
    var _closure1_slot10 = var1;
    var1 = false;
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: HabitualDNDStore, environment: var5
            _fun96015: for (var _fun96015_ip = 0;;) switch (_fun96015_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96015_ip = 69;
                        continue _fun96015
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96015_ip = 105;
                    continue _fun96015;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun96016: for (var _fun96016_ip = 0;;) switch (_fun96016_ip) {
                case 0:
                    var0 = arg0;
                    var4 = this;
                    var3 = var4.waitFor;
                    var2 = _closure1_slot8;
                    var2 = var3.bind(var4)(var2);
                    var2 = null;
                    var2 = var2 != var0;
                    if (!var2) {
                        _fun96016_ip = 57;
                        continue _fun96016
                    }
                case 33:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.isArray;
                    var3 = var0.sessionStartsWithDND;
                    var2 = var4.bind(var5)(var3);
                case 57:
                    if (!var2) {
                        _fun96016_ip = 70;
                        continue _fun96016
                    }
                case 60:
                    var0 = var0.sessionStartsWithDND;
                    _closure1_slot10 = var0;
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'showNagBar';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot10;
            var0.sessionStartsWithDND = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getTemp';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.StatusExpiresAtSetting;
            var1 = var2.getSetting;
            var1 = var1.bind(var2)();
            var0.x = var1;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'HabitualDNDStore';
    var7.displayName = var1;
    var1 = 'habitualDND';
    var7.persistKey = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleConnect, environment: var3
        _fun96020: for (var _fun96020_ip = 0;;) switch (_fun96020_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = var3.getStatus;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot9;
                var2 = var2.DND;
                if (!(var3 === var2)) {
                    _fun96020_ip = 81;
                    continue _fun96020
                }
            case 33:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var4 = var2.StatusExpiresAtSetting;
                var2 = var4.getSetting;
                var4 = var2.bind(var4)();
                var2 = '0';
                if (!(var2 !== var4)) {
                    _fun96020_ip = 94;
                    continue _fun96020
                }
            case 81:
                var2 = new Array(0);
                _closure1_slot10 = var2;
                _fun96020_ip = 219;
                continue _fun96020;
            case 94:
                var6 = _closure1_slot10;
                var5 = var6.push;
                var2 = global;
                var7 = var2.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var4 = var5.bind(var6)(var4);
                var6 = _closure1_slot10;
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var0
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.Millis;
                    var2 = var0.DAY;
                    var0 = 5;
                    var0 = var0 * var2;
                    var1 = var1 - var0;
                    var0 = arg0;
                    var0 = var0 > var1;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                _closure1_slot10 = var4;
                var4 = _closure1_slot13;
                var4 = var4.bind(var3)();
                if (!var4) {
                    _fun96020_ip = 219;
                    continue _fun96020
                }
            case 161:
                var2 = var2.setTimeout;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.Millis;
                var4 = var1.SECOND;
                var1 = 15;
                var1 = var1 * var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'HABITUAL_DND_CLEAR';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
            case 219:
                var0 = undefined;
                return var0;
        }
    };
    var1.POST_CONNECTION_OPEN = var8;
    var3 = function() { // Original name: handleDNDClear, environment: var3
        var1 = _closure1_slot13;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var1 = !var1;
        var1 = !var1;
        _closure1_slot11 = var1;
        var1 = new Array(0);
        _closure1_slot10 = var1;
        return var0;
    };
    var1.HABITUAL_DND_CLEAR = var3;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/HabitualDNDStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5615, 660, 667, 1348, 806, 566, 2]);