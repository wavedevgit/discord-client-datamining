// stores/native/MobileVoiceOverlayStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun68112: for (var _fun68112_ip = 0;;) switch (_fun68112_ip) {
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
                _fun68112_ip = 76;
                continue _fun68112;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var1 = function() {
        _fun68115: for (var _fun68115_ip = 0;;) switch (_fun68115_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun68115_ip = 71;
                    continue _fun68115
                }
            case 38:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isMetaQuest;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 71:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = false;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.DeviceSettingsStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun68117: for (var _fun68117_ip = 0;;) switch (_fun68117_ip) {
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
                        _fun68117_ip = 69;
                        continue _fun68117
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun68117_ip = 105;
                    continue _fun68117;
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
        var0 = 'getUserAgnosticState';
        var4.key = var0;
        var0 = function() {
            var0 = {};
            var1 = _closure1_slot9;
            var0.enabled = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function arg0() {
            _fun68119: for (var _fun68119_ip = 0;;) switch (_fun68119_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    var1 = undefined;
                    if (var4) {
                        _fun68119_ip = 21;
                        continue _fun68119
                    }
                case 16:
                    var1 = var3.enabled;
                case 21:
                    var2 = var2 != var1;
                    if (!var2) {
                        _fun68119_ip = 31;
                        continue _fun68119
                    }
                case 28:
                    var2 = var1;
                case 31:
                    _closure1_slot9 = var2;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getEnabled';
        var4.key = var6;
        var5 = function() {
            _fun68120: for (var _fun68120_ip = 0;;) switch (_fun68120_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    if (!var0) {
                        _fun68120_ip = 20;
                        continue _fun68120
                    }
                case 16:
                    var0 = _closure1_slot9;
                case 20:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'MobileVoiceOverlayStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = 10;
    var3 = var6[var3];
    var12 = var7.bind(var0)(var3);
    var3 = {};
    var4 = function arg0() {
        var1 = arg0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var5 = var6.track;
        var3 = _closure1_slot8;
        var4 = var3.MOBILE_OVERLAY_TOGGLED;
        var3 = {};
        var7 = var1.enabled;
        var3.enabled = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1 = var1.enabled;
        _closure1_slot9 = var1;
        return var0;
    };
    var3.MOBILE_VOICE_OVERLAY_STATE_CHANGED = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/native/MobileVoiceOverlayStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.isMobileOverlaySupported = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 795, 478, 4106, 566, 806, 2]);