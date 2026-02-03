// stores/ApplicationStreamingSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun32034: for (var _fun32034_ip = 0;;) switch (_fun32034_ip) {
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
                _fun32034_ip = 74;
                continue _fun32034;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7.value = var1;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.ApplicationStreamResolutions;
    var7 = var9.ApplicationStreamFPS;
    var9 = var9.ApplicationStreamPresets;
    var _closure1_slot5 = var9;
    var10 = 6;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.MediaEngineContextTypes;
    var _closure1_slot6 = var10;
    var9 = var9.PRESET_VIDEO;
    var _closure1_slot7 = var9;
    var8 = var8.RESOLUTION_720;
    var _closure1_slot8 = var8;
    var7 = var7.FPS_30;
    var _closure1_slot9 = var7;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun32038: for (var _fun32038_ip = 0;;) switch (_fun32038_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun32038_ip = 69;
                        continue _fun32038
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun32038_ip = 105;
                    continue _fun32038;
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
            _fun32039: for (var _fun32039_ip = 0;;) switch (_fun32039_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun32039_ip = 79;
                        continue _fun32039
                    }
                case 9:
                    var3 = var2.preset;
                    if (!(var0 == var3)) {
                        _fun32039_ip = 32;
                        continue _fun32039
                    }
                case 19:
                    var1 = _closure1_slot5;
                    var3 = var1.PRESET_VIDEO;
                case 32:
                    _closure1_slot7 = var3;
                    var3 = var2.resolution;
                    _closure1_slot8 = var3;
                    var3 = var2.fps;
                    _closure1_slot9 = var3;
                    var2 = var2.soundshareEnabled;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun32039_ip = 75;
                        continue _fun32039
                    }
                case 72:
                    var0 = var2;
                case 75:
                    _closure1_slot10 = var0;
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var2 = _closure1_slot7;
            var0.preset = var2;
            var2 = _closure1_slot8;
            var0.resolution = var2;
            var2 = _closure1_slot9;
            var0.fps = var2;
            var1 = _closure1_slot10;
            var0.soundshareEnabled = var1;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ApplicationStreamingSettingsStore';
    var7.displayName = var1;
    var1 = 'ApplicationStreamingSettingStore';
    var7.persistKey = var1;
    var1 = 8;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun32041: for (var _fun32041_ip = 0;;) switch (_fun32041_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var3 = null;
                var2 = var3 == var1;
                var5 = undefined;
                if (var2) {
                    _fun32041_ip = 25;
                    continue _fun32041
                }
            case 20:
                var5 = var1.context;
            case 25:
                var4 = _closure1_slot6;
                var4 = var4.STREAM;
                if (!(var5 === var4)) {
                    _fun32041_ip = 182;
                    continue _fun32041
                }
            case 45:
                var4 = var3 == var1;
                var0 = undefined;
                if (var4) {
                    _fun32041_ip = 60;
                    continue _fun32041
                }
            case 54:
                var0 = var1.qualityOptions;
            case 60:
                if (!(var3 != var0)) {
                    _fun32041_ip = 182;
                    continue _fun32041
                }
            case 64:
                var4 = _closure1_slot7;
                var0 = var1.qualityOptions;
                var3 = var0.preset;
                var0 = false;
                if (!(var4 !== var3)) {
                    _fun32041_ip = 104;
                    continue _fun32041
                }
            case 86:
                var3 = var1.qualityOptions;
                var3 = var3.preset;
                _closure1_slot7 = var3;
                var0 = true;
            case 104:
                var4 = _closure1_slot8;
                var3 = var1.qualityOptions;
                var3 = var3.resolution;
                if (!(var4 !== var3)) {
                    _fun32041_ip = 142;
                    continue _fun32041
                }
            case 124:
                var3 = var1.qualityOptions;
                var3 = var3.resolution;
                _closure1_slot8 = var3;
                var0 = true;
            case 142:
                var4 = _closure1_slot9;
                var3 = var1.qualityOptions;
                var3 = var3.frameRate;
                if (!(var4 !== var3)) {
                    _fun32041_ip = 180;
                    continue _fun32041
                }
            case 162:
                var1 = var1.qualityOptions;
                var1 = var1.frameRate;
                _closure1_slot9 = var1;
                var0 = true;
            case 180:
                return var0;
            case 182:
                var0 = false;
                return var0;
        }
    };
    var1.MEDIA_ENGINE_SET_GO_LIVE_SOURCE = var8;
    var3 = function arg0() {
        _fun32042: for (var _fun32042_ip = 0;;) switch (_fun32042_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.preset;
                var5 = var0.resolution;
                var4 = var0.frameRate;
                var2 = var0.soundshareEnabled;
                var1 = null;
                var3 = var1 != var6;
                if (!var3) {
                    _fun32042_ip = 47;
                    continue _fun32042
                }
            case 36:
                var0 = _closure1_slot7;
                var3 = var6 !== var0;
            case 47:
                var0 = false;
                if (!var3) {
                    _fun32042_ip = 61;
                    continue _fun32042
                }
            case 52:
                _closure1_slot7 = var6;
                var0 = true;
            case 61:
                var3 = var1 != var5;
                if (!var3) {
                    _fun32042_ip = 79;
                    continue _fun32042
                }
            case 68:
                var6 = _closure1_slot8;
                var3 = var5 !== var6;
            case 79:
                if (!var3) {
                    _fun32042_ip = 91;
                    continue _fun32042
                }
            case 82:
                _closure1_slot8 = var5;
                var0 = true;
            case 91:
                var3 = var1 != var4;
                if (!var3) {
                    _fun32042_ip = 109;
                    continue _fun32042
                }
            case 98:
                var5 = _closure1_slot9;
                var3 = var4 !== var5;
            case 109:
                if (!var3) {
                    _fun32042_ip = 121;
                    continue _fun32042
                }
            case 112:
                _closure1_slot9 = var4;
                var0 = true;
            case 121:
                var1 = var1 != var2;
                if (!var1) {
                    _fun32042_ip = 139;
                    continue _fun32042
                }
            case 128:
                var3 = _closure1_slot10;
                var1 = var2 !== var3;
            case 139:
                if (!var1) {
                    _fun32042_ip = 151;
                    continue _fun32042
                }
            case 142:
                _closure1_slot10 = var2;
                var0 = true;
            case 151:
                return var0;
        }
    };
    var1.STREAM_UPDATE_SETTINGS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ApplicationStreamingSettingsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3493, 3501, 566, 806, 2]);