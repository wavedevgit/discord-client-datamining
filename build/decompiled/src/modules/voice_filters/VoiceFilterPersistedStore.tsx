// modules/voice_filters/VoiceFilterPersistedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun30841: for (var _fun30841_ip = 0;;) switch (_fun30841_ip) {
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
                _fun30841_ip = 74;
                continue _fun30841;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var1 = {};
    var7 = false;
    var1.lastInitAttemptMayHaveCrashed = var7;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun30845: for (var _fun30845_ip = 0;;) switch (_fun30845_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30845_ip = 69;
                        continue _fun30845
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30845_ip = 105;
                    continue _fun30845;
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
        var0 = function arg0() {
            _fun30846: for (var _fun30846_ip = 0;;) switch (_fun30846_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun30846_ip = 16;
                        continue _fun30846
                    }
                case 9:
                    _closure1_slot7 = var1;
                case 16:
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
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastInitAttemptMayHaveCrashed';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot7;
            var0 = var0.lastInitAttemptMayHaveCrashed;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'VoiceFilterPersistedStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        _fun30849: for (var _fun30849_ip = 0;;) switch (_fun30849_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.state;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 6;
                var2 = var0[var5];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.VoiceFilterNativeModuleState;
                var2 = var2.LOADING;
                if (!(var2 !== var3)) {
                    _fun30849_ip = 162;
                    continue _fun30849
                }
            case 49:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var0)(var2);
                var2 = var2.VoiceFilterNativeModuleState;
                var2 = var2.LOADED;
                if (!(var2 !== var3)) {
                    _fun30849_ip = 148;
                    continue _fun30849
                }
            case 82:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var0)(var2);
                var2 = var2.VoiceFilterNativeModuleState;
                var2 = var2.FAILED;
                if (!(var2 !== var3)) {
                    _fun30849_ip = 148;
                    continue _fun30849
                }
            case 115:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var0)(var2);
                var2 = var2.VoiceFilterNativeModuleState;
                var2 = var2.UNSUPPORTED;
                if (!(var2 === var3)) {
                    _fun30849_ip = 174;
                    continue _fun30849
                }
            case 148:
                var3 = _closure1_slot7;
                var2 = false;
                var3.lastInitAttemptMayHaveCrashed = var2;
                _fun30849_ip = 174;
                continue _fun30849;
            case 162:
                var2 = _closure1_slot7;
                var1 = true;
                var2.lastInitAttemptMayHaveCrashed = var1;
            case 174:
                return var0;
        }
    };
    var1.VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE = var3;
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_filters/VoiceFilterPersistedStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 3474, 806, 2]);