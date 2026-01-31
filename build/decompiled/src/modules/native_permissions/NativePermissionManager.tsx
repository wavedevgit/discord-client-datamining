// modules/native_permissions/NativePermissionManager.tsx
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
        _fun37034: for (var _fun37034_ip = 0;;) switch (_fun37034_ip) {
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
                _fun37034_ip = 74;
                continue _fun37034;
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
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativePermissionTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InputModes;
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: NativePermissionManager, environment: var5
            _fun37038: for (var _fun37038_ip = 0;;) switch (_fun37038_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun37038_ip = 69;
                        continue _fun37038
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun37038_ip = 105;
                    continue _fun37038;
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
        var0 = 'isEnabled';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun37039: for (var _fun37039_ip = 0;;) switch (_fun37039_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var5 = 7;
                    var0 = var0[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isDesktop;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun37039_ip = 65;
                        continue _fun37039
                    }
                case 38:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isMac;
                    var0 = var2.bind(var4)();
                case 65:
                    if (!var0) {
                        _fun37039_ip = 107;
                        continue _fun37039
                    }
                case 68:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ProcessArgs;
                    var1 = var2.isDiscordTestSet;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 107:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = '_initialize';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun37040: for (var _fun37040_ip = 0;;) switch (_fun37040_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isEnabled;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun37040_ip = 63;
                        continue _fun37040
                    }
                case 16:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.subscribe;
                    var1 = var0.handleAudioSetMode;
                    var0 = 'AUDIO_SET_MODE';
                    var0 = var2.bind(var3)(var0, var1);
                case 63:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun37041: for (var _fun37041_ip = 0;;) switch (_fun37041_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isEnabled;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun37041_ip = 63;
                        continue _fun37041
                    }
                case 16:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.unsubscribe;
                    var1 = var0.handleAudioSetMode;
                    var0 = 'AUDIO_SET_MODE';
                    var0 = var2.bind(var3)(var0, var1);
                case 63:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleAudioSetMode';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun37042: for (var _fun37042_ip = 0;;) switch (_fun37042_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.mode;
                    var1 = _closure1_slot9;
                    var1 = var1.PUSH_TO_TALK;
                    if (!(var2 === var1)) {
                        _fun37042_ip = 73;
                        continue _fun37042
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.default;
                    var1 = var2.requestPermission;
                    var0 = _closure1_slot8;
                    var0 = var0.INPUT_MONITORING;
                    var0 = var1.bind(var2)(var0);
                case 73:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_permissions/NativePermissionManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3973, 660, 478, 3976, 806, 3974, 3977, 2]);